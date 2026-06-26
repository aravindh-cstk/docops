---
title: "logs"
description: "The log method retrieves the organization log entries."
url: "https://www.contentstack.com/python-management-organization-logs"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## logs

The log method retrieves the organization log entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organization_uid | str | Yes | — | UID of the organization |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.organizations('organization_uid').organization_logs().json()
```
