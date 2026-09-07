---
title: "Review Prerequisites Before You Start"
description: "What you need before installing Contentstack Studio: stack credentials, tokens, environment settings, and dev environment requirements."
url: /studio/review-prerequisites-before-you-start
uid: blt201386f21f3781f9
---

# Review Prerequisites Before You Start

## Review Prerequisites Before You Start

Studio needs a Contentstack stack set up the usual way. Collect these from your stack **before** starting the install, as Studio assumes they're in place and won't create them for you.

Studio does **not** ask for your Contentstack account password, browser session, or any account-level API token. Stack setup is a one-time manual step in the Contentstack UI. After that, Studio reads four values from your project's .env and never asks for credentials again.

## From Your Contentstack Stack

Configure these by hand at [app.contentstack.com](https://app.contentstack.com). If you've shipped a Contentstack-backed site before you already have most of these.

| You need | What it's for | Where to configure |
| --- | --- | --- |
| **A stack** | Where your content lives | [app.contentstack.com](https://app.contentstack.com) to **New Stack** |
| **Stack API Key** | Identifies the stack (public, safe in client bundles) | Generated when the stack is created. Visible at Stack to Settings to Tokens to any Delivery Token. |
| **Delivery Token** | Reads published content (secret) | Stack to Settings to **Tokens** to **\+ Delivery Token**, scoped to your environment |
| **Preview Token** | Reads draft + scheduled content for Live Preview (secret). Auto-paired with each Delivery Token. | Same drawer as the Delivery Token, paired automatically |
| **An Environment** | A deployable target: Studio picks one per project | Stack to Settings to **Environments** to **\+ New Environment** (typically named preview) |
| **A Language (locale)** | At least one locale must exist on the stack | Stack to Settings to **Languages** |
| **Live Preview enabled at the stack** | Required for Studio's canvas iframe to receive edit events | Stack to Settings to **Visual Experience** to **General** to toggle **Enable Live Preview** ON |
| _(Recommended)_ **Custom Preview URL per content type** | Per-CT URL paths Studio reads to derive accurate template URL patterns | Stack to Settings to **Visual Experience** to **Preview URL** |

When the eight rows above are done, you have these four values to paste into your app's .env later (the install-studio skill prompts for them and writes the file for you):

```
CS_API_KEY=blt...                # public — identifies the stack
CS_DELIVERY_TOKEN=cs...          # secret — reads published content
CS_PREVIEW_TOKEN=cs...           # secret — reads draft/scheduled content
CS_ENVIRONMENT=preview
```

Plus your locale code (e.g. en-us) and your region (defaults to us).

### Where to find each in the stack

The stack's left sidebar has dedicated pages for every item in the table above:

![Stack settings sidebar with sections for Tokens, Environments, Languages, Visual Experience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am818b72f935999b5b/e59e59aba84520cdb700b5e6/stack-settings-sidebar.png)

**Delivery + Preview tokens:** Stack to Settings to **Tokens**:

![Tokens list with delivery tokens, each paired with a preview token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame7f7e3a526596cd4/906626389cee6fc65a146ed2/tokens-list.png)

Click a token in this list to open its edit drawer: the Stack API Key, Delivery Token, and the auto-paired Preview Token are shown there (treat them as secrets; copy them into your project's .env rather than into committed source).

**Environments:** Stack to Settings to **Environments**:

![Environments list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc25271de301fcbf3/a349ba6403d311bce47f6aea/environments-list.png)

Each environment carries its own base URL per locale: Studio uses this when resolving the canvas URL for sections and the preview URLs for templates:

![Environment edit modal: base URLs per locale](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2e8b7b3032a39b7b/bd39db92c9333fa871c4bb68/environment-edit.png)

> **Required:** The environment your Studio project targets must have a non-empty per-locale URL for your locale.
> 
> -   Local dev: set it to your dev origin (e.g. http://localhost:51723)
> -   Deployed: set it to your live origin
> 
> Studio uses this as the canvas/preview Base URL. An empty value produces a blank canvas with an error that points at the wrong layer. The setup-section-preview skill confirms this before building the canvas route.

**Languages:** Stack to Settings to **Languages**. At least one locale must exist:

![Languages list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd515abcb3f4f91e4/a8a23b45e31b993c709fa10a/languages-list.png)

**Live Preview + Visual Editor enable:** Stack to Settings to **Visual Experience** to **General**. Both the **Enable Live Preview** checkbox and the **Visual Editor to Display Setup Status** toggle must be on for Studio's canvas iframe to mount inside the Visual Editor pipeline:

![Visual Experience General settings with Live Preview and Visual Editor toggles](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambbc403504cbd7514/86436092da33aebc57db40e7/visual-experience-general.png)

**Custom Preview URL** (recommended): Stack to Settings to **Visual Experience** to **Preview URL**. Per-content-type URL paths; Studio reads these to derive accurate template URL patterns. The Preview URL tab unlocks only after **Enable Live Preview** is toggled on in the General tab above; until then it shows a "Custom Preview URL Unavailable" message.

## From Your Dev Environment

| You need | Why | Get it via |
| --- | --- | --- |
| **A React app** | Studio's SDK is React-only today | Outside Studio's scope: use npm create vite@latest, Next.js, Remix, Astro, or any React-based framework. |
| **Node.js 18+** | All three SDKs require it | nvm install 18 or your preferred installer. |
| **npm, yarn, or pnpm** | The install steps work with all three | Bundled with Node. |
| **Live Preview installed in the app** | Studio's canvas iframe needs Live Preview running in your app | Skill: install-live-preview (standalone), OR bundled into install-studio (full Studio install). |
| **Studio SDK installed in the app** | The bridge between your app and Studio: must mount before Studio's canvas iframe loads | Skill: install-studio, which installs Delivery SDK + Live Preview + Studio React together. |

## What You Don't Need (Yet)

-   A Studio project (we'll create one in Layer 2)
-   A canvas route (we'll add it during install)
-   Template preview routes (same)

## Ready?

[Install the Delivery SDK](/docs/studio/install-the-delivery-sdk)

Or, if you'd rather have an LLM walk you through the full install in one go:

```
curl -fsSL https://www.contentstack.com/docs/studio/install.sh | sh
```

Then ask your LLM: _"create a Contentstack stack and install Studio in this project"_. It invokes create-contentstack-stack to install-studio to configure-studio to verify-setup in order.

## Last Resort: Try Studio Without Setting Any of This Up

If you want to see what Studio looks like before committing to setting up a stack, installing the SDKs, or registering components, use the **[Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app)**: a Studio-hosted iframe that lets you compose with Studio's built-in components against demo data. No app, no canvas URL, no tokens.

This is a try-before-you-buy fallback only. Pages built in the Playground can't be deployed to your site, can't use your components, and don't bind to your content. Once you're convinced, come back here and do the proper setup; that's where Studio's real value (your components, your data, deployable pages) lives.
