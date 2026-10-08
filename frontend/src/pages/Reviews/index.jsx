import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Base_URL from "../Base_URL";

function Addreviews() {
  const [ReviewData, setReviewData] = useState({
    perfumeImage: null,
    fullscreenImage: null,
    feedback: "",
    userName: "",
    perfumeName: "",
  });

  const fileInput1 = useRef(null);

  const handleRemoveImage = (field, fileInputRef) => {
    setReviewData((prev) => ({ ...prev, [field]: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      setReviewData((prev) => ({
        ...prev,
        [field]: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ReviewData);

    axios
      .post(`${Base_URL}/addreviews`, ReviewData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error?.response);
      });
    setReviewData({
      perfumeImage: null,
      fullscreenImage: null,
      feedback: "",
      userName: "",
      perfumeName: "",
    });
  };

  return (
    <>
      {/* NAVBAR */}
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
        {/* Perfume Image */}
        <input
          type="file"
          accept="image/*"
          ref={fileInput1}
          onChange={(e) => handleImageChange(e, "perfumeImage")}
        />

        {ReviewData.perfumeImage && (
          <div className="relative w-32">
            {/* Show preview */}
            <img
              src={ReviewData.perfumeImage}
              alt="Perfume Preview"
              className="w-32 h-32 object-cover rounded-md border cursor-pointer"
              onClick={() =>
                setReviewData((prev) => ({
                  ...prev,
                  fullscreenImage: ReviewData.perfumeImage,
                }))
              }
            />
            <p
              onClick={() => handleRemoveImage("perfumeImage", fileInput1)}
              className="absolute top-0 right-0 cursor-pointer rounded-full px-1 bg-white"
            >
              ❌
            </p>
          </div>
        )}

        {/* Other fields */}
        <input
          type="text"
          name="perfumeName"
          value={ReviewData.perfumeName}
          onChange={handleChange}
          placeholder="Perfume Name"
          className="border p-2"
        />
        <input
          type="text"
          name="userName"
          value={ReviewData.userName}
          onChange={handleChange}
          placeholder="User Name"
          className="border p-2"
        />
        <input
          type="text"
          name="feedback"
          value={ReviewData.feedback}
          onChange={handleChange}
          placeholder="Feedback"
          className="border p-2"
        />
        <button type="submit" className="bg-[#4c0908] text-white p-2 rounded">
          Upload
        </button>
      </form>

      {/* Fullscreen Preview Modal */}
      {ReviewData.fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() =>
            setReviewData((prev) => ({ ...prev, fullscreenImage: null }))
          }
        >
          <img
            src={ReviewData.fullscreenImage}
            alt="Full Preview"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </>
  );
}

export default Addreviews;
