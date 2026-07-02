---
title: "locale(_:)"
description: "The locale(_:) method sets the locale used when fetching assets, so the response is in the specified language/locale."
url: "https://www.contentstack.com/swift-assetquery-locale-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale(_:)

The `locale(_:)` method sets the locale used when fetching assets, so the response is in the specified language/locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | String | Yes | None | Defines the locale code (e.g., `"en-us"` ) used to fetch assets in a specific language. It is set to ensure the API returns localized content. |

Returns:
Type
Self

The same `AssetQuery` instance, for chaining

```
let stack = Contentstack.stack(apiKey: apiKey,
                 deliveryToken: deliveryToken,
                 environment: environment)

     // To retrieve assets with a specific locale
     stack.asset().query().locale("en-us")
    .find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
        switch result {
        case .success(let contentstackResponse): // Models retrieved from API
        case .failure(let error): // Error Message
        }
     }
```

**Note:** If `locale(_:)` is not called, the SDK does not provide a default value. The request is sent without a locale parameter, and the Contentstack Delivery API applies the Stack's default locale to the results.
