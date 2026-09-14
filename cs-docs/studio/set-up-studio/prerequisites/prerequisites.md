---
title: "Prerequisites"
description: "What you need before installing Contentstack Studio: stack credentials, tokens, environment settings, and dev environment requirements."
url: /studio/prerequisites
---

# Prerequisites

## Prerequisites

Studio needs a Contentstack set up the usual way. Collect these from your stack **before** starting the install. Studio assumes they're in place and won't create them for you.

Studio does **not** ask for your Contentstack account password, browser session, or any account-level API token. Stack setup is something you do manually in the Contentstack UI, once, in about 10 minutes. After that, Studio reads four values from your project's .env and never asks for credentials again.

## From your Contentstack

Configure these by hand at [app.contentstack.com](https://app.contentstack.com). If you've shipped a Contentstack-backed site before you already have most of these.

| You need | What it's for | Where to configure |
| --- | --- | --- |
| **A stack** | Where your content lives | Open [app.contentstack.com](https://app.contentstack.com), then **New Stack** |
| **Stack API Key** | Identifies the stack (public, safe in client bundles) | Generated when the stack is created. In your stack, open Settings, then Tokens, then any Delivery Token. |
| **Delivery Token** | Reads published content (secret) | In your stack, open Settings, then **Tokens**, then **\+ Delivery Token**, scoped to your environment |
| **Preview Token** | Reads draft + scheduled content for Live Preview (secret). Auto-paired with each Delivery Token. | Same drawer as the Delivery Token, paired automatically |
| **An Environment** | A deployable target (Studio picks one per project) | In your stack, open Settings, then **Environments**, then **\+ New Environment** (typically named preview) |
| **Environment Base URL** | The origin Studio's canvas iframe and preview links resolve against (must equal the app you actually spin up) | In your stack, open Settings, then **Environments**, edit your environment, and set the per-locale **Base URL** (e.g. http://localhost:3010 for a local Vite dev server on that port, or your deployed origin) |
| **A Language (locale)** | At least one locale must exist on the stack | In your stack, open Settings, then **Languages** |
| **Live Preview enabled at the stack** | Required for Studio's canvas iframe to receive edit events | In your stack, open Settings, then **Visual Experience**, then **General**, and toggle **Enable Live Preview** ON |
| (Recommended) **Custom Preview URL per content type** | Per-CT URL paths Studio reads to derive accurate template URL patterns | In your stack, open Settings, then **Visual Experience**, then **Preview URL** |

When the eight rows above are done, you'll have these four values to paste into your app's .env later (the install-studio skill prompts for them and writes the file for you):

```
CONTENTSTACK_API_KEY=blt...                # public — identifies the stack
CONTENTSTACK_DELIVERY_TOKEN=cs...          # secret — reads published content
CONTENTSTACK_PREVIEW_TOKEN=cs...           # secret — reads draft/scheduled content
CONTENTSTACK_ENVIRONMENT=preview
```

Plus your locale code (e.g. en-us) and your region (defaults to us).

> **Framework prefix map: same four secrets, different prefix per framework.** Because bundlers gate client-side env vars behind a naming convention, the **suffix stays CONTENTSTACK\_\* everywhere**. Only the prefix changes:
> 
> | Framework | Prefix in .env | Accessor in code |
> | --- | --- | --- |
> | Node.js / server-side rendering (SSR) (server-only) | CONTENTSTACK\_\* | process.env.CONTENTSTACK\_API\_KEY |
> | Next.js (client-visible) | NEXT\_PUBLIC\_CONTENTSTACK\_\* | process.env.NEXT\_PUBLIC\_CONTENTSTACK\_API\_KEY |
> | Vite / React (client-visible) | VITE\_CONTENTSTACK\_\* | import.meta.env.VITE\_CONTENTSTACK\_API\_KEY |
> | Remix (client-visible) | CONTENTSTACK\_\* in .env, window.ENV.CONTENTSTACK\_\* on the client (populated via root loader) | window.ENV.CONTENTSTACK\_API\_KEY |
> | Astro (client-visible) | PUBLIC\_CONTENTSTACK\_\* | import.meta.env.PUBLIC\_CONTENTSTACK\_API\_KEY |
> 
> Server-only secrets (management tokens, auth tokens, delivery-when-SSR-fetching) never need a client-side prefix: plain CONTENTSTACK\_\* is safe. Client-visible values (API key + delivery token used from the browser + preview token for Live Preview) need the framework's public prefix so the bundler will inline them.

### Where to find each in the stack

The stack's left sidebar has dedicated pages for every item in the table above:

![Stack settings sidebar with sections for Tokens, Environments, Languages, Visual Experience](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am818b72f935999b5b/e59e59aba84520cdb700b5e6/stack-settings-sidebar.png)

**Delivery + Preview tokens**: in your stack, open Settings, then **Tokens**:

![Tokens list with delivery tokens, each paired with a preview token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame7f7e3a526596cd4/906626389cee6fc65a146ed2/tokens-list.png)

Click a token in this list to open its edit drawer. The Stack API Key, Delivery Token, and the auto-paired Preview Token are shown there (treat them as secrets: copy them into your project's .env rather than into committed source).

**Environments**: in your stack, open Settings, then **Environments**:

![Environments list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc25271de301fcbf3/a349ba6403d311bce47f6aea/environments-list.png)

Each environment carries its own base URL per locale. Studio uses this when resolving the canvas URL for sections and the preview URLs for templates:

![Environment edit modal: base URLs per locale](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2e8b7b3032a39b7b/bd39db92c9333fa871c4bb68/environment-edit.png)

> **Required:** the environment your Studio project targets must have a **non-empty per-locale URL** for your locale, and that URL must match the app you actually spin up, same host and port. For local dev this is your dev server's origin (e.g. http://localhost:3010 if that's the port your npm run dev binds to). For deployed it's the live origin. Studio uses it as the canvas/preview Base URL. A mismatched or empty value means a blank canvas with an error that points at the wrong layer. setup-section-preview confirms this before building the canvas route.

**Languages**: in your stack, open Settings, then **Languages**. At least one locale must exist:

![Languages list](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd515abcb3f4f91e4/a8a23b45e31b993c709fa10a/languages-list.png)

**Live Preview + Visual Editor enable**: in your stack, open Settings, then **Visual Experience**, then **General**. The **Enable Live Preview** checkbox plus the **Display Setup Status** toggle under **Visual Editor** must both be on for Studio's canvas iframe to mount inside the Visual Editor pipeline:

![Visual Experience General settings with Live Preview and Visual Editor toggles](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambbc403504cbd7514/86436092da33aebc57db40e7/visual-experience-general.png)

**Custom Preview URL** (recommended): in your stack, open Settings, then **Visual Experience**, then **Preview URL**. Per-content-type URL paths. Studio reads these to derive accurate template URL patterns. The Preview URL tab unlocks only after **Enable Live Preview** is toggled on in the General tab above. Until then it shows a "Custom Preview URL Unavailable" message.

## From your dev environment

| You need | Why | Get it via |
| --- | --- | --- |
| **A React app** | Studio's SDK is React-only today | Outside Studio's scope: use npm create vite@latest, Next.js, Remix, Astro, or any React-based framework. |
| **Node.js 18+** | All three SDKs require it | nvm install 18 or your preferred installer. |
| **npm, yarn, or pnpm** | The install steps work with all three | Bundled with Node. |
| **HTTPS locally** | Studio runs at https://app.contentstack.com. Modern browsers refuse to iframe http://localhost into an HTTPS page | See [Serve your canvas over HTTPS locally](/docs/studio/serve-your-canvas-app-over-https-locally). |
| **Live Preview installed in the app** | Studio's canvas iframe needs Live Preview running in your app | Skill: install-live-preview (standalone), OR bundled into install-studio (full Studio install). |
| **Studio SDK installed in the app** | The bridge between your app and Studio | Skill: install-studio, installs Delivery SDK + Live Preview + Studio React together. |
| **Published entries** | The canvas needs real entries to bind against. An empty stack renders an empty canvas | Author them in Contentstack. |

## Browser

Studio's canvas is a browser app. Any current Chromium browser (Chrome, Edge, Brave, Arc) works. Safari and Firefox work with local HTTPS trusted correctly. Private-window sessions block the third-party cookies Studio's iframe uses. Use a regular window.

## What you don't need (yet)

-   A Studio project: we'll create one in Layer 2
-   A canvas route: we'll add it during install
-   Template preview routes: same

## Ready?

[Install the Delivery SDK](/docs/studio/install-the-delivery-sdk)

Or, if you'd rather have an LLM walk you through the full install in one go:

```
curl -fsSL -u studio https://studio-documentation.contentstackapps.com/install.sh | sh
```

Then ask your LLM: "create a Contentstack and install Studio in this project". It invokes create-contentstack-stack, then install-studio, then configure-studio, and finally verify-setup.

## Last resort: try Studio without setting any of this up

If you want to see what Studio looks like before committing to setting up a stack, installing the SDKs, or registering components, use the **[Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app)**, a Studio-hosted iframe that lets you compose with Studio's built-in components against demo data. No app, no canvas URL, no tokens.

This is a try-before-you-buy fallback only. Pages built in the Playground can't be deployed to your site, can't use your components, and don't bind to your content. Once you're convinced, come back here and do the proper setup. That's where Studio's real value (your components, your data, deployable pages) lives.
