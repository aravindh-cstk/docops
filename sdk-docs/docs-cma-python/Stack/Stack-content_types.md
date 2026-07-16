---
title: "content_types"
description: "Content type defines the structure or schema of a page or a section of your web or mobile property."
url: "https://www.contentstack.com/python-management-stack-content_types"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## content_types

Content type defines the structure or schema of a page or a section of your web or mobile property.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | str | No | — | UID of the content type |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken="auth_token")
response = client.stack(api_key).content_types()
```
