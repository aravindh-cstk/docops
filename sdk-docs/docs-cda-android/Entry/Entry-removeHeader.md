---
title: "removeHeader"
description: "The removeHeader method removes a header associated with the specified key."
url: "https://www.contentstack.com/android-entry-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeHeader

The `removeHeader` method removes a header associated with the specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | No | — | key of the header you want to remove |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
Entry entry = entry.removeHeader(key);
```
