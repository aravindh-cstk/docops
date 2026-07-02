---
title: "find"
description: "The find method retrieves all the content types of the stack."
url: "https://www.contentstack.com/typescript-delivery-contenttypequeryfind"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves all the content types of the stack.

No parameters.

Returns:
Type
Promise

**Example:**

```
import { BaseContentType, FindContentType } from '@contentstack/delivery-sdk'


interface BlogPostContentType extends BaseContentType {
  // custom content type schema
}

const result = await stack.contentType().find<BlogPostContentType>();
```
