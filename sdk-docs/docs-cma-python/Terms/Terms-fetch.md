---
title: "fetch"
description: "The fetch method retrieves the information about a specific taxonomy in your stack."
url: "https://www.contentstack.com/python-management-terms-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves the information about a specific taxonomy in your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| terms_uid | str | No | — | UID of the term |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').taxonomy('taxonomy_uid').terms('terms_uid').fetch()
```
