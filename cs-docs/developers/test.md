---
title: Test Tooltip with Link
description: Framework support matrix and limitations for Contentstack Launch across popular frameworks.
url: https://www.contentstack.com/docs/developers/test
product: Contentstack Launch
doc_type: reference
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# Test Tooltip with Link

This page describes Contentstack Launch framework feature support (via a support matrix), minimum Next.js versions, and known limitations. It is intended for developers evaluating or implementing Launch with specific frameworks and should be used when confirming which features are available for a given framework.

## Item 1

### Article section

#### Heading

Test Heading

#### Content

Contentstack Launch is a frontend hosting platform that streamlines the deployment process by supporting popular frameworks. This document provides details of the core features supported by Launch.

## Framework Support Matrix

The framework support matrix is a thorough outline of the following features that are supported by Launch across the popular frameworks:
- **Static Site Generation (SSG)**: Static Site Generation involves pre-building a website's pages at build time which results in faster loading speed.
- **Server-Side Rendering (SSR)**: Server-Side Rendering dynamically generates the web page content on the server and sends a fully rendered page to the client's browser. This results in faster initial page loads and improved Search Engine Optimization (SEO).
- **Client-Side Rendering (CSR)**: Client-Side Rendering involves rendering a web page content directly in the client's browser using JavaScript. This results in a reduced server load, and dynamic updates to the UI without needing to reload the entire page.
- **CDN Caching**: The CDN caches the response upon receiving a request for the first time and continues to serve the cached response from the CDN until it is purged.
- **On Demand CDN Cache Revalidation**: The On Demand CDN Cache Revalidation feature allows the user to [revalidate CDN cache](./launch/revalidate-cdn-cache.md) whenever the content is modified to ensure visitors see the latest version without having to trigger a new deployment. This can be done using the [Automate Launch connector](/docs/developers/automation-hub-connectors/launch/).
- **Live Preview**: The [Live Preview](../content-managers/author-content/about-live-preview.md) feature allows content managers to preview content without actually publishing it to an environment or saving the changes made to the content. The content changes you make reflect in the preview portal in real-time.
- **Serverless Functions**: By using Serverless Functions, you can execute backend functionality without managing a server.
- **Server Logs**: Server Logs are the application logs which are generated while processing requests on the server from the latest `Live` deployment.

## Launch Framework Support Matrix

| **Framework** | **SSG** | **SSR** | **CSR** | **CDN Caching** | **On Demand CDN Cache Revalidation** | **Live Preview** | **Serverless Functions** | **Server Logs** |
|---|---|---|---|---|---|---|---|---|
| [Next.js Pages Router](#next-js) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Next.js App Router](#next-js) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Gatsby](./launch/gatsby-on-launch.md) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Generic CSR](./launch/framework-agnostic-csr-hosting-on-launch.md) | check_circle | NA | check_circle | check_circle | NA | check_circle | NA | NA |
| [Create React App](./launch/create-react-app-on-launch.md) | check_circle | NA | check_circle | check_circle | NA | check_circle | NA | NA |
| [Vue.js](./launch/vue-on-launch.md) | check_circle | info | check_circle | check_circle | info | check_circle | NA | info |
| [Angular](./launch/angular-on-launch.md) | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |
| [Other SSR Frameworks](./launch/host-any-ssr-framework.md) | NA | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle | check_circle |

**Note**: Learn more about how to [host any SSR project on Launch](./launch/host-any-ssr-framework.md).

## Next.js

Minimum required versions:
- [App Router](./launch/nextjs-on-launch.md#app-router): Next.js version 13.4.6 and above.
- [Pages Router](./launch/nextjs-on-launch.md#pages-router): Next.js version 12.2 and above.

## Limitations
- Launch offers a framework agnostic approach for [revalidating CDN cache](./launch/revalidate-cdn-cache.md) using [Automate](/docs/developers/automation-hub-guides/about-automation-hub). Launch does not support any framework’s native mechanisms for On Demand CDN cache revalidation.
- Currently, Launch does not support direct integration with the Next.js App Router [data cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache). Launch offers alternative approaches to caching and revalidation built on established web standards.
- Launch does not support [On Demand Cache Revalidation with static ISR routes](./launch/nextjs-on-launch.md#cache-revalidation-does-not-work-with-static-isr-routes).

**Additional Resource:** Learn more about [App Router](./launch/nextjs-on-launch.md#next-js-app-router-cache-revalidation-on-launch) and [Pages Router](./launch/nextjs-on-launch.md#next-js-on-demand-revalidation) On Demand Cache Revalidation support for [Next.js on Launch](./launch/nextjs-on-launch.md).

## Common questions

### What do `check_circle`, `NA`, and `info` indicate in the matrix?
They are the values shown in the Launch Framework Support Matrix cells for each framework and feature.

### Where can I learn more about hosting SSR projects on Launch?
Use the link in the note: [host any SSR project on Launch](./launch/host-any-ssr-framework.md).

### What are the minimum supported Next.js versions for Launch?
Minimum required versions are listed under **Next.js** for [App Router](./launch/nextjs-on-launch.md#app-router) and [Pages Router](./launch/nextjs-on-launch.md#pages-router).

### Does Launch support Next.js native On Demand CDN cache revalidation mechanisms?
No. Under **Limitations**, Launch does not support any framework’s native mechanisms for On Demand CDN cache revalidation.