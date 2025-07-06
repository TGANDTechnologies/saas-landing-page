"use client"
import productImage from "@/assets/product-image-1.png";
import Image from "next/image";
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import {motion,useScroll,useTransform} from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
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
            Fully Automated and Hands Free
          </h2>
          <p className="section-description mt-5">
          Custom AI Assistant that is fully trained on information and details about your company. Schedule meetings, send follow ups, answer questions, solve customer problems and more. 

          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10"/>
          <motion.img src={pyramidImage.src} alt="Pyramid Image" className="hidden md:block absolute -right-36 -top-32" height={262} width={262} style={{translateY}}/>
          <motion.img src={tubeImage.src} alt="Tube Image" height={248} width={248} className="hidden md:block absolute bottom-24 -left-36" style={{translateY}}/>
        </div>
      </div>
    </section>
  );
};
