---
title: "Get a single stack"
description: GET /stacks?include_collaborators={boolean_value}&include_stack_variables={boolean_value}&include_discrete_variables={boolean_value}&include_count={boolean_value}
url: developers/apis/content-management-api/requests/get-a-single-stack
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-11-23
---

# Get a single stack


**Method:** `GET`  
**Endpoint:** `/stacks?include_collaborators={boolean_value}&include_stack_variables={boolean_value}&include_discrete_variables={boolean_value}&include_count={boolean_value}`

The Get a single stack call fetches comprehensive details of a specific stack.

**Note**: For SSO-enabled organizations, it is mandatory to pass the organization UID in the header.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | enter_your_stack_api_key | Enter the API Key of the stack that you want to retrieve. |

| authtoken | Your_authtoken | Enter your authtoken. |

| organization_uid | Your_Organization_uid | Enter the UID of your organization. |

| include_collaborators | false | Set this parameter to 'true' to include the details of the stack collaborators. |

| include_stack_variables | false | Set this to 'true' to display the stack variables. Stack variables are extra information about the stack, such as the description, format of date, format of tim |

| include_discrete_variables | false | Set this to 'true' to view the access token of your stack. |

| include_count | false | Set this to 'true' to include in the response the total count of the stacks owned by or shared with a user account. |

**Response (200):**

```json
{
    "stack": {
        "created_at": "2019-08-16T07:10:48.229Z",
        "updated_at": "2022-08-19T10:55:27.580Z",
        "uid": "bltf0ed554f9de444d5",
        "name": "Product Catalog - 2019",
        "description": "For CDA API calls try out section.",
        "org_uid": "blt8b9d1dcc7a9dadcc",
        "api_key": "blt02f7b45378b008ee",
        "master_locale": "en-us",
        "is_asset_download_public": true,
        "owner_uid": "sys_blt815d4d2116f9864d",
        "user_uids": [
            "sys_blt815d4d2116f9864d",
            "bltcd82b2c6bf913241",
            "blt75f100269fb9598f",
            "blt587a89fc7883c56700a95bfe",
            "bltaaba5fbac0ff0622",
            "blt42e55757d70d5f81026a2b9f",
            "blt231cdeced1707e06",
            "blt50a327a5c7049685",
            "blt6563a9b067fc1bc9",
            "blt1e6dead9f06f1560",
            "blt3167f0a16386ed8e",
            "blt5e99c104bb6b1a30",
            "blt80e1cb45e6624b62",
            "blta3007b105b17e5d8",
            "blte75599b1e529fa3a",
            "blt3cf27864e6b61df3",
            "bltd14dd3cbb471a414",
            "bltf926860821be02df",
            "blt59fc93b3f1c8c16b",
            "blt1e0bc4e72027812d",
            "bltd50b1d8587841ba2"
        ],
        "settings": {
            "version": "2019-04-30",
            "rte_version": 3,
            "webhook_enabled": false,
            "language_fallback": false,
            "fallback_publish_contents": true,
            "branches": true
        },
        "SYS_ACL": {
            "others": {
                "invite": false,
                "sub_acl": {
                    "create": false,
                    "read": false,
                    "update": false,
                    "delete": false
                }
            },
            "roles": [
                {
                    "uid": "blt70c41dfd00924e9f",
                    "name": "Developer",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                },
                {
                    "uid": "blt954756afc76573d1",
                    "name": "Admin",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                }
            ]
        },
        "global_search": true
    }
}
```
