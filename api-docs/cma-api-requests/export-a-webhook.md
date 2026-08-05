---
title: "Export a Webhook"
description: /webhooks/{webhook_uid}/export
url: /export-a-webhook
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.424Z
updated_at: 2024-07-25T07:26:45.074Z
---

# Export a Webhook

<p>The <span data-type='inlineCode'>Export a Webhook</span> request exports an existing webhook. The exported webhook data is saved in a downloadable JSON file. The exported file won’t get downloaded automatically. To download the exported file, a <strong>REST API</strong> client, such as <strong>Postman</strong> can be used.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.webhooks:export</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'><span data-type='inlineCode'> </span></span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/webhooks/{webhook_uid}/export`

**Method**: `GET`

## URL Parameters

- **webhook_uid** (required)
  <p>Enter the unique ID of the webhook that you want to export.</p>
<p class="note"><strong>Note:</strong> In case you do not know the UID of the webhook, use the <strong>Get all webhooks</strong> request to get all the webhooks (along with the UIDs).</p>

## Headers

- **api_key** (required)
  <p><br></p>
- **authtoken** (optional)
  <p>Enter&nbsp;your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "multipart/form-data" to pass form-data params.</p>

## Response

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

