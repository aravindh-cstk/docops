---
title: "Quickstart with LLM Skills"
description: "Instead of following the 5 developer Quickstarts manually, let a coding LLM (Claude Code, Codex CLI, Gemini CLI, Cursor, Windsurf, Continue, Cline) drive the setup."
url: /studio/quickstart-with-llm-skills
uid: bltf31aac403e2a07c1
---

# Quickstart with LLM Skills

## Quickstart: with LLM Skills (install, prompt, done)

Instead of following the 5 developer Quickstarts manually, let a coding LLM (Claude Code, Cursor, Copilot Chat, Windsurf, Continue, Cline) drive the setup for you. Studio ships **83 named skills**: reusable prompt files an LLM reads and executes.

**Time:** ~15 minutes for the whole install path. Faster than manual because you write English sentences, not code.

**Prereq:** [Check Studio is enabled for your organisation](/docs/studio/check-studio-access).

## What Skills are

A **Skill** is a self-contained markdown file that teaches an LLM one specific Studio task: install the SDK, register a component, build a Section, migrate a page. Each skill has:

-   **A name** (e.g. install-studio, register-component, build-section).
-   **A "when to use" description** that helps the LLM pick the right skill for the task.
-   **Step-by-step instructions** the LLM follows, including exact commands / snippets / verification checkpoints.

Skills are the same instructions our own docs use, packaged so an LLM can execute them autonomously.

