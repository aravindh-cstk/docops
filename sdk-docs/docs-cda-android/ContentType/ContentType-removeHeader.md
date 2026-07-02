---
title: "removeHeader"
description: "The removeHeader method removes a header from the stack by using the specified header key."
url: "https://www.contentstack.com/android-contenttype-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeHeader

The `removeHeader` method removes a header from the stack by using the specified header key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerKey | String | Yes | — | The key of the header |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
ContentType contentType = stack.contentType("contentTypeUid");
contentType.removeHeader(headerKey)
```
