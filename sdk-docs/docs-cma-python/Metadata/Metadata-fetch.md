---
title: "fetch"
description: "The fetch method retrieves the details of the metadata attached to a specific asset or entry of a stack."
url: "https://www.contentstack.com/python-management-metadata-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves the details of the metadata attached to a specific asset or entry of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| metadata_uid | str | Yes | — | UID of the metadata |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').metadata('metadata_uid').fetch().json()
```
