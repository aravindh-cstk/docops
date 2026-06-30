---
title: "delete"
description: "The delete method removes a specific release from your stack."
url: "https://www.contentstack.com/python-management-release-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method removes a specific release from your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| release_uid | str | Yes | — | UID of the release |

Returns:
Type
Release

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases('release_uid').delete().json()
```
