---
title: "deploy"
description: "The deploy method will publish/unpublish all the items of the release to the specified environment."
url: "https://www.contentstack.com/python-management-release-deploy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## deploy

The deploy method will publish/unpublish all the items of the release to the specified environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
data = {
          "release": {
           "environments": [
               "development"
           ]
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').releases('release_uid').deploy(data).json()
```
