---
title: "Remix on Launch"
description: "Learn how to host and deploy a project using the Remix framework in Contentstack Launch."
url: /launch/remix-on-launch
uid: blt941996536e781e16
---

# Remix on Launch

## Remix on Launch

Remix is a full-stack web framework that enhances user experience by leveraging web standards for a fast, slick, and resilient interface.

This document covers the key Remix features supported in Contentstack Launch, including Server-Side Rendering (SSR), caching, runtime environments, and application specifications.

## Supported Features in Contentstack Launch

### Server-Side Rendering (SSR)

Launch fully supports Remix’s Server-Side Rendering (SSR) approach, which improves SEO performance by rendering pages on the server before sending them to the client.

After the server sends the pre-rendered page to the client, Remix hydrates the application, enabling interactivity and dynamic behavior.

**Additional Resource:** Follow the [Quick Start Guide with Remix](/docs/launch/quick-start-remix/) for a step-by-step walkthrough to deploy your Remix project on Launch as an SSR-based application.

## Launch Remix Server Configuration

Refer to the [Server Configuration](/docs/launch/server-configuration) document to learn about the Remix server configuration.

### Caching

By default, when deploying Remix with Server-Side Rendering (SSR) on Launch, pages are cached on Launch’s CDN. This allows subsequent requests to the same page to be served quickly from the cache, reducing load times and improving performance without regenerating the page on each request.

You can configure this behavior by returning appropriate cache headers from your server-side implementation in Remix. In the following example, we modify the Express.js route that handles Remix engine requests in server.ts to regenerate the page every **5 minutes**. You can set a different cache setting for each route as well. You can learn more about it [here](https://v2.remix.run/docs/route/headers/).

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

As a Remix SSR user, you can also leverage [Launch’s cache revalidation feature](/docs/launch/revalidate-cdn-cache) to render new content updates on demand.

**Note:** Please ensure that you revalidate the cache for both the data endpoint backing the content and the page URL. This is important if you have cached API endpoints delivering data for the page.
