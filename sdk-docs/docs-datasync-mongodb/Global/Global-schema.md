---
title: "schema"
description: "The schema method fetches the schema definition for the specified content type."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-schema"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## schema

The `schema` method fetches the schema definition for the specified content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID of the content type |

Returns:
Type
Stack

**Example:**

```
Stack
  .schema('blog')
  .find()
```
