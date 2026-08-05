---
title: "ContentType"
description: "The ContentType method retrieves all the content types of a stack. To retrieve a single contenttype, specify its UID."
url: "https://www.contentstack.com/typescript-delivery-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ContentType

The ContentType method retrieves all the content types of a stack. To retrieve a single contenttype, specify its UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUid | string | No | — | UID of the content type |

Returns:
Type
ContentType

**Example:**

```
const contentType = stack.contentType(); // For collection of contentType
// OR
const contentType = stack.contentType('contentTypeUid'); // For a single contentType with uid 'contentTypeUid'
```
