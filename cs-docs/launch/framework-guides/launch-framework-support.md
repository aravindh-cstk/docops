---
title: "About Launch Framework Support"
description: "Learn about the popular frameworks supported by Contentstack Launch."
url: /launch/launch-framework-support
---

# About Launch Framework Support

## About Launch Framework Support

Contentstack Launch is a frontend hosting platform that streamlines the deployment process by supporting popular frameworks. This document provides details of the core features supported by Launch.

## Framework Support Matrix

The framework support matrix is a thorough outline of the following features that are supported by Launch across the popular frameworks:

-   **Static Site Generation (SSG)**: Static Site Generation involves pre-building a website's pages at build time which results in faster loading speed.
-   **Server-Side Rendering (SSR)**: Server-Side Rendering dynamically generates the web page content on the server and sends a fully rendered page to the client's browser. This results in faster initial page loads and improved Search Engine Optimization (SEO).
-   **Client-Side Rendering (CSR)**: Client-Side Rendering involves rendering a web page content directly in the client's browser using JavaScript. This results in a reduced server load, and dynamic updates to the UI without needing to reload the entire page.
-   **CDN Caching**: The CDN caches the response upon receiving a request for the first time and continues to serve the cached response from the CDN until it is purged.
-   **On Demand CDN Cache Revalidation**: The On Demand CDN Cache Revalidation feature allows the user to [revalidate CDN cache](/docs/launch/revalidate-cdn-cache) whenever the content is modified to ensure visitors see the latest version without having to trigger a new deployment. This can be done using the [Automate Launch connector](/docs/agent-os/launch/).
-   **Live Preview**: The [Live Preview](/docs/headless-cms/about-live-preview) feature allows content managers to preview content without actually publishing it to an environment or saving the changes made to the content. The content changes you make reflect in the preview portal in real-time.
-   **Serverless Functions**: By using Serverless Functions, you can execute backend functionality without managing a server.
-   **Server Logs**: Server Logs are the application logs which are generated while processing requests on the server from the latest Live deployment.

## Launch Framework Support Matrix

| **Framework** | **SSG** | **SSR** | **CSR** | **CDN Caching** | **On Demand CDN Cache Revalidation** | **Live Preview** | **Serverless Functions** | **Server Logs** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Next.js Pages Router](#next-js) | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |
| [Next.js App Router](#next-js) | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |
| [Gatsby](/docs/launch/gatsby-on-launch) | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |
| [Generic CSR](/docs/launch/framework-agnostic-csr-hosting-on-launch) | check\_circle | NA | check\_circle | check\_circle | NA | check\_circle | NA | NA |
| [Create React App](/docs/launch/create-react-app-on-launch) | check\_circle | NA | check\_circle | check\_circle | NA | check\_circle | NA | NA |
| [Vue.js](/docs/launch/vue-on-launch) | check\_circle | info | check\_circle | check\_circle | info | check\_circle | NA | info |
| [Analog](/docs/launch/analog-on-launch) | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |
| [Angular](/docs/launch/angular-on-launch) | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |
| [Astro](/docs/launch/astro-on-launch) | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |
| [Remix](/docs/launch/angular-on-launch) | cancel | check\_circle | cancel | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |
| [Nuxt](/docs/launch/angular-on-launch) | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |
| [Other SSR Frameworks](/docs/launch/host-any-ssr-framework/) | NA | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle | check\_circle |

## Next.js

Minimum required versions:

-   [App Router](/docs/launch/nextjs-on-launch#app-router): Next.js version 13.4.6 and above.
-   [Pages Router](/docs/launch/nextjs-on-launch#pages-router): Next.js version 12.2 and above.

## Limitations

-   Launch offers a framework agnostic approach for [revalidating CDN cache](/docs/launch/revalidate-cdn-cache) using [Automate](/docs/agent-os/what-is-contentstack-agent-os). Launch does not support any framework’s native mechanisms for On Demand CDN cache revalidation.
-   Currently, Launch does not support direct integration with the Next.js App Router [data cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache). Launch offers alternative approaches to caching and revalidation built on established web standards.
-   Launch does not support [On Demand Cache Revalidation with static ISR routes](/docs/launch/nextjs-on-launch#cache-revalidation-does-not-work-with-static-isr-routes).

**Additional Resource:** Learn more about [App Router](/docs/launch/nextjs-on-launch#next-js-app-router-cache-revalidation-on-launch) and [Pages Router](/docs/launch/nextjs-on-launch#next-js-on-demand-revalidation) On Demand Cache Revalidation support for [Next.js on Launch](/docs/launch/nextjs-on-launch).
