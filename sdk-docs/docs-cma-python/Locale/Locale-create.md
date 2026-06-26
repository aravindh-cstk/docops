---
title: "create"
description: "The create method lets you add a new language to your stack. You can either add a supported language or a custom language of your choice."
url: "https://www.contentstack.com/python-management-locale-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method lets you add a new language to your stack. You can either add a supported language or a custom language of your choice.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to create a new locale |

Returns:
Type
JSON

```
data = {
"locale":{
          "name":"Arabic - Bahrain",
          "code":"ar-bh",
          "fallback_locale":"en-us"
       }
     }
import contentstack_management 
client = contentstack_management.Client(authtoken='your_authtoken')
response = client.stack('api_key').locale().create(data).json()
```
