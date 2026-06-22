---
title: "Import a Webhook"
description: POST /webhooks/import
url: developers/apis/content-management-api/requests/import-a-webhook
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-25
---

# Import a Webhook


**Method:** `POST`  
**Endpoint:** `/webhooks/import`

The Import Webhook request imports a webhook. To import a webhook, you need to upload a JSON file with the webhook data.

To configure the permissions for your application via OAuth, please include the cm.webhooks:import scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | multipart/form-data | Enter "multipart/form-data" to pass form-data params. |

**Response (200):**

```json
{
    "notice": "webhook was imported successfully",
    "webhook": {
        "name": "new",
        "destinations": [
            {
                "target_url": "https://www.google.com",
                "http_basic_auth": "",
                "http_basic_password": "",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
        "channels": [
            "content_types.test.entries.update"
        ],
        "retry_policy": "manual",
        "branches": [
            "main"
        ],
        "notifiers": [],
        "retry": {
            "auto": true
        },
        "disabled": false,
        "updated_by": "blt**************de",
        "created_by": "blt**************de",
        "concise_payload": false,
        "uid": "cs******66-47ba-4300-948e-d4********98",
        "created_at": "2024-07-25T07:32:43.531Z",
        "updated_at": "2024-07-25T07:32:43.532Z"
    }
}
```
