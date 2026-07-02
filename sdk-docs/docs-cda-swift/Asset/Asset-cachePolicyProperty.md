---
title: "cachePolicy Property"
description: "The cachePolicy property defines the caching strategy for the asset request (network vs cache). Name Type Required Default Description cachePolicy CachePolicy No .networkOnly Defines the retrieval strategy manually set on the Asset instance to determine whether the request uses the network, cache, or both. CachePolicy values: Value Description networkOnly Fetches data from the network and updates the cache with the results. This is the default policy. cacheOnly Returns data exclusively from the cache without initiating a network request. cacheElseNetwork Attempts to retrieve from the cache first; initiates a network call only if a cache miss or failure occurs. networkElseCache Prioritizes the network request; returns cached data only if the network call fails. cacheThenNetwork The completion handler is invoked twice: first with the cached result ( response == .cache ), then with the network result ( response == .network ). If a cache miss occurs, the first invocation returns a failure. Use the response parameter to identify which result is being processed. Example Assign a CachePolicy value to the Asset instance before calling fetch: let stack = Contentstack.stack(apiKey: apiKey, deliveryToken: deliveryToken, environment: environment) let asset = stack.asset(uid: assetUID) asset.cachePolicy = .networkOnly // or .cacheOnly, .cacheElseNetwork, etc. asset.locale(\"en-us\").fetch { (result: Result<AssetModel, Error>, response: ResponseType) in switch result { case .success(let model): // Model retrieved from API case .failure(let error): // Error message } }"
url: "https://www.contentstack.com/cachePolicy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## cachePolicy Property

The `cachePolicy` property defines the caching strategy for the asset request (network vs cache).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `cachePolicy` | `CachePolicy` | No | `.networkOnly` | Defines the retrieval strategy manually set on the Asset instance to determine whether the request uses the network, cache, or both. |

**CachePolicy values:**

| Value | Description |
|---|---|
| `networkOnly` | Fetches data from the network and updates the cache with the results. This is the default policy. |
| `cacheOnly` | Returns data exclusively from the cache without initiating a network request. |
| `cacheElseNetwork` | Attempts to retrieve from the cache first; initiates a network call only if a cache miss or failure occurs. |
| `networkElseCache` | Prioritizes the network request; returns cached data only if the network call fails. |
| `cacheThenNetwork` | The completion handler is invoked twice: first with the cached result (`response == .cache`), then with the network result (`response == .network`). If a cache miss occurs, the first invocation returns a failure. Use the `response` parameter to identify which result is being processed. |

**Example**

Assign a `CachePolicy` value to the Asset instance before calling fetch:

```
let stack = Contentstack.stack(apiKey: apiKey,
                              deliveryToken: deliveryToken,
                              environment: environment)
let asset = stack.asset(uid: assetUID)
asset.cachePolicy = .networkOnly   // or .cacheOnly, .cacheElseNetwork, etc.
asset.locale("en-us").fetch { (result: Result<AssetModel, Error>, response: ResponseType) in
    switch result {
    case .success(let model): // Model retrieved from API
    case .failure(let error): // Error message
    }
}
```
