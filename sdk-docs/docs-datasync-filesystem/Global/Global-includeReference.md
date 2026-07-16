---
title: "includeReference"
description: "The `includeReference` method includes referenced entries or assets in the response."
url: "https://www.contentstack.com/datasync-filesystem-global-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReference

The `includeReference` method includes referenced entries or assets in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| depth | number | No | — | Overrides the default reference depth of 4 |

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example')
 .entries()
 .includeReference()
 .find()
```
