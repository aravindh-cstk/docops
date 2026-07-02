---
title: "set_field_visibility_rules"
description: "The set\\_field\\_visibility\\_rules method lets you add the field visibility rules to an existing content type."
url: "https://www.contentstack.com/python-management-content-types-set_field_visibility_rules"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## set_field_visibility_rules

The set_field_visibility_rules method lets you add the field visibility rules to an existing content type.

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
                "content_type": {
                "title": "updatedContentType",
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
                            },
                            {
                                    "display_name": "Single Line Textbox",
                                    "uid": "single_line_textbox",
                                "data_type": "text",
                                "field_metadata": {
                                    "_default": True
                                },
                                "unique": False,
                                "multiple": False
                            },
                            {
                                    "display_name": "Multi Line Textbox",
                                    "uid": "multi_line_textbox",
                                    "data_type": "text",
                                    "field_metadata": {
                                            "_default": True
                                    },
                                    "unique": False,
                                    "multiple": False
                            }
                    ],
                    "field_rules": [{
                            "conditions": [{
                                    "operand_field": "single_line_textbox",
                                    "operator": "equals",
                                    "value": "abc"
                            }],
                            "match_type": "all",
                            "actions": [{
                            "action": "show",
                                    "target_field": "multi_line_textbox"
                            }]
                    }],
                    "options": {
                            "title": "title",
                            "publishable": True,
                            "is_page": True,
                            "singleton": False,
                            "sub_title": ["url"],
                            "url_pattern": "/:title",
                            "url_prefix": "/"
                        }
                }
        }
client = contentstack_management.Client(authtoken='auth_token')
content_type = client.stack(api_key='api_key').content_type('content_type_uid')
response = content_type.set_field_visibility_rules(data)
```
