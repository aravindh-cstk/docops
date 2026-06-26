---
title: "removeHeader"
description: "The `removeHeader` method removes a header from the request by using the specified key."
url: "https://www.contentstack.com/android-asset-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeHeader

The `removeHeader` method removes a header from the request by using the specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerKey | String | Yes | — | Key of the header you want to remove |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
Asset asset = stack.asset(assetUid);
asset.removeHeader(headerKey);
```
