"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Headset,
  Building2,
  User,
  MailCheck,
  Briefcase,
  Type,
  Send,
  ChevronDown,
  ChevronUp,
  MapPin
} from "lucide-react";

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const contactCards = [
    {
      title: "Email Support",
      email: "support@claycloud.ai",
      icon: <Mail className="text-blue-600" size={22} />,
    },
    {
      title: "Sales & Business",
      email: "sales@claycloud.ai",
      icon: <Building2 className="text-blue-600" size={22} />,
    },
    {
      title: "Customer Care",
      email: "care@claycloud.ai",
      icon: <Headset className="text-blue-600" size={22} />,
    },
  ];

  const faqs = [
    {
      q: "How does your AI cloud platform work?",
      a: "ClayCloud uses scalable AI microservices deployed on distributed cloud infrastructure to deliver intelligent automation and analytics.",
    },
    {
      q: "What cloud services do you provide?",
      a: "We offer AI integrations, cloud hosting, API automation, data pipelines, and enterprise cloud consulting.",
    },
    {
      q: "How secure is ClayCloud?",
      a: "We follow end-to-end encryption, SOC-2 compliance, multi-factor authentication, and zero-trust security standards.",
    },
    {
      q: "Can I try ClayCloud for free?",
      a: "Yes! We offer a 14-day free trial with full access to core features.",
    },
  ];

  return (
    <div className="bg-white min-h-screen md:mt-30 mt-24">
      {/* Wrapper to constrain width on small screens and center content */}
      <div className="mx-auto w-full max-w-3xl md:max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center flex-col mt-5 px-4 sm:px-6 md:px-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-blue-700 h-heading leading-tight text-center">
              Get in Touch with ClayCloud
            </h1>
            <p className="mt-2 mb-1 text-gray-600 text-sm sm:text-base p-text max-w-xl text-center px-2">
              We're here to help you build intelligent cloud solutions powered by AI.
            </p>
            {/* smaller underline on phone, larger on desktop */}
            <div className="h-[2px] w-24 sm:w-36 md:w-48 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 mt-3 rounded" />
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 mt-8 sm:mt-12 px-4 sm:px-6 md:px-0">
          {contactCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="p-[1.5px] rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300"
            >
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition h-full flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-blue-600">{item.icon}</div>
                  <h3 className="font-semibold text-base sm:text-lg text-blue-700 h-heading">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm p-text break-words">{item.email}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form + Office */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 sm:mt-12 px-4 sm:px-6 md:px-0">

          {/* Contact Form */}
          <div className="shadow-lg p-4 sm:p-5 rounded-2xl bg-white">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 h-heading">Contact</h2>

            <div className="mt-4 sm:mt-6 space-y-4">

  {/* Full Name */}
  <div className="relative">
    <User 
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      size={20}
    />
    <input
      placeholder="Full Name"
      className="w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  {/* Email */}
  <div className="relative">
    <MailCheck 
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      size={20}
    />
    <input
      placeholder="Email"
      className="w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-300"
      inputMode="email"
    />
  </div>

  {/* Company */}
  <div className="relative">
    <Briefcase
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      size={20}
    />
    <input
      placeholder="Company / Organization"
      className="w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  {/* Subject */}
  <div className="relative">
    <Type
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      size={20}
    />
    <input
      placeholder="Subject"
      className="w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  {/* Message */}
  <div className="relative">
    <Type
      className="absolute left-4 top-4 text-gray-400 pointer-events-none"
      size={20}
    />
    <textarea
      placeholder="Message"
      rows={5}
      className="w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

</div>

          </div>

          {/* Office / Map */}
          <div className="mt-2 md:mt-0">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 h-heading">
              Our Global Office
            </h2>

            <div className="mt-4 sm:mt-6 w-full rounded-xl overflow-hidden border bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-full h-44 sm:h-56 md:h-[408px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.75505127265671!2d73.03966407722295!3d19.01615999678223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3accc032d2b%3A0x51d4c7efd8f889e8!2sCasablanca!5e0!3m2!1sen!2sin!4v1764920980460!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  title="ClayCloud Office Map"
                />
              </div>

              {/* compact address block for mobile */}
              <div className="px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gray-500" size={16} />
                  <div>
                    <p className="text-sm text-gray-700">ClayCloud Headquarters</p>
                    <p className="text-xs text-gray-500">Casablanca (Displayed on map)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Office Info + FAQ */}
        <div className="px-4 sm:px-6 md:px-20 rounded-3xl pb-10 mt-10 sm:mt-16 bg-[#f7f7f7] rounded-t-lg">

          {/* FAQ */}
          <div className="p-2 text-center ">
            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl  font-bold h-heading">FAQ</h2>
          </div>

          <div className="mt-4 space-y-3 px-0 sm:px-2 md:px-0">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-3 sm:p-4 bg-white shadow-sm hover:shadow transition cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                role="button"
                aria-expanded={openFAQ === i}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium p-text text-sm sm:text-base">{item.q}</p>
                  {openFAQ === i ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>

                {openFAQ === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-gray-600 mt-3 p-text text-sm sm:text-base"
                  >
                    {item.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
