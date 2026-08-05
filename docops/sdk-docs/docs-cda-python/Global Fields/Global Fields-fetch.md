---
title: "fetch"
description: "The fetch method retrieves data for the specified global field."
url: "https://www.contentstack.com/untitled"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves data for the specified global field.

No parameters.

Returns:
Type
dict

**Example:**

```
import contentstack
stack = contentstack.Stack('api_key', 'delivery_token', 'environment')
global_field = stack.global_field('global_field_uid')
response = global_field.fetch()
```
