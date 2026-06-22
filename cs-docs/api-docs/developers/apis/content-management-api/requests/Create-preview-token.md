---
title: "Create preview token"
description: POST /stacks/delivery_tokens/{delivery_token_uid}/preview_token
url: developers/apis/content-management-api/requests/create-preview-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-02
---

# Create preview token


**Method:** `POST`  
**Endpoint:** `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

The Create preview token request creates a Preview token for a particular Delivery token in a stack of your organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| delivery_token_uid | your_delivery_token_uid | Enter the UID of the delivery token for which you want to delete the preview token. |

**Response (201):**

```json
{
    "notice": "Preview token created successfully.",
    "token": {
        "name": "Sample Delivery Token",
        "description": "This is a sample delivery token.",
        "scope": [
            {
                "environments": [
                    {
                        "urls": [
                            {
                                "url": "",
                                "locale": "en-us"
                            }
                        ],
                        "name": "production",
                        "_version": 2,
                        "app_user_object_uid": "system",
                        "uid": "bltb3c6cea2fefce1a6",
                        "created_by": "blt0f1b34d48616093a",
                        "updated_by": "blt0f1b34d48616093a",
                        "created_at": "2023-06-26T12:15:12.745Z",
                        "updated_at": "2023-06-26T12:15:12.745Z",
                        "ACL": [],
                        "tags": []
                    }
                ],
                "module": "environment",
                "acl": {
                    "read": true
                },
                "_metadata": {
                    "uid": "cs965b4bfbe0afec6b"
                }
            }
        ],
        "uid": "blt8041e844c449278a",
        "created_by": "blt0a9cc7075b8decf0",
        "updated_by": "blt0a9cc7075b8decf0",
        "created_at": "2023-11-29T10:45:40.826Z",
        "updated_at": "2023-11-29T10:47:53.587Z",
        "token": "csb2d9c0f6158aff22d9e09460",
        "type": "delivery",
        "preview_token": "cs0d1431d6a4f8fe3d10b1861c"
    }
}
```
