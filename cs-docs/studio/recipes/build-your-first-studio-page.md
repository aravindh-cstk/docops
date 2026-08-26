---
title: "Build Your First Studio Page"
description: "Step-by-step walkthrough to go from zero to a working Studio composition, covering stack setup, SDK install, component registration, and page rendering."
url: /studio/build-your-first-studio-page
uid: blt2f50772c94862156
---

# Build Your First Studio Page

## Build Your First Studio Page

**Start here if you've never used Studio before.** This walkthrough takes you from absolute zero, with no Contentstack stack, no Studio install, and no app, to a working page rendered through a Studio composition in **~30 minutes**.

Every step calls out the **skill** you can paste into your LLM (Claude Code, Cursor, Windsurf, …) to do the heavy lifting. You can also do each step manually using the linked doc pages.

If you already have a Contentstack stack with content types and entries set up, skip to [First page in 5 minutes](/docs/studio/quickstart-guide-to-creating-your-first-page), which is the fast-path evaluator quickstart.

---

## What an LLM/CLI Can and Cannot Do for You

Studio setup is **two layers**: code-side (your app) and Studio-side (the web app). The skills below automate the code-side, but the Studio-side steps (project creation, Configuration panel, dropping sections on a canvas, hitting Save / Deploy) need a human in a browser session.

| Steps below | Who actually does it |
| --- | --- |
| Steps 1, 5, 6, 7 (Contentstack/Studio web app) | **You, in** **app.contentstack.com** (an LLM cannot drive the Studio canvas reliably) |
| Steps 2, 3, 4, 8 (code + verification) | **The LLM/CLI**, via the skills below |

If an LLM tells you it "dropped Hero Strip onto the canvas" or "published the composition"; it didn't. Those are human steps. The full Layer 2 runbook lives at [docs/10-setup/layer-2-runbook.md](/docs/studio/manually-configuring-the-studio-web-app); refer to it any time the LLM hands a Studio-side step back to you.

## What You'll Have at the End

-   A Contentstack stack with environments, locales, and tokens
-   Studio + Live Preview + Delivery SDK installed in a React app
-   One of YOUR components registered with Studio
-   A Studio project configured against your stack
-   A reusable Section that authors can drop into pages
-   A Connected template rendering a real page at /products/<slug>
-   A working understanding of the full Studio loop

---

## Before You Start

Two things you need outside Studio:

