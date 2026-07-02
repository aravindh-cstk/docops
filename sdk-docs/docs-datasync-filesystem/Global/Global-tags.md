---
title: "tags"
description: "The tags method retrieves all unique tags present in the content entries."
url: "https://www.contentstack.com/datasync-filesystem-global-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## tags

The `tags` method retrieves all unique tags present in the content entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | Array | Yes | — | Entries/Assets that have the specified tags |

Returns:
Type
Stack

**Example:**

```
const query = Stack.contentType('example').entries().tags(['technology', 'business']).find()
query.then((result) => {
  // "result" contains list of entries which have tags "technology" and "business".
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
