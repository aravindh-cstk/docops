---
title: "Get executions of a webhook"
description: GET /webhooks/{webhook_uid}/executions?from=2020-12-14T08:00:00.000Z&to=2020-12-22T07:59:59.999Z&query={ 'status': { '$gte': '200', '$lte': '399' } }
url: developers/apis/content-management-api/requests/get-executions-of-webhooks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-12-17
---

# Get executions of a webhook

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

This API request will return a maximum of **100** records while fetching the execution details for a specific webhook. Previously, there was no limit on the number of records returned. You can use the "[skip](../../../../api-detail/content-delivery-api.md#skip)" parameter to fetch older records. To limit the number of records returned, you can use the “[limit](../../../../api-detail/content-delivery-api.md#limit)” parameter.

## URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook of which you want to retrieve the details. Execute the 'Get all webhooks' call to retrieve the uid of a webhook.
  Default: `cs2642bec9-c336-4da1-8aad-fded56c7d50e`

## Query Parameters

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

## Headers

- **api_key** (required)
  Enter the API key of your stack
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

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

