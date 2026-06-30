---
title: "references"
description: "The references method retrieves the details of the content types in which a specific content type is referred."
url: "https://www.contentstack.com/python-management-content-types-references"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## references

The references method retrieves the details of the content types in which a specific content type is referred.

No parameters.

Returns:
Type
JSON

```
import contentstack
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
content_type = client.stack(api_key='api_key').content_type('content_type_uid')
response = content_type.references()
```
