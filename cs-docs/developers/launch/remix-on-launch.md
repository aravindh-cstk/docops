---
title: "[Contentstack Launch] - Remix on Launch"
description: Remix features and application specifications supported in Contentstack Launch, including SSR, caching, runtime environment, and limits.
url: https://www.contentstack.com/docs/launch/remix-on-launch
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
  - devops
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Remix on Launch

This page explains how Remix is supported on Contentstack Launch, including supported features (such as SSR) and key Launch application specifications (timeouts, memory, runtime, file system, architecture, and caching). It is intended for developers deploying or operating Remix applications on Launch and should be used when configuring runtime behavior and performance characteristics.

## Remix on Launch

Remix is a full-stack web framework that enhances user experience by leveraging web standards for a fast, slick, and resilient interface.

This document covers the key Remix features supported in Contentstack Launch, including Server-Side Rendering (SSR), caching, runtime environments, and application specifications.

## Supported Features in Contentstack Launch

### Server-Side Rendering (SSR)

Launch fully supports Remix’s Server-Side Rendering (SSR) approach, which improves SEO performance by rendering pages on the server before sending them to the client.

After the server sends the pre-rendered page to the client, Remix hydrates the application, enabling interactivity and dynamic behavior.

**Additional Resource:** Follow the [Quick Start Guide with Remix](./quick-start-remix.md) for a step-by-step walkthrough to deploy your Remix project on Launch as an SSR-based application.

## Launch Remix Application Specifications

### Execution Timeout

Launch applications must respond to incoming **HTTP requests** within **30 seconds**. If a request exceeds this limit, it will time out and return an **HTTP 500 error**.

**Note:** For **error code 500**, please refer to the timed-out errors in the Server Logs tab to understand and address the issue.

### Memory Size

The memory size for a Launch application is **1024 MB**.

### Runtime Environment

The Launch runtime environment leverages [**Node.js**](./supported-nodejs-versions.md) to power its execution environment.

### File System

The Launch Remix file system refers to the Launch application's ability to interact with the file system, including `read` and `write` operations. By default, Launch applications operate on a read-only file system, except for the designated `/tmp` directory, which allows `write` operations as needed.

The `/tmp` directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note:** The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.

### Architecture

The Launch application supports the `x86_64` instruction set.

### Caching

By default, when deploying Remix with Server-Side Rendering (SSR) on Launch, pages are cached on Launch’s CDN. This allows subsequent requests to the same page to be served quickly from the cache, reducing load times and improving performance without regenerating the page on each request.

You can configure this behavior by returning appropriate cache headers from your server-side implementation in Remix. In the following example, we modify the `Express.js` route that handles Remix engine requests in `server.ts` to regenerate the page every **5 minutes**. You can set a different cache setting for each route as well. You can learn more about it [here](https://remix.run/docs/en/main/route/headers).

```
// server.ts
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderArgs) => {
  const htmlContent = "Your rendered page content"; // Respond with cache-control headers (max-age=0 and s-maxage=300)
  return new Response(htmlContent, {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=300", // Cache for 5 minutes
      "Content-Type": "text/html", // Ensure proper content type
    },
  });
};
```

### Cache Revalidation

As a Remix SSR user, you can also leverage [Launch’s cache revalidation feature](./revalidate-cdn-cache.md) to render new content updates on demand.

**Note:** Please ensure that you revalidate the cache for both the data endpoint backing the content and the page URL. This is important if you have cached API endpoints delivering data for the page.

## Common questions

### Does Contentstack Launch support Remix SSR?
Yes. Launch fully supports Remix’s Server-Side Rendering (SSR) approach.

### What is the request timeout limit for Launch applications?
Launch applications must respond to incoming **HTTP requests** within **30 seconds** or the request will time out and return an **HTTP 500 error**.

### Can a Remix app write to the file system on Launch?
By default, Launch applications operate on a read-only file system, except for the designated `/tmp` directory, which allows `write` operations as needed.

### How do I control caching for Remix SSR pages on Launch?
You can configure caching by returning appropriate cache headers from your server-side implementation in Remix (for example, using `Cache-Control` headers).