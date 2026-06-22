---
title: "Get all environments"
description: GET /environments?include_count={boolean_value}&asc={field_uid}&desc={field_uid}
url: developers/apis/content-management-api/requests/get-all-environments
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Get all environments


**Method:** `GET`  
**Endpoint:** `/environments?include_count={boolean_value}&asc={field_uid}&desc={field_uid}`

The Get all environments call fetches the list of all environments available in a stack.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](/docs/developers/apis/content-delivery-api/#queries) section of the Content Delivery API doc.  
To configure the permissions for your application via OAuth, please include thecm.environments.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| include_count | false | Set this parameter to 'true' to include in response the total count of languages added to your stack. |

| asc | created_at | Enter the unique ID of the field for sorting the environments in ascending order with respect to that field. |

| desc | updated_at | Enter the unique ID of the field for sorting the environments in descending order with respect to that field. |

**Response (200):**

```json
{
    "environments": [
        {
                    "urls": [
                {
                    "url": "http://localhost.com",
                    "locale": "en-us"
                }
            ],
            "name": "local",
            "uid": "blta1212be1fcfdfad2",
            "created_by": "blt12e12121d12d1f81212a1b2f",
            "updated_by": "blt12e12121d12d1f81212a1b2f",
            "created_at": "2017-06-13T12:28:59.488Z",
            "updated_at": "2018-11-01T13:25:00.349Z",
            "ACL": [],
            "_version": 2
        },
        {
            "deploy_content": false,
             "urls": [
                {
                    "url": "/staging",
                    "locale": "en-us"
                }
            ],
            "name": "staging",
            "uid": "bltf66ca6a66d66cecf",
            "created_by": "blt6565a6b056fc5bc6",
            "updated_by": "blt6565a6b056fc5bc6",
            "created_at": "2019-05-03T08:11:12.583Z",
            "updated_at": "2019-05-03T08:11:12.583Z",
            "ACL": [],
            "_version": 1
        },
        {
            "deploy_content": false,
             "urls": [
                {
                    "url": "",
                    "locale": "en-us"
                }
            ],
            "name": "production",
            "uid": "bltfd8888c8bd8cb8cb",
            "created_by": "blt22e22222d22d2f22222a2b2f",
            "updated_by": "blt22e22222d22d2f22222a2b2f",
            "created_at": "2018-08-09T13:39:37.117Z",
            "updated_at": "2018-08-09T13:39:37.117Z",
            "ACL": [],
            "_version": 1
        }
    ]
}
```
