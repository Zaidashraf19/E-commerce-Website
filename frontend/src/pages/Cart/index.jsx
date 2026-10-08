import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../redux/GeneralSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice, totalQuantity } = useSelector((s) => s.cart);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {cartItems?.length === 0 ? (
        <>
          <h1 className="text-center m-6 text-red-800 text-2xl font-bold uppercase">
            NO items in cart
          </h1>
          <Link to="/">
            <div className="bg-[#480A0A] w-[90%] md:w-[98%] rounded-full text-center m-3 p-3 cursor-pointer">
              <button className=" text-white cursor-pointer">
                Continue Shopping
              </button>
            </div>
          </Link>
        </>
      ) : (
        <>
          <h2 className="text-4xl font-bold text-center uppercase text-[#480A0A]">
            Cart
          </h2>
          <hr className="my-5" />
          <div className="flex justify-between">
            <h5 className="font-semibold text-lg">PerfumeName</h5>
            <h5 className="font-semibold text-lg">Price</h5>
            <h5 className="font-semibold text-lg">Quantity</h5>
            <h5 className="font-semibold text-lg">Subtotal</h5>
          </div>
          {cartItems.map((item) => (
            <>
              <div className="flex justify-end">
                <button
                  className="text-red-600 text-4xl"
                  onClick={() => dispatch(removeFromCart(item?._id))}
                >
                  &times;
                </button>
              </div>
              <div
                key={item?._id}
                className="flex items-center justify-between border p-3 rounded mb-3"
              >
                <p className="font-semibold">{item?.name}</p>
                {item?.discountedPrice === 0 ? (
                  <>
                    <p>{item?.price} PKR</p>
                  </>
                ) : (
                  <>
                    <p>{item?.discountedPrice} PKR</p>
                  </>
                )}

                <div className="flex items-center gap-1">
                  <button onClick={() => dispatch(decreaseQuantity(item?._id))}>
                    -
                  </button>
                  <span>{item?.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item?._id))}>
                    +
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  {item?.discountedPrice === 0 ? (
                    <>
                      <p>{item?.price * item?.quantity} PKR</p>
                    </>
                  ) : (
                    <>
                      <p>{item?.discountedPrice * item?.quantity} PKR</p>
                    </>
                  )}
                </div>
              </div>
            </>
          ))}
          <div className="flex justify-between items-center mt-6">
            <button
              className="text-red-600"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="font-semibold">Items: {totalQuantity}</p>
              <p className="font-bold text-lg">Total: ${totalPrice}</p>
            </div>
          </div>
          <Link to="/checkout">
            <div className="flex justify-center bg-[#480A0A] w-full mt-4 rounded-full cursor-pointer">
              <button className="text-white p-2 font-bold cursor-pointer">
                CheckOut
              </button>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
