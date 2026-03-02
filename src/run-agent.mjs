import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("OPENAI_API_KEY is required");
}

const client = new OpenAI({ apiKey });

const response = await client.responses.create({
  model: process.env.OPENAI_MODEL || "gpt-5",
  tools: [
    {
      type: "mcp",
      server_label: "machines",
      server_url: process.env.MACHINES_MCP_URL || "https://mcp.machines.cash/mcp",
      require_approval: "never",
    },
  ],
  input:
    "Create a disposable card proposal for 25 USD, execute it, and summarize what happened in 3 short bullet points.",
});

if (typeof response.output_text === "string" && response.output_text.length > 0) {
  console.log(response.output_text);
} else {
  console.log(JSON.stringify(response, null, 2));
}
