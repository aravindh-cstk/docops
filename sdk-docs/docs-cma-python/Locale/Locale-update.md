---
title: "update"
description: "The update method lets you update the details (such as display name) and the fallback language of an existing language of your stack."
url: "https://www.contentstack.com/python-management-locale-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method lets you update the details (such as display name) and the fallback language of an existing language of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated data of the locale |
| locale_code | str | Yes | — | Code of the specific language |

Returns:
Type
JSON

```
data ={
  "locale":{
    "name":"Updated Locale Name",
    "fallback_locale":"zh-cn"
  }
}


import contentstack_management 
client = contentstack_management.Client(authtoken='your_authtoken')
response = client.stack('api_key').locale("locale_code").update(data).json()
```
