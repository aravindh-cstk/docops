---
title: "query()"
description: "The `query()` method returns an `AssetQuery` to retrieve multiple assets with filters and pagination. Single Asset by UID: Use `fetch` . Method: `stack.asset(uid: \"ASSET_UID\").fetch { … }` . Result: Returns one `AssetModel` . Multiple Assets (Collection): Use `query` . Method: `stack.asset().query()` . Result: Chain methods (e.g., `where` , `limit` ) and call `find { … }` to get a `ContentstackResponse<AssetModel>` . Note: Calling `query()` on an asset initialized with a UID (e.g., `stack.asset(uid: \"x\").query()` ) is valid but redundant. For a single asset by UID, prefer `stack.asset(uid: \"ASSET_UID\").fetch()` ."
url: "https://www.contentstack.com/swift-asset-query-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query()

The `query()` method returns an `AssetQuery` to retrieve multiple assets with filters and pagination.

Single Asset by UID: Use `fetch`.

- Method: `stack.asset(uid: "ASSET_UID").fetch { … }`.
- Result: Returns one `AssetModel`.

Multiple Assets (Collection): Use `query`.

- Method: `stack.asset().query()`.
- Result: Chain methods (e.g., `where`, `limit`) and call `find { … }` to get a `ContentstackResponse<AssetModel>`.

**Note:**

- Calling `query()` on an asset initialized with a UID (e.g., `stack.asset(uid: "x").query()`) is valid but redundant.
- For a single asset by UID, prefer `stack.asset(uid: "ASSET_UID").fetch()`.

No parameters.

Returns:
Type
AssetQuery

An `AssetQuery` instance for method chaining.

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset().query()
```
