---
title: "[Contentstack Launch] - Next.js on Launch"
description: Documentation for deploying and running Next.js (App Router and Pages Router) on Contentstack Launch, including supported features, limitations, caching/revalidation approaches, specifications, and troubleshooting.
url: https://www.contentstack.com/docs/developers/launch/nextjs-on-launch
product: Contentstack Launch
doc_type: developer-guide
audience:
  - developers
  - devops
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Next.js on Launch

This page explains how Next.js works on Contentstack Launch, including supported features for App Router and Pages Router, known limitations, recommended caching and revalidation approaches, platform specifications, and troubleshooting guidance. It is intended for developers deploying or operating Next.js applications on Launch and should be used when configuring routing, caching, revalidation, and runtime expectations.

[Next.js](https://nextjs.org/docs#what-is-nextjs) is an open-source React-based framework that provides a hybrid static/server-side rendered model. Launch supports Next.js and its two different routing mechanisms, **App Router** and **Pages Router**.

## App Router

Launch supports the following features of Next.js out-of-the-box for App Router:
- [Nested Routes & Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Streaming & Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense)
- [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

**Note:** Launch supports the [Next.js App Router](https://nextjs.org/docs/app) version 13.4.6 and above. Please ensure that you have the required version installed.

### Limitations

Launch does not yet support the following features of Next.js:
- [Data Cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache): Next.js app router data cache persists the result of data fetches across incoming server requests and deployments. Launch does not currently support direct integration with the Next.js app router data cache. Consequently, [Time-based Revalidation](https://nextjs.org/docs/app/building-your-application/caching#time-based-revalidation) and[On Demand Revalidation](https://nextjs.org/docs/app/building-your-application/caching#on-demand-revalidation) using [`revalidatePath()`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) /[`revalidateTag()`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag) will not work.
- [Edge Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware): Middleware functions are executed on the server side in Launch, and not on the edge.
- [Edge Routes Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#edge-and-nodejs-runtimes): Route handlers are executed on the server side in Launch, and not on the edge.

Launch offers alternative approaches to caching and revalidation built on established web standards. [Learn more here](#next-js-app-router-cache-revalidation-on-launch).

[Launch Edge Functions](/docs/developers/launch/edge-functions) allow you to execute code at the edge, closer to your users, for improved performance and scalability.

**Additional Resource:** Learn how the Launch [Edge Functions](/docs/developers/launch/edge-functions) [handle the Next.js RSC issues on Launch](/docs/developers/launch/handling-nextjs-rsc-issues-on-launch).

Data Cache depends on a significant change in the underlying hosting platform. In addition, we have observed that Data Cache is inadequate for several enterprise use cases that require customizing the underlying cache strategy using custom cache headers. Launch offers alternate caching strategies based on accepted web standards that also allow you to maintain platform independence.

### Next.js App Router Cache Revalidation on Launch

#### Static Rendering

Routes can be rendered at build time and cached on the CDN. This is useful when a route fetches data that is not personalized to the user and can be known at build time, such as a Blog Post or a Product Page.

With App Router, static rendering is automatically achieved by defining a page with cached fetch handlers, or by configuring the [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config) appropriately.

For such routes, if the source data changes, triggering a new deployment would be required to rebuild and cache the route with the updated data.

If the data for a route is expected to change frequently, Launch also allows [enabling time-based and on-demand cache revalidation](#enabling-cache-revalidation-on-launch).

#### Enabling Cache Revalidation on Launch

For routes with frequently changing source data, triggering a full deployment every time data updates may not be the optimal approach due to potentially lengthy build times, especially for websites with a large number of pages. Launch addresses this challenge by offering different strategies for cache revalidation for such routes.

This requires[opting out of Full Route Cache](https://nextjs.org/docs/app/building-your-application/caching#opting-out-2) by using the `dynamic = 'force-dynamic'` or `revalidate = 0` [route segment config options](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#options) in the Page, Layout or Route Handler file.

**Example:**

```
// layout.js | page.js | route.js

export const dynamic = 'force-dynamic';
// OR
export const revalidate = 0

export default function MyComponent() {}
```

Opting out of Full Route cache and setting [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) headers using `next.config.js` file allows Launch to cache the pages as necessary on the CDN.

##### Time-based Revalidation

Time-based Revalidation can be achieved for a route by setting the[Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) response header for the route in the `next.config.js` file. The Cache-Control headers determine how long and where your page can be cached.

**Example:**

```
// next.config.js

const nextConfig = {
  async headers() {
    return [
      {
        source: "/blogs/:id",
        headers: [
          {
              key: "cache-control",
              value: "max-age=0, s-maxage=86400, stale-while-revalidate",
		// The browser should validate the response with CDN, but the CDN can serve cached responses for 86400 seconds(24 hours), after which stale response will be returned while also triggering a revalidation in the background.
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

##### On Demand Revalidation

Similar to time-based revalidation, first, set up the appropriate cache headers on the route to cache it on the CDN.

Next, set the `buildId` of the Next.js app to the value of the latest live Launch deployment `uid`. This can be done by adding the following code snippet to your `next.config.js`. This step allows Launch to detect the correct version of the Next.js build to be revalidated.

**Example:**

```
// next.config.js

const nextConfig = {
  generateBuildId: () => {
    return  process.env.CONTENTSTACK_LAUNCH_DEPLOYMENT_UID
  },
};

module.exports = nextConfig;

```

Finally, the desired routes can then be revalidated on demand by following the steps detailed in Launch's [Revalidate CDN Cache](/docs/developers/launch/revalidate-cdn-cache) feature.

## Pages Router

Launch supports the following features of Next.js out-of-the-box for Pages Router:
- [API Routes](https://nextjs.org/docs/api-routes/introduction)
- [SSR (Server Side Rendering)](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
- [ISR (Incremental Static Regeneration)](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)

**Note:** Use the Next.js package version 12.2 or above to deploy a [Pages Router](https://nextjs.org/docs/pages) based Next.js site on Launch.

### Limitations

Launch does not yet support the following features of Next.js:
- [Edge Middleware](https://nextjs.org/docs/advanced-features/middleware): Middleware functions are executed on the server side in Launch, and not on the edge.
- [Edge API Routes](https://nextjs.org/docs/api-routes/edge-api-routes): Edge API routes are executed on the server side in Launch, and not on the edge.
- [On-demand Revalidation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation): Currently, Launch does not support Next.js On-Demand Revalidation using the `res.revalidate()` method, whereas it supports [revalidating CDN cache](/docs/developers/launch/revalidate-cdn-cache) in a framework-agnostic way. Please refer to [Next.js On-Demand Revalidation](#next-js-on-demand-revalidation) for more details.

**Note:** Launch offers [Edge Functions](/docs/developers/launch/edge-functions) as an alternative to Edge Middleware and Edge API Routes for execution of code at the edge.

### Next.js On-Demand Revalidation

On-Demand Revalidation for Next.js can be achieved in Contentstack Launch by using SSR with cache headers. SSR with cache headers allow you to serve dynamic content that changes frequently while still benefiting from caching at the browser or CDN level. You can use different cache-control directives to specify how long and where the content can be cached and how it can be revalidated.

Revalidating cache in the idiomatic Next.js way depends on major architectural implementation details on the hosting platform. Depending on such architecture dependent framework features may add a lock-in risk with the platform. Our approach gives you the ability to leverage similar caching benefits, while maintaining platform independence of your digital property.

#### Steps for Execution

- To update your code for the SSG page from using `getStaticProps` to `getServerSideProps` (SSR) using cache headers, follow the steps below:Replace `getStaticProps` with `getServerSideProps`Replace the ``getStaticProps`` function with the ``getServerSideProps`` function in your page component. The ``getStaticProps`` function is used for SSG pages, while the ``getServerSideProps`` function is used for SSR pages..
- Set cache-control headers in the res objectSet the appropriate cache-control headers in your response object inside the ``getServerSideProps`` function. You can use the ``res.setHeader`` method to do this. The cache-control headers determine how long and where your page can be cached by browsers, intermediate proxies, and CDN.

**Example for using SSR with cache headers:**

```
// index.js
import React from 'react';

export async function getServerSideProps(context) {
  // Fetch data from an API
  const response = await fetch('https://example.com/api/data');
  const data = await response.json();

  // Set cache-control header to "max-age=0, s-maxage=86400"
  // This means that the browser and any other user agents would not use the cache but would be forced to revalidate
  // but the response can be cached for a duration of 24 hours at the CDN without validating it with the server
  context.res.setHeader('cache-control', 'max-age=0, s-maxage=86400'
);

  // Return the data as props
  return { props: { data } };
}

// The page component receives the data as props
function IndexPage({ data }) {
  return (

# Index Page

      This is an SSR page that uses cache headers.

        {data.map((item) => (
- {item.name}

        ))}

  );
}

export default IndexPage;
```

- Set `buildId` to the latest live Launch deployment:In order to revalidate the CDN cache of ``_next/data`` for a deployment, Launch requires the Next.js application to set the generation of `buildId` to the value of the latest live Launch deployment. This can be done by adding the following code snippet to your ``next.config.js``.

```
// next.config.js

module.exports = {
  generateBuildId: () => {
    return  process.env.CONTENTSTACK_LAUNCH_DEPLOYMENT_UID
  },
}
```

**Additional Resource:** Please refer to the [Quick Start Guide with Next.js](/docs/developers/launch/quick-start-nextjs/) documentation for a step-by-step walkthrough to deploy a Next.js site on Launch.

## Launch Next.js Application Specifications

### Execution Timeout

The Launch application enforces a maximum execution timeout, requiring it to respond to any incoming HTTP request within **30** seconds. If the application fails to respond within this duration, the request will time out, resulting in a response with an HTTP status error code **500**.

**Note: **For error code **500**, please refer to the timed-out errors in the **Server Logs** tab to understand and address the issue.

### Memory Size

The memory size for a Launch application is **1024 MB**.

### Runtime Environment

The Launch runtime environment leverages [**Node.js**](/docs/developers/launch/supported-nodejs-versions) to power its execution environment.

### File System

The Launch Next.js file system refers to the Launch application's ability to interact with the file system, including `read` and `write` operations. By default, Launch applications implement a read-only file system, with the exception of the designated `/tmp` directory, which facilitates `write` operations.

The `/tmp` directory is a temporary file system accessible to every Launch serverless runtime, offering up to **500 MB** of storage.

**Note: **The data stored in `/tmp` is non-persistent and is automatically deleted upon request completion.

### Architecture

Launch application supports the `x86_64` instruction set.

## Troubleshooting

This section provides solutions for some common issues faced with hosting Next.js

### Cache revalidation does not work with Next.js internationalization enabled

Using i18n for Next.js changes the URL structure of your website to support multiple languages. For e.g. a path like `/about-us` may be nested under the localized path `/fr-FR/about-us`. In such cases, it is important to [revalidate](/docs/developers/launch/revalidate-cdn-cache) the URL along with the locale, i.e. `/fr-FR/about-us`.

You may also have a default locale configured for URLs without locales. For e.g. visiting `/about-us` may return content localized by default in en-US. In this case, it is important to revalidate cache for **both** `/about-us` and `/en-US/about-us`. This is because an internationalization enabled Next.js website internally makes calls to the localized URL (`/en-US/about-us`) even when the locale does not appear in the URL.

### Cache revalidation does not work with static ISR routes

[ISR (Incremental Static Regeneration)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) is a rendering mode in Next.js that allows you to generate static pages once and revalidate it (on-demand or time based).

Static routes are pages that use [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props) and do not have [dynamic path segments](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes).

Launch does not support revalidating cache on ISR routes. Please use the alternative [SSR with cache headers](#next-js-on-demand-revalidation) approach instead.

### Images lose their transparency, appear blocky, or display unwanted backgrounds

We recommend using the [Contentstack Image API](/docs/developers/apis/image-delivery-api) for serving images. This API allows you to perform transformations at the Edge, supports larger images, and accommodates many image formats. When using the Next.js Image API, it's possible that Next.js converts WebP images to JPEG. JPEG does not support transparency, which causes this issue.

#### Steps to Investigate and Fix the Issue:

- **Investigate the Content-Type Header:**Open your browser's developer tools and locate the image request in the network tab.
- Find the "Content-Type" header. If the value is "image/jpeg", the image is being transformed to JPEG.
- **Add a Simple Code Fix:**Pass the `fm=webp` parameter to the image URL. This instructs Next.js to send the image in WebP format.

**Example:**
```
https://www.yoursite.co/_next/image?q=75&w=300&fm=webp
```

## Common questions

### Which Next.js versions are supported on Launch?
For App Router, Launch supports the Next.js App Router version 13.4.6 and above. For Pages Router, use the Next.js package version 12.2 or above.

### Does Launch support Next.js Data Cache and `revalidatePath()` / `revalidateTag()`?
Launch does not currently support direct integration with the Next.js app router data cache, so Time-based Revalidation and On Demand Revalidation using `revalidatePath()` / `revalidateTag()` will not work.

### How can I do on-demand revalidation on Launch?
The page describes using CDN cache revalidation via Launch’s [Revalidate CDN Cache](/docs/developers/launch/revalidate-cdn-cache) feature, including setting `buildId` to the latest live Launch deployment `uid`.

### What are the runtime limits for a Next.js app on Launch?
The Launch application enforces a maximum execution timeout of 30 seconds, memory size is 1024 MB, and the `/tmp` directory provides up to 500 MB of temporary non-persistent storage.