---
title: "setHeader"
description: "The `setHeader` method adds a header using the specified key and value."
url: "https://www.contentstack.com/android-entry-setheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setHeader

The `setHeader` method adds a header using the specified key and value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | No | — | key of the header you want to remove |
| value | String | Yes | — | value of the header against the key |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
Entry entry = entry.setHeader(key, value)
```
