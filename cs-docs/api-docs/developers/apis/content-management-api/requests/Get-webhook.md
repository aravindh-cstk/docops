---
title: "Get webhook"
description: GET /webhooks/{webhook_uid}
url: developers/apis/content-management-api/requests/get-webhook
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-25
---

# Get webhook


**Method:** `GET`  
**Endpoint:** `/webhooks/{webhook_uid}`

The Get webhook request returns comprehensive information on a specific webhook.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.webhooks.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| webhook_uid | cscb27cf54-3abd-46b4-970e-1f11a11e2905 | Enter the unique ID of the webhook of which you want to retrieve the details. Execute the 'Get all webhooks' call to retrieve the UID of a webhook. |

**Response (200):**

```json
{
    "webhook": {
        "name": "Webhook Test",
        "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "********",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
        "channels": [
            "assets.create",
            "content_types.entries.create"
        ],
        "retry_policy": "manual",
        "branches": [
            "main"
        ],
        "notifiers": [
            "john.doe@gmail.com"
        ],
        "disabled": false,
        "org_uid": "blt**************d5",
        "updated_by": "blt**************de",
        "created_by": "blt**************f1",
        "concise_payload": true,
        "uid": "cs******44-9e58-4153-aa40-b4********df",
        "created_at": "2024-07-16T10:43:06.658Z",
        "updated_at": "2024-07-24T12:42:04.061Z",
        "unhealthy": {
            "state": false
        }
    }
}
```
