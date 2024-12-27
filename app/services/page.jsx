"use client";
import { CursorContext } from "@/components/CursorContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
const Services = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex items-center justify-between">
          {/* Text */}
          <div className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Indulge in Our Luxurious Treatments
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored skincare solution for a healthy complexion, offering
              customized care for every skin type.
            </p>

            {/* items */}
            <div className="flex flex-1 flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] bg-accent"></div>
                <h3 className="text-2xl">Classic Facial</h3>
              </div>
              <p className="pl-6 text-[15px]">
                Deep cleanse, exfoliation, moisturizing, and nourishing for a
                refreshed complexion.
              </p>
            </div>

            {/* button */}
            <button className="btn mx-auto xl:mx-0">Discover More</button>
          </div>

          {/* Image */}
          <div className="hidden xl:flex w-[384px] h-[534px] relative">
            <Image
              src="/assets/treatments/img.jpg"
              fill
              alt="treatments"
              quality={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
