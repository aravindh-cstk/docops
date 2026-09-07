---
title: "Nuxt on Launch"
description: "Learn more about hosting a project using the \"Nuxt\" framework option in Contentstack Launch."
url: /launch/nuxt-on-launch
uid: blt9b57d87f63d3f8d8
---

# Nuxt on Launch

## Nuxt on Launch

Nuxt is a free and open-source framework that offers an intuitive and extendable way to create a performant and production-grade full-stack web applications and websites using Vue.js.

## Supported Features in Contentstack Launch for Nuxt

### Rendering Strategies

Nuxt supports multiple rendering strategies, such as **Universal Rendering**, **Hybrid Rendering**, **Prerendering**, **Server Routes**, and **Route Middleware**/**Server Middleware**, all of which are compatible with Contentstack Launch:

1.  #### Universal Rendering

    In the [Universal Rendering](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering) mode, Nuxt renders HTML on the server for each request, similar to traditional Server-Side Rendering (SSR). Once the HTML is delivered, Vue.js hydrates the page in the browser, enabling interactivity. This approach **improves load time**, **enhances SEO**, and **maintains dynamic client-side behavior**.

2.  #### Pre-rendering

    With [Pre-rendering](https://nuxt.com/docs/4.x/getting-started/prerendering), specific routes are generated at build time and served as static files via the CDN. This is ideal for pages with non-personalized content that doesn’t change frequently, such as blog posts or marketing pages.

    **Configuration Example**:

    ```
    nitro: {
      prerender: {
        crawlLinks: false,
        routes: ["/about"],
      },
    }
    ```

3.  #### Hybrid Rendering

    [Hybrid Rendering](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering) allows different caching rules per route using **Route Rules** and decides how the server should respond to a new request on a given URL.

    **Note:** The s-maxage cache header is required when using ISR. Ensure that the values of isr and s-maxage are the same.

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

4.  #### Server Routes

    By default, Launch **does not cache** responses for [Server Routes](https://nuxt.com/docs/guide/directory-structure/server#server-routes) defined under the ~/server/api directory. To provide custom caching behavior to the server route responses defined under the ~/server/api directory, use the Cache-Control headers in the nuxt.config.js file under the routeRules section.

    However, Launch does **cache responses for all other server routes**, defined under the ~/server/routes directory. To provide custom caching behavior to the server route responses defined under the ~/server/routes directory, use the Cache-Control headers in the nuxt.config.js file under the routeRules section.

    **Example**:

    For a server route placed at the path ~/server/server-route, we can add Cache-Control headers as follows:

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

5.  #### Route Middleware/Server Middleware

    While using [middleware](https://nuxt.com/docs/guide/directory-structure/middleware) for user-specific logic such as authentication or personalization, it is important to note that the CDN caching may serve pages **before** the middleware executes. This can result in unintended exposure of protected or personalized content. To ensure secure and correct behavior, such logic should be handled at the edge using the [Edge Functions](/docs/launch/edge-functions) on Launch.


### Caching

By default, all pages except API routes are cached on Launch’s CDN when you deploy Nuxt as SSR. This means that the subsequent requests to the same page will be cached, and the page will not be regenerated.

Check out the [Caching Guide for Contentstack Launch](/docs/launch/caching-guide-for-contentstack-launch/) for more information.

However, you can customize this behavior for every route by configuring it in the nuxt.config.js file under the routeRules directive of defineNuxtConfig.

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

1.  **Time-Based Revalidation**

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

2.  **On-Demand Revalidation**

    You can trigger on-demand revalidation using Automate: [Revalidate CDN cache using Automate](/docs/launch/revalidate-cdn-cache).

    **Note:** Ensure you revalidate the cache for the data endpoint that backs the content, in addition to the page URL. This is important if your page uses cached API endpoints for data delivery. Example: domain/api/api-route


**Additional Resource:** Refer to the [Quick Start Guide with Nuxt](/docs/launch/quick-start-nuxt) documentation for a step-by-step walkthrough to deploy your Nuxt project on Launch as an SSR-based application.

## Setting up Edge Redirects and Rewrites in Nuxt on Launch

When configuring [Edge Rewrites](/docs/launch/edge-url-rewrites) or [Edge Redirects](/docs/launch/edge-url-redirects) in Contentstack Launch—either via launch.json or using [Edge Functions](/docs/launch/edge-functions), it is a prerequisite to use native <a> tags instead of <NuxtLink> components within your Nuxt application.

This ensures that the client initiates a full-page request, allowing the rewrite or redirect rule to be properly executed at the edge.

**Note:** <NuxtLink> performs client-side navigation, which bypasses the edge logic applied at the CDN level.

## Launch Nuxt Server Configuration

Refer to the [Server Configuration](/docs/launch/server-configuration) document to learn about the Nuxt server configuration.

## Troubleshooting

This section provides solutions for some common issues faced with hosting Nuxt.

-   **Setting up Cache revalidation with** [**Nuxt internationalization**](https://i18n.nuxtjs.org/docs/getting-started/usage#route-localization) **enabled**

    When using i18n in Nuxt, the URL structure changes to support multiple languages. For example, a path like /about-us may be localized under /nl/about-us.

    In such cases, it is important to [revalidate the cache](/docs/launch/revalidate-cdn-cache) for both the localized URL (e.g., /nl/about-us) and the base URL (/about-us).

    You may also have a default locale configured for URLs without explicit locale paths. For example, visiting /about-us may return content localized in English by default. In this case, ensure you revalidate the cache for both /about-us and /nl/about-us.

    This is necessary because an internationalization-enabled Nuxt site internally makes requests to the localized URL (e.g., /en/about-us) even when the locale does not appear in the URL.
