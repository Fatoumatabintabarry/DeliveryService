import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Item',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingCost: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    }
  }
);

orderSchema.pre('save', async function () {
  let price = 0;

  for(let i = 0; i < this.orderItems.length; i++)
    price += this.orderItems[i].price * this.orderItems[i].qty;

  this.itemsPrice = price;
  this.taxPrice = this.itemsPrice * 0.15;
  this.totalPrice = this.itemsPrice + this.taxPrice + this.shippingCost;
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
