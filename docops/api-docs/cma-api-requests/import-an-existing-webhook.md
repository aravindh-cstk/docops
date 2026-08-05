---
title: "Import an Existing Webhook"
description: /webhooks/{webhook_uid}/import
url: /import-an-existing-webhook
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.147Z
updated_at: 2024-07-25T07:53:10.933Z
---

# Import an Existing Webhook

<p>The <span data-type='inlineCode'>Import an Existing Webhook</span> request will allow you to update the details of an existing webhook.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.webhooks:import</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/webhooks/{webhook_uid}/import`

**Method**: `POST`

## URL Parameters

- **webhook_uid** (required)
  <p>Enter the unique ID of the webhook that you want to update.</p>

## Headers

- **api_key** (required)
  <p><br></p>
- **authtoken** (optional)
  <p>Enter&nbsp;your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "multipart/form-data" to pass a form-data params.</p>

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

