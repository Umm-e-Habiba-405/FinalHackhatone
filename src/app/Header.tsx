// components/Header.tsx
import React from "react";

const Header= () => {
  return (
    <header className=" shadow-md">
   
<div className="container mx-auto px-4  w-full h-[70px] py-2 flex justify-between items-center bg-violet-500">
        <div className="flex items-center space-x-6 text-sm    ">
          <span className="top-[13px] left-[403px] px-36 text-white text-[21px]">📧 Ummehabiba@gmail.com</span>
          <span  className=" text-white text-21px] text-[21px]"> 📞 (123) 456 7890</span>
        </div>
        <div className="flex items-center space-x-4 text-white text-[17px]">
          <span>English</span>
          <span>USD</span>
          <a href="#" className="hover:underline">
            Login
          </a>
          <a href="#" className="hover:underline">
            Wishlist ♥
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-black px-40">
            Hekto
          </a>

          {/* Links */}
          <nav className="flex space-x-8 text-gray-700">
            <a href="#" className="hover:text-pink-600">
              Home
            </a>
            <a href="#" className="hover:text-pink-600">
              Pages
            </a>
            <a href="#" className="hover:text-pink-600">
              Products
            </a>
            <a href="#" className="hover:text-pink-600">
              Blog
            </a>
            <a href="#" className="hover:text-pink-600">
              Shop
            </a>
            <a href="#" className="hover:text-pink-600">
              Contact
            </a>
          </nav>

          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-l-md"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
