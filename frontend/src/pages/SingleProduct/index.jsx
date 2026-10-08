import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiPackage } from "react-icons/fi";
import { GrDeliver } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import Swal from "sweetalert2";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/GeneralSlice.js";
import axios from "axios";
import Base_URL from "../Base_URL.js";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [current, setCurrent] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("tab1");
  const [product, setProduct] = useState([]);

  const params = useParams();

  // TO RENDER DATA
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${Base_URL}/product/${params?.id}`);
        setProduct(response?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const slides = [{ src: product?.image1 }, { src: product?.image2 }];

  // ADD TO CART
  const Addtocart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      }),
    );
    Swal.fire({ title: "Added To Cart", icon: "success", draggable: false });
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <div className="flex justify-around gap-10 flex-wrap mx-10">
        {/* SLIDE SECTION */}
        <div className="relative w-100 overflow-hidden rounded-2xl shadow-lg pb-25 select-none">
          {/* IMAGES IN SLIDE SHOW */}
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides?.map((slide, idx) => (
              <div key={idx} className="w-full flex-shrink-0">
                <img
                  src="https://media.istockphoto.com/id/1158358904/photo/spraying-perfume-on-dark-background-closeup-image.jpg?s=612x612&w=0&k=20&c=FgO1tJIxW_fVH0e7YHb-oMb_iDshELnMR6qXGILQFcU="
                  alt={`Slide ${idx} ${product?.productName}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* SLIDE SHOW BTNS */}
          <div>
            <button
              onClick={() =>
                setCurrent((p) => (p === 0 ? slides?.length - 1 : p - 1))
              }
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-800/70 text-white px-3 py-1 rounded-full hover:bg-gray-800"
            >
              ❮
            </button>

            <button
              onClick={() =>
                setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1))
              }
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-800/70 text-white px-3 py-1 rounded-full hover:bg-gray-800"
            >
              ❯
            </button>
          </div>

          {/* IMAGE TO CHANGE SLIDE */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 bg-white/70 p-2 rounded-xl">
            {slides.map((slide, idx) => (
              <img
                key={idx}
                src="https://media.istockphoto.com/id/1158358904/photo/spraying-perfume-on-dark-background-closeup-image.jpg?s=612x612&w=0&k=20&c=FgO1tJIxW_fVH0e7YHb-oMb_iDshELnMR6qXGILQFcU="
                alt={`Thumb ${idx} ${product?.productName}`}
                onClick={() => setCurrent(idx)}
                className={`w-14 h-14 object-cover rounded-lg cursor-pointer border-2 ${
                  current === idx ? "border-gray-800" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="text-3xl font-extrabold flex flex-col gap-3">
          <p>{product?.productName}</p>
          <p className="select-none">⭐⭐⭐⭐</p>
          {product?.discountedPrice === "" ? (
            <>
              <p className="text-lg font-semibold">Rs {product?.price}</p>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold">
                Rs {product?.discountedPrice}
                <span className="line-through text-red-700 ml-2 font-light">
                  {product?.price}
                </span>
              </p>
            </>
          )}
          {product?.category === "unisex" ? (
            <>
              <p className="text-lg font-semibold">Men/Women both can use</p>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold">
                only for {product?.category}
              </p>
            </>
          )}
          {/* HARD CODE DIVS */}
          <div className="flex flex-wrap gap-3 font-normal text-sm select-none">
            <div className="border rounded-full p-5 md:w-[195px] w-full flex gap-2">
              <VscFeedback className="text-2xl" /> 1000+ happy customers
            </div>
            <div className="border rounded-full p-5 md:w-[195px] w-full flex gap-2">
              <FiPackage className="text-2xl" />
              10 days return & exchange policy
            </div>
            <div className="border rounded-full p-5 md:w-[195px] w-full flex gap-2">
              <GrDeliver className="text-2xl" />
              Fast delivery all over Pakistan
            </div>
          </div>

          <div>
            {/* INCREAMENT AND DECREAMENT BTNS */}
            <div className="flex justify-center gap-5">
              <button
                className={`h-10 w-10 align-middle text-lg line-clamp-1 cursor-default`}
                onClick={() => setQuantity((q) => Math.min(q + 1))}
              >
                <span className="text-center">
                  <AddIcon />
                </span>
              </button>

              <span>{quantity}</span>
              <button
                className={`text-center h-10 w-10 align-middle text-lg line-clamp-1 ${
                  quantity === 1 ? "cursor-not-allowed" : "cursor-default"
                }`}
                onClick={() => setQuantity((q) => Math.min(1, q - 1))}
                disabled={quantity === 1}
              >
                <span
                  className={`${
                    quantity === 1 ? "cursor-not-allowed" : "cursor-default"
                  }`}
                >
                  <RemoveIcon />
                </span>
              </button>
            </div>
            {/* ADD TO CART BTN */}
            <div className="flex justify-center mt-5">
              <button className={"cursor-default"} onClick={Addtocart}>
                <AddShoppingCartIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DROPDOWNS */}

      {/* FOR SMALL SCREEN */}
      <div className="w-full mt-10 sm:hidden">
        {/* Description */}
        <div className="border rounded-lg shadow bg-white">
          <button
            onClick={() => toggleDropdown("description")}
            className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-gray-700 bg-gray-100 rounded-t-lg hover:bg-gray-200"
          >
            <span className="font-bold text-lg">Description</span>
            <span>
              {openDropdown === "description" ? (
                <FaChevronDown />
              ) : (
                <FaChevronUp />
              )}
            </span>
          </button>
          {openDropdown === "description" && (
            <div className="px-4 py-3 text-gray-600 border-t">
              {product?.description}
            </div>
          )}
        </div>

        {/* Policy */}
        <div className="border rounded-lg shadow bg-white">
          <button
            onClick={() => toggleDropdown("policy")}
            className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-gray-700 bg-gray-100 rounded-t-lg hover:bg-gray-200"
          >
            <span>Policy</span>
            <span>
              {openDropdown === "policy" ? <FaChevronDown /> : <FaChevronUp />}
            </span>
          </button>
          {openDropdown === "policy" && (
            <div className="px-4 py-3 text-gray-600 border-t">
              <ol className="p-2 list-decimal">
                <li className="font-bold my-2">
                  Return & Exchange Policy
                  <ul className="font-normal list-disc mx-5">
                    <li>
                      Perfumes can only be returned or exchanged if they are
                      unopened, unused, and in their original packaging within a
                      specified time frame (e.g., 7–14 days).
                    </li>
                    <li>
                      Opened or used bottles are usually non-returnable due to
                      hygiene reasons.
                    </li>
                  </ul>
                </li>
                <li className="font-bold my-2">
                  Authenticity & Quality Assurance Policy
                  <ul className="font-normal list-disc mx-5">
                    <li>
                      The brand guarantees that all products are 100% original,
                      authentic, and manufactured under strict quality
                      standards.
                    </li>
                    <li>
                      No counterfeit or imitation products are sold under the
                      brand name.
                    </li>
                  </ul>
                </li>
                <li className="font-bold my-2">
                  Privacy & Data Protection Policy
                  <ul className="font-normal list-disc mx-5">
                    <li>
                      Customer personal information (name, address, contact
                      details) is kept confidential and used only for order
                      processing and promotional communication with consent.
                    </li>
                    <li>
                      Data is not shared with third parties without customer
                      approval.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Delivery */}
        <div className="border rounded-lg shadow bg-white">
          <button
            onClick={() => toggleDropdown("delivery")}
            className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-gray-700 bg-gray-100 rounded-t-lg hover:bg-gray-200"
          >
            <span>Delivery</span>
            <span>
              {openDropdown === "delivery" ? (
                <FaChevronDown />
              ) : (
                <FaChevronUp />
              )}
            </span>
          </button>
          {openDropdown === "delivery" && (
            <div className="px-4 py-3 text-gray-600 border-t">
              Fast delivery all over Pakistan.
            </div>
          )}
        </div>
      </div>

      {/* FOR BIG SCREEN  TABS */}
      <div className="w-full max-w-md mx-auto mt-10 border" id="SmScreen">
        <div className="flex justify-start bg-[#f1f1f1] text-xl rounded">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`p-2 uppercase ${
              activeTab == "tab1" ? "bg-[#cccccc]" : ""
            } `}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`p-2 uppercase ${
              activeTab == "tab2" ? "bg-[#cccccc]" : ""
            }`}
          >
            Policy
          </button>
          <button
            onClick={() => setActiveTab("tab3")}
            className={`p-2 uppercase ${
              activeTab == "tab3" ? "bg-[#cccccc]" : ""
            }`}
          >
            Delivery
          </button>
        </div>

        <div>
          {/* DESCRIPTION */}
          {activeTab === "tab1" && (
            <div className="p-5">
              <h5 className="font-semibold text-lg underline underline-offset-4 decoration-double">
                Description
              </h5>
              <p>{product?.description}</p>
            </div>
          )}

          {/* POLICY */}
          {activeTab === "tab2" && (
            <div className="p-5">
              <h5 className="font-semibold text-lg underline underline-offset-4 decoration-double">
                Policy
              </h5>
              <ol className="p-2 list-decimal">
                <li className="font-bold my-2">
                  Return & Exchange Policy
                  <ul className="font-normal list-disc mx-5">
                    <li>
                      Perfumes can only be returned or exchanged if they are
                      unopened, unused, and in their original packaging within a
                      specified time frame (e.g., 7–14 days).
                    </li>
                    <li>
                      Opened or used bottles are usually non-returnable due to
                      hygiene reasons.
                    </li>
                  </ul>
                </li>
                <li className="font-bold my-2">
                  Authenticity & Quality Assurance Policy
                  <ul className="font-normal list-disc mx-5">
                    <li>
                      The brand guarantees that all products are 100% original,
                      authentic, and manufactured under strict quality
                      standards.
                    </li>
                    <li>
                      No counterfeit or imitation products are sold under the
                      brand name.
                    </li>
                  </ul>
                </li>
                <li className="font-bold my-2">
                  Privacy & Data Protection Policy
                  <ul className="font-normal list-disc mx-5">
                    <li>
                      Customer personal information (name, address, contact
                      details) is kept confidential and used only for order
                      processing and promotional communication with consent.
                    </li>
                    <li>
                      Data is not shared with third parties without customer
                      approval.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          )}

          {/* DELIVERY */}
          {activeTab === "tab3" && (
            <div className="p-5">
              <h5 className="font-semibold text-lg underline underline-offset-4 decoration-double">
                Delivery
              </h5>
              <p>Fast delivery all over Pakistan.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
