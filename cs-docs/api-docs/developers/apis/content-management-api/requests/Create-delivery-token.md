---
title: "Create delivery token"
description: POST /stacks/delivery_tokens
url: developers/apis/content-management-api/requests/create-delivery-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-01
---

# Create delivery token


**Method:** `POST`  
**Endpoint:** `/stacks/delivery_tokens`

The Create delivery token request is used to create a delivery token in the stack.

In the Request Body, you need to pass the details of the delivery token in JSON format. The details include the name, description, and the environment of the delivery token.

To create a delivery token with associated preview token, pass the create_with_preview_token query parameter as true.

**Note**: It is highly recommended to set only one publishing environment per delivery token.

You need to specify the branch and alias scope for your delivery token through the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main",
        "development"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy",
        "release"
    ],
    "acl":{
        "read":true
    }
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| Content-Type | application/json |  |

| create_with_preview_token | true | Set this to true to create a preview token. |

**Request Body:**

```json
{
	"token": {
		"name": "Sample Delivery Token",
		"description": "This is a sample delivery token.",
		"scope": [{
			"module": "environment",
			"environments": ["production"],
			"acl": {
				"read": true
			}
		}]
	}
}
```

**Response (200):**

```json
{
    "notice": "Delivery Token created successfully.",
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
                    "uid": "cse639d7ef7edf687b"
                }
            }
        ],
        "preview_token": "cs76f46e9817405ec92b1d2dc1",
        "uid": "blt8041e844c449278a",
        "created_by": "blt0a9cc7075b8decf0",
        "updated_by": "blt0a9cc7075b8decf0",
        "created_at": "2023-11-29T10:45:40.826Z",
        "updated_at": "2023-11-29T10:45:40.826Z",
        "token": "csb2d9c0f6158aff22d9e09460",
        "type": "delivery"
    }
}
```
