---
title: "[Contentstack Launch] - About Launch Framework Support"
description: Details of the core features supported by Contentstack Launch across popular frontend frameworks, including a framework support matrix and limitations.
url: https://www.contentstack.com/docs/launch/launch-framework-support
product: Contentstack Launch
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - About Launch Framework Support

This page explains which core features Contentstack Launch supports across popular frontend frameworks, including a framework support matrix, Next.js minimum versions, and known limitations. It is intended for developers evaluating or implementing Launch hosting for specific frameworks and feature requirements.

## About Launch Framework Support

Contentstack Launch is a frontend hosting platform that streamlines the deployment process by supporting popular frameworks. This document provides details of the core features supported by Launch.

## Framework Support Matrix

The framework support matrix is a thorough outline of the following features that are supported by Launch across the popular frameworks:
- **Static Site Generation (SSG)**: Static Site Generation involves pre-building a website's pages at build time which results in faster loading speed.
- **Server-Side Rendering (SSR)**: Server-Side Rendering dynamically generates the web page content on the server and sends a fully rendered page to the client's browser. This results in faster initial page loads and improved Search Engine Optimization (SEO).
- **Client-Side Rendering (CSR)**: Client-Side Rendering involves rendering a web page content directly in the client's browser using JavaScript. This results in a reduced server load, and dynamic updates to the UI without needing to reload the entire page.
- **CDN Caching**: The CDN caches the response upon receiving a request for the first time and continues to serve the cached response from the CDN until it is purged.
- **On Demand CDN Cache Revalidation**: The On Demand CDN Cache Revalidation feature allows the user to [revalidate CDN cache](./revalidate-cdn-cache.md) whenever the content is modified to ensure visitors see the latest version without having to trigger a new deployment. This can be done using the [Automate Launch connector](/docs/developers/automation-hub-connectors/launch/).
- **Live Preview**: The [Live Preview](../../content-managers/author-content/about-live-preview.md) feature allows content managers to preview content without actually publishing it to an environment or saving the changes made to the content. The content changes you make reflect in the preview portal in real-time.
- **Serverless Functions**: By using Serverless Functions, you can execute backend functionality without managing a server.
- **Server Logs**: Server Logs are the application logs which are generated while processing requests on the server from the latest `Live` deployment.

## Launch Framework Support Matrix

| **Framework** | **SSG** | **SSR** | **CSR** | **CDN Caching** | **On Demand CDN Cache Revalidation** | **Live Preview** | **Serverless Functions** | **Server Logs** |
|---|---|---|---|---|---|---|---|---|
| [Next.js Pages Router](#next-js) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Next.js App Router](#next-js) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Gatsby](./gatsby-on-launch.md) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Generic CSR](./framework-agnostic-csr-hosting-on-launch.md) | check_circle | NA | check_circle | check_circle | NA | check_circle | NA | NA |
| [Create React App](./create-react-app-on-launch.md) | check_circle | NA | check_circle | check_circle | NA | check_circle | NA | NA |
| [Vue.js](./vue-on-launch.md) | check_circle | info | check_circle | check_circle | info | check_circle | NA | info |
| [Analog](./angular-on-launch.md) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Angular](./angular-on-launch.md) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Remix](./angular-on-launch.md) | cancel | check_circle | cancel | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Nuxt](./angular-on-launch.md) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Other SSR Frameworks](./host-any-ssr-framework.md) | NA | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |

## Next.js

Minimum required versions:
- [App Router](./nextjs-on-launch.md#app-router): Next.js version 13.4.6 and above.
- [Pages Router](./nextjs-on-launch.md#pages-router): Next.js version 12.2 and above.

## Limitations
- Launch offers a framework agnostic approach for [revalidating CDN cache](./revalidate-cdn-cache.md) using [Automate](/docs/developers/automation-hub-guides/about-automation-hub). Launch does not support any framework’s native mechanisms for On Demand CDN cache revalidation.
- Currently, Launch does not support direct integration with the Next.js App Router [data cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache). Launch offers alternative approaches to caching and revalidation built on established web standards.
- Launch does not support [On Demand Cache Revalidation with static ISR routes](./nextjs-on-launch.md#cache-revalidation-does-not-work-with-static-isr-routes).

**Additional Resource:** Learn more about [App Router](./nextjs-on-launch.md#next-js-app-router-cache-revalidation-on-launch) and [Pages Router](./nextjs-on-launch.md#next-js-on-demand-revalidation) On Demand Cache Revalidation support for [Next.js on Launch](./nextjs-on-launch.md).

## Common questions

### What does “On Demand CDN Cache Revalidation” mean in Launch?
The On Demand CDN Cache Revalidation feature allows the user to [revalidate CDN cache](./revalidate-cdn-cache.md) whenever the content is modified to ensure visitors see the latest version without having to trigger a new deployment.

### Does Launch support framework-native cache revalidation mechanisms?
Launch does not support any framework’s native mechanisms for On Demand CDN cache revalidation.

### What are the minimum required Next.js versions for Launch?
- [App Router](./nextjs-on-launch.md#app-router): Next.js version 13.4.6 and above.
- [Pages Router](./nextjs-on-launch.md#pages-router): Next.js version 12.2 and above.

### Does Launch integrate with the Next.js App Router data cache?
Currently, Launch does not support direct integration with the Next.js App Router [data cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache).