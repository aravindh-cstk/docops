---
title: "Import an Existing Webhook"
description: POST /webhooks/{webhook_uid}/import
url: developers/apis/content-management-api/requests/import-an-existing-webhook
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-25
---

# Import an Existing Webhook


**Method:** `POST`  
**Endpoint:** `/webhooks/{webhook_uid}/import`

The Import an Existing Webhook request will allow you to update the details of an existing webhook.  
To configure the permissions for your application via OAuth, please include the cm.webhooks:import scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | multipart/form-data | Enter "multipart/form-data" to pass a form-data params. |

| webhook_uid | csbd27df54-3aad-46b4-970e-1f11a13e2708 | Enter the unique ID of the webhook that you want to update. |

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
        "created_by": "blt**************f1",
        "concise_payload": false,
        "uid": "cs******66-47ba-4300-948e-d4********98",
        "created_at": "2024-07-25T07:32:43.531Z",
        "updated_at": "2024-07-25T07:51:48.030Z",
        "unhealthy": {
            "state": false
        }
    }
}
```
