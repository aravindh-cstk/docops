---
title: "Create content type with taxonomy"
description: /content_types
url: /create-content-type-with-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2023-11-20T10:11:08.531Z
updated_at: 2023-11-20T10:11:08.531Z
---

# Create content type with taxonomy

<p>The <span data-type='inlineCode'>Create content type with taxonomy</span> request shows you how to add a taxonomy field while creating a content type.</p>
<p>In the “Body” section, you need to provide the complete schema of the content type with the Taxonomy schema as follows:</p>
<pre>
{
   "uid":"taxonomies",
   "taxonomies":[
      {
         "taxonomy_uid":"taxonomy_1",
         "max_terms":5,
         "mandatory":true,
         "non_localizable":false
      },
      {
         "taxonomy_uid":"taxonomy_2",
         "max_terms":10,
         "mandatory":false,
         "non_localizable":false
      }
   ],
   "multiple":true
}
</pre>

**API Endpoint**: `/content_types`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API Key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
- **Content-Type** (required)

## Request Body

```json
{
    "content_type": {
        "title": "Products",
        "uid": "products",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Title",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "mandatory": true,
                "uid": "title",
                "unique": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "data_type": "taxonomy",
                "display_name": "Taxonomy",
                "uid": "taxonomies",
                "taxonomies": [
                    {
                        "taxonomy_uid": "sample_one",
                        "max_terms": 5,
                        "mandatory": true,
                        "non_localizable": false
                    },
                    {
                        "taxonomy_uid": "sample_two",
                        "max_terms": 10,
                        "mandatory": true,
                        "non_localizable": false
                    }
                ],
                "field_metadata": {
                    "description": "",
                    "default_value": ""
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": true,
                "non_localizable": false,
                "unique": false
            }
        ]
        },
        "options": {
            "is_page": false,
            "singleton": true,
            "sub_title": [],
            "title": "title"
        }
    }
```

## Response

```json
{
    "notice": "Content Type created successfully.",
    "content_type": {
        "created_at": "2023-11-20T09:54:01.988Z",
        "updated_at": "2023-11-20T09:54:01.988Z",
        "title": "Products",
        "uid": "products",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "data_type": "text",
                "display_name": "Title",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "mandatory": true,
                "uid": "title",
                "unique": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "data_type": "taxonomy",
                "display_name": "Taxonomy",
                "uid": "taxonomies",
                "taxonomies": [
                    {
                        "taxonomy_uid": "sample_one",
                        "max_terms": 5,
                        "mandatory": true,
                        "non_localizable": false
                    },
                    {
                        "taxonomy_uid": "sample_two",
                        "max_terms": 10,
                        "mandatory": true,
                        "non_localizable": false
                    }
                ],
                "field_metadata": {
                    "description": "",
                    "default_value": ""
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": true,
                "non_localizable": false,
                "unique": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": "",
        "DEFAULT_ACL": {
            "others": {
                "read": false,
                "create": false
            },
            "users": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true
                    },
                    "uid": "blt320416c2d73b856a"
                }
            ],
            "management_token": {
                "read": true
            }
        },
        "SYS_ACL": {
            "roles": [],
            "others": {
                "read": false,
                "create": false,
                "update": false,
                "delete": false,
                "sub_acl": {
                    "read": false,
                    "create": false,
                    "update": false,
                    "delete": false,
                    "publish": false
                }
            }
        },
        "options": {
            "title": "title",
            "is_page": false,
            "singleton": false
        },
        "abilities": {
            "get_one_object": true,
            "get_all_objects": true,
            "create_object": true,
            "update_object": true,
            "delete_object": true,
            "delete_all_objects": true
        }
    }
}
```

