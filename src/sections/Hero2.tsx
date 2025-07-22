"use client";

import { useRef } from "react";
import Image from "next/image";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cylinder.png";
import cylinderImage from "@/assets/cog.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import DialogBox from "./DialogBox";

export const Hero2 = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-16 pb-20 md:py-32 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          

          {/* Left graphics */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            <motion.img
              src={cogImage.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-right-6 lg:right-0"
              animate={{ translateY: [-30, 30] }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder"
              className="hidden md:block md:absolute top-[524px] right-[448px]"
              style={{ translateY }}
            />
            <motion.img
              src={noodleImage.src}
              width={180}
              alt="Noodle"
              className="hidden lg:block absolute -top-8 -right-32 rotate-[30deg] "
              style={{ translateY }}
            />
          </div>

                    {/* Right content */}


        <div className="md:w-[478px] text-right">
  <div className="tag inline-block">Version 2.0 is here</div>

  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
    No More Drafting Marketing Emails
  </h1>

  <p className="text-xl text-[#010D3E] tracking-tight mt-6">
    Our platform automates the entire email marketing process, from crafting personalized messages to optimizing send times. Experience effortless and effective email marketing like never before.
  </p>

  <div className="flex justify-end gap-2 items-center mt-8 flex-wrap">
    <DialogBox
  trigger={
     <button className="btn btn-primary">Get a Free Trial</button>
  }
/>

    <button className="btn btn-text gap-1">
      <a href="/features">Learn more</a>
      <ArrowIcon className="h-5 w-5" />
    </button>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
