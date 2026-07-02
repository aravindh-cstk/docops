---
title: "accept_ownership"
description: "The accept\\_ownership method allows the user to take control of the stack."
url: "https://www.contentstack.com/python-management-stack-accept_ownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## accept_ownership

The accept_ownership method allows the user to take control of the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| user_uid | str | Yes | — | UID of the user |
| ownership_token | str | No | — | The ownership token received via email by another user. |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack.ContentstackClient(authtoken='the_authtoken')
response = client.stack('api_key').accept_ownership('user_id', 'ownership_token')
```
