---
title: "[CDN and Caching] - Contentstack CDN Cache Management"
description: Contentstack CDN cache management, including how CDN cache works, cache purging events, timeouts/retries guidance, and cache header responses.
url: https://www.contentstack.com/docs/developers/cdn-and-caching/contentstack-cdn-cache-management
product: Contentstack
doc_type: guide
audience:
  - developers
  - architects
version: unknown
last_updated: 2026-03-25
---

# [CDN and Caching] - Contentstack CDN Cache Management

This page explains how Contentstack’s CDN caching works, when and how Contentstack purges cached content, and how to interpret CDN cache response headers. It is intended for developers and teams operating Contentstack-powered sites who need to understand cache behavior, troubleshooting, and performance considerations.

## Contentstack CDN Cache Management

A Content Delivery Network (CDN) ensures that a cache of your content is stored at various locations around the globe. Consequently, whenever there is a page request, the content is served from the cache of the nearest CDN server, rather than the origin server ensuring quicker content delivery.

**Additional Resource:** Refer to our documentation about [What CDN is and How it Works](/docs/developers/cdn-and-caching/what-is-cdn-and-how-it-works) to learn more.

## How CDN Cache Works in Contentstack

The CDN is always up-to-date. It ensures that the cache is always fresh through purging old data and caching new data.

When any user requests a piece of content, the nearest CDN server checks if it has a cached copy of the requested content. If not, it checks with the shield server. And, if the shield server does not have the cache of the requested content, it fetches the content from the origin server.

A shield server is an extra layer of caching that reduces the load on the origin server. It is located near the origin server, and it saves the cache of content that it serves to any CDN server. So, if any other CDN server requests the same data, the shield server would serve the cached content.

**Additional Resource:** Interested in learning how to set up your CDN for your Contentstack-powered websites? Refer to our guide on how to [set up a Content Delivery Network for Contentstack-powered Websites](/docs/developers/cdn-and-caching/set-up-a-content-delivery-network-for-contentstack-powered-websites).

This ensures that content is always available and delivered even in high visitor traffic, intermittent spikes and server outages, resulting in better customer experience and satisfaction.

## Cache Purging

Purging refers to the removal of the cache from the cache servers. Contentstack purges cached data from the cache servers based on the occurrence of certain events.

When a piece of content is [published](/docs/content-managers/publish-content), [unpublished](/docs/content-managers/working-with-entries/unpublish-an-entry), or [deleted](/docs/content-managers/working-with-entries/delete-an-entry), Contentstack purges the cache of only the changed content (and some other related content) from the [Content Delivery Network (CDN)](/docs/developers/cdn-and-caching/what-is-cdn-and-how-it-works) This ensures that the unchanged cache remains intact, and you hit fewer API requests to the origin server while fetching content.

The following table lists down the different circumstances under which cached content is purged from other cache servers:

| Module | Event | CDN Cache Purged | GraphQL Cache Purged | Images Cache Purged | Assets Cache Purged |
|---|---|---|---|---|---|
| Entry | Publish<br>- Unpublish<br>- Delete | Yes | Yes | ---- | Asset |
| Asset | **Note**: Cache of download URLs of assets is not purged.<br>- Publish<br>- Unpublish | Yes | Yes | ---- | Asset |
| Asset | - Delete | ---- | Yes | Yes |  |
| Stack access token | **Note**: We have stopped supporting Access Token for all stacks created after December 16, 2020. For stacks created after this date, the Access Token will no longer be generated.<br>- Reset | Yes | Yes | Yes | Yes |
| Delivery token | - Update (Environment change)<br>- Delete | Yes | Yes | Yes | Yes |
| Environment | - Update (Name change)<br>- Delete | Yes | Yes | Yes | Yes |
| Stack | - Delete | Yes | Yes | Yes | Yes |
| Locale | - Update<br>- Delete | Yes | Yes | ---- |  |
| Global Field | **Note**<br><br>: The cache is purged only if a global field is referred to in any content type; otherwise nothing will be purged.<br>- Create | Yes | ---- | ---- |  |
| Global Field | **Note**<br><br>: The cache is purged only if a global field is referred to in any content type; otherwise nothing will be purged.<br>- Update<br>- Delete | Yes | Yes | ---- |  |
| Content Type | - Create | Yes | ---- | ---- |  |
| Content Type | - Update<br>- Delete | Yes | Yes | ---- |  |
| Organization | - Disable | Yes | Yes | Yes | Yes |
| User | **Note**: The cache is purged only if a privatized asset exists within the stack.<br>- Login<br>- Share access<br>- Unshare access<br>- Logout | Yes | -- | Yes | Yes |

