---
title: "Get all webhooks"
description: /webhooks
url: /get-all-webhooks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.262Z
updated_at: 2024-07-25T06:57:56.204Z
---

# Get all webhooks

<p>The <span data-type='inlineCode'>Get all Webhooks</span> request returns comprehensive information on all the available webhooks in the specified stack.</p><p class="tip"><strong>Tip:</strong> Execute this call when you wish to retrieve the UID of a webhook.</p><p>When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.webhooks.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/webhooks`

**Method**: `GET`

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Response

```json
{
    "webhooks": [
        {
            "name": "Basic Test",
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
                "assets.create"
            ],
            "retry_policy": "manual",
            "notifiers": [
                "john.doe@gmail.com"
            ],
            "disabled": false,
            "applikation_id": "blt**************b7",
            "org_uid": "blt**************d5",
            "updated_by": "blt**************de",
            "created_by": "blt**************de",
            "app_user_object_uid": "system",
            "concise_payload": true,
            "uid": "cs******2e-b24f-46c0-b087-ba********19",
            "created_at": "2024-07-11T06:09:00.827Z",
            "updated_at": "2024-07-11T06:09:00.827Z",
            "__v": 0
        },
        {
            "name": "Aman Test",
            "destinations": [
                {
                    "target_url": "http://example.com",
                    "access_token_url": "your_access_token_url",
                    "client_id": "your_client_id",
                    "client_secret": "your_client_secret",
                    "request_query_parameters": "=",
                    "authentication_type": "OAuth2",
                    "custom_header": [
                        {
                            "header_name": "",
                            "value": ""
                        }
                    ]
                }
            ],
            "channels": [
                "content_types.entries.create"
            ],
            "retry_policy": "manual",
            "notifiers": [],
            "disabled": false,
            "applikation_id": "blt**************b7",
            "org_uid": "blt**************d5",
            "updated_by": "blt**************a8",
            "created_by": "blt**************a8",
            "app_user_object_uid": "system",
            "concise_payload": false,
            "uid": "cs******2b-ed6b-4eaa-9ca7-b9********61",
            "created_at": "2024-07-03T12:11:34.794Z",
            "updated_at": "2024-07-03T12:11:34.794Z",
            "__v": 0
        }
    ],
    "destination": {}
}
```

