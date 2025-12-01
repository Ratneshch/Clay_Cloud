"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";

// Navbar items
const navItems = [
  {
    label: "Industries",
    key: "industries",
    columns: [
      {
        title: "Industries we focus on",
        items: [
          "Healthcare & Lifesciences",
          "Industrial",
          "Retail and CPG",
          "Travel & Hospitality",
          "Automotive",
          "HR Tech",
        ],
      },
    ],
  },
  {
    label: "Company",
    key: "company",
    columns: [
      {
        title: "Company",
        items: ["About us", "Partners", "Leadership", "Career"],
      },
    ],
  },
  {
    label: "Solutions",
    key: "solutions",
    columns: [
      {
        title: "Solutions",
        items: ["ClayCloudHR ", "AI powered Employee Query BOT"],
      },
    ],
  },
  {
    label: "Services",
    key: "outsourcing",
    columns: [
      {
        title: "Services",
        items: [
          "Consulting Services",
          "Pay per service model",
          "Contract based models",
          "End to end recruitment support",
          "Scalable BOT model",
        ],
      },
    ],
  },
  {
    label: "Insights",
    key: "insights",
    columns: [
      {
        title: "Insights",
        items: ["Media", "Case studies – Public & Private", "Blog", "Event & Webinars"],
      },
    ],
  },
];

// Submenu for "Consulting Services"
const consultingServicesList = [
  "Data & AI Services",
  "Generative AI (GenAI) Solutions",
  "DevOps & Cloud Engineering",
  "Application Modernization",
  "UI/UX Design & Engineering",
  "Cybersecurity Services",
  "Managed Services",
  "Cloud Consulting & Advisory",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // which desktop dropdown is open
  const [openServiceChild, setOpenServiceChild] = useState(false); // consulting submenu
  const [openMobileKey, setOpenMobileKey] = useState(null); // mobile submenu
  const navRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
        setOpenServiceChild(false);
        setIsOpen(false);
        setOpenMobileKey(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (label) => {
    console.log("Clicked:", label);
  };

  return (
    <header ref={navRef} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4 font-inter">
        <div className="relative w-full border border-[#6c63ff] rounded-full bg-white/80 backdrop-blur-sm shadow-sm px-4 md:px-10 py-2.5 md:py-3 flex items-center">
        {/* Logo */}
        <button
          className="text-xl md:text-2xl font-heading font-bold text-slate-900 cursor-pointer"
          onClick={() => handleClick("ClayCloud Technologies")}
        >
          ClayCloud Technologies
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-xs md:text-[16px] font-heading text-slate-700">
          {navItems.map((item) => {
            const isActive = openMenu === item.key;

            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.key)}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setOpenServiceChild(false);
                }}
              >
                {/* MAIN LABEL */}
                <button
                  className={`flex items-center gap-1 pb-3 border-b-2 transition-colors ${
                    isActive
                      ? "border-[#1545e6] text-[#1545e6]"
                      : "border-transparent hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </button>

                {/* MEGA MENU NON-SERVICES */}
                {isActive && item.key !== "outsourcing" && (
                  <div className="fixed left-0 top-[60px] w-screen bg-white border-t border-slate-200 shadow-xl animate-fadeIn z-50 py-10 rounded-2xl">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-3 gap-10 px-10">
                      {item.columns.map((col) => (
                        <div key={col.title}>
                          <h3 className="text-lg font-semibold text-[#1545e6] mb-3">
                            {col.title}
                          </h3>
                          <ul className="space-y-2">
                            {col.items.map((sub) => (
                              <li key={sub}>
                                <button
                                  className="w-full text-left text-sm text-slate-800 hover:text-[#1545e6]"
                                  onClick={() => handleClick(sub)}
                                >
                                  {sub}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SERVICES MEGA MENU */}
                {isActive && item.key === "outsourcing" && (
                  <div className="fixed left-0 top-[60px] w-screen bg-white border-t border-slate-200 shadow-xl animate-fadeIn z-50 py-10 rounded-2xl">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-10 px-10">
                      {/* LEFT COLUMN */}
                      <div>
                        <h3 className="text-lg font-semibold text-[#1545e6] mb-3">Services</h3>
                        <ul className="space-y-3">
                          {item.columns[0].items.map((sub) => (
                            <li key={sub}>
                              <button
                                className={`w-full text-left text-sm ${
                                  sub === "Consulting Services"
                                    ? "text-[#1545e6] font-semibold"
                                    : "text-slate-800 hover:text-[#1545e6]"
                                }`}
                                onMouseEnter={() =>
                                  setOpenServiceChild(sub === "Consulting Services")
                                }
                                onClick={() => handleClick(sub)}
                              >
                                {sub}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* RIGHT PANEL */}
                      <div>
                        {openServiceChild ? (
                          <>
                            <h3 className="text-lg font-semibold text-[#1545e6] mb-3">
                              Consulting Services
                            </h3>
                            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                              {consultingServicesList.map((s) => (
                                <li key={s}>
                                  <button
                                    className="text-sm w-full text-left text-slate-800 hover:text-[#1545e6]"
                                    onClick={() => handleClick(s)}
                                  >
                                    {s}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <p className="text-sm text-slate-600 mt-2">
                            Hover on <strong>Consulting Services</strong> to view details.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Button */}
        <button
          className="hidden md:inline-flex ml-auto rounded-full px-6 py-2 text-sm font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition cursor-pointer"
          onClick={() => handleClick("Contact")}
        >
          Contact
        </button>

        {/* Mobile toggle */}
        <button
          className="ml-auto md:hidden inline-flex items-center justify-center rounded-full p-2 border border-slate-200 bg-white/80"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX className="h-5 w-5 text-slate-800" /> : <HiOutlineMenu className="h-5 w-5 text-slate-800" />}
        </button>
      </div>
      

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-2 w-full">
          <div className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-md border border-slate-100 py-3 px-4">
            <ul className="flex flex-col gap-2 text-sm text-slate-800">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    className="w-full text-left font-semibold py-1 cursor-pointer"
                    onClick={() =>
                      setOpenMobileKey((prev) => (prev === item.key ? null : item.key))
                    }
                  >
                    {item.label}
                  </button>

                  {openMobileKey === item.key &&
                    item.columns &&
                    item.columns[0] &&
                    item.columns[0].items && (
                      <ul className="pl-3 pt-1 space-y-1 text-slate-600">
                        {item.columns[0].items.map((subItem) => (
                          <li key={subItem}>
                            <button
                              className="w-full text-left text-[13px] leading-snug hover:text-slate-900 cursor-pointer"
                              onClick={() => handleClick(subItem)}
                            >
                              {subItem}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>

            <button
              className="mt-3 w-full rounded-full px-4 py-2 text-sm font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition cursor-pointer"
              onClick={() => handleClick("Contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;