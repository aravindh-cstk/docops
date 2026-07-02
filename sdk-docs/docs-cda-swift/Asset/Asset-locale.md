---
title: "locale"
description: "The locale method sets the locale code used when fetching the asset so the response is in the requested language."
url: "https://www.contentstack.com/swift-asset-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale

The locale method sets the locale code used when fetching the asset so the response is in the requested language.

No parameters.

Returns:
Type
Asset

Returns the same Asset instance with the locale set for the next request. Use it to chain more options (e.g., `includeDimension()`) or to call `fetch`.

```
let stack = Contentstack.stack(apiKey: apiKey,
                 deliveryToken: deliveryToken,
                 environment: environment)

     // To retrieve a single asset with a specific locale
     stack.asset(uid: assetUID).locale("en-us")
     .fetch { (result: Result<AssetModel, Error>, response: ResponseType) in
        switch result {
        case .success(let model): //Model retrieved from API
        case .failure(let error): //Error Message
        }
     }
```
