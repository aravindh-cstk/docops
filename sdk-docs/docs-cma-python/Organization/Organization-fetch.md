---
title: "fetch"
description: "The fetch method retrieves the organization entries."
url: "https://www.contentstack.com/python-management-organization-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves the organization entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organization_uid | str | Yes | — | UID of the organization |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.organizations('organization_uid').fetch().json()
```
