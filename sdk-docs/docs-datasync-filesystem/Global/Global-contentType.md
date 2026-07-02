---
title: "contentType"
description: "The contentType method specifies the content type to query on."
url: "https://www.contentstack.com/datasync-filesystem-global-containedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## contentType

The `contentType` method specifies the content type to query on.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | Yes | — | UID of the content type |

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example').find()
 .then((result) => {
   // returns entries filtered based on 'example' content type
 })
 .catch((error) => {
   // Handle errors that occur during the query execution
 })
```
