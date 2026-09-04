---
title: "Contentstack Studio Overview"
description: "Learn how Contentstack Studio adds a runtime composability layer to your component-driven frontend, letting authors build and publish pages without engineering tickets."
url: /studio/contentstack-studio-overview
uid: blta03eb861c2cb88d8
---

# Contentstack Studio Overview

## Contentstack Studio Overview

The composability layer for your component library — ship pages at the speed of content, on the stack you already run.

> 🚀 **Want to skip ahead and just build something?** Jump to **Getting Started → Quickstart 1** — the 5-Quickstart chain builds Studio into a React app end-to-end in about an hour.

## What is Studio?

**Studio is the visual composition layer for your component library.** Engineers register your existing React components once. From then on, anyone composes them into pages — drag, bind real CMS content, publish — without writing code or shipping a deploy.

Studio doesn't replace your stack. It plugs onto the React app and Contentstack you already run, and it works through two building blocks: a **Section** and a **Template**.

![Two journeys. A Section: your React component (with props image, heading, cta) bound to a Content Type schema (heading ↔ Heading schema, image ↔ Image schema, cta ↔ CTA schema) renders with real entry data — 'Summer Sale — 40% off' with a Shop now button. A Template: ordered Sections (Header, Promo, Grid, Footer) wired to a URL pattern (/sale/{{entry.slug}}) renders the live page at that URL.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2a0fe8f03d5837a6/81ac973c10d8ca9fb66f9118/overview-what-is-studio.svg)

### A Section is a Component bound to a Content Type

Take one of your registered React components — say a banner with three props: image, heading, cta. In Studio, you map each prop to a field on a Content Type schema (heading ↔ Heading schema, image ↔ Image schema, cta ↔ CTA schema). That's it.

Once mapped, the component renders with **real entry data**. A "summer-banner.jpg" image, a "Summer Sale — 40% off" headline, a working "Shop now" button — pulled live from the CMS, no per-page code. A Section is what you get: **your component + a binding to your content**. Reusable forever.

→ **Full mechanics**: Sections chapter covers the "Section is a compound component" framing, binding to CMS, exposing props, and Slot patterns.

### A Template is ordered Sections wired to a URL

A Template is the page recipe. Drag Sections onto a canvas — Header, Promo, Grid, Footer — type a URL pattern like /sale/{{entry.slug}}, and save. That's the whole page definition.

When a visitor hits the URL (/sale/spring-2026), Studio fetches the matching entry, renders each Section in order against that data, and serves the page. **No new route file. No deploy.** Add a new campaign? Make a new Template with the same Sections in a different order, or pick a different entry — publish.

### How Section and Template fit together

-   **Engineering** wires the Component into a Section — **once**.
-   **Marketing** assembles Sections into Templates — **anytime**.

Every Section your engineers ship compounds across every Template (and every page that Template serves). Same React, same CMS, same render path — but pages stop being code, and start being composition.

That's the entire mental model. The rest of this page is detail.

### The developer flow — side by side

The Section / Template model changes what each _step_ of building a page looks like. Without Studio, every page's layout, fetch, and prop-mapping is hand-wired in code; every layout change ships as a code change. With Studio, two new steps — **build Sections** and **build Templates** — turn a page into a composition that authors can rearrange without a deploy.

![Development flow without Studio: three stacked steps — Setup (app shell + delivery SDK), Build components (author + Storybook), Build pages per page (hand-wired layout + data fetch + prop mapping). Every layout or field-rename change requires a code change, PR, and redeploy.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am617c7a749bc1b0a3/53ac8662b85d8b86f2ba7c1e/overview-dev-flow-without-studio.svg) ![Development flow with Studio: four stacked steps. Setup adds the Studio SDK plus a canvas route and a single catch-all template route. Build components is unchanged plus a one-line register call. Two new Studio-managed steps follow: build Sections (compose multiple components, bind props to CMS fields, preview live) and build Templates (drop Sections onto a content-type-bound template). Layout, Section swaps, and rebindings become no-code.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame0ca6b049d7edfa4/35030dc8aedfa94d73a4b64b/overview-dev-flow-with-studio.svg)

