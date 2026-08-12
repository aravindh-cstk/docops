---
title: "Veda"
description: "Build a Next.js App Router catalog and marketing site with Contentstack using the Delivery SDK, Live Preview, and Visual Editor with the Kickstart Veda starter."
url: /headless-cms/veda
---

# Veda

## Kickstart Veda

## Introduction

Kickstart Veda is a Next.js App Router template that connects a content-driven catalog and marketing experience to Contentstack.

The repository demonstrates:

-   [**Contentstack Delivery SDK**](/docs/developers/sdks/) initialization for content retrieval across multiple content types
-   [**Live Preview**](/docs/headless-cms/about-live-preview/) and [**Visual Editor**](/docs/headless-cms/about-visual-editor/) integration for on-page editing when preview mode is enabled
-   Uses **Incremental Static Regeneration (ISR)**. Each page sets its own revalidate value to control the caching interval. The default revalidate is **30 minutes** (revalidate = 1800).

The app uses Next.js, React 19, TypeScript, and Tailwind CSS 4.x (via @tailwindcss/postcss).

**Note:** Kickstart Veda is a content and catalog template, not a full e-commerce system. It includes product displays, categories, and rich pages, but not shopping cart, checkout, or payments.

Use the [Kickstart Veda GitHub repository](https://github.com/timbenniks/kickstart-veda) for implementation details, including dependencies, environment variable names, and scripts. For stack-specific values such as tokens, regions, and Live Preview entry URLs, use your Contentstack stack and deployment environment. This guide does not provide personalized configuration values.

## Prerequisites

Before you begin, make sure you have the following:

-   [Node.js 20 or later](https://nodejs.org/en/download/) is installed on your machine.
-   Familiarity with Next.js (App Router), React, and TypeScript
-   A [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin) access if you need to create or seed [stacks](/docs/headless-cms/about-stack/)
-   A [GitHub account](https://github.com/login/) if you use Launch-based deployment workflows

The repository does not declare an engines field. Confirm the minimum Node version for your pinned Next.js release before production deployments.

**Note:** Kickstart projects commonly reuse a seeded stack across demos. Reuse one stack seeded for Kickstart Veda, or create separate stacks for isolation.

## What You'll Learn

By the end of this guide, you can:

-   Import sample content with a Contentstack Starter or seed a stack with the Contentstack CLI
-   Configure a local Next.js app with Contentstack [delivery](/docs/headless-cms/about-delivery-tokens/) and [preview tokens](/docs/headless-cms/about-delivery-tokens/#understanding-preview-tokens) for the Delivery SDK, using NEXT\_PUBLIC\_CONTENTSTACK\_\* variables in .env.local
-   Enable Live Preview and confirm behavior at http://localhost:3000/
-   Describe how the project fetches pages, categories, products, product lines, and header navigation data from Contentstack
-   Locate core App Router files, [lib/contentstack.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/contentstack.ts), [lib/pageUtils.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/pageUtils.ts), and the client [Preview](https://github.com/timbenniks/kickstart-veda/blob/main/components/Pages/Preview.tsx) entry used when preview is enabled

## Set Up Your Stack

Select a path that matches your workflow. You can skip stack setup if you already have a stack that satisfies the Kickstart Veda content contract, including:

-   Content types, page, header, category, product, and product\_line
    
    **Note:** UIDs must match what the app queries. Note the underscore in product\_line
    
-   Published entries for the routes you intend to browse (e.g., a home page whose url field resolves to /, plus seeded category, product line, and product URLs as defined in your stack)
-   Preview tokens and stack settings for Live Preview, if you plan to use preview mode

If your stack differs, update your content model or app code before you continue.

### Option 1: Import the Kickstart Veda starter from the Marketplace

This method suits you if you prefer a UI-based setup without any CLI commands. It is ideal for getting a seeded stack quickly and optionally deploying the app to a hosted environment through Launch.

1.  Sign in to Contentstack and navigate to [**Marketplace**](/docs/marketplace/about-marketplace)**.**
2.  Click **Starters** from the side panel. Hover over the **Kickstart Veda** card and click the **Import** button. Alternatively, click the card to open its detail page and click **Import**.
3.  Enter a name for your new stack in the **Stack Name** field and click **Import Starter**. Contentstack imports all content types, assets, and published entries in the background.
4.  After the import completes, choose how to proceed:
    -   **Deploy in Launch**:
        1.  Click **Deploy in Launch**. You can see the **Create Git Repository** form with your framework settings and environment variables pre-filled.
        2.  Select your **Git Scope**, confirm the repository name, and review the pre-populated **Environment Variables**. Make sure they match the NEXT\_PUBLIC\_CONTENTSTACK\_ names from [.env.example](https://github.com/contentstack/kickstart-veda/blob/main/.env.example).
        3.  Click **+Clone and Deploy** to create the repository and start the deployment.
    -   **Local development only**: If you only need a seeded stack to run the app locally, skip the deployment step and continue to Clone the Project and Install Dependencies.

**Typical outcomes:**

-   A new Contentstack stack seeded with content types (page, header, category, product, product\_line), sample entries, and assets
-   A hosted application on Contentstack Launch (if you complete the Launch deployment)
-   A GitHub repository connected to your Launch project (if you connect one during the Launch setup)

The Marketplace import sets up content types, entries, and assets. It does not configure your local development environment. You still need to clone the repository and set up .env.local to run the app on your machine. Continue with the sections below.

**Note:** If you deploy through Launch, the environment variable names in Launch may differ from the NEXT\_PUBLIC\_CONTENTSTACK\_ keys this app reads. Refer to [.env.example](https://github.com/timbenniks/kickstart-veda/blob/main/.env.example) for the expected variable names and map them in your Launch environment settings.

### Option 2: Create and seed a stack with CLI

This app expects content aligned with the Kickstart Veda seed repository contentstack/kickstart-veda-seed. Seeding that repository with the CLI produces a repeatable stack for local onboarding or CI.

**Note:** The seed repository requires the stack **master language to be English**.

This approach works well for terminal-first workflows or when you do not use the marketplace onboarding path. If you already created a stack from this seed, reuse that stack and skip creating another one.

**Note:** Use csdx cm:stacks:seed to set up Kickstart Veda. The csdx cm:bootstrap command only works for a limited list of apps and does not support Kickstart Veda.

After updating the Contentstack CLI, run csdx cm:stacks:seed --help to view the latest available flags and options.

1.  Install the Contentstack CLI globally:
    
    ```
    npm install -g @contentstack/cli
    ```
    
2.  If you are configuring the CLI for the first time, set your region to match where your stack lives:
    1.  Refer to the [**Login Endpoints**](/docs/administration/login-endpoints) documentation for login URLs and their region codes, or check the browser URL while logged into Contentstack.
    2.  Replace <YOUR\_REGION\_CODE> with the region code you identified above:
        
        ```
        csdx config:set:region <YOUR_REGION_CODE>
        ```
        
    3.  Run csdx config:get:region to confirm the active region and API hosts. Use the same region code for NEXT\_PUBLIC\_CONTENTSTACK\_REGION in .env.
3.  Sign in and provide your Contentstack account details when prompted:
    
    ```
    csdx auth:login
    ```
    
4.  To get your Organization UID:
    1.  Open Contentstack CMS and select **Administration** from the “App Switcher”.
    2.  Copy the **Organization UID** to use with the seed command.
5.  Create a stack and seed it from the repository. Replace <ORG\_ID> with your organization UID.
    
    ```
    csdx cm:stacks:seed --repo "contentstack/kickstart-veda-seed" --org "<ORG_ID>" -n "Veda: The Revival Collection"
    ```
    

Use the \-n flag (or \--stack-name) to define the display name for your new stack. Ensure this name is unique across your Organization.

**Additional Resources:**

-   [For detailed steps, refer to Import content using the seed command](/docs/headless-cms/import-content-using-the-seed-command/).
-   For a general walkthrough of stack seeding, watch [Seed a stack in the CLI](https://youtu.be/2dQheUo7uH4).

## Clone the Project and Install Dependencies

Clone the repository you use for this app (your Launch-connected repository or the canonical starter):

```
git clone https://github.com/contentstack/kickstart-veda.git
cd kickstart-veda
npm install
```

Gather delivery and preview tokens next so you can fill in .env.local.

## Get Delivery and Preview Tokens

Use the stack you connect to this app. Gather the required tokens before you create .env.local.

**Additional Resource:** If you still need a stack, refer to the [Create a new stack](/docs/headless-cms/create-a-new-stack/) document for detailed steps.

1.  Sign in to Contentstack and open your stack.
2.  Go to **Settings** > **Tokens**.
3.  Create a delivery token and ensure Live Preview is enabled for your workflow.
4.  Open the **Environment** tab, and confirm your target publishing environment (e.g., preview) should match the [.env.example](https://github.com/timbenniks/kickstart-veda/blob/main/.env.example).

**Additional Resource:** Refer to the [Create a delivery token](/docs/headless-cms/create-a-delivery-token/) document for detailed steps.

When you configure Live Preview entry URLs in your Contentstack stack, use a URL that matches the environment where the app runs.

-   **Local development:** Use the default Next.js development server URL: http://localhost:3000/
-   **Hosted deployments:** After you deploy the app through Launch or another host, replace the local URL with your app’s HTTPS origin: https://<your-app-host>/. If the app is hosted under a sub-path, include the full path: https://<your-app-host>/myapp/

Hosted URLs are deployment-specific. Update the Live Preview entry URL after deployment to match the final app origin.

## Configure .env.local for Kickstart Veda

Connect the app to Contentstack:

1.  Copy [.env.example](https://github.com/timbenniks/kickstart-veda/blob/main/.env.example) to .env.local in the repository root. Next.js loads .env.local for local development.
2.  Set the required values:

```
NEXT_PUBLIC_CONTENTSTACK_API_KEY=<STACK_API_KEY>
NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=<DELIVERY_TOKEN>
NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN=<PREVIEW_TOKEN>
NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=preview
NEXT_PUBLIC_CONTENTSTACK_REGION=EU
NEXT_PUBLIC_CONTENTSTACK_PREVIEW=true
```

Keep .env.local local only. It contains secrets and must not be committed (see Committing .env.local or other secret files under [Common Mistakes to Avoid](/docs/headless-cms/veda#common-mistakes-to-avoid) section).

The value of NEXT\_PUBLIC\_CONTENTSTACK\_ENVIRONMENT must match the name of the environment in Contentstack where entries are published for this app (the sample in .env.example is preview).

### How the configuration works

Next.js exposes environment variables that start with the NEXT\_PUBLIC\_ prefix to browser code and server code. This project needs that prefix because Live Preview and Visual Editor behaviors run in client components (e.g., [components/Pages/Preview.tsx](https://github.com/timbenniks/kickstart-veda/blob/main/components/Pages/Preview.tsx)).

[lib/contentstack.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/contentstack.ts) uses these variables to configure the Contentstack Delivery SDK stack client and Live Preview options.

By default, the app resolves regional delivery, preview, and application hosts using getContentstackEndpoints and getRegionForString from @timbenniks/contentstack-endpoints, driven by NEXT\_PUBLIC\_CONTENTSTACK\_REGION.

**Additional Resource:** [Get Contentstack Endpoints](/docs/developers/sdks/utils-sdk/javascript/get-contentstack-endpoints/) explains how regional Contentstack API hosts are resolved in @contentstack/utils.

### Live preview behavior

Set the following variable to enable preview-aware behavior in the app:

```
NEXT_PUBLIC_CONTENTSTACK_PREVIEW=true
```

When preview is enabled:

-   Route modules under app/\[\[...slug\]\]/, app/category/\[category\]/, and app/products/... render the client Preview component, which calls initLivePreview() and registers ContentstackLivePreview.onEntryChange(...) to refetch the active entry.
-   Fetch helpers call contentstack.Utils.addEditableTags(...) on entries so the Visual Editor can bind to fields.

### Optional configuration overrides

Override default region-resolved endpoints with these optional variables (supported in [lib/contentstack.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/contentstack.ts), they are not listed in .env.example):

-   NEXT\_PUBLIC\_CONTENTSTACK\_CONTENT\_DELIVERY
-   NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW\_HOST
-   NEXT\_PUBLIC\_CONTENTSTACK\_CONTENT\_APPLICATION

If these are not set, Kickstart Veda derives hosts from your region configuration in code.

## Enable Live Preview in the Stack

1.  In your stack, go to **Settings** and navigate to **Environments**. Select an existing environment or create a new one, and add a **Base URL** for each locale.
2.  Navigate to **Visual Experience** from the **Settings** menu and select the **Enable Live Preview** checkbox.
3.  Select the **Default Preview Environment** that matches your app's environment (e.g., preview).
4.  Save your changes.

**Note:** For a hosted app (e.g., on Launch), ensure the Base URL uses that deployment's HTTPS origin, not http://localhost:3000/.

**Additional Resource:** Refer to the [Set up Live Preview for your stack](/docs/headless-cms/set-up-live-preview-for-your-stack/) documentation for detailed steps.

## Verify Your Setup

### Start the development server

From the project root:

```
npm run dev
```

Open the local Next.js app at http://localhost:3000/. You can see the content from your stack (navigation from **header** and **product\_line** data, plus seeded pages and catalog routes as defined in your stack).

### Test Live Preview

Confirm the following before you test:

-   Live Preview is enabled in your stack
-   NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW=true in .env.local
-   Open and edit a supported entry in Contentstack (e.g., a page, category, product, or product\_line entry that maps to a route this app implements).
-   Open the corresponding Live Preview or Visual Editor view.
-   Confirm updates appear in the Next.js app.

**How this repository handles preview updates:**

-   When NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW is exactly true, server components in dynamic routes render [Preview](https://github.com/timbenniks/kickstart-veda/blob/main/components/Pages/Preview.tsx) instead of the static presentation components.
-   Preview is a client component. On mount, it calls initLivePreview() from [lib/contentstack.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/contentstack.ts) and registers ContentstackLivePreview.onEntryChange(getContent) so the Delivery SDK refetches the entry when editors save changes.
-   initLivePreview initializes Live Preview with ssr: false and mode: "builder" (a Live Preview SDK option used for Visual Editor workflows in this repository).

**Note:** npm run build runs a prebuild script (update-launch-config) that regenerates Launch-related configuration for CDN-friendly URLs. To verify production output locally, run npm run build, then npm run start.

## How Content Is Loaded

The app supports two rendering modes based on the NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW environment variable:

-   **Standard mode:** Optimized for published content and caching.
-   **Preview mode:** Optimized for Live Preview and Visual Editor updates.

Preview mode is enabled only when NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW=true (lowercase). The app checks this value using a strict string comparison (\=== "true"). Any other value, incorrect casing, or an undefined variable keeps preview mode disabled.

### Rendering behavior based on preview mode

**Standard mode**

Use this mode for the published site experience.

Entry routes, such as app/\[\[...slug\]\]/page.tsx, app/category/\[category\]/page.tsx, and modules under app/products/, use static rendering with Incremental Static Regeneration (ISR):

```
export const dynamic = "force-static";
export const revalidate = 1800;
```

In this mode:

-   Next.js statically generates pages for fast performance.
-   **Caching and regeneration**: After the revalidate window (default: 1800 seconds), pages are regenerated in the background, so updated content may appear on a subsequent visit.
    -   Change the revalidate value on a per-route basis to adjust cache duration.
    -   See Expecting instant production updates after publishing (ISR caching) for details.
-   Server components render only published content and use predictable caching.

This setup keeps production sites fast and the publishing process consistent.

This mode is best for production traffic where performance and caching are the priority.

**Preview mode**

Use this mode when editing content with Live Preview or the Visual Editor. The same routes render the client-side Preview component instead of the standard presentation layer.

In this mode:

-   The Preview wrapper listens for entry updates from Contentstack.
-   Updated content is fetched automatically as editors save changes.
-   Routes do not require additional Live Preview query logic.

This mode prioritizes responsive editing updates over static caching.

**Route coverage for preview**

Most entry-driven routes use the Preview wrapper during preview sessions. However, the /products listing page does not use the preview shell. Live Preview behavior is intended for detail-oriented routes such as pages, categories, product lines, and product detail pages. See [app/products/page.tsx](https://github.com/timbenniks/kickstart-veda/blob/main/app/products/page.tsx) section.

### Dynamic page route flow

The Contentstack Delivery SDK fetches content at runtime, utilizing React cache wrappers for per-request data caching. No content is statically output as JSON during the build process.

1.  A route module under app/ (e.g., app/\[\[...slug\]\]/page.tsx) calls a typed helper from [lib/pageUtils.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/pageUtils.ts) such as fetchPageData.
2.  fetchPageData delegates to fetchData, which resolves the path with buildPath, loads the **header** and primary entry via cached SDK calls (e.g., getHeaderCached, getPageCached), and returns { content, header, path, isPreview, previewType }.
3.  If isPreview is true (derived from NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW === "true" in [lib/contentstack.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/contentstack.ts)), the route renders Preview, which refetches using the same getPage, getCategory, getProduct, or getProductLine helpers on the client when entries change.
4.  If isPreview is false, the route renders the static presentation components (Page, Category, Product, ProductLine) with server-fetched props.

getPage, getCategory, getProduct, and getProductLine in lib/contentstack.ts query entries whose url field matches the path the app built. getHeader loads the header entry and related product\_line references for navigation.

## Understand the Codebase

The sections below map the runtime flow to the repository layout, build tooling, and entry points.

### Project structure

```
kickstart-veda/
├── app/
│ ├── [[...slug]]/
│ ├── category/[category]/
│ ├── products/
│ ├── layout.tsx
│ └── globals.css
├── components/
│ ├── Pages/
│ ├── ComponentsRenderer.tsx
│ └── [UI blocks and atoms]
├── lib/
│ ├── contentstack.ts
│ ├── pageUtils.ts
│ ├── types.ts
│ └── filterSearch.ts
├── public/
├── .env.example
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── updateLaunchConfig.mjs
└── README.md
```

### Configuration and build settings

-   **Next.js configuration:** next.config.mjs
-   **Tailwind CSS:**
    -   Tailwind 4.x is configured through @tailwindcss/postcss in postcss.config.mjs.
    -   Theme tokens (e.g., \--font-sans), base styles, and @import 'tailwindcss' are defined in app/globals.css using the @theme block, avoiding a separate tailwind.config.js file.
-   **Local scripts:** package.json
    -   npm run dev starts the Next.js dev server at http://localhost:3000/ by default
    -   npm run build runs prebuild (update-launch-config), then runs the next build.
        
        **Note:** A prebuild script executes [updateLaunchConfig.mjs](https://github.com/timbenniks/kickstart-veda/blob/main/updateLaunchConfig.mjs). It uses environment-defined stack credentials to fetch url fields from page, product, category, and product\_line entries. This data is written to launch.json to optimize first-visit performance via Contentstack Launch cache priming, rather than managing routing or Next.js environment configuration.
        
    -   npm run start serves the production build locally
    -   npm run lint runs ESLint
-   **Build output:** .next/ is the default Next.js output directory and is ignored by .gitignore

### Key source files

-   **SDK and Live Preview initialization:** [lib/contentstack.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/contentstack.ts)
    
    This performs the following functions:
    
    -   Creates the Contentstack stack client
    -   Configures live\_preview on the SDK, exports initLivePreview() (which calls ContentstackLivePreview.init(...) with ssr: false and options oriented toward the Visual Editor)
    -   Exports data accessors (getPage, getCategory, getProduct

## Common Mistakes to Avoid

### Critical mistakes

-   **Wrong region in** **.env.local**
    -   **Why it breaks:** The region drives how delivery and preview hosts are resolved in [lib/contentstack.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/contentstack.ts). The wrong region points requests to the wrong API host.
    -   **Fix:** Set NEXT\_PUBLIC\_CONTENTSTACK\_REGION to match your stack region. If you use the Contentstack CLI, run csdx config:get:region and align NEXT\_PUBLIC\_CONTENTSTACK\_REGION with that region code (see [Option 2: Create and seed a stack with CLI](/docs/headless-cms/veda#option-2-create-and-seed-a-stack-with-cli) section).
-   **Missing or invalid tokens**
    -   **Why it breaks:** NEXT\_PUBLIC\_CONTENTSTACK\_DELIVERY\_TOKEN and NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW\_TOKEN are required. The delivery token powers content fetch, and the preview token configures Live Preview on the stack client.
    -   **Fix:** Regenerate token(s), update .env.local, then restart npm run dev.
-   **Preview is disabled in either the app or the stack**
    -   **Why it breaks:** Live Preview must be enabled in the stack UI **and** NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW=true for the preview shell and editable tags used in this repository.
    -   **Fix:** Enable Live Preview in Contentstack settings for the same environment referenced by NEXT\_PUBLIC\_CONTENTSTACK\_ENVIRONMENT.
-   **Unseeded or incompatible content model**
    -   **Why it breaks:** The app queries fixed content type UIDs (page, header, category, product, product\_line) and expects published entries (including a **header** entry and product lines for navigation). Missing types or entries surface errors or empty navigation.
    -   **Fix:** Seed with contentstack/kickstart-veda-seed, or align your custom model with lib/contentstack.ts and [lib/types.ts](https://github.com/timbenniks/kickstart-veda/blob/main/lib/types.ts).
-   **Using non-****true** **values for the preview flag**
    -   **Exact behavior:** Preview mode in code checks process.env.NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW === "true" (string comparison).
    -   **Fix:** Set NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW=true exactly. Values such as TRUE, True, 1, or yes are treated as disabled.
-   **Removing Live Preview wiring from** **Preview**
    -   **Why it breaks:** Removing initLivePreview() or ContentstackLivePreview.onEntryChange from [components/Pages/Preview.tsx](https://github.com/timbenniks/kickstart-veda/blob/main/components/Pages/Preview.tsx) stops Live Preview updates for the routes that rely on it.
    -   **Fix:** Keep the Live Preview initialization and subscription intact when you customize preview behavior.

### Other mistakes to avoid

-   **Committing** **.env.local** **or other secret files**
    -   **Why it breaks:** Environment files hold your stack API key and tokens. Committing them exposes secrets in version control.
    -   **Fix:** Keep .env.local local only (it should stay gitignored). Maintain placeholders in .env.example only.
-   **Publishing content to a different environment than the one configured**
    -   **Why it breaks:** Queries run against NEXT\_PUBLIC\_CONTENTSTACK\_ENVIRONMENT. Unpublished entries in that environment return empty results.
    -   **Fix:** Publish to the configured environment, or update NEXT\_PUBLIC\_CONTENTSTACK\_ENVIRONMENT to match where your content lives.
-   **Wrong local URL for Live Preview**
    -   **Why it breaks:** Stack Live Preview URLs that do not match the Next dev server origin block iframe or preview connectivity.
    -   **Fix:** Use http://localhost:3000/ for local development unless you change the dev port in your Next.js config.
-   **Wrong dev port assumptions compared to other Kickstart projects**
    -   **Why it breaks:** Port 5173 is common for Vite-based Kickstarts, but this Next.js project uses 3000 by default.
    -   **Fix:** Use port 3000 when you configure the stack Live Preview for local runs unless you intentionally change it.
-   **Anticipating immediate production changes post-publishing (ISR caching)**
    -   **Why it breaks:** The production routes utilize revalidate = 1800 **(30 minutes)** by default. Upon publishing in Contentstack, the live site does not reflect updates instantly. The system serves cached pages until the specified window expires and background regeneration occurs.
    -   **Fix:**
        -   Decrease the revalidate duration for specific routes, configure on-demand revalidation (such as a Contentstack webhook targeting Next.js revalidatePath or revalidateTag)
        -   Alternatively, you can use preview mode (NEXT\_PUBLIC\_CONTENTSTACK\_PREVIEW=true) to see changes right away. This project does not include a pre-configured revalidation webhook. This is a production architectural choice you must implement manually.
-   **Using** **csdx cm:bootstrap** **instead of** **csdx cm:stacks:seed** **for Kickstart Veda**
    -   **Why it breaks:** cm:bootstrap does not support Kickstart Veda. It cannot create or import the contentstack/kickstart-veda-seed stack content.
    -   **Fix:** Use csdx cm:stacks:seed with \--repo "contentstack/kickstart-veda-seed" as in [Option 2: Create and seed a stack with CLI](/docs/headless-cms/veda#option-2-create-and-seed-a-stack-with-cli). After major Contentstack CLI upgrades, run csdx cm:stacks:seed --help to confirm flags for your CLI version.
-   **Renaming content types or fields without updating code**
    -   **Why it breaks:** Queries target specific UIDs (e.g., product\_line) and field names such as url.
    -   **Fix:** Update lib/contentstack.ts, lib/types.ts, and affected components together.

## Next Steps

-   Add automated tests (e.g., [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)) around data fetching helpers and critical routes.
-   Read other Contentstack Kickstart guides: [Angular](/docs/headless-cms/angular), [Astro](/docs/headless-cms/astro), [Next.js](/docs/headless-cms/next), [Nuxt](/docs/headless-cms/nuxt), and [Nuxt SSR](/docs/headless-cms/nuxt-ssr).

For support and questions, join the [Contentstack Community on Discord](https://community.contentstack.com/).
