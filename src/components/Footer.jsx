"use client";
import Link from "next/link";
import { Twitter, Linkedin, Youtube, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#02051b] text-white flex justify-center">
      {/* OUTER FOOTER */}
      <div className="w-full h-[427px] pt-16 pb-16 pl-20 pr-20">
        {/* INNER CONTENT */}
        <div className="w-[1248px] h-[198px] gap-[34px] grid grid-cols-5">
          {/* Logo Section */}
          <div className="col-span-2 space-y-4">
            <h2 className="text-lg font-bold text-[24px]">ClayCloudTechnology</h2>
            <p className="text-[16px] text-slate-400 leading-relaxed max-w-md">
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
                <MessageCircle className="w-5 h-5 hover:text-cyan-400 transition" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-[18px] mb-3">Company</h3>
            <ul className="space-y-2 text-[16px] text-slate-400">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-[18px] mb-3">Solutions</h3>
            <ul className="space-y-2 text-[16px] text-slate-400">
              <li>
                <Link href="#">AI &amp; Machine Learning</Link>
              </li>
              <li>
                <Link href="#">Cloud Native Apps</Link>
              </li>
              <li>
                <Link href="#">Data Platforms</Link>
              </li>
              <li>
                <Link href="#">CyberSecurity</Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold text-[18px] mb-3">Industries</h3>
            <ul className="space-y-2 text-[16px] text-slate-400">
              <li>
                <Link href="#">Financial Service</Link>
              </li>
              <li>
                <Link href="#">Healthcare</Link>
              </li>
              <li>
                <Link href="#">Retail &amp; eCommerce</Link>
              </li>
              <li>
                <Link href="#">Manufacturing</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="w-full h-[53px] flex justify-between pt-[33px] border-t border-slate-700 mt-10 text-[14px] text-slate-500">
          <p>© 2025 ClayCloud. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
