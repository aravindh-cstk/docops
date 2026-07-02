---
title: "find"
description: "The find method retrieves the details of all global fields from a particular stack."
url: "https://www.contentstack.com/copy-of-python-management-global-fields-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the details of all global fields from a particular stack.

No parameters.

Returns:
Type
Content Type

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack("api_key").global_fields('global_field_uid').find().json()
```
