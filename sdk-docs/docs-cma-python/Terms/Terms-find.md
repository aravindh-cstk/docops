---
title: "find"
description: "The find method retrieves the list of all terms available for a taxonomy."
url: "https://www.contentstack.com/python-management-terms-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves the list of all terms available for a taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| terms_uid | str | No | — | UID of the term |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack("api_key").taxonomy("taxonomy_uid").terms().find()
```
