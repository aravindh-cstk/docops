---
title: "fetch"
description: "The fetch method retrieves information about a particular label of a stack."
url: "https://www.contentstack.com/python-management-labels-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves information about a particular label of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| label_uid | str | Yes | — | UID of the Label |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').label(label_uid).fetch().json()
```
