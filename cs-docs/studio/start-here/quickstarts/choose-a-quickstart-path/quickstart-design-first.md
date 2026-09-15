---
title: "Design-First Quickstart: From Figma to a Rendered Page"
description: "This Quickstart is the fastest path from a design to a live Studio-rendered page."
url: /studio/quickstart-design-first
uid: blt14bffcef551091e9
---

# Design-First Quickstart: From Figma to a Rendered Page

## Design-first Quickstart: from Figma (or mockup / description) to a rendered page

**Time:** ~30 minutes from install to first authored page. **Prereq:** you have a design in hand (Figma URL, screenshot, PDF, wireframe, or a short description doc), a React app, and a Contentstack stack. **Next:** any of the [full Quickstarts](/docs/studio/quickstart-set-up-studio-in-your-app) for deeper reference.

This Quickstart is the fastest path from a design to a live Studio-rendered page. The [decompose-design](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html) skill reads your design, plans the Sections + Content Types + Template, and chains the individual skills to build them. One prompt does the whole flow.

## What you'll have at the end

-   A working React app with the Studio SDK wired in.
-   The Content Types + Global Fields your design needs, provisioned on your stack.
-   Every atomic component (<Heading>, <Image>, <Button>, etc.) and Layer-2 container (<Card>, <Section>) from your design, registered in Studio.
-   One or more Sections composed on the canvas, ready to drop.
-   One Connected Template with a URL pattern, connecting to a Content Type.
-   The page rendering with real content at a preview URL.

## Prerequisites

-   \[ \] **A design in a shape the skill can read:**

    -   Figma URL (public or shared with you).
    -   Screenshot or PDF mockup (image URL or local file).
    -   A short description doc (paste-in text, even a bulleted list of "hero + 3 cards + newsletter footer" works).
-   \[ \] **A React app.** Studio installs alongside. It doesn't replace your app. If you don't have one, use npm create vite@latest my-app -- --template react-ts.
-   \[ \] **A Contentstack stack** with an API key + delivery token + preview token. Steps: [Prerequisites](/docs/studio/review-prerequisites-before-you-start).
-   \[ \] **Claude Code / Cursor / Windsurf installed** with the Studio skill pack:

    ```
    curl -fsSL https://studio-documentation.contentstackapps.com/install.sh | sh
    ```


## Step 0: SDK setup (~10 min, from Quickstart 1)

The decompose-design skill authors compositions and registers components against your app. Your app has to have the Studio SDK wired first. The skill doesn't install SDKs.

Run [Quickstart 1: Setup](/docs/studio/quickstart-set-up-studio-in-your-app) from install to first authored page (~10-15 min). You'll end with:

-   The three SDKs installed (@contentstack/studio-react, Live Preview, Delivery).
-   contentstack/initialize.ts bootstrapping the SDK.
-   A catch-all route rendering <StudioComponent />.
-   Studio's canvas iframe loading in app.contentstack.com: you'll see an empty canvas but the palette shows Basic + Layout categories.

Once Quickstart 1's Verify checklist passes, come back here.

## Step 1: Hand the design to decompose-design

Open Claude Code / Cursor / Windsurf in your React app repo. Paste this prompt, substituting your design:

> "Decompose this design and build the page: <YOUR\_DESIGN\_URL\_OR\_PASTE>. Target content type: blog\_post (or your CT name). URL pattern: /blog/{{entry.slug}}. Use the decompose-design skill: emit a build sheet first, then chain build-section per Section and build-connected-template to assemble the Template."

Press Enter. Read on while the skill runs.

## Step 2: Review the build sheet

The skill parses your design and emits a **build sheet** listing everything it plans to build. Skim it before approving. A typical build sheet contains:

-   **Decisions made**: governance choices (which props are content-bound, which are exposed for per-Template override).
-   **Components table**: every atomic component the page uses (<Heading>, <Image>, <Button>, etc.), the Layer-1 primitives.
-   **Layer-2 containers**: Cards, Section wrappers, layout components identified in the design.
-   **Per-Section drop-tree + bind tables**: one entry per Section, showing the tree of components + which CMS field each prop binds to.
-   **Template assembly**: the order Sections appear on the Template + the URL pattern.
-   **Proposed schema**: any new Content Type fields the design implies but the CT doesn't have yet.
-   **Unmapped fields**: anything in the design the skill couldn't confidently map (e.g., a "featured badge" that doesn't correspond to any CT field). Address these manually.

