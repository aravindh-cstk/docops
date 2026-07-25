---
title: "Get all environments"
description: /environments?include_count={boolean_value}&asc={field_uid}&desc={field_uid}
url: /get-all-environments
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:59.798Z
updated_at: 2024-02-28T07:01:34.852Z
---

# Get all environments

<p>The <span data-type='inlineCode'>Get all environments</span> call fetches the list of all environments available in a stack.</p><p>You can add queries to extend the functionality of this API call. Under the <span data-type='inlineCode'>URL Parameters</span> section, insert a parameter named <span data-type='inlineCode'>query</span> and provide a query in JSON format as the value.</p><p>To learn more about the queries, refer to the <a href="/docs/developers/apis/content-delivery-api/#queries">Queries</a> section of the Content Delivery API doc.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the</span><span><span data-type='inlineCode'></span></span><span><span data-type='inlineCode'>cm.environments.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/environments?include_count={boolean_value}&asc={field_uid}&desc={field_uid}`

**Method**: `GET`

## Query Parameters

- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of languages added to your stack.</p>
- **asc** (optional)
  <p>Enter the unique ID of the field for sorting the environments in ascending order with respect to that field.</p>
- **desc** (optional)
  <p>Enter the unique ID of the field for sorting the environments in descending order with respect to that field.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

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

