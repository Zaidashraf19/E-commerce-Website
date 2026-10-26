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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
        console.log(res?.data, "DATA");
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
      toast.success("REMOVED FROM Wishlist");
    } else {
      dispatch(addToWishlist(item));
      toast.success("ADDED TO Wishlist");
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
    toast.success("Added To Cart");
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
        <div>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              autoWidth
              label="Age"
            >
              <MenuItem value="All">All Category</MenuItem>
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="unisex">Unisex</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Product list */}
      <div className="flex justify-center flex-wrap gap-5 my-5">
        {filteredProducts?.map((item) => {
          const id = item?._id ?? item?.id ?? item?.productId;
          const isInWishlist = wishlistItems.some((x) => x._id === id);
          const q = qty[id] || 1;

          const originalPrice = Number(item?.price || 0);
          const discountedPrice = Number(item?.discountedPrice);

          const hasDiscount =
            item?.discountedPrice !== null &&
            item?.discountedPrice !== undefined &&
            item?.discountedPrice !== "" &&
            discountedPrice > 0 &&
            discountedPrice < originalPrice;

          const discountPercent = hasDiscount
            ? Math.round(
                ((originalPrice - discountedPrice) / originalPrice) * 100,
              )
            : 0;

          const isAdmin =
            Username === "admin@gmail.com" && Password === "admin123";

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
              <div className="relative overflow-hidden bg-[#181a27]">
                <img
                  src="https://media.istockphoto.com/id/1158358904/photo/spraying-perfume-on-dark-background-closeup-image.jpg?s=612x612&w=0&k=20&c=FgO1tJIxW_fVH0e7YHb-oMb_iDshELnMR6qXGILQFcU="
                  alt={item?.productName || item?.name}
                  className="rounded-lg w-60"
                  onClick={() => Navigate(`/product/${item?._id}`)}
                />
                {item?.discountedPrice && (
                  <span className="absolute left-3 top-3 rounded-lg border border-white/10 bg-[#181a27]/90 px-3 py-1.5 text-xs font-medium text-blue-200 backdrop-blur-sm">
                    {Math.round(
                      ((item?.price - item?.discountedPrice) / item?.price) *
                        100,
                    )}
                    % OFF
                  </span>
                )}
              </div>

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
              {[
                console.log("DISCOUNTED PRICE:", item?.discountedPrice),
                console.log("ITMEN NAME", item?.productName),
              ]}
              {item?.discountedPrice === null || undefined ? (
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

          // <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          //   return (
          //   <div
          //     key={id}
          //     className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#202231] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-950/30"
          //   >
          //     {/* Wishlist */}
          //     <button
          //       aria-label="Toggle wishlist"
          //       onClick={() => toggleWishlist(item)}
          //       className={`absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
          //         isInWishlist
          //           ? "bg-red-500 text-white"
          //           : "bg-black/50 text-white hover:bg-red-500"
          //       }`}
          //     >
          //       <FaRegHeart />
          //     </button>

          //     {/* Product Image */}
          //     <div
          //       className="relative mx-3 mt-3 overflow-hidden rounded-xl bg-[#181a27]"
          //       onClick={() => Navigate(`/product/${item?._id}`)}
          //     >
          //       <img
          //         src="https://media.istockphoto.com/id/1158358904/photo/spraying-perfume-on-dark-background-closeup-image.jpg?s=612x612&w=0&k=20&c=FgO1tJIxW_fVH0e7YHb-oMb_iDshELnMR6qXGILQFcU="
          //         alt={item?.productName || item?.name || "Perfume"}
          //         loading="lazy"
          //         className="aspect-square w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105"
          //       />

          //       {/* Discount Badge */}
          //       {hasDiscount && (
          //         <span className="absolute left-3 top-3 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-bold tracking-wide text-white shadow-lg">
          //           {discountPercent}% OFF
          //         </span>
          //       )}

          //       {/* Quick View */}
          //       <button
          //         aria-label="View product"
          //         onClick={(e) => {
          //           e.stopPropagation();
          //           Navigate(`/product/${item?._id}`);
          //         }}
          //         className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#181a27] opacity-100 shadow-md transition hover:bg-blue-500 hover:text-white sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          //       >
          //         <VisibilityIcon fontSize="small" />
          //       </button>
          //     </div>

          //     {/* Product Details */}
          //     <div className="flex flex-1 flex-col p-4">
          //       <h4 className="mb-2 line-clamp-2 text-center text-lg font-bold tracking-wide transition-colors group-hover:text-blue-300">
          //         {item?.productName || item?.name}
          //       </h4>

          //       <p className="mb-4 text-center text-sm capitalize text-slate-400">
          //         {item?.category === "unisex"
          //           ? "For Men & Women"
          //           : `For ${item?.category || "Everyone"}`}
          //       </p>

          //       {console.log("ITEM CATEGORY", item?.category)}

          //       {/* Pricing */}
          //       <div className="mb-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          //         <span className="text-xl font-bold text-white">
          //           Rs {hasDiscount ? discountedPrice : originalPrice}
          //         </span>

          //         {hasDiscount && (
          //           <span className="text-sm text-slate-500 line-through">
          //             Rs {originalPrice}
          //           </span>
          //         )}
          //       </div>

          //       {/* Quantity Selector */}
          //       <div className="mb-5 flex items-center justify-center gap-5">
          //         <button
          //           aria-label="Increase quantity"
          //           onClick={() => changeQty(id, q + 1)}
          //           className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:border-blue-400 hover:bg-blue-500"
          //         >
          //           <AddIcon fontSize="small" />
          //         </button>

          //         <span className="min-w-6 text-center text-base font-semibold">
          //           {q}
          //         </span>

          //         <button
          //           aria-label="Decrease quantity"
          //           onClick={() => changeQty(id, q - 1)}
          //           disabled={q === 1}
          //           className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:border-blue-400 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-30"
          //         >
          //           <RemoveIcon fontSize="small" />
          //         </button>
          //       </div>

          //       {/* Cart Button */}
          //       <button
          //         onClick={() => handleAddToCart(item)}
          //         className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
          //       >
          //         <AddShoppingCartIcon fontSize="small" />
          //         Add to Cart
          //       </button>

          //       {/* Admin Actions */}
          //       {isAdmin && (
          //         <div className="mt-4 flex justify-center gap-3 border-t border-white/10 pt-4">
          //           <button
          //             aria-label="Delete product"
          //             onClick={deleteProduct}
          //             className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400 transition hover:bg-red-500 hover:text-white"
          //           >
          //             <DeleteForeverIcon />
          //           </button>

          //           <button
          //             aria-label="Edit product"
          //             // onClick={editProduct}
          //             className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition hover:bg-blue-500 hover:text-white"
          //           >
          //             <EditIcon />
          //           </button>
          //         </div>
          //       )}
          //     </div>
          //   </div>
          //   );
          // </div>;
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
