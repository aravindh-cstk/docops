---
title: "Revalidate CDN Cache"
description: "Learn how to revalidate the cache for the changes made to your content/configuration in an environment in Contentstack Launch."
url: /launch/revalidate-cdn-cache
uid: blt4af402931f6f3255
---

# Revalidate CDN Cache

## Revalidate CDN Cache

CDN cache revalidation allows you to refresh cached content in your environment after modifying content or configuration. An environment may include multiple domains that share the same CDN settings. When you revalidate the cache, the CDN checks whether any content has changed since it was last cached. If updates are detected, the CDN fetches the latest content from the origin server and updates its cache. Otherwise, it continues serving the existing cached version. This ensures visitors always see the most up-to-date content.

**Note:** Each time you redeploy your environment, Launch automatically purges the CDN cache. This ensures that users always receive the most up-to-date content.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   Launch-enabled Organization

## CDN Cache Revalidation Fields

### Cache Purging Using URL Path

To revalidate the CDN cache for a website using URL path, you must provide the following:

1.  **Revalidation path**

    The revalidation path is the URL path that you can revalidate across all the domains in your environment. For example, if you have an environment that consists of https://example.com, https://example.net, and https://example.org, and your revalidation path is /blog, then the CDN revalidates https://example.com/blog, https://example.net/blog, and https://example.org/blog.  

2.  **Is Prefix**

    The boolean value Is Prefix indicates whether you can revalidate only the exact path or also all the nested paths under it. For example, if your revalidation path is /blog and you set Is Prefix to true, then the CDN revalidates https://example.com/blog, and also all the pages under it, such as https://example.com/blog/post1, https://example.com/blog/post2, etc. If you set Is Prefix to false, then the CDN revalidates only https://example.com/blog. Similarly, CDN cache will also be revalidated for all other domains that are a part of the same environment.


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

If your site is configured with multiple domains, such as domain1.com, domain2.com, and domain3.com, but a change should only affect domain1.com and domain2.com, you can purge only those domains without affecting the rest.

**Tip:** For more targeted and flexible cache purging, purge cache using Cache-Tags or Hostnames.

| **Input** | **Type** | **Description** |
| --- | --- | --- |
| cachePath | string | URL path to purge (with optional isPrefix) |
| cacheTags | string\[\] | Array of Cache-Tags to purge |
| hostnames | string\[\] | Array of hostnames (domains) to target |

**Note:** You can pass **only one** of the inputs.

## Revalidate CDN Cache from the Launch UI

You can also trigger a cache revalidation directly from the Launch UI, without the API or Automations. Go to **Settings** > **Environments** > **Cache**, and use the **Cache Revalidation** section to purge by path, cache tags, specific domains, or all domains in the environment.

**Note:** You need permission to update the environment to use this section. If you don't have it, the Purge button is disabled.

![Revalidate_CDN_Cache_UI.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am121e9ba60b7e64f0/a93910f187bc58f0ad29a057/Revalidate_CDN_Cache_UI.png?locale=en-us)

### All Domains

Purges the cache for every domain in the environment. The section shows the first 3 domains as checked, disabled checkboxes so you can confirm what will be purged, with a "+ N more domains" note below the list if the environment has more than 3. Because this clears every domain, clicking **Purge** opens a confirmation dialog, "Purge cache for all domains?", before the purge actually runs; click **Purge All Domains** to confirm or **Cancel** to back out.

![Purge_COnfirmation_Modal.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am47663d896d90fdd1/c1c16bc249922cf51a2fb61b/Purge_COnfirmation_Modal.png?locale=en-us)

### Specific Path

Purges the cache for a single URL path. Enter the path in the **Revalidation Path** field, for example, /blog and select **Includes all nested paths** to also purge every URL beneath it. For example, /blog with this checked, also purges /blog/post-1.

### Cache Tags

Purges the cache for content associated with one or more Cache-Tags, instead of clearing the whole cache. Enter a comma-separated list in the **Cache tags** field — for example, blogs, featured.

### Specific Domains

Purges the cache for one or more selected domains only. The **Domains** field lists every domain in the environment as a checkbox, selecting the ones you want to purge. If the environment has more than 3 domains, the list scrolls.  

![Specific_Domain.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am52a0b5a86cbf63a8/ee81298f22c4c84d6513927f/Specific_Domain.png?locale=en-us)

After filling in the fields for your chosen scope, click **Purge**. A confirmation notification appears once the purge is triggered (for the All Domains scope, this happens after you confirm the dialog above).

![Success_Purge.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am3302a70c0b12fe5c/0386dd120bc49ba50997cf08/Success_Purge.png?locale=en-us)

## Revalidate CDN Cache using Automations

To revalidate the CDN cache for an environment, you can use the Revalidate CDN Cache action in the Agent OS Launch connector.

**Additional Resource:** For detailed information on creating the Revalidate CDN Cache action in Automations, refer to the [Launch Connector](/docs/agent-os/launch#action-2-revalidate-cdn-cache) document.

## Examples of Revalidating CDN Cache

### Using URL Path

-   **Revalidating a single page**: To revalidate a single page on your website, for example, https://www.example.com/blog/my-blog-post, you can provide the path /blog/my-blog-post and set Is Prefix value to false.
-   **Revalidating an entire directory**: To revalidate an entire directory of pages, you can provide the directory path and set Is Prefix value to true. For example, if you have a directory of blog posts at https://www.example.com/blog, you can provide the path as /blog and set Is Prefix to true.
-   **Revalidating nested paths of a category**: If your website has nested paths (i.e., paths that contain other paths), you can use this feature to revalidate both the parent and child paths. For example, to revalidate the parent page https://www.example.com/category/my-category and the child page https://www.example.com/category/my-category/products, you can provide the path /category/my-category and set Is Prefix to true.
-   **Revalidating the entire site**: To revalidate the cache of an entire website without doing a fresh deployment, you can provide the revalidation path as “/“ with Is Prefix set to true.

### Using Cache-Tags

1.  Set Cache-Tag header in your app (for example, Next.js):

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

2.  Trigger purge by Cache-Tags using the revalidateCDNCache API via Automations:

    ```
    {
      "cacheTags": ["blog-post-123"]
    }
    ```


### Using Hostnames (Domains)

1.  Trigger purge by hostnames using the revalidateCDNCache API via Automations:

    ```
    {
      "hostnames": ["domain1.com", "domain2.com"]
    }
    ```
