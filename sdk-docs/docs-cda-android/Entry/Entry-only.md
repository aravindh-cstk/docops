---
title: "only"
description: "The only method specifies an array of keys in the base object to include in the response."
url: "https://www.contentstack.com/android-entry-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## only

The `only` method specifies an array of keys in the base object to include in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | ArrayList<String> | Yes | — | Array of the only reference keys to be included in response |

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.only(new String[]{"name", "description"});
```
