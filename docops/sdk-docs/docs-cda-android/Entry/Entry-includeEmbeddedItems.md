---
title: "includeEmbeddedItems"
description: "The `includeEmbeddedItems` method includes embedded items in the entry response."
url: "https://www.contentstack.com/android-entry-includeembeddeditems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeEmbeddedItems

The `includeEmbeddedItems` method includes embedded items in the entry response.

No parameters.

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.includeEmbeddedItems()
```
