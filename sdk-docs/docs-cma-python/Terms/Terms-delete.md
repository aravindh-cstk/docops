---
title: "delete"
description: "The delete method lets you remove an existing term from your taxonomy."
url: "https://www.contentstack.com/python-management-terms-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method lets you remove an existing term from your taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| terms_uid | str | Yes | — | UID of the term |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = result = client.stack('api_key').taxonomy('taxonomy_uid').terms('terms_uid').delete('taxonomy_uid')
```
