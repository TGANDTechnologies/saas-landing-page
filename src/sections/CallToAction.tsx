"use client"
import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Give us a try with a free trial</h2>
          <p className="section-description mt-5">
            Interested in giving our AI email assistant a try? Sign up for a free trial and see how it can help your business today!
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px] "
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY: translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          
          <Dialog>
  <DialogTrigger asChild>
    <button className="btn btn-primary">Get for free</button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Request a Free Trial</DialogTitle>
      <DialogDescription>
        Fill in your details and we’ll get in touch shortly.
      </DialogDescription>
    </DialogHeader>
    <form className="space-y-4 mt-4">
      <div className="flex flex-col space-y-1">
        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="business" className="text-sm font-medium">Business Name</label>
        <input
          id="business"
          type="text"
          placeholder="Acme Inc."
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          placeholder="john@acme.com"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="contact" className="text-sm font-medium">Contact Number</label>
        <input
          id="contact"
          type="tel"
          placeholder="+1 555 123 4567"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
      >
        Submit
      </button>
    </form>
  </DialogContent>
</Dialog>
          


          <button className="btn btn-text">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
