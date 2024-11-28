import React, { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-[5vh] px-5 md:px-20 text-[10px] flex items-center justify-between">
      {/* Logo */}
      <div className="text-[#E0B100] text-lg md:text-xl font-bold">
        <p>Let'sBookit</p>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex">
        <ul className="text-[#F5F5F5] flex items-center gap-4 text-xs md:text-sm">
          <li className="cursor-pointer hover:text-[#E0B100]">About</li>
          <li className="cursor-pointer hover:text-[#E0B100]">Explore</li>
          <li className="cursor-pointer hover:text-[#E0B100]">Bookings</li>
          <li className="cursor-pointer hover:text-[#E0B100]">Find Ticket</li>
          <li className="cursor-pointer hover:text-[#E0B100]">Contact Us</li>
        </ul>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden text-[#E0B100] text-lg cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="absolute top-[5vh] left-0 w-full bg-[#202020] text-[#F5F5F5] flex flex-col items-center py-4 shadow-lg z-10">
          <ul className="text-center space-y-3 text-sm">
            <li className="cursor-pointer hover:text-[#E0B100]">About</li>
            <li className="cursor-pointer hover:text-[#E0B100]">Explore</li>
            <li className="cursor-pointer hover:text-[#E0B100]">Bookings</li>
            <li className="cursor-pointer hover:text-[#E0B100]">Find Ticket</li>
            <li className="cursor-pointer hover:text-[#E0B100]">Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
