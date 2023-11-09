//install nodemon: keeps the backend server running
//install concurrently: runs the front end and the back end in one command
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
//import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
//import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

mongoose.connect('mongodb://127.0.0.1:27017/delivery', {useNewUrlParser: true})
.then(() => {
    console.log("db connected");
})
.catch(err => {
    console.log("error: db failed connection");
    console.log(err);
})


const port = 5000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use('/api/products', itemRoutes);
app.use('/api/users', userRoutes);
//app.use('/api/orders', orderRoutes);

app.get('/', (req,res) =>{
    res.send('API is running...');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

