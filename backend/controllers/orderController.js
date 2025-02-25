import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address, paymentMethod } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod,
      payment: paymentMethod === "COD" ? false : true, // Set payment status based on method
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save(); // Fix: Add parentheses to save()

    // Clear the user's cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {
  
}

// Placing orders using Easypaisa OR Bank Account Method  
const placeOrderEasypaisa = async (req, res) => {
  
}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
  
}

// User Order Data for Frontend 
const userOrders = async (req, res) => {
  try {
    
    const { userId }  = req.body

    const orders = await orderModel.find({ userId })
    res.json({success: true, orders})

  } catch (error) {

    console.log(error);
    res.json({ success: false, message: error.message });
    
  }

}

// Update Order Status from Admin Panel
const updateStatus = async (req, res) => {
  
}

export { placeOrder, placeOrderStripe, placeOrderEasypaisa, allOrders, userOrders, updateStatus }