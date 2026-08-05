---
title: "descendants"
description: "The descendants method retrieves the information about a specific term in your taxonomy."
url: "https://www.contentstack.com/python-management-terms-descendants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## descendants

The descendants method retrieves the information about a specific term in your taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| terms_uid | str | Yes | — | UID of the term |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy('taxonomy_uid').terms('terms_uid').descendants().json()
```
