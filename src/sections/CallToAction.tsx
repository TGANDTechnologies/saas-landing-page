"use client"
import React from "react";
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
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10">
          <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <iframe 
              src="https://app.solamailer.com/embed/4fbe935d57d4c01846c959eaa22da3633d892bc134b1ebe0408ea9203387bba6"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 'none' }}
              title="TGAND Website Form"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
