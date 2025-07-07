"use client";

import { useRef } from "react";
import Image from "next/image";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cylinder.png";
import cylinderImage from "@/assets/cog.png";
import noodleImage from "@/assets/noodle.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion, useScroll, useTransform } from "framer-motion";

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
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative scale-x-[-1]
">
            <motion.img
              src={cogImage.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-right-6 lg:right-0"
              animate={{ translateY: [-30, 30] }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              alt="Cylinder"
              className="hidden md:block md:absolute top-[524px] right-[448px]"
              style={{ translateY }}
            />
            <motion.img
              src={cylinderImage.src}
              width={180}
              alt="Noodle"
              className="hidden lg:block absolute -top-8 -right-32 rotate-[30deg]"
              style={{ translateY }}
            />
          </div>

                    {/* Right content */}


        <div className="md:w-[478px] text-right">
  <div className="tag inline-block">Version 2.0 is here</div>

  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
    Fully Automated Email Assistant
  </h1>

  <p className="text-xl text-[#010D3E] tracking-tight mt-6">
    Say hello to a hands-free AI email assistant trained on your company’s information — available 24/7.
  </p>

  <div className="flex justify-end gap-2 items-center mt-8 flex-wrap">
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-primary">Get a Free Trial</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Free Trial</DialogTitle>
          <DialogDescription>
            Fill in your details and we’ll get in touch shortly.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 mt-4 text-left"> {/* form remains left-aligned */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
            <input id="name" type="text" placeholder="John Doe" className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="business" className="text-sm font-medium">Business Name</label>
            <input id="business" type="text" placeholder="Acme Inc." className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" type="email" placeholder="john@acme.com" className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="contact" className="text-sm font-medium">Contact Number</label>
            <input id="contact" type="tel" placeholder="+1 555 123 4567" className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors">
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>

    <button className="btn btn-text gap-1">
      <span>Learn more</span>
      <ArrowIcon className="h-5 w-5" />
    </button>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
