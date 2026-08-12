---
title: "SvelteKit"
description: "Build a SvelteKit SSR app with Contentstack using the Delivery SDK, Live Preview, and Visual Editor with the official kickstart starter."
url: /headless-cms/sveltekit
---

# SvelteKit

## Kickstart SvelteKit

## Introduction

Kickstart SvelteKit is a minimal starter for connecting a SvelteKit server-rendered app to Contentstack. The repository demonstrates:

-   [**Contentstack Delivery SDK**](/docs/developers/sdks/) initialization for content retrieval
-   [**Live Preview**](/docs/headless-cms/about-live-preview/) with server-side rendering (SSR)-aware query handling
-   [**Visual Editor**](/docs/headless-cms/about-visual-editor/) integration for on-page editing in preview mode

**Note:** The app uses SvelteKit 2, Svelte 5, Vite, Tailwind CSS, and @sveltejs/adapter-node for SSR.

## Prerequisites

Before you begin, confirm you have the following:

-   [Node.js v20.19.0 or later, or v22.12.0 or later](https://nodejs.org/en/download/) installed on your machine. Earlier versions may cause ERR\_REQUIRE\_ESM errors with ESM-only dependencies.
-   Basic familiarity with SvelteKit, Svelte, and TypeScript
-   A [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin) access if you need to create or seed [stacks](/docs/headless-cms/about-stack/)
-   A [GitHub account](https://github.com/login/) if you use Launch-based deployment workflows

**Note:** Kickstart projects commonly reuse a shared content model. You can reuse one seeded stack across multiple kickstart apps, or create separate stacks for isolation.

## What You'll Learn

By the end of this guide, you can:

-   Set up a Contentstack stack with sample content by importing a Starter or seeding with the Contentstack CLI.
-   Configure a local SvelteKit app with Contentstack [delivery](/docs/headless-cms/about-delivery-tokens/) and [preview tokens](/docs/headless-cms/about-delivery-tokens/#understanding-preview-tokens) using **VITE\_CONTENTSTACK\_\*** environment variables.
-   Enable and verify Live Preview behavior with URL query parameters and http://localhost:5173.
-   Understand how this project fetches and renders page content from the page content type.
-   Explore core SvelteKit files used for SDK setup, preview configuration, and page rendering.

In the following section, select one stack setup path that matches your workflow, or use it if you already have a stack when you only need to connect this app to an existing stack.

## Choose How to Set Up Your Stack

Use one of these setup paths depending on your workflow.

You can skip the stack setup if you have:

-   a page content type
-   a published home page entry with url = / (in your .env environment)
-   preview tokens and stack settings for Live Preview

If your stack is different, update your content model or app code.

### Option 1: Import the Kickstart SvelteKit starter from the Marketplace

This method suits you if you prefer a UI-based setup without any CLI commands. It is ideal for getting a seeded stack quickly and optionally deploying the app to a hosted environment through Launch.

1.  Sign in to Contentstack and navigate to [**Marketplace**](/docs/marketplace/about-marketplace).
2.  Click **Starters** from the left panel. Hover over the **Kickstart SvelteKit** card and click the **Import** button. Alternatively, click the card to open its detail page and click **Import**.
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

### Option 2: Create and seed a stack with CLI

This repo expects content from the shared seed repository contentstack/kickstart-stack-seed. Seeding that repository with the CLI produces the same outcome as importing a starter for local and repeatable setups, such as onboarding or CI.

This approach works well for terminal-first workflows or when you do not use the marketplace onboarding path.

**Note:** If you already created a stack from this seed, or from another compatible Kickstart project, you can reuse that stack and skip creating another one.

1.  Install the Contentstack CLI globally:
    
    ```
    npm install -g @contentstack/cli
    ```
    
2.  If you are configuring the CLI for the first time, set your region to match where your stack lives:
    1.  Refer to the [Login Endpoints](/docs/administration/login-endpoints) documentation for login URLs and their region codes, or check the browser URL while logged into Contentstack.
    2.  Replace <YOUR\_REGION\_CODE> with the region code you identified above:
        
        ```
        csdx config:set:region <YOUR_REGION_CODE>
        ```
        
    3.  Run csdx config:get:region to confirm the active region and API hosts. Use the same region code for VITE\_CONTENTSTACK\_REGION in .env.
3.  Sign in, and provide your Contentstack account details when prompted:  
    csdx auth:login
4.  To get your Organization UID:
    1.  Go to Contentstack and select **Administration** from the “App Switcher”.
    2.  Copy the **Organization UID** to use with the seed command.
5.  Create a stack and seed it from the repository. Replace <ORG\_ID> with your organization UID:
    
    ```
    csdx cm:stacks:seed --repo "contentstack/kickstart-stack-seed" --org "<ORG_ID>" -n "Kickstart Stack"
    ```
    

**Additional resource:**

-   You can run an interactive bootstrap flow with csdx cm:bootstrap.
-   Watch the [Seed a stack in the CLI](https://youtu.be/2dQheUo7uH4) video for a walkthrough of the stack seeding process.

Once your stack contains compatible sample content, clone the app and install dependencies.

## Clone the Project and Install Dependencies

If you already have a Launch-connected repository, clone that one. Otherwise, clone the official repository using the following commands:

```
git clone https://github.com/contentstack/kickstart-sveltekit.git
cd kickstart-sveltekit
npm install
```

**Note:** npm install does not run svelte-kit sync. The svelte-kit sync command runs during npm run build and npm run check. If your IDE reports missing SvelteKit-generated types after a fresh clone, run either of the commands once.

With the project on your machine, gather the tokens you need for delivery and preview access.

## Get Delivery and Preview Tokens

Gather these before updating .env. Use the stack you are connecting to this app.

**Additional Resource:** Refer to the [Create a new stack](/docs/headless-cms/create-a-new-stack/) document only if you still need a stack.

1.  Log in to Contentstack and open your stack.
2.  Navigate to **Settings** > **Tokens**.
3.  Create a Delivery Token and ensure Live Preview is enabled for your workflow.
4.  Go to the **Environment** tab, confirm your target publishing environment (for example, preview).

**Additional Resource:** Refer to [Create a Delivery Token](/docs/headless-cms/create-a-delivery-token/) documentation for detailed steps.

If you configure Live Preview entry URLs in stack settings, ensure they match your app origin. For local development with the default Vite dev server, use http://localhost:5173/.

Copy .env.example to .env and set values as described next.

## Configure .env for Kickstart SvelteKit

After you have a stack and a local clone, follow the instructions to connect the app to Contentstack.

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
    

**Note:** Variables prefixed with VITE\_ are exposed to browser code. The API key and delivery token in this kickstart are therefore visible in the client bundle after you build or deploy. Move your secrets to $env/static/private, import them only from server-only modules (for example, +page.server.ts), and pass only safe data to the client.

### How the configuration works

The app reads these variables through import.meta.env (Vite exposes keys that start with VITE\_ to your SvelteKit code). They are consumed in src/lib/index.ts to configure the Delivery SDK stack and Live Preview. SvelteKit also exposes VITE\_\* variables through $env/static/public if you prefer Kit’s env modules; behavior is the same for static public vars at build time.

-   VITE\_CONTENTSTACK\_PREVIEW=true (exact lowercase string true) enables the app tier of Live Preview: SDK live\_preview, client initLivePreview, and editable tags.
-   The region and default hosts are resolved within src/lib/index.ts.
-   For explicit API host configuration, use @contentstack/utils with getContentstackEndpoint.

**Additional Resource:** Refer to the [Get Contentstack Endpoints](/docs/developers/sdks/utils-sdk/javascript/get-contentstack-endpoints/) guide for supported regions and host configuration details.

-   The load function in src/routes/+page.ts forwards URL search parameters to getPage. When the live\_preview query parameter is present, getPage calls stack.livePreviewQuery(...) before querying entries. Full Live Preview (Visual Editor, draft sync, editable tags) still requires VITE\_CONTENTSTACK\_PREVIEW=true and Live Preview enabled in the stack.

### Optional configuration overrides

You can override default region-resolved endpoints with these optional variables:

-   VITE\_CONTENTSTACK\_CONTENT\_DELIVERY
-   VITE\_CONTENTSTACK\_PREVIEW\_HOST
-   VITE\_CONTENTSTACK\_CONTENT\_APPLICATION

If these are not set, the starter derives hosts from your region configuration in code.

**Warning:** Do not commit .env. The file is ignored by .gitignore.

With environment variables configured, enable Live Preview at the stack level to match your app setup.

## Enable Live Preview in the Stack

1.  In your stack, go to **Settings** and navigate to **Environments**. Select an existing environment or create a new one, and add a **Base URL** for each locale.
2.  Navigate to **Visual Experience** from the **Settings** menu and select the **Enable Live Preview** checkbox.
3.  Select the **Default Preview Environment** that matches VITE\_CONTENTSTACK\_ENVIRONMENT (for example, preview).
4.  Click **Save**.

**Additional Resource:** For detailed setup instructions, see [Set Up Live Preview for Your Stack](/docs/headless-cms/set-up-live-preview-for-your-stack/).

Run the checks in the next section to confirm local rendering and preview updates.

## Verify Your Setup

### Start the development server

From the project root:

```
npm run dev
```

Open the local SvelteKit app at http://localhost:5173. You should see the homepage content rendered from your stack, including title, description, image, and modular blocks.

### Test Live Preview

Before you test, ensure you have the following

-   Live Preview is enabled in your stack
-   VITE\_CONTENTSTACK\_PREVIEW=true in .env

**Steps:**

1.  Open and edit a page entry in Contentstack.
2.  Open the corresponding Live Preview or Visual Editor view.
3.  Confirm updates are reflected in the SvelteKit app.

**How this repo handles preview updates:**

-   src/routes/+page.ts reads URL search parameters (live\_preview, content\_type\_uid, entry\_uid) and passes them into getPage.
-   When the live\_preview query parameter is present, getPage applies stack.livePreviewQuery(...) before querying entries (URL tier).
-   With VITE\_CONTENTSTACK\_PREVIEW=true and Live Preview enabled in the stack, the SDK's live\_preview config, initLivePreview(), and editable tags are activated (app tier).
-   The app fetches the page entry where the URL field matches the route (the home route uses /).

## How Content Is Loaded

Content is retrieved dynamically at request time using the Contentstack Delivery SDK, rather than being embedded during the build process.

When the application loads the home route (/), the content is fetched as follows:

1.  src/routes/+page.ts exports a load function that runs on the server and client.
2.  The load function:
    -   Reads Live Preview-related query parameters from the request URL (live\_preview, content\_type\_uid, entry\_uid).
    -   Calls getPage("/", { ... }) from src/lib/index.ts with those values typed as LivePreviewQuery.
    -   After the page data resolves, calls initLivePreview() only in the browser so client-side Live Preview can initialize. Import browser from $app/environment and guard the call:
        
        ```
        import { browser } from '$app/environment';
        if (browser) {
          initLivePreview();
        }
        ```
        
3.  getPage in src/lib/index.ts uses the shared stack client. When the live\_preview query parameter is present, it applies stack.livePreviewQuery(...) before querying entries of the page content type whose url field matches the requested path.

### Preview Behavior Tiers

**Preview behavior uses two tiers:**

-   **URL tier:** Query parameters are forwarded; when live\_preview is present, stack.livePreviewQuery(...) runs before the entry query.
-   **App tier:**
    -   VITE\_CONTENTSTACK\_PREVIEW=true (exact string) enables SDK live\_preview, initLivePreview(), and editable tags.
    -   Without it, preview query parameters alone do not activate the Visual Editor or draft sync. You get ordinary delivery fetches for the configured environment.

### Content Fetching Scenarios and Error Handling

When the Delivery API returns no matching page entry, getPage returns undefined, the page component renders with no content, and SvelteKit still responds with **200**. To return a real 404, check for a missing entry in load (for example, in src/routes/+page.ts) and call error(404, 'Page not found') from @sveltejs/kit.

This setup enables content fetching in multiple scenarios:

-   **SSR**: The server fetches content to generate the initial HTML response.
-   **Live Preview**: When VITE\_CONTENTSTACK\_PREVIEW=true, Live Preview is enabled in the stack, and Contentstack adds preview query parameters to the URL. The app forwards them to the SDK, and the CMS may refresh the browser when content changes.

**Result:**

-   Always serves the content up-to-date
-   Supports real-time preview workflows
-   Eliminates the need for rebuilds when content changes

Use the following section to map those flows to files in the repository.

## Understand the Codebase

### Project structure

```
kickstart-sveltekit/
├── src/
│ ├── app.css
│ ├── app.d.ts
│ ├── app.html
│ ├── lib/
│ │ ├── index.ts
│ │ └── types.ts
│ └── routes/
│ ├── +layout.svelte
│ ├── +page.svelte
│ └── +page.ts
├── static/
├── .env.example
├── package.json
├── svelte.config.js
├── tsconfig.json
├── vite.config.ts
├── README.md
└── .github/
 └── workflows/
```

### Configuration and build settings

-   **SvelteKit configuration:** svelte.config.js
    -   Uses @sveltejs/adapter-node for a Node server-friendly build
-   **Local scripts:** package.json
    -   npm run dev starts the Vite dev server
    -   npm run build runs svelte-kit sync and produces a production build
    -   npm run preview serves the production build locally
    -   npm run check runs type checking (also runs svelte-kit sync)
-   **Build output directories:**
    -   .svelte-kit
    -   build
    -   .output (if present) is ignored in .gitignore

### Key source files

-   **SDK and Live Preview initialization:** src/lib/index.ts
    -   Creates a Contentstack stack client
    -   Configures live\_preview in the SDK
    -   Exports initLivePreview(), which calls ContentstackLivePreview.init(...) with ssr: true and options oriented toward the Visual Editor
-   **Page data fetching:** getPage in src/lib/index.ts
    -   Queries the content type page
    -   Filters by URL
    -   Adds editable tags in preview mode
-   **Route loading:** src/routes/+page.ts
    -   Loads data for / via getPage("/", ...)
    -   Initializes Live Preview on the client after data is available (if (browser) { initLivePreview(); } with browser from $app/environment)
-   **Homepage rendering:** src/routes/+page.svelte
    -   Renders fields and modular blocks from the loaded page
    -   Applies the Visual Editor empty-block class when blocks are missing
-   **Type definitions:** src/lib/types.ts
    -   Defines Page, block shapes, and related interfaces used by the app

After you understand the implementation, use the next section to avoid common setup and preview pitfalls.

## Common Mistakes to Avoid

### Critical mistakes

-   **Wrong region in** **.env**
    -   **Why it breaks:** The region drives how delivery and preview hosts are resolved in src/lib/index.ts. Wrong region points requests to the wrong API host.
    -   **Fix:**
        -   VITE\_CONTENTSTACK\_REGION must match your stack region.
        -   If you use the Contentstack CLI, run csdx config:get:region and align VITE\_CONTENTSTACK\_REGION with that region code (refer to [Option 2: Create and seed a stack with CLI](/docs/headless-cms/sveltekit#option-2-create-and-seed-a-stack-with-cli) section).
        -   If you do not use the CLI for this stack, confirm the region in the stack UI.
-   **Missing or invalid tokens**
    -   **Why it breaks:** VITE\_CONTENTSTACK\_DELIVERY\_TOKEN and VITE\_CONTENTSTACK\_PREVIEW\_TOKEN are required tokens. The delivery token powers content fetch, and the preview token powers Live Preview configuration on the stack client.
    -   **Fix:** Regenerate token(s), update .env, then restart npm run dev.
-   **Preview is disabled in either the app or the stack**
    -   **Why it breaks:**
        -   VITE\_CONTENTSTACK\_PREVIEW must be the exact lowercase string 'true'. Values like TRUE, 1, or yes are treated as disabled.
        -   Live Preview must be enabled in the stack settings for the same environment.
    -   **Fix:**
        -   Set VITE\_CONTENTSTACK\_PREVIEW=true in your .env file.
        -   Ensure the Live Preview toggle is active in Contentstack for your target environment.
-   **Unseeded or incompatible content model**
    -   **Why it breaks:** getPage queries the content type page where url equals / for the home route. At least one published page entry with url: / in the configured environment.
    -   **Fix:** Seed with contentstack/kickstart-stack-seed, or create a compatible page type and home entry manually.
-   **Using non-****true** **values for the preview flag**
    -   **Exact behavior:** The app tier of preview is enabled **only** when import.meta.env.VITE\_CONTENTSTACK\_PREVIEW === 'true' in src/lib/index.ts. The starter uses import.meta.env, which is equivalent to SvelteKit’s $env/static/public for VITE\_\* keys at build time. Values are **strings**, so the code compares to the literal 'true' without boolean coercion.
    -   **Fix:**
        -   Set VITE\_CONTENTSTACK\_PREVIEW=true exactly.
        -   TRUE, True, 1, or yes are treated as disabled.

### Other mistakes to avoid

-   **Committing** **.env**
    -   **Why it breaks:** .env holds your stack API key and tokens, committing it puts secrets in version control where others can read or reuse them.
    -   **Fix:** Keep .env local only (it should stay gitignored). When variable names change, update .env.example with placeholders only. Never commit real values.
-   **Publishing content to a different environment than the one configured**
    -   **Why it breaks:** Queries run against VITE\_CONTENTSTACK\_ENVIRONMENT. Unpublished entries in that environment return empty results.
    -   **Fix:** Publish to the configured environment or update VITE\_CONTENTSTACK\_ENVIRONMENT to the correct one.
-   **Wrong local URL for Live Preview or token setup**
    -   **Why it breaks:** Stack or token environment URLs that still point at http://localhost:3000 do not match the Vite dev server.
    -   **Fix:** Use http://localhost:5173/ for local SvelteKit development unless you change the dev port.
-   **Skipping** **svelte-kit sync** **when tooling complains**
    -   **Why it breaks:** Generated types and Kit metadata may be missing on a fresh clone until sync runs.
    -   **Fix:** Run npm run build or npm run check once.
-   **Renaming content contract without updating code**
    -   **Why it breaks:** The app targets contentType("page") and .where("url", ...). Renaming types or fields without updating code breaks queries and the homepage render.
    -   **Fix:** Update src/lib/index.ts, src/lib/types.ts, and rendering in src/routes/+page.svelte so they match your content model.

## Next Steps

-   Add routes and load functions for paths beyond /.
-   Extend content types and update src/lib/types.ts to preserve type safety.
-   Define a test strategy for load functions and rendering behavior.
-   Read [SvelteKit adapters](https://svelte.dev/docs/kit/adapters/) and Node hosting options for production SSR.

For support and questions, join the [Contentstack Community on Discord](https://community.contentstack.com/).