**Note**: The cache of an item can stay on the cache servers for a maximum of 1 year. After that, it is purged automatically.

### Determining the Timeouts and Retries for Content Delivery APIs

You can set up timeouts and retries for [Content Delivery APIs](/docs/developers/apis/content-delivery-api) for your app depending on the time our CDN takes to serve content.

- **Requests served by the origin server**  
  **After a purge event, the first request coming to the origin server will take more time than requests served from the cache. This however does not exceed one sec (for regular requests with limited references).**
- **Requests served from cache**  
  **Once the call is cached in the CDN, it can be served in milliseconds. Hence, it is suggested to keep the timeout to as minimum as possible for the time taken by the origin server and three exponential requests on failure.**

## Understanding Cache Header Response

When you make a request to fetch content from Contentstack, the CDN response includes several headers that provide details about the cache status. Key headers include `X-Request-Id`, `X-Served-By`, and `X-Cache```. If you observe that your website is experiencing some delays in serving content, it might be a good idea to check if the content is being served from the CDN’s Point of Presence or POP server, shield server, or through Contentstack’s origin server.

An example of cache headers is given below:

```
X-Request-Id: cf5dc19b-485b-411e-aa3a-2f5229145e94
X-Served-By: cache-lxx8483, cache-axs21008-AMS
X-Cache: HIT, MISS
```

Let’s learn about these headers and what to infer from the possible values that you may get.

**Note**: As Contentstack migrates from Fastly to Cloudflare as its CDN provider, the `X-Cache-Hits` header will no longer be available in CDN responses.

### X-Request-Id

The `X-Request-Id` header provides a unique identifier for each request. This can be useful for debugging and tracking individual requests across the system.

### X-Served-By

The `X-Served-By` header indicates the specific cache node (POP) that served the request. This helps identify which edge server handled the request.

Example:

```
X-Served-By: cache-{datacenter}{nodeid}-{datacenter}
```

This indicates that the edge node `cache-{datacenter}{nodeid}-{datacenter}` handled the request. This information is useful for analyzing the performance and distribution of requests across different nodes.

In some cases, `X-Served-By` may have two values, indicating that there may be more than one server identity listed, separated by commas.

### X-Cache

The `X-Cache` header indicates whether the requested content was served from the cache and provides information on the cache state. Below are the possible values and their meanings.

- Example 1:  
  `X-Cache: MISS, MISS`  
  This indicates that the object was not in cache at either the edge or the shield and was fetched from the origin.
- Example 2:  
  `X-Cache: HIT, MISS`  
  This indicates that the object was not in cache at the edge but was found in cache at the shield.
- Example 3:  
  `X-Cache: MISS, HIT`  
  This indicates that the object was found in cache at the edge, and although it was previously a MISS at the shield.
- Example 4:  
  `X-Cache: HIT, HIT`  
  This indicates that the object was found in cache at the edge, and it was also a HIT at the shield during the prior fetch.
- Example 5:  
  `X-Cache: HIT`  
  This indicates that the object was found in cache at the POP which also acts as the designated shield.
- Example 6:  
  `X-Cache: MISS`  
  This indicates that the object was not in cache at the POP which also acts as the designated shield, so it was fetched from the backend.

By understanding these headers, you can better interpret the CDN cache performance and ensure accurate reporting.

## Common questions

### When does Contentstack purge CDN cache?
Contentstack purges cached data from the cache servers based on the occurrence of certain events, such as when content is published, unpublished, or deleted, and other module events listed in the table.

### What is a shield server in Contentstack’s CDN flow?
A shield server is an extra layer of caching located near the origin server that reduces the load on the origin server by serving cached content to CDN servers.

### How long can an item remain cached?
The cache of an item can stay on the cache servers for a maximum of 1 year. After that, it is purged automatically.

### Which headers help determine whether content was served from cache?
Key headers include `X-Request-Id`, `X-Served-By`, and `X-Cache```.