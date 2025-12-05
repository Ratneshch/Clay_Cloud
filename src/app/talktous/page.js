"use client";

export default function TalkToUsPage() {
  return (
    <div className="bg-white min-h-screen px-6 md:px-20 py-20">
      
      {/* Hero */}
      <h1 className="text-3xl font-bold text-blue-700 h-heading">
        Talk to Us
      </h1>
      <p className="mt-4 text-gray-600 text-lg p-text max-w-2xl">
        Have questions? Our AI & support team are here to help you anytime.
      </p>

      {/* Quick Options */}
      <div className="grid md:grid-cols-4 gap-6 mt-14">
        {[
          "Chat with Support",
          "Book a Demo",
          "Request a Callback",
          "Report an Issue",
        ].map((title, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-lg transition flex items-center justify-center h-heading text-blue-700 font-semibold"
          >
            {title}
          </div>
        ))}
      </div>

      {/* Chat Box */}
      <div className="mt-16 p-10 border rounded-2xl bg-blue-50">
        <h2 className="text-3xl font-bold text-blue-700 h-heading">
          Start a Conversation
        </h2>
        <p className="mt-2 text-gray-600 p-text">
          Our AI assistant responds instantly.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
          Start Chat
        </button>
      </div>

      {/* Feedback Form */}
      <div className="mt-20 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 h-heading">
          Send us your Feedback
        </h2>

        <div className="mt-6 space-y-4">
          <input
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-blue-500"
          />
          <input
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-blue-500"
          />
          <select className="w-full p-3 border rounded-lg focus:outline-blue-500">
            <option>Select Topic</option>
            <option>General Inquiry</option>
            <option>Tech Support</option>
            <option>Feature Request</option>
            <option>Billing</option>
          </select>
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-blue-500"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
