---
title: "getContentType"
description: "The `getContentType` method retrieves the content type of the entry."
url: "https://www.contentstack.com/android-entry-getcontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getContentType

The `getContentType` method retrieves the content type of the entry.

No parameters.

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
Entry entry = entry.getContentType()
```
