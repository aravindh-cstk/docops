---
title: "find"
description: "The find method retrieves all global fields in the stack."
url: "https://www.contentstack.com/copy-of-untitled"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves all global fields in the stack.

No parameters.

Returns:
Type
dict

**Example:**

```
import contentstack
stack = contentstack.Stack('api_key', 'delivery_token', 'environment')
some_dict = {'abc':'something'}
global_field = stack.global_field('global_field_uid')
response = global_field.find(param=some_dict)
```
