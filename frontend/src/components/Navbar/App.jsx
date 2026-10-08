import { useState } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WishlistDialogComponent from "../WishlistDialog/App.jsx";
import CartDialogComponent from "../CartDialog/App.jsx";
import Logo from "../../assets/logo.jpg";
import { useSelector } from "react-redux";

const Navbar = ({ Username, Password }) => {
  console.log("USERNAME:", Username);
  console.log("PASSWORD:", Password);

  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { totalQuantity } = useSelector((s) => s.cart);

  const [menuOpen, setMenuOpen] = useState(false);

  const [wishisopen, setWishisopen] = useState(false);
  const [cartisopen, setCartisopen] = useState(false);

  const openwishlistDialog = () => {
    setWishisopen(true);
  };

  const closewishlistDialog = () => {
    setWishisopen(false);
  };

  const opencartDialog = () => {
    setCartisopen(true);
  };

  const closecartDialog = () => {
    setCartisopen(false);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        {/* TOP NAVBAR */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 shadow-2xl">
          {/* LOGO */}
          <div className="shrink-0">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-[#4a0a0a] transition-colors duration-200"
            >
              HOME
            </Link>

            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-[#4a0a0a] transition-colors duration-200"
            >
              ABOUT
            </Link>

            <Link
              to="/products"
              className="text-gray-700 font-medium hover:text-[#4a0a0a] transition-colors duration-200"
            >
              PRODUCTS
            </Link>

            <Link
              to="/contactUs"
              className="text-gray-700 font-medium hover:text-[#4a0a0a] transition-colors duration-200"
            >
              CONTACT US
            </Link>

            {/* DASHBOARD - ADMIN ONLY */}
            {Username === "admin@gmail.com" || Password === "admin123" ? (
              <Link
                to="/admin"
                className="text-gray-700 font-medium hover:text-[#4a0a0a] transition-colors duration-200"
              >
                Admin
              </Link>
            ) : null}
          </div>
          {/* RIGHT SIDE */}
          <div className="flex items-center gap-1 sm:gap-3">
            {/* LOGIN / ACCOUNT */}
            <Link
              to="/login"
              className="p-2 rounded-full text-gray-700 hover:text-[#4a0a0a] hover:bg-blue-50 active:bg-blue-100 transition-all duration-200"
              aria-label="Login"
            >
              <PersonIcon fontSize="medium" />
            </Link>

            {/* WISHLIST */}
            <button
              onClick={openwishlistDialog}
              className="relative p-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-all duration-200"
              aria-label="Wishlist"
            >
              <FavoriteBorderIcon fontSize="medium" />

              {/* WISHLIST BADGE */}
              {wishlistItems?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#4f0909] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistItems?.length || 2}
                </span>
              )}
            </button>

            {/* CART */}
            <button
              onClick={opencartDialog}
              className="relative p-2 rounded-full text-gray-700 hover:text-[#4a0a0a] hover:bg-blue-50 active:bg-blue-100 transition-all duration-200"
              aria-label="Cart"
            >
              <ShoppingCartIcon fontSize="medium" />

              {/* CART BADGE */}
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#4f0909] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity || 2}
                </span>
              )}
            </button>

            {/* HAMBURGER - MOBILE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full text-gray-700 hover:text-[#4a0a0a] hover:bg-blue-50 active:bg-blue-100 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-sm">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-[#4a0a0a] active:bg-blue-100 transition-all duration-200"
              >
                HOME
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-[#4a0a0a] active:bg-blue-100 transition-all duration-200"
              >
                ABOUT
              </Link>

              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-[#4a0a0a] active:bg-blue-100 transition-all duration-200"
              >
                PRODUCTS
              </Link>

              <Link
                to="/contactUs"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-[#4a0a0a] active:bg-blue-100 transition-all duration-200"
              >
                CONTACT US
              </Link>

              {/* ADMIN DASHBOARD */}
              {Username === "admin@gmail.com" || Password === "admin123" ? (
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-[#4a0a0a] active:bg-blue-100 transition-all duration-200"
                >
                  DASHBOARD
                </Link>
              ) : null}
            </div>
          </div>
        )}
      </nav>
      {/* WISHLIST DIALOG */}
      <WishlistDialogComponent
        open={wishisopen}
        onClose={closewishlistDialog}
      />
      {/* CART DIALOG */}
      <CartDialogComponent open={cartisopen} onClose={closecartDialog} />
    </>
  );
};

export default Navbar;
