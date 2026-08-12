---
title: "Kickstart Nuxt (SSR)"
description: "Build a Nuxt SSR app with Contentstack. Use this starter to master the Contentstack Delivery SDK, enable Live Preview, and integrate the Visual Editor."
url: /headless-cms/nuxt-ssr
---

# Kickstart Nuxt (SSR)

## Kickstart Nuxt SSR

## Introduction

Kickstart Nuxt SSR is a minimal starter for connecting a **Nuxt** server-rendered app to Contentstack. This repository demonstrates:

-   [**Contentstack Delivery SDK**](/docs/developers/sdks) initialization for content retrieval
-   [**Live Preview**](/docs/headless-cms/about-live-preview) with SSR-aware query handling
-   [**Visual Editor**](/docs/headless-cms/about-visual-editor) integration for on-page editing in preview mode

The app is built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS**.

## How Content Is Loaded

Content is retrieved **dynamically at request time** using the Contentstack Delivery SDK, rather than being embedded during the build process.

When the application loads the home route (/), the content fetching flow is as follows:

1.  [app/app.vue](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/app.vue) calls the useGetPage("/") composable.
2.  The useGetPage function (in [app/composables/useGetPage.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/composables/useGetPage.ts)):
    -   Executes the content query using useAsyncData
    -   Uses the stack instance ($stack) initialized in [app/plugins/contentstack.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/plugins/contentstack.ts)

This setup enables content fetching in multiple scenarios:

-   **Server-side rendering (SSR)**: The server fetches content to generate the initial HTML response.
-   **Live Preview**: Content updates in real time when preview mode is enabled, and the live\_preview query parameter is present.

**Result**:

-   Always serves **up-to-date content**
-   Supports **real-time preview workflows**
-   Eliminates the need for rebuilds when content changes

## What You'll Learn

By the end of this guide, you can:

-   Set up a Contentstack stack with sample content by importing a Starter or seeding with the Contentstack CLI
-   Configure a local Nuxt SSR app with Contentstack [delivery](/docs/headless-cms/about-delivery-tokens) and [preview tokens](/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens)
-   Enable and verify Live Preview behavior with Nuxt route query parameters
-   Understand how this project fetches and renders page content from the page content type
-   Review core Nuxt files used for SDK setup, preview configuration, and page rendering

## Prerequisites

Before you begin, make sure you have:

