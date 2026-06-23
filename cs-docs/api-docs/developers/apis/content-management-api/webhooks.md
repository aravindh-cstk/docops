---
title: "CMA | Webhooks"
description: Create, update, fetch, and manage webhooks that trigger external workflows from Contentstack events.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/webhooks
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Webhooks

A webhook is a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account. Webhooks allow you to specify a URL to which you would like Contentstack to post data when an event happens. Read more about [Webhooks](/docs/developers/set-up-webhooks).

**Note**: If any key name in the response data sent to a notification URL begins with a dollar sign ($), it will be prefixed with the acronym "cs" as a wildcard. For example, the key named "$success" would be replaced with "cs$success." For more information, refer to our [API Change Log](/docs/developers/apis/api-change-log#january-21-2022) documentation.

## Get all Webhooks

### Get all webhooks

**GET** `/webhooks`

The Get all Webhooks request returns comprehensive information on all the available webhooks in the specified stack.

**Tip:** Execute this call when you wish to retrieve the UID of a webhook.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.webhooks.management:read scope.

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Response

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




## Get Single Webhook

### Get webhook

**GET** `/webhooks/{webhook_uid}`

The Get webhook request returns comprehensive information on a specific webhook.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.webhooks.management:read scope.

#### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook of which you want to retrieve the details. Execute the 'Get all webhooks' call to retrieve the UID of a webhook.
  Default: `cscb27cf54-3abd-46b4-970e-1f11a11e2905`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

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




## Create a Webhook

### Create a webhook

**POST** `/webhooks`

The Create a webhook request allows you to create a new webhook in a specific stack.

In the “Body” section, you need to enter the name of the webhook; the destination details i.e., target URLs, authentication details, and custom headers; and the channels; and set the disabled and concise_payload parameters as per requirement.

The disabled parameter, allows you to enable or disable the webhook. You can set its value to either false to enable the webhook and true to disable the webhook.

The concise_payload parameter allows you to send a concise JSON payload to the target URL when a specific event occurs. To send a comprehensive JSON payload, you can set its value to false. However, to send a concise payload, set the value of the concise_payload parameter to true.

**Note**: Refer to our [Webhook Events](../../../../cs-docs/developers/set-up-webhooks/webhook-events.md) document to get a list of conditions that can be included in your request body. You can also set trigger conditions based on actions performed on [entry comments](../../../../cs-docs/developers/set-up-webhooks/webhook-events.md#entry-comments) and [discussions](../../../../cs-docs/developers/set-up-webhooks/webhook-events.md#entry-discussions).

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

**Note**: To configure the permissions for applications that are using Contentstack OAuth, add the cm.webhooks.management:write user-related permission scope under the OAuth settings of your app in Developer Hub. For more details, refer to the [Contentstack OAuth documentation](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md).

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

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

#### Sample Response

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




## Update Webhook

### Update webhook

**PUT** `/webhooks/{webhook_uid}`

The Update webhook request allows you to update the details of an existing webhook in the stack.

In the “Body” section, you need to enter new details such as the name of the webhook; the destination details i.e., target URLs, authentication details, and custom headers; and the channels; or reset the disabled or concise_payload parameters as per requirement.

The disabled parameter allows you to enable or disable the webhook. You can set its value to either false to enable the webhook and true to disable the webhook.

The concise_payload parameter allows you to send a concise JSON payload to the target URL when a specific event occurs. To send a comprehensive JSON payload, you can set its value to false. However, to send a concise payload, set the value of the concise_payload parameter to true.

**Note**: Refer to our [Webhook Events](../../../../cs-docs/developers/set-up-webhooks/webhook-events.md) document to get a list of conditions that can be included in your request body. You can also set trigger conditions based on actions performed on [entry comments](../../../../cs-docs/developers/set-up-webhooks/webhook-events.md#entry-comments) and [discussions](../../../../cs-docs/developers/set-up-webhooks/webhook-events.md#entry-discussions).

The authentication_type parameter specifies the type of authentication to be used for the webhook, such as **Basic Auth**, **OAuth2.0 Client Credential**, **Bearer Token**, and **None**. Based on the selected authentication type, you will need to provide the relevant authentication details in the request body.

To update your OAuth 2.0 Client Credential authentication, use the following schema in the request body:

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

To update your Bearer Token authentication, use the following schema in the request body:

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

To update your webhook without any authentication, use the following schema in the request body:

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

When updating a webhook, you can specify the branch scope through the following schema in the request body:

```
"branches":[
    "main"
]
```

**Note**: To configure the permissions for applications that are using Contentstack OAuth, add the cm.webhooks.management:write user-related permission scope under the OAuth settings of your app in Developer Hub. For more details, refer to the [Contentstack OAuth documentation](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md).

#### URL Parameters

- **webhook_uid** (required)
  Enter the UID of the webhook that you want to update. Execute the “Get all webhooks” request to retrieve the UID of a webhook.
  Default: `csbe27cf64-3abd-86b4-970e-1f11b14e2705`

#### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
  "webhook":{
    "name":"Webhook Update Test",
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

#### Sample Response

```json
{
    "notice": "The Webhook was updated successfully",
    "webhook": {
        "name": "Webhook Update Test",
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
        "uid": "cs******2e-b24f-46c0-b087-ba********19",
        "created_at": "2024-07-11T06:09:00.827Z",
        "updated_at": "2024-07-11T08:10:12.888Z",
        "unhealthy": {
            "state": false
        }
    }
}
```




## Delete Webhook

### Delete webhook

**DELETE** `/webhooks/{webhook_uid}`

The Delete webhook call deletes an existing webhook from a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.webhooks.management:write scope.

#### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook that you want to delete. Execute the 'Get all webhooks' call to retrieve the UID of a webhook.
  Default: `bltc7aa14ea1959b252`

#### Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
    "notice": "The Webhook was deleted successfully"
}
```




## Export Webhook

### Export a Webhook

**GET** `/webhooks/{webhook_uid}/export`

The Export a Webhook request exports an existing webhook. The exported webhook data is saved in a downloadable JSON file. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.  
To configure the permissions for your application via OAuth, please include the cm.webhooks:export scope.

#### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook that you want to export. **Note:** In case you do not know the UID of the webhook, use the **Get all webhooks** request to get all the webhooks (along with the UIDs).
  Default: `cs14804cde-9be3-48c3-9008-33a7884bacb5`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "multipart/form-data" to pass form-data params.
  Default: `multipart/form-data`

#### Sample Response

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




## Import Webhook

The 'Import Webhook' section consists of the following two requests that will help you to import new Webhooks or update existing ones by uploading JSON files.

**Note:** You can try the call manually in any REST API client, such as Postman, by passing a 'Body' parameter named webhook under form-data. Select the input type as 'File' and select the JSON file of the webhook that you want to import.

### Import a Webhook

**POST** `/webhooks/import`

The Import Webhook request imports a webhook. To import a webhook, you need to upload a JSON file with the webhook data.

To configure the permissions for your application via OAuth, please include the cm.webhooks:import scope.

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "multipart/form-data" to pass form-data params.
  Default: `multipart/form-data`

#### Sample Response

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


### Import an Existing Webhook

**POST** `/webhooks/{webhook_uid}/import`

The Import an Existing Webhook request will allow you to update the details of an existing webhook.  
To configure the permissions for your application via OAuth, please include the cm.webhooks:import scope.

#### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook that you want to update.
  Default: `csbd27df54-3aad-46b4-970e-1f11a13e2708`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "multipart/form-data" to pass a form-data params.
  Default: `multipart/form-data`

#### Sample Response

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




## Get Webhook Executions

### Get executions of a webhook

**GET** `/webhooks/{webhook_uid}/executions?from=2020-12-14T08:00:00.000Z&to=2020-12-22T07:59:59.999Z&query={ "status": { "$gte": "200", "$lte": "399" } }`

The Get executions of a webhook request allows you to fetch the execution details of a specific webhook, which includes the **execution UID**. These details are instrumental in retrieving webhook logs and retrying a failed webhook.  
To configure the permissions for your application via OAuth, please include the cm.webhook:read scope.

**Note**: You can retrieve webhook log information only for **30 days** prior to the current day.

Each execution of a webhook is assigned a unique ID that allows you to gather information, such as request-response body, retry attempts, and so on, pertaining to a specific execution of the webhook.

To filter the webhook execution details based on a specific date range, you must pass from and to as query parameters. For both of these parameters, provide a date in ISO format as the value. For instance, to set the start date in the from parameter to December 8, 2017, you can pass the date in ISO format as shown below:  
  
from=2017-12-08T00:00:00.000Z

To filter the webhook execution details based on whether the webhook successfully ran or failed to execute, pass the query parameter under the URL Parameters section, and provide a query in JSON format as its value. Within the query, you can use the status key to filter the response as per your desired execution status.

The following table shows values you can use for the query parameter:

| Webhook Execution Status | Query JSON Value |
| --- | --- |
| Success | ```
{
  "status": {
    "$gte": "200",
    "$lte": "399"
  }
}
``` |
| Failure | ```
{
  "status": {
    "$gte": “400",
    "$lte": “599"
  }
}
``` |

This API request will return a maximum of **100** records while fetching the execution details for a specific webhook. Previously, there was no limit on the number of records returned. You can use the "[skip](/docs/developers/apis/content-delivery-api#skip)" parameter to fetch older records. To limit the number of records returned, you can use the “[limit](/docs/developers/apis/content-delivery-api#limit)” parameter.

#### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook of which you want to retrieve the details. Execute the 'Get all webhooks' call to retrieve the uid of a webhook.
  Default: `cs2642bec9-c336-4da1-8aad-fded56c7d50e`

#### Query Parameters

- **from** (optional)
  Enter the start date for your date range filter in ISO format.
  Default: `2016-10-07T12:34:36.000Z`
- **to** (optional)
  Enter the end date for your date range filter in ISO format.
  Default: `2020-12-22T07:59:59.999Z`
- **query** (optional)
  Enter the actual query that will be executed to retrieve failed or successful webhook executions. This query should be in JSON format.
  Default: `{  "status": {     "$gte": "200",     "$lte": "399"   } }`
- **only_events** (optional)
  Set to true to receive events without "request_details," and set to false to include "request_details" in the response.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of your stack
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
    "webhooks": [
        {
            "uid": "cs******e5-3c3f-41a2-b0ac-5b********25",
            "channel": [
                "content_types.entries.update",
                "content_types.ref.entries.update",
                "content_types.ref.entries.bltd97eb3484fc00c48.update"
            ],
            "created_at": "2024-07-25T08:48:56.919Z",
            "event_data": {
                "module": "entry",
                "api_key": "blt**************b7",
                "data": {
                    "entry": {
                        "title": "test 19",
                        "file": null,
                        "tags": [
                            "d"
                        ],
                        "locale": "en-us",
                        "uid": "blt**************48",
                        "created_by": "blt**************f1",
                        "updated_by": "blt**************de",
                        "created_at": "2024-05-28T12:57:24.162Z",
                        "updated_at": "2024-07-25T08:48:46.460Z",
                        "ACL": {},
                        "_version": 44,
                        "_in_progress": false
                    },
                    "content_type": {
                        "created_at": "2024-05-15T10:12:26.284Z",
                        "created_by": "blt**************a2",
                        "updated_at": "2024-05-15T10:12:36.656Z",
                        "updated_by": "blt**************a2",
                        "title": "Ref",
                        "uid": "ref",
                        "description": "",
                        "schema": [
                            {
                                "data_type": "text",
                                "display_name": "Title",
                                "field_metadata": {
                                    "_default": true,
                                    "version": 3
                                },
                                "mandatory": true,
                                "uid": "title",
                                "unique": true,
                                "multiple": false,
                                "non_localizable": false,
                                "indexed": false,
                                "inbuilt_model": false
                            },
                            {
                                "data_type": "file",
                                "display_name": "File",
                                "uid": "file",
                                "extensions": [],
                                "field_metadata": {
                                    "description": "",
                                    "rich_text_type": "standard"
                                },
                                "mandatory": false,
                                "multiple": false,
                                "non_localizable": false,
                                "unique": false,
                                "indexed": false,
                                "inbuilt_model": false
                            }
                        ],
                        "options": {
                            "is_page": false,
                            "singleton": false,
                            "sub_title": [],
                            "title": "title"
                        }
                    },
                    "branch": {
                        "uid": "main",
                        "source": "",
                        "alias": []
                    }
                },
                "event": "update"
            },
            "event_headers": {
                "Content-Type": "application/json",
                "User-Agent": "Contentstack",
                "X-Contentstack-Signature": "75e9068f3ca4e2ef7cdbfbb2480822f5f6473ac5",
                "Authorization": null,
                "X-Contentstack-Request-Signature": "v1=n9uHP1hmYcBz82h5imH3+EKTzfyl7tTxBnp6vn1giT4dT/FMhOLPBGkQ4PMu9k9lgcSkBfLHjmTWDUgBZxK/STyFHJKjgYjUEvLflRV1gUlzYmqFXbU+lmYLzsy/DnVwaH70fAcvXa6sbobvzugbAAoP5BVeGXI0Ldd9OPbFFIy8/j/oBVVp7nNMDZIpRxIVAHYX0lmUmFdlsAmzKhNNx0zyPmwS+jooeYYNL7bDSRu1ORlSNC2iNwAD/SSe3N8gYjUaws1d04yr7qAykszdJatxDs0S4dyWWz+XBNjXska9aGzxgt0CidecRlnL6VSaOvCPDCXj+P3L7u0FTr/n0Q=="
            },
            "org_uid": "blt**************d5",
            "request_details": [
                {
                    "_id": "cs4740e44f-24ab-4d15-9d6e-614bceceb58d",
                    "retry_number": 0,
                    "request": {
                        "method": "POST",
                        "followAllRedirects": true,
                        "uri": "https://www.googe.com",
                        "body": {
                            "triggered_at": "2024-07-25T08:48:46.861Z",
                            "module": "entry",
                            "api_key": "blt**************b7",
                            "data": {
                                "entry": {
                                    "title": "test 19",
                                    "file": null,
                                    "tags": [
                                        "d"
                                    ],
                                    "locale": "en-us",
                                    "uid": "blt**************48",
                                    "created_by": "blt**************f1",
                                    "updated_by": "blt**************de",
                                    "created_at": "2024-05-28T12:57:24.162Z",
                                    "updated_at": "2024-07-25T08:48:46.460Z",
                                    "ACL": {},
                                    "_version": 44,
                                    "_in_progress": false
                                },
                                "content_type": {
                                    "created_at": "2024-05-15T10:12:26.284Z",
                                    "created_by": "blt**************a2",
                                    "updated_at": "2024-05-15T10:12:36.656Z",
                                    "updated_by": "blt**************a2",
                                    "title": "Ref",
                                    "uid": "ref",
                                    "description": "",
                                    "schema": [
                                        {
                                            "data_type": "text",
                                            "display_name": "Title",
                                            "field_metadata": {
                                                "_default": true,
                                                "version": 3
                                            },
                                            "mandatory": true,
                                            "uid": "title",
                                            "unique": true,
                                            "multiple": false,
                                            "non_localizable": false,
                                            "indexed": false,
                                            "inbuilt_model": false
                                        },
                                        {
                                            "data_type": "file",
                                            "display_name": "File",
                                            "uid": "file",
                                            "extensions": [],
                                            "field_metadata": {
                                                "description": "",
                                                "rich_text_type": "standard"
                                            },
                                            "mandatory": false,
                                            "multiple": false,
                                            "non_localizable": false,
                                            "unique": false,
                                            "indexed": false,
                                            "inbuilt_model": false
                                        }
                                    ],
                                    "options": {
                                        "is_page": false,
                                        "singleton": false,
                                        "sub_title": [],
                                        "title": "title"
                                    }
                                },
                                "branch": {
                                    "uid": "main",
                                    "source": "",
                                    "alias": []
                                }
                            },
                            "event": "update"
                        },
                        "headers": {
                            "Content-Type": "application/json",
                            "User-Agent": "Contentstack",
                            "X-Contentstack-Signature": "75e9068f3ca4e2ef7cdbfbb2480822f5f6473ac5",
                            "Authorization": null,
                            "X-Contentstack-Request-Signature": "v1=n9uHP1hmYcBz82h5imH3+EKTzfyl7tTxBnp6vn1giT4dT/FMhOLPBGkQ4PMu9k9lgcSkBfLHjmTWDUgBZxK/STyFHJKjgYjUEvLflRV1gUlzYmqFXbU+lmYLzsy/DnVwaH70fAcvXa6sbobvzugbAAoP5BVeGXI0Ldd9OPbFFIy8/j/oBVVp7nNMDZIpRxIVAHYX0lmUmFdlsAmzKhNNx0zyPmwS+jooeYYNL7bDSRu1ORlSNC2iNwAD/SSe3N8gYjUaws1d04yr7qAykszdJatxDs0S4dyWWz+XBNjXska9aGzxgt0CidecRlnL6VSaOvCPDCXj+P3L7u0FTr/n0Q=="
                        },
                        "json": true,
                        "resolveWithFullResponse": true,
                        "timeout": 30000
                    },
                    "response": {
                        "message": "read ECONNRESET",
                        "statusCode": null,
                        "code": "ECONNRESET",
                        "body": null,
                        "headers": null,
                        "request": {
                            "uri": {
                                "href": "https://www.googe.com"
                            },
                            "method": "POST",
                            "headers": {
                                "Content-Type": "application/json",
                                "User-Agent": "Contentstack",
                                "X-Contentstack-Signature": "75e9068f3ca4e2ef7cdbfbb2480822f5f6473ac5",
                                "Authorization": null,
                                "X-Contentstack-Request-Signature": "v1=n9uHP1hmYcBz82h5imH3+EKTzfyl7tTxBnp6vn1giT4dT/FMhOLPBGkQ4PMu9k9lgcSkBfLHjmTWDUgBZxK/STyFHJKjgYjUEvLflRV1gUlzYmqFXbU+lmYLzsy/DnVwaH70fAcvXa6sbobvzugbAAoP5BVeGXI0Ldd9OPbFFIy8/j/oBVVp7nNMDZIpRxIVAHYX0lmUmFdlsAmzKhNNx0zyPmwS+jooeYYNL7bDSRu1ORlSNC2iNwAD/SSe3N8gYjUaws1d04yr7qAykszdJatxDs0S4dyWWz+XBNjXska9aGzxgt0CidecRlnL6VSaOvCPDCXj+P3L7u0FTr/n0Q=="
                            }
                        }
                    },
                    "created_at": "2024-07-25T08:48:56.919Z"
                },
            ],
            "retry_count": 3,
            "status": null,
            "updated_at": "2024-07-25T08:51:52.788Z",
            "webhooks": [
                "cs402507db-7085-428d-82f4-03005500626c"
            ],
            "projectUid": "blt**************b7",
            "destination": {}
        }
    ]
}
```




## Webhook Retry

### Retry a webhook

**POST** `/webhooks/{execution_uid}/retry`

This call makes a manual attempt to execute a webhook after the webhook has finished executing its automatic attempts.

When executing the API call, in the 'URL Parameter' section, enter the execution UID that you receive when you execute the [Get executions of webhooks](#get-webhook-executions) call.

To configure the permissions for your application via OAuth, please include the cm.webhooks.management:write scope.

#### URL Parameters

- **execution_uid** (required)
  Enter the execution unique ID of the webhook that you want to retry. Execute the [Get executions of a webhook](../../../api-detail/content-management-api.md#get-executions-of-a-webhook) call to retrieve the UID of a webhook.
  Default: `cs2642bec9-c336-4da1-8aad-fded56c7d50e`

#### Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
  "notice": "Webhook retry scheduled"
}
```




## Get Execution Log

### Get latest execution log of a webhook

**GET** `/webhooks/{execution_uid}/logs`

Get latest execution log of a webhook call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle.

When executing the API call, in the 'URL Parameter' section, enter the execution UID that you receive when you execute the call.  
To configure the permissions for your application via OAuth, please include the cm.webhook:read scope.

#### URL Parameters

- **execution_uid** (required)
  Enter the execution unique ID of the webhook of which you want to retrieve the execution log. Execute the [Get executions of a webhook](../../../api-detail/content-management-api.md#get-executions-of-a-webhook) call to retrieve the UID of a webhook.
  Default: `cs4eb0cd75-8a6e-416a-b367-07158d698d41`

#### Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
    "webhook": {
        "uid": "cs******75-8a6e-416a-b367-07********41",
        "channel": [
            "assets.update",
            "assets.bltaa9509abac6e272b.update"
        ],
        "created_at": "2024-07-26T09:24:27.347Z",
        "event_data": {
            "module": "asset",
            "api_key": "blt**************b7",
            "data": {
                "asset": {
                    "uid": "blt**************2b",
                    "created_at": "2024-05-15T09:38:59.976Z",
                    "updated_at": "2024-07-26T09:24:26.783Z",
                    "created_by": "blt**************35",
                    "updated_by": "blt**************de",
                    "content_type": "image/jpeg",
                    "file_size": "251123",
                    "tags": [],
                    "filename": "Wild-West-Warrior_Large.jpeg",
                    "url": "https://app.contentstack.com/v3/assets/bltbf684bd9d22b48b7/bltaa9509abac6e272b/664482b3b80dfd12c8b1ad15/Wild-West-Warrior_Large.jpeg",
                    "ACL": {},
                    "is_dir": false,
                    "parent_uid": "blt**************7e",
                    "_version": 2,
                    "title": "Wild-West-Warrior_Large.jpeg"
                },
                "branch": {
                    "uid": "main",
                    "source": "",
                    "alias": []
                }
            },
            "event": "update"
        },
        "event_headers": {
            "Content-Type": "application/json",
            "User-Agent": "Contentstack",
            "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
            "Authorization": null,
            "X-Contentstack-Request-Signature": "v1=I1Lc/sQbu+tOUSt3Uqnjwi1DhJ9LtG3I3aEaecuRbkb2M3/p8aFwXAw+t1aLYqWkeEfpf4GdIz+e2ImIyIZY8PzwkL54iBn17EhEFM6+B6rK8Pdx6iPD9iV+tv3ZcE9C+JmDQvQQWiC3lAsi9rxmdBF2JqTK4G1Wo3MBI8FQZkyuMy5rfZAzp2sJA60A/8WAxy75pejvH9aiBiF0wKu/UiJ2mhhj64aPe6Luu/BVSzkkUx4TFo3RhOnsbMJREk2Rd2Gbv8nzeHk+umZ05NpuSz82nDTT1KV71XHb1GaZOsIFCYrVOKIBD6LL7hUsfcJfC2DQIvG0NPN/6lCD0774WQ=="
        },
        "org_uid": "blt**************d5",
        "request_details": {
            "_id": "csdded59f4-f5d1-4f5a-9c7b-9a82bce457fb",
            "retry_number": 3,
            "request": {
                "method": "POST",
                "followAllRedirects": true,
                "uri": "https://www.test.com",
                "body": {
                    "triggered_at": "2024-07-26T09:27:03.088Z",
                    "module": "asset",
                    "api_key": "bltbf684bd9d22b48b7",
                    "data": {
                        "asset": {
                            "uid": "blt**************2b",
                            "created_at": "2024-05-15T09:38:59.976Z",
                            "updated_at": "2024-07-26T09:24:26.783Z",
                            "created_by": "blte5ba115d2d3ad735",
                            "updated_by": "bltddd27e9dcd3831de",
                            "content_type": "image/jpeg",
                            "file_size": "251123",
                            "tags": [],
                            "filename": "Wild-West-Warrior_Large.jpeg",
                            "url": "https://app.contentstack.com/v3/assets/bltbf684bd9d22b48b7/bltaa9509abac6e272b/664482b3b80dfd12c8b1ad15/Wild-West-Warrior_Large.jpeg",
                            "ACL": {},
                            "is_dir": false,
                            "parent_uid": "blt**************7e",
                            "_version": 2,
                            "title": "Wild-West-Warrior_Large.jpeg"
                        },
                        "branch": {
                            "uid": "main",
                            "source": "",
                            "alias": []
                        }
                    },
                    "event": "update"
                },
                "headers": {
                    "Content-Type": "application/json",
                    "User-Agent": "Contentstack",
                    "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
                    "X-Contentstack-Request-Signature": "v1=oddk8EBQR7385dg5LTN7brHk7WERnP17Ze/Ed6/yFWkam6jYPPg7+30ZoOtAMRvws8Ans/sHSBp+3wF+powzEHieBIWF070McSeSok3SdGhDYcoSC1ouAHWy60eIo/FVqHJGyChkWFhHpaR4d7Ov2sE1WiSI3lmRkYxgHvJaxdMwGGlv4f2+lwl14Ot0qooSF6gBEZDtCW1kKGN9GC39EMrj/p9vs24Qgv2Cfyys+mzHJMSXPFEfA3Hv3Cbc53tnI9AUh0NLz4ONtxPkBcVcQC23tH3vbFPNOPhPZk/soq4acYl5JzaYbWjBhCHN8tV6WXWao+8m8NML5YBDqbYcTA==",
                    "Authorization": null
                },
                "json": true,
                "resolveWithFullResponse": true,
                "timeout": 30000
            },
            "response": {
                "message": "Request failed with status code 403",
                "statusCode": 403,
                "code": "ERR_BAD_REQUEST",
                "body": "<!DOCTYPE html><html lang=\"en-US\"><head><title>Just a moment...</title><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"><meta name=\"robots\" content=\"noindex,nofollow\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"></script></body></html>",
                "headers": {
                    "date": "Fri, 26 Jul 2024 09:27:03 GMT",
                    "content-type": "text/html; charset=UTF-8",
                    "transfer-encoding": "chunked",
                    "connection": "close",
                    "accept-ch": "Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA",
                    "critical-ch": "Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA",
                    "cross-origin-embedder-policy": "require-corp",
                    "cross-origin-opener-policy": "same-origin",
                    "cross-origin-resource-policy": "same-origin",
                    "origin-agent-cluster": "?1",
                    "permissions-policy": "accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()",
                    "referrer-policy": "same-origin",
                    "x-content-options": "nosniff",
                    "x-frame-options": "SAMEORIGIN",
                    "cf-mitigated": "challenge",
                    "cf-chl-out": "FABmu/NVxTXsS+jHAJthwYvD+kqsweMKDyLzMsacsCHOUJcnpQ84Kqkc5p4d1qJhSlnWtrV7HsarN/IFetQG+oDQSV8umzPhk0dLI2TI/90OJmZivukMCrQO+nh1SvUJua92Owj14s1i1qUZATV9ag==$NtcUIiSpEDo33XcBEXTh2Q==",
                    "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
                    "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
                    "set-cookie": [
                        "__cf_bm=Qquv.Qrv0U09Sdlblp2a8e3Og6Wz9kOcSrauhzKX8AQ-1721986023-1.0.1.1-Iq3rQXN3kDbJNyawpvdUG5h2a03JXv041myJKjTq3HRJ664jvbuj2wAlFRN6qo4o3Efb7O.nS5ynpJRJfhZA_Q; path=/; expires=Fri, 26-Jul-24 09:57:03 GMT; domain=.squadhelp.com; HttpOnly; Secure; SameSite=None"
                    ],
                    "vary": "Accept-Encoding",
                    "server": "cloudflare",
                    "cf-ray": "8a935a05ace2ba21-SEA"
                },
                "request": {
                    "uri": {
                        "href": "https://www.test.com"
                    },
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        "User-Agent": "Contentstack",
                        "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
                        "X-Contentstack-Request-Signature": "v1=oddk8EBQR7385dg5LTN7brHk7WERnP17Ze/Ed6/yFWkam6jYPPg7+30ZoOtAMRvws8Ans/sHSBp+3wF+powzEHieBIWF070McSeSok3SdGhDYcoSC1ouAHWy60eIo/FVqHJGyChkWFhHpaR4d7Ov2sE1WiSI3lmRkYxgHvJaxdMwGGlv4f2+lwl14Ot0qooSF6gBEZDtCW1kKGN9GC39EMrj/p9vs24Qgv2Cfyys+mzHJMSXPFEfA3Hv3Cbc53tnI9AUh0NLz4ONtxPkBcVcQC23tH3vbFPNOPhPZk/soq4acYl5JzaYbWjBhCHN8tV6WXWao+8m8NML5YBDqbYcTA==",
                        "Authorization": null
                    }
                }
            },
            "created_at": "2024-07-26T09:27:03.317Z"
        },
        "retry_count": 3,
        "status": 403,
        "updated_at": "2024-07-26T09:27:03.317Z",
        "webhooks": [
            {
                "name": "Dummy Webhook",
                "destinations": [
                    {
                        "target_url": "https://www.test.com",
                        "http_basic_auth": "",
                        "http_basic_password": "",
                        "request_query_parameters": "",
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
                    "assets.update"
                ],
                "retry_policy": "manual",
                "branches": [
                    "main"
                ],
                "notifiers": [
                    "sample@gmail.com"
                ],
                "disabled": false,
                "applikation_id": "blt**************b7",
                "org_uid": "blt**************d5",
                "updated_by": "blt**************de",
                "created_by": "blt**************de",
                "app_user_object_uid": "system",
                "concise_payload": false,
                "uid": "cs******c9-c336-4da1-8aad-fd********0e",
                "created_at": "2024-07-26T09:04:06.984Z",
                "updated_at": "2024-07-26T09:04:06.984Z",
                "__v": 0
            }
        ],
        "projectUid": "blt**************b7",
        "destination": {}
    }
}
```

