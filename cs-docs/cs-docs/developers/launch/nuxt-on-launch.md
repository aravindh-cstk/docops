---
title: "[Contentstack Launch] - Nuxt on Launch"
description: Nuxt on Launch
url: https://www.contentstack.com/docs/developers/launch/nuxt-on-launch
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Contentstack Launch] - Nuxt on Launch

This page explains how Nuxt works on Contentstack Launch, including supported rendering strategies, caching behavior, edge redirects/rewrites requirements, platform specifications, and troubleshooting guidance. It is intended for developers deploying or operating Nuxt applications on Launch and should be used when configuring rendering, caching, middleware, and edge behavior.

Nuxt on Launch

Nuxt is a free and open-source framework that offers an intuitive and extendable way to create a performant and production-grade full-stack web applications and websites using Vue.js.

## Supported Features in Contentstack Launch for Nuxt

### Rendering Strategies

Nuxt supports multiple rendering strategies, such as **Universal Rendering**, **Hybrid Rendering**, **Prerendering**, **Server Routes**, and **Route Middleware**/**Server Middleware**, all of which are compatible with Contentstack Launch:

- #### Universal Rendering

  In the [Universal Rendering](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering) mode, Nuxt renders HTML on the server for each request, similar to traditional Server-Side Rendering (SSR). Once the HTML is delivered, Vue.js hydrates the page in the browser, enabling interactivity. This approach **improves load time**, **enhances SEO**, and **maintains dynamic client-side behavior**.

- #### Pre-rendering

  With [Pre-rendering](https://nuxt.com/docs/getting-started/prerendering), specific routes are generated at build time and served as static files via the CDN. This is ideal for pages with non-personalized content that doesn’t change frequently, such as blog posts or marketing pages.

  **Configuration Example**:

  ```
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ["/about"],
    },
  }
  ```

- #### Hybrid Rendering

  [Hybrid Rendering](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering) allows different caching rules per route using **Route Rules** and decides how the server should respond to a new request on a given URL.

  **Note:** The `s-maxage` cache header is required when using ISR. Ensure that the values of `isr` and `s-maxage` are the same.

  This is configured using cache control headers:

  ```
  routeRules: {
  // Homepage pre-rendered at build time
     '/': { prerender: true },
  //page generated on demand, revalidates in background, cached until API response changes
     '/products': { swr: true },
     // Product pages generated on demand, revalidated in the background, cached for 1 hour (3600 seconds)
     '/products/**': { swr: 3600 },
     // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
     '/blog': { isr: 60,
   		headers:{
          "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=30"
       	}
   },
     // Blog post page generated on demand once until next deployment, cached on CDN
     '/blog/**': { isr: true },
     // Admin dashboard renders only on the client-side
     '/admin/**': { ssr: false },
   }
  }
  ```

- #### Server Routes

  By default, Launch **does not cache** responses for [Server Routes](https://nuxt.com/docs/guide/directory-structure/server#server-routes) defined under the `~/server/api` directory. To provide custom caching behavior to the server route responses defined under the `~/server/api` directory, use the `Cache-Control` headers in the `nuxt.config.js` file under the `routeRules` section.

  However, Launch does **cache responses for all other server routes**, defined under the `~/server/routes` directory. To provide custom caching behavior to the server route responses defined under the `~/server/routes` directory, use the `Cache-Control` headers in the `nuxt.config.js` file under the `routeRules` section.

  **Example**:

  For a server route placed at the path `~/server/server-route`, we can add `Cache-Control` headers as follows:

  ```
  export default defineNuxtConfig({
   routeRules: {
     "/server-route":{
       headers:{
  	 // Prevent CDN and browser from caching this route
         "Cache-Control": "no-store"
       }
     }
   }});
  ```

- #### Route Middleware/Server Middleware

  While using [middleware](https://nuxt.com/docs/guide/directory-structure/middleware) for user-specific logic such as authentication or personalization, it is important to note that the CDN caching may serve pages **before** the middleware executes. This can result in unintended exposure of protected or personalized content. To ensure secure and correct behavior, such logic should be handled at the edge using the [Edge Functions](/docs/developers/launch/edge-functions) on Launch.

### Caching

By default, all pages except API routes are cached on Launch’s CDN when you deploy Nuxt as SSR. This means that the subsequent requests to the same page will be cached, and the page will not be regenerated.

Check out the [Caching Guide for Contentstack Launch](/docs/developers/launch/caching-guide-for-contentstack-launch/) for more information.

However, you can customize this behavior for every route by configuring it in the `nuxt.config.js` file under the `routeRules` directive of `defineNuxtConfig`.

You can also set the custom cache-headers for the pages as follows:

```
routeRules: {
   "/contact":{
     headers:{
       "Cache-Control":"no-store"
     }
   },
   "/about-us/**":{
     headers:{
       "Cache-Control":"public, max-age=0, s-maxage=60, stale-while-revalidate=30"
     }
   }
 }
```

#### Cache-Revalidation Strategies

- **Time-Based Revalidation**

  ```
  routeRules: {
    "/blog/**": {
      headers: {
        "Cache-Control":
          "public, max-age=0, s-maxage=60, stale-while-revalidate=30",
      },
    }
  }
  ```

- **On-Demand Revalidation**

  You can trigger on-demand revalidation using Automate: [Revalidate CDN cache using Automate](/docs/developers/launch/revalidate-cdn-cache).

  **Note:** Ensure you revalidate the cache for the data endpoint that backs the content, in addition to the page URL. This is important if your page uses cached API endpoints for data delivery. Example: `domain/api/api-route`

**Additional Resource:** Refer to the [Quick Start Guide with Nuxt](/docs/developers/launch/quick-start-nuxt) documentation for a step-by-step walkthrough to deploy your Nuxt project on Launch as an SSR-based application.

## Setting up Edge Redirects and Rewrites in Nuxt on Launch

When configuring [Edge Rewrites](/docs/developers/launch/edge-url-rewrites) or [Edge Redirects](/docs/developers/launch/edge-url-redirects) in Contentstack Launch—either via `launch.json` or using [Edge Functions](/docs/developers/launch/edge-functions), it is a prerequisite to use native `<a>` tags instead of `<NuxtLink>` components within your Nuxt application.

This ensures that the client initiates a full-page request, allowing the rewrite or redirect rule to be properly executed at the edge.

**Note:** `<NuxtLink>` performs client-side navigation, which bypasses the edge logic applied at the CDN level.

## Launch Nuxt Application Specifications

### Execution Timeout

The Launch application enforces a maximum execution timeout of **30 seconds**. If the application does not respond within this time, the request times out and returns an **HTTP 500 status code**.

**Note:** For **error code 500**, please refer to the timed-out errors in the [Server Logs](/docs/developers/launch/cloud-functions#server-logs) tab to understand and address the issue.

### Memory Size

The memory size for a Launch application is **1024 MB**.

### Runtime Environment

The Launch application runtime environment supports [Node.js version 20](https://nodejs.org/docs/latest-v20.x/api/index.html) to power its execution environment. Learn more about configuring the specific Package Manager [here](/docs/developers/launch/supported-package-managers).

### File System

The Launch Nuxt file system refers to the Launch application's ability to interact with the file system, including `read` and `write` operations. By default, Launch applications implement a read-only file system, with the exception of the designated `/tmp` directory, which facilitates `write` operations.

The `/tmp` directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note:** The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.

### Architecture

Contentstack Launch application supports the `x86_64` instruction set.

## Troubleshooting

This section provides solutions for some common issues faced with hosting Nuxt.

- **Setting up Cache revalidation with **[**Nuxt internationalization**](https://i18n.nuxtjs.org/docs/getting-started/usage#route-localization)** enabled**

  When using `i18n` in Nuxt, the URL structure changes to support multiple languages. For example, a path like `/about-us` may be localized under `/nl/about-us`.

  In such cases, it is important to [revalidate the cache](/docs/developers/launch/revalidate-cdn-cache) for both the localized URL (e.g., `/nl/about-us`) and the base URL (`/about-us`).

  You may also have a default locale configured for URLs without explicit locale paths. For example, visiting `/about-us` may return content localized in English by default. In this case, ensure you revalidate the cache for both `/about-us` and `/nl/about-us`.

  This is necessary because an internationalization-enabled Nuxt site internally makes requests to the localized URL (e.g., `/en/about-us`) even when the locale does not appear in the URL.

## Common questions

1. **Does Launch cache Nuxt SSR pages by default?**  
   By default, all pages except API routes are cached on Launch’s CDN when you deploy Nuxt as SSR.

2. **How can I customize caching per route in Nuxt on Launch?**  
   You can customize this behavior for every route by configuring it in the `nuxt.config.js` file under the `routeRules` directive of `defineNuxtConfig`.

3. **Why should I use `<a>` tags instead of `<NuxtLink>` for edge redirects/rewrites?**  
   It is a prerequisite to use native `<a>` tags instead of `<NuxtLink>` components within your Nuxt application to ensure that the client initiates a full-page request, allowing the rewrite or redirect rule to be properly executed at the edge.

4. **What are the execution limits for a Launch Nuxt application?**  
   The Launch application enforces a maximum execution timeout of **30 seconds** and the memory size for a Launch application is **1024 MB**.

nuxt-on-launch.md