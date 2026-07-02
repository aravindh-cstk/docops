---
title: "unlocalize"
description: "The unlocalize method will allow you to unlocalize an existing entry, i.e., the entry will retrieve the data from the fallback language."
url: "https://www.contentstack.com/python-management-entry-unlocalize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## unlocalize

The unlocalize method will allow you to unlocalize an existing entry, i.e., the entry will retrieve the data from the fallback language.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | str | Yes | — | The language for the entry. Set to en-us by default. |

Returns:
Type
Entry

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types('content_type_uid').entry('entry_uid').unlocalize().json()
```
