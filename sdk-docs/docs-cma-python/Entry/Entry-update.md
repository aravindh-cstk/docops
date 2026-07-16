---
title: "update"
description: "The update method allows you to make changes in the contents of an existing entry."
url: "https://www.contentstack.com/python-management-entry-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method allows you to make changes in the contents of an existing entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The content type UID and any additional data required for the unpublishing process |
| locale | str | Yes | — | The language for the entry. Set to en-us by default. |

Returns:
Type
Entry

```
data = {
          "entry": {
                   "title": "example",
                   "url": "/example"
           }
        }
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types('content_type_uid').entry('entry_uid').update(data).json()
```
