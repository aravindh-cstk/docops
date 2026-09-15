---
title: "Studio Documentation Home"
description: "Contentstack Studio is the visual composition layer on top of your React app + Contentstack."
url: /studio/studio-documentation-home
uid: bltbe2a3f6bfa210625
---

# Studio Documentation Home

## Studio Docs

Contentstack Studio is the **visual composition layer** on top of your React app + Contentstack. Engineers register components once. Anyone composes them into live pages, no deploy per page.

## Where Studio fits in your day-to-day flow

![How pages get built: with and without Studio. Without Studio: your team creates content in the CMS, the website loads it, developers write code to arrange each page, every change needs a technical release, and only then do visitors see the update. A red loop shows every page change goes back through developers. With Studio: same content system, one-time developer setup connects your site, then anyone can drag and drop to build the page, preview on any device, click publish, and the site updates instantly. A violet loop shows updates skip the release cycle. THE UNLOCK: anyone can build and update pages, instantly, without a technical release. Why Studio changes the game: faster time to market (create and launch pages without developers), empower content teams (authors build and manage pages visually), iterate quickly (update, preview, republish in minutes), developer efficiency (no code + release cycle for content updates), consistent experience (deliver omnichannel experiences at scale).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am63990a7a6509ed6e/99adf6dd15dbc12528e59d20/overview-dev-flow-horizontal.png)

Same content system, same website. Studio adds a **visual layer** where anyone can build and update pages, no engineering release for every change. **For the deeper decomposition**, see [What is Studio](/docs/studio/contentstack-studio-overview).

## Pick your path: decision tree

Answer three questions:

**1\. Do you code?**

-   **No**: you're either an author or a business reader. Pick one:

    -   **Author (5 min):** [Your first edit in 5 minutes](/docs/studio/author-your-first-edit). Existing Template, drop a Section, publish. Then the [15-minute seasonal landing page walkthrough](/docs/studio/compose-a-seasonal-landing-page) to level up.
    -   **Sales / marketing / buyer:** [Studio for Business](/docs/studio/studio-business-value). Speed-to-market, marketing autonomy, positioning vs page builders / headless-CMS-alone / AI tools.
-   **Yes**: go to question 2.

**2\. Do you have a design in hand?** (Figma / screenshot / mockup / description doc)

-   **Yes**: [Design-first Quickstart](/docs/studio/quickstart-design-first) (~30 min). Runs Q1 SDK install as step 0, then hands the design to [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html): chained skills build Sections + Template + first render, end-to-end.
-   **No**: go to question 3.

**3\. Do you want the fastest possible eval, or a full manual build?**

-   **Fastest eval, LLM-driven (~15 min):** [Quickstart with LLM Skills](/docs/studio/quickstart-with-llm-skills). One curl install + English prompts to Claude Code / Cursor / Copilot.
-   **Full manual build (~1 hr):** [Quickstart 1 in Getting Started](/docs/studio/quickstart-set-up-studio-in-your-app). Install SDKs, register components, build Sections + Templates. Five numbered pages, each self-contained.

