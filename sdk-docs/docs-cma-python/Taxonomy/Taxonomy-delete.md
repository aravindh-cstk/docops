---
title: "delete"
description: "The delete method lets you remove an existing taxonomy from your stack."
url: "https://www.contentstack.com/python-management-taxonomy-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method lets you remove an existing taxonomy from your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy_uid | str | Yes | — | UID of the taxonomy |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = result = client.stack('api_key').taxonomy('taxonomy_uid').delete('taxonomy_uid').json()
```
