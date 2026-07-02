---
title: "ancestors"
description: "The ancestors method retrieves information about a specific term in the taxonomy."
url: "https://www.contentstack.com/python-management-terms-ancestors"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ancestors

The ancestors method retrieves information about a specific term in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| terms_uid | str | Yes | — | UID of the term |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy('taxonomy_uid').terms('terms_uid').ancestors().json()
```
