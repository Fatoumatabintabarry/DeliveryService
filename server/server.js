//install nodemon: keeps the backend server running
//install concurrently: runs the front end and the back end in one command
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
//import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

mongoose.connect('mongodb://127.0.0.1:27017/delivery', {useNewUrlParser: true})
.then(() => {
    console.log("db connected");
})
.catch(err => {
    console.log("error: db failed connection");
    console.log(err);
})


import bodyParser from 'body-parser'; // Import body-parser as ES module
import products from './data/products.js';

const app = express();
const port = 5000; // You should use only one port unless you have a good reason to use two.

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use('/api/products', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

// Corrected the order of req and res in the parameters
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product); // Send the found product instead of the whole products array
});

app.get('/api/quote', (req, res) => {
    res.send("From Server");
});

// Removed the redundant GET endpoint for '/api/quote' since we have a POST below.

app.post('/api/quote', (req, res) => {
    console.log(req.body);
    const { Height, Weight, SAddress, RAddress, Distance } = req.body;
    console.log(`Difference between the two addresses is ${Distance}`);
    // Send a response with the form data and a message. Only one response should be sent.
    res.json({ Height, Weight, SAddress, RAddress, Distance, message: "Form Submitted" });
});

// Listen on the same port as declared above, remove the second listen statement.
app.listen(port, () => console.log(`Server is running on port ${port}`));
