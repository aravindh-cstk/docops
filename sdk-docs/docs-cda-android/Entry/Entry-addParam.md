---
title: "addParam"
description: "The `addParam` method adds query parameters to the entry request to filter the response."
url: "https://www.contentstack.com/android-entry-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

The `addParam` method adds query parameters to the entry request to filter the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of the header |
| value | String | Yes | — | value of the header |

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.addParam(key, value)
```
