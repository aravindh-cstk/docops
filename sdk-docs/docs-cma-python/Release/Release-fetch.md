---
title: "fetch"
description: "The fetch method retrieves the details of a specific release from the stack."
url: "https://www.contentstack.com/python-management-release-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves the details of a specific release from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| release_uid | str | Yes | — | UID of the release |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases('release_uid').fetch().json()
```
