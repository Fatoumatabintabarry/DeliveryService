import mongoose from "mongoose";
import Order from "../models/orderModel.js";

mongoose.connect('mongodb://127.0.0.1:27017/delivery', {useNewUrlParser: true})
    .then(() => {
        console.log("db connected");
    })
    .catch(err => {
        console.log("error: db failed connection");
        console.log(err);
    })

const seedOrders = [
    {
        user: new mongoose.Types.ObjectId(),
        orderItems: [
            {
                name: "Couch",
                qty: 1,
                price: 250,
                item: new mongoose.Types.ObjectId(),
            },
            {
                name: "Chair",
                qty: 1,
                price: 100,
                item: new mongoose.Types.ObjectId(),
            },
        ],
        shippingAddress: {
            address: "123 Fake Street",
            city: "Pointe-Claire",
            postalCode: "A4H 1Z5",
            country: "Canada",
        },
        paymentMethod: "Visa",
        // itemsPrice: 400,
        //taxPrice: 80,
        shippingCost: 40,
        //totalPrice: 500,
    },

    {
        user: new mongoose.Types.ObjectId(),
        orderItems: [
            {
                name: "Bike Helmet",
                qty: 1,
                price: 20,
                item: new mongoose.Types.ObjectId(),
            },
        ],
        shippingAddress: {
            address: "456 Main Street",
            city: "Montreal",
            postalCode: "Q2P 7L8",
            country: "Canada",
        },
        paymentMethod: "MasterCard",
        // itemsPrice: 20,
        // taxPrice: 3,
        shippingCost: 7,
        // totalPrice: 30,
    },
]


await Order.deleteMany({});
await Order.create(seedOrders);
mongoose.connection.close();