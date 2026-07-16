---
title: "except"
description: "The `except` method specifies an array of field UIDs that are excluded from the response."
url: "https://www.contentstack.com/android-entry-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## except

The `except` method specifies an array of field UIDs that are excluded from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceField | String | Yes | — | field uid which get excluded from the response. |

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.except(new String[]{"name", "description"});
```
