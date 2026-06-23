---
title: "[Contentstack Launch] - Caching Guide for Contentstack Launch"
description: Caching Guide for Contentstack Launch
url: https://www.contentstack.com/docs/launch/caching-guide-for-contentstack-launch
product: Contentstack Launch
doc_type: guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Caching Guide for Contentstack Launch

This page explains how caching works in Contentstack Launch, how to configure caching behavior using HTTP headers, and recommended best practices. It is intended for developers configuring performance, cache control, and revalidation behavior for Launch sites and edge-delivered content.

## Caching Guide for Contentstack Launch

Caching is essential for improving performance, reducing latency, and minimizing load on your origin server. Contentstack Launch uses a CDN to cache content at the edge, enabling fast and scalable content delivery.

This guide explains how caching works in Launch, how to configure it using headers, and the best practices for cache control and revalidation.

## How Caching Works in Launch

Launch automatically caches content at the [CDN](https://developer.mozilla.org/en-US/docs/Glossary/CDN) level based on HTTP cache headers. Here's how different types of content are handled:

- **Static Assets** (for example, images, JS, CSS): Automatically cached with long TTLs.
- **HTML Pages:** Can be cached using [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) headers.
- **APIs or Dynamic Content:** Can be cached or bypassed based on your configuration.

**Note:**

- The same caching behavior applies to external URLs fetched via Launch [Edge Rewrites](./edge-url-rewrites.md), [Redirects](./edge-url-redirects.md), or [Edge Functions](./edge-functions.md). These responses are cached at the CDN edge based on the `Cache-Control` headers returned by the external server.
- Launch does not support **Next.js's ISR** or **App Router Data Cache**. Refer to the "*Does Launch support a data cache like Next.js App Router?*" query in the [Launch FAQs](/docs/faqs#launch-faqs) for alternatives.

## General Caching Strategies

- ### Static Content

Content built during deployment is served as static files.

- Recommended for content that remains mostly unchanged over time.
- Automatically cached by the CDN for fast delivery.

- ### Dynamic Content with Cache Headers

Control caching behavior through HTTP response headers.

**Example**:

```
Cache-Control: public, max-age=0, s-max-age=60, stale-while-revalidate=30
```

This instructs the CDN to:

Cache content at the edge for **60 seconds** (`s-max-age=60`).
- Allow serving stale content while revalidating for **30 seconds** (`stale-while-revalidate=30`).
- Always revalidate content at the browser level (`max-age=0`).

**Additional Resource:** For a Next.js specific guide, follow [Next.js on Launch.](./nextjs-on-launch.md)

## Cache Revalidation

- ### Time-Based Revalidation

Use `Cache-Control` headers to define caching duration and revalidation behavior.

**Example**:

```
Cache-Control: public, max-age=0, s-max-age=300, stale-while-revalidate=60
```

Cache content at the CDN for **5 minutes** (`s-max-age=300`).
- Allow stale content to be served for **1 minute** while revalidating (`stale-while-revalidate=60`).
- Instruct browsers to always revalidate with the CDN (`max-age=0`).

- ### On-Demand Revalidation

Trigger revalidation dynamically using one of the following methods:Launch provides [deploy hooks](./deploy-hooks.md) to trigger redeployments on demand.

- Launch supports a framework-agnostic approach to on-demand cache revalidation through [Automate](../../agent-os/launch-trigger.md).
- If you're using Next.js, follow the [Next.js guide on Launch](./nextjs-on-launch.md#enabling-cache-revalidation-on-launch) to opt out of full-route caching. Alternatively, use `Cache-Control` headers for framework-agnostic caching, and let Automate handle the revalidation.

## Disabling Cache

To disable caching completely, set the header as follows:

```
Cache-Control: no-store
```

This ensures that the CDN or browser never caches the response.

Disabling cache can significantly impact performance and increase load on your origin server. Use it only when necessary, such as in the following cases:

- Pages that must always reflect real-time data.
- Specific paths where caching would result in incorrect or outdated content.**Note:**Avoid disabling cache globally. Instead, apply it selectively and only when absolutely required.
- For most scenarios, use short TTLs or `stale-while-revalidate` for better performance and flexibility.

## Purging Cache

Cache purging methods include:

- Redeploying your site (invalidates CDN cache).
- Using [Automate](../../agent-os/launch-trigger.md) to trigger redeploy or webhook.
- Setting short TTLs for dynamic content.

## Best Practices

- Prefer Server-Side Rendering (SSR) with custom `Cache-Control` headers for most use cases. SSR enables [on-demand CDN cache revalidation](./revalidate-cdn-cache.md) and handles dynamic routes efficiently.
- Use SSG only for simple sites with content that changes infrequently.
- Always define explicit `Cache-Control` headers for dynamic content to ensure predictable caching behavior.
- Avoid placing another CDN in front of Launch to prevent cache conflicts.
- Monitor cache status using response headers such as `x-cache` or `cf-cache-status`.

**Additional Resources:**

- [Next.js on Launch Documentation](./nextjs-on-launch.md)
- [Revalidate CDN Cache](./revalidate-cdn-cache.md)

## Common questions

### How do I disable caching for a response in Launch?
Set the response header to:
`Cache-Control: no-store`

### How do I control CDN caching duration for HTML pages?
Use `Cache-Control` headers (for example, `s-max-age`) to define how long content is cached at the CDN edge.

### Does Launch cache external URLs used by Edge Rewrites, Redirects, or Edge Functions?
Yes. These responses are cached at the CDN edge based on the `Cache-Control` headers returned by the external server.

### What should I use instead of Next.js ISR or App Router Data Cache on Launch?
Launch does not support **Next.js's ISR** or **App Router Data Cache**. Refer to the "*Does Launch support a data cache like Next.js App Router?*" query in the [Launch FAQs](/docs/faqs#launch-faqs) for alternatives.