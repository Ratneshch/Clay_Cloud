// "use client";

// export default function TalkToUsPage() {
//   return (
//     <div className="bg-white min-h-screen px-6 md:px-20 py-20">
      
//       {/* Hero */}
//       <h1 className="text-3xl font-bold text-blue-700 h-heading">
//         Talk to Us
//       </h1>
//       <p className="mt-4 text-gray-600 text-lg p-text max-w-2xl">
//         Have questions? Our AI & support team are here to help you anytime.
//       </p>

//       {/* Quick Options */}
//       <div className="grid md:grid-cols-4 gap-6 mt-14">
//         {[
//           "Chat with Support",
//           "Book a Demo",
//           "Request a Callback",
//           "Report an Issue",
//         ].map((title, i) => (
//           <div
//             key={i}
//             className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-lg transition flex items-center justify-center h-heading text-blue-700 font-semibold"
//           >
//             {title}
//           </div>
//         ))}
//       </div>

//       {/* Chat Box */}
//       <div className="mt-16 p-10 border rounded-2xl bg-blue-50">
//         <h2 className="text-3xl font-bold text-blue-700 h-heading">
//           Start a Conversation
//         </h2>
//         <p className="mt-2 text-gray-600 p-text">
//           Our AI assistant responds instantly.
//         </p>

//         <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
//           Start Chat
//         </button>
//       </div>

//       {/* Feedback Form */}
//       <div className="mt-20 max-w-2xl">
//         <h2 className="text-3xl font-bold text-gray-900 h-heading">
//           Send us your Feedback
//         </h2>

//         <div className="mt-6 space-y-4">
//           <input
//             placeholder="Your Name"
//             className="w-full p-3 border rounded-lg focus:outline-blue-500"
//           />
//           <input
//             placeholder="Email"
//             className="w-full p-3 border rounded-lg focus:outline-blue-500"
//           />
//           <select className="w-full p-3 border rounded-lg focus:outline-blue-500">
//             <option>Select Topic</option>
//             <option>General Inquiry</option>
//             <option>Tech Support</option>
//             <option>Feature Request</option>
//             <option>Billing</option>
//           </select>
//           <textarea
//             rows={5}
//             placeholder="Your Message"
//             className="w-full p-3 border rounded-lg focus:outline-blue-500"
//           />

//           <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
//             Submit Feedback
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { MessageCircle, Calendar, Phone, AlertCircle, Send } from "lucide-react";


export default function TalkToUsPage() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const quickOptions = [
  { title: "Chat with Support", icon: <MessageCircle size={24} /> },
  { title: "Book a Demo", icon: <Calendar size={24} /> },
  { title: "Request a Callback", icon: <Phone size={24} /> },
  { title: "Report an Issue", icon: <AlertCircle size={24} /> },
];


  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message
    setMessages(prev => [...prev, { type: "user", text: input }]);
    
    // Clear input
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { type: "bot", text: "Thank you for your message! We will get back to you shortly." }
      ]);
    }, 800);
  };

  return (
    <div className="bg-white min-h-screen px-4 sm:px-10 md:px-20 py-16 sm:py-20">

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mt-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">
          Talk to Us
        </h1>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          Have questions? Our AI & support team are here to help you anytime.
        </p>
      </div>

      {/* Quick Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 mx-20">
  {quickOptions.map((option, i) => (
    <div
      key={i}
      className="relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 shadow hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer text-center"
    >
      {/* Icon container with glow */}
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-md before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-blue-400 before:to-cyan-300 before:blur-lg before:opacity-30">
        <div className="relative text-white">{option.icon}</div>
      </div>

      {/* Title with small underline */}
      <h3 className="font-semibold text-base sm:text-lg text-gray-900 relative">
        {option.title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-1"></span>
      </h3>

    </div>
  ))}
</div>

     
        


      {/* Feedback Form */}
      <div className="mt-20 sm:mt-24 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Send us your Feedback
        </h2>

        <div className="mt-6 space-y-4">
          <input
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <select className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            <option>Select Topic</option>
            <option>General Inquiry</option>
            <option>Tech Support</option>
            <option>Feature Request</option>
            <option>Billing</option>
          </select>
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-xl hover:bg-blue-700 transition shadow-md font-medium">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
