"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

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
        items: [
          "Media",
          "Case studies – Public & Private",
          "Blog",
          "Event & Webinars",
        ],
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
  const [isOpen, setIsOpen] = useState(false); // mobile main menu
  const [openMenu, setOpenMenu] = useState(null); // which desktop dropdown is open
  const [openMobileKey, setOpenMobileKey] = useState(null); // which mobile section is open
  const [openServiceChild, setOpenServiceChild] = useState(false); // Consulting submenu open?

  const navRef = useRef(null);

  // close dropdowns when clicking anywhere outside navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
        setIsOpen(false);
        setOpenMobileKey(null);
        setOpenServiceChild(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // for now just log; later you can navigate with router.push()
  const handleClick = (label) => {
    console.log("Clicked:", label);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4 font-inter"
    >
      <div className="w-full max-w-6xl">
        {/* Main navbar pill */}
        <nav className="relative w-full border border-[#6c63ff] rounded-full bg-white/80 backdrop-blur-sm shadow-sm px-4 md:px-10 py-2.5 md:py-3 flex items-center">
          {/* Logo */}
          <button
            className="text-sm md:text-[24px] font-heading font-semibold text-slate-900 whitespace-nowrap cursor-pointer"
            onClick={() => handleClick("ClayCloud Technologies")}
          >
            <span className="font-bold">ClayCloud</span> Technologies
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-xs md:text-[16px] font-heading text-slate-700">
            {navItems.map((item) => {
              const isActive = openMenu === item.key;

              return (
                <div key={item.key} className="relative">
                  {/* Top-level label */}
                  <button
                    className={`pb-2 px-1 border-b-2 cursor-pointer transition-colors ${
                      isActive
                        ? "border-[#1545e6] text-[#1545e6]"
                        : "border-transparent hover:text-slate-900"
                    }`}
                    onClick={() =>
                      setOpenMenu((prev) => {
                        const next = prev === item.key ? null : item.key;
                        if (next !== "outsourcing") {
                          setOpenServiceChild(false);
                        }
                        return next;
                      })
                    }
                  >
                    {item.label}
                  </button>

                  {/* Normal dropdowns (all except Services) */}
                  {isActive && item.key !== "outsourcing" && (
                    <div className="absolute left-0 mt-[1px] w-64 rounded-md bg-white shadow-md border border-slate-200 py-3 px-4">
                      {item.columns.map((col) => (
                        <div key={col.title}>
                          <ul className="space-y-1">
                            {col.items.map((subItem) => (
                              <li key={subItem}>
                                <button
                                  className="w-full text-left text-sm text-slate-800 hover:text-[#1545e6] cursor-pointer"
                                  onClick={() => handleClick(subItem)}
                                >
                                  {subItem}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Services dropdown with conditional second column */}
                  {isActive && item.key === "outsourcing" && (
                    <div className="absolute left-0 mt-[1px] rounded-md bg-white shadow-md border border-slate-200 py-3 px-4">
                      <div
                        className={`flex ${
                          openServiceChild ? "w-[460px]" : "w-64"
                        } transition-all`}
                      >
                        {/* LEFT COLUMN */}
                        <div
                          className={`space-y-1 pr-4 ${
                            openServiceChild
                              ? "w-1/2 border-r border-slate-200"
                              : "w-full"
                          }`}
                        >
                          {item.columns.map((col) => (
                            <ul key={col.title} className="space-y-1">
                              {col.items.map((subItem) => {
                                const isConsulting =
                                  subItem === "Consulting Services";

                                return (
                                  <li key={subItem}>
                                    <button
                                      className={`w-full text-left text-sm cursor-pointer ${
                                        isConsulting
                                          ? "text-[#1545e6] font-semibold"
                                          : "text-slate-800 hover:text-[#1545e6]"
                                      }`}
                                      onMouseEnter={() => {
                                        if (isConsulting) {
                                          setOpenServiceChild(true);
                                        } else {
                                          setOpenServiceChild(false);
                                        }
                                      }}
                                      onClick={() => handleClick(subItem)}
                                    >
                                      {subItem}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          ))}
                        </div>

                        {/* RIGHT COLUMN - ONLY FOR CONSULTING */}
                        {openServiceChild && (
                          <div className="w-1/2 pl-4">
                            <ul className="space-y-1">
                              {consultingServicesList.map((service) => (
                                <li key={service}>
                                  <button
                                    className="w-full text-left text-sm text-slate-800 hover:text-[#1545e6] cursor-pointer"
                                    onClick={() => handleClick(service)}
                                  >
                                    {service}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Button - desktop/tablet */}
          <button
            className="hidden md:inline-flex ml-auto rounded-full px-6 py-2 text-xs md:text-[16px] font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition font-heading cursor-pointer"
            onClick={() => handleClick("Contact")}
          >
            Contact
          </button>

          {/* Mobile menu toggle */}
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

        {/* Mobile dropdown menu (unchanged) */}
        {isOpen && (
          <div className="md:hidden mt-2 w-full">
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-md border border-slate-100 py-3 px-4">
              <ul className="flex flex-col gap-2 text-sm text-slate-800">
                {navItems.map((item) => (
                  <li key={item.key}>
                    {/* Main mobile item */}
                    <button
                      className="w-full text-left font-semibold py-1 cursor-pointer"
                      onClick={() =>
                        setOpenMobileKey((prev) =>
                          prev === item.key ? null : item.key
                        )
                      }
                    >
                      {item.label}
                    </button>

                    {/* Inner list when open */}
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
      </div>
    </header>
  );
};

export default Navbar;
