"use client"
import productImage from "@/assets/product-image-1.png";
import Image from "next/image";
import {motion,useScroll,useTransform} from "framer-motion";
import { useRef } from "react";

export const ProductShowcase2 = () => {
  const sectionRef = useRef(null);

  // this is basically being used to add a parallax effect
  const {scrollYProgress}= useScroll({
    target: sectionRef,
    offset: ['start end','end start']
  })
  const translateY = useTransform(scrollYProgress,[0,1],[150,-150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="section-title mt-5">
            Customize Your AI Manager
          </h2>
          <p className="section-description mt-5">
          Ready to craft multi‑channel campaigns, qualify and nurture leads, run A/B tests, optimize messaging and send times, and deliver performance reports with configurable guardrails and simple human oversight.
          </p>

        </div>
           
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10"/>
          
        </div>
      </div>

   <section className="pb-9">
        <div className="container">
      
<div className="mt-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
  <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea] bg-white">
    <h2 className="text-lg font-semibold mb-2">Built to run on Context</h2>
    <p className="text-muted-foreground">
      Built on your business content — product docs, FAQs, support transcripts, and brand guidelines — the system uses your own context to generate accurate, on‑brand responses.
    </p>
  </div>

  <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea] bg-white">
    <h2 className="text-lg font-semibold mb-2">Targeted Campaigns</h2>
    <p className="text-muted-foreground mt-3">
      Take control to craft targeted outreach, or let the system run autonomously and optimize for you.
    </p>
  </div>
</div>
      
</div>
    </section>


    </section>
  );
};

export default ProductShowcase2;