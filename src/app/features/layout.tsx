import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "AI Email Assistant - About our service.",
  description:
    "Boost your productivity with our AI-powered email assistant. Streamline your communication, automate responses, and manage your inbox effortlessly.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="relative">
      <body>
        {children}
      </body>
    </html>
  );
}
