---
title: "setLocale"
description: "The setLocale method sets the locale code used when fetching the asset so the response is in the requested language."
url: "https://www.contentstack.com/ios-assets-setlocale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setLocale

The `setLocale` method sets the locale code used when fetching the asset so the response is in the requested language.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | NSString | Yes | None | User-defined locale code for the request (e.g., `en-us` ). Specifies the language of the content returned during the fetch operation. |

Returns:
Type
Asset

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
Asset *asset = [stack assetWithUID:@"ASSET_UID"];
[asset setLocale:@"en-us"];
```

**Swift**

```
let stack = Contentstack.stackWithAPIKey("API_KEY", accessToken: "DELIVERY_TOKEN", environmentName: "ENVIRONMENT")
let asset = stack.assetWithUID("ASSET_UID")
asset.setLocale("en-us")
```
