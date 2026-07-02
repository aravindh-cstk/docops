---
title: "find"
description: "The find method retrieves the details of all the management tokens created in the stack."
url: "https://www.contentstack.com/python-management-management-token-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the details of all the management tokens created in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| management_token_uid | str | Yes | — | UID of the management token |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack("api_key").management_token().find().json()
```
