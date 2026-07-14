---
title: "[Studio] - Set Up Studio for a SSR Project"
description: Configure Studio in a Next.js Server-Side Rendering (SSR) application, including SDK installation, client initialization, fetching composition data, and server rendering.
url: https://www.contentstack.com/docs/studio/set-up-studio-for-a-ssr-project
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - frontend-engineers
  - nextjs-developers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Set Up Studio for a SSR Project

This page explains how to configure Studio in a Next.js Server-Side Rendering (SSR) application. It is intended for developers integrating Studio compositions into an SSR workflow and should be used when you need server-rendered output with correct styles, data, and Live Preview/Visual Builder compatibility.

## Set Up Studio for a SSR Project

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

This guide explains how to configure **Studio** in a **Next.js Server-Side Rendering (SSR)** application. You’ll learn how to install the SDKs, initialize the required clients, fetch composition data, and render it on the server.

**Note:** This document assumes you are building with Next.js. While many concepts are transferable, code examples and configurations are specific to Next.js SSR.

## Prerequisites

Before you begin, make sure you have:
- A **Live Preview–enabled stack** in Contentstack
- A **Studio Project** with at least one published composition

## Install the Required SDKs

Studio requires two SDKs:
- **Studio React SDK**This SDK provides the tools to fetch and render compositions from Studio.

Run one of the following commands in your project directory:

```
npm i @contentstack/studio-react
```

Or

```
yarn add @contentstack/studio-react
```

- **Contentstack Delivery SDK**Studio uses this SDK internally to fetch your content from the CMS.

```
npm i @contentstack/delivery-sdk
```

Or

```
yarn add @contentstack/delivery-sdk
```

## Generate Delivery and Preview Tokens

These tokens allow your front-end to securely request published and preview content from Contentstack.

To create a Delivery and Preview token, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](../developers/set-up-stack/about-stack.md), navigate to the settings panel, and select **Tokens**.
- Click **Delivery Token** to create a new token.

  **Tip:** If you are on the [Management Tokens](../developers/create-tokens/about-management-tokens.md) tab, you can press “Alt + O” (for Windows users) or “Option + O” (for Mac users) to navigate to the Delivery Tokens tab.
- Enter a **Name** (required) and a **Description** (optional) for the Delivery Token.
- In the **Scope** section, choose the [Branches](../developers/branches/about-branches.md) or [Aliases](../developers/branches/about-aliases.md) you want to associate with this token.
- Select the **Publishing Environments** for which you want to generate the Delivery Token.
- Enable the **Create Preview Token** toggle to generate a [Preview Token](../developers/create-tokens/about-delivery-tokens.md#about-preview-tokens) associated with this Delivery Token.
- Click **Generate Token**.

A new token appears in both the **Delivery Token** and **Preview Token** fields. You can copy the tokens for later use in your SDK configuration.

## Initialize the Contentstack Delivery SDK

Create a configuration file (e.g., `src/studio.ts`) to store your Studio setup.

```
// src/studio.ts
import contentstack from "@contentstack/delivery-sdk";

const stack = contentstack.stack({
  apiKey: "api_key",            // Replace with your API key
  deliveryToken: "delivery_token",  // Replace with your Delivery token
  environment: "environment",       // Your target environment (e.g., 'development')
  live_preview: {
    preview_token: "preview_token",  // Your Preview token
    enable: true,
  },
});

export { stack };
```

**Tip:** You can store these credentials in environment variables for better security.

## Initialize the Studio SDK

In the same `studio.ts` file, import and initialize the Studio SDK:

```
import { studioSdk } from "@contentstack/studio-react";
import { stack } from "./studio";

export const studioClient = studioSdk.init({
  stackSdk: stack,
});
```

This `studioClient` will be used to fetch composition data in your SSR page.

## Fetch the Studio Spec in SSR

In SSR mode, Next.js doesn’t transfer these configurations to the client. We must use the `fetchCompositionData()` method in `**getServerSideProps**` to:
- Pass search parameters (from Studio preview mode)
- Fetch the **Studio Spec** (layout, metadata, and content)
- Extract the **style sheet** for server rendering

**Example:** `pages/index.tsx`

```
import { studioClient } from "../studio";
import { GetServerSidePropsContext } from "next";
import { extractStyles } from "@contentstack/studio-react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { query: searchQuery } = context;

    // Fetch composition spec and SSR options
    const studioProps = await studioClient.fetchCompositionData({
      searchQuery,
      compositionUid: "page", // Replace with your composition UID
    });

    // Extract styles for SSR
    const styleSheet = extractStyles(studioProps.spec);

    return {
      props: {
        studioProps,
        styleSheet,
      },
    };
  } catch (error) {
    console.error("Error fetching composition data", error);
    return { notFound: true };
  }
}
```

In SSR, you must handle styles manually and pass them into `<Head>` so they are rendered during the initial server response.

## Render the Composition in Your Page

Use the `StudioComponent` to render the fetched spec. Pass `studioProps` and inject the extracted styles into the `<Head>` tag.

```
import {
  StudioComponent,
  StudioComponentSpecOptions,
} from "@contentstack/studio-react";
import Head from "next/head";

interface HomeProps {
  studioProps: StudioComponentSpecOptions;
  styleSheet: string;
}

export default function Home({ studioProps, styleSheet }: HomeProps) {
  return (
    <>
      {styleSheet && {styleSheet}}

  );
}
```

## Complete Example

Here’s how the full `pages/index.tsx` might look:

```
import {
  StudioComponent,
  extractStyles,
  StudioComponentSpecOptions,
} from "@contentstack/studio-react";
import Head from "next/head";
import { studioClient } from "../studio";
import { GetServerSidePropsContext } from "next";

interface HomeProps {
  studioProps: StudioComponentSpecOptions;
  styleSheet: string;
}

export default function Home({ studioProps, styleSheet }: HomeProps) {
  return (
    <>
      {styleSheet && {styleSheet}}

  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { query: searchQuery } = context;
    const studioProps = await studioClient.fetchCompositionData({
      searchQuery,
      compositionUid: "page",
    });
    const styleSheet = extractStyles(studioProps.spec);

    return {
      props: {
        studioProps,
        styleSheet,
      },
    };
  } catch (error) {
    console.error("Error fetching composition data", error);
    return { notFound: true };
  }
}
```

You’ve integrated Studio into your Next.js SSR workflow, enabling server-rendered compositions with correct styles and data delivered at request time. This setup ensures fast initial page loads, SEO-friendly output, and compatibility with Live Preview and Visual Builder.

With your foundation in place, you can now focus on customizing components, binding dynamic content, and enhancing the end-user experience without reworking your rendering pipeline.

## Common questions

### Do I need both SDKs to use Studio in SSR?
Yes. Studio requires two SDKs: **Studio React SDK** and **Contentstack Delivery SDK**.

### Where should I fetch composition data in a Next.js SSR app?
Use the `fetchCompositionData()` method in `**getServerSideProps**`.

### Why do I need to extract and inject styles in SSR?
In SSR, you must handle styles manually and pass them into `<Head>` so they are rendered during the initial server response.

### What tokens are required for Delivery and Preview content?
You need a **Delivery Token** and a **Preview Token** to securely request published and preview content from Contentstack.