---
title: "version_naming"
description: "The version_naming method allows you to assign a name to a specific version of an entry."
url: "https://www.contentstack.com/python-management-entry-version_naming"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## version_naming

The version_naming method allows you to assign a name to a specific version of an entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The information you want to send to the server |
| version_number | str | Yes | — | The identifier to a specific version of an entry. |

Returns:
Type
Entry

```
data ={
               "entry": {
                   "_version_name": "Test version",
                   "locale": "en-us",
                   "force": true
               }
           }
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types('content_type_uid').entry('entry_uid').version_naming(data).json()
```
