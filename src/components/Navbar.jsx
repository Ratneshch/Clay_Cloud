"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// IMPORT JSON
import navData from "@/data/navbar.json";

// Extract items
const navItems = navData.navItems;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openServiceChild, setOpenServiceChild] = useState(false);
  const [openMobileKey, setOpenMobileKey] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const navContains = navRef.current?.contains(e.target);
      const dropdownContains = dropdownRef.current?.contains(e.target);

      if (!navContains && !dropdownContains) {
        setOpenMenu(null);
        setOpenServiceChild(false);
        setIsOpen(false);
        setOpenMobileKey(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setOpenServiceChild(false);
    setIsOpen(false);
    setOpenMobileKey(null);
  }, [pathname]);

  const handleClick = (label) => {
    console.log("Clicked:", label);
  };

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-4 z-50 pointer-events-auto"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border border-blue-400 rounded-full bg-white shadow-sm">
        <div className="relative flex items-center gap-3 h-14 md:h-16">

          <Link
            href="/"
            className="text-base sm:text-lg md:text-xl font-heading font-bold text-slate-900 cursor-pointer"
          >
            ClayCloud Technologies
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 text-xs mt-2 sm:text-sm md:text-[16px] font-heading text-slate-700">
            {navItems.map((item) => {
              const isActive = openMenu === item.key;

              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.key)}
                >
                  <button
                    className={`flex items-center gap-1 pb-1 sm:pb-2 border-b-2 transition-colors ${
                      isActive
                        ? "border-[#1545e6] text-[#1545e6]"
                        : "border-transparent hover:text-slate-900"
                    }`}
                    aria-expanded={isActive}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>

                  {/* STANDARD MEGAMENU */}
                  {isActive && item.key !== "outsourcing" && (
                    <div
                      ref={dropdownRef}
                      onMouseEnter={() => setOpenMenu(item.key)}
                      onMouseLeave={() => {
                        setOpenMenu(null);
                        setOpenServiceChild(false);
                      }}
                      className="fixed top-[64px] w-full md:w-screen lg:w-6xl left-1/2 -translate-x-1/2 bg-white border-t border-slate-200 shadow-xl z-50 mt-4.5 py-6 sm:py-8 rounded-b-lg overflow-auto rounded-2xl"
                      style={{ WebkitOverflowScrolling: "touch" }}
                    >
                      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10">
                        {item.columns.map((col) => (
                          <div key={col.title}>
                            <h3 className="text-base sm:text-lg font-semibold text-[#1545e6] mb-3">
                              {col.title}
                            </h3>

                            <ul className="space-y-2">
                              {col.items.map((sub) => (
                                <li key={typeof sub === "string" ? sub : sub.label || sub.title}>
                                  <Link
                                    href={sub.slug}
                                    className="w-full text-left text-sm sm:text-base text-slate-800 hover:text-[#1545e6]"
                                    onClick={() => handleClick(sub)}
                                  >
                                    {typeof sub === "string" ? sub : sub.label || sub.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SERVICES MENU */}
                  {isActive && item.key === "outsourcing" && (
                    <div
                      ref={dropdownRef}
                      onMouseEnter={() => setOpenMenu(item.key)}
                      onMouseLeave={() => {
                        setOpenMenu(null);
                        if (!isMobile) setOpenServiceChild(false);
                      }}
                      className="fixed left-1/2 -translate-x-1/2 top-[64px] w-full md:w-screen lg:w-6xl bg-white border-t border-slate-200 shadow-xl z-50 py-6 sm:py-8 rounded-b-lg overflow-auto mt-4.5 rounded-2xl"
                      style={{ WebkitOverflowScrolling: "touch" }}
                    >
                      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 sm:px-10">
                        {/* LEFT COLUMN */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-[#1545e6] mb-3">
                            Services
                          </h3>

                          <ul className="space-y-3">
                            {item.columns[0].items.map((sub) => {
                              const isObj = typeof sub === "object";

                              return (
                                <li key={isObj ? sub.label : sub}>
                                  <button
                                    className={`w-full text-left text-sm sm:text-base ${
                                      isObj
                                        ? "text-[#1545e6] font-semibold"
                                        : "text-slate-800 hover:text-[#1545e6]"
                                    }`}
                                    onMouseEnter={() =>
                                      !isMobile && setOpenServiceChild(isObj)
                                    }
                                  >
                                    {isObj ? sub.label : sub}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-[#1545e6] mb-3">
                            Consulting Services
                          </h3>

                          <ul className="grid grid-cols-1 gap-y-3">
                            {item.columns[0].items[0].children.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="text-sm sm:text-base w-full text-left text-slate-800 hover:text-[#1545e6] block"
                              >
                                {s.name}
                              </Link>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:inline-flex ml-auto">
            <Link
              href="/contact"
              className="rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="ml-auto md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-200 bg-white"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <HiX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden w-full bg-white border-b border-slate-100">
          <div className="px-4 py-3 max-h-[75vh] overflow-y-auto">
            <ul className="flex flex-col gap-2 text-sm text-slate-800">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    className="w-full text-left font-semibold py-2 flex items-center justify-between"
                    onClick={() =>
                      setOpenMobileKey((prev) => (prev === item.key ? null : item.key))
                    }
                  >
                    <span>{item.label}</span>
                    <span>{openMobileKey === item.key ? "-" : "+"}</span>
                  </button>

                  {openMobileKey === item.key && (
                    <div className="pl-3 pt-1">
                      <ul className="space-y-1">
                        {item.columns[0].items.map((sub) => {
                          const isObj = typeof sub === "object";

                          if (!isObj)
                            return (
                              <li key={sub}>
                                <button className="w-full text-left py-1">
                                  {sub}
                                </button>
                              </li>
                            );

                          return (
                            <div key={sub.label} className="mt-3">
                              <h4 className="text-sm font-semibold text-[#1545e6] mb-2">
                                {sub.label}
                              </h4>

                              <ul className="space-y-2">
                                {sub.children.map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={`/services/${s.slug}`}
                                      className="block text-sm leading-snug"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {s.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <button
                className="mt-3 w-full rounded-md px-4 py-2 text-sm font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition cursor-pointer"
                onClick={() => {
                  handleClick("Contact");
                  setIsOpen(false);
                }}
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