The workflow at a glance — for the end-to-end page-building sequence including preview + publish, see Where Studio fits in your day-to-day flow on the docs home.

### The per-page flow — before / after (drill-down)

Once your team's engineering lifecycle is in place (above), every _individual page_ moves through this before / after — a two-column decomposition of what a developer actually does per page, with the code that ships in each column.

![Two-column comparison of the per-page flow. TODAY, WITHOUT STUDIO: five numbered steps (Content in CMS · Fetch via APIs · Compose page in code · Deploy · Page rendered) alongside a dark code-editor panel showing a hand-wired landing.tsx with hero, feature grid, and CTA. Every layout change loops through git → PR → CI → deploy. WITH CONTENTSTACK STUDIO: six numbered steps (Content in CMS · Connect Studio SDK · Compose page in Studio · Preview · Publish · Renders automatically) alongside a rendered Studio-canvas mockup showing Hero and Feature Grid tiles both marked 'bound' plus a dashed drop zone for any registered component. Layout changes ship through publish, not through git. THE UNLOCK: same React, same CMS, two extra steps in Studio replace an entire deploy cycle.](../assets/svg/overview-dev-flow-comparison-steps.svg)

**How this differs from the horizontal flow on the docs home** — same content, different reading depth. The horizontal is a one-scan hook. The two-column is the deeper decomposition: same steps, but with the _code_ a developer writes without Studio and the _canvas binding_ a developer configures with Studio, side by side.

### The three-part model — how a page reads from the CMS

Once you see Sections and Templates, one more lens locks the picture in. Any CMS-driven page does three things: **fetch data, iterate schema, bind fields to props.** Studio's building blocks map one-to-one:

-   **Fetch the data** → the **Template** (URL-bound, tied to a Content Type). Plus optional pinned entries or saved queries for extra data.
-   **Iterate the schema** → a **List Section** — a Section whose root is a Repeater. Used whenever a field holds N items (reference field, modular blocks field, or group with multiple: true).
-   **Bind fields to component props** → a **Simple Section** — a Section with no root Repeater. Maps one schema field to one component prop.

**Fetch → iterate → bind.** Every composition, from one hero to a full marketing page, is these three in combination. The route code stays as-is; Studio becomes the layer that decides _which_ Section renders _what_ data at each spot, driven by config the CMS ships.

## Why Studio exists

Today's component-driven frontend stack solved two big problems and left a third unsolved.

-   **Component libraries** (React + design systems + Storybook) solved **components**: write once, isolate, test, ship.
-   **Headless CMS** (Contentstack + Live Preview + [Visual Editor](/docs/headless-cms/about-visual-editor)) solved **content**: model, author, translate, version, publish.
-   What got left out: **composition**. _How your components compose into sections, how sections compose into pages, how a page binds to entries, how an author rearranges any of it without filing an engineering ticket_ — all of that still lives in code. In route files. In JSX that ships through git → PR → deploy.

That's the bottleneck. The component library is reusable; the composition that arranges those components into pages **isn't**. Every layout change is engineering work. Every new page is a route file. Every re-binding is a code change. Authors describe layouts in tickets; engineers translate them into JSX; a sprint later the page ships.

## What Studio is

Studio is a **runtime composability layer for component-driven frontends.** It sits between your React components and your live site and holds **the composition itself — Sections, Templates, bindings, slot fills, prop overrides — as data, not code.**

You author the composition in a canvas. Then a runtime render component — <StudioComponent />, mounted on ONE catch-all route in your app (e.g. app/\[\[...slug\]\]/page.tsx for Next.js, <Route path="\*"> for React Router) — renders that data at request time against real CMS data, real locale, real variant alias. **This is different from the Canvas route** (<StudioCanvas />), which lives at its own path and is only used inside Studio's iframe for author preview. Setup wires both — see Setup. Authors edit through Contentstack's publish workflow; engineers ship components, not pages.

