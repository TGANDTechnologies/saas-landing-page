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
} from "@/components/ui/dialog";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    highlightFeatures: [
      "1,000 contacts",
      "2,000 email sends / month",
      "25,000 AI tokens",
      "1 embeddable form",
      "1 active sequence",
    ],
    allFeatures: [
      "Linear sequences (1 active)",
      "1 seat / sub-account",
      "Community support",
    ],
  },
  {
    title: "Starter",
    monthlyPrice: 399,
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    highlightFeatures: [
      "25,000 contacts",
      "150,000 email sends / month",
      "1.5M AI tokens",
      "Up to 5 forms",
      "Unlimited sequences",
    ],
    allFeatures: [
      "1 custom sending domain",
      "HubSpot read-only sync",
      "1 seat",
      "Email support (48h)",
      "$249/mo billed annually",
    ],
  },
  {
    title: "Growth",
    monthlyPrice: 799,
    buttonText: "Get Started",
    popular: true,
    inverse: false,
    highlightFeatures: [
      "100,000 contacts",
      "500,000 email sends / month",
      "5M AI tokens",
      "5,000 AI auto-replies",
      "Branching sequences",
    ],
    allFeatures: [
      "Unlimited forms",
      "CRM sync (HubSpot, Salesforce, Pipedrive)",
      "Customer journeys",
      "5 sending domains",
      "1,000 SMS",
      "3 seats",
      "Priority support (8h)",
      "$415/mo billed annually",
    ],
  },
  {
    title: "Scale",
    monthlyPrice: 2199,
    buttonText: "Contact Us",
    popular: false,
    inverse: true,
    highlightFeatures: [
      "500,000 contacts",
      "2M email sends / month",
      "20M AI tokens",
      "Unlimited AI replies",
      "Advanced branching",
    ],
    allFeatures: [
      "Unlimited forms",
      "Contact Memory Module",
      "Logic Chain Timeline",
      "Domain Warm-up Manager",
      "Unlimited domains",
      "Dedicated IP ($80/mo)",
      "5,000 SMS",
      "Advanced CRM sync",
      "10 seats (RBAC)",
      "Slack + onboarding",
      "99.9% SLA",
      "$749/mo billed annually",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading text-center max-w-xl mx-auto">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Tiered pricing. No contracts, no hidden fees. Cancel anytime.{" "}
            <b>Free trial for 1 month.</b>
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 flex flex-col gap-6 items-stretch lg:flex-row lg:justify-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={twMerge(
                "card flex flex-col justify-between max-w-sm w-full p-8 rounded-xl border shadow-sm",
                tier.inverse && "bg-black text-white border-black"
              )}
            >
              {/* Header */}
              <div>
                <div className="flex justify-between items-center">
                  <h3
                    className={twMerge(
                      "text-lg font-bold",
                      tier.inverse && "text-white"
                    )}
                  >
                    {tier.title}
                  </h3>

                  {tier.popular && (
                    <div className="text-xs px-3 py-1 rounded-full border">
                      <motion.span
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#71C2EF,#3BFFFF,#DD7DDF)] bg-[length:200%] bg-clip-text text-transparent font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-4xl font-bold">
                    ${tier.monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "text-sm opacity-60",
                      tier.inverse && "opacity-70"
                    )}
                  >
                    /month
                  </span>
                </div>

                {/* Button */}
                <a
                  href="https://app.solamailer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={twMerge(
                    "mt-6 w-full py-2 rounded-lg text-sm font-medium text-center inline-block",
                    tier.inverse
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  )}
                >
                  {tier.buttonText}
                </a>

                {/* Highlight Features */}
                <ul className="mt-8 flex flex-col gap-3">
                  {tier.highlightFeatures.map((feature) => (
                    <li className="flex items-center gap-3 text-sm">
                      <CheckIcon className="h-5 w-5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View All Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="mt-6 text-sm underline opacity-70 hover:opacity-100">
                    View all features
                  </button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{tier.title} Plan</DialogTitle>
                    <DialogDescription>
                      Full list of features included.
                    </DialogDescription>
                  </DialogHeader>

                  <ul className="mt-4 flex flex-col gap-3">
                    {[...tier.highlightFeatures, ...tier.allFeatures].map(
                      (feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <CheckIcon className="h-5 w-5 shrink-0" />
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};