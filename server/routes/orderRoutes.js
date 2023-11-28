import express from "express";

import {
  createOrder,
  updateOrder,
  getOrders,
  deleteOrder,
  getUserOrders,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").get(getOrders);

router.post("/create", createOrder);

//router.put('/update', updateOrder);

router.route("/:id").put(updateOrder).delete(deleteOrder);

router.route("/user/:id").get(getUserOrders);

export default router;
