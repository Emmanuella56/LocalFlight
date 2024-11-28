import React from "react";

function Footer() {
  return (
    <div className="bg-[#222222] text-white py-10">
      <div className="mx-5 md:mx-20 text-center">
        {/* Branding Section */}
        <h2 className="text-[22px] sm:text-[30px] text-yellow-400 mb-4 font-semibold tracking-wider">
          Let'sBookit
        </h2>
        <p className="text-[14px] sm:text-[16px] text-gray-400 mb-2">
          Traveling is Joy
        </p>
        <p className="text-[14px] sm:text-[16px] text-gray-400">
          Explore the World of Fun
        </p>
      </div>

      {/* Footer Links Section */}
      <div className="border-t-[2px] border-gray-600 my-5 w-full">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center font-semibold h-[7vh] text-center text-gray-300">
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Explore
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Bookings
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Find Ticket
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>

      {/* Footer Copyright Section */}
      <p className="text-center text-[12px] sm:text-[14px] mb-5 text-gray-400">
        Designed by{" "}
        <span className="underline text-sm text-yellow-400">@Ella</span>
      </p>
    </div>
  );
}

export default Footer;
