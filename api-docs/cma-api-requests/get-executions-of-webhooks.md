---
title: "Get executions of a webhook"
description: /webhooks/{webhook_uid}/executions?from=2020-12-14T08:00:00.000Z&to=2020-12-22T07:59:59.999Z&query={ "status": { "$gte": "200", "$lte": "399" } }
url: /get-executions-of-webhooks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.374Z
updated_at: 2024-12-17T05:06:58.087Z
---

# Get executions of a webhook

<p>The <span data-type='inlineCode'>Get executions of a webhook</span> request allows you to fetch the execution details of a specific webhook, which includes the <strong>execution UID</strong>. These details are instrumental in retrieving webhook logs and retrying a failed webhook.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.webhook:read</span></span><span style="color: rgb(0, 0, 255);font-size: 10.5pt;"> </span><span style="font-size: 10.5pt;">scope.</span></p><p class="note"><strong>Note</strong>: You can retrieve webhook log information only for <strong>30 days</strong> prior to the current day.</p><p>Each execution of a webhook is assigned a unique ID that allows you to gather information, such as request-response body, retry attempts, and so on, pertaining to a specific execution of the webhook.</p><p>To filter the webhook execution details based on a specific date range, you must pass <span data-type='inlineCode'>from</span> and <span data-type='inlineCode'>to</span> as query parameters. For both of these parameters, provide a date in ISO format as the value. For instance, to set the start date in the <span data-type='inlineCode'>from</span> parameter to December 8, 2017, you can pass the date in ISO format as shown below:<br /><br /><span data-type='inlineCode'>from=2017-12-08T00:00:00.000Z</span></p><p>To filter the webhook execution details based on whether the webhook successfully ran or failed to execute, pass the <span data-type='inlineCode'>query</span> parameter under the <span data-type='inlineCode'>URL Parameters</span> section, and provide a query in JSON format as its value. Within the query, you can use the <span data-type='inlineCode'>status</span> key to filter the response as per your desired execution status.</p><p>The following table shows values you can use for the <span data-type='inlineCode'>query</span> parameter:</p><figure><table><tbody><tr><td>Webhook Execution Status</td><td>Query JSON Value</td></tr><tr><td>Success</td><td><pre>{<br />  "status": {<br />    "$gte": "200",<br />    "$lte": "399"<br />  }<br />}<br /></pre></td></tr><tr><td>Failure</td><td><pre>{<br />  "status": {<br />    "$gte": “400",<br />    "$lte": “599"<br />  }<br />}<br /></pre></td></tr></tbody></table></figure><p>This API request will return a maximum of <strong>100</strong> records while fetching the execution details for a specific webhook. Previously, there was no limit on the number of records returned. You can use the "<a href="/docs/developers/apis/content-delivery-api#skip">skip</a>" parameter to fetch older records. To limit the number of records returned, you can use the “<a href="/docs/developers/apis/content-delivery-api#limit">limit</a>” parameter.</p>

**API Endpoint**: `/webhooks/{webhook_uid}/executions?from=2020-12-14T08:00:00.000Z&to=2020-12-22T07:59:59.999Z&query={ "status": { "$gte": "200", "$lte": "399" } }`

**Method**: `GET`

## URL Parameters

- **webhook_uid** (required)
  <p>Enter the unique ID of the webhook of which you want to retrieve the details. Execute the 'Get all webhooks' call to retrieve the uid of a webhook.</p>

## Query Parameters

- **from** (optional)
  <p>Enter the start date for your date range filter in ISO format.</p>
- **to** (optional)
  <p>Enter the end date for your date range filter in ISO format.</p>
- **query** (optional)
  <p>Enter the actual query that will be executed to retrieve failed or successful webhook executions. This query should be in JSON format.</p>
- **only_events** (optional)
  <p>Set to <span class="code">true</span> to receive events without "request_details," and set to <span class="code">false</span> to include "request_details" in the response.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack</p>
- **authtoken** (optional)
  <p>Enter&nbsp;your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

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

