import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            About Cruise Nation Safaris
          </h3>
          <p className="text-gray-800 font-semibold">
            At Cruise Nation Safaris, we offer unforgettable safari experiences,
            connecting you with the wonders of Africa's wilderness. Join us for
            an adventure of a lifetime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-800 font-semibold">
            <li className="mb-2">
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:text-white">
                Our Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/submit-review" className="hover:text-white">
                Submit a Review
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="font-semibold">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-800 mb-2">Phone: +254 712 345 678</p>
          <p className="text-gray-800 mb-2">
            Email: info@cruisenationsafaris.com
          </p>
          <p className="text-gray-800 mb-2">Address: Nairobi, Kenya</p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-facebook-f">
                <FaFacebook className="size-8" />
              </i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter">
                <FaTwitterSquare className="size-8" />
              </i>{" "}
              {/* Twitter Icon */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <i className="fab fa-instagram">
                <FaInstagram className="size-8" />
              </i>{" "}
              {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-100 font-bold">
        <p>&copy; 2024 Cruise Nation Safaris. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
