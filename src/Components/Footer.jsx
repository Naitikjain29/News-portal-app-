import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-red-500">
              News<span className="text-white">Hub</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Bringing you breaking news, trending stories, technology,
              sports, business, entertainment and world updates in one place.
            </p>

            <div className="flex gap-4 mt-6 text-2xl">
              <a href="#" className="hover:text-blue-500 transition">
                <FaFacebook />
              </a>

              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaXTwitter />
              </a>

              <a href="#" className="hover:text-red-500 transition">
                <FaYoutube />
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Categories
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-red-500">Politics</a></li>
              <li><a href="#" className="hover:text-red-500">Sports</a></li>
              <li><a href="#" className="hover:text-red-500">Technology</a></li>
              <li><a href="#" className="hover:text-red-500">Business</a></li>
              <li><a href="#" className="hover:text-red-500">Health</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
              <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-red-500">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Newsletter
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive the latest headlines directly in your inbox.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 outline-none focus:border-red-500"
            />

            <button className="mt-4 w-full bg-red-600 hover:bg-red-700 py-3 rounded-md font-semibold transition">
              Subscribe
            </button>
          </div>

        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NewsPortal. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Stay Informed • Stay Ahead
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;