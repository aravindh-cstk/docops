---
title: "Import a Webhook"
description: /webhooks/import
url: /import-a-webhook
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.078Z
updated_at: 2024-07-25T07:42:20.772Z
---

# Import a Webhook

<p>The <span data-type='inlineCode'>Import Webhook</span> request imports a webhook. To import a webhook, you need to upload a JSON file with the webhook data.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.webhooks:import</span> scope.</p>

**API Endpoint**: `/webhooks/import`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p><br></p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "multipart/form-data" to pass form-data params.</p>

## Response

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

