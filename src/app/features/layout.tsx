import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "AI Email Assistant - Features & MCP Integration",
  description:
    "Boost your productivity with our AI-powered email assistant. Streamline communication, automate outreach, and connect AI agents via our MCP server.",
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
