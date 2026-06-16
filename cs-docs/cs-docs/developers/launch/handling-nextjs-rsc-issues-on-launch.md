---
title: "[Contentstack Launch] - Handling Next.js RSC Issues on Launch"
description: This guide explains how to address issues with the Next.js React Server Components (RSC) when using Next.js with App Router on Contentstack Launch—particularly when requests are routed through a CDN.
url: https://www.contentstack.com/docs/developers/launch/handling-nextjs-rsc-issues-on-launch
product: Contentstack Launch
doc_type: troubleshooting-guide
audience:
  - developers
  - devops
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Handling Next.js RSC Issues on Launch

This page explains how to identify and fix cases where Next.js App Router requests on Contentstack Launch return React Server Component (RSC) payloads instead of HTML, especially when traffic is routed and cached through a CDN. It is intended for developers operating Next.js on Launch who need to preserve CDN caching while preventing incorrect RSC responses.

Handling Next.js RSC Issues on Launch

This guide explains how to address issues with the **Next.js React Server Components (RSC)** when using [Next.js with App Router on Contentstack Launch](/docs/developers/launch/nextjs-on-launch#app-router)—particularly when requests are routed through a CDN.

## Identifying the Problem
When Next.js with App Router runs behind a CDN (such as the Launch CDN), you may encounter a problem where **React Server Component payloads** are returned instead of the expected **HTML pages**.

### Triggers for RSC Payload Error
- A client-side navigation triggers a request containing the `?_rsc=...` query parameter and the `Rsc: 1` header.
- A redirect occurs.
- The CDN caches the **wrong response** (RSC payload) because the query parameter is missing after the redirect.

### How the Issue Happens
- A client-side navigation request is made to a page (for example, `/some-page?_rsc=abcd`) with the header `Rsc: 1`.
- Next.js tries to fetch the RSC payload, adding the `_rsc` query parameter and the `Rsc` header.
- In Next.js, a redirect is set up from `/some-page` to `/my-rsc-page`.
- The client receives a redirect response to `/my-rsc-page`.
- During the redirect:The client **keeps** the `Rsc: 1` header.
- The client **drops** the `_rsc` query parameter.
- When Next.js receives the redirected request, it sees the `Rsc: 1` header and thus returns the RSC payload instead of the expected HTML page, even though the `_rsc` query parameter is missing from the URL.
- If `/my-rsc-page` is cached by the CDN (with cache control headers), the **wrong response** is stored.
Even later, valid requests **without** the `Rsc: 1` header or `_rsc` parameter can end up receiving the cached RSC payload, thus breaking the page.

### Why Not Disable Caching?
While disabling caching avoids this issue, it forces all requests to hit your origin server, increasing latency and reducing performance.

A **smarter approach** is to modify only the problematic requests so responses can still be safely cached at the CDN.

## Solution: Use Launch Edge Functions
Fix the issue by using a [Launch Edge Function](/docs/developers/launch/edge-functions/) that removes the `Rsc: 1` header when the corresponding `_rsc` query parameter is missing.

### Implementing the Edge Function Solution
- In the `/functions` directory of your repository, create a file named `[proxy].edge.js`.
- Add the following code to check and modify requests to prevent the RSC issue:
```
// [proxy].edge.js
const RSC_AFFECTED_PATHS = ['/my-rsc-page', '/another-page'];
const RSC_HEADER = 'rsc';
const RSC_HEADER_VALUE = '1';
const RSC_QUERY_PARAM = '_rsc';

export default function handler(request, context) {
  const parsedUrl = new URL(request.url);
  const route = parsedUrl.pathname;
  const rscQueryParamExists = !!parsedUrl.searchParams.get(RSC_QUERY_PARAM);
  const rscHeaderExists = request.headers.get(RSC_HEADER) === RSC_HEADER_VALUE;
  const isAffectedPath = RSC_AFFECTED_PATHS.indexOf(route) > -1;

  if (isAffectedPath && !rscQueryParamExists && rscHeaderExists) {
    const modifiedRequest = new Request(request);
    modifiedRequest.headers.delete(RSC_HEADER);
    return fetch(modifiedRequest);
  }

  return fetch(request);
}
```
- Customize the `RSC_AFFECTED_PATHS` array to include the specific paths where you've encountered the RSC issue.
- Deploy your website to Launch. The edge function will automatically deploy with your site.

### How the Edge Function Resolves the Issue
The edge function intercepts requests before they reach the Next.js application and performs the following checks:
- It checks if the request is for a path listed in `RSC_AFFECTED_PATHS`.
- It verifies if the `Rsc: 1` header is present but the `_rsc` query parameter is missing.
- If both conditions are met, it removes the `Rsc: 1` header from the request before forwarding it.

This prevents Next.js from mistakenly processing the request as an RSC request and ensures the correct HTML page is served.

## Common questions

### Does this solution disable CDN caching?
No. A **smarter approach** is to modify only the problematic requests so responses can still be safely cached at the CDN.

### When should the edge function remove the `Rsc: 1` header?
It removes the `Rsc: 1` header when the corresponding `_rsc` query parameter is missing.

### Where do I add the edge function in my repository?
In the `/functions` directory of your repository, create a file named `[proxy].edge.js`.

### What should I customize for my site?
Customize the `RSC_AFFECTED_PATHS` array to include the specific paths where you've encountered the RSC issue.