import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sola Mailer MCP Server — Connect AI Agents to Your Email Stack",
  description:
    "Use the Sola Mailer Model Context Protocol (MCP) server to let Cursor, Claude, and other AI assistants manage contacts, campaigns, sequences, and outreach from your workflow.",
  keywords: ["MCP", "AI agents", "email automation", "Model Context Protocol", "Sola Mailer"],
  openGraph: {
    title: "Sola Mailer MCP Server",
    description:
      "Connect AI assistants to Sola Mailer for context-driven email marketing, CRM sync, and autonomous outreach.",
    url: "https://solamailer.com/agents",
    type: "website",
  },
  robots: "index, follow",
};

export default function AgentsLayout({ children }: { children: ReactNode }) {
  return children;
}
