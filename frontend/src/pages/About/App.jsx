import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FavoriteIcon from "@mui/icons-material/Favorite";

const About = () => {
  return (
    <div className="bg-slate-100 text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-[#5e0808] text-[#f8f5f5] py-16 sm:py-20 px-5 selection:bg-bl">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-100 font-semibold text-sm tracking-[4px] mb-3">
            WELCOME TO OUR STORE
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            ABOUT US
          </h1>
          <p className="max-w-2xl mx-auto mt-5 text-blue-100 leading-relaxed">
            We are committed to providing quality products, reliable service,
            and an enjoyable shopping experience for every customer.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-14 sm:py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
              alt="Our store"
              className="
                w-full
                h-72
                sm:h-96
                object-cover
                hover:scale-105
                transition-transform
                duration-500
              "
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-[#4a0a0a] font-semibold text-sm tracking-[3px] mb-2">
              OUR STORY
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Built With Quality & Trust
            </h2>

            <p className="text-gray-600 leading-7 mb-4">
              Our goal is simple — to make online shopping easy, reliable, and
              enjoyable. We carefully select products that offer excellent
              quality and value.
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              From browsing our products to receiving your order, we focus on
              providing a smooth experience and excellent customer service.
            </p>

            <Link
              to="/products"
              className="
                inline-flex
                px-6
                py-3
                rounded-lg
                text-white
                font-semibold
                bg-[#5e0808]
                hover:bg-[#410808]
                active:bg-[#230a0a]
                transition-colors
                duration-200
              "
            >
              EXPLORE PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-white py-14 sm:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-10">
            <p className="text-[#4a0a0a] font-semibold text-sm tracking-[3px]">
              WHAT WE STAND FOR
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-2">OUR VALUES</h2>

            <div className="w-16 h-1 bg-[#4a0a0a] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* VALUE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* QUALITY */}
            <div
              className="
                text-center
                p-7
                rounded-2xl
                border
                border-gray-200
                bg-slate-50
                hover:bg-blue-50
                hover:border-blue-200
                hover:-translate-y-1
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-[#4a0a0a] mb-4">
                <VerifiedIcon />
              </div>

              <h3 className="font-bold text-lg mb-2">QUALITY</h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                We focus on offering reliable and quality products.
              </p>
            </div>

            {/* FAST DELIVERY */}
            <div
              className="
                text-center
                p-7
                rounded-2xl
                border
                border-gray-200
                bg-slate-50
                hover:bg-blue-50
                hover:border-blue-200
                hover:-translate-y-1
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-[#4a0a0a] mb-4">
                <LocalShippingIcon />
              </div>

              <h3 className="font-bold text-lg mb-2">FAST DELIVERY</h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                We work to get your orders delivered quickly and safely.
              </p>
            </div>

            {/* CUSTOMER SUPPORT */}
            <div
              className="
                text-center
                p-7
                rounded-2xl
                border
                border-gray-200
                bg-slate-50
                hover:bg-blue-50
                hover:border-blue-200
                hover:-translate-y-1
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-[#4a0a0a] mb-4">
                <SupportAgentIcon />
              </div>

              <h3 className="font-bold text-lg mb-2">CUSTOMER SUPPORT</h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Our customers can always reach out when they need help.
              </p>
            </div>

            {/* CUSTOMER FIRST */}
            <div
              className="
                text-center
                p-7
                rounded-2xl
                border
                border-gray-200
                bg-slate-50
                hover:bg-blue-50
                hover:border-blue-200
                hover:-translate-y-1
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-[#4a0a0a] mb-4">
                <FavoriteIcon />
              </div>

              <h3 className="font-bold text-lg mb-2">CUSTOMER FIRST</h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Your satisfaction is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SHOP WITH US */}
      <section className="py-14 sm:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#4a0a0a] font-semibold text-sm tracking-[3px]">
            SHOP WITH CONFIDENCE
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-5">
            Why Customers Choose Us
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-7">
            We believe great products should come with great service. That's why
            we focus on quality, transparent service, fast delivery, and
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready To Start Shopping?
          </h2>

          <p className="text-gray-600 mb-6">
            Explore our collection and find something you'll love.
          </p>

          <Link
            to="/products"
            className="
              inline-flex
              px-7
              py-3
              rounded-xl
              font-semibold
              text-white
                bg-[#5e0808]
                hover:bg-[#410808]
                active:bg-[#230a0a]
              hover:shadow-lg
              transition-all
              duration-200
            "
          >
            SHOP NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
