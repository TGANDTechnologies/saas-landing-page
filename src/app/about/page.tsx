// app/about/page.tsx

import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function AboutPage() {
  return (
    <>
            <Header />
            <Hero />
            <LogoTicker />
            <ProductShowcase/>
            <Pricing/>
            <CallToAction/>
            <Footer/>
    </>
  );
}
