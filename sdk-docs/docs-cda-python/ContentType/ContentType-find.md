---
title: "find"
description: "This method is useful to fetch ContentType of the of the stack."
url: "https://www.contentstack.com/python-contenttype-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

This method is useful to fetch ContentType of the of the stack.

No parameters.

Returns:
Type
dict

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
response = content_type.find()
```
