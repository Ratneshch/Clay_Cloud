"use client";
import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Industries", "Company", "Solutions", "Services", "Insights"];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4 font-inter">
      <div className="w-full max-w-6xl">
        {/* Main navbar pill */}
        <nav className="w-full border border-[#6c63ff] rounded-full bg-white/80 backdrop-blur-sm shadow-sm px-4 md:px-10 py-2.5 md:py-3 flex items-center">
          {/* Logo */}
          <div className="text-sm md:text-[24px] font-semibold text-slate-900 whitespace-nowrap">
            <span className="font-bold">ClayCloud</span> Technologies
          </div>

          {/* CENTER MENU - desktop/tablet */}
          <ul className="hidden md:flex flex-1 items-center justify-center gap-8 text-xs md:text-[16px] text-slate-600">
            {menuItems.map((item) => (
              <li
                key={item}
                className="hover:text-slate-900 cursor-pointer transition-colors"
                
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Contact Button - desktop/tablet */}
          <button className="hidden md:inline-flex ml-auto rounded-full px-6 py-2 text-xs md:text-[16px] font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition">
            Contact
          </button>

          {/* Mobile menu button */}
          <button
            className="ml-auto md:hidden inline-flex items-center justify-center rounded-full p-2 border border-slate-200 bg-white/80"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <HiX className="h-5 w-5 text-slate-800" />
            ) : (
              <HiOutlineMenu className="h-5 w-5 text-slate-800" />
            )}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden mt-2 w-full">
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-md border border-slate-100 py-3 px-4">
              <ul className="flex flex-col gap-2 text-sm text-slate-700">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className="py-1 hover:text-slate-900 cursor-pointer transition-colors text-left"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-3 w-full rounded-full px-4 py-2 text-sm font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
