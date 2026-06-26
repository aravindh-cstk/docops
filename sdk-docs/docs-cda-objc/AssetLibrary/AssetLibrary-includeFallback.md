---
title: "includeFallback"
description: "Retrieve the published content of the fallback locale entry if the entry is not localized in specified locale."
url: "https://www.contentstack.com/ios-assetlibrary-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeFallback

Retrieve the published content of the fallback locale entry if the entry is not localized in specified locale.

No parameters.

Returns:
Type
void

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

AssetLibrary * asset = [stack assetLibrary];
[asset includeFallback];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

let asset = stack.assetLibrary()
asset.includeFallback()
```
