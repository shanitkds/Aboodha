import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTimes, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#e2e2f0] text-gray-800 py-6 w-screen">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social icons */}
        <div className="flex gap-6 mb-4">
          <Link to="#">
            <FaFacebookF className="hover:text-blue-600 transition-colors duration-300" />
          </Link>
          <Link to="#">
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
          </Link>
          <Link to="#">
            <FaTimes className="hover:text-black transition-colors duration-300" />
          </Link>
          <Link to="#">
            <FaGithub className="hover:text-gray-900 transition-colors duration-300" />
          </Link>
          <Link to="#">
            <FaYoutube className="hover:text-red-600 transition-colors duration-300" />
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
