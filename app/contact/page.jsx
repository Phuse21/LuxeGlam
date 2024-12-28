"use client";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="mx-auto container  pt-48 pb-12 xl:pb-0">
        <div className="flex flex-col gap-[px] xl:flex-row h-full">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col flex-1 justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Contact Info</h3>

            {/* items */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/phone.svg" fill alt="pin" />
                </div>
                {/* Phone */}
                <div className="flex-1 pt-1">
                  <h4 className="h4 mb-2">Phone Number</h4>
                  <div className="pt-1 flex-1">
                    <p>Phone: +233(0) 559518248</p>
                    <p>Fax: +233(0) 559518248</p>
                  </div>
                </div>
              </div>
              {/* end item */}
              {/* Address */}
              <div className="flex gap-4 items-start">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/pin.svg" fill alt="pin" />
                </div>
                {/* Address */}
                <div className="flex-1 pt-1">
                  <h4 className="h4 mb-2">Address</h4>
                  <p className="leading-relaxed">50 Dingo Street</p>
                  <p>Accra, Ghana</p>
                </div>
              </div>
              {/* end item */}
              {/* Email */}
              <div className="flex gap-4 items-start">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/email.svg" fill alt="pin" />
                </div>
                {/* Address */}
                <div className="flex-1 pt-1">
                  <h4 className="h4 mb-2">Email Address</h4>
                  <div className="flex flex-col gap-1">
                    <p>info@luxeglam.com</p>
                    <p>support@luxeglam.com</p>
                  </div>
                </div>
              </div>
              {/* end item */}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1"
          >
            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0">
              <h3 className="h3 mb-8 text-center">Get In Touch</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
