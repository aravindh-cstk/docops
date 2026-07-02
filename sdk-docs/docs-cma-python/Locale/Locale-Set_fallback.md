---
title: "Set_fallback"
description: "The Set\\_fallback method allows you to assign a fallback language for an entry in a particular language."
url: "https://www.contentstack.com/python-management-locale-set_fallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Set_fallback

The Set_fallback method allows you to assign a [fallback language](/docs/developers/multilingual-content/about-fallback-languages) for an entry in a particular language.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to assign the fallback language |

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
response = client.stack('api_key').locale().set_fallback(data).json()
```
