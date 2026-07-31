---
title: "Get all aliases"
description: /stacks/branch_aliases?limit={limit_value}&skip={skip_value}&include_count={boolean_value}
url: /get-all-aliases
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:09.380Z
updated_at: 2024-02-29T11:37:53.478Z
---

# Get all aliases

<p>The <span data-type='inlineCode'>Get all aliases</span> request returns comprehensive information of all the aliases available in a particular stack in your account.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.branch-aliases.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/stacks/branch_aliases?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

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
  <span></span><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span>

## Response

```json
{
    "branch_aliases": [
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:16:07.248Z",
            "updated_at": "2021-07-26T10:16:09.536Z",
            "deleted_at": false,
            "alias": "release"
        },
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:16:07.248Z",
            "updated_at": "2021-07-26T10:16:09.536Z",
            "deleted_at": false,
            "alias": "dev"
        },
        {
            "uid": "main",
            "source": "",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:04:20.752Z",
            "updated_at": "2021-07-26T10:04:20.752Z",
            "deleted_at": false,
            "alias": "sample_alias"
        }
    ]
}
```

