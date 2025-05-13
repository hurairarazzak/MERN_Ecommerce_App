import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return

    try {
      const response = await axios.post(`${backendUrl}/api/order/list`, {}, {
        headers: { token }
      })
      if (response.data.success && Array.isArray(response.data.orders)) {
        setOrders(response.data.orders)
      } else {
        toast.error(response.data.message || "Failed to fetch orders")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${backendUrl}/api/order/status`, 
        { orderId, status: event.target.value },
        { headers: { token } }
      );
  
      if (response.data.success) {
        toast.success("Order status updated!");
        await fetchAllOrders();
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error); // actual error object
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  const currency = "$"

  return (
    <div className="p-6 bg-gradient-to-br from-sky-50 via-white to-pink-50 min-h-screen">
      <h3 className="text-3xl font-bold text-center text-rose-600 mb-10">📦 Customer Orders</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.isArray(orders) && orders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300 ease-in-out p-6 space-y-4"
          >
            <div className="flex items-center gap-4">
              <img src={assets.parcel_icon} alt="Parcel" className="w-12 h-12" />
              <div>
                <p className="font-semibold text-lg text-gray-700">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <p className="text-sm text-gray-500">{order.address.phone}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-800 mb-2">🛒 Items:</p>
              {order.items.map((item, idx) => (
                <p key={idx} className="text-sm text-gray-700">
                  {item.name} x {item.quantity} <span className="text-xs text-gray-500">({item.size})</span>
                  {idx !== order.items.length - 1 && ','}
                </p>
              ))}
            </div>

            <div className="text-sm text-gray-600 leading-6">
              <p><strong>Address:</strong> {order.address.street}</p>
              <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <p><strong>Items:</strong> {order.items.length}</p>
              <p><strong>Method:</strong> {order.paymentMethod}</p>
              <p><strong>Payment:</strong> <span className={order.payment ? 'text-green-600' : 'text-red-600'}>{order.payment ? 'Done' : 'Pending'}</span></p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xl font-bold text-rose-500">{currency}{order.amount}</p>
              <select
                onChange={(event)=>statusHandler(event, order._id)}
                defaultValue={order.status}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders