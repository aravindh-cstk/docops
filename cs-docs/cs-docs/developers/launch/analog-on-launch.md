---
title: "[Contentstack Launch] - Analog on Launch"
description: Documentation for using Analog.js with Contentstack Launch, including rendering strategies, API routes, sitemap generation, content routes, caching, and Launch runtime specifications.
url: https://www.contentstack.com/docs/launch/analog-on-launch
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
  - devops
  - architects
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Analog on Launch

This page explains how Analog.js works on Contentstack Launch, including supported rendering strategies, API routes, sitemap and content routing features, caching behavior, and Launch runtime specifications. It is intended for developers deploying or configuring Analog.js applications on Launch and should be used when setting up SSR/static/ISR behavior, route rules, and cache revalidation.

## Analog on Launch

Analog.js is an open-source meta-framework built on Angular, designed to deliver modern, server-first, highly performant applications. It provides support for hybrid rendering, API routes, file-based routing, content hydration, and seamless integration with server runtimes.

## Supported Features in Contentstack Launch

### Rendering Strategies

Analog.js supports multiple rendering modes including Server-Side Rendering (SSR), Static Rendering, ISR (Incremental Static Regeneration), and API Routes. All of these modes are compatible with Contentstack Launch.

#### Server-Side Rendering (SSR)

Analog.js supports [server-side rendering using Analog's](https://analogjs.org/docs/features/server/server-side-rendering) server build.

Launch supports Analog's SSR model, enabling dynamic, per-request rendering.

To enable SSR, configure Analog in the `vite.config.ts` file:

```
import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

export default defineConfig({
 plugins: [
   analog({
     ssr: true,  // Enable server-side rendering
     nitro: {
       routeRules: {
         // Configure route-specific SSR and caching
       },
     },
   }),
 ],
});
```

**Additional Resource:** Refer to the [Quick Start Guide with Analog](./quick-start-analog.md) documentation for a step-by-step walkthrough to deploy an Analog Starter on Launch as an SSR-based application.

#### Static Rendering (Pre-rendering)

Analog.js supports static HTML generation for pages that do not require runtime data.

Launch serves these assets directly from the global CDN.

To pre-render a route, define it in `vite.config.ts`:

```
export default defineConfig({
 plugins: [
   analog({
     ssr: true,
     prerender: {
       routes: [
         '/',
         '/about-us'
       ]
     },
   }),
 ],
});
```

These pages are pre-rendered at build time by Analog’s Nitro-based prerenderer and cached at the edge.

#### Incremental Static Regeneration (ISR)

Launch supports ISR for Analog.js using HTTP caching headers configured via Nitro route rules.

Analog.js pages can define Cache-Control headers in `vite.config.ts` to define the revalidation interval:

```
analog({
 ssr: true,
 nitro: {
   routeRules: {
     '/isr': {
       ssr: true,
       headers: {
         'Cache-Control': 'public, s-maxage=40, stale-while-revalidate=60',
       },
     },
   },
 },
})
```

#### API Routes

Analog.js supports creating API routes using the Nitro server framework with `h3`. API routes are defined in the `src/server/routes/api` directory and are automatically exposed under the `/api` prefix.

**Creating an API Route**

API routes use `defineEventHandler` from `h3` to handle requests. The file structure maps directly to the URL path:

```
// src/server/routes/api/test.ts → /api/test
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => ({
 message: 'Test API endpoint',
 status: 'success',
 timestamp: new Date().toISOString(),
}));
```

**HTTP Method-specific Routes**

Create method-specific handlers by suffixing the filename (for example, `test.post.ts`, `test.put.ts`, `test.delete.ts`):

```
// src/server/routes/api/test.post.ts
import { defineEventHandler, readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 if (!body.message) {
   throw createError({ statusCode: 400, statusMessage: 'Missing required fields' });
 }
 return { success: true, data: body };
});
```

### Sitemap Generation

Analog.js supports automatic sitemap generation. Analog generates a sitemap in the `dist/analog/public` directory when running a build if a sitemap configuration is provided.

**Note:** Since the sitemap is generated at build time, only prerendered routes are included; SSR and client-side–only pages are excluded.

Sitemap generation is configured in the `vite.config.ts` file:

```
import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

export default defineConfig({
 plugins: [
   analog({
     ssr: true,
     prerender: {
       routes: async () => ['/', '/blog'],
       sitemap: {
         host: 'https://your-domain.com',
       },
     },
   }),
 ],
});
```

#### Customizing Sitemap Entries

You can customize individual sitemap entries by defining `changefreq`, `priority`, and `lastmod` for each prerendered route.

```
import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

export default defineConfig({
 plugins: [
   analog({
     ssr: true,
     prerender: {
       routes: async () => [
         {
           route: '/',
           sitemap: {
             changefreq: 'daily',
             priority: '1.0',
           },
         },
         {
           route: '/about-us',
           sitemap: {
             changefreq: 'monthly',
             priority: '0.8',
           },
         },
       ],
       sitemap: {
         host: 'https://your-domain.com',
       },
     },
   }),
 ],
});
```

**Sitemap Options:**
- **changefreq:** How frequently the page changes ("always", "hourly", "daily", "weekly", "monthly", "yearly", "never").
- **priority:** URL priority relative to other URLs ("0.0" to "1.0", default: "0.5").
- **lastmod:** Last modification date of the page (optional).

Additionally, the `host` value must be provided at the prerender sitemap level to define the base URL of the site.

### Content Routes (Analog.js)

Analog.js allows you to use **Markdown files as routes**, creating content-driven pages without manually writing Angular components. Frontmatter metadata in `.md` files can define titles, descriptions, and other page info. ([analogjs.org](https://analogjs.org/docs/features/routing/content))

#### Setup

**Enable content in your **`**app.config.ts**`**:**

```
import { ApplicationConfig } from '@angular/core';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
export const appConfig: ApplicationConfig = {
  providers: [
    provideContent(withMarkdownRenderer()),
  ],
};
```

**Enable content support in **`**vite.config.ts**`**:**

```
import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
export default defineConfig({
  plugins: [
    analog({
      content: {
        highlighter: 'prism', // optional: for code highlighting
      },
    }),
  ],
});
```

#### Defining Content Routes

Place `.md` files in `src/app/pages`; the filename defines the route:

```
src/app/pages/about.md → /about
```

**Example for **`**about.md**`**:**

```
---
title: About
---
## About Our Project
Welcome to our documentation site!
```

#### Defining Content Files (Analog.js)

In **Analog.js**, you can define flexible content outside of route components by placing **Markdown content files** in a dedicated folder. This is especially useful for blog posts, articles, and other markdown-based content that isn’t tied directly to a routed page file.

**Where to Put Content Files**

Create a `src/content` directory in your project root:

```
src/
└── content/
    ├── post1.md
    ├── post2.md
    └── ...
```

Files in this folder are treated as **content sources** rather than page routes, giving you the flexibility to load and display them anywhere in your app.

**What a Content File Looks Like**

Each Markdown file should include **frontmatter metadata** to describe the content. For example:

```
---
title: My First Post
slug: 2022-12-27-my-first-post
description: A short summary of this post
coverImage: https://example.com/my-image.jpg
---
Hello World!
```

The `slug` and other fields help you identify and organize content when you render it or generate lists of posts.

## Launch Analog Application Specifications

### Execution Timeout

The Launch application enforces a maximum execution timeout, requiring it to respond to any incoming HTTP request within **30 seconds**. If the application fails to respond within this duration, the request will time out, resulting in a response with an **HTTP status error code 500**.

**Note:** For **error code 500**, refer to the timed-out errors in the **Server Logs** tab to understand and address the issue.

### Memory Size

The memory size for a Launch application is **1024 MB**.

### Runtime Environment

The Launch runtime environment leverages [Node.js](./supported-nodejs-versions.md) to power its execution environment.

### File System

The Launch Analog file system refers to the Launch application's ability to interact with the file system, including `read` and `write` operations. By default, Launch applications implement a read-only file system, with the exception of the designated `/tmp` directory, which facilitates `write` operations.

The `/tmp` directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note:** The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.

### Architecture

The Launch application supports the `x86_64` instruction set.

### Caching in Analog on Launch

By default, all the pages are cached on Launch’s CDN when you deploy Analog as SSR. This means that the subsequent requests to the same page will be cached, and the page will not be regenerated.

#### API Routes Caching

By default, API routes are not cached. You can configure caching for specific API routes using Nitro route rules in `vite.config.ts` as given below:

```
nitro: {
routeRules: {
  '/api/test': {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  },
},
}
```

You can override caching behavior per route using Nitro route rules in `vite.config.ts`:

#### Disable caching

```
nitro: {
 routeRules: {
   '/ssr': {
     headers: {
       'Cache-Control': 'no-store',
     },
   },
 },
}
```

#### Static Assets Caching

```
nitro: {
 routeRules: {
   // Static assets with content hashes (immutable)
   '/assets/**': {
     headers: {
       'Cache-Control': 'public, s-maxage=31536000, immutable',
     },
   },
   // CSS files
   '/*.css': {
     headers: {
       'Cache-Control': 'public, s-maxage=31536000',
     },
   },
   // JavaScript files
   '/*.js': {
     headers: {
       'Cache-Control': 'public, s-maxage=31536000',
     },
   },
 },
}
```

#### Cache with Tags (for Cache Purging)

Use cache tags to enable selective cache invalidation:

```
nitro: {
 routeRules: {
   '/cache-purge': {
     ssr: true,
     headers: {
       'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
       'Cache-Tag': 'cachetest',
     },
   },
 },
}
```

**Additional Resource:** Refer to the [Caching Guide for Contentstack Launch](./caching-guide-for-contentstack-launch.md) for more information.

### Cache-Revalidation Strategies

Analog.js supports two cache revalidation strategies: time-based revalidation and on-demand revalidation. For detailed information on revalidating CDN cache using URL paths, Cache-Tags, or hostnames, refer to the [Revalidate CDN Cache](./revalidate-cdn-cache.md) documentation.

#### (i) Time-Based Revalidation

Configure routes with time-based revalidation using `s-maxage` and `stale-while-revalidate`:

```
nitro: {
 routeRules: {
   '/isr': {
     ssr: true,
     headers: {
       'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=30',
     },
   },
 },
}
```

#### (ii) On-Demand Revalidation

You can trigger on-demand revalidation using Automate: [Revalidate CDN cache using Automate](./revalidate-cdn-cache.md).

**Note:** Ensure you revalidate the cache for the data endpoint that backs the content, in addition to the page URL. This is important if your page uses cached API endpoints for data delivery. **Example**: `domain/api/api-route`

This page will be server-rendered on each request when accessed at `/ssr` (unless cached).

### Limitation

Currently, [Edge URL Rewrites](./edge-url-rewrites.md) are not supported for Analog.js applications on Contentstack Launch.

### Example Git Repository

A fully implemented version of this project is available in the following Git repository, which serves as the reference for the complete configuration and implementation.

**Repository Link:** [Analog.js Example Starter Repository](https://github.com/contentstack-launch-examples/contentstack-analog-example-starter)

## Common questions

### Does Launch support Analog.js SSR, static rendering, and ISR?
Yes. Analog.js supports Server-Side Rendering (SSR), Static Rendering, and ISR (Incremental Static Regeneration), and all of these modes are compatible with Contentstack Launch.

### Where do I define caching behavior for pages and API routes?
You can configure caching using Nitro route rules in `vite.config.ts`, including `Cache-Control` headers and optional `Cache-Tag` headers.

### Are API routes cached by default on Launch?
By default, API routes are not cached. You can configure caching for specific API routes using Nitro route rules in `vite.config.ts`.

### Are Edge URL Rewrites supported for Analog.js applications on Launch?
Currently, [Edge URL Rewrites](./edge-url-rewrites.md) are not supported for Analog.js applications on Contentstack Launch.