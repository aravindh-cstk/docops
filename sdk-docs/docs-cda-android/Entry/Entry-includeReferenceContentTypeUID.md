---
title: "includeReferenceContentTypeUID"
description: "The `includeReferenceContentTypeUID` method includes the content type UIDs of referenced entries in the entry response."
url: "https://www.contentstack.com/android-entry-includereferencecontenttypeuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReferenceContentTypeUID

The `includeReferenceContentTypeUID` method includes the content type UIDs of referenced entries in the entry response.

No parameters.

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.includeReferenceContentTypeUID()
```
