"use client";
import React from "react";

const Navbar = () => {
  return (
    // Fixed, centered container
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4 font-inter">
      <nav className="w-full max-w-6xl border border-[#6c63ff] rounded-full bg-white/80 backdrop-blur-sm shadow-sm px-6 md:px-10 py-3 flex items-center">
        {/* Logo */}
        <div className="text-sm md:text-[24px] font-semibold text-slate-900 whitespace-nowrap">
          <span className="font-bold">ClayCloud</span> Technologies
        </div>

        {/* CENTER MENU */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-8 text-xs md:text-[16px] text-slate-600">
          <li className="hover:text-slate-900 cursor-pointer">Industries</li>
          <li className="hover:text-slate-900 cursor-pointer">Company</li>
          <li className="hover:text-slate-900 cursor-pointer">Solutions</li>
          <li className="hover:text-slate-900 cursor-pointer">Services</li>
          <li className="hover:text-slate-900 cursor-pointer">Insights</li>
        </ul>

        {/* Contact Button */}
        <button className="ml-auto rounded-full px-6 py-2 text-xs md:text-sm font-medium bg-[#28326c] text-white shadow-sm hover:opacity-90 transition">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
