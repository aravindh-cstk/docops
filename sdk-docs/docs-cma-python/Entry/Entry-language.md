---
title: "language"
description: "The languages method retrieves the details of all the languages that an entry exists in."
url: "https://www.contentstack.com/python-management-entry-language"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## language

The languages method retrieves the details of all the languages that an entry exists in.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry_uid | str | Yes | — | UID of the entry |

Returns:
Type
Entry

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types('content_type_uid').entry('entry_uid').languages().json()
```
