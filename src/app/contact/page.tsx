import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export default function ContactPage() {
  return (
    <>
    <Header />
    <section className=" top-0 max-w-3xl mx-auto py-16 px-4 mb-24">
      <div className="text-center section-heading">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-description mt-4">
          We are here to help with questions, support, or anything else you need.
        </p>
      </div>

      <div className="mt-10 grid gap-8 text-[18px] text-[#010d3e] place-items-center">
        <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea] w-full mx-auto 
            sm:max-w-full md:max-w-[50%] lg:max-w-[33%];">
          <h2 className="text-lg font-semibold mb-2">Primary Contact</h2>
          <p>Email: <a href="mailto:david@tgandtechnologies.com" className="underline hover:text-black">david@solamailer.com</a></p>
          <p>Phone: <a href="tel:+14085047882" className="underline hover:text-black">(408) 504-7882</a></p>
        </div>

        <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea] w-full mx-auto 
            sm:max-w-full md:max-w-[50%] lg:max-w-[33%];">
          <h2 className="text-lg font-semibold mb-2">Support</h2>
          <p>Email: <a href="mailto:support@tgandtechnologies.com" className="underline hover:text-black">support@solamailer.com</a></p>
          <p>We typically respond within 24 hours.</p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
