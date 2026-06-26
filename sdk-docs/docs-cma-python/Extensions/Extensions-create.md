---
title: "create"
description: "The create method adds a new extension in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/python-management-extensions-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method adds a new extension in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to create a new extension |

Returns:
Type
JSON

```
extension = {
           tags: [
           'tag1',
           'tag2'
           ],
           data_type: 'text',
           title: 'Old Extension',
           src: "Enter either the source code (use 'srcdoc') or the external hosting link of the extension depending on the hosting method you selected.",
           multiple: false,
           config: {},
           type: 'field'
       }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').extension("extension_uid").update(extension).json()
```
