# machines-agent-openai-responses-example

Minimal `openai-responses` starter for Machines agent cards.

## What this gives you

- Prewired Machines MCP endpoint config: `config/mcp.json`
- OpenAI Responses example with MCP tools: `src/run-agent.mjs`
- Working disposable-card flow script: `src/create-disposable-card-and-pay.mjs`
- Policy template: `machines.policy.json`

This starter uses Machines APIs directly. Add Crossmint/Privy/Openfort later if needed.

## Use

```bash
npm install
cp .env.example .env
# add MACHINES_USER_API_KEY and OPENAI_API_KEY
npm run flow
npm run agent
```

## Keep it simple

- Start with `npm run flow` first.
- Only use `npm run agent` after env is set.
- Keep policy narrow in `machines.policy.json`.
