---
title: "Blocking Default Launch Domains From Google Search"
description: "Prevent search engines from indexing your default Launch domains (*.contentstackapps.com) using robots.txt, headers, 403 responses, or CDN authentication."
url: /launch/blocking-default-launch-domains-from-google-search
uid: blt37c2b068aac82ea2
---

# Blocking Default Launch Domains From Google Search

## Blocking Default Launch Domains From Google Search

# Blocking Default Launch Domains From Google Search

Each project hosted on Contentstack Launch automatically receives a default domain (for example, your-site.contentstackapps.com).

Even if your website uses a custom domain, search engines may still crawl and index the default Launch domain. This can create duplicate content and SEO issues.

This guide explains several ways to prevent search engines from indexing your default Launch domain, such as:

-   robots.txt
-   [X-Robots-Tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#noindex) headers
-   403 Forbidden responses

This guide also covers how to protect your setup when using an external CDN in front of Launch.

## Methods to Block Default Domain Indexing

**Tip**: This approach is recommended for sites that use the custom domain feature on Launch.

### 1\. Using the X-Robots-Tag Header

Launch applies this header automatically by default, so most users do not need to set this up manually.

This instructs crawlers not to index or follow any content served from your default Launch domain. However, this method relies on crawlers honoring the [X-Robots-Tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#noindex) header.

**Note**: The X-Robots-Tag: noindex header applies to all requests served on your \*.contentstackapps.com default domain, including static assets and error responses, but does not affect custom domains. No configuration is required. If you want additional protection, the methods below are still available, such as blocking the default domain entirely with a **403** or restricting access via CDN authentication.

### 2\. Dynamic robots.txt for Default Domain

Serve a restrictive robots.txt file dynamically for your Launch default domain (\*.contentstackapps.com). This keeps your custom domain unaffected.

**Example (Edge Function):**

```
export default async function handler(request) {
  const url = new URL(request.url);

  if (url.pathname === '/robots.txt' && url.hostname.endsWith('contentstackapps.com')) {
    return new Response(`User-agent: *
    Disallow: /`, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
  return fetch(request);
}
```

This method serves a robots.txt file only on the default Launch domain, so your custom domain stays unaffected.

#### Limitation

-   This method relies on crawlers honoring the robots.txt file.

### 3\. Returning a 403 Forbidden Response

A stricter option is to block all access to your Launch default domain, while still allowing normal traffic on your custom domain.

**Example (Edge Function):**

```
export default async function handler(request) {
  const currentUrl = new URL(request.url);
  const hostname = currentUrl.hostname;

    if (hostname.includes('contentstackapps.com')) {
    return new Response('Forbidden', {
      status: 403,
      statusText: 'Forbidden',
    });
  }
  return fetch(request);
}
```

This blocks all traffic to any Launch default domain that contains contentstackapps.com in its hostname, while keeping your custom domain fully accessible.

**Additional Resource**: For a working implementation example, refer to the [GitHub](https://github.com/contentstack-launch-examples/launch-edge-default-domain-blocking) repository.

### Using an External CDN (CDN-over-CDN setup)

If your site uses an external CDN (like CloudFront, Fastly, or Akamai) that proxies traffic to your Launch default domain, secure it by authenticating those requests. This setup allows only authorized CDN traffic to reach Launch and blocks direct crawler access.

#### Steps for Execution

1.  Add a custom header in your CDN configuration:

    ```
    X-Launch-Auth-Key: <unique-secret-value>
    ```

2.  Create an [Edge Function](https://www.contentstack.com/docs/developers/launch/edge-functions) in Launch:

    ```
    export default async function handler(request, context) {
      const authKey = request.headers.get('X-Launch-Auth-Key');
      const validKey = 'YOUR_SECRET_VALUE';   // must match CDN configuration

      if (authKey !== validKey) {
        return new Response('Forbidden', { status: 403 });
      }

      return context.next();
    }
    ```


This ensures that only requests with a valid header are served by Launch, effectively preventing direct crawler access to your default domain.
