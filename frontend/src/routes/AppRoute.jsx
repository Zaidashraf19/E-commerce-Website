import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../layout.jsx";
import Home from "../pages/Home/App.jsx";
import About from "../pages/About/App.jsx";

import Products from "../pages/Products/index.jsx";

import SingleProduct from "../pages/SingleProduct/index.jsx";
import Wishlist from "../pages/Wishlist/index.jsx";
import Cart from "../pages/Cart/index.jsx";
import Dashboard from "../pages/Dasboard/index.jsx";
import Login from "../pages/Login/index.jsx";
import Addproduct from "../pages/Uploadproduct/App.jsx";
import Addreviews from "../pages/Reviews/index.jsx";
import Checkout from "../pages/Checkout/index.jsx";

import ContactUs from "../pages/ContactUs/App.jsx";
import Policy from "../pages/Policy/App.jsx";
import Registration from "../pages/Registration/App.jsx";
// import EditProduct from "../pages/EditProduct/App.jsx";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/contactUs",
          element: <ContactUs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/addproduct",
          element: <Addproduct />,
        },
        {
          path: "/addreviews",
          element: <Addreviews />,
        },
      ],
    },
  ]);

  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contactus" element={<ContactUs />} />
  //       <Route path="/checkout" element={<CheckOut />} />
  //       <Route path="/admin" element={<Admin />} />
  //       <Route path="/wishlist" element={<Wishlist />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/registration" element={<Registration />} />
  //       <Route path="/policy" element={<Policy />} />
  //       <Route path="/products" element={<Products />} />
  //       <Route path="/uploadproduct" element={<Addproduct />} />
  //       {/* <Route path="/editproduct" element={<EditProduct />} /> */}
  //       <Route path="/cart" element={<Cart />} />
  //     </Routes>
  //   </>
  // );
  return <RouterProvider router={router} />;
};

export default AppRoute;
