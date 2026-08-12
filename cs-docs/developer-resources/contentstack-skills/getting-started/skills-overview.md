---
title: "Overview"
description: "Equip AI coding tools like Cursor, Claude Code, Codex, and Gemini with Contentstack Agent Skills to write precise, secure CMS and Delivery SDK code instantly."
url: /developers/skills-overview
---

# Overview

## Overview

Use this guide to understand what Contentstack Agent Skills are and which problems they solve before you install them. Skills give your AI coding tool (Claude Code, Cursor, Codex, or Gemini CLI) Contentstack-specific rules, spanning 21 skills across the CMS, Delivery SDK, Launch, Brand Kit, and Developer Hub product areas.

## AI assistant limitations that skills address

AI coding tools that do not have Contentstack-specific context tend to:

-   Use outdated or invented SDK method names and incorrect method chain orders.
-   Confuse the Content Delivery API (CDA), which is read-only, with the Content Management API (CMA), which provides write access.
-   Suggest unsafe patterns: API tokens hardcoded in source files, management tokens (CMA credentials) placed in client-side code, or a single Contentstack stack shared between Live Preview and production.
-   Create overly complex content type hierarchies, deeply nested reference chains, or schemas that omit localization fields and role-based publishing rules.

Each skill defines the correct patterns, known anti-patterns, and constraints for one product area. For example, the Tokens & Authentication skill rejects any code that places a management token in client-side code.

## Available skills

The 21 skills are organized into five product areas:

| Product area | Skills |
| --- | --- |
| **CMS** | Assets · Branches & Aliases · Data Modeling · Entries · Environments & Publishing · Localization · Releases · Roles & Permissions · Taxonomy · Tokens & Authentication · Variants & Personalization · Webhooks · Workflows |
| **Developer Experience** | Delivery SDK · Migrate JS→TS SDK · Live Preview & Visual Builder Support · Migration Companion |
| **Launch** | Sync env vars from .env.example · Trigger & Monitor Deployments |
| **Brand Kit** | Brand Kit Assistant |
| **Developer Hub** | Developer Hub App Architect |

**Additional Resource:** Refer to the [skills reference](/docs/developers/skills-reference) documentation for a description of each skill.

## Installation format selection and maintenance

Each skill is defined in a single SKILL.md source file. The repository generates one format per supported tool from that source. Install the format that matches your AI coding tool:

| Tool | What you install | What it produces | Install guide |
| --- | --- | --- | --- |
| **Claude Code** | A plugin from the marketplace | The router loads into context. Claude selects the matching skill per request. | [Install for Claude Code](/docs/developers/skills-get-started#install-for-claude-code) |
| **Cursor** | The plugin, or .mdc rule files copied into .cursor/rules/ | An always-on router rule and one rule file per skill | [Install for Cursor](/docs/developers/skills-get-started#install-for-cursor) |
| **Codex / OpenAI agents** | The codex/ directory of Markdown files | codex/AGENTS.md router and codex/<slug>/SKILL.md per skill | [Install for Codex](/docs/developers/skills-get-started#install-for-codex-openai-agents) |
| **Gemini CLI** | The extension via gemini extensions install contentstack/contentstack-agent-skills | The extension manifest wires the skills into Gemini | [Install for Gemini](/docs/developers/skills-get-started#install-for-gemini-cli) |
| **skills CLI** | A single skill on demand | The one skill you specify | [Use the skills CLI](/docs/developers/skills-get-started#use-a-single-skill) |

The source repository is at [github.com/contentstack/contentstack-agent-skills](https://github.com/contentstack/contentstack-agent-skills).

**Additional Resource:** Refer to the [How skills work](/docs/developers/skills-architecture) documentation for how the formats are generated from the source.

| Goal | Action | Reason |
| --- | --- | --- |
| Use one AI coding tool for all Contentstack tasks | Install the full collection for that tool (Claude Code, Cursor, Codex, or Gemini) | The router is included in the collection, so the tool selects skills without manual input |
| Use only one specific skill (for example, the Delivery SDK skill) | Use the skills CLI to pull that skill | The skills CLI installs one skill with no router overhead |
| Give all contributors on a shared repository the same skills | Commit the relevant directory (cursor/rules/ or codex/) into your repository | Anyone who clones the repository gets the same skill files |

**Note:** The Launch skills require Launch API access for the target project and environment.

### How skill selection works

The router is included in the tool's instructions. When you submit a request, the tool reads the routing table, matches the request to a skill, and applies that skill. You do not need to name a skill explicitly, but you can to target a specific one.

The skills CLI installs only the skill you specify. It does not include a router, so skills are not selected automatically.

### Keeping skills current

Build scripts generate all formats from skills/, so every tool receives the same content and updates. To update, re-run your tool's install command or pull the latest version of the repository.

**Additional Resource:** Refer to the [Architecture](/docs/developers/skills-architecture) documentation for the build process.
