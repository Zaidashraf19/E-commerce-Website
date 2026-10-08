import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  clearWishlist,
} from "../../redux/wishlistSlice.js";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  return (
    <div className="max-w-3xl mx-auto p-4">
      {wishlistItems.length === 0 ? (
        <p className="text-center m-6 text-red-800 text-2xl font-bold uppercase">
          No items in wishlist
        </p>
      ) : (
        <>
          <h2 className="text-4xl font-bold text-center uppercase text-[#480A0A]">
            My Wishlist
          </h2>
          <hr className="my-5" />
          <div className="flex justify-between">
            <h5 className="font-semibold text-lg">PerfumeName</h5>
            <h5 className="font-semibold text-lg">Price</h5>
          </div>
          {wishlistItems?.map((item) => (
            <>
              <div key={item?._id} className="flex justify-end">
                <button
                  className="text-red-600 text-4xl"
                  onClick={() => dispatch(removeFromWishlist(item?._id))}
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
                    <p>{item?.price}</p>
                  </>
                ) : (
                  <>
                    <p>{item?.discountedPrice}</p>
                  </>
                )}
              </div>
            </>
          ))}
          <button
            onClick={() => dispatch(clearWishlist())}
            className="bg-red-800 text-white px-4 py-2 mt-4 rounded"
          >
            Clear Wishlist
          </button>
        </>
      )}
    </div>
  );
};

export default Wishlist;
