---
title: "includeGlobalFieldSchema"
description: "The includeGlobalFieldSchema method includes the schema of the global field in the response."
url: "https://www.contentstack.com/typescript-delivery-contenttypequery-includeglobalfieldschema"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeGlobalFieldSchema

The includeGlobalFieldSchema method includes the schema of the global field in the response.

No parameters.

Returns:
Type
ContentTypeQuery

**Example:**

```
const contentType = stack.ContentType();
const result = contentType.includeGlobalFieldSchema().find<ContentTypes>();
```
