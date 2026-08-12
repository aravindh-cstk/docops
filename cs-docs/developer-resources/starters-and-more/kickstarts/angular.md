---
title: "Angular"
description: "Learn how to quickly build an Angular app with Contentstack using the Kickstart template, including SDK setup, Live Preview, Visual Builder, and stack configuration."
url: /headless-cms/angular
---

# Angular

## Kickstart Angular

## Introduction

Kickstart Angular is a pre-built starter for connecting Angular applications to Contentstack. The repository uses Angular 21 with standalone components and the application builder. Use this starter to set up a Contentstack-powered app with the following preconfigured features:

-   [**Contentstack SDK**](/docs/developers/sdks): Provides tools for content retrieval.
-   [**Live Preview**](/docs/headless-cms/about-live-preview): Enables real-time content visualization within the app.
-   [**Visual Editor**](/docs/headless-cms/about-visual-editor): Supports on-page content editing.

## What You'll Learn

By the end of this guide, you will be able to:

-   Provision a stack and sample content by importing the Angular Starter
-   Optionally deploy the app with [Launch](/docs/launch/about-launch) and reuse the environment configuration
-   Use the Contentstack Delivery SDK to fetch content in an Angular application
-   Configure Live Preview and Visual Editor for real-time content updates and inline editing
-   Fetch and render Contentstack content in Angular components
-   Work with Angular standalone components, signals, and the inject() function used in the Kickstart
-   Generate Angular environment files from a .env file using the generate-env.js script
-   Connect the local app using [delivery](/docs/headless-cms/about-delivery-tokens) and [preview tokens](/docs/headless-cms/about-delivery-tokens#understanding-preview-tokens) (from the stack or mapped from Launch)

## Prerequisites

Before you begin, ensure you have the following:

-   [Node.js (v19 or higher)](https://nodejs.org/en/download/) installed on your machine
-   Basic understanding of JavaScript and/or TypeScript
-   A [Contentstack account](https://www.contentstack.com/login/)
-   Organization [Owner](/docs/administration/about-administration-roles)/[Admin](/docs/administration/about-administration-roles) access to import a Starter, which creates a new [stack](/docs/headless-cms/about-stack).
-   A [GitHub account](https://github.com/login) to deploy using Launch or clone the fork

**Note:** Kickstart projects use a shared content model. Reuse one stack across projects, or create separate stacks for isolated content and configuration.

## Import the Starter and deploy with Launch

Use the following guides to complete setup:

-   [**Importing a Starter**](/docs/marketplace/installing-a-starter): Import a prebuilt stack and [content model.](/docs/marketplace/about-content-models)
-   [**Launch Quick Start Guide with Angular**](/docs/launch/quick-start-angular): Connect GitHub, deploy the app, configure environment variables, and manage deployments.

**Outcome**:

-   A stack with sample content
-   A hosted application
-   A GitHub repository (if Deploy in Launch is used)

For local development, clone the repository and install dependencies:

-   If you used Launch, clone the repository linked to your deployment (from Launch or GitHub).
-   If not, clone the official repository.

```
git clone https://github.com/contentstack/kickstart-angular.git
cd kickstart-angular
```

In the cloned project folder, run:

```
npm install
```

This installs the project dependencies so you can run and build the app locally.

**Note:** 

Map Launch environment variables to local .env:

-   In Launch, environment variables are often named CONTENTSTACK\_\*.
-   In this repo, local .env uses NG\_APP\_CONTENTSTACK\_\* (start from .env.example).
-   Copy the values from Launch into .env and rename the keys to match NG\_APP\_CONTENTSTACK\_\* in the [Configure .env for Kickstart Angular](/docs/headless-cms/angular#configure-env-for-kickstart-angular) section.

## (Alternative) Create and seed your stack with CLI

The Angular Kickstart uses a predefined stack seed available in the contentstack/kickstart-stack-seed repository. Import this seed into your stack using the Contentstack CLI equivalent to a [Starter import.](/docs/marketplace/installing-a-starter)

This approach works well for terminal-first workflows or when you do not use the marketplace onboarding path.

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

3.  Sign in, and provide your Contentstack account details when prompted:

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

After the process completes, the CLI creates a stack, imports the Kickstart content models, and adds sample entries.

**Additional Resources:**

-   You can run an interactive bootstrap flow with csdx cm:bootstrap.
-   Watch the [Seed a stack in the CLI](https://youtu.be/2dQheUo7uH4) video for a walkthrough of the stack seeding process.

Once the seed completes, continue with the local clone and configuration steps below.

## Get Delivery and Preview Tokens

Gather these before updating .env. Use the stack you created with the **Starter** or **CLI commands** earlier. [Create a new stack](/docs/headless-cms/create-a-new-stack) manually only if you are not using any of those paths.

1.  Log in to Contentstack and open your stack.
2.  Navigate to **Settings** > **Tokens** and create a new [Delivery Token](/docs/headless-cms/create-a-delivery-token).
3.  Ensure the **Preview Token** is enabled (it is enabled by default).
4.  In the environment settings, set the URL to http://localhost:4200/.

**Additional Resource:** Refer to the [Create a Delivery Token](/docs/headless-cms/create-a-delivery-token) document for detailed steps.

## Configure .env for Kickstart Angular

After you have a stack and a local clone, follow the instructions to connect the app to Contentstack.

1.  Rename .env.example to .env in the project root. Alternatively, create the .env file with the same variables.
2.  Add your Contentstack credentials:

```
NG_APP_CONTENTSTACK_API_KEY=<STACK_API_KEY>
NG_APP_CONTENTSTACK_DELIVERY_TOKEN=<DELIVERY_TOKEN>
NG_APP_CONTENTSTACK_PREVIEW_TOKEN=<PREVIEW_TOKEN>
NG_APP_CONTENTSTACK_ENVIRONMENT=preview
NG_APP_CONTENTSTACK_REGION=EU
NG_APP_CONTENTSTACK_PREVIEW=true
```

**Note:** Live Preview is enabled by default for this feature.

**Credential details**

-   **API Key:** From your [stack](/docs/headless-cms/view-stack-details) (e.g., **Settings** > **API Keys**).
-   **Delivery Token / Preview Token:** From the token created (with Preview enabled) or the same logical values from Launch after you map them to NG\_APP\_\* keys.
-   **Environment:** The [publishing environment](/docs/headless-cms/about-environments) for preview (e.g., preview or development).
-   **Region:** Stack [region](/docs/administration/about-regions) (e.g., NA, EU, AZURE-NA).
-   **Preview:** Set true to enable Live Preview in the app.

**Note:** Free Contentstack developer accounts are bound to the EU region. The CDN automatically routes API requests to keep them responsive.

### How the configuration works

The project uses the [generate-env.js](https://github.com/contentstack/kickstart-angular/blob/main/generate-env.js) script to convert .env values into Angular environment files.

The script:

-   Runs automatically before npm run start and npm run build via prestart and prebuild in [package.json](https://github.com/contentstack/kickstart-angular/blob/main/package.json#L15)
-   Reads from .env if present; otherwise from process.env, using only NG\_APP\_CONTENTSTACK\_\* variables.
-   Generates:
    -   src/environments/environment.ts
    -   src/environments/environment.production.ts

These files contain the Contentstack configuration and API endpoints used by the app.

### Optional configuration overrides

You can override the default endpoints with the following variables:

-   NG\_APP\_CONTENTSTACK\_CONTENT\_DELIVERY
-   NG\_APP\_CONTENTSTACK\_PREVIEW\_HOST
-   NG\_APP\_CONTENTSTACK\_CONTENT\_APPLICATION

If omitted, the [contentstack-endpoints](https://www.npmjs.com/package/@timbenniks/contentstack-endpoints) package resolves the endpoints from your region.

**Warning:** Do not commit the .env file to version control. It is listed in .gitignore.

## Enable Live Preview in the Stack

1.  In your stack, go to **Settings** and navigate to **Environments**. Select an existing environment or create a new one, and add a **Base URL** for each locale.
2.  Navigate to **Visual Experience** from the **Settings** menu and select the **Enable Live Preview** checkbox.
3.  Select the **Default Preview Environment** that matches your app (for example, if NG\_APP\_CONTENTSTACK\_ENVIRONMENT=preview, choose **Preview**).
4.  Click **Save**.

Contentstack then sends Live Preview updates to your app. Run the app and confirm content loads in the **Verify Your Setup** section.

**Additional Resource:** For detailed setup instructions, see [Set Up Live Preview for Your Stack](/docs/headless-cms/set-up-live-preview-for-your-stack).

## Verify Your Setup

Run the app and confirm it loads content from your stack.

### Start the development server

1.  Run the following command:

```
npm run start
```

This runs the npm prestart script (node generate-env.js), then ng serve. That regenerates the Angular environment files from .env.

**Warning:** 

Running ng serve skips prestart directly, so generate-env.js does not run. To fix:

-   Run node generate-env.js manually before ng serve, or
-   Use npm run start for day-to-day development to keep .env and generated environment files in sync.
-   Open http://localhost:4200 in your browser.

You should see the homepage with:

-   A title, description, and image from your stack
-   Example modular blocks

If the page is empty or shows an error, check:

-   The stack was provisioned with the **Angular Starter** (or equivalent seed). See [Importing a Starter](/docs/marketplace/installing-a-starter)
-   Delivery token and environment in .env are correct
-   Environment files are up to date. Run npm run start again if needed.

**Note:** Use an LTS version of Node.js (e.g., v20). Odd-numbered versions (e.g., v21) are not LTS but still work.

### Test Live Preview

**Prerequisites:**

-   Live Preview enabled in the stack
-   NG\_APP\_CONTENTSTACK\_PREVIEW=true in .env

**Steps:**

1.  [Edit an entry](/docs/headless-cms/edit-an-entry) in Contentstack (e.g., the homepage).
2.  The app updates in the browser without a full reload.

**Tip:** Open the entry in the CMS, then use the Live Preview icon or open Visual Editor so the app runs inside the CMS for click-to-edit.

## Codebase Overview

### Project structure

Once dependencies are installed, your project has the following structure:

```
kickstart-angular/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── components/
│   │   │   └── home/
│   │   │       ├── home.component.html
│   │   │       └── home.component.ts
│   │   └── services/
│   │       └── contentstack.service.ts
│   ├── environments/
│   │   ├── environment.production.ts
│   │   └── environment.ts
│   ├── global_styles.css
│   ├── index.html
│   ├── main.ts
│   └── vite-env.d.ts
├── .env.example
├── angular.json
├── generate-env.js
├── package.json
└── types.ts
```

### Configuration and Build Settings

-   **Angular workspace project**: The angular.json file defines the application project name as demo under the projects.demo key.
-   **Build output**: Running npm run build generates the output in the dist/demo directory. You can verify this path in angular.json under projects.demo.architect.build.options.outputPath.
-   **Package name**: The package.json file defines the npm package name as kickstart-angular. This name differs from the Angular CLI project key.

### Key source paths

-   Entry: src/main.ts — bootstraps the app and routing
-   Shell: src/index.html
-   Global styles: src/global\_styles.css (Tailwind)

## Key files

Use the links below to view the current source on GitHub.

### Contentstack service

-   **File:** [src/app/services/contentstack.service.ts](https://github.com/contentstack/kickstart-angular/blob/main/src/app/services/contentstack.service.ts)
-   Initializes the Delivery SDK and optionally Live Preview
-   Exposes getEntryByUrl() to load an entry by content type and URL
-   Adds editable tags in preview mode so Visual Builder can bind CMS fields to the DOM

### Home component

-   **File:** [src/app/components/home/home.component.ts](https://github.com/contentstack/kickstart-angular/blob/main/src/app/components/home/home.component.ts)
-   Loads the page entry (/) and subscribes to ContentstackLivePreview.onEntryChange() to refetch on CMS updates.
-   Uses Angular **signals** and inject() for page data

### Home Page template

-   **File:** [src/app/components/home/home.component.html](https://github.com/contentstack/kickstart-angular/blob/main/src/app/components/home/home.component.html)
-   Renders page content and modular blocks with layout, image, title, and copy.
-   Uses @if, @for, and data-cslp for Visual Builder

### Environment generation

-   **File:** [generate-env.js](https://github.com/contentstack/kickstart-angular/blob/main/generate-env.js)
-   Reads .env or process.env (NG\_APP\_CONTENTSTACK\_\*)
-   Generates Angular environment files
-   Runs before start and build

**Optional overrides:**

-   NG\_APP\_CONTENTSTACK\_CONTENT\_DELIVERY
-   NG\_APP\_CONTENTSTACK\_PREVIEW\_HOST
-   NG\_APP\_CONTENTSTACK\_CONTENT\_APPLICATION

### Root and routing

-   **Files:** [src/app/app.component.ts](https://github.com/contentstack/kickstart-angular/blob/main/src/app/app.component.ts), [src/main.ts](https://github.com/contentstack/kickstart-angular/blob/main/src/main.ts)
-   Root shell with <router-outlet>
-   Single route (/) mapped to Home

## Common Mistakes to Avoid

### Critical Mistakes:

-   **Wrong Contentstack region**
    -   Free developer accounts are bound to the EU region. Setting NG\_APP\_CONTENTSTACK\_REGION=NA (or another region) causes API calls to fail and content not to load.
    -   Use NG\_APP\_CONTENTSTACK\_REGION=EU in .env and when configuring the CLI (e.g., csdx config:set:region EU).
-   **Stack not seeded**
    
    The application requires the page content type and sample entries to function correctly. You can provide this data by any one of the following methods:
    
    -   **Import the Angular Starter**: Use the provided starter package to create the content model.
    -   **Seed via CLI**: Run the csdx cm:stacks:seed command with the contentstack/kickstart-stack-seed repository.
    -   **Manual Configuration**: Create a matching content model and entries that align with the application's data requirements.
    
    **Note:** If the stack lacks a matching content model or entries, the application fails to fetch data for the home route (/). This results in an empty homepage or a 404 error.
    
-   **.env.example not renamed to .env**  
    The project reads configuration from .env. If you do not rename (or copy) .env.example to .env and add your credentials, the environment generation script has no values to use, and the SDK configuration fails.
-   **Wrong Live Preview URL**  
    Angular runs on http://localhost:4200/ by default. Configuring http://localhost:3000/ in your stack’s token or Live Preview settings breaks Live Preview and Visual Builder, even if the rest of the app loads.
-   **The environment generation script has not run**  
    Use npm run start, not ng serve directly. The prestart script runs generate-env.js and generates the Angular environment files from .env. Running ng serve skips this step, and the app uses a stale or empty configuration.
-   **Live Preview is not enabled in Stack Settings**  
    In your stack, go to **Settings → Live Preview**, enable it, and select the environment that matches your app (e.g., Preview). Otherwise, Live Preview updates are not injected.

### Other Mistakes to Avoid

-   **Committing .env**  
    The file contains API keys and tokens. Do not commit it; the repo already includes .env in .gitignore.
-   **Wrong or mismatched delivery/preview tokens**  
    Use the tokens from the token you created in the stack. Wrong or swapped tokens cause API or authentication failures.
-   **Incorrect publishing environment name**  
    The value of NG\_APP\_CONTENTSTACK\_ENVIRONMENT (e.g., preview) must match an environment that exists in your stack.
-   **Empty or missing environment variables**  
    Ensure all required NG\_APP\_CONTENTSTACK\_\* variables in .env are set. Otherwise, the generated environment files contain empty values, and the SDK fails.
-   **Skipping npm install**  
    Run npm install after cloning so dependencies and the environment generation script can run.
-   **Removing or modifying generate-env.js**  
    The prestart and prebuild scripts depend on it. Changing or deleting it breaks environment file generation.
-   **Querying content not published to the configured environment**  
    The app fetches entries from the environment set in .env. Unpublished content or content in another environment will not appear.
-   **Wrong content type or URL in getEntryByUrl()**  
    The kickstart queries the page content type for the URL '/'. If you extend the app, the content type and url field must match what exists in your stack.

## Next Steps

-   [Use Live Preview for CSR for simplicity with inline editing (good for getting started or when SEO is not critical).](/docs/headless-cms/live-preview-implementation-for-csr-without-contentstack-sdk)
-   [Use Angular Signals for a reactive state that works with Contentstack Live Preview.](/docs/headless-cms/set-up-visual-editor-for-your-website)
-   Use **Standalone Components** for an NgModule-free structure.
-   Use Dependency Injection via inject() for services.

You can extend this kickstart with more routes and pages, or add server-side rendering with Angular Universal. The same ideas (SDK init, fetching by URL, Live Preview, and Visual Builder) apply across frameworks.

For questions or issues, join the [Contentstack Community on Discord](https://community.contentstack.com/).
