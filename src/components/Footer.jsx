"use client";
import Link from "next/link";
import { Twitter, Linkedin, Youtube, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import navbar from "@/data/navbar.json";

const Footer = () => {
  const company = navbar.navItems.find((i) => i.label === "Company");
  const solutions = navbar.navItems.find((i) => i.label === "Solutions");
  const industries = navbar.navItems.find((i) => i.label === "Industries");
  const insights = navbar.navItems.find((i) => i.label === "Insights");

  return (
    <footer className="bg-[#02051b] text-white font-inter mt-10">
      <div className="w-full px-6 sm:px-10 lg:px-20 py-12 lg:py-16 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* TOP GRID */}
          <div className="grid gap-10 md:gap-[34px] grid-cols-2 lg:grid-cols-6">
            
            {/* Logo + Description */}
            <div className="col-span-2 space-y-4">
              <h2 className="font-bold text-[22px] sm:text-[24px]">
                ClayCloudTechnology
              </h2>
              <p className="text-[14px] sm:text-[16px] text-slate-400 leading-relaxed max-w-md">
                Intelligent cloud infrastructure for modern businesses. Scalable
                solutions built with confidence using AI-powered automation.
              </p>

              <div className="flex items-center gap-4 pt-2 text-slate-400">
                <Link href="#"><Twitter className="w-5 h-5 hover:text-cyan-400" /></Link>
                <Link href="#"><Linkedin className="w-5 h-5 hover:text-cyan-400" /></Link>
                <Link href="#"><Youtube className="w-5 h-5 hover:text-cyan-400" /></Link>
                <Link href="#"><Github className="w-5 h-5 hover:text-cyan-400" /></Link>
                <Link href="#"><FaWhatsapp className="w-5 h-5 hover:text-cyan-400" /></Link>
              </div>
            </div>

            {/* Dynamic Sections */}
            <FooterColumn
              title={company.columns[0].title}
              items={company.columns[0].items}
            />

            <FooterColumn
              title={solutions.columns[0].title}
              items={solutions.columns[0].items}
            />

            <FooterColumn
              title={industries.columns[0].title}
              items={industries.columns[0].items}
            />

            <FooterColumn
              title={insights.columns[0].title}
              items={insights.columns[0].items}
            />
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] sm:text-[14px] text-slate-500">
            <p>© 2025 ClayCloud. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
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

const FooterColumn = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-bold text-[16px] sm:text-[18px] mb-3">{title}</h3>
      <ul className="space-y-2 text-[14px] sm:text-[16px] text-slate-400">
        {items.map((item, index) => {
          // Simple string items
          if (typeof item === "string") {
            return (
              <li key={index}>
                <Link href="/pagenotfound">{item}</Link>
              </li>
            );
          }

          // Items with nested children (Services)
          if (item.children) {
            return (
              <li key={index}>
                <p className="font-semibold text-slate-300">{item.label}</p>
                <ul className="ml-3 mt-2 space-y-1">
                  {item.children.map((child, i) => (
                    <li key={i}>
                      <Link href={`/services/${child.slug}`}>{child.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          // Items with title & slug (Insights)
          if (item.title && item.slug) {
            return (
              <li key={index}>
                <Link href={item.slug}>{item.title}</Link>
              </li>
            );
          }

          // Items with label & path (Company)
          // Safe Link
     if ((item.path || item.slug) && (item.label || item.title)) {
          const href = item.path || item.slug;
          const text = item.label || item.title;
        return (
            <li key={index}>
            <Link href={href}>{text}</Link>
          </li>
       );
    }


          return null;
        })}
      </ul>
    </div>
  );
};

export default Footer;
