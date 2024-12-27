"use client";

import { useContext, useState } from "react";
import { CursorContext } from "./CursorContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      {/* topbar */}
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        topbar
      </div>

      <div className="container mx-auto flex items-center justify-between px-6">
        {/* logo */}
        <div>
          <Link href="/">
            <div className="text-3xl xl:text-4xl font-logo text-accent">
              LuxeGlam
            </div>
          </Link>
        </div>

        {/* Mobile Nav Trigger */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>

        {/* MObile Nav */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="bg-primary fixed top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          Mobile Nav
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
