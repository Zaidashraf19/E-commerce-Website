import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({
  image,
  name,
  category,
  price,
  oldPrice,
  discount,
  rating = 5,
}) => {
  return (
    <>
      <div
        className="
        group
        bg-white
        border border-gray-200
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:border-blue-200
        transition-all
        duration-300
      "
      >
        {/* PRODUCT IMAGE */}
        <div className="relative bg-slate-100 h-60 sm:h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
          />

          {/* DISCOUNT */}
          {discount && (
            <span
              className="
              absolute
              top-3
              left-3
              bg-red-600
              text-white
              text-xs
              font-semibold
              px-2.5
              py-1
              rounded-md
            "
            >
              {discount}% OFF
            </span>
          )}

          {/* WISHLIST */}
          <button
            className="
            absolute
            top-3
            right-3
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-full
            bg-white
            text-gray-600
            shadow-sm
            hover:text-red-600
            hover:bg-red-50
            active:bg-red-100
            transition-all
            duration-200
          "
          >
            <FavoriteBorderIcon fontSize="small" />
          </button>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="p-4">
          {/* CATEGORY */}
          <p className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-1">
            {category}
          </p>

          {/* NAME */}
          <h2
            className="
            font-semibold
            text-gray-900
            text-base
            sm:text-lg
            truncate
          "
          >
            {name}
          </h2>

          {/* RATING */}
          <div className="flex items-center gap-1 mt-2">
            <div className="text-yellow-400 text-sm">{"★".repeat(rating)}</div>

            <span className="text-xs text-gray-500">({rating}.0)</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xl font-bold text-gray-900">Rs. {price}</span>

            {oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                Rs. {oldPrice}
              </span>
            )}
          </div>

          {/* ADD TO CART */}
          <button
            className="
            w-full
            mt-4
            py-2.5
            rounded-lg
            bg-blue-600
            text-white
            font-medium
            flex
            items-center
            justify-center
            gap-2
            hover:bg-blue-700
            active:bg-blue-800
            transition-colors
            duration-200
          "
          >
            <ShoppingCartIcon fontSize="small" />
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
