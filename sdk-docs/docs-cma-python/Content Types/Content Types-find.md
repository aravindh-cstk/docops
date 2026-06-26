---
title: "find"
description: "The find method retrieves the details of all content types."
url: "https://www.contentstack.com/python-management-content-types-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves the details of all content types.

No parameters.

Returns:
Type
JSON

```
import contentstack
import contentstack_management
content_type = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').content_type()
response = content_type.find()
```
