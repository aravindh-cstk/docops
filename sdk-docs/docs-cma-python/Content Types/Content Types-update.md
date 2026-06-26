---
title: "update"
description: "The update method updates the schema of an existing content type"
url: "https://www.contentstack.com/python-management-content-types-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method updates the schema of an existing content type

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | str | Yes | — | UID of the content type |
| Data | Dict | Yes | — | The Request body |

Returns:
Type
JSON

```
import contentstack
import contentstack_management
data = {
        >>>        "content_type": {
        >>>         "title": "updated content type",
        >>>         "uid": "content_type_uid",
        >>>         "schema": [
        >>>             {}
            >>>            ],
            >>>            "options": {
            >>>             "title": "title",
            >>>             "sub_title": [
            >>>                     "url"
            >>>             ],
            >>>             "url_pattern": "/:title",
            >>>             "url_prefix": "/"
            >>>             }
            >>>           }
        >>>        }
client = contentstack_management.Client(authtoken='auth_token')
content_type = client.stack(api_key='api_key').content_type("content_type_uid")
response = content_type.update(data)
```
