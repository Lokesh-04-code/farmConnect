import React, { useState } from "react";

const Navbar = ({ setactivepage, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-green-600 backdrop-blur sticky top-0 z-50 shadow">
      <nav className="sticky top-0 z-50 bg-green-700/90 backdrop-blur-md shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
    {/* Logo and Brand */}
    <div className="flex items-center gap-3">
      <img src="logo.jpg" alt="Logo" className="w-10 h-10 object-contain rounded-full" />
      <a href="#" className="text-2xl font-bold text-white">FarmConnect</a>
    </div>

    {/* Hamburger Menu Button (Mobile) */}
    <button
      className="sm:hidden text-white hover:text-gray-200 focus:outline-none text-2xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

    {/* Navigation Links */}
    <div className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-white text-lg ${menuOpen ? "flex" : "hidden"} sm:flex`}>
      <a href="#" className="hover:text-black transition">Home</a>
      <a href="#" className="hover:text-black transition">About Us</a>
      <a
        href="#"
        className="hover:text-black transition"
        onClick={() => setactivepage("Trends")}
      >
        Market Trends
      </a>
      <a href="#" className="hover:text-black transition">Weather Forecast</a>
      <a
        href="#"
        className="hover:text-black transition"
        onClick={() => setactivepage("products")}
      >
        Products
      </a>

      {/* Account and Logout */}
      <button
        onClick={onLogout}
        className="border border-white px-3 py-1 rounded hover:bg-white hover:text-green-600 transition"
      >
        Logout
      </button>

      <button
        onClick={() => setactivepage("account")}
        className="p-1 rounded-full hover:ring-2 hover:ring-white transition"
      >
        <img
          src="/account.png"
          alt="Account"
          className="w-8 h-8 object-cover rounded-full"
        />
      </button>
    </div>
  </div>
</nav>

      </header>
      <marquee className="scroll" behavior="right" direction="right">
        Today the highest crop price is tomato which is $200 per bag. Today's weather in your area, Amaravati, is 40 degrees.
      </marquee>
    </>
  );
};

export default Navbar;
