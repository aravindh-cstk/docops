---
title: "Astro on Launch"
description: "Learn how to deploy Astro on Contentstack Launch. Explore SSR, static rendering, ISR, caching, API routes, and environment variable configuration."
url: /launch/astro-on-launch
---

# Astro on Launch

## Astro on Launch

Astro is an open-source, content-focused framework that helps developers build fast, performant websites. It uses a lightweight island architecture and supports components from multiple UI frameworks, enabling developers to use components from multiple UI frameworks within a single project.

## What You Will Learn

-   How to enable server-side rendering (SSR) for Astro on Launch.
    
-   How to pre-render static pages and configure ISR-like revalidation with cache headers.
    
-   How to create Astro API routes with custom cache behavior.
    
-   How to set up edge redirects and rewrites for an Astro project.
    
-   How to configure environment variables for Astro on Launch.
    

## Supported Features in Contentstack Launch

### Rendering Strategies

Astro supports multiple rendering strategies, such as Server-Side Rendering (SSR), Pre-rendering, Incremental Static Regeneration (ISR), and API Routes. All of these strategies are compatible with Contentstack Launch.

**Additional Resource:** Refer to the [Quick Start Guide with Astro](/docs/launch/quick-start-astro) documentation for a step-by-step walkthrough to deploy your Astro project on Launch.

#### Server-Side Rendering (SSR)

Astro supports fully dynamic rendering through its Server-Side Rendering mode. Launch is compatible with Astro's SSR approach, allowing Astro to generate pages at request time.

To enable SSR in a Launch deployment, configure Astro to run in server mode as outlined in the [Astro configuration](https://docs.astro.build/en/reference/configuration-reference/#output) and [Node adapter](https://docs.astro.build/en/guides/integrations-guide/node/#mode) documentation:

```
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
```

Since SSR routes are dynamic, define caching rules inside .astro files using headers:

```
Astro.response.headers.set(
  "Cache-Control",
  "public, max-age=0, s-maxage=60, stale-while-revalidate=30"
);
```

Update package.json so that Launch can start the SSR server, as described in the [Astro documentation](https://docs.astro.build/en/guides/integrations-guide/node/#standalone):

```
{
  "scripts": {
    "start": "node ./dist/server/entry.mjs"
  }
}
```

Launch automatically configures build and output settings for Astro projects (such as the ./dist output directory). For SSR deployments, Launch starts the server using the start script defined in package.json. Refer to the [Quick Start Guide](/docs/launch/quick-start-astro) for setup details.

#### Static Rendering (Pre-rendering)

Astro supports generating static HTML at build time for specific routes. Launch serves these pages through the global CDN, making them a reliable option for stable or non-personalized content.

To pre-render a page, add the prerender flag as described in the [Astro’s pre-rendering guide](https://docs.astro.build/en/reference/routing-reference/#switch-to-server-mode):

```
export const prerender = true;
```

This generates a static HTML file during astro build. Launch then serves and caches this file at the edge.

#### Incremental Static Regeneration (ISR)

Astro supports content regeneration using standard caching directives, but does not provide native ISR like Next.js. Launch uses these Cache-Control headers on SSR and API responses to automatically revalidate cached content at the CDN level. This enables ISR-like behavior, where pages update dynamically as new content becomes available. Launch also supports [on-demand revalidation](/docs/launch/caching-guide-for-contentstack-launch#on-demand-revalidation) to refresh specific pages or API endpoints when content changes.

**Example**:

```
Astro.response.headers.set(
  "Cache-Control",
  "public, s-maxage=40, stale-while-revalidate=60"
);
```

Launch works with Astro’s ISR behavior and supports background regeneration through **RevalidateCDNCache** automation triggers.

#### API Routes

Astro API routes can be created under src/pages/api. By default, Launch caches these routes on the CDN unless you set explicit cache headers.

You can define custom caching behavior using Cache-Control headers:

```
export async function GET() {
  return new Response(JSON.stringify({ data: "example" }), {
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
```

This lets you control how Launch caches or bypasses API responses.

### Caching

By default, Launch caches all pages and API routes on the CDN when Astro is deployed as SSR. This means Launch serves subsequent requests to the same page from the cache, and Astro does not regenerate the page.

**Additional Resource:** Refer to the [Caching Guide for Contentstack Launch](/docs/launch/caching-guide-for-contentstack-launch) for more details.

You can customize this behavior for every route by setting cache headers directly inside your .astro files.

You can set custom cache headers as follows:

```
// In your .astro file
Astro.response.headers.set("Cache-Control", "no-store");
// Or for ISR
Astro.response.headers.set(
  "Cache-Control",
  "public, max-age=0, s-maxage=60, stale-while-revalidate=30"
);
```

#### Cache-Revalidation Strategies

**Time-Based Revalidation**

Use time-based revalidation to automatically refresh cached content after a set interval. Adjust the s-maxage and stale-while-revalidate values based on how frequently your content updates:

```
Astro.response.headers.set(
  "Cache-Control",
  "public, max-age=0, s-maxage=60, stale-while-revalidate=30"
);
```

**On-Demand Revalidation**

You can trigger on-demand revalidation using Automate: [Revalidate CDN cache using Automate](/docs/launch/revalidate-cdn-cache)

**Note:** Ensure you revalidate the cache for the data endpoint that backs the content, in addition to the page URL. This is important if your page uses cached API endpoints for data delivery. Example: domain/api/api-route

## Setting up Edge Redirects and Rewrites in Astro on Launch

When configuring [Edge Rewrites](/docs/launch/edge-url-rewrites) or [Edge Redirects](/docs/launch/edge-url-redirects) in Contentstack Launch, whether via launch.json or [Edge Functions](/docs/launch/edge-functions), use native HTML <a> tags instead of client-side navigation components. This applies to components such as [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/) within your Astro project. For standard navigation patterns, refer to the [Astro’s routing guidelines](https://docs.astro.build/en/guides/routing).

Using <a> tags ensures that a full-page request is triggered, so the edge logic can evaluate and execute the redirect or rewrite.

**Note:** Client-side navigation performs routing on the client and bypasses the CDN edge layer. As a result, any redirect or rewrite logic configured at the edge is not applied.

## Environment Variables

Configure API keys, delivery tokens, and other sensitive values in Contentstack Launch using the [Environment Variables](/docs/launch/environment-variables) guide. Redeploy your project for changes to take effect. In Astro, use process.env in server-only code for sensitive values. Only non-sensitive variables prefixed with PUBLIC\_ are accessible to the client via import.meta.env.PUBLIC\_\*. Launch injects these variables during both build and runtime, and does not expose server-side secrets to the client when PUBLIC\_ is not used.

## Launch Astro Server Configuration

Refer to the [Server Configuration](/docs/launch/server-configuration) document to learn about the Astro server configuration.

## Example Git Repository

The following Git repository contains a fully implemented version of this project for reference:

**Repository Link:** [Astro Example starter repository](https://github.com/contentstack-launch-examples/astro-example-starter)
