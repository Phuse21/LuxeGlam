"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 1, delay: 1, ease: "easeIn" },
        }}
        className="w-screen h-screen fixed top-0  bg-white z-40 pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
