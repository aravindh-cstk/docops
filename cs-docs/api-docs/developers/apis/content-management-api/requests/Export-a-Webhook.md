---
title: "Export a Webhook"
description: GET /webhooks/{webhook_uid}/export
url: developers/apis/content-management-api/requests/export-a-webhook
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-25
---

# Export a Webhook


**Method:** `GET`  
**Endpoint:** `/webhooks/{webhook_uid}/export`

The Export a Webhook request exports an existing webhook. The exported webhook data is saved in a downloadable JSON file. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.  
To configure the permissions for your application via OAuth, please include the cm.webhooks:export scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | multipart/form-data | Enter "multipart/form-data" to pass form-data params. |

| webhook_uid | cs14804cde-9be3-48c3-9008-33a7884bacb5 | Enter the unique ID of the webhook that you want to export.  **Note:** In case you do not know the UID of the webhook, use the **Get all webhooks** request to g |

**Response (200):**

```json
{
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
    "disabled": false,
    "org_uid": "blt**************d5",
    "updated_by": "blt**************f1",
    "created_by": "blt**************f1",
    "concise_payload": false,
    "uid": "cs******01-17d3-4f99-af43-4a********96",
    "created_at": "2024-07-16T06:28:37.170Z",
    "updated_at": "2024-07-16T06:28:37.170Z"
}
```
