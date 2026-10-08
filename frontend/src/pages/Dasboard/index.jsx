import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Base_URL from "../Base_URL.js";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  // ✅ Fetch all orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${Base_URL}/getorder`);
        setOrders(res?.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(`${Base_URL}/updateorder/${orderId}`, {
        orderStatus: newStatus,
      });

      // update in UI immediately
      setOrders((prev) =>
        prev.map((o) =>
          o._id === orderId ? { ...o, orderStatus: newStatus } : o
        )
      );
    } catch (err) {
      console.error("Error updating order status:", err);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4 px-4 py-2">
        <p className="text-xl font-semibold hover:underline">
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <p className="font-semibold text-xl hover:underline">
          <Link to="/addproduct">Add Products</Link>
        </p>
        <p className="font-semibold text-xl hover:underline">
          <Link to="/addreviews">Add Reviews</Link>
        </p>
      </div>

      {/* ORDERS */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-3 text-center">Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-max w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border p-2 whitespace-nowrap">First Name</th>
                <th className="border p-2 whitespace-nowrap">Last Name</th>
                <th className="border p-2 whitespace-nowrap">Contact</th>
                <th className="border p-2 whitespace-nowrap">Address</th>
                <th className="border p-2 whitespace-nowrap">Email</th>
                <th className="border p-2 whitespace-nowrap">Products</th>
                <th className="border p-2 whitespace-nowrap">Quantity</th>
                <th className="border p-2 whitespace-nowrap">Total Price</th>
                <th className="border p-2 whitespace-nowrap">Order Date</th>
                <th className="border p-2 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className={`odd:bg-white even:bg-gray-50 text-center ${
                    order?.orderStatus === "completed" ? "line-through" : ""
                  } `}
                >
                  <td className="border p-2 whitespace-nowrap">
                    {order.firstName}
                  </td>
                  <td className="border p-2 whitespace-nowrap">
                    {order.lastName}
                  </td>
                  <td className="border p-2 whitespace-nowrap">
                    {order.contact}
                  </td>
                  <td className="border p-2 whitespace-nowrap">
                    {order.address}
                  </td>
                  <td className="border p-2 whitespace-nowrap">
                    {order.email}
                  </td>
                  <td className="border p-2 whitespace-nowrap text-left">
                    {order.cartItems.map((item, idx) => (
                      <div key={idx}>
                        {item.name}{" "}
                        {item?.discountedPrice === 0
                          ? item?.price
                          : item?.discountedPrice}{" "}
                        × {item.quantity}
                      </div>
                    ))}
                  </td>
                  <td className="border p-2 whitespace-nowrap">
                    {order.totalQuantity}
                  </td>
                  <td className="border p-2 whitespace-nowrap">
                    {order.totalPrice}
                  </td>
                  <td className="border p-2 whitespace-nowrap">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border p-2 whitespace-nowrap">
                    <select
                      className="border rounded px-2 py-1 text-sm bg-white focus:ring focus:ring-blue-300"
                      value={order.orderStatus || "pending"}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      disabled={order?.orderStatus === "completed"}
                    >
                      <option value="pending">Pending</option>
                      <option value="on delivery">On Delivery</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
