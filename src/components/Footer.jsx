"use client";
import Link from "next/link";
import { Twitter, Linkedin, Youtube, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#02051b] text-white  font-inter mt-10">
      {/* OUTER WRAPPER */}
      <div className="w-full px-6 sm:px-10 lg:px-20 py-12 lg:py-16 flex justify-center">
        {/* INNER CONTAINER */}
        <div className="w-full max-w-6xl">
          {/* TOP CONTENT */}
          <div className="grid gap-10 md:gap-[34px] grid-cols-2 lg:grid-cols-6">
            {/* Logo Section – full row on mobile (2 cols) */}
            <div className="col-span-2 space-y-4">
              <h2 className="font-bold text-[22px] sm:text-[24px]">
                ClayCloudTechnology
              </h2>
              <p className="text-[14px] sm:text-[16px] text-slate-400 leading-relaxed max-w-md">
                Intelligent cloud infrastructure for modern businesses.
                Scalable solutions built with confidence using AI-powered
                automation.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2 text-slate-400">
                <Link href="#">
                  <Twitter className="w-5 h-5 hover:text-cyan-400 transition" />
                </Link>
                <Link href="#">
                  <Linkedin className="w-5 h-5 hover:text-cyan-400 transition" />
                </Link>
                <Link href="#">
                  <Youtube className="w-5 h-5 hover:text-cyan-400 transition" />
                </Link>
                <Link href="#">
                  <Github className="w-5 h-5 hover:text-cyan-400 transition" />
                </Link>
                <Link href="#">
                  <FaWhatsapp className="w-5 h-5 hover:text-cyan-400 transition" />
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-[16px] sm:text-[18px] mb-3">
                Company
              </h3>
              <ul className="space-y-2 text-[14px] sm:text-[16px] text-slate-400">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Partners</Link></li>
                <li><Link href="#">Contact Us</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-bold text-[16px] sm:text-[18px] mb-3">
                Solutions
              </h3>
              <ul className="space-y-2 text-[14px] sm:text-[16px] text-slate-400">
                <li><Link href="#">AI &amp; Machine Learning</Link></li>
                <li><Link href="#">Cloud Native Apps</Link></li>
                <li><Link href="#">Data Platforms</Link></li>
                <li><Link href="#">CyberSecurity</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-bold text-[16px] sm:text-[18px] mb-3">
                Industries
              </h3>
              <ul className="space-y-2 text-[14px] sm:text-[16px] text-slate-400">
                <li><Link href="#">Financial Service</Link></li>
                <li><Link href="#">Healthcare</Link></li>
                <li><Link href="#">Retail &amp; eCommerce</Link></li>
                <li><Link href="#">Manufacturing</Link></li>
              </ul>
            </div>
        

 {/* Insights */}
            <div>
              <h3 className="font-bold text-[16px] sm:text-[18px] mb-3">
                Insights
              </h3>
              <ul className="space-y-2 text-[14px] sm:text-[16px] text-slate-400">
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Case Studies</Link></li>
                <li><Link href="#">News</Link></li>
            
              </ul>
            </div>
         </div>

          {/* BOTTOM BAR */}
          <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] sm:text-[14px] text-slate-500">
            <p className="text-center md:text-left">
              © 2025 ClayCloud. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
