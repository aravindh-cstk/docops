---
title: "Create preview token"
description: /stacks/delivery_tokens/{delivery_token_uid}/preview_token
url: /create-preview-token
product: Contentstack
doc_type: api-request
created_at: 2024-02-01T18:02:25.689Z
updated_at: 2024-02-02T11:12:55.232Z
---

# Create preview token

<p>The <span data-type='inlineCode'>Create preview token</span> request creates a Preview token for a particular Delivery token in a stack of your organization.</p>

**API Endpoint**: `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

**Method**: `POST`

## URL Parameters

- **delivery_token_uid** (required)
  <p>Enter the UID of the delivery token for which you want to delete the preview token.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **authorization** (optional)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body. </p>

## Response

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

