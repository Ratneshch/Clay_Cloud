"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 bg-white text-white">
      {/* Adjust 100px if your header+footer height differs */}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[140px] font-bold leading-none text-black mt-50"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-lg md:text-xl text-gray-400 max-w-xl mt-6"
      >
        The page you’re looking for doesn’t exist or is currently under development.
        We're working on it — hang tight!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pb-40"
      >
        <Link
          href="/"
          className="mt-10 inline-block bg-gray-500 text-black font-semibold px-10 py-4 rounded-full text-lg hover:bg-gray-300 transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Page;