-   [Node.js (v20 or higher)](https://nodejs.org/en/download/) installed on your machine
-   Basic familiarity with Nuxt, Vue, and TypeScript basics
-   A [Contentstack account](https://www.contentstack.com/login/)
-   **Organization Owner/Admin** access if you need to create or seed [stacks](/docs/headless-cms/about-stack)
-   A [GitHub account](https://github.com/login/) if you use Launch-based deployment workflows

**Note:** Kickstart projects commonly reuse a shared content model. You can reuse one seeded stack across multiple kickstart apps, or create separate stacks for isolation.

Once you have the prerequisites in place, choose one stack setup path below.

## Choose How to Set Up Your Stack

Use one of these setup paths depending on your workflow.

### Option 1: Import a starter and optionally deploy with Launch

Use these guides:

-   [**Importing a Starter**](/docs/marketplace/installing-a-starter): Import a prebuilt stack and [content model.](/docs/marketplace/about-content-models)
-   [**Launch Quick Start Guide with Nuxt**](/docs/launch/quick-start-nuxt): Connect GitHub, deploy the app, configure environment variables, and manage deployments.

Typical outcomes:

-   A stack with sample content
-   A hosted application
-   A GitHub repository (if Deploy in Launch is used)

### Option 2: Create and seed a stack with CLI

This repo expects content from the shared seed repository **contentstack/kickstart-stack-seed**. Seeding that repository with the CLI produces the same outcome as a [Starter import](/docs/marketplace/installing-a-starter) for local and repeatable setups, such as onboarding or CI.

This approach works well for terminal-first workflows or when you do not use the [**Marketplace**](/docs/marketplace/about-marketplace) onboarding path.

**Note:** If you already created a stack from this seed, or from another compatible Kickstart project, you can reuse that stack and skip creating another one.

1.  Install the Contentstack globally:
    
    ```
    npm install -g @contentstack/cli
    ```
    
2.  If you are configuring the CLI for the first time, set your region:
    
    ```
    csdx config:set:region EU
    ```
    
    **Note:** Free developer stacks typically use the **EU** region. Refer to the [About Regions](/docs/administration/about-regions) document to know more about Contentstack regions.
    
3.  Sign in, and provide your [Contentstack account](https://www.contentstack.com/login/) details when prompted:
    
    ```
    csdx auth:login
    ```
    
4.  Perform the following steps to get your Organization UID:
    
    1.  Go to Contentstack CMS and Select **Administration** from the “App Switcher”.
    2.  Copy the **Organization UID** to use with the seed command.
5.  Create a stack and seed it from the repository. Replace <ORG\_ID> with your organization UID:
    
    ```
    csdx cm:stacks:seed --repo "contentstack/kickstart-stack-seed" --org "<ORG_ID>" -n "Kickstart Stack"
    ```
    

Once your stack contains compatible sample content, clone the app and install dependencies.

**Additional Resources:**

-   You can run an interactive bootstrap flow with csdx cm:bootstrap.
-   Watch the [Seed a stack in the CLI](https://youtu.be/2dQheUo7uH4) video for a walkthrough of the stack seeding process.

## Get Delivery and Preview Tokens

Gather these before updating .env. Use the stack you created with the **Starter** or **CLI commands** earlier. [Create a new stack](/docs/headless-cms/create-a-new-stack) manually only if you are not using any of those paths.

1.  Log in to Contentstack and open your stack.
2.  Navigate to **Settings** > **Tokens**.
3.  Create a Delivery Token and ensure live preview is enabled for your workflow.
4.  In the **Environment** tab, confirm your target publishing environment (for example, preview).

**Additional Resource:** Refer to the [Create a Delivery Token](/docs/headless-cms/create-a-delivery-token) document for detailed steps.

If you configure Live Preview entry URLs in stack settings, ensure they match your app origin (http://localhost:3000 for local dev by default).

## Configure .env for Kickstart Nuxt SSR

After you have a stack and a local clone, follow the instructions to connect the app to Contentstack.

1.  Copy .env.example to .env in the repository root.
2.  Set the required values:
    
    ```
    NUXT_CONTENTSTACK_API_KEY=<STACK_API_KEY>
    NUXT_CONTENTSTACK_DELIVERY_TOKEN=<DELIVERY_TOKEN>
    NUXT_CONTENTSTACK_PREVIEW_TOKEN=<PREVIEW_TOKEN>
    NUXT_CONTENTSTACK_ENVIRONMENT=preview
    NUXT_CONTENTSTACK_REGION=EU
    NUXT_CONTENTSTACK_PREVIEW=true
    ```
    

### How the configuration works

The app reads these variables through runtimeConfig.public in [nuxt.config.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/nuxt.config.ts). It then uses them in [app/plugins/contentstack.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/plugins/contentstack.ts) to initialize the SDK and Live Preview settings.

-   NUXT\_CONTENTSTACK\_PREVIEW=true enables preview-aware behavior.
-   The app uses region-aware endpoints.
    
    **Additional Resource:** Refer to the [Get Contentstack Endpoints](/docs/developers/sdks/utils-sdk/javascript/get-contentstack-endpoints) document for more information.
    
-   The app passes Nuxt route query parameters to $stack.livePreviewQuery(...) when live\_preview is present.

### Optional configuration overrides

You can override default region-resolved endpoints with these optional variables:

-   NUXT\_CONTENTSTACK\_CONTENT\_DELIVERY
-   NUXT\_CONTENTSTACK\_PREVIEW\_HOST
-   NUXT\_CONTENTSTACK\_CONTENT\_APPLICATION

If these are not set, endpoint values are derived from NUXT\_CONTENTSTACK\_REGION.

**Warning:** Do not commit .env. The file is ignored by .gitignore.

With environment variables configured, enable Live Preview at the stack level to match your app setup.

Same two fixes — flow correction and dropping "document":

## Enable Live Preview in the Stack

1.  In your stack, go to **Settings** and navigate to **Environments**. Select an existing environment or create a new one, and add a **Base URL** for each locale.
2.  Navigate to **Visual Experience** from the **Settings** menu and select the **Enable Live Preview** checkbox.
3.  Select the **Default Preview Environment** that matches NUXT\_CONTENTSTACK\_ENVIRONMENT (for example, preview).
4.  Click **Save**.

**Additional Resource:** For detailed setup instructions, see [Set Up Live Preview for Your Stack](/docs/headless-cms/set-up-live-preview-for-your-stack).

## Verify Your Setup

### Start the development server

From the project root:

```
npm run dev
```

Open the local Nuxt app. You should see the homepage content rendered from your stack, including title, description, image, and modular blocks.

### Test Live Preview

**Prerequisites to test Live Preview:**

-   Live Preview is enabled in your stack
-   NUXT\_CONTENTSTACK\_PREVIEW=true in .env

**Steps:**

1.  Open and edit a page entry in Contentstack.
2.  Open the corresponding Live Preview or Visual Editor view.
3.  Confirm updates are reflected in the Nuxt app.

**How this repo handles preview updates:**

-   [app/composables/useGetPage.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/composables/useGetPage.ts) reads route query parameters.
-   When preview is enabled, and live\_preview exists in the query, the app passes those parameters to $stack.livePreviewQuery(...).
-   The app fetches the page entry where the URL matches the route (the home route uses /).

Once verification passes, review the core project files to understand how this behavior is implemented.

## Understand the Codebase

### Project structure

```
kickstart-nuxt-ssr/
├── app/
│   ├── app.vue
│   ├── composables/
│   │   └── useGetPage.ts
│   └── plugins/
│       └── contentstack.ts
├── server/
│   └── tsconfig.json
├── .env.example
├── nuxt.config.ts
├── package.json
├── tsconfig.json
├── types.ts
├── README.md
├── SECURITY.md
└── .github/
    └── workflows/
```

### Configuration and build settings

-   **Nuxt configuration:** [nuxt.config.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/nuxt.config.ts)
    -   Uses runtimeConfig.public for Contentstack values
    -   Enables Tailwind module integration
-   **Local scripts:** package.json
    -   npm run dev starts the dev server
    -   npm run build builds the SSR output
    -   npm run generate runs static generation
    -   npm run preview serves the built output
-   **Build output directories:** .output, .nuxt, .nitro, and dist are ignored in .gitignore

### Key source files

-   **SDK and Live Preview initialization:** [app/plugins/contentstack.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/plugins/contentstack.ts)
    -   Creates a Contentstack stack client
    -   Configures live\_preview in the SDK
    -   Initializes ContentstackLivePreview.init(...) on the client when preview mode is enabled
-   **Page data fetching:** [app/composables/useGetPage.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/composables/useGetPage.ts)
    -   Queries the content type page
    -   Filters by URL
    -   Adds editable tags in preview mode
-   **Homepage rendering:** [app/app.vue](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/app.vue)
    -   Loads / with useGetPage("/")
    -   Renders fields and modular blocks
    -   Applies the Visual Editor empty-block class when blocks are missing
-   **Type definitions:** [types.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/types.ts)
    -   Defines Page, Block, and related interfaces used by the app

After you understand the implementation, use the next section to avoid common setup and preview pitfalls.

## Common Mistakes to Avoid

### Critical mistakes

-   **Wrong region in** **.env**
    -   **Why it breaks:** The SDK region drives endpoint resolution in [nuxt.config.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/nuxt.config.ts). The wrong region points requests to the wrong API host.
    -   **What to set:** NUXT\_CONTENTSTACK\_REGION must match your actual stack region (for many free accounts, this is EU).
    -   **Quick check:** If credentials look correct but entries still do not load, verify the region first.
-   **Missing or invalid tokens**
    -   **Required values:** NUXT\_CONTENTSTACK\_DELIVERY\_TOKEN and NUXT\_CONTENTSTACK\_PREVIEW\_TOKEN.
    -   **Why it breaks:** Delivery token powers content fetch; preview token powers Live Preview in [app/plugins/contentstack.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/plugins/contentstack.ts)
    -   **Fix:** Regenerate token(s), update .env, then restart npm run dev.
-   **Preview is disabled in either the app or the stack**
    -   **App-side requirement:** NUXT\_CONTENTSTACK\_PREVIEW=true (exact lowercase string).
    -   **Stack-side requirement:** Live Preview enabled in Contentstack settings for the same environment.
    -   **Why it matters:** Both toggles are needed for editable tags and live preview URL behavior.
-   **Unseeded or incompatible content model**
    -   **Code contract:** [useGetPage.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/composables/useGetPage.ts) queries the content type page where url equals /.
    -   **Minimum content needed:** At least one published page entry with url: / in the configured environment.
    -   **Fix path:** Seed with contentstack/kickstart-stack-seed, or create a compatible page type and home entry manually.
-   **Using non-true values for the preview flag**
    -   **Exact behavior:** Preview is enabled only when NUXT\_CONTENTSTACK\_PREVIEW === "true" as mapped in [nuxt.config.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/nuxt.config.ts) into runtimeConfig.public.preview.
    -   **Why the strict check:** Values from .env are read as strings when Nuxt builds runtimeConfig, so the code compares to the literal "true" rather than coercing to a boolean.
    -   **Common mistake:** TRUE, True, 1, or yes will be treated as false.
    -   **Fix:** Set NUXT\_CONTENTSTACK\_PREVIEW=true exactly.

### Other mistakes to avoid

-   **Committing** **.env**
    -   .env contains API key and tokens; treat as secrets and keep local only.
    -   Commit .env.example updates when variable names change; never commit real values.
-   **Publishing content to a different environment than the one configured**
    -   **Why it breaks:** Queries run against NUXT\_CONTENTSTACK\_ENVIRONMENT; unpublished entries in that environment return empty results.
    -   **Fix:** Publish to the configured environment or update NUXT\_CONTENTSTACK\_ENVIRONMENT to the correct one.
-   **Skipping dependency install**
    -   **Why it breaks:** npm install runs postinstall (nuxt prepare) and generates required Nuxt build artifacts.
    -   **Fix:** Run npm install before npm run dev, especially on fresh clones.
-   **Renaming content contract without updating code**
    -   **Code coupling:** The app is hardcoded to contentType("page") and .where("url", ...).
    -   **If you customize the model:** Update [app/composables/useGetPage.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/composables/useGetPage.ts), [types.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/types.ts), and rendering assumptions in [app/app.vue](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/app/app.vue).

## Next Steps

-   Add routes and page queries beyond /.
-   Extend content types and update [types.ts](https://github.com/contentstack/kickstart-nuxt-ssr/blob/main/types.ts) to preserve type safety.
-   Define a test strategy for composables and rendering behavior.
-   Review Nuxt deployment options for SSR and static output.

For support and questions, join the [Contentstack Community on Discord](https://community.contentstack.com/).
