import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc    Create a new order
// @route   POST /api/orders/create
// @access  Public
const createOrder = asyncHandler(async (req, res) => {
  const { user, orderItems, shippingAddress, paymentMethod, shippingCost } = req.body;

  const order = await Order.create({
    user: user,
    orderItems: orderItems,
    shippingAddress: shippingAddress,
    paymentMethod: paymentMethod,
    shippingCost: shippingCost,
  });

  if(order){
    res.status(201).json({
      _id: order._id,//what do I send back, if anything?
    });
  }
  else {
      res.status(400);
      throw new Error('Invalid order data');
    }
  });

// @desc    Get all orders
// @route   GET /api/orders
// @access  Public
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});

// @desc    Delete order
// @route   DELETE /api/orders/:id
// @access  Public
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await Order.deleteOne({ _id: order._id });
    res.json({ message: 'Order removed' });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
})

// @desc    Update order
// @route   PUT /api/orders/:id
// @access  Public
const updateOrder = asyncHandler(async (req, res) => {
  const { user, orderItems, shippingAddress, paymentMethod, shippingCost } = req.body;
  const order = await Order.findById(req.params.id);

  if (order) {
    order.user = user;
    order.orderItems = orderItems;
    order.shippingAddress = shippingAddress;
    order.paymentMethod = paymentMethod;
    order.shippingCost = shippingCost;

    const updatedOrder = await order.save();

    res.json({
      _id: updatedOrder._id,//what do I send back, if anything?
    });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});









const getOrder = asyncHandler(async (req, res) => {

})

// @desc    Get all orders
// @route   GET /api/orders/user/:id
// @access  Public
const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user: req.params.id});
  res.json(orders);
})

  export {
    createOrder,
    updateOrder,
    getOrders,
    deleteOrder,
    getUserOrders,
  };