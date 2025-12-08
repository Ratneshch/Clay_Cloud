
"use client";

export default function TalkToUsPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center px-4 py-8 mt-15">

      <div className="w-full max-w-2xl">

        {/* Heading */}
        <div className="text-center mb-8 px-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Have questions? Our team is here to help.
          </p>
        </div>

        {/* Form CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 space-y-5">

          <div>
            <label className="text-gray-700 text-sm">Your Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Select Topic</label>
            <select
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>General Inquiry</option>
              <option>Tech Support</option>
              <option>Billing</option>
              <option>Feature Request</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-sm">Your Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition">
            Submit
          </button>

        </div>
      </div>
    </div>
  );
}
