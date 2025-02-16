import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderEasypaisa, allOrders, userOrders, updateStatus } from '../controllers/orderController'
import adminAuth from '../middleware/adminAuth'
import authUser from '../middleware/auth'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/easypaisa', authUser, placeOrderEasypaisa)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter