---
title: "includeMetadata"
description: "The includeMetadata method includes the entry metadata along with the response body."
url: "https://www.contentstack.com/android-entry-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata

The `includeMetadata` method includes the entry metadata along with the response body.

No parameters.

Returns:
Type
Entry

```
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", environment_name);
Entry entry = stack.contentType("contentTypeUid").entry("entryUid");
entry.includeMetadata();
```
