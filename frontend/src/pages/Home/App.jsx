import Swiper from "../../components/Swiper/App.jsx";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Base_URL from "../Base_URL.js";
import axios from "axios";
// import feedbackVideo from "../../videos/feedbackVideo.mp4";

const App = () => {
  const [feedback, setFeedback] = useState([]);

  const feedbackVideos = [
    // {
    //   video: feedbackVideo,
    //   title: "Ahmed Raza",
    //   text: "Absolutely love this fragrance! It smells premium and lasts all day.",
    // },
    // {
    //   video: feedbackVideo,
    //   title: "Sarah Khan",
    //   text: "The fragrance is elegant and refreshing. Highly recommended!",
    // },
    // {
    //   video: feedbackVideo,
    //   title: "Hamza Ali",
    //   text: "Amazing quality and beautiful packaging. Definitely buying again.",
    // },
    // {
    //   video: feedbackVideo,
    //   title: "Ayesha Malik",
    //   text: "One of my favorite fragrances. Long-lasting and very classy.",
    // },
    // {
    //   video: feedbackVideo,
    //   title: "Usman Ahmed",
    //   text: "The scent is incredible and I received so many compliments.",
    // },
  ];

  //CUSTOMER FEEDBACKS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${Base_URL}/getreviews`);
        // console.log(res?.data?.data, "FEEDBACK");
        setFeedback(res?.data?.data);
      } catch {
        console.error("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="text-2xl text-center bg-[#5e0808] text-white">
        WELCOME TO OUR STORE
      </div>
      <div className="bg-slate-50 text-gray-900">
        {/* HERO / SWIPER */}
        <section>
          <Swiper />
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 sm:py-16 px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-[#4a0a0a] font-semibold text-sm tracking-[4px] mb-2">
              OUR BENEFITS
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#4a0a0a]">
              WHY CHOOSE US
            </h1>

            <div className="w-16 h-1 bg-black mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Gift Bags */}
            <div
              className="
              group
              flex flex-col
              items-center
              justify-center
              text-center
              min-h-52
              sm:min-h-56
              p-6
              bg-white
              border
              border-gray-200
              rounded-2xl
              shadow-sm
              hover:border-[#280303]
              hover:border-2
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >
              <div
                className="
                w-14 h-14
                flex items-center justify-center
                rounded-full
                bg-blue-50
                text-[#280303]
                mb-4
                group-hover:bg-[#280303]
                group-hover:text-white
                transition-all
                duration-300
              "
              >
                <CardGiftcardIcon fontSize="medium" />
              </div>

              <h2 className="font-semibold text-gray-900">
                GIFT BAGS & TESTERS
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Special gifts with selected products
              </p>
            </div>

            {/* Easy Exchange */}
            <div
              className="
              group
              flex flex-col
              items-center
              justify-center
              text-center
              min-h-52
              sm:min-h-56
              p-6
              bg-white
              border
              border-gray-200
              rounded-2xl
              shadow-sm
              hover:border-[#280303]
              hover:border-2
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >
              <div
                className="
                w-14 h-14
                flex items-center justify-center
                rounded-full
                bg-blue-50
                text-[#280303]
                mb-4
                group-hover:bg-[#280303]
                group-hover:text-white
                transition-all
                duration-300
              "
              >
                <CompareArrowsIcon fontSize="medium" />
              </div>

              <h2 className="font-semibold text-gray-900">EASY EXCHANGE</h2>

              <p className="text-sm text-gray-500 mt-2">
                Simple and convenient exchange policy
              </p>
            </div>

            {/* Happy Customers */}
            <div
              className="
              group
              flex flex-col
              items-center
              justify-center
              text-center
              min-h-52
              sm:min-h-56
              p-6
              bg-white
              border
              border-gray-200
              rounded-2xl
              shadow-sm
              hover:border-[#280303]
              hover:border-2
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >
              <div
                className="
                w-14 h-14
                flex items-center justify-center
                rounded-full
                bg-blue-50
                text-[#280303]
                mb-4
                group-hover:bg-[#280303]
                group-hover:text-white
                transition-all
                duration-300
              "
              >
                <TagFacesIcon fontSize="medium" />
              </div>

              <h2 className="font-semibold text-gray-900">
                25,000+ HAPPY CUSTOMERS
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Trusted by thousands of customers
              </p>
            </div>

            {/* Fast Shipping */}
            <div
              className="
              group
              flex flex-col
              items-center
              justify-center
              text-center
              min-h-52
              sm:min-h-56
              p-6
              bg-white
              border
              border-gray-200
              rounded-2xl
              shadow-sm
              hover:border-[#280303]
              hover:border-2
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
            >
              <div
                className="
                w-14 h-14
                flex items-center justify-center
                rounded-full
                bg-blue-50
                text-[#280303]
                mb-4
                group-hover:bg-[#280303]
                group-hover:text-white
                transition-all
                duration-300
              "
              >
                <LocalShippingIcon fontSize="medium" />
              </div>

              <h2 className="font-semibold text-gray-900">
                SHIPMENT WITHIN 24 HRS
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Fast and reliable delivery
              </p>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t border-gray-200"></div>
        </div>

        {/* CUSTOMER REVIEWS */}
        <section className="py-12 sm:py-16 px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-[#4a0a0a] font-semibold text-sm tracking-[3px] mb-2">
              CUSTOMER REVIEWS
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#4a0a0a]">
              WHAT OUR CUSTOMERS SAY
            </h1>

            <div className="w-16 h-1 bg-black mx-auto mt-4 rounded-full"></div>

            <div className="flex gap-3 overflow-x-scroll m-2 select-none">
              {feedback?.map((item, i) => (
                <>
                  <div
                    key={i}
                    className="border rounded-2xl p-3 text-center flex-shrink-0 w-72 md:w-80"
                  >
                    <p className="text-yellow-400 text-2xl mb-3">★★★★★</p>
                    <p className="font-light my-2">{item?.feedback}</p>
                    <div className="flex justify-center">
                      <img
                        // src={item?.perfumeImage}
                        src="https://media.istockphoto.com/id/1158358904/photo/spraying-perfume-on-dark-background-closeup-image.jpg?s=612x612&w=0&k=20&c=FgO1tJIxW_fVH0e7YHb-oMb_iDshELnMR6qXGILQFcU="
                        alt={item?.perfumeName}
                        className="w-32 rounded border"
                      />
                    </div>
                    <p className="font-bold text-center mt-4 underline underline-offset-4">
                      {item?.userName}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-6xl mx-auto">
              {/* Heading */}
              {/* <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4a0a0a]">
                  EXPERIENCE THE FRAGRANCE
                </h2>

                <p className="text-gray-600 mt-2">
                  Discover the essence of luxury through our signature
                  collection.
                </p>
              </div> */}

              {/* Video */}
              <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
                {/* HEADING */}
                {/* <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#4a0a0a]">
                    CUSTOMER FEEDBACK
                  </h2>

                  <p className="text-gray-600 mt-2">
                    See what our customers have to say about our fragrances.
                  </p>
                </div> */}

                {/* VIDEOS */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {feedbackVideos?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
                    >
                      {/* VIDEO */}
                      <div className="relative">
                        <video
                          src={item?.video}
                          className="w-full h-[400px] object-cover"
                          controls
                          muted
                          loop
                          playsInline
                        />
                      </div>

                      {/* CUSTOMER INFO */}
                      <div className="p-5 text-center">
                        <h3 className="text-xl font-bold text-[#4a0a0a]">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 mt-2 leading-6">
                          {item.text}
                        </p>

                        {/* STARS */}
                        <div className="text-yellow-400 text-2xl mt-3">
                          ★★★★★
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIEW PRODUCTS CTA */}
        <section className="pb-14 px-4">
          <div className="flex justify-center">
            <Link
              to="/products"
              className="
              inline-flex
              items-center
              justify-center
              px-7
              py-3
              rounded-xl
              bg-[#280303]
              text-white
              font-semibold
              tracking-wide
              hover:bg-[#170202]
              active:bg-blue-800
              hover:shadow-lg
              transition-all
              duration-200
            "
            >
              VIEW PRODUCTS
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
