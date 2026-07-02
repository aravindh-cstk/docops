---
title: "includeMetadata"
description: "Includes query metadata along with the response body."
url: "https://www.contentstack.com/java-query-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata

Includes query metadata along with the response body.

No parameters.

Returns:
Type
Query

```
Stack stack = Contentstack.stack("apiKey", "deliveryToken", "environment");
Query query = stack.contentType("contentTypeUid").query();
query.includeMetadata();
```
