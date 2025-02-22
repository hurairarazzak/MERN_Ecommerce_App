import orderModel from "../models/orderModel.js"

// Placing orders using COD
const placeOrder = async (req, res) => {

    try {
        
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            PaymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"Order Placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
        
    }

}

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
  
}

// Update Order Status from Admin Panel
const updateStatus = async (req, res) => {
  
}

export { placeOrder, placeOrderStripe, placeOrderEasypaisa, allOrders, userOrders, updateStatus }