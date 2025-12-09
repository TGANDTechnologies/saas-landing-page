import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "AI Agent Workforce - Context driven AI Employees",
  description: "Program your own context‑driven AI employee...",
  keywords: ["AI", "automation", "workforce", "agents"],
  authors: [{ name: "Your Company" }],
  creator: "Your Company",
  openGraph: {
    title: "AI Agent Workforce",
    description: "Program your own context‑driven AI employee...",
    url: "https://solamailer.com/about",
    type: "website",
    images: [
      {
        url: "../../assets/banner.png",
        width: 1200,
        height: 630,
        alt: "AI Agent Workforce",
      },
    ],
  },
  robots: "index, follow",
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
