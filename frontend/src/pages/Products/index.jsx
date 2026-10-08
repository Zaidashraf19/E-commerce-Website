import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Base_URL from "../Base_URL.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/GeneralSlice.js";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/wishlistSlice.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Products = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // LOCAL STORAGE
  const Username = localStorage.getItem("Username");
  const Password = localStorage.getItem("Password");

  const { cartItems } = useSelector((s) => s.cart);

  // WISHLIST REDUX
  const { wishlistItems } = useSelector((state) => state.wishlist);

  // quantity per product: { [id]: number }
  const [qty, setQty] = useState({});

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [products, setProducts] = useState([]);

  // TO RENDER DATA
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${Base_URL}/product`);

        setProducts(res?.data);
      } catch {
        console.error("Error fetching products");
        setProducts([]); // fallback empty
      }
    };
    fetchProducts();
  }, []);

  const changeQty = (id, next) =>
    setQty((p) => ({ ...p, [id]: Math.max(1, next) }));

  const filteredProducts = products.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory,
  );

  // ADD/REMOVE FROM WISHLIST
  const toggleWishlist = (item) => {
    const id = item?._id ?? item?.id ?? item?.productId;
    const exists = wishlistItems.find((x) => x?._id === id);

    if (exists) {
      dispatch(removeFromWishlist(id));
      toast.success(
        <>
          <strong>REMOVED FROM Wishlist</strong>
          <br />
        </>,
      );
    } else {
      dispatch(addToWishlist(item));
      toast.success(
        <>
          <strong>ADDED TO Wishlist</strong>
          <br />
        </>,
      );
    }
  };

  // ADD TO CART
  const handleAddToCart = (item) => {
    const id = item._id ?? item.id ?? item.productId;
    const quantity = qty[id] || 1;
    dispatch(
      addToCart({
        ...item,
        quantity,
      }),
    );
    toast.success(
      <>
        <strong>Added To Cart</strong>
        <br />
      </>,
    );
  };

  // DELETE PRODUCT
  const deleteProduct = () => {
    axios
      .delete(`${Base_URL}/product`)
      .then((r) => console.log("Resource deleted:", r?.data))
      .catch((e) => console.error("Error deleting resource:", e));
  };

  return (
    <>
      {/* DESCRIPTION */}
      <div className="bg-[#D4CECE] my-10 py-5">
        <p className="text-[#480A0A] text-center mx-10">
          At ScentsCity, we believe fragrance is more than just a scent — it’s a
          memory, a mood, and a personal signature. Our curated collection
          features timeless classics and modern masterpieces, crafted from the
          finest ingredients to capture your unique essence.
        </p>
      </div>
      {/* Category filter */}
      <div className="flex justify-start m-5">
        <select
          className="border p-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>
      {/* Product list */}
      <div className="flex justify-center flex-wrap gap-5 my-5">
        {filteredProducts?.map((item) => {
          const id = item?._id ?? item?.id ?? item?.productId;
          const isInWishlist = wishlistItems.some((x) => x._id === id);
          const q = qty[id] || 1;

          return (
            <div key={id} className="border p-2 shadow-2xl">
              {/* Wishlist button */}
              <div className="flex justify-end">
                <button
                  className={`text-xl p-2 rounded-lg cursor-pointer my-2 ${
                    isInWishlist
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => toggleWishlist(item)}
                >
                  <FaRegHeart />
                </button>
              </div>

              {/* Product image */}
              <img
                src="https://media.istockphoto.com/id/1158358904/photo/spraying-perfume-on-dark-background-closeup-image.jpg?s=612x612&w=0&k=20&c=FgO1tJIxW_fVH0e7YHb-oMb_iDshELnMR6qXGILQFcU="
                alt={item?.productName || item?.name}
                className="rounded-lg w-60"
                onClick={() => Navigate(`/product/${item?._id}`)}
              />

              {/* Product details */}
              <h4 className="text-center font-extrabold my-3">
                {item?.productName}
              </h4>
              {item?.category === "unisex" ? (
                <>
                  <p className="text-lg font-semibold">
                    Men/Women both can use
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold">
                    only for {item?.category}
                  </p>
                </>
              )}
              {item?.discountedPrice === "" ? (
                <>
                  <p className="text-lg font-semibold">Rs {item?.price}</p>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold">
                    Rs {item?.discountedPrice}
                    <span className="line-through text-red-700 ml-2 font-light">
                      {item?.price}
                    </span>
                  </p>
                </>
              )}

              {/* Per-card quantity */}
              <div className="flex justify-center gap-5">
                <button onClick={() => changeQty(id, q + 1)}>
                  <AddIcon fontSize="small" />
                </button>
                <span>{q}</span>
                <button onClick={() => changeQty(id, q - 1)} disabled={q === 1}>
                  <RemoveIcon fontSize="small" />
                </button>
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-5 mt-5">
                <button
                  className="bg-[#480A0A] text-white p-2 rounded-full cursor-pointer"
                  onClick={() => handleAddToCart(item)}
                >
                  <AddShoppingCartIcon />
                </button>
                <button
                  className="bg-[#480A0A] text-white p-2 rounded-full cursor-pointer"
                  onClick={() => Navigate(`/product/${item?._id}`)}
                >
                  <VisibilityIcon />
                </button>
              </div>

              {/* ONLY FOR ADMIN */}
              <div
                className={`flex justify-center gap-5 mt-5 ${
                  Username !== "admin@gmail.com" && Password !== "admin123"
                    ? "hidden"
                    : ""
                }`}
              >
                <button
                  className="bg-[#480A0A] text-white p-2 rounded-full cursor-pointer"
                  onClick={deleteProduct}
                >
                  <DeleteForeverIcon />
                </button>
                <button
                  className="bg-[#480A0A] text-white p-2 rounded-full cursor-pointer"
                  onClick={deleteProduct}
                >
                  <EditIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
      />
    </>
  );
};

export default Products;
