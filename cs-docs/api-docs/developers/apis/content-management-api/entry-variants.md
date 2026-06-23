---
title: "CMA | Entry Variants"
description: Work with entry variants in the Content Management API, including variant-specific retrieval and management flows.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/entry-variants
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Entry Variants

Entry Variants allows you to create content variations for different audiences, languages, and marketing experiments. The key concepts include **Base Entry**, **Entry Variant**, and **Variant Group**. This feature streamlines personalized content management, improves consistency, and simplifies updates.

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

## Create Entry Variant

### Create entry variant

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Create entry variant request lets you create an entry variant of your existing base entry.

**Note**: You must have variant groups linked to relevant content type(s). If you have not linked your content types to a variant group yet, refer to the [Link Content Type](../../../api-detail/content-management-api.md#link-content-types) request.

In the “Body” section, include only the fields that require updating for the entry variant. The system detects changes automatically based on the values provided. All other fields inherit their values from the base entry. For Group and Modular Blocks fields with multiple instances, use the _order property to define the preferred sequence of instance UIDs.

```
{
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Red variant group 1",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        }
      },
      {
        "single_line": "Red variant group 2",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        }
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.csc30ef8fdc0b190fe",
            "base.cs5bafacf1e94ff8c2"
          ]
        }
      ]
    }
  }
}
```

**Note:**

- The _change_set field is automatically included in the response to indicate which fields were updated in the entry variant.
- The system also detects changes in nested fields and includes them in the _change_set field of the response.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

#### Sample Request

```json
{
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Variant 2",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        },
        "multi_line": "Variant 2 Multi"
      },
      {
        "single_line": "Variant 1",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        },
        "multi_line": "Variant 1 Multi"
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.cs5bafacf1e94ff8c2",
            "base.csc30ef8fdc0b190fe"
          ]
        }
      ]
    }
  }
}
```

#### Sample Response

```json
{
    "entry": {
        "uid": "blt**************a1",
        "_variant": {
            "_change_set": [
                "title",
                "url",
                "single_line",
                "group.cs5bafacf1e94ff8c2.single_line",
                "group.cs5bafacf1e94ff8c2.multi_line",
                "group.csc30ef8fdc0b190fe.single_line",
                "group.csc30ef8fdc0b190fe.multi_line"
            ],
            "_order": [
                {
                    "group": [
                        "base.cs5bafacf1e94ff8c2",
                        "base.csc30ef8fdc0b190fe"
                    ]
                }
            ],
            "_instance_uid": "blt**************d5",
            "_uid": "cs1**************02",
            "_base_entry_version": 1
        },
        "_version": 3,
        "created_at": "2024-09-06T13:30:23.305Z",
        "created_by": "blt**************1a",
        "group": [
            {
                "single_line": "Variant 2",
                "_metadata": {
                    "uid": "cs5bafacf1e94ff8c2"
                },
                "multi_line": "Variant 2 Multi"
            },
            {
                "single_line": "Variant 1",
                "_metadata": {
                    "uid": "csc30ef8fdc0b190fe"
                },
                "multi_line": "Variant 1 Multi"
            }
        ],
        "locale": "en-us",
        "single_line": "Red variant",
        "tags": [],
        "title": "red",
        "updated_at": "2024-09-06T13:32:50.403Z",
        "updated_by": "blt**************1a",
        "url": "/red"
    },
    "notice": "Entry variant created successfully."
}
```




## Update Entry Variant

### Update entry variant

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Update entry variant request lets you update an entry variant of your existing base entry.

**Note**: You must have variant groups linked to relevant content type(s). If you have not linked your content types to a variant group yet, refer to the [Link Content Type](../../../api-detail/content-management-api.md#link-content-types) request.

In the “Body” section, include only the fields that require updating for the entry variant. The system detects changes automatically based on the values provided. All other fields inherit their values from the base entry. For Group and Modular Blocks fields with multiple instances, use the _order property to define the preferred sequence of instance UIDs.

```
{
   {
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Variant 2",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        },
        "multi_line": "Variant 2 Multi"
      },
      {
        "single_line": "Variant 1",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        },
        "multi_line": "Variant 1 Multi"
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.cs5bafacf1e94ff8c2",
            "base.csc30ef8fdc0b190fe"
          ]
        }
      ]
    }
  }
}
```

**Note:**

- The _change_set field is automatically included in the response to indicate which fields were updated in the entry variant.
- The system also detects changes in nested fields and includes them in the _change_set field of the response.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

#### Sample Request

```json
{
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Variant 2",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        },
        "multi_line": "Variant 2 Multi"
      },
      {
        "single_line": "Variant 1",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        },
        "multi_line": "Variant 1 Multi"
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.cs5bafacf1e94ff8c2",
            "base.csc30ef8fdc0b190fe"
          ]
        }
      ]
    }
  }
}
```

#### Sample Response

```json
{
    "entry": {
        "uid": "blt**************a1",
        "_variant": {
            "_change_set": [
                "title",
                "url",
                "single_line",
                "group.cs5bafacf1e94ff8c2.single_line",
                "group.cs5bafacf1e94ff8c2.multi_line",
                "group.csc30ef8fdc0b190fe.single_line",
                "group.csc30ef8fdc0b190fe.multi_line"
            ],
            "_order": [
                {
                    "group": [
                        "base.cs5bafacf1e94ff8c2",
                        "base.csc30ef8fdc0b190fe"
                    ]
                }
            ],
            "_instance_uid": "blt**************d5",
            "_uid": "cs1**************02",
            "_base_entry_version": 1
        },
        "_version": 3,
        "created_at": "2024-09-06T13:30:23.305Z",
        "created_by": "blt**************1a",
        "group": [
            {
                "single_line": "Variant 2",
                "_metadata": {
                    "uid": "cs5bafacf1e94ff8c2"
                },
                "multi_line": "Variant 2 Multi"
            },
            {
                "single_line": "Variant 1",
                "_metadata": {
                    "uid": "csc30ef8fdc0b190fe"
                },
                "multi_line": "Variant 1 Multi"
            }
        ],
        "locale": "en-us",
        "single_line": "Red variant",
        "tags": [],
        "title": "red",
        "updated_at": "2024-09-06T13:32:50.403Z",
        "updated_by": "blt**************1a",
        "url": "/red"
    },
    "notice": "Entry variant updated successfully."
}
```




## Get All Entry Variants

### Get all entry variants

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/variants`

The Get all entry variants request retrieves all entry variants of the specified entry.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`
- **include_workflow** (optional)
  Enter “true” to include the workflow details of the entry.
  Default: `true`
- **include_publish_details** (optional)
  Enter “true” to include the publish details of the entry.
  Default: `true`
- **include_rules** (optional)
  Enter “true” to include the publishing rules for the entry.
  Default: `true`
- **skip** (optional)
  Enter the number of items to be skipped from the response body.
  Default: `0`
- **limit** (optional)
  Enter the maximum number of items to be returned.
  Default: `10`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
    "entries": [
        {
            "uid": "blt**************a1",
            "_variant": {
                "_change_set": [
                    "title",
                    "url",
                    "single_line",
                    "group.cs5bafacf1e94ff8c2.single_line",
                    "group.cs5bafacf1e94ff8c2.multi_line",
                    "group.csc30ef8fdc0b190fe.single_line",
                    "group.csc30ef8fdc0b190fe.multi_line"
                ],
                "_order": [
                    {
                        "group": [
                            "base.cs5bafacf1e94ff8c2",
                            "base.csc30ef8fdc0b190fe"
                        ]
                    }
                ],
                "_instance_uid": "blta9cc89a57108129246d5",
                "_uid": "3439b92ff6b5406ab559e7e7f246a49b",
                "_base_entry_version": 1
            },
            "_version": 1,
            "created_at": "2024-09-09T10:28:46.093Z",
            "created_by": "blt6fe92749b66ad81a",
            "group": [
                {
                    "single_line": "Variant 2",
                    "_metadata": {
                        "uid": "cs5bafacf1e94ff8c2"
                    },
                    "multi_line": "Variant 2 Multi"
                },
                {
                    "single_line": "Variant 1",
                    "_metadata": {
                        "uid": "csc30ef8fdc0b190fe"
                    },
                    "multi_line": "Variant 1 Multi"
                }
            ],
            "locale": "en-us",
            "single_line": "Green Variant",
            "tags": [],
            "title": "Green RD",
            "updated_at": "2024-09-09T10:28:46.093Z",
            "updated_by": "blt6fe92749b66ad81a",
            "url": "/green"
        },
        {
            "uid": "blt05097f3d980a17a1",
            "_variant": {
                "_change_set": [
                    "title",
                    "url",
                    "single_line"
                ],
                "_order": [],
                "_instance_uid": "blta9cc89a57108129246d5",
                "_uid": "3439b92ff6b5406ab559e7e7f246a49c",
                "_base_entry_version": 1
            },
            "_version": 4,
            "created_at": "2024-09-06T13:30:23.305Z",
            "created_by": "blt**************1a",
            "locale": "en-us",
            "single_line": "Red variant",
            "tags": [],
            "title": "red",
            "updated_at": "2024-09-09T10:27:44.796Z",
            "updated_by": "blt**************1a",
            "url": "/red"
        }
    ]
}
```




## Get Single Entry Variant

### Get single entry variant

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Get single entry variant request retrieves a single variant entry of a given base entry.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`
- **include_workflow** (optional)
  Enter “true” to include the workflow details of the entry.
  Default: `true`
- **include_publish_details** (optional)
  Enter “true” to include the publish details of the entry.
  Default: `true`
- **include_rules** (optional)
  Enter “true” to include the publishing rules for the entry.
  Default: `true`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
    "entry": {
        "uid": "blt**************a1",
        "_variant": {
            "_change_set": [
                "title",
                "url",
                "single_line",
                "group.cs5bafacf1e94ff8c2.single_line",
                "group.cs5bafacf1e94ff8c2.multi_line",
                "group.csc30ef8fdc0b190fe.single_line",
                "group.csc30ef8fdc0b190fe.multi_line"
            ],
            "_order": [
                {
                    "group": [
                        "base.cs5bafacf1e94ff8c2",
                        "base.csc30ef8fdc0b190fe"
                    ]
                }
            ],
            "_instance_uid": "blta9cc89a57108129246d5",
            "_uid": "3439b92ff6b5406ab559e7e7f246a49b",
            "_base_entry_version": 1
        },
        "_version": 1,
        "created_at": "2024-09-09T10:28:46.093Z",
        "created_by": "blt**************1a",
            "group": [
                {
                    "single_line": "Variant 2",
                    "_metadata": {
                        "uid": "cs5bafacf1e94ff8c2"
                    },
                    "multi_line": "Variant 2 Multi"
                },
                {
                    "single_line": "Variant 1",
                    "_metadata": {
                        "uid": "csc30ef8fdc0b190fe"
                    },
                    "multi_line": "Variant 1 Multi"
                }
            ],
        "locale": "en-us",
        "single_line": "Green Variant",
        "tags": [],
        "title": "Green RD",
        "updated_at": "2024-09-09T10:28:46.093Z",
        "updated_by": "blt**************1a",
        "url": "/green"
    }
}
```




## Delete Entry Variant

### Delete entry variant

**DELETE** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Delete entry variant request lets you delete an entry variant.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

#### Sample Response

```json
{
    "notice": "Entry variant deleted successfully."
}
```




## Publish Entry Variant

### Publish entry variant

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

The Publish entry variant request lets you publish an entry variant.

In the “Body” section, include the variant UID and version within variants. Pass the publish_latest_base_conditionally key as true within variant_rules.

```
"variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ],
        "variant_rules": {
            "publish_latest_base_conditionally": true
        }
```

**Note**: You don't need to include the base entry version in the payload. The entry variant will be published based on the latest version or as specified by the variant_rules toggle. If the base entry version is included, the system will ignore it.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **api_version** (required)
  Enter the API version to include Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "entry": {
        "environments": ["production"],
        "locales": ["en-us"],
        "variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ],
        "variant_rules": {
            "publish_latest_base": false,
            "publish_latest_base_conditionally": true
        }
    },
    "locale": "en-us"
}
```

#### Sample Response

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "75****1f-e**0-46**-a**5-02********9a"
}
```




## Unpublish Entry Variant

### Unpublish entry variant

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/unpublish`

The Unpublish entry variant request lets you unpublish an entry variant.

In the “Body” section, include the version number and variant UID within variants.

```
"variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ]
```

**Note**: You don't need to include the base entry version in the payload. The entry variant will be unpublished based on the latest version or as specified by the variant_rules toggle. If the base entry version is included, the system will ignore it.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **api_version** (required)
  Enter the API version to include Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
    "entry": {
        "environments": ["blt**************fd"],
        "locales": ["en-us"],
        "variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ]
    },
    "locale": "en-us"
}
```

#### Sample Response

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "05****9c-9**0-45**-9**4-ea********37"
}
```

