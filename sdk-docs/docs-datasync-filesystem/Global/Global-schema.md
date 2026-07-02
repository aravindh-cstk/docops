---
title: "schema"
description: "The schema method fetches the schema definition of a content type."
url: "https://www.contentstack.com/datasync-filesystem-global-schema"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## schema

The `schema` method fetches the schema definition of a content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Fetches the schema for the content type with the given UID |

Returns:
Type
Stack

**Example:**

```
Stack.schema(uid?: string).find()
```