The shift in one table:

| Before Studio | With Studio |
| --- | --- |
| **Layout is code.** Every layout change ships through git → PR → deploy. | **Layouts are visual blocks.** Layout changes ship through Contentstack publish, alongside content. |
| **Components are reusable. Composition isn't** — it's hand-coded per page, per route. | **Both are reusable.** The same components, the same Sections, on any page; the same bindings auto-emit data-cslp for Visual Editor. |
| **Authors file tickets.** Marketers describe layouts to engineers, who translate them into JSX. | **Authors compose directly.** Engineers ship components; authors arrange, re-bind, swap, and publish without an engineer in the loop. |
| **New pages = new route files.** Each new URL pattern requires code. | **New pages = published data.** New entries (existing CT), new content types, or no CT at all (Freeform) — all light up live URLs through Studio's catch-all route. |

That's the whole shift in one sentence: **Studio moves composition from code to visual blocks.**

Everything else this page describes — the canvas, the preview against real entries, the binding mapper, the slot swap, the auto data-cslp emission — flows from that one structural decision.

## Three things in one

Studio is **three things in one** — and calling it "a visual page builder" only captures the first one:

1.  **A visual page builder** — content authors drop your React components onto a canvas and assemble pages without engineering involvement.
2.  **A real-data preview surface for composed components** — see a hero + body + related-posts grid rendered together against any real entry in your stack, _before_ you ship anything. The missing rung between Storybook (isolated, fake data) and the live URL (composed, real data, post-deploy).
3.  **An on-the-fly editor for layouts, components, look-and-feel** — when pages are built through templates, swapping a section, reordering blocks, re-mapping which field drives which prop, or restyling the page through design tokens is a click-and-publish operation, not a code change + PR + redeploy.

These compound. The page builder produces previewable compositions. The composition format is editable post-publish. The components inside are your real components, so what you preview is what visitors get.

Studio does not replace your component library, your delivery SDK, your CI/CD, or your CMS workflow. It **complements** them — by filling in the one thing the modern frontend stack still doesn't have a good answer for: a way to compose, preview, and re-shape real pages built from real components with real data, without redeploying.

## The problem Studio is solving

Today's component stack is excellent at **isolated** components and terrible at **composed** pages.

| What you can do today | What you still can't do |
| --- | --- |
| Preview a single component in isolation (Storybook, Playroom, Ladle) | Preview a **composition** of multiple components rendered together as they appear on the real page |
| Stub a component with fake fixture data | Preview the same composition with **real CMS data** for a specific entry |
| Hand-code a page that fetches data and arranges components | **Re-arrange the page or swap a section** without an engineering ticket and a redeploy |
| Hand-code which component prop reads which CMS field | **Re-map** a component prop to a different field after the fact, without changing the code |

Storybook tells you what a <Card /> looks like. It can't tell you what _this_ Blog Post template, with _this_ author, _these_ related posts, and _this_ hero image looks like. Today the only way to see that is to ship a build and load the live URL.

Studio closes that gap. The same React components you already have, composed visually, previewed against any entry in the stack, recomposable on the fly.

## One shift unlocks everything — layout stops living in code

Make the same move for layout that your CMS already made for content. The six wins below aren't separate features — they all fall out of that one change.

On-the-fly mapping changes

Remap a field to a component instantly — no edit, PR or deploy.

Compound components

Combine blocks into new reusable Sections — visually, no code.

Non-page preview

Preview content that has no page or route of its own.

Brand guidelines, enforced

Pages assemble only from approved, on-brand parts — no drift.

Empowered authors

Marketers build, preview and publish pages themselves.

No code for new pages

New page types ship same-day — no new route, no build.

## Why Studio — six things you get that you don't have today

Studio earns its place by doing six things the rest of the stack doesn't. Read these in order; each one builds on the previous.

### 1\. Explore your component library with real data — before composing a page

Before you build a section or a template, you want to know: _what does my registered <ProductCard /> actually look like when bound to a real entry in this stack?_ Storybook can't tell you — its fixtures aren't real CMS data.

