---
title: "transfer_ownership"
description: "The transfer\\_ownership method transfers the ownership of the organization to another user."
url: "https://www.contentstack.com/python-management-organization-transfer_ownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## transfer_ownership

The transfer_ownership method transfers the ownership of the organization to another user.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The email address of the user to whom you intend to transfer ownership. |
| organization_uid | str | Yes | — | UID of the organization |

Returns:
Type
JSON

```
data = {
     "transfer_to": "abc@sample.com"
  }

import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.organizations('organization_uid').transfer_organizations_ownership(data)
```
