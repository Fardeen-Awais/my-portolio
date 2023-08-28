"use client";

import { motion } from "framer-motion";
import CountingNumbers from "../subcomponents/counting-numbers";

export default function WebVitals({ value, duration }:any) {
   
  return (
    <div className="relative h-full w-full">
      <motion.svg
        className="absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        width={140}
        height={140}
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: value/100 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="45"
          fill="#DCFCE7"
          stroke="#22C55E"
        />
      </motion.svg>
      <CountingNumbers
        value={value}
        duration={duration}
        className="relative p-8 my-5 sm:my-3 mx-auto flex items-center justify-center font-medium text-4xl text-green-500 dark:text-green-600 "
      />
    </div>
  );
}
