---
title: "include"
description: "The include method includes specific reference fields in the response."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-include"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include

The `include` method includes specific reference fields in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fields | object | Yes | — | An array of reference field UIDs to include |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .include(['related_blogs', 'authors.blogs']) // here related_blogs and authors.blogs are reference field uids
  .find()
```
