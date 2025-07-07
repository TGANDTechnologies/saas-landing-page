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
            <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">About Us</div>
          </div>
          <h1 className="section-title mt-5">Built to Save You Time</h1>
          <p className="section-description mt-5">
            We are on a mission to eliminate the daily grind of email management.
            Our AI-powered assistant is designed to help you focus on what matters most—growing your business.
          </p>
        </div>

        <div className="mt-20 grid grid-10 gap-9 md:grid-cols-2">
          <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea] bg-white">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-muted-foreground">
              We believe email should not be a bottleneck. Our technology uses
              intelligent automation to simplify communication and increase your
              team's efficiency across the board.
            </p>
          </div>

          <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea] bg-white">
            <h3 className="text-xl font-semibold mb-2">Why We Exist</h3>
            <p className="text-muted-foreground">
              After seeing countless founders and teams drowning in inboxes, we
              set out to build a solution that actually works—fast, flexible, and
              always learning.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Questions? Ideas? Let’s talk:{" "}
            <a href="mailto:david@tgandtechnologies.com" className="text-black underline">
              david@tgandtechnologies.com
            </a>
          </p>
        </div>
      </div>
    </section>
            <Footer/>
    </>
  );
}
