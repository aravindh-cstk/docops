---
title: "setLocale"
description: "The setLocale method sets the language of the entry."
url: "https://www.contentstack.com/android-entry-setlocale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setLocale

The setLocale method sets the language of the entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | String | Yes | — | language code |

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
Entry entry = entry.setLocale();
```
