---
title: "Get all branches"
description: /stacks/branches?limit={limit_value}&skip={skip_value}&include_count={boolean_value}
url: /get-all-branches
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:09.325Z
updated_at: 2024-02-29T11:25:51.469Z
---

# Get all branches

<p>The <span data-type='inlineCode'>Get all branches</span> request returns comprehensive information of all the branches available in a particular stack in your account.</p><p>You can add queries to extend the functionality of this API call. Under the 'URL Parameters' section, insert a parameter named query and provide a query in JSON format as the value. (Refer <a href="/docs/developers/apis/content-delivery-api#queries" target="_self">Queries</a>)<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.branches.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/stacks/branches?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

**Method**: `GET`

## Query Parameters

- **limit** (optional)
  <p>Enter the maximum number of branches to be returned.</p>
- **skip** (optional)
  <p>Enter the number of branches to be skipped from the response body.</p>
- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of branches available in a stack.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

```json
{
    "branches": [
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-06-16T18:15:51.248Z",
            "updated_at": "2021-06-16T18:15:51.248Z",
            "alias": [
                {
                    "uid": "dev"
                }
            ]
        },
        {
            "uid": "main",
            "source": "",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-06-10T18:15:40.521Z",
            "updated_at": "2021-06-10T18:15:40.521Z",
            "alias": []
        }
    ]
}
```

