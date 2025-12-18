"use client"
import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


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
          <h2 className="section-title">Sign up to receive more information</h2>
          <p className="section-description mt-5">
            Want to learn more about Solamailer and your account? Fill out the form below to receive information and updates from us.
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
        <form className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mobile" className="font-medium">Mobile Phone</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="smsConsent"
              name="smsConsent"
              required
              className="mt-1"
            />
            <label htmlFor="smsConsent" className="text-sm">
              Please text me about my account and about marketing related to Solamailer
            </label>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-gray-900 transition"
          >
            Sign Up
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            By submitting this form, you are opting-in to receive information and messages, including marketing, from Solamailer. We will not sell your data or share it with any third parties or partners.
          </p>
        </form>
      </div>
    </section>
  );
};