Studio's component palette is a **live, browseable surface** for every component the developer has registered. Drop any one onto an empty canvas, bind its props to a real entry, and the canvas renders exactly what visitors see. Use it as a development sketchpad: try a component against five different entries, see how it handles long titles, missing images, edge cases — all without writing a page.

> **The binding action is doing more than you'd expect.** When you bind a Registered Component's prop to a real entry in the canvas, Studio doesn't just feed the data through at preview time — it **wires the CMS data flow** for that component (so the same binding ships at production runtime) AND **auto-emits the data-cslp tags** on the rendered output. Studio itself never provides inline editing — all value edits happen in Studio's right panel — but the data-cslp tags Studio emits are what **Visual Editor** (a separate product; must be installed independently) reads to power its own inline-editing surface. One binding action in the canvas does two things: fetch + thread the field into the prop, and tag the DOM so a VE-installed app can offer inline editing.

That single-component-with-real-data flow is the rung between Storybook (fixtures) and a full composition (multi-component). Both Storybook and Studio coexist: Storybook for component dev, Studio for real-data exploration + composition.

### 2\. Preview composed components against real CMS data — including locale and variant

A single <Hero /> in Storybook proves the component renders. It can't show you what the _Blog Post_ template, with _this_ author, _these_ related posts, and _this_ hero image looks like — or what it looks like for the **French locale**, or under the **"holiday-sale" variant alias**. Today the only way to see that is to ship a build, set up the right preview URL, and visit it.

In Studio, you compose multiple components into a section or a template, bind their props to real CMS fields, pick a preview entry, switch locale, toggle a variant — and the canvas renders exactly what visitors see. Same SDK code path, same Delivery API calls, same live\_preview channel as production. The preview is the production render, just earlier.

The hero + body + related-posts grid you preview is the hero + body + related-posts grid that ships.

### 3\. Externalise the prop-to-field mapping — change bindings at runtime, no redeploy

In a hand-coded page, the mapping from "this CMS field" → "that component prop" lives inside the page component:

```
// Hard-coded mapping — change requires a code change + deploy
<Hero
  headline={entry.title}
  subhead={entry.tagline}
  cover={entry.featured_image}
/>
```

In Studio, that mapping is stored separately from the component — as a **binding inside the composition record**. The component code stays put; the mapping is data. So:

-   Renaming entry.title → entry.headline doesn't break any components — re-bind in the Studio UI, publish, done.
-   Mapping a different field to a prop (e.g. swap entry.tagline → entry.summary) is a non-engineer task.
-   The same <Hero /> component renders against five different content types without five copies of mapping logic.

What used to be a code change becomes a publish action.

> **Side effect: Studio emits the data-cslp tags Visual Editor consumes.** The binding map you author in Studio (prop ↔ field) is the source of truth Studio uses to emit data-cslp tags at render time. You never thread data-cslp through your component code. **Studio itself provides no inline editing** — all value edits inside Studio happen in the right panel. But if you have **Visual Editor** installed independently in the same app, VE reads those data-cslp tags to draw its own inline-editing surface on the rendered page. Studio and Visual Editor are two separate products that coexist; Studio doesn't provide or "auto-enable" VE. See [CMS Binding → data-cslp tag emission](/docs/studio/bind-cms-content-to-studio-components#data-cslp-tag-emission--visual-editor-consumes-what-studio-emits).

### 4\. Mix and match components — change layouts by publishing, not redeploying

Templates are made of sections, sections are made of components. Studio lets authors **rearrange the structure** without touching code — the change goes live on publish, not a redeploy.

