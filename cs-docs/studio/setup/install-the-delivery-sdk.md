---
title: "Install the Delivery SDK"
description: "Learn how to install and initialize the Contentstack Delivery SDK, configure environment variables, verify your connection, and set up non-US regions."
url: /studio/install-the-delivery-sdk
uid: blt620624b54fb48559
---

# Install the Delivery SDK

## Install the Delivery SDK

The Delivery SDK reads published content from Contentstack's CDN. Studio doesn't fetch content itself; it asks the Delivery SDK to do it. So this is the first install.

## Install

```
npm install @contentstack/delivery-sdk
# or
yarn add @contentstack/delivery-sdk
# or
pnpm add @contentstack/delivery-sdk
```

## Initialize

Create src/lib/contentstack.ts:

```
import Contentstack from "@contentstack/delivery-sdk";

export const stack = Contentstack.stack({
  apiKey:        process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
  deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN!,
  environment:   process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
  region:        "us",
});
```

Env-var prefix depends on your framework:

| Framework | Prefix |
| --- | --- |
| Next.js | NEXT\_PUBLIC\_… |
| Vite / React | VITE\_… (read via import.meta.env.VITE\_…) |
| Remix | process.env.… |
| CRA | REACT\_APP\_… |

## Sample .env.local

```
NEXT_PUBLIC_CONTENTSTACK_API_KEY=blt7f2b3951e45bd591
NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=cs35707f72b9bd05b166345680
NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN=cs8082278c5fa3f3cdc063049a
NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=test
NEXT_PUBLIC_CONTENTSTACK_DEFAULT_LOCALE=en-us
```

Make sure .env.local is in .gitignore.

## Verify the Connection

```
import { stack } from "@/lib/contentstack";

const { entries } = await stack
  .contentType("blog_post")
  .entry()
  .find();

console.log(entries);
```

If you get an array back (even empty), the SDK is wired correctly. If you get a 401, verify your credentials: open **Stack → Settings → Tokens** in Contentstack, click the Delivery Token edit drawer, and copy the **Stack API Key** and **Delivery Token** from there. Make sure you are using the Delivery Token, not the Management Token.

> **Security note:** Environment variable prefixes like NEXT\_PUBLIC\_, VITE\_, and REACT\_APP\_ expose values to the client-side bundle. Only use these prefixes for your Stack API Key and Delivery Token, both of which are safe to expose. Never use these prefixes for Management Tokens or other secret credentials, which must stay server-side only.

## Non-US Regions

Use this section if your Contentstack stack is hosted in a region other than US.

```
Contentstack.stack({
  apiKey: …, deliveryToken: …, environment: …,
  region: "eu",                              // or "au", "azure-na", "azure-eu", "gcp-na", "gcp-eu"
  host: "eu-cdn.contentstack.com",
});
```

| Region | CDN host |
| --- | --- |
| us (default) | cdn.contentstack.io |
| eu | eu-cdn.contentstack.com |
| azure-na | azure-na-cdn.contentstack.com |
| azure-eu | azure-eu-cdn.contentstack.com |
| gcp-na | gcp-na-cdn.contentstack.com |
| au | au-cdn.contentstack.com |
| gcp-eu | gcp-eu-cdn.contentstack.com |

## Next

[Install Live Preview](/docs/studio/install-live-preview)
