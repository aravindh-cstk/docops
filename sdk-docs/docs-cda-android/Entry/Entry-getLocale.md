---
title: "getLocale"
description: "The `getLocale` method retrieves the locale of the entry, indicating the language of the content."
url: "https://www.contentstack.com/android-entry-getlocale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getLocale

The `getLocale` method retrieves the locale of the entry, indicating the language of the content.

No parameters.

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
Entry entry = entry.getLocale();
```
