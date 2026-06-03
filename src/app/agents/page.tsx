import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

const compatibleClients = [
  "Cursor",
  "Claude Desktop",
  "Claude Code",
  "VS Code",
  "OpenAI Codex",
  "Any MCP-compatible client",
];

const toolCategories = [
  {
    title: "Contacts & CRM",
    description:
      "Search, create, and update contacts. Pull CRM context from HubSpot, Salesforce, and Pipedrive so your agent personalizes every interaction.",
  },
  {
    title: "Email & Outreach",
    description:
      "Draft on-brand messages, send one-off emails, and manage deliverability settings — all grounded in your company profile and brand voice.",
  },
  {
    title: "Campaigns & Sequences",
    description:
      "Launch campaigns, configure linear or branching sequences, set triggers and automations, and monitor performance from your AI workflow.",
  },
  {
    title: "Forms & Lead Capture",
    description:
      "List embeddable forms, review submissions, and route new leads into sequences without leaving your agent session.",
  },
  {
    title: "AI Auto-Replies & Journeys",
    description:
      "Enable intelligent auto-replies, customer journeys, and human-in-the-loop guardrails so agents act with the right level of autonomy.",
  },
  {
    title: "Analytics & Account",
    description:
      "Check send volume, token usage, sequence activity, and account limits so agents stay within plan boundaries.",
  },
];

const useCases = [
  "Qualify inbound leads and add them to the right nurture sequence",
  "Draft personalized follow-ups using live CRM and contact history",
  "Spin up a targeted campaign from a natural-language brief",
  "Review form submissions and trigger automations in one step",
  "Monitor outreach performance and suggest optimizations",
];

export default function AgentsPage() {
  return (
    <>
      <Header />
      <section className="pt-16 pb-12 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
        <div className="container">
          <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag">Model Context Protocol</div>
            </div>
            <h1 className="section-title mt-5">Sola Mailer MCP Server</h1>
            <p className="section-description mt-5">
              Connect Cursor, Claude, and other AI assistants directly to Sola
              Mailer. Your agents get full access to contacts, campaigns,
              sequences, CRM context, and outreach — without switching tools.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container max-w-4xl">
          <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea]">
            <h2 className="text-2xl font-semibold text-[#010d3e] mb-4">
              What is the MCP server?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Model Context Protocol (MCP) is an open standard that lets AI
              assistants call tools and read context from external systems. The
              Sola Mailer MCP server exposes your email marketing stack — contacts,
              campaigns, automations, CRM sync, and AI-powered outreach — as
              structured tools your agent can use in natural language. Build
              workflows in Cursor or Claude that manage real marketing operations
              on your behalf, with human-in-the-loop oversight built in.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-[#010d3e] text-center mb-8">
              Compatible clients
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {compatibleClients.map((client) => (
                <span
                  key={client}
                  className="tag bg-[#EAEEFE] border-[#183EC2]/20"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-[#010d3e] text-center mb-4">
              Available capabilities
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              The Sola Mailer MCP server provides a full toolkit for AI-driven
              email marketing and sales outreach.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {toolCategories.map((category) => (
                <div
                  key={category.title}
                  className="p-8 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea]"
                >
                  <h3 className="text-lg font-semibold text-[#010d3e] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-[#010d3e] text-center mb-4">
              How to connect
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Generate your MCP credentials from your Sola Mailer dashboard, then
              add the server to your AI client configuration.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#010d3e] mb-8 max-w-2xl mx-auto">
              <li>
                Sign in at{" "}
                <a
                  href="https://app.solamailer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black"
                >
                  app.solamailer.com
                </a>
              </li>
              <li>Open Settings and navigate to MCP / Integrations</li>
              <li>Generate an API key for your MCP client</li>
              <li>Add the server configuration below to your client</li>
            </ol>
            <div className="rounded-2xl bg-[#010d3e] text-[#EAEEFE] p-6 overflow-x-auto text-sm leading-relaxed">
              <pre className="whitespace-pre-wrap">
{`{
  "mcpServers": {
    "solamailer": {
      "url": "https://mcp.solamailer.com",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}`}
              </pre>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Replace <code className="text-[#010d3e]">YOUR_API_KEY</code> with
              the token from your dashboard. Need help?{" "}
              <a href="/contact" className="underline hover:text-black">
                Contact us
              </a>
              .
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-[#010d3e] text-center mb-8">
              Example use cases
            </h2>
            <ul className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
              {useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="flex items-start gap-3 text-muted-foreground text-sm"
                >
                  <span className="text-[#183EC2] font-bold shrink-0">→</span>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://app.solamailer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
            >
              Get started with Sola Mailer
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
