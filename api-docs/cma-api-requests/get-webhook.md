---
title: "Get webhook"
description: /webhooks/{webhook_uid}
url: /get-webhook
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.458Z
updated_at: 2024-07-25T07:07:01.972Z
---

# Get webhook

<p>The <span data-type='inlineCode'>Get webhook</span> request returns comprehensive information on a specific webhook.</p><p>When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.webhooks.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/webhooks/{webhook_uid}`

**Method**: `GET`

## URL Parameters

- **webhook_uid** (required)
  <p>Enter the unique ID of the webhook of which you want to retrieve the details. Execute the 'Get all webhooks' call to retrieve the UID of a webhook.<br></p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

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

