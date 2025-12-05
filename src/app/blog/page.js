"use client";

import Image from "next/image";

const caseStudies = [
  {
    title: "How Milpansy modernized DevOps to Support 15,000+ Transactions a Day",
    img: "/images/AI Trends.png",
    link: "#"
  },
  {
    title: "Ferns 20% to 24% Support Backlog from Agents & Transformed Customer Support for Operations",
    img: "/images/AI Bot Interface.png",
    link: "#"
  },
  {
    title: "How Smart Auto’s Cut Release Time by 70% with Future-ready DevOps",
    img: "/images/Webinar.png",
    link: "#"
  },
  // Add all card objects from your screenshot...
];

export default function CaseStudyPage() {
  return (
    <section className="w-full bg-white">
      {/* Top Title Section */}
      <div className="text-center py-10 mt-20">
        <h2 className="text-2xl font-bold text-[#1D2939]">
          Learn from our latest case studies and insights
        </h2>
        <p className="mt-2 text-gray-600 text-sm max-w-2xl mx-auto">
          Curated resources and case studies from our team to boost your
          knowledge and business growth.
        </p>
      </div>

      {/* Latest Case Studies */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-[#1D2939]">
          Check out our latest case studies
        </h3>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden bg-white"
          >
            <div className="w-full h-40 relative">
              <Image
                src={item.img}
                fill
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-[15px] font-semibold text-gray-800 leading-snug">
                {item.title}
              </h4>

              <a
                href={item.link}
                className="mt-3 inline-block text-sm font-medium text-blue-700 hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
