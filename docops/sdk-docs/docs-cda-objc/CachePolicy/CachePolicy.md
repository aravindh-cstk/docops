---
title: "CachePolicy"
description: "The cache policies allow you to define the source from where the SDK will retrieve the content. Based on the selected policy, the SDK can get the data from cache, network, or both. Let’s look at the various cache policies available for use: POLICIES DESCTIPTION NETWORK\\_ONLY (default) If you set NETWORK\\_ONLY as the cache policy, the SDK retrieves data through a network call, and saves the retrieved data in the cache. This is set as the default policy. CACHE\\_ELSE\\_NETWORK If you set CACHE\\_ELSE\\_NETWORK as the cache policy, the SDK gets data from the cache. However, if it fails to retrieve data from the cache, it makes a network call. NETWORK\\_ELSE\\_CACHE If you set NETWORK\\_ELSE\\_CACHE as the cache policy, the SDK gets data using a network call. However, if the call fails, it retrieves data from cache. CACHE\\_THEN\\_NETWORK If you set CACHE\\_THEN\\_NETWORK as the cache policy, the SDK gets data from cache, and then makes a network call. (A success callback will be invoked twice.) CACHE\\_ONLY If you set CACHE\\_ONLY as the cache policy, the SDK gets data from the cache."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/ios/reference/cachepolicy"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# CachePolicy

## CachePolicy

The cache policies allow you to define the source from where the SDK will retrieve the content. Based on the selected policy, the SDK can get the data from cache, network, or both.

Let’s look at the various cache policies available for use:
| **POLICIES** | **DESCTIPTION** |
|---|---|
| NETWORK_ONLY (default) | If you set NETWORK_ONLY as the cache policy, the SDK retrieves data through a network call, and saves the retrieved data in the cache. This is set as the default policy. |
| CACHE_ELSE_NETWORK | If you set CACHE_ELSE_NETWORK as the cache policy, the SDK gets data from the cache. However, if it fails to retrieve data from the cache, it makes a network call. |
| NETWORK_ELSE_CACHE | If you set NETWORK_ELSE_CACHE as the cache policy, the SDK gets data using a network call. However, if the call fails, it retrieves data from cache. |
| CACHE_THEN_NETWORK | If you set CACHE_THEN_NETWORK as the cache policy, the SDK gets data from cache, and then makes a network call. (A success callback will be invoked twice.) |
| CACHE_ONLY | If you set CACHE_ONLY as the cache policy, the SDK gets data from the cache. |
