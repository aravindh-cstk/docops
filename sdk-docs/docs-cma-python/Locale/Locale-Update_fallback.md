---
title: "Update_fallback"
description: "The Update_fallback method allows you to update the fallback language for an existing language of your stack."
url: "https://www.contentstack.com/python-management-locale-update_fallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update_fallback

The Update_fallback method allows you to update the fallback language for an existing language of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to assign the fallback language |
| locale_code | str | Yes | — | Code of the specific language |

Returns:
Type
JSON

```
data = {
  "locale": {
    "name": "German",
    "code": "de",
    "fallback_locale": "en-us"
      }
}
import contentstack_management 
client = contentstack_management.Client(authtoken='your_authtoken')
response = client.stack('api_key').locale("locale_code").update_fallback(data).json()
```