**Already have a working React site?** See [Add Studio to an existing app](#already-have-a-working-site-add-studio-on-top) below: depends on what's there (hand-coded pages / Visual Editor / existing Content Types).

**Content authors: everything below this row is engineering material.** If you don't code, jump straight to the author quickstart above. You won't need what follows.

Or use the **sidebar** on the left, six labelled role sections (Start here / For Content Authors / For Business / For Developers / Reference / LLM Skills), and the **search box** at the top of the sidebar for instant keyword lookup.

---

## Why Studio exists: in one picture

> Your CMS turned **content** into reusable data. Studio extends that shift one layer up: **layout** moves out of code and onto a visual canvas, where anyone composes your React components into live pages. **Same React. Same CMS. No deploy per page.**

![The whole Studio idea in one picture. TODAY: one tangled SummerSalePage.jsx file does four jobs (Content mapping, Compounding, Layout, Routing). Every change redeploys. STUDIO SPLITS those jobs into two named blocks: a Section (Jobs 1+2) is a component bound to a Content Type schema. A Template (Jobs 3+4) is ordered Sections plus a URL. RESULT: same live page, engineering ships the Section once, marketing assembles new pages without a deploy.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc3f1dc6c7368f1de/de2e5cfceebf44f2b4ac9f8a/overview-mental-model-summary.png)

-   **Today**: layout is JSX. A SalePage.jsx file hand-writes <main><Hero/><Promo/><Grid/></main>. Reorder, swap, or add a block, and the change goes through git, then a PR, then a deploy.
-   **With Studio**: layout is composition. Your exact same React components show up as draggable tiles on the Studio canvas. Anyone arranges them, binds real Contentstack content, saves: no engineering, no deploy.
-   **Outcome**: same React, same CMS, same render path. Engineering stays focused on building components. Marketing ships pages at the speed of content.

Full mechanics: **[What is Studio?](/docs/studio/contentstack-studio-overview)**, **[The Studio page (how it works)](/docs/studio/standard-studio-page-anatomy)**.

## Working alongside your existing stack

Studio installs alongside two companion products you'll wire at the same time:

-   **Live Preview SDK**: pipes content changes from Contentstack into your running site.
-   **Visual Editor**: a separate product that provides inline click-to-edit on any page emitting data-cslp tags. Studio itself has no inline-edit surface (all value edits happen in the right panel), but Studio emits data-cslp tags, so VE-installed apps get inline editing on Studio-rendered pages.

Setup for all three: [Setup chapter](/docs/studio/setup-chapter-guide).

---

## More paths for developers

The decision tree at the top of this page routes new developer + author + business readers. Below are the specialist paths for developers who fit a specific existing-state profile.

### Design-first: full details

The [Design-first Quickstart](/docs/studio/quickstart-design-first) covers the fast path. Deeper reference for the underlying flow:

-   **Single template / page kind**: use [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html).
-   **Whole site (3+ page kinds sharing atoms)**: use [decompose-site](https://studio-documentation.contentstackapps.com/prompts/decompose-site.html), which wraps decompose-design, deduplicates components across pages, identifies Global Field candidates, emits one site plan + per-template build sheets in dependency order.

Both drive the whole flow from install to first authored page. No manual canvas clicks. What runs at each phase:

1.  **Decompose**: reads the design(s), emits machine-readable build sheet(s) (atomics + Layer-2 containers + Sections + Content Type + governance dial + unmapped-fields note).
2.  **Schema phase** (multi-page only): offers to provision CTs + Global Fields via [provision-studio-stack](https://studio-documentation.contentstackapps.com/prompts/provision-studio-stack.html).
3.  **Code phase**: offers to scaffold + register the components. Chains [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html) per new component.
4.  **Studio-canvas phase**: offers to author the Sections + Template automatically:

    -   **API path (fastest):** chains [author-composition-via-api](https://studio-documentation.contentstackapps.com/prompts/author-composition-via-api.html). Writes composition JSON straight through the Content Management API (CMA). No canvas, no clicks, no MCP. Requires management token in env.
    -   **Canvas path:** chains [build-section](https://studio-documentation.contentstackapps.com/prompts/build-section.html) + [build-connected-template](https://studio-documentation.contentstackapps.com/prompts/build-connected-template.html) driving Studio's canvas via Playwright MCP. Slower but produces a real canvas trail.
5.  **Content phase** (optional): offers to populate real entries via [import-content](https://studio-documentation.contentstackapps.com/prompts/import-content.html) from a customer-owned source (JSON / CSV / Markdown / existing Contentstack stack).
6.  **Verify + deploy**: chains [verify-setup](https://studio-documentation.contentstackapps.com/prompts/verify-setup.html) + [deploy-studio-site](https://studio-documentation.contentstackapps.com/prompts/deploy-studio-site.html).

Developer's role: provide the design(s), accept the plans at each phase, review the result. Manual canvas clicking is only needed as a last-resort fallback (no creds AND no MCP).

**Long-running builds are idempotent + resumable**: every skill records its own state file under docs/\_<skill>-state/ so a crash midway resumes from the last completed unit. See [Agent idempotency](/docs/studio/agent-idempotency) for the contract. Schema evolves safely via [migrate-ct-schema](https://studio-documentation.contentstackapps.com/prompts/migrate-ct-schema.html) after the initial build.

Mental-model prerequisite: [From designs to Sections](/docs/studio/from-designs-to-sections). Palette wiring for the code phase: [Palette conventions](/docs/studio/component-palette-conventions).

### Already have a working site? Add Studio on top

You don't need to rebuild. How Studio joins your app depends on what's there today:

-   **Hand-coded pages**: [Migrate hand-coded pages](/docs/studio/migrating-hand-coded-pages-to-studio). A real per-route migration that replaces hand-coded JSX with Studio compositions. One route per sprint.
-   **Visual Editor app**: [Add Studio to a Visual Editor app](/docs/studio/add-studio-to-a-visual-editor-app). **Not a migration.** Studio layers on top of Visual Editor to expedite page building. VE stays installed and in use forever.
-   The per-route conversion (for hand-coded routes, or for VE routes you choose to author through Studio) is automated by the [migrate-page-to-studio](https://studio-documentation.contentstackapps.com/prompts/migrate-page-to-studio.html) skill: paste a route filename, get an inventory + a populated Studio template + the JSX swap.

### Enterprise or Quickstart?

Pick the setup path that matches your situation. [**Two ways to start**](/docs/studio/choosing-your-studio-setup-path) covers both:

-   **Enterprise**: bring your own React component library. Explicit 9-step flow: existing components, CT, CLI register, SDK install, Canvas route, catch-all route, Sections, Templates, Deploy. Recipe: [enterprise-day-one](/docs/studio/enterprise-setup-from-install-to-first-authored-page).
-   **Quickstart**: evaluate Studio with defaults first via [Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app), or the [quickstart-with-skills](/docs/studio/quickstart-with-llm-skills) evaluator recipe.

### Have an LLM do the setup

Install all skills once (full listing + override options on the [Skills page](https://studio-documentation.contentstackapps.com/prompts/index.html)):

```
curl -fsSL https://studio-documentation.contentstackapps.com/install.sh | sh
```

Then ask your LLM in plain English: "install studio in this project", "register my Button component", "migrate this page to studio". Works with Claude Code, Cursor, Windsurf, Cline, Continue, or any chat LLM (paste-in copies under [prompts/](https://studio-documentation.contentstackapps.com/prompts/)).

### Bring your own data: data Studio didn't fetch

When your composition needs data Studio's SDK didn't retrieve (live pricing from a service, feature flags, geo-personalization, weather, session state), you supply it in code and Studio composes against it.

Two surfaces:

-   **[StudioComposition](/docs/studio/studio-composition-component)**: render a full composition against a context object you supply. No SDK data fetch, no hook. Works in client-side rendering (CSR) and server-side rendering (SSR).
-   **[Slot data](/docs/studio/slot-data)**: attach data to a slot prop so components an author drops into that slot can bind to it through component\_props, with the nearest slot winning.

Start here: **[Bring Your Own Data (chapter overview)](/docs/studio/bring-your-own-data)**. Troubleshooting: **[BYOD troubleshooting](/docs/studio/troubleshoot-bring-your-own-data)**.

---

## Contents

| Chapter | What it covers |
| --- | --- |
| **[Getting Started](/docs/studio/getting-started-with-studio)** | Role chooser + 5 numbered developer Quickstarts (Setup, Registering + Slots, Simple Section, List Section, Template) + a 5-min Author Quickstart. **Start here.** |
| **[Video walkthroughs](/docs/studio/studio-video-walkthroughs)** | The same six guides, recorded against a real stack: one video for authors, five for developers. ~34 minutes total. |
| **[Overview](/docs/studio/studio-overview-guide)** | What Studio is, when to use Templates vs Sections |
| **[Setup](/docs/studio/setup-chapter-guide)** | Stack prerequisites, App-side install, Studio project configuration |
| **[Bring your own components](/docs/studio/bring-your-own-components-guide)** | Register custom components, design tokens, from Figma to code |
| **[Bring your own data](/docs/studio/bring-your-own-data-guide)** | Render a composition against data you hold (<StudioComposition />), pass data into a slot (<Slot>) |
| **[Composition](/docs/studio/composition-concepts)** | Composition concept, Canvas URL, CMS binding, Design Panel, Layers, Save vs Deploy |
| **[Templates](/docs/studio/templates-guide)** | Pages connected to a content type |
| **[Sections](/docs/studio/sections-guide)** | Reusable blocks, linked schema, auto-binding, slots, exposed props, repeaters, condition blocks |
| **[Smart Containers](/docs/studio/smart-containers-guide)** | The three primitives that make sections data-driven: Repeater, Condition Block, Section Slot, plus Modular Block + Reference rendering patterns. |
| **[Recipes](/docs/studio/recipes-guide)** | Worked scenarios, including the [zero-to-first-page walkthrough](/docs/studio/quickstart-set-up-studio-in-your-app), the [hand-coded migration playbook](/docs/studio/migrating-hand-coded-pages-to-studio), and the [add-Studio-to-Visual-Editor recipe](/docs/studio/add-studio-to-a-visual-editor-app) (additive: VE users do not migrate) |
| **[Advanced topics](/docs/studio/advanced-topics-guide)** | Production playbooks: performance, multi-locale at scale, variant aliases, SSR streaming, editorial workflow, testing strategies, deployment edges |
| **[Framework recipes](/docs/studio/framework-recipes)** | Per-host SSR integration: Node (CI-tested), Next.js App Router (main + RSC entries, both CI-tested), Pages Router, Remix, Astro, Gatsby. Same three-call contract everywhere. Includes troubleshooting + curl-based verification. |
| **[Studio CLI](/docs/studio/cli)** | The csdx studio command set: project setup, register components, Figma sync, design tokens, responsive options, generate Sections from a component + content type |
| **[Reference](/docs/studio/reference-guide)** | URL variables, matching rules, feature flags, best practices |
| **[Freeform](/docs/studio/freeform-guide)** | Optional feature: see chapter for details |

---

## Found a discrepancy?

If the docs say something different from what you see in Studio, the product is right. Open an issue so we can fix the docs.
