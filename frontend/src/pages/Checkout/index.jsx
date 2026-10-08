import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Base_URL from "../Base_URL.js";
import { clearCart } from "../../redux/GeneralSlice.js";

const CheckOut = () => {
  const { cartItems, totalPrice, totalQuantity } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
    notes: "",
  });
  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit function
  const SubmitForm = () => {
    const orderData = {
      ...formData,
      cartItems,
      totalQuantity,
      totalPrice: totalPrice,
    };
    axios
      .post(`${Base_URL}/placeorder`, orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(clearCart());
      })
      .catch((error) => {
        console.error(error?.response);
      });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      contact: "",
      notes: "",
    });
  };

  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {/* BILLING DETAILS */}
        <div className="mx-3">
          <h5>Billing details</h5> <hr className="my-3" />
          <div className="flex gap-5 flex-col sm:flex-row w-full">
            <div>
              <label>First Name *</label> <br />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 focus:border-[#480A0A] focus:outline-none focus:ring-0 w-full sm:w-[25rem]"
              />
            </div>
            <div>
              <label>Last Name *</label> <br />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 focus:border-[#480A0A] focus:outline-none focus:ring-0 w-full sm:w-[25rem]"
              />
            </div>
          </div>
          <div>
            <br />
            <label>Email *</label> <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-2 focus:border-[#480A0A] focus:outline-none focus:ring-0 w-full sm:w-[25rem]"
            />
          </div>
          <div>
            <br />
            <label>Complete Address*</label> <br />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-2 focus:border-[#480A0A] focus:outline-none focus:ring-0 w-full sm:w-[25rem] min-h-20"
            />
          </div>
          <div>
            <br />
            <label>Contact Details *</label> <br />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-2 focus:border-[#480A0A] focus:outline-none focus:ring-0 w-full sm:w-[25rem]"
            />
          </div>
          <div>
            <br />
            <label>Order notes (optional)</label> <br />
            <input
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="border-2 border-gray-300 p-2 focus:border-[#480A0A] focus:outline-none focus:ring-0 w-full sm:w-[25rem] min-h-20"
            />
          </div>
        </div>

        {/* CART ITEMS */}
        <div className="bg-gray-200 p-5 w-full sm:w-95">
          <h4 className="font-semibold text-2xl">Your Order</h4>
          <hr className="mt-5 mb-8" />
          <div className="flex justify-between">
            <h5 className="font-semibold text-xl">Products</h5>
            <h5 className="font-semibold text-xl">Subtotal</h5>
          </div>
          <hr className="my-5" />

          {cartItems?.map((item) => (
            <div key={item?._id}>
              <div className="flex justify-between">
                <h5 className="font-semibold text-xl">
                  {item?.name} x {item?.quantity}
                </h5>
                <h5 className="font-semibold text-xl">{item?.price}</h5>
              </div>
              <hr className="my-5" />
            </div>
          ))}

          <div className="flex justify-between">
            <h5 className="font-semibold text-xl">Subtotal</h5>
            <h5 className="font-semibold text-xl">Rs. {totalPrice}</h5>
          </div>
          <hr className="my-5" />

          <div className="flex justify-between">
            <h5 className="font-semibold text-xl">Shipping</h5>
            <h5 className="font-semibold text-xl">Rs. </h5>
          </div>
          <hr className="my-5" />

          <div className="flex justify-between">
            <h5 className="font-semibold text-xl">Total price</h5>
            <h5 className="font-semibold text-xl">Rs. {totalPrice}</h5>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center content-center w-full">
          <button
            className="bg-[#480A0A] text-white p-2 rounded-full cursor-pointer w-full sm:w-[90%]"
            onClick={SubmitForm}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
