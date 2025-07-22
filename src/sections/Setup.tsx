"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';

export const Setup = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container relative">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="section-title mt-5">15 Minute Setup</h2>
          <p className="section-description mt-5">
            Here’s how your AI Assistant transforms your workflow in just 3 steps.
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div className="card w-full text-center">
            <div className="text-4xl font-bold text-[#001E80] mb-4">Step 1</div>
            <h3 className="text-xl font-semibold mb-2">Train</h3>
            <p className="text-muted-foreground">
              Answer questions about your products, service and business — our system learns and adapts instantly.
            </p>
          </div>

          <div className="card w-full text-center">
            <div className="text-4xl font-bold text-[#001E80] mb-4">Step 2</div>
            <h3 className="text-xl font-semibold mb-2">Contacts</h3>
            <p className="text-muted-foreground">
              Upload your contacts and add any relevant context — your AI will use this to personalize interactions and responses.
            </p>
          </div>

          <div className="card w-full text-center">
            <div className="text-4xl font-bold text-[#001E80] mb-4">Step 3</div>
            <h3 className="text-xl font-semibold mb-2">Campaigns</h3>
            <p className="text-muted-foreground">
              Select an outcome and manage campaigns effortlessly — your AI will optimize every aspect for maximum impact.
            </p>
          </div>
        </div>

        {/* Animated Decorations */}
        <motion.img
          src={pyramidImage.src}
          alt="Pyramid"
          className="hidden md:block absolute -right-36 -top-32"
          height={262}
          width={262}
          style={{ translateY }}
        />
        <motion.img
          src={tubeImage.src}
          alt="Tube"
          className="hidden md:block absolute bottom-24 -left-36"
          height={248}
          width={248}
          style={{ translateY }}
        />
      </div>
    </section>
  );
};
export default Setup;