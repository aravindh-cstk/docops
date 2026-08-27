---
title: "Install Live Preview"
description: "Configure the Delivery SDK with a live_preview block and initialize ContentstackLivePreview to enable real-time draft content fetching in your app."
url: /studio/install-live-preview
uid: blt59be24f9181ee75f
---

# Install Live Preview

## Install Live Preview

Live Preview fetches draft content in real-time. Configure the Delivery SDK with a live\_preview block (preview token + host) and initialize ContentstackLivePreview in your app.

## Studio vs. Standalone Rendering

The live\_preview block on the Delivery SDK lets Studio's canvas iframe fetch draft content. Initializing ContentstackLivePreview powers preview in your standalone app render (outside Studio). Studio's canvas drives its own preview pipe via the Studio SDK and does not need ContentstackLivePreview.init itself, but your standalone site does.

## Install

```
npm install @contentstack/live-preview-utils
```

## Initialize

Add the init call to src/lib/contentstack.ts (the same file from the Delivery SDK step):

```
import Contentstack from "@contentstack/delivery-sdk";
import ContentstackLivePreview, { type IStackSdk } from "@contentstack/live-preview-utils";

export const stack = Contentstack.stack({
  apiKey:        process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
  deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN!,
  environment:   process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
  region:        "us",
  live_preview: {
    enable:        true,
    preview_token: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN!,
    host:          "rest-preview.contentstack.com",
  },
});

ContentstackLivePreview.init({
  enable:   true,
  stackSdk: stack.config as IStackSdk,   // CSR: the preview hash is written onto this stack so the Delivery SDK fetches drafts from the preview service
  ssr: false,                            // CSR app — in SSR you omit stackSdk and forward the hash via searchQuery (see below)
  stackDetails: {
    apiKey:      process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
    environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
  },
  clientUrlParams: {
    host: "app.contentstack.com",
  },
  editButton: { enable: true },
});

export { ContentstackLivePreview };
```

Two things happen here:

1.  The **Delivery SDK** gets a live\_preview block: tells it to use the **Preview Token** + preview host when running in preview mode
2.  **ContentstackLivePreview.init** sets up the bidirectional pipe between your app and Contentstack

## Connect Live Preview to React Rendering

Call ContentstackLivePreview.onEntryChange once at app boot. This registers a callback that fires whenever Contentstack pushes a content update, triggering a re-render or refetch in your app.

```
"use client";
// app/layout.tsx (Next.js App Router) or src/main.tsx (Vite)
import { useEffect } from "react";
import { ContentstackLivePreview } from "@/lib/contentstack";

export default function RootLayout({ children }) {
  useEffect(() => {
    ContentstackLivePreview.onEntryChange(() => {
      // re-fetch / re-render — simplest is a router refresh:
      // router.refresh()  (Next.js App Router)
      // queryClient.invalidateQueries()  (React Query)
      // setState(s => ({ ...s }))  (plain state)
    });
  }, []);

  return <>{children}</>;
}
```

For data-fetching libraries (React Query, SWR), wire onEntryChange to invalidate the relevant cache key.

> Note: ContentstackLivePreview.init + onEntryChange are only needed for your **standalone app rendering** (the site users browse outside Studio). Studio's canvas iframe drives its own preview pipe via the Studio SDK and does not call these; the canvas-app reference implementation configures live\_preview on the stack but does not invoke ContentstackLivePreview.init.

## Non-US Regions

| Region | Preview host | App host |
| --- | --- | --- |
| US (default) | rest-preview.contentstack.com | app.contentstack.com |
| EU | eu-rest-preview.contentstack.com | eu-app.contentstack.com |
| Azure NA | azure-na-rest-preview.contentstack.com | azure-na-app.contentstack.com |
| Azure EU | azure-eu-rest-preview.contentstack.com | azure-eu-app.contentstack.com |
| GCP NA | gcp-na-rest-preview.contentstack.com | gcp-na-app.contentstack.com |
| GCP EU | gcp-eu-rest-preview.contentstack.com | gcp-eu-app.contentstack.com |
| AU | au-rest-preview.contentstack.com | au-app.contentstack.com |

## Verify Live Preview Is Working

After init, open your app in a browser. Open Contentstack in another tab, edit a draft entry, click "Preview", and your app should reflect the change without a reload.

If nothing changes, see [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues).

## Optional: Install with the CLI Skill

The studio-skills CLI installs and configures Live Preview automatically using an LLM-driven skill:

```
npx @contentstack/studio-skills install
```

Then: _"install Live Preview in this project"_. The skill detects your framework, adds the live\_preview block to your Delivery SDK init, and wires onEntryChange to your render layer.

## Next

[Install the Studio SDK](/docs/studio/install-the-studio-sdk)
