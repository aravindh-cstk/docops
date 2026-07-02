---
title: "removeHeader"
description: "Removes header from the stack using headerKey"
url: "https://www.contentstack.com/java-contenttype-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeHeader

Removes header from the stack using headerKey

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headerKey | String | Yes | — | The key of the header |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
ContentType contentType = stack.contentType("contentTypeUid");
contentType.removeHeader(headerKey)
```
