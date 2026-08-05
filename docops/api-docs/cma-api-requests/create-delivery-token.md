---
title: "Create delivery token"
description: /stacks/delivery_tokens
url: /create-delivery-token
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.216Z
updated_at: 2024-02-01T18:08:34.130Z
---

# Create delivery token

<p>The <span data-type='inlineCode'>Create delivery token</span> request is used to create a delivery token in the stack.</p><p>In the Request Body, you need to pass the details of the delivery token in JSON format. The details include the name, description, and the environment of the delivery token.</p><p>To create a delivery token with associated preview token, pass the <span data-type='inlineCode'>create_with_preview_token</span> query parameter as <span data-type='inlineCode'>true</span>.</p><p class="note"><strong>Note</strong>: It is highly recommended to set only one publishing environment per delivery token.</p><p>You need to specify the branch and alias scope for your delivery token&nbsp;through the following schema in the request body:</p><pre>{<br />    "module":"branch",<br />    "branches":[<br />        "main",<br />        "development"<br />    ],<br />    "acl":{<br />        "read":true<br />    }<br />},<br />{<br />    "module":"branch_alias",<br />    "branch_aliases":[<br />        "deploy",<br />        "release"<br />    ],<br />    "acl":{<br />        "read":true<br />    }<br />}</pre>

**API Endpoint**: `/stacks/delivery_tokens`

**Method**: `POST`

## Query Parameters

- **create_with_preview_token** (optional)
  <p>Set this to true to create a preview token.</p>

## Headers

- **api_key** (required)
- **authtoken** (required)
- **Content-Type** (required)

## Request Body

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

## Response

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