Browse all 62: **[Skills index](https://studio-documentation.contentstackapps.com/prompts/index.html)**.

> **Have a design in hand?** Once skills are installed, your first prompt should be "Decompose this design for Studio" (with your Figma link, screenshot, or mock attached). The [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html) skill produces the atomic-component + Layer-2 + Section + Content Type plan you'll follow through the rest of the setup. Prerequisite reading on how designs become Sections: [From designs to Sections](/docs/studio/from-designs-to-sections).

## Step 1: Install the skills into your project

One curl command downloads every skill into your project's local prompt directory (typically .cursor/prompts/, .claude/, or wherever your LLM tool reads from):

```
curl -fsSL https://studio-documentation.contentstackapps.com/install.sh | sh
```

That's it. The installer detects your LLM tool (Claude Code / Cursor / Copilot / Cline / Windsurf / Continue), places skills in the right directory, and prints a success line per skill installed.

**Manual install**: if the auto-detect fails, or you want a specific override, see the [Skills page](https://studio-documentation.contentstackapps.com/prompts/index.html) for per-tool paste-in options.

## Step 2: Ask your LLM in plain English

### If you have a design: one prompt does the whole build

**Attach your Figma frame / screenshot / mock and type:**

> "Decompose this design for Studio and build it."

That fires [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html), which:

1.  Decomposes the design into atomics + Layer-2 containers + Sections + a proposed Content Type shape, and emits a **build sheet** as docs/<template-slug>-build-sheet.md in your repo.
2.  Asks you: "Scaffold + register these N components?" Answering **Yes** chains to register-component per new component.
3.  Asks you: "Author the Sections + Template automatically?" There are three options:

    -   **API path (default)**: chains author-composition-via-api to write composition JSON directly through the Content Management API (CMA). Fastest, no canvas clicks. Requires a management token in env.
    -   **Canvas path**: chains build-section + build-connected-template through Playwright MCP. Slower, produces a real canvas trail. Requires install-playwright-mcp.
    -   **Manual**: you follow the sheet in Studio's UI.
4.  Chains verify-setup to close the loop.

Result: **one prompt, three yeses, a shipping composition.** No manual canvas clicking unless you choose the manual option.

### Other common prompts

For non-design-first tasks, type any of these:

| You say | Skill fires | What happens |
| --- | --- | --- |
| "Install Studio in this project." | install-studio | Installs all three SDKs, bootstraps initStudio(...), adds the catch-all route. Asks you for stack credentials. |
| "Register my <Card> component with Studio." | register-component | Adds a registerComponent({ ... }) call for the component, infers propTypes from your TSX. |
| "Build a Hero section bound to the hero group." | build-section | Creates a Simple Section composition via the CMA. |
| "Build a card grid section over related\_posts." | build-repeating-section | Creates a List Section with Repeater + Condition Blocks. |
| "Build a Connected Template for blog posts at /blog/\[slug\]." | build-connected-template | Creates the Template composition + wires the URL pattern. |
| "Migrate this route to Studio." | migrate-page-to-studio | Reads a route file, generates equivalent Studio compositions, prints the JSX swap. |

For **greenfield builds starting from a design**, prefer the top prompt. It orchestrates the below skills automatically instead of you invoking each. Every skill above corresponds to one of the manual Quickstarts (Q1 to Q5): same outcome, done by the LLM instead of you.

## Step 3: Verify

After each skill run, check the outputs:

-   Files were created / modified as expected (skills print a diff of everything they touched).
-   No red errors in your dev server console (npm run dev).
-   The Studio canvas (in the Contentstack UI, open Studio, then your project) shows your app iframed correctly.

Failed? Ask the LLM: "Verify the Studio install." That fires the verify-setup skill, which runs a layered smoke test across the Delivery SDK, Live Preview, the Studio SDK, and the canvas, and identifies the lowest failing layer.

## Skills you'll use most

| Category | Skill | When to use |
| --- | --- | --- |
| **Setup** | [install-studio](https://studio-documentation.contentstackapps.com/prompts/install-studio.html) | Fresh install of Studio into any React app. |
| **Setup** | [verify-setup](https://studio-documentation.contentstackapps.com/prompts/verify-setup.html) | Anything's not working. Run this first. |
| **BYOC** | [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html) | Adding a new component to Studio's palette. |
| **BYOC** | [register-json-rte](https://studio-documentation.contentstackapps.com/prompts/register-json-rte.html) | Registering custom elements in JSON Rich Text fields. |
| **Sections** | [build-section](https://studio-documentation.contentstackapps.com/prompts/build-section.html) | Building a Simple Section (no iteration). |
| **Sections** | [build-repeating-section](https://studio-documentation.contentstackapps.com/prompts/build-repeating-section.html) | Building a List Section over Modular Blocks / References / group-multiple. |
| **Sections** | [expose-section-props](https://studio-documentation.contentstackapps.com/prompts/expose-section-props.html) | Making Section values overridable per Template instance. |
| **Sections** | [use-section-slot](https://studio-documentation.contentstackapps.com/prompts/use-section-slot.html) | Adding a Section Slot for Templates to fill. |
| **Templates** | [build-connected-template](https://studio-documentation.contentstackapps.com/prompts/build-connected-template.html) | Creating a Connected Template (content-type-bound). |
| **Templates** | [build-freeform-template](https://studio-documentation.contentstackapps.com/prompts/build-freeform-template.html) | Creating a Freeform Template (rare, check choose-connected-vs-freeform first). |
| **Composition** | [author-composition-via-api](https://studio-documentation.contentstackapps.com/prompts/author-composition-via-api.html) | Authoring compositions via CMA (seed pipelines, scripts). |
| **Migration** | [migrate-page-to-studio](https://studio-documentation.contentstackapps.com/prompts/migrate-page-to-studio.html) | Convert a hand-coded page/route into Studio compositions. |
| **Debug** | [troubleshoot](https://studio-documentation.contentstackapps.com/prompts/troubleshoot.html) | Anything's broken: general diagnostic. |
| **Debug** | [troubleshoot-canvas](https://studio-documentation.contentstackapps.com/prompts/troubleshoot-canvas.html) | Canvas-specific issues (blank, CORS, iframe). |
| **Debug** | [troubleshoot-data-binding](https://studio-documentation.contentstackapps.com/prompts/troubleshoot-data-binding.html) | Bindings resolve to undefined at runtime. |

## Skills vs manual Quickstarts

|  | Manual Quickstarts (Q1-Q5) | Skills |
| --- | --- | --- |
| Time | ~1 hour | ~15 min |
| You write | Every line of code | English sentences |
| You verify | Every checkpoint yourself | Skill runs verification automatically |
| Best for | Learning what Studio does | Getting to a working install fast |
| Best for | Debugging why something failed | Doing the same task the 5th time |

**Recommended path:** do **Q1 (Setup) manually** to internalize what Studio installs. Then use skills for Q2-Q5 and everything after. You get the understanding of how it works + the speed.

## What next

-   **[Author 5-min Quickstart](/docs/studio/author-your-first-edit)**: if you have a content author on your team to onboard, share this with them (no code involved).
-   **[Skills index](https://studio-documentation.contentstackapps.com/prompts/index.html)**: browse all 83 skills.
-   **[Manual Quickstart 1: Setup](/docs/studio/quickstart-set-up-studio-in-your-app)**, if you'd rather understand what the LLM would install before running it.
