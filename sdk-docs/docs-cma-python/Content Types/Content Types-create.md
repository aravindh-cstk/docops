---
title: "create"
description: "The create method creates a new content type in a particular stack."
url: "https://www.contentstack.com/python-management-content-types-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method creates a new content type in a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
Content Type

```
import contentstack_management
data = {
            "content_type": {
                    "title": "test content type",
                    "uid": "content_type_uid",
                    "schema": [{
                                    "display_name": "Title",
                                    "uid": "title",
                                    "data_type": "text",
                                    "field_metadata": {
                                            "_default": True
                                    },
                                    "unique": False,
                                    "mandatory": True,
                                    "multiple": False
                            },
                            {
                            "display_name": "URL",
                            "uid": "url",
                            "data_type": "text",
                            "field_metadata": {
                                    "_default": True
                            },
                            "unique": False,
                            "multiple": False
                        }
                        ],
                        "options": {
                            "title": "title",
                            "publishable": True,
                            "is_page": True,
                            "singleton": False,
                            "sub_title": [
                                    "url"
                                    ],
                                "url_pattern": "/:title",
                                "url_prefix": "/"
                            }
                    }
            }
content_type = contentstack_management.Client(authtoken='auth_token').stack(api_key='api_key').content_type()
response = content_type.create(data)
```
