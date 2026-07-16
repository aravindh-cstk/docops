---
title: "references"
description: "The references method retrieves the details of all the entries referenced by a particular entry."
url: "https://www.contentstack.com/python-management-entry-references"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## references

The references method retrieves the details of all the entries referenced by a particular entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry_uid | str | Yes | — | UID of the entry |

Returns:
Type
Entry

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types('content_type_uid').entry('entry_uid').references().json()
```
