/* eslint-disable react/jsx-key */
"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const pricingTiers = [
  {
    title: "Free Trial",
    monthlyPrice: 0,
    buttonText: "One month free trial",
    popular: false,
    inverse: false,
    features: [
      "Free trial for 1 month",
      "1000 email responses",
      "24/7 basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 99,
    buttonText: "Get Started",
    popular: true,
    inverse: false,
    features: [
      "Custom AI tone & personality setup",
      "Unlimited email responses",
      "24/7 direct line support",
      "Integrations (CRM, Calendar, etc.)",
      "One-to-one onboarding",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 299,
    buttonText: "Contact Us",
    popular: false,
    inverse: false,
    features: [
      "Custom AI tone & personality setup",
      "Unlimited email responses",
      "24/7 direct line support",
      "Integrations (CRM, Calendar, etc.)",
      "One-to-one onboarding",
      "Dedicated account manager",
      "Includes AI Sales Agent Feature",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Pay as you go. No contracts, no hidden fees. Cancel anytime. <b>Free trial for 1 month.</b> 
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-large font-bold text-black-50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%]text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                
                <Dialog>
  <DialogTrigger asChild>
    <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
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
                


                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
