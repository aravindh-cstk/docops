---
title: "fetch"
description: "The fetch method lets you retrieve information about a specific taxonomy in your stack."
url: "https://www.contentstack.com/python-management-taxonomy-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method lets you retrieve information about a specific taxonomy in your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy_uid | str | Yes | — | UID of the taxonomy |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy('taxonomy_uid').fetch('taxonomy_uid').json()
```
