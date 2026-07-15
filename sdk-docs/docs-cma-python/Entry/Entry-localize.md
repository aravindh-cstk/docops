---
title: "localize"
description: "The localize method will allow you to localize an entry, i.e., the entry will cease to retrieve the data from the fallback language and possess an independent content specific to the selected locale."
url: "https://www.contentstack.com/python-management-entry-localize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## localize

The localize method will allow you to localize an entry, i.e., the entry will cease to retrieve the data from the fallback language and possess an independent content specific to the selected locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Fields and values that you want to add or update for the specified locale |
| locale | str | Yes | — | The language for the entry. Set to en-us by default |

Returns:
Type
Entry

```
data ={
              "entry": {
                  "title": "Home",
                   "url": "/home-french",
                   "tags": [],
                   "locale": "en-us",
                   "uid": "entry_uid",
                   "created_by": "user_uid",
                   "updated_by": "user_uid",
                   "created_at": "2017-06-13T12:34:52.083Z",
                   "updated_at": "2018-12-28T06:33:06.752Z",
                   "ACL": {},
                   "_version": 2
                   }
           }
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types('content_type_uid').entry('entry_uid').localize(data).json()
```
