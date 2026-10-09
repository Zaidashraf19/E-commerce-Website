import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/GeneralSlice.js";

const CartDialogComponent = ({ open, onClose }) => {
  const { cartItems } = useSelector((s) => s.cart);

  const dispatch = useDispatch();

  return (
    <Dialog open={open} onClose={onClose} className="w[1000px] mauto">
      <DialogContent>
        {cartItems.length === 0 ? (
          <p className="font-semibold text-2xl text-center text-red-700">
            No items in Cart
          </p>
        ) : (
          <>
            <div>
              <div className="flex justify-between">
                <h5 className="font-semibold text-lg ">PerfumeName</h5>
                <h5 className="font-semibold text-lg ">Quantity</h5>
                <h5 className="font-semibold text-lg ">Price</h5>
              </div>
              <hr className="my-5" />
              {cartItems?.map((item) => {
                return (
                  <>
                    <div className="flex justify-end">
                      <button
                        className="text-red-600 text-4xl"
                        onClick={() => {
                          dispatch(removeFromCart(item?._id));
                          toast.success("Item removed from cart!");
                        }}
                      >
                        &times;
                      </button>
                    </div>
                    <div className="flex justify-between gap-3" key={item?._id}>
                      <p>{item?.name}</p>
                      <p>{item?.quantity}</p>
                      {item?.discountedPrice === 0 ? (
                        <p>{item?.price * item?.quantity}</p>
                      ) : (
                        <p>{item?.discountedPrice * item?.quantity}</p>
                      )}
                    </div>
                    <br />
                  </>
                );
              })}
            </div>
          </>
        )}
        <DialogActions className="flex justify-around">
          <Button onClick={onClose}>
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <Button onClick={onClose}>
            <Link to="/cart">Go to cart</Link>
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CartDialogComponent;
