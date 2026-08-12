---
title: "Contentstack MCP Server Supports Only One Stack per Agent Configuration"
description: "Contentstack MCP Server Supports Only One Stack per Agent Configuration"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/05-architecture-recipes-supported-workflows/04-contentstack-mcp-server-supports-only-one-stack-per-agent-configuration
doc_type: faq
_cms_section_uid: cs851bc67aab8774ee
_cms_faq_uid: cs711029b416e8379a
---

# Contentstack MCP Server Supports Only One Stack per Agent Configuration

When configuring an agent to use the Contentstack MCP server, only a single CONTENTSTACK\_API\_KEY can be provided, and there is no way to manage entries or assets across multiple stacks from that one agent configuration.

**Root Cause**

The current MCP configuration accepts one CONTENTSTACK\_API\_KEY per agent, and that key is tied to a single stack. Multi-stack management within a single MCP configuration is not supported natively.

**Resolution**

1.  If you need an agent to work across multiple stacks, configure a separate MCP instance for each stack, each with its own CONTENTSTACK\_API\_KEY.
2.  Alternatively, build an external orchestration layer or application that routes requests to the correct stack-specific MCP agent based on which stack a given request needs.
3.  Design your agent workflows around whichever of the above matches your architecture, since a single MCP agent instance operates only within the one stack its API key belongs to.

Each MCP agent instance operates correctly within its assigned stack, and cross-stack operations are handled by routing between multiple stack-specific instances rather than expecting one instance to span stacks.
