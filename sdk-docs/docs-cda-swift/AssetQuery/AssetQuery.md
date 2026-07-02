---
title: "AssetQuery"
description: "Use the AssetQuery class to fetch all or find assets. You obtain it from an initialized Stack via stack.asset().query() . Class Overview Name Type Description cachePolicy CachePolicy Defines the caching strategy for the AssetQuery request. While the Stack sets a default, you can manually override it using methods like .networkOnly to ensure the most recent data is retrieved. stack Stack Identifies the parent Stack instance that owns and executes the query. This is automatically assigned by the system when you call stack.asset().query() , ensuring the request is correctly scoped to your environment. parameters [String: Any] Contains URI-based metadata sent with the request. These are automatically populated by the system through method calls such as locale() , include() , skip() , and limit() to refine your API results. queryParameter [String: Any] Defines the filtering logic (e.g., where ) for the request. The system populates these values based on your method calls, allowing you to narrow down asset results to meet specific criteria. headers [String: String] Manages custom HTTP headers for the request. You can manually add values via addValue(_:forHTTPHeaderField:) to meet unique security or transport requirements."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/assetquery"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# AssetQuery

## AssetQuery

Use the `AssetQuery` class to fetch all or find assets. You obtain it from an initialized Stack via `stack.asset().query()`.

**Class Overview**

| Name | Type | Description |
|---|---|---|
| `cachePolicy` | `CachePolicy` | Defines the caching strategy for the `AssetQuery` request. While the Stack sets a default, you can manually override it using methods like `.networkOnly` to ensure the most recent data is retrieved. |
| `stack` | `Stack` | Identifies the parent Stack instance that owns and executes the query. This is automatically assigned by the system when you call `stack.asset().query()`, ensuring the request is correctly scoped to your environment. |
| `parameters` | `[String: Any]` | Contains URI-based metadata sent with the request. These are automatically populated by the system through method calls such as `locale()`, `include()`, `skip()`, and `limit()` to refine your API results. |
| `queryParameter` | `[String: Any]` | Defines the filtering logic (e.g., `where`) for the request. The system populates these values based on your method calls, allowing you to narrow down asset results to meet specific criteria. |
| `headers` | `[String: String]` | Manages custom HTTP headers for the request. You can manually add values via `addValue(_:forHTTPHeaderField:)` to meet unique security or transport requirements. |