| You need | Get it via |
| --- | --- |
| A Contentstack account | Sign up at [contentstack.com](https://www.contentstack.com) (free trial available). |
| A React app | npm create vite@latest my-studio-app -- --template react-ts, or your existing app. |

Once you have those, install the 27 Studio skills into your IDE in one command:

```
curl -fsSL https://www.contentstack.com/docs/studio/install.sh | sh
```

The installer auto-detects Claude Code, Cursor, Windsurf, Cline, or Continue and drops the prompts in the right directory. From here on, **every step is "ask your LLM to run skill X"**, and the skill knows what to do.

---

## Step 1: Set Up Your Contentstack Stack _(~10 min, in the Contentstack UI)_

This step is intentionally manual. Studio doesn't ask for your account credentials or browser session. You configure the stack once at [app.contentstack.com](https://app.contentstack.com), then paste four values into your app's .env in step 2.

Do these in order. Each step is one or two clicks.

1.  **Create a stack.** [app.contentstack.com](https://app.contentstack.com) → **New Stack**. Name it whatever you like; pick a master locale (e.g. en-us).
2.  **Add an environment.** Stack → **Settings** → **Environments** → **New Environment**. Name it preview. The base URL is a placeholder; Studio sets the real Canvas URL later.
3.  **Confirm your default locale exists.** Stack → **Settings** → **Languages**. If your default locale isn't already there, add it.
4.  **Generate a Delivery Token (with paired Preview Token).** Stack → **Settings** → **Tokens** → **\+ Delivery Token**. Scope it to the preview environment. The Preview Token is created automatically on the same screen, so copy both. Also copy the **Stack API Key** visible at the top of the same drawer.
5.  **Enable Live Preview.** Stack → **Settings** → **Visual Experience** → **General** → toggle **Enable Live Preview** ON.

When you're done you should have these four values written down:

```
CS_API_KEY=blt...
CS_DELIVERY_TOKEN=cs...
CS_PREVIEW_TOKEN=cs...
CS_ENVIRONMENT=preview
```

Plus your locale code (e.g. en-us) and your region (defaults to us). The install-studio skill in the next step will ask for these and write them to .env for you.

See [prerequisites](/docs/studio/review-prerequisites-before-you-start) for the same five steps with screenshots.

**You now have:** a working stack at app.contentstack.com with the four credentials Studio needs.

---

## Step 2: Install Studio in Your App _(~3 min)_

**Ask your LLM:** _"Run install-studio."_

→ Skill: [install-studio](/docs/studio/setup-overview)

What happens: - Installs @contentstack/delivery-sdk, @contentstack/live-preview-utils, @contentstack/studio-react - Creates src/lib/contentstack.ts with all three SDKs initialised - Wires ContentstackLivePreview.init() + studioSdk.init() at app shell - Pre-flight CMA call to verify credentials before writing any code

**You now have:** Studio installed and connected to your stack. Your app can read content; Live Preview's channel is open; Studio's bridge is loaded.

---

## Step 3: Register Your First Component _(~5 min)_

**Ask your LLM:** _"Run register-component for src/components/Hero.tsx."_

→ Skill: [register-component](/docs/studio/register-components)

What happens: - Reads your Hero component - Infers a prop schema from its TypeScript interface - Maps each prop to Studio's strict prop types (string, imageurl, href, choice, …) - Writes a registerComponent({ … }) call in src/register-components.tsx - Sets defaultValue for every prop with a default, so the palette tile previews correctly

**You now have:** YOUR Hero component appearing in Studio's palette under "Registered Components", not Studio's built-in default.

> Repeat for every component you want available. The skill is idempotent; re-running on the same file updates the registration.

---

## Step 4: Set Up the Canvas Route _(~2 min)_

**Ask your LLM:** _"Run setup-section-preview."_

→ Skill: [setup-section-preview](/docs/studio/section-preview-route)

What happens: - Adds a /canvas route to your app that mounts <StudioCanvas /> - Sets the Canvas URL on the Studio project (so the Studio iframe loads your local dev server)

**You now have:** a place for Studio to render section previews. Its iframe will load http://localhost:3000/canvas (or wherever your dev server runs).

---

## Step 5: Configure the Studio Project _(~2 min)_

**Ask your LLM:** _"Run configure-studio."_

→ Skill: [configure-studio](/docs/studio/manually-configuring-the-studio-web-app#2-configure-the-project)

What happens: - Sets the project's default Environment (typically preview) - Sets the default Language / locale - Confirms the Canvas URL from step 4 - Optionally enables Freeform mode (skip for now, as we're building a Connected template)

**You now have:** a Studio project ready for authoring.

---

## Step 6: Build Your First Section _(~5 min)_

**Ask your LLM:** _"Run build-section for a Hero Strip section linked to the_ _product_ _global field."_

→ Skill: [build-section](/docs/studio/build-and-use-sections)

What happens: - Opens the Studio Sections tab → New Section - Names it "Hero Strip" - Connects it to a structural schema (Content Type / Global Field / Group / etc.): pick whichever shape matches your content - Drops the Hero you registered in step 3 onto the canvas - Binds its props to fields on the linked schema via template.<field> - Saves with the Expose Props modal acknowledged

**You now have:** a reusable Section that authors can drop onto any template whose connected content type matches the section's linked schema.

---

## Step 7: Build a Connected Template _(~5 min)_

**Ask your LLM:** _"Run build-connected-template for the_ _product_ _content type."_

→ Skill: [build-connected-template](/docs/studio/connected-content-type)

What happens: - Creates a new Connected template in Studio - Connects it to your product content type - Picks a preview entry to author against - Drops the Hero Strip section (from step 6) onto the template canvas - Sets the URL pattern (e.g. /products/{{entry.slug}}) - Saves

**You now have:** a template that renders every product entry at /products/<slug>.

---

## Step 8: Verify and View the Page _(~3 min)_

**Ask your LLM:** _"Run verify-setup."_

→ Skill: [verify-setup](/docs/studio/verify-your-studio-setup-end-to-end)

What happens: - Layer 1: Delivery SDK can fetch entries - Layer 2: Live Preview channel is open - Layer 3: Visual Editor renders an entry - Layer 4: Studio canvas loads with bindings resolving

If all four are green: visit http://localhost:3000/products/<slug> (use a real slug from one of your product entries). **You should see your registered Hero rendered with the entry's data.**

If any layer fails, the skill names the lowest failing layer. Ask: _"Run troubleshoot-canvas for symptom:_ _."_

---

## What You Have Now

Working end-to-end:

-   A Contentstack stack with tokens, environment, locale, and Live Preview on
-   Studio installed in your React app
-   YOUR component registered in Studio's palette
-   A reusable Section authored visually
-   A Connected template rendering pages at real URLs
-   Verified all four layers (Delivery / Live Preview / Visual Editor / Studio)

You went from zero to a working Studio composition in eight skills.

---

## Reference: What Just Got Wired

The install-studio + build-connected-template skills set up <StudioComponent /> for you. When you're ready to understand WHAT was wired (and what other options you can pass, such as variantAlias, locale, templateEntryUid, data, etc.), read the [**<StudioComponent />** **reference**](/docs/studio/composition-rendering-reference). Every prop + every fetcher option, source-grounded against the SDK types.

## Where to Next

You've finished the foundational loop. From here:

-   **Add more components:** repeat step 3 (register-component) for every component in your library.
-   **Build richer sections:** add a Repeater (use-repeater), a Condition Block (use-condition-block), or a Section Slot (use-section-slot).
-   **Add a Freeform landing page:** for marketing pages not tied to a content type. See [Freeform landing template](/docs/studio/freeform-landing-page-template) + build-freeform-template skill.
-   **Pull external data:** use wire-external-data to layer in non-Contentstack sources (pricing APIs, A/B variants).
-   **Import your design tokens:** import-design-tokens makes Studio's Design Panel use your brand's tokens.
-   **Ship to production:** deploy-studio-site walks you through Vercel / Netlify / your platform of choice.

The [marketing site walkthrough](/docs/studio/marketing-site-walkthrough-with-four-end-to-end-scenarios) is the canonical multi-section, multi-template example that ties everything together.

---

## Troubleshooting

-   **A skill says "credentials rejected":** the Delivery Token or Preview Token in .env is stale. Open Stack → Settings → Tokens → the token you used → copy the current values into .env, restart the dev server.
-   **A skill says "no** **.env** **found":** install-studio writes it; if you skipped that step, create .env by hand with the four values from step 1.
-   **The canvas iframe is blank:** Canvas URL on the project doesn't match where your dev server is running. Run troubleshoot-canvas with that symptom.
-   **My component renders but with empty props:** check that the prop bindings in the section reference fields that exist on the preview entry. Pick a more-complete entry to author against.
-   **Skill fails partway through:** every skill is idempotent. Re-run it; it picks up where it stopped.

---

## Don't Want to Set Any of This Up Yet?

If you just want to see what Studio looks like before committing to setting up a stack, installing the SDKs, or registering components, try the [Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app). It's a Studio-hosted iframe with built-in demo components and demo data. No app, no canvas URL, no tokens.

Try-before-you-buy fallback only. Pages built in the Playground can't be deployed, can't use your components, and don't bind to your content. Once you're sold, come back to this walkthrough: that's where Studio's real value lives.
