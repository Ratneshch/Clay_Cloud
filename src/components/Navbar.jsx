"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navbar items (unchanged)
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

const consultingServicesList = [
  { name: "Data & AI Services", slug: "data-and-ai-services" },
  { name: "Generative AI (GenAI) Solutions", slug: "generative-ai-genai-solutions" },
  { name: "DevOps & Cloud Engineering", slug: "devops-cloud-engineering" },
  { name: "Application Modernization", slug: "application-modernization" },
  { name: "UI/UX Design & Engineering", slug: "ui-ux-design-engineering" },
  { name: "Cybersecurity Services", slug: "cybersecurity-services" },
  { name: "Managed Services", slug: "managed-services" },
  { name: "Cloud Consulting & Advisory", slug: "cloud-consulting-advisory" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // which desktop dropdown is open
  const [openServiceChild, setOpenServiceChild] = useState(false); // consulting submenu (desktop)
  const [openMobileKey, setOpenMobileKey] = useState(null); // mobile submenu
  const [isMobile, setIsMobile] = useState(false); // track small screens (touch)
  const navRef = useRef(null);
  const dropdownRef = useRef(null); // ref for the currently rendered dropdown

  const pathname = usePathname();

  // detect mobile breakpoint
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close dropdowns when clicking outside (but NOT when clicking inside dropdown)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const navContains = navRef.current && navRef.current.contains(target);
      const dropdownContains = dropdownRef.current && dropdownRef.current.contains(target);

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

  // Close dropdowns after navigation (route change)
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
      {/* === CLEAN SMALL NAVBAR: no blur, no outer white === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border border-blue-400 rounded-full bg-white shadow-sm">
        <div className="relative flex items-center gap-3 h-14 md:h-16">
          {/* Logo */}
          <button
            className="text-base sm:text-lg md:text-xl font-heading font-bold text-slate-900 cursor-pointer"
            onClick={() => handleClick("ClayCloud Technologies")}
          >
            ClayCloud Technologies
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 text-xs sm:text-sm md:text-[16px] font-heading text-slate-700">
            {navItems.map((item) => {
              const isActive = openMenu === item.key;

              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => {
                    setOpenMenu(item.key);
                  }}
                >
                  {/* MAIN LABEL */}
                  <button
                    className={`flex items-center gap-1 pb-1 sm:pb-2 border-b-2 transition-colors ${
                      isActive ? "border-[#1545e6] text-[#1545e6]" : "border-transparent hover:text-slate-900"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>

                  {/* MEGA MENU NON-SERVICES */}
                  {isActive && item.key !== "outsourcing" && (
                    <div
                      ref={dropdownRef}
                      onMouseEnter={() => setOpenMenu(item.key)}
                      onMouseLeave={() => {
                        setOpenMenu(null);
                        setOpenServiceChild(false);
                      }}
                      className="fixed left-0 top-[64px] w-full md:w-screen lg:w-6xl ml-25 bg-white border-t border-slate-200 shadow-xl z-50 mt-4.5 py-6 sm:py-8 rounded-b-lg overflow-auto rounded-2xl"
                      style={{ WebkitOverflowScrolling: "touch" }}
                    >
                      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-10">
                        {item.columns.map((col) => (
                          <div key={col.title} className="px-2 sm:px-0">
                            <h3 className="text-base sm:text-lg font-semibold text-[#1545e6] mb-3">
                              {col.title}
                            </h3>
                            <ul className="space-y-2">
                              {col.items.map((sub) => (
                                <li key={sub}>
                                  <button
                                    onMouseDown={(e) => e.stopPropagation()}
                                    className="w-full text-left text-sm sm:text-base text-slate-800 hover:text-[#1545e6]"
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
                    <div
                      ref={dropdownRef}
                      onMouseEnter={() => setOpenMenu(item.key)}
                      onMouseLeave={() => {
                        setOpenMenu(null);
                        if (!isMobile) setOpenServiceChild(false);
                      }}
                      className="fixed left-0 top-[64px] w-full md:w-screen lg:w-6xl bg-white border-t border-slate-200 shadow-xl z-50 py-6 sm:py-8 rounded-b-lg overflow-auto mt-4.5 rounded-2xl ml-25"
                      style={{ WebkitOverflowScrolling: "touch" }}
                    >
                      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 sm:px-10">
                        {/* LEFT COLUMN: Services */}
                        <div className="px-2 sm:px-0">
                          <h3 className="text-base sm:text-lg font-semibold text-[#1545e6] mb-3">Services</h3>
                          <ul className="space-y-3">
                            {item.columns[0].items.map((sub) => (
                              <li key={sub}>
                                <button
                                  onMouseDown={(e) => e.stopPropagation()}
                                  className={`w-full text-left text-sm sm:text-base ${
                                    sub === "Consulting Services"
                                      ? "text-[#1545e6] font-semibold"
                                      : "text-slate-800 hover:text-[#1545e6]"
                                  }`}
                                  onMouseEnter={() => !isMobile && setOpenServiceChild(sub === "Consulting Services")}
                                  onClick={() => {
                                    if (!isMobile) {
                                      /* desktop: hover-controlled */
                                    } else {
                                      if (sub !== "Consulting Services") handleClick(sub);
                                    }
                                  }}
                                >
                                  {sub}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* RIGHT COLUMN: Consulting Services */}
                        <div className="px-2 sm:px-0">
                          <h3 className="text-base sm:text-lg font-semibold text-[#1545e6] mb-3">Consulting Services</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-1 gap-y-3">
                            {consultingServicesList.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="text-sm sm:text-base w-full text-left text-slate-800 hover:text-[#1545e6] block"
                                onClick={() => {
                                  handleClick(s);
                                  if (isMobile) setOpenMenu(null);
                                }}
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
            <button
              className="rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition cursor-pointer"
              onClick={() => handleClick("Contact")}
            >
              Contact
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="ml-auto md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-200 bg-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX className="h-5 w-5 text-slate-800" /> : <HiOutlineMenu className="h-5 w-5 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (hamburger) */}
      {isOpen && (
        <div className="md:hidden w-full bg-white border-b border-slate-100">
          {/* SCROLLABLE MOBILE MENU */}
          <div className="px-4 py-3 max-h-[75vh] overflow-y-auto overscroll-contain">
            <ul className="flex flex-col gap-2 text-sm text-slate-800">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    className="w-full text-left font-semibold py-2 cursor-pointer flex items-center justify-between"
                    onClick={() => setOpenMobileKey((prev) => (prev === item.key ? null : item.key))}
                  >
                    <span>{item.label}</span>
                    <span className="text-slate-500 text-xs">{openMobileKey === item.key ? "-" : "+"}</span>
                  </button>

                  {openMobileKey === item.key && item.columns?.[0]?.items && (
                    <div className="pl-3 pt-1">
                      <ul className="space-y-1 text-slate-700">
                        {item.columns[0].items.map((sub) => (
                          <li key={sub}>
                            <button
                              className="w-full text-left text-[13px] leading-snug hover:text-slate-900 cursor-pointer py-1"
                              onClick={() => {
                                handleClick(sub);
                                setIsOpen(false);
                              }}
                            >
                              {sub}
                            </button>
                          </li>
                        ))}
                      </ul>

                      {/* If this is Services item, show Consulting Services list below (mobile-friendly) */}
                      {item.key === "outsourcing" && (
                        <div className="mt-3">
                          <h4 className="text-sm font-semibold text-[#1545e6] mb-2">Consulting Services</h4>
                          <ul className="space-y-2 text-slate-700">
                            {consultingServicesList.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  className="block text-sm leading-snug hover:text-slate-900"
                                  onClick={() => {
                                    handleClick(s);
                                    setIsOpen(false);
                                  }}
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button
              className="mt-3 w-full rounded-md px-4 py-2 text-sm font-semibold bg-[#28326c] text-white shadow-sm hover:opacity-90 transition cursor-pointer"
              onClick={() => {
                handleClick("Contact");
                setIsOpen(false);
              }}
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
