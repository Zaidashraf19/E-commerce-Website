import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* LOGO / BRAND */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://img.magnific.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
                alt="LOGO"
                className="w-14 h-14 rounded-full object-cover"
              />
            </Link>

            <p className="text-slate-400 leading-relaxed max-w-sm mb-5">
              Quality products at the best prices. Shop with confidence.
            </p>

            {/* CONTACT */}
            <div className="flex flex-col gap-3 text-slate-400">
              <a
                href="mailto:support@example.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <EmailIcon fontSize="small" />
                <span>support@example.com</span>
              </a>

              <a
                href="tel:+923000000000"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <LocalPhoneIcon fontSize="small" />
                <span>+92 XXX XXXXXXX</span>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-5">QUICK LINKS</h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
              >
                HOME
              </Link>

              <Link
                to="/about"
                className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
              >
                ABOUT
              </Link>

              <Link
                to="/products"
                className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
              >
                SHOP
              </Link>

              <Link
                to="/contactUs"
                className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h3 className="font-semibold text-lg mb-5">CUSTOMER SERVICE</h3>

            <div className="flex flex-col gap-3">
              <a
                href="https://postex.pk/tracking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
              >
                TRACK ORDER
              </a>
              <a className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">
                EXCHANGE
              </a>
              <a className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">
                TERMS & POLICY
              </a>
              <a className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">
                FAQs
              </a>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="border-t border-slate-800 mt-12 pt-10 text-center">
          <h3 className="text-xl font-semibold mb-2">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>

          <p className="text-slate-400 mb-6">
            Get updates about new products and special offers.
          </p>

          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1
                px-4
                py-3
                rounded-lg
                bg-white
                text-gray-900
                placeholder:text-gray-400
                outline-none
                border
                border-transparent
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
                transition
              "
            />

            <button
              className="
                px-6
                py-3
                rounded-lg
                bg-blue-600
                text-white
                font-medium
                hover:bg-blue-700
                active:bg-blue-800
                transition-colors
                duration-200
              "
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* POLICIES */}
        <div className="border-t border-slate-800 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* PAYMENT */}
            <p className="text-slate-400 text-sm">
              Secure Payments • Cash on Delivery
            </p>

            {/* POLICIES */}
            {/* <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              <Link
                to="/privacy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms
              </Link>

              <Link
                to="/refund"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
            </div> */}
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-slate-800 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
            <p className="text-slate-500 text-sm text-center">
              © 2026 Your Brand. All rights reserved.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-slate-900
                  text-slate-400
                  hover:bg-blue-600
                  hover:text-white
                  active:bg-blue-700
                  transition-all
                  duration-200
                "
              >
                <InstagramIcon fontSize="small" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-slate-900
                  text-slate-400
                  hover:bg-blue-600
                  hover:text-white
                  active:bg-blue-700
                  transition-all
                  duration-200
                "
              >
                <FacebookIcon fontSize="small" />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-slate-900
                  text-slate-400
                  hover:bg-blue-600
                  hover:text-white
                  active:bg-blue-700
                  transition-all
                  duration-200
                "
              >
                <MusicNoteIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
