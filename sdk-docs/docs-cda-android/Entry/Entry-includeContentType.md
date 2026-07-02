---
title: "includeContentType"
description: "The includeContentType method includes the content type UID of the entry."
url: "https://www.contentstack.com/android-entry-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeContentType

The `includeContentType` method includes the content type UID of the entry.

No parameters.

Returns:
Type
Entry

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
final Entry entry = stack.contentType("contentType").entry("entryUid");
entry.includeContentType()
```
