---
title: "React"
description: "Kickstart your React and Vite single-page app with Contentstack. Integrate the Delivery SDK, Live Preview, and Visual Editor using the TypeScript starter."
url: /headless-cms/react
---

# React

## Kickstart React

## Introduction

Kickstart React is a minimal **React** starter that connects a single-page app to Contentstack. The repository demonstrates:

-   [**Contentstack Delivery SDK**](/docs/developers/sdks/) initialization for content retrieval
-   [**Live Preview**](/docs/headless-cms/about-live-preview/) with client-side rendering (CSR)-aware entry-change handling
-   [**Visual Editor**](/docs/headless-cms/about-visual-editor/) integration for on-page editing in preview mode

The app uses React 19, Vite, TypeScript, and Tailwind CSS (via @tailwindcss/postcss).

**Note:**

-   Always refer to the [kickstart-react](https://github.com/contentstack/kickstart-react) GitHub repository for the latest implementation details, including dependencies, environment variable names, and scripts.
-   For stack-specific settings such as tokens, regions, and Live Preview entry URLs, use the values from your own Contentstack stack and deployment environment. This documentation does not provide personalized configuration values.

## Prerequisites

-   [Node.js 20 or later](https://nodejs.org/en/download/) is installed on your machine.
-   Basic familiarity with React, JSX, and TypeScript
-   A [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin) access if you need to create or seed [stacks](/docs/headless-cms/about-stack/)
-   A [GitHub account](https://github.com/login/) if you use Launch-based deployment workflows

This guide uses Vite 7.x, which requires Node.js 20.19.0 or later, or 22.12.0 or later. Check the [vite package](https://www.npmjs.com/package/vite) on npm to confirm the supported Node version for your pinned release.

**Note:** Kickstart projects commonly reuse a shared content model. You can reuse one seeded stack across multiple kickstart apps, or create separate stacks for isolation.

## What You'll Learn

By the end of this guide, you can:

-   Set up a Contentstack stack with sample content by importing a Starter or seeding with the Contentstack CLI.
-   Configure a local React app with Contentstack [delivery](/docs/headless-cms/about-delivery-tokens/) and [preview tokens](/docs/headless-cms/about-delivery-tokens/#understanding-preview-tokens) using VITE\_CONTENTSTACK\_\* environment variables.
-   Enable and verify Live Preview behavior with the SDK’s entry-change callback and http://localhost:5173.
-   Understand how this project fetches and renders page content from the page content type.
-   Explore core React and Vite files used for SDK setup, preview configuration, and page rendering.

Next, choose how to set up or connect your stack. If your stack already matches the skip conditions in Choose How to Set Up Your Stack, jump ahead to [Clone the Project](/docs/headless-cms/react#clone-the-project-and-install-dependencies) section.

## Choose How to Set Up Your Stack

Select a path that matches your workflow.

You can skip the stack setup if you already have the following:

-   A page content type
-   A published home page entry with url = / for the environment you set in .env
-   Preview tokens and stack settings for Live Preview

If your stack differs, update your content model or app code before you continue.

### Option 1: Import the Kickstart React starter from the Marketplace

This method suits you if you prefer a UI-based setup without any CLI commands. It is ideal for getting a seeded stack quickly and optionally deploying the app to a hosted environment through Launch.

1.  Sign in to Contentstack and navigate to [**Marketplace**](/docs/marketplace/about-marketplace).
2.  Click **Starters** from the left panel. Hover over the **Kickstart React** card and click the **Import** button. Alternatively, click the card to open its detail page and click **Import**.
3.  Enter a name for your new stack in the **Stack Name** field and click **Import Starter**. Contentstack imports all content types, assets, and published entries in the background.
4.  After the import completes, choose how to proceed:
    -   **Deploy in Launch**:
        1.  Click **Deploy in Launch**. You can see the **Create Git Repository** form with your framework settings and environment variables pre-filled.
        2.  Select your **Git Scope**, confirm the repository name, and review the pre-populated **Environment Variables**. Make sure they match the NEXT\_PUBLIC\_CONTENTSTACK\_ names from [.env.example](https://github.com/contentstack/kickstart-veda/blob/main/.env.example).
        3.  Click **\+ Clone and Deploy** to create the repository and start the deployment.
    -   **Local development only**: If you only need a seeded stack to run the app locally, skip the deployment step and continue to Clone the Project and Install Dependencies.

**Typical outcomes:**

-   A new Contentstack stack seeded with content types (page, header, category, product, product\_line), sample entries, and assets
-   A hosted application on Contentstack Launch (if you complete the Launch deployment)
-   A GitHub repository connected to your Launch project (if you connect one during the Launch setup)

The Marketplace import sets up content types, entries, and assets. It does not configure your local development environment. You still need to clone the repository and set up .env.local to run the app on your machine. Continue with the sections below.

**Configuration Note for VITE and REACT\_APP Variables**

The official Launch Quick Start Guide (React) uses REACT\_APP\_CONTENTSTACK\_\* variables. This repository uses VITE\_CONTENTSTACK\_\* in .env.

-   Replace REACT\_APP\_ with VITE\_ when following the guide
-   Refer to [.env.example](https://github.com/contentstack/kickstart-react/blob/main/.env.example) for the expected variables
-   Variable names and responsibilities may differ from the guide
-   Always validate configuration against:
    -   src/lib/contentstack.ts
    -   Your Contentstack stack settings

### Option 2: Create and seed a stack with CLI

This repo expects content from the shared seed repository contentstack/kickstart-stack-seed. Seeding that repository with the CLI produces the same outcome as a [Starter import](/docs/marketplace/installing-a-starter/) for local and repeatable setups, such as onboarding or CI.

This approach works well for terminal-first workflows or when you do not use the marketplace onboarding path.

**Note:** If you already created a stack from this seed, or from another compatible Kickstart project, you can reuse that stack and skip creating another one.

1.  Install the Contentstack CLI globally:
    
    ```
    npm install -g @contentstack/cli
    ```
    
2.  If you are configuring the CLI for the first time, set your region to match where your stack lives:
    -   Refer to the [Login Endpoints](/docs/administration/login-endpoints) documentation for login URLs and their region codes, or check the browser URL while logged into Contentstack.
    -   Replace <YOUR\_REGION\_CODE> with the region code you identified above:
        
        ```
        csdx config:set:region <YOUR_REGION_CODE>
        ```
        
    -   Run csdx config:get:region to confirm the active region and API hosts. Use the same region code for VITE\_CONTENTSTACK\_REGION in .env.
3.  Sign in, and provide your Contentstack account details when prompted:
    
    ```
    csdx auth:login
    ```
    
4.  To get your Organization UID:
    -   Open Contentstack CMS and select **Administration** from the “App Switcher”.
    -   Copy the **Organization UID** to use with the seed command.
5.  Create a stack and seed it from the repository. Replace <ORG\_ID> with your organization UID:
    
    ```
    csdx cm:stacks:seed --repo "contentstack/kickstart-stack-seed" --org "<ORG_ID>" -n "Kickstart Stack"
    ```
    

**Additional Resource:** Watch the [Seed a Stack in the CLI](https://youtu.be/2dQheUo7uH4) video for a full walkthrough of seeding a stack using the Contentstack CLI.

## Clone the Project and Install Dependencies

Clone the repository you use for this app (your Launch-connected repo or the official starter):

```
git clone https://github.com/contentstack/kickstart-react.git
cd kickstart-react
npm install
```

Gather delivery and preview tokens next so you can fill in .env.

## Get Delivery and Preview Tokens

Use the stack you connect to this app. Get the required tokens before you edit the .env file.

**Additional Resource:** Refer to the [Create a New Stack](/docs/headless-cms/create-a-new-stack/) documentation to create a new stack if you do not have one.

1.  Log in to Contentstack and open your stack.
2.  Navigate to **Settings** > **Tokens**.
3.  Create a Delivery Token and ensure Live Preview is enabled for your workflow.
4.  Open the **Environment** tab, and confirm your target publishing environment (e.g., preview).

**Additional Resource:** Refer to the [Create a Delivery Token](/docs/headless-cms/create-a-delivery-token/) documentation for step-by-step instructions to create delivery tokens and configure them for your stack.

When configuring Live Preview entry URLs in your Contentstack stack, use a URL that matches the environment where the app is running.

-   **Local development**
    -   Use the default Vite development server URL: http://localhost:5173/
    -   Do not use port 3000. Vite uses port 5173 by default.
-   **Hosted deployments**
    -   After deploying the app through Launch or any other hosting provider, replace the local URL with your app’s actual HTTPS origin: https://<your-app-host>/
    -   If the app is hosted under a sub-path, include the full path: https://<your-app-host>/myapp/

**Note:** Hosted URLs are deployment-specific. Update the Live Preview entry URL after deployment to match the final app origin.

## Configure .env for Kickstart React

Connect the app to Contentstack:

1.  Copy .env.example to .env in the repository root.
2.  Set the required values:
    
    ```
    VITE_CONTENTSTACK_API_KEY=<STACK_API_KEY>
    VITE_CONTENTSTACK_DELIVERY_TOKEN=<DELIVERY_TOKEN>
    VITE_CONTENTSTACK_PREVIEW_TOKEN=<PREVIEW_TOKEN>
    VITE_CONTENTSTACK_ENVIRONMENT=preview
    VITE_CONTENTSTACK_REGION=EU
    VITE_CONTENTSTACK_PREVIEW=true
    ```
    

Keep .env local only. It contains secrets and must not be committed (see Committing .env under the [Common Mistakes to Avoid](/docs/headless-cms/react#common-mistakes-to-avoid) section).

### How the configuration works

The app reads environment variables through import.meta.env. In Vite applications, only variables prefixed with VITE\_ are exposed to React code.

The src/lib/contentstack.ts file uses these variables to configure the Contentstack Delivery SDK and Live Preview behavior.

By default, the app resolves regional delivery, preview, and application hosts using getContentstackEndpoints and getRegionForString from @timbenniks/contentstack-endpoints. These values are driven by VITE\_CONTENTSTACK\_REGION.

You can override the default hosts by setting the optional environment variables described in the following section.

**Additional Resource:** Refer to the [Get Contentstack Endpoints](/docs/developers/sdks/utils-sdk/javascript/get-contentstack-endpoints/) documentation to learn how regional Contentstack API hosts are resolved and how that applies to your stack.

**Live Preview behavior**

Set the following variable to enable preview-aware behavior:

```
VITE_CONTENTSTACK_PREVIEW=true
```

When Live Preview is enabled:

-   src/App.tsx registers the Live Preview callback.
-   The callback calls getPage("/").
-   getPage("/") calls contentstack.Utils.addEditableTags(...).
-   Editable tags allow Live Preview to map page content back to editable fields in Contentstack.

### Optional configuration overrides

Override default region-resolved endpoints with these optional variables:

-   VITE\_CONTENTSTACK\_CONTENT\_DELIVERY
-   VITE\_CONTENTSTACK\_PREVIEW\_HOST
-   VITE\_CONTENTSTACK\_CONTENT\_APPLICATION

If these are not set, the starter derives hosts from your region configuration in code.

With environment variables saved, enable Live Preview in the stack so settings match this app.

## Enable Live Preview in the Stack

1.  In your stack, go to **Settings** and navigate to **Environments**. Select an existing environment or create a new one, and add a **Base URL** for each locale.
2.  Navigate to **Visual Experience** from the **Settings** menu and select the **Enable Live Preview** checkbox.
3.  Select the **Default Preview Environment** that matches VITE\_CONTENTSTACK\_ENVIRONMENT (e.g., preview).
4.  Click **Save**.

**Note:** For a **hosted** app (e.g., on Launch), ensure the Base URL uses that deployment's HTTPS origin, not http://localhost:5173/.

**Additional Resource:** Refer to the [Set Up Live Preview for Your Stack](/docs/headless-cms/set-up-live-preview-for-your-stack/) documentation to enable Live Preview and complete the related stack settings in the Contentstack UI.

Run the checks to confirm local rendering and preview updates.

## Verify Your Setup

### Start the development server

From the project root:

```
npm run dev
```

Open the local React app at http://localhost:5173. You should see the homepage content rendered from your stack, including title, description, image, and modular blocks.

### Test Live Preview

Confirm the following before you test:

-   Live Preview is enabled in your stack
-   VITE\_CONTENTSTACK\_PREVIEW=true in .env

**Steps:**

1.  Open and edit a page entry in Contentstack.
2.  Open the corresponding Live Preview or Visual Editor view.
3.  Confirm updates are reflected in the React app.

**How this repo handles preview updates:**

-   src/App.tsx calls initLivePreview() inside a useEffect on the first mount.
-   It registers ContentstackLivePreview.onEntryChange(getContent), which re-runs getContent on initial load and whenever an editor changes the entry.
-   getContent calls getPage("/") from src/lib/contentstack.ts, which queries the page content type for an entry whose url field matches the route.

## How Content Is Loaded

Content is retrieved dynamically in the browser using the Contentstack Delivery SDK, rather than being embedded during the build process.

When the application mounts the home route (/), the content is fetched as follows:

1.  src/main.tsx mounts the App component into #root with createRoot and StrictMode.
2.  src/App.tsx runs a useEffect hook on first mount that:
    -   Calls initLivePreview() to configure ContentstackLivePreview on the client.
    -   Registers ContentstackLivePreview.onEntryChange(getContent) so the SDK re-invokes getContent for the initial render and for every preview-time entry change.
3.  getContent calls getPage("/") and stores the result in component state with setPage, which triggers a re-render with fresh data.
4.  getPage in src/lib/contentstack.ts queries entries of the page content type whose url field matches the requested path. When preview is enabled, it calls contentstack.Utils.addEditableTags(entry, 'page', true) so the rendered DOM exposes editable tags the Visual Editor can target.

This React app uses a **client-side subscription model** for Live Preview. It does not use SSR, route-level data fetching, or livePreviewQuery, and it does not rely on URL query parameters during navigation or load functions.

The SDK handles the complete preview updates:

-   initLivePreview() initializes Live Preview in the browser with ssr: false
-   ContentstackLivePreview.onEntryChange(getContent) subscribes to editor changes
-   When content is saved in the Visual Editor, the SDK triggers getContent()
-   The UI updates in place without page reloads or URL changes

This makes updates event-driven rather than navigation-driven, with all re-rendering controlled through SDK callbacks.

Both initLivePreview() and onEntryChange(getContent) must be configured in src/App.tsx for Live Preview to function.

The React kickstart initializes Live Preview with ssr: false and mode: "builder", so no server load functions or route-level data hooks are required.

## Understand the Codebase

The sections below map the runtime flow to the repository layout, build tooling, and entry points.

### Project structure

```
kickstart-react/
├── index.html
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   ├── types.ts
│   └── lib/
│       ├── contentstack.ts
│       └── types.ts
├── .env.example
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

### Configuration and build settings

-   **Vite configuration:** vite.config.ts
    -   Uses @vitejs/plugin-react for React fast refresh and JSX support
-   **Tailwind CSS:** Configured through @tailwindcss/postcss in postcss.config.js
-   **Local scripts:** package.json
    -   npm run dev starts the Vite dev server at http://localhost:5173
    -   npm run build produces a production bundle in dist/
    -   npm run preview serves the production build locally for verification
    -   npm run lint runs ESLint over the project
-   **Build output:**
    -   dist/ is the default Vite output directory and is ignored by .gitignore

### Key source files

-   **SDK and Live Preview initialization:** src/lib/contentstack.ts
    -   Creates a Contentstack stack client
    -   Configures live\_preview on the SDK
    -   Exports initLivePreview(), which calls ContentstackLivePreview.init(...) with ssr: false and options oriented toward the Visual Editor
-   **Page data fetching:** getPage in src/lib/contentstack.ts
    -   Queries the content type page
    -   Filters by URL
    -   Adds editable tags in preview mode
-   **App entry:** src/main.tsx
    -   Calls createRoot(document.getElementById('root')!) and renders <App /> inside <StrictMode>
-   **Homepage component:** src/App.tsx
    -   Loads data for / via getPage("/") inside a useEffect driven callback
    -   Initializes Live Preview and subscribes to entry changes on the client after the component mounts
    -   Renders fields and modular blocks from the loaded page
    -   Applies the Visual Editor empty-block class (VB\_EmptyBlockParentClass) when blocks are missing
-   **Type definitions:** src/lib/types.ts
    -   Defines Page, Block, Blocks, File, PublishDetails, and related interfaces used by the app

## Common Mistakes to Avoid

### Critical mistakes

-   **Wrong region in** **.env**
    -   **Why it breaks:** The region drives how delivery and preview hosts are resolved in src/lib/contentstack.ts. Wrong region points requests to the wrong API host.
    -   **Fix:**
        -   VITE\_CONTENTSTACK\_REGION must match your stack region.
        -   If you use the Contentstack CLI, run csdx config:get:region and align VITE\_CONTENTSTACK\_REGION with that region code (see [Option 2: Create and seed a stack with CLI](/docs/headless-cms/react#option-2-create-and-seed-a-stack-with-cli) section).
        -   If you do not use the CLI for this stack, confirm the region in your stack.
-   **Missing or invalid tokens**
    -   **Why it breaks:** VITE\_CONTENTSTACK\_DELIVERY\_TOKEN and VITE\_CONTENTSTACK\_PREVIEW\_TOKEN are required tokens. The delivery token powers content fetch, and the preview token powers Live Preview configuration on the stack client.
    -   **Fix:** Regenerate token(s), update .env, then restart npm run dev.
-   **Preview is disabled in either the app or the stack**
    -   **Why it breaks:** VITE\_CONTENTSTACK\_PREVIEW=true (exact lowercase string true). Both toggles are needed for editable tags and Live Preview URL behavior.
    -   **Fix:** Enable Live Preview in Contentstack settings for the same environment.
-   **Unseeded or incompatible content model**
    -   **Why it breaks:** getPage queries the content type page where url equals / for the home route. At least one published page entry with url: / in the configured environment.
    -   **Fix:** Seed with contentstack/kickstart-stack-seed, or create a compatible page type and home entry manually.
-   **Using non-****true** **values for the preview flag**
    -   **Exact behavior:** Preview is enabled only when import.meta.env.VITE\_CONTENTSTACK\_PREVIEW === 'true' in src/lib/contentstack.ts. Environment values are strings, and the code compares to the literal 'true' rather than coercing to a boolean.
    -   **Fix:**
        -   Set VITE\_CONTENTSTACK\_PREVIEW=true exactly.
        -   TRUE, True, 1, or yes are treated as disabled.
-   **Forgetting to initialize Live Preview or removing the entry-change subscription**
    -   **Why it breaks:** Without initLivePreview() and ContentstackLivePreview.onEntryChange(getContent) in src/App.tsx, the SPA never reacts to editor updates, and the Visual Editor cannot bind to the page.
    -   **Fix:** Keep both calls inside the mount-time useEffect and ensure the dependency array stays empty so they run once per mount.

### Other mistakes to avoid

-   **Committing** **.env**
    -   **Why it breaks:** .env holds your stack API key and tokens, committing it puts secrets in version control where others can read or reuse them.
    -   **Fix:** Keep .env local only (it should stay gitignored). When variable names change, update .env.example with placeholders only. Never commit real values.
-   **Publishing content to a different environment than the one configured**
    -   **Why it breaks:** Queries run against VITE\_CONTENTSTACK\_ENVIRONMENT. Unpublished entries in that environment return empty results.
    -   **Fix:** Publish to the configured environment or update VITE\_CONTENTSTACK\_ENVIRONMENT to the correct one.
-   **Treating VITE\_\* variables as hidden secrets in production**
    -   **Why it breaks:** Anything in VITE\_\* is exposed in the browser. Never use them for secrets such as management tokens. Use only delivery/preview tokens with minimal permissions.
    -   **Fix:** Keep sensitive tokens or logic on a backend or SSR app, never in VITE\_\*.
-   **Wrong local URL for Live Preview or token setup**
    -   **Why it breaks:** Stack or token environment URLs that still point at http://localhost:3000 do not match the Vite dev server.
    -   **Fix:** Use http://localhost:5173/ for local React development unless you change the dev port.
-   **Rendering rich text or block copy without sanitization in production**
    -   **Why it breaks:** src/App.tsx uses dangerouslySetInnerHTML to render rich\_text and copy HTML. Untrusted or unsanitized HTML can introduce XSS in production forks.
    -   **Fix:** Sanitize HTML with [DOMPurify](https://github.com/cure53/DOMPurify/) (already a dependency of the repo) before passing it to dangerouslySetInnerHTML. Import it and wrap the HTML string:
        
        ```
        import DOMPurify from "dompurify";
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page.rich_text) }}
        ```
        
        Apply the same pattern to block.copy in modular blocks.
        
-   **Renaming content contract without updating code**
    -   **Why it breaks:** The app targets contentType("page") and .where("url", ...). Renaming types or fields without updating code breaks queries and the homepage render.
    -   **Fix:** Update src/lib/contentstack.ts, src/lib/types.ts, and rendering in src/App.tsx so they match your content model.

## Next Steps

-   Add a router (e.g, [React Router](https://reactrouter.com/)) and dedicated components for paths beyond /.
-   Extend content types and update src/lib/types.ts to preserve type safety.
-   Harden production HTML rendering: sanitize rich\_text and block copy before dangerouslySetInnerHTML (see Rendering rich text or block copy without sanitization in production under the [Common Mistakes to Avoid](/docs/headless-cms/react#common-mistakes-to-avoid) section).
-   Define a test strategy (e.g, [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)) for data fetching and rendering behavior.

For support and questions, join the [Contentstack Community on Discord](https://community.contentstack.com/).
