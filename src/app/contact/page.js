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
      icon: <Mail className="text-blue-600" size={26} />,
    },
    {
      title: "Sales & Business",
      email: "sales@claycloud.ai",
      icon: <Building2 className="text-blue-600" size={26} />,
    },
    {
      title: "Customer Care",
      email: "care@claycloud.ai",
      icon: <Headset className="text-blue-600" size={26} />,
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
    <div className="bg-white min-h-screen mt-30">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center flex-col mt-5">
          <h1 className="text-3xl font-bold text-blue-700 h-heading">
            Get in Touch with ClayCloud
          </h1>
          <p className="mt-2 mb-1 text-gray-600 text-md p-text max-w-2xl">
            We're here to help you build intelligent cloud solutions powered by AI.
          </p>
          <div className="h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300"></div>
        </div>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 mx-40">
        {contactCards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="p-[1.5px] rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition h-full">
              <div className="flex items-center gap-3 mb-1">
                <div className="text-blue-600">{item.icon}</div>
                <h3 className="font-semibold text-lg text-blue-700 h-heading">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm p-text">{item.email}</p>
            </div>
          </motion.div>
        ))}
      </div>


      {/* Form + Office */}
      <div className="grid md:grid-cols-2 gap-10 mt-16 mx-40">

        {/* Contact Form */}
        <div className="shadow-lg p-5 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 h-heading">Contact</h2>

          <div className="mt-6 space-y-4">

            {/* Inputs with icons */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                placeholder="Full Name"
                className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:outline-blue-500"
              />
            </div>

            <div className="relative">
              <MailCheck className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                placeholder="Email"
                className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:outline-blue-500"
              />
            </div>

            <div className="relative">
              <Briefcase className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                placeholder="Company / Organization"
                className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:outline-blue-500"
              />
            </div>

            <div className="relative">
              <Type className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                placeholder="Subject"
                className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:outline-blue-500"
              />
            </div>

            <div className="relative">
              <Type className="absolute left-3 top-3 text-gray-400" size={20} />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:outline-blue-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition"
            >
              <Send size={20} /> Send Message
            </motion.button>

          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 h-heading">
            Our Global Office
          </h2>

          <div className="mt-6 w-full h-102 rounded-xl overflow-hidden border bg-gradient-to-br from-blue-50 to-blue-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.75505127265671!2d73.03966407722295!3d19.01615999678223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3accc032d2b%3A0x51d4c7efd8f889e8!2sCasablanca!5e0!3m2!1sen!2sin!4v1764920980460!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>

      </div>
      {/* Office Info + FAQ */}
        <div className="px-40 pb-10 mt-20 bg-[#f7f7f7]">

          {/* FAQ */}
          <div className="p-2 text-center ">
            <h2 className="mt-10 text-3xl font-bold h-heading">FAQ</h2>
          </div>

          <div className="mt-4 space-y-3">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow transition cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium p-text">{item.q}</p>
                  {openFAQ === i ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>

                {openFAQ === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-gray-600 mt-3 p-text"
                  >
                    {item.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
