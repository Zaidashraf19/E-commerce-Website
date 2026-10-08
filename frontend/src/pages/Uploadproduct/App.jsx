import { useState, useRef } from "react";
import axios from "axios";
import Base_URL from "../Base_URL.js";
import { Link } from "react-router-dom";

function Addproduct() {
  const [formData, setFormData] = useState({
    image1: null,
    image2: null,
    fullscreenImage: null,
    productName: "",
    description: "",
    category: "",
    discountedPrice: "",
    price: "",
  });

  // refs for file inputs
  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);

  // handle image selection
  const handleImageChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [field]: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const handleRemoveImage = (field, fileInputRef) => {
    setFormData((prev) => ({ ...prev, [field]: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${Base_URL}/Addproducts`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error?.response?.data?.error);
      });

    setFormData({
      image1: null,
      image2: null,
      fullscreenImage: null,
      productName: "",
      description: "",
      category: "",
      discountedPrice: "",
      price: "",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4 px-4 py-2">
        <p className="text-xl font-semibold hover:underline">
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <p className="font-semibold text-xl hover:underline">
          <Link to="/addproduct">Add Products</Link>
        </p>
        <p className="font-semibold text-xl hover:underline">
          <Link to="/addreviews">Add Reviews</Link>
        </p>
      </div>

      <form className="flex flex-col gap-3 p-4" onSubmit={handleSubmit}>
        {/* Image 1 */}
        <input
          type="file"
          accept="image/*"
          ref={fileInput1}
          onChange={(e) => handleImageChange(e, "image1")}
        />
        {formData.image1 && (
          <div className="relative w-32">
            <p
              onClick={() => handleRemoveImage("image1", fileInput1)}
              className="absolute top-0 right-0 cursor-pointer rounded-full px-1"
            >
              ❌
            </p>
            <img
              src={formData.image1}
              alt="Preview 1"
              className="w-32 h-32 object-cover rounded-md border cursor-pointer"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  fullscreenImage: formData.image1,
                }))
              }
            />
          </div>
        )}

        {/* Image 2 */}
        <input
          type="file"
          accept="image/*"
          ref={fileInput2}
          onChange={(e) => handleImageChange(e, "image2")}
        />
        {formData.image2 && (
          <div className="relative w-32">
            <p
              onClick={() => handleRemoveImage("image2", fileInput2)}
              className="absolute top-0 right-0 cursor-pointer rounded-full px-1"
            >
              ❌
            </p>
            <img
              src={formData.image2}
              alt="Preview 2"
              className="w-32 h-32 object-cover rounded-md border cursor-pointer"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  fullscreenImage: formData.image2,
                }))
              }
            />
          </div>
        )}

        {/* Other fields */}
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          placeholder="Product Name"
          className="border p-2"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2"
        />
        <div>
          <label className="font-semibold">Category</label> <br /> <br />
          <input
            type="radio"
            id="men"
            name="category"
            value="men"
            checked={formData.category === "men"}
            onChange={handleChange}
          />
          <label htmlFor="men">Men</label> <br />
          <input
            type="radio"
            id="women"
            name="category"
            value="women"
            checked={formData.category === "women"}
            onChange={handleChange}
          />
          <label htmlFor="women">Women</label> <br />
          <input
            type="radio"
            id="unisex"
            name="category"
            value="unisex"
            checked={formData.category === "unisex"}
            onChange={handleChange}
          />
          <label htmlFor="unisex">Unisex</label>
        </div>

        <input
          type="text"
          name="discountedPrice"
          value={formData?.discountedPrice}
          onChange={handleChange}
          placeholder="discountedPrice"
          className="border p-2"
        />
        <input
          type="text"
          name="price"
          value={formData?.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2"
        />
        <button type="submit" className="bg-[#4c0908] text-white p-2 rounded">
          Upload
        </button>
      </form>

      {/* Fullscreen Preview Modal */}
      {formData.fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() =>
            setFormData((prev) => ({ ...prev, fullscreenImage: null }))
          }
        >
          <img
            src={formData.fullscreenImage}
            alt="Full Preview"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </>
  );
}

export default Addproduct;
