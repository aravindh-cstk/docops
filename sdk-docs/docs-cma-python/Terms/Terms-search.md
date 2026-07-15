---
title: "search"
description: "The search method retrieves the information about specified terms in the taxonomy."
url: "https://www.contentstack.com/python-management-terms-search"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## search

The search method retrieves the information about specified terms in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| terms_string | str | Yes | — | The string of UIDs of the terms you want to search for. |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy('taxonomy_uid').terms('terms_uid').search("terms_string")
```
