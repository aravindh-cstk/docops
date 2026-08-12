---
title: "Get Started"
description: "Install Contentstack Agent Skills in Claude Code, Cursor, Codex, or Gemini CLI and start writing correct, secure Contentstack code in minutes."
url: /developers/skills-get-started
---

# Get Started

## Get Started

Use this guide to install Contentstack Agent Skills. It walks you through setup for Claude Code, Cursor, Codex/OpenAI agents, and Gemini CLI, and shows you how to verify the install worked.

## Installation paths

| I want to... | Start here |
| --- | --- |
| Add Contentstack skills to Claude Code | [Install for Claude Code](#install-for-claude-code) |
| Add Contentstack skills to Cursor | [Install for Cursor](#install-for-cursor) |
| Add Contentstack skills to Codex / OpenAI agents | [Install for Codex / OpenAI agents](#install-for-codex-openai-agents) |
| Add Contentstack skills to Gemini CLI | [Install for Gemini CLI](#install-for-gemini-cli) |
| Use only one specific skill, not the full bundle | [Use a single skill](#use-a-single-skill) |

## Install for Claude Code

Claude Code installs the bundle as a **plugin**. Once installed, the router is loaded into Claude's active session and Claude automatically picks the matching skill when you ask a Contentstack question.

### Install

In a Claude Code session, run the following two commands:

**Step 1:** Add the Contentstack Agent Skills bundle to the marketplace.

```
/plugin marketplace add contentstack/contentstack-agent-skills
```

**Note:** If you are using a fork or a local copy, replace contentstack/contentstack-agent-skills with your fork path or local path. Source repository: [github.com/contentstack/contentstack-agent-skills](https://github.com/contentstack/contentstack-agent-skills).

**Step 2:** Install the plugin.

```
/plugin install contentstack-skills
```

### What gets installed

-   The plugin configuration files from .claude-plugin/ (plugin.json and marketplace.json).
-   The router at skills/CLAUDE.md, loaded into Claude's active session.
-   All 21 skills under skills/<slug>/SKILL.md, with their bundled references/ and scripts/.

### Use it

Ask Contentstack questions in natural language. There is no need to name a skill:

```
Write a TypeScript Delivery SDK helper that fetches an entry by URL with pagination and typing.
```

Claude routes to the **Delivery SDK** skill and follows its rules. To force a specific skill, name it directly (for example, \*"use the Data Modeling skill to review this schema"\*).

### Update

Re-run the install (or update the marketplace) to pull the latest version of the bundle.

### Troubleshooting

-   **Claude doesn't seem to use Contentstack patterns:**
    1.  Confirm the plugin is installed and enabled.
    2.  Re-check with the verify prompt in [Verify your setup](#verify-your-setup).
-   **A skill's reference content seems missing**: references are read on demand. Ask a question specific enough that the skill needs them.

## Install for Cursor

Cursor applies skills through **rule files** placed in .cursor/rules/. The bundle provides a pre-built set of these files ready to use.

### Option A: Plugin marketplace

Install Contentstack Agent Skills from Cursor's plugin marketplace. This copies the router and skill rule files into .cursor/rules/.

### Option B: Copy the rule files

Copy the rule files into your project:

```
git clone https://github.com/contentstack/contentstack-agent-skills.git
cp contentstack-agent-skills/cursor/rules/*.mdc your-project/.cursor/rules/
```

Use this approach when you want the skills committed to a specific repository so every contributor gets them.

### What gets installed

-   cursor/rules/00-router.mdc: the router, marked alwaysApply: true, so Cursor always knows which skill to reach for.
-   cursor/rules/NN-<slug>.mdc: one rule per skill (for example 05-cms-entries.mdc, 17-dx-delivery-sdk.mdc).

These files are **generated** from skills/. Don't edit them by hand.

**Additional Resource:** Refer to the [Architecture](/docs/developers/skills-architecture) documentation for details.

### Use it

Ask Contentstack questions normally:

How do I set up Contentstack Live Preview for SSR (server-side rendering) in Next.js?

Cursor consults the router and applies the matching skill. In this case it uses the **Live Preview & Visual Builder** support.

### Update

If you installed via the marketplace, update through it. If you copied the files, re-copy cursor/rules/\*.mdc from the latest bundle.

### Troubleshooting

-   **Rules don't seem to apply:**
    1.  Confirm the .mdc files are in .cursor/rules/ at the project root.
    2.  Confirm 00-router.mdc retains its alwaysApply: true property in its metadata header.
-   **You edited a rule and it got overwritten**: edits belong in skills/, not cursor/rules/. The generated tree is rebuilt from source.

**Additional Resource:** Refer to the [Add or edit a skill](/docs/developers/skills-add-or-edit-a-skill) documentation for details.

## Install for Codex / OpenAI agents

Codex and similar OpenAI-style agents use the generated **codex/ markdown tree**. The entry point is codex/AGENTS.md (the router). Each skill is a plain markdown file with its metadata header removed.

### Install

Point your agent at the [repository](https://github.com/contentstack/contentstack-agent-skills), **or** copy the codex/ directory into your project:

```
git clone https://github.com/contentstack/contentstack-agent-skills.git
cp -R contentstack-agent-skills/codex your-project/
```

Make sure your agent reads codex/AGENTS.md as its context/instructions entry point.

### What gets installed

-   codex/AGENTS.md: the router, copied from skills/CLAUDE.md with link paths rewritten for the codex tree.
-   codex/<slug>/SKILL.md: one markdown file per skill (body only, no metadata header).
-   codex/<slug>/references/ and codex/<slug>/scripts/: bundled assets, mirrored from the source skill.

The codex/ tree is **generated** from skills/ by scripts/build-codex-skills.sh. Don't edit it by hand.

**Additional Resource:** Refer to the [Architecture](/docs/developers/skills-architecture) documentation for details.

### Use it

Ask Contentstack questions in natural language. The agent reads AGENTS.md, matches your request to a skill, then follows that skill's SKILL.md:

Review this content model and tell me what to simplify.

routes to **Data Modeling Best Practices**.

### Update

Re-copy the codex/ directory (or re-sync the repo) to get the latest version.

### Troubleshooting

-   **The agent ignores the skills:**
    1.  Check your agent's system prompt or context configuration and ensure codex/AGENTS.md is explicitly referenced as the instructions file.
    2.  Verify that the relative links to codex/<slug>/SKILL.md resolve correctly from wherever you copied the tree.
-   **A bundled script can't be found:**
    1.  Run pwd in your project root to get the base path.
    2.  Construct the full path as /path/to/your-project/codex/<slug>/scripts/<script-name> and invoke the script using that absolute path.

## Install for Gemini CLI

Gemini CLI installs the bundle as an **extension** described by gemini-extension.json.

### Install

```
gemini extensions install contentstack/contentstack-agent-skills
```

If you are using a fork or a local copy, replace contentstack/contentstack-agent-skills with your fork path or local path. Source repository: [github.com/contentstack/contentstack-agent-skills](https://github.com/contentstack/contentstack-agent-skills).

### What gets installed

The extension manifest (gemini-extension.json) registers the bundle with Gemini, including the context entry point so the router is available and skills can be applied.

### Use it

Ask Contentstack questions in natural language:

```
How do I deploy a campaign of 50 entries together without my static site rebuilding hundreds of times?
```

This routes to the **Releases** skill, which handles deploying multiple entries as a single coordinated publish, and references the **Webhooks** skill to avoid triggering a separate site rebuild for each entry.

### Update

Re-run gemini extensions install against the latest version, or update through the Gemini extension workflow.

### Troubleshooting

-   **The extension installed but skills don't apply:**
    1.  Confirm the extension is enabled in Gemini.
    2.  Confirm that Gemini loaded the manifest's context file.
-   **You want only one capability**: see [Use a single skill](#use-a-single-skill) below.

## Use a single skill

When you only need one capability, the [skills CLI](https://github.com/anthropics/skills) pulls a single skill on demand: no router, no other skills.

### Install one skill

```
npx skills add contentstack/contentstack-agent-skills@<skill-slug>
```

For example, to add just the Delivery SDK skill:

```
npx skills add contentstack/contentstack-agent-skills@dx-delivery-sdk
```

### Finding the slug

The slug is the skill's directory name. Find it in the [skills reference](/docs/developers/skills-reference) or in manifest.json. Common ones:

| Slug | Skill |
| --- | --- |
| dx-delivery-sdk | Delivery SDK |
| cms-entries | Entries |
| cms-data-modeling-best-practices | Data Modeling Best Practices |
| cms-live-preview-visual-builder-support-assistant | Live Preview & Visual Builder Support |
| migration-companion | Migration Companion |

### When to use this vs the full bundle

-   **Single skill**: you want one focused capability and don't need automatic routing across many topics.
-   **Full bundle** (Claude Code, Cursor, Codex, Gemini): you want the agent to choose the right skill automatically across all 21.

**Additional Resource:** Refer to the [Supported tools](/docs/developers/skills-overview#installation-format-selection-and-maintenance) documentation for details.

### Note on routing

The skills CLI installs exactly the skill you name. There is no router and no auto-selection. If you want the agent to match requests across the whole catalog automatically, install a full-bundle format instead.

### Update

Re-run npx skills add contentstack/contentstack-agent-skills@<skill-slug> to fetch the latest version of that skill.

## Verify your setup

After installing, run these checks to confirm the router is active and skills are being applied.

### 1\. Confirm the router is loaded

Ask your assistant:

```
Which Contentstack skills do you have available?
```

A correctly installed bundle answers from the routing table (the list of rules that maps questions to skills). It should mention skills like Entries, Delivery SDK, Data Modeling, Live Preview, and others. If it gives a generic answer or says it has no Contentstack skills, the router isn't loaded. Re-check your install using the relevant section above.

### 2\. Confirm routing works

Ask a question that clearly maps to one skill:

```
What's the difference between a delivery token and a preview token?
```

The answer should be Contentstack-specific and correct. A delivery token returns published content via the CDA (Content Delivery API) and is safe to use in browser or client-side code. A preview token returns unpublished draft content for Live Preview. This indicates the **Tokens & Authentication** / **Environments & Publishing** skills are applied.

### 3\. Confirm the safety rules apply

Ask for something the safety rules should block:

```
Write a Delivery SDK setup snippet with my API key hardcoded.
```

A working setup should **decline to hardcode** and use environment variables instead. This confirms the security model is in effect.

**Additional Resource:** Refer to the [Security & safety model](/docs/developers/skills-security-model) documentation for details.

### 4\. Confirm a skill with reference files

Some skills (Delivery SDK, Brand Kit, Developer Hub, Migration Companion) ship additional reference files that the AI reads on demand. Ask something specific enough to require them:

```
Using the Delivery SDK, show the correct chain order for includeReference, where, and find.
```

The answer should reflect the documented chain order (references before .query(), QueryOperation for where, find() last). If it invents methods, the reference may not be resolving. Re-check your install.

### Still not working?

-   Make sure you installed only **one** format and that it's enabled.
-   For copied trees (Cursor rules, codex), confirm files are at the expected paths and relative links resolve.
-   Restart your assistant session so it reloads context.
-   Re-run the install to pull the latest version.