**If the build sheet looks wrong:** interrupt the skill and iterate. Example: "Redo: the Card Grid should be 3-column not 2-column, and the Testimonial section binds to the customer\_stories reference field, not testimonials." The skill re-reads the design and emits a new plan.

## Step 3: Approve + watch the chained skills run

Once the build sheet looks right, respond **"yes proceed"** (or whatever the skill prompt asks for).

The skill now chains:

1.  **[provision-studio-stack](https://studio-documentation.contentstackapps.com/prompts/provision-studio-stack.html)**: creates any Global Fields + new Content Type fields the build sheet identified. Idempotent: skips existing.
2.  **[register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html)** (per new component): adds registerComponent({...}) calls for every atomic + Layer-2 the design needs. Reads your existing registration file so no duplicates.
3.  **[build-section](https://studio-documentation.contentstackapps.com/prompts/build-section.html)** (per Section): authors each Section as a composition entry on your stack with the right bindings + exposed props.
4.  **[build-connected-template](https://studio-documentation.contentstackapps.com/prompts/build-connected-template.html)**: assembles the Template with URL pattern + Section list.
5.  **Publish** to the target environment.

Watch the terminal output. Each sub-skill logs what it's doing and any failures.

**Common failures:**

-   **CT field named in a binding doesn't exist**: a schema mismatch. The skill pauses. Add the field via Contentstack UI or re-run with the corrected CT model, then resume.
-   **Component named in a Section doesn't exist in the palette**: the skill couldn't infer the component from the design well enough. Register it manually via register-component, then resume.
-   **Ambiguous binding**: skill asks a clarifying question. Answer briefly, it continues.

## Step 4: Verify the page renders

Open your React app in a browser at the URL pattern the skill used (e.g., http://localhost:3000/blog/hello-world).

You should see the page render with:

-   The Sections from the build sheet in order.
-   Real content pulled from a seeded / existing entry.
-   No placeholder / lorem ipsum.

If the page is empty, run the [verify-setup skill](https://studio-documentation.contentstackapps.com/prompts/verify-setup.html). It runs 7 layered checks in order: the SDK bootstraps, the composition entry exists, the entry is published, the page renders, and every binding resolves. The skill reports which layer failed.

## Step 5: Take over the canvas (optional)

The skill scaffolded a working page. From here, marketing / power authors take over in the Studio Canvas:

-   Rearrange Sections in the Layers panel.
-   Override exposed props per-Template.
-   Deploy to production when ready.

Full flow: [Author your first page](/docs/studio/author-your-first-edit) or [Compose a seasonal landing page in 15 minutes](/docs/studio/compose-a-seasonal-landing-page).

## What happened

-   One prompt produces a full working page in Studio.
-   The decompose-design skill orchestrated 4+ sub-skills that individually took ~30 min each to run manually. Total elapsed time: ~15-20 minutes of skill runtime.
-   Every artefact is inspectable: the build sheet is committed to your repo, the composition entries live in Contentstack, the registered components are in src/register-components.ts.

## Next

-   **Author flow:** show your marketing team [compose-seasonal-landing-page](/docs/studio/compose-a-seasonal-landing-page). They can iterate on the page you built without touching code.
-   **Add more Sections:** run decompose-design again with a different design, or use [build-section](https://studio-documentation.contentstackapps.com/prompts/build-section.html) directly for one-off additions.
-   **Migrate an existing hand-coded page:** if you have hand-coded pages you want to convert, see [Migrate hand-coded pages](/docs/studio/migrating-hand-coded-pages-to-studio).
-   **Full manual reference:** the five numbered Quickstarts ([Quickstart 1 to 5](/docs/studio/quickstart-set-up-studio-in-your-app)) cover every step this skill automates. Read them when you want to understand what the skill did under the hood.

## Full-detail references

-   [decompose-design skill](https://studio-documentation.contentstackapps.com/prompts/decompose-design.html): every option + edge case.
-   [From designs to Sections](/docs/studio/from-designs-to-sections): the three-layer structure (atomic / Layer-2 / Section).
-   [Agent idempotency](/docs/studio/agent-idempotency): how the chained skills stay safe when re-run.
-   [verify-setup skill](https://studio-documentation.contentstackapps.com/prompts/verify-setup.html): the 7-layer diagnostic if the page isn't rendering.
