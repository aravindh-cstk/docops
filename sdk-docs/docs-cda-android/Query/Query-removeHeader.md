---
title: "removeHeader"
description: "The `removeHeader` method removes a header from the request using the specified header key."
url: "https://www.contentstack.com/android-query-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeHeader

The `removeHeader` method removes a header from the request using the specified header key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of the header you want to remove |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.removeHeader(key)
```
