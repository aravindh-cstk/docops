---
title: "[Studio] - Set Up Studio for a CSR Project"
description: Set up Studio for a CSR Project
url: https://www.contentstack.com/docs/studio/set-up-studio-for-a-csr-project
product: Contentstack Studio
doc_type: setup-guide
audience:
  - developers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Set Up Studio for a CSR Project

This page explains how to integrate Contentstack Studio into a client-side rendered (CSR) React project, including installing required SDKs, configuring Delivery and Preview tokens, fetching a Studio spec, and rendering compositions. It is intended for developers setting up Studio for the first time and should be used when connecting a front-end app to a Contentstack stack with Live Preview and Studio enabled.

## Set Up Studio for a CSR Project

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Studio lets you visually design, configure, and render web experiences by combining **prebuilt or custom components**, **CMS-managed content**, and **design system tokens**, without hand-writing HTML or CSS for each page.

This setup guide walks you through integrating Studio into a React project, from installing SDKs to rendering your first composition. By the end of this guide, you’ll have a working configuration that:
- Connects your front-end to your Contentstack stack
- Loads composition data (spec) from Studio
- Renders the composition dynamically
- Supports **Live Preview** and **Visual Builder** for in-context editing

## Prerequisites

Before you begin, ensure you have:
- A stack with **Live Preview enabled**
- An existing **Studio project** linked to your stack

## Install the Required SDKs

Studio requires two SDKs:
- **Studio React SDK**This SDK provides the tools to fetch and render compositions from Studio.

Run one of the following commands in your project directory:

`npm i @contentstack/studio-react`

Or

`yarn add @contentstack/studio-react`
- **Contentstack Delivery SDK**Studio uses this SDK internally to fetch your content from the CMS.

`npm i @contentstack/delivery-sdk`

Or

`yarn add @contentstack/delivery-sdk`

## Generate Delivery and Preview Tokens

These tokens authenticate your front end to fetch published and preview content from Contentstack.

To create a Delivery and Preview token, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack), navigate to the settings panel, and select **Tokens**.
- Click **Delivery Token** to create a new token.**Tip:** If you are on the [Management Tokens](/docs/developers/create-tokens/about-management-tokens) tab, you can press “Alt + O” (Windows) or “Option + O” (Mac) to navigate to the Delivery Tokens tab.
- Enter a **Name** (required) and a **Description** (optional) for the Delivery Token.
- In the **Scope** section, choose the [Branches](/docs/developers/branches/about-branches/) or [Aliases](/docs/developers/branches/about-aliases) to associate with this token.
- Select the **Publishing Environments** for which to generate the Delivery Token.
- Enable the **Create Preview Token** toggle to generate a [Preview Token](/docs/developers/create-tokens/about-delivery-tokens#about-preview-tokens).
- Click **Generate Token**.

A new token appears in both the **Delivery Token** and **Preview Token** fields. You can copy the tokens for later use in your SDK configuration.

## Initialize the Contentstack Delivery SDK

Create a configuration file (e.g., `src/studio/index.ts`) to store your Studio setup.

```
// src/studio/index.ts
import contentstack from "@contentstack/delivery-sdk";

const stack = contentstack.stack({
  apiKey: "api_key",
  deliveryToken: "delivery_token",
  environment: "environment",
  live_preview: {
    preview_token: "preview_token",
    enable: true,
  },
});
```

**Note:**
- The environment must match a valid one in your stack (e.g., development, production).
- Keep your tokens secure and avoid committing them to version control.

## Initialize the Studio SDK

In your main file (e.g., `src/index.ts`), import the Studio config:

```
import { studioSdk } from "@contentstack/studio-react";

studioSdk.init({
  stackSdk: stack,
});
```

This ensures the SDKs are initialized before your app renders any compositions.

## Import the Configuration in Your Entry Point

To activate the configuration, import the index.ts in your application’s main file:

```
// src/index.ts
import "./studio";
```

This ensures the SDKs are initialized before your app renders any composition.

## Fetch the Studio Spec

The **Studio Spec** contains:
- The **structure** of your page (components, layers)
- **Metadata** (tokens, settings)
- **Bound content** from the CMS

In your main component (`App.tsx`), use the `useFetchSpecOptions` hook to retrieve it.

```
// src/App.tsx
import { useCompositionData } from "@contentstack/studio-react";

export function Home() {
  const { specOptions, isLoading, error } = useCompositionData({
    compositionUid: "page", // Replace with your composition UID
  });
}
```

## Render the Composition

Once you have the spec, pass it to `StudioComponent` to render the layout.

```
// src/App.tsx
import { StudioComponent, useCompositionData } from "@contentstack/studio-react";

export function Home() {
  const { specOptions, isLoading, error, hasSpec } = useFetchSpecOptions({
    compositionUid: "page",
  });

  if (isLoading) return Loading...

;

  if (error) return Failed to fetch composition.;

  if (!hasSpec) return Composition not found.

;

  return ;
}
```

This renders the layout and content exactly as defined in Studio.

## Using Studio with a Router (Optional)

If you are using React Router or similar, you can fetch compositions dynamically based on the URL rather than hardcoding UIDs:
- Use the current path to derive the `compositionUid`
- Use a single renderer component to load any page
- New compositions will automatically render without code changes

## Verify the Setup

After completing the configuration steps, confirm that Studio is working as expected in your local environment.
- **Run your project**Start your local development server to load your React or Next.js application.

`npm start`

Or

`yarn start`

This will compile your application and launch it on http://localhost:3000.
- **Open the application in a browser**Navigate to your local URL (e.g., http://localhost:3000) and look for the composition.

If everything is set up correctly, you should see the layout and components as defined in Studio.
- If you see a blank page, check the console for JavaScript errors and ensure the `compositionUid` matches the UID from Studio.
- **Test Live Preview (if enabled)**If your stack has Live Preview enabled:

Open the same composition in **Visual Builder** within Contentstack.
- Edit a piece of content (e.g., a heading or image).
- Save the entry.
- Switch back to your local app – the change should appear instantly without refreshing.
- This confirms:Your **preview token** is working
- Live Preview is properly connected
- Data binding between CMS and components is working

**Tip:** If changes don’t appear, verify your token settings and ensure the `enable` property is set to `true` in the `live_preview` configuration.

You’ve now connected your front-end application to Studio. With your setup complete, you can:
- Build custom components
- Bind them to live content
- Use design tokens from your design system
- Reuse layouts across pages

As your project grows, Studio helps maintain consistency, accelerate iteration, and keep content creators and developers in sync.

## Common questions

**How do I know if Studio is available for my account?**  
Studio is currently part of an Early Access Program and may not be available to all users. Contact the Contentstack [support](mailto:support@contentstack.com) team.

**What tokens do I need to set up Studio in a front-end app?**  
You need a Delivery Token and a Preview Token to fetch published and preview content from Contentstack.

**Where should I initialize the SDKs?**  
Initialize the Contentstack Delivery SDK in a configuration file (e.g., `src/studio/index.ts`) and initialize the Studio SDK in your main file (e.g., `src/index.ts`) before rendering compositions.

**What should I check if Live Preview changes don’t appear?**  
Verify your token settings and ensure the `enable` property is set to `true` in the `live_preview` configuration.