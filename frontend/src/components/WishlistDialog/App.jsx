import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DialogComponent = ({ open, onClose }) => {
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <Dialog open={open} onClose={onClose} className="w[1000px] mauto">
      <DialogContent>
        {wishlistItems.length === 0 ? (
          <p className="font-semibold text-2xl text-center text-red-700">
            No items in wishlist
          </p>
        ) : (
          <>
            <div>
              <div className="flex justify-between gap-3">
                <h5 className="font-semibold text-lg">PerfumeName</h5>
                <h5 className="font-semibold text-lg">Price</h5>
              </div>
              <hr className="my-5" />
              {wishlistItems?.map((item) => {
                return (
                  <>
                    <div className="flex justify-between gap-3">
                      <p>{item?.name}</p>
                      {item?.discountedPrice === 0 ? (
                        <>
                          <p>{item?.price}</p>
                        </>
                      ) : (
                        <>
                          <p>{item?.discountedPrice}</p>
                        </>
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
          <Button onClick={onClose}>Continue Shopping</Button>
          <Button onClick={onClose}>
            <Link to="/wishlist">Go to Wishlist</Link>
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
