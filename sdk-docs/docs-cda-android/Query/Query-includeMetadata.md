---
title: "includeMetadata"
description: "The includeMetadata method retrieves entries by including query metadata in the response body."
url: "https://www.contentstack.com/android-query-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata

The `includeMetadata` method retrieves entries by including query metadata in the response body.

No parameters.

Returns:
Type
Query

```
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", environment_name);
Query query = stack.contentType("contenTypeUid").query();
query.includeMetadata();
```
