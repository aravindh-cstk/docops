---
title: "Create a webhook"
description: POST /webhooks
url: developers/apis/content-management-api/requests/create-a-webhook
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-08-09
---

# Create a webhook


**Method:** `POST`  
**Endpoint:** `/webhooks`

The Create a webhook request allows you to create a new webhook in a specific stack.

In the “Body” section, you need to enter the name of the webhook; the destination details i.e., target URLs, authentication details, and custom headers; and the channels; and set the disabled and concise_payload parameters as per requirement.

The disabled parameter, allows you to enable or disable the webhook. You can set its value to either false to enable the webhook and true to disable the webhook.

The concise_payload parameter allows you to send a concise JSON payload to the target URL when a specific event occurs. To send a comprehensive JSON payload, you can set its value to false. However, to send a concise payload, set the value of the concise_payload parameter to true.

**Note**: Refer to our [Webhook Events](https://www.contentstack.com/docs/developers/set-up-webhooks/webhook-events) document to get a list of conditions that can be included in your request body. You can also set trigger conditions based on actions performed on [entry comments](https://www.contentstack.com/docs/developers/set-up-webhooks/webhook-events#entry-comments) and [discussions](https://www.contentstack.com/docs/developers/set-up-webhooks/webhook-events#entry-discussions).

The authentication_type parameter specifies the type of authentication to be used for the webhook, such as **Basic Auth**, **OAuth2.0 Client Credential**, **Bearer Token**, and **None**. Based on the selected authentication type, you will need to provide the relevant authentication details in the request body.

To add OAuth 2.0 Client Credential authentication, use the following schema in the request body:

```
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
```

**Note**: To get the access_token_url, client_id, client_secret, and request_query_parameters refer to your OAuth application settings. The request query parameters will be appended to the access token URL.

To add Bearer Token authentication, use the following schema in the request body:

```
"destinations": [
            {
                "target_url": "http://example.com",
                "bearer_token": "your_bearer_token",
                "authentication_type": "Bearer",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
```

To configure your webhook without any authentication, use the following schema in the request body:

```
"destinations": [
            {
                "target_url": "http://example.com",
                "authentication_type": "None",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
```

When creating a webhook, you can specify the branch scope through the following schema in the request body:

```
"branches":[
    "main"
]
```

**Note**: To configure the permissions for applications that are using Contentstack OAuth, add the cm.webhooks.management:write user-related permission scope under the OAuth settings of your app in Developer Hub. For more details, refer to the [Contentstack OAuth documentation](https://www.contentstack.com/docs/developers/developer-hub/contentstack-oauth).

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of your stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

**Request Body:**

```json
{
  "webhook":{
    "name":"Basic Test",
    "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "password",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
    "notifiers": "john.doe@gmail.com",
    "channels":[
      "assets.create"
    ],
    "branches":[
      "main"
    ],
    "retry_policy":"automatic",
    "disabled":false,
    "concise_payload":true
  }
}
```

**Response (201):**

```json
{
    "notice": "The webhook was created successfully",
    "webhook": {
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
        "retry_policy": "automatic",
        "branches": [
            "main"
        ],
        "notifiers": [
            "john.doe@gmail.com"
        ],
        "disabled": false,
        "updated_by": "blt**************de",
        "created_by": "blt**************de",
        "concise_payload": true,
        "uid": "cs******2e-b**f-4**0-b**7-ba********19",
        "created_at": "2024-07-11T06:09:00.827Z",
        "updated_at": "2024-07-11T06:09:00.827Z"
    }
}
```
