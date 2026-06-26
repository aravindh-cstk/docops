---
title: "create"
description: "The create method creates a new entry for the selected content type in a particular stack."
url: "https://www.contentstack.com/python-management-entry-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method creates a new entry for the selected content type in a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The content of the new entry that you want to create. |

Returns:
Type
Entry

```
data = {
           "global_field": {
               "title": "Servlet",
               "uid": "servlet",
           "schema": [{
                   "display_ndata = {
         "entry": {
                    "title": "example",
                    "url": "/example"
                 }
        }
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types().entry().create(data).json()
```
