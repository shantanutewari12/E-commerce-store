import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-10 sm:py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-7">
          <img className="w-28 sm:w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">© Shantanutiwari12.com</p>
          <img className="w-44 sm:w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-4 sm:gap-5 text-lg text-gray-400">
            <a
              href="https://github.com/shantanutewari12"
              className="hover:text-white duration-300 cursor-pointer"
            >
              <ImGithub />
            </a>
            <a
              href="https://www.youtube.com/"
              className="hover:text-white duration-300 cursor-pointer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/login"
              className="hover:text-white duration-300 cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              className="hover:text-white duration-300 cursor-pointer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/shantanutiwari08"
              className="hover:text-white duration-300 cursor-pointer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-sm sm:text-base flex flex-col gap-2">
            <p>Moradabad, Uttar Pradesh, India</p>
            <p>Mobile: +91 9368042721</p>
            <p>Phone: +91 6354619622</p>
            <p>E-Mail: stiwari12@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="text-sm sm:text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm text-white placeholder-gray-400"
            type="text"
            placeholder="E-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
