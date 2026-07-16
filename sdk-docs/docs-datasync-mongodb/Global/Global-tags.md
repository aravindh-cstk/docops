---
title: "tags"
description: "The `tags` method filters entries/assets that include the specified tags."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## tags

The `tags` method filters entries/assets that include the specified tags.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| tags | array | Yes | — | An array of tags to match |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .tags(['tag1', 'tag2'])
  .find()
  .then((result) => {
    // returns entries which have tags "tag1" and "tag2"
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
