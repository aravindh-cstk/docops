---
title: "getTags"
description: "The `getTags` method retrieves the tags associated with the entry."
url: "https://www.contentstack.com/android-entry-gettags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getTags

The `getTags` method retrieves the tags associated with the entry.

No parameters.

Returns:
Type
String[]

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
Entry entry = entry.<span>getTags</span>()
```
