import React from "react";
import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-['linear-gradient(to_right,#f87bff, #fb92cf, #ffdd9b, #c2f0b1, #2fd8fe)'] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
      </div>
      <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/features">Features</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/policy">Privacy Policy and Terms</a>
      </nav>
      <div className="flex justify-center gap-6 mt-6"><SocialX />
      <SocialInsta />
      <SocialLinkedin />
      <SocialPin />
      <SocialYoutube /></div>
      <p className="mt-6">&copy; 2025 Sola Mailer, LLC. All rights reserved.</p>
    </footer>
  );
};
