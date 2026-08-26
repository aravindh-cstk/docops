---
title: "Handling Next.js RSC Issues on Launch"
description: "Resolve Next.js React Server Component issues in the Launch CDN using Edge Functions to prevent cached RSC payloads and ensure correct HTML rendering."
url: /launch/handling-nextjs-rsc-issues-on-launch
uid: blt50604db3f05e2577
---

# Handling Next.js RSC Issues on Launch

## Handling Next.js RSC Issues on Launch

This guide explains how to address issues with the **Next.js React Server Components (RSC)** when using [Next.js with App Router on Contentstack Launch](/docs/launch/nextjs-on-launch#app-router)—particularly when requests are routed through a CDN.

## Identifying the Problem

When Next.js with App Router runs behind a CDN (such as the Launch CDN), you may encounter a problem where **React Server Component payloads** are returned instead of the expected **HTML pages**.

### Triggers for RSC Payload Error

-   A client-side navigation triggers a request containing the ?\_rsc=... query parameter and the Rsc: 1 header.
-   A redirect occurs.
-   The CDN caches the **wrong response** (RSC payload) because the query parameter is missing after the redirect. ![Launch_NextJS_RSC_Issues.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f95d5f5270965d9/683024234d67fa58f158cbe8/Launch_NextJS_RSC_Issues.png)

### How the Issue Happens

1.  A client-side navigation request is made to a page (for example, /some-page?\_rsc=abcd) with the header Rsc: 1.
2.  Next.js tries to fetch the RSC payload, adding the \_rsc query parameter and the Rsc header.
3.  In Next.js, a redirect is set up from /some-page to /my-rsc-page.
4.  The client receives a redirect response to /my-rsc-page.
5.  During the redirect:
    -   The client **keeps** the Rsc: 1 header.
    -   The client **drops** the \_rsc query parameter.
6.  When Next.js receives the redirected request, it sees the Rsc: 1 header and thus returns the RSC payload instead of the expected HTML page, even though the \_rsc query parameter is missing from the URL.
7.  If /my-rsc-page is cached by the CDN (with cache control headers), the **wrong response** is stored.  
    Even later, valid requests **without** the Rsc: 1 header or \_rsc parameter can end up receiving the cached RSC payload, thus breaking the page.

### Why Not Disable Caching?

While disabling caching avoids this issue, it forces all requests to hit your origin server, increasing latency and reducing performance.

A **smarter approach** is to modify only the problematic requests so responses can still be safely cached at the CDN.

## Solution: Use Launch Edge Functions

Fix the issue by using a [Launch Edge Function](/docs/launch/edge-functions/) that removes the Rsc: 1 header when the corresponding \_rsc query parameter is missing.

### Implementing the Edge Function Solution

1.  In the /functions directory of your repository, create a file named \[proxy\].edge.js.
2.  Add the following code to check and modify requests to prevent the RSC issue:

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

3.  Customize the RSC\_AFFECTED\_PATHS array to include the specific paths where you've encountered the RSC issue.
4.  Deploy your website to Launch. The edge function will automatically deploy with your site.

### How the Edge Function Resolves the Issue

The edge function intercepts requests before they reach the Next.js application and performs the following checks:

-   It checks if the request is for a path listed in RSC\_AFFECTED\_PATHS.
-   It verifies if the Rsc: 1 header is present but the \_rsc query parameter is missing.
-   If both conditions are met, it removes the Rsc: 1 header from the request before forwarding it.

This prevents Next.js from mistakenly processing the request as an RSC request and ensures the correct HTML page is served.