> **A Section is a Studio Component. A Template is a Studio Page. Both are still pure React — Studio adds the _knowledge_, not new runtime.**
> 
> Studio's two main authoring units line up neatly with React vocabulary:
> 
> -   A Section is a **pure React component composed of your Registered Components**, with the CMS wiring (prop ↔ field binding map, plus auto-emitted data-cslp tags) and the composition shape (slots, exposed props, layout) **carried as data — not as new code in your repo**. Your <Hero>, <Card>, <Button> (registered with Studio) run exactly as they would in a hand-coded page; what Studio wraps around them is _knowledge_ — knowledge of bindings, knowledge of how they compose. Storybook previews single components with fixture data; **Sections preview composed components with real CMS data + locale + variant** — the rung that wasn't previewable before Studio.
> -   A Template is the page-level unit that **composes Sections, owns the URL pattern, and carries the data-binding shape** for every entry that hits that URL. Where a Next.js app/blog/\[slug\]/page.tsx bakes URL + data + layout into code shipped via deploy, a Template stores those three as **data** in the composition spec — editable in the canvas, shipped via Contentstack publish.
> 
> If you already think in "components → pages", Studio's vocabulary is just one level up: **React components → Sections (Studio Components) → Templates (Studio Pages)**. Same React. Extra knowledge.

-   Swap one section for another (Hero Strip → Featured Card) on a single template.
-   Reorder sections — pull the testimonial above the body, push the related-posts below.
-   Drop a different component into a slot — replace a Button with a Link, or a single card with a card grid.
-   Apply layout overrides for _one_ entry without affecting the rest of the entries on the same template.

The structural decisions an engineer used to encode in JSX become decisions an author makes in the canvas — and those decisions ship through Contentstack's publish workflow, not a deploy.

### 5\. Delegate to content authors — they assemble templates from your registered sections

Once a developer registers a component and an author wraps it into a section (with bindings, exposed props, and a Section Slot for variability), the section is **self-serve from then on**. Content authors:

-   Drop the section onto any template whose connected content type matches the section's shape.
-   Override exposed props per template instance — flip a flag, swap a label, pick a different layout variant.
-   Build new pages by dragging sections in, picking a content type, hitting save.

The developer-author handoff is no longer "we built a page for you"; it's "we built a _palette of sections_ for you — go assemble whatever pages you need". That ratio is what scales: ten engineers can equip a hundred authors with the building blocks for a thousand pages.

### 6\. New pages on the fly — with or without a content type

Studio's catch-all route resolves every URL via a CDA query, so adding a new live page **never requires a new route file**. Two flavours, both work without a code change:

-   **Existing CT, new entry.** You already have a blog\_post template at /blog/{{entry.slug}}. Publishing a brand-new blog\_post entry called _spring-launch_ lights up /blog/spring-launch immediately — no route work, no deploy. The connected template is the recipe; every entry under that CT is a page using that recipe.
-   **Brand-new content type.** Launching an entirely new CT (e.g. _events_, _case\_studies_, _product\_lines_) is also a deploy-free operation. Model the CT in Contentstack, build a Connected template in Studio that targets it (/events/{{entry.slug}}, etc.), and the moment you publish the first _event_ entry the URL is live. No new React route file, no app/events/\[slug\]/page.tsx, no CI run. The CT itself is created via Contentstack's CMA / web UI; Studio's catch-all route picks up the new URL pattern through the CDA query the next time it's hit.

The "on-the-fly" part covers both: launching a new product line under an existing CT, OR launching a whole new content category like _events_ — both happen without engineering touching the app code. **Both paths skip the engineer** — new pages ship through Contentstack publish, not through a code deploy.

## Who benefits, and how

**Content authors and marketers** get a real visual page-builder backed by their own brand's components and real entries — not a generic page builder with bolted-on components.

**Frontend developers** get to focus on building good components instead of plumbing data into hand-coded layouts. Register a component once, expose its props, and let authors compose with it forever.

**Design system teams** stay sovereign — Studio uses _your_ components, _your_ design tokens, _your_ breakpoints. No fork, no shim, no compromise.

**Enterprise platforms** get a content-driven page model that scales: launching a new content type means modeling the CT and dropping a template against it — not writing a new page route.

## Why Studio doesn't compete with Vibe Coding / AI-assisted dev — it stacks

AI-assisted dev — **Cursor, Claude Code, GitHub Copilot, Windsurf, Cline** — is excellent at the build-time slice of the work. It generates React components, scaffolds routes, writes JSX, drafts schemas, and shortens the path from "I have an idea for a component" to "the component is in my repo." That work still ships the way code has always shipped: **git → PR → CI → deploy**.

Studio addresses a different layer entirely: **runtime composability**. Once components exist in the repo, who recomposes them into new pages? Who re-maps a prop to a different CMS field after the launch? Who builds the spring-sale landing page next Tuesday? Today the answer is "an engineer, on a redeploy." AI tools don't change that — they just make the engineer faster. Studio changes the answer to **"the author, on a publish."**

| Layer | Tool | Who acts | Ships through |
| --- | --- | --- | --- |
| Build-time (writing components) | Vibe Coding / Cursor / Claude Code / Copilot | Engineer (faster than before) | git → PR → deploy |
| Runtime (composing pages from those components) | **Studio** | Author / marketer / content team | CMS publish |

**They don't compete. They stack.** Use AI to get more components into your repo faster. Use Studio so the rest of the org can compose with those components forever after — without you in the loop. The dream stack is both.

## What Studio is NOT

-   **Not a component framework.** Studio doesn't replace React, your bundler, or your build pipeline. Your components stay in your repo, built and deployed exactly as before.
-   **Not a CMS replacement.** Studio is a layer on top of Contentstack — the entries, content types, and publishing workflow are still standard Contentstack.
-   **Not a Storybook replacement.** Use Storybook for isolated component dev; Studio for composed-with-real-data preview. The two coexist.
-   **Not a "no-code" pitch.** Authors still need engineers to register components and model content types. Studio removes the _layout coupling_ between code and content, not the engineering work behind the components themselves.

## Studio turns your front end into a truly composable architecture

Composability stops being a principle you aspire to. Every component becomes a registered, reusable unit — and pages, Sections and Templates become composition you configure and assemble at runtime, not code.

A registry, not bespoke pages

Components are registered once and become reusable units — not page-specific glue code rewritten per route.

Composition is visual blocks

Sections and Templates are visual blocks composed on a canvas — recombined and published at runtime, with no rebuild and no redeploy.

On your existing stack

Same React, same CMS, same render path — API-driven and composable, with no parallel system to maintain.

**Set Studio up once** — then every new page, route and layout ships without touching the codebase. The only time you touch code: registering a brand-new atomic component.

## Why not just use what we have?

Page builders

Autonomy, yes — but outside your standard SDLC, and tied to their own limited CMS.

Headless CMS alone

Content velocity, yes — but layout still lives in code.

AI / vibe coding alone

Faster engineering — but can't guarantee deterministic results, and marketing still files tickets.

Studio

All three — your components, marketing-driven composition, on your stack.

## The 30-second technical picture

Studio ships as a React SDK with two components you add to your app:

-   **<StudioCanvas />** — goes on one route (the _canvas route_). It's the in-browser authoring surface where authors preview sections in isolation against real entries.
-   **<StudioComponent specOptions={specOptions} />** — goes on your app's catch-all route (default: ONE route — app/\[\[...slug\]\]/page.tsx for Next.js, <Route path="\*"> for React Router — handles every URL). The specOptions object is the return value of useCompositionData({ url }) (CSR) or csStudio.fetchCompositionData({ url, searchQuery }) (SSR) — you don't hand-build it; you pass it straight through. Studio's CDA query inside those calls resolves which template (if any) matches each URL — no per-template route registration needed.

A typical Studio-powered app ships **both**. See the Setup chapter for the install walk-through.

## Next

-   **[The development flow — with and without Studio](/docs/studio/the-development-flow-with-and-without-studio)** — see the side-by-side flow change
-   **[Two ways to start](/docs/studio/choosing-your-studio-setup-path)** — pick your onboarding path
-   **[When to use Templates vs Sections](/docs/studio/choosing-between-templates-and-sections)** — quick decision tree
-   **Set up Studio in your app** — install the SDKs, configure your stack, create a project
