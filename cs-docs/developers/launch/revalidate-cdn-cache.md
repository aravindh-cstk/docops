---
title: "[Contentstack Launch] - Revalidate CDN Cache"
description: Revalidate CDN cache in Contentstack Launch environments using URL paths, Cache-Tags, or hostnames, including fields, prerequisites, and examples.
url: https://www.contentstack.com/docs/launch/revalidate-cdn-cache
product: Contentstack Launch
doc_type: guide
audience:
  - developers
  - devops
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Revalidate CDN Cache

This page explains how CDN cache revalidation works in Contentstack Launch and how to revalidate cached content for an environment using URL paths, Cache-Tags, or hostnames. It is intended for developers and teams managing Launch environments who need to refresh cached content after content or configuration changes without requiring a full redeploy.

## Revalidate CDN Cache

CDN cache revalidation allows you to refresh cached content in your environment after modifying content or configuration. An environment may include multiple domains that share the same CDN settings. When you revalidate the cache, the CDN checks whether any content has changed since it was last cached. If updates are detected, the CDN fetches the latest content from the origin server and updates its cache. Otherwise, it continues serving the existing cached version. This ensures visitors always see the most up-to-date content.

**Note:** Each time you redeploy your environment, Launch automatically purges the CDN cache. This ensures that users always receive the most up-to-date content.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

## CDN Cache Revalidation Fields

### Cache Purging Using URL Path

To revalidate the CDN cache for a website using URL path, you must provide the following:

- **Revalidation path**  
  The revalidation path is the URL path that you can revalidate across all the domains in your environment. For example, if you have an environment that consists of `https://example.com`, `https://example.net`, and `https://example.org`, and your revalidation path is `/blog`, then the CDN revalidates `https://example.com/blog`, `https://example.net/blog`, and `https://example.org/blog`.

- **Is Prefix**  
  The boolean value `Is Prefix` indicates whether you can revalidate only the exact path or also all the nested paths under it. For example, if your revalidation path is `/blog` and you set `Is Prefix` to `true`, then the CDN revalidates `https://example.com/blog`, and also all the pages under it, such as `https://example.com/blog/post1`, `https://example.com/blog/post2`, etc. If you set `Is Prefix` to `false`, then the CDN revalidates only `https://example.com/blog`. Similarly, CDN cache will also be revalidated for all other domains that are a part of the same environment.

### Cache Purging Using Cache-Tags

Cache-Tags allow you to associate one or more tags with cached resources. These tags are included in the response headers, separated by commas.

**Example:**

```
Cache-Tag: product-123, product-456
```

Instead of purging dozens or hundreds of individual URLs when a resource changes, you can purge all content sharing the same tag with a single API call.

Launch treats **duplicate Cache-Tags in a single purge request** as a single operation. Duplicate tags are not reprocessed.

### Cache Purging Using Hostnames (Domains)

Hostnames allow you to selectively purge cached resources for specific domains.

If your site is configured with multiple domains, such as `domain1.com`, `domain2.com`, and `domain3.com`, but a change should only affect `domain1.com` and `domain2.com`, you can purge only those domains without affecting the rest.

**Tip:** For more targeted and flexible cache purging, purge cache using Cache-Tags or Hostnames.

| Input | Type | Description |
|---|---|---|
| `cachePath` | `string` | URL path to purge (with optional `isPrefix`) |
| `cacheTags` | `string[]` | Array of Cache-Tags to purge |
| `hostnames` | `string[]` | Array of hostnames (domains) to target |

**Note:** You can pass **only one** of the inputs.

## Revalidate CDN Cache using Automate

To revalidate the CDN cache for an environment, you can use the Revalidate CDN Cache action in the Automate Launch connector.

**Additional Resource:** For detailed information on creating the Revalidate CDN Cache action in Automate, refer to the [Launch Connector](/docs/developers/automation-hub-connectors/launch#action-2-revalidate-cdn-cache) document.

## Examples of Revalidating CDN Cache

### Using URL Path

- **Revalidating a single page**: To revalidate a single page on your website, for example, `https://www.example.com/blog/my-blog-post`, you can provide the path `/blog/my-blog-post` and set `Is Prefix` value to `false`.
- **Revalidating an entire directory**: To revalidate an entire directory of pages, you can provide the directory path and set `Is Prefix` value to `true`. For example, if you have a directory of blog posts at `https://www.example.com/blog`, you can provide the path as `/blog` and set `Is Prefix` to `true`.
- **Revalidating nested paths of a category**: If your website has nested paths (i.e., paths that contain other paths), you can use this feature to revalidate both the parent and child paths. For example, to revalidate the parent page `https://www.example.com/category/my-category` and the child page `https://www.example.com/category/my-category/products`, you can provide the path `/category/my-category` and set `Is Prefix` to `true`.
- **Revalidating the entire site**: To revalidate the cache of an entire website without doing a fresh deployment, you can provide the revalidation path as “`/`“ with `Is Prefix` set to `true`.

### Using Cache-Tags

- Set `Cache-Tag` header in your app (for example, Next.js):

```
import { NextResponse } from 'next/server';
export async function GET() {
  const data = await fetchBlogPost();
  const response = NextResponse.json(data);
  // Set Cache-Tag header
  response.headers.set("Cache-Tag", "blog-post-123");
  return response;
}
```

- Trigger purge by Cache-Tags using the `revalidateCDNCache` API via Automate:

```
{
  "cacheTags": ["blog-post-123"]
}
```

### Using Hostnames (Domains)

- Trigger purge by hostnames using the `revalidateCDNCache` API via Automate:

```
{
  "hostnames": ["domain1.com", "domain2.com"]
}
```

## Common questions

### Does Launch automatically clear the CDN cache on redeploy?
Yes. **Note:** Each time you redeploy your environment, Launch automatically purges the CDN cache.

### Can I revalidate multiple domains in the same environment with one URL path?
Yes. The revalidation path is revalidated across all the domains in your environment that share the same CDN settings.

### Can I send `cachePath`, `cacheTags`, and `hostnames` together?
No. **Note:** You can pass **only one** of the inputs.

### What happens if I include duplicate Cache-Tags in a single purge request?
Launch treats **duplicate Cache-Tags in a single purge request** as a single operation. Duplicate tags are not reprocessed.