---
title: "includeFallback"
description: "The `includeFallback` method includes the fallback language content in the entry response when the specified locale content is unavailable."
url: "https://www.contentstack.com/android-entry-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeFallback

The `includeFallback` method includes the fallback language content in the entry response when the specified locale content is unavailable.

No parameters.

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.includeFallback()
```
