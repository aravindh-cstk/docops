---
title: "Get a single alias"
description: /stacks/branch_aliases/{branch_alias_uid}
url: /get-a-single-alias
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:09.388Z
updated_at: 2024-02-29T11:39:24.229Z
---

# Get a single alias

<p>The <span data-type='inlineCode'>Get a single alias</span> request returns information of a specific alias.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.branch-aliases.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/stacks/branch_aliases/{branch_alias_uid}`

**Method**: `GET`

## URL Parameters

- **branch_alias_uid** (required)
  <p>Enter the unique ID of the alias of which you want to retrieve the details. The UID of an alias is unique across a stack. Execute the <a href="#get-all-aliases">Get all aliases</a> call to retrieve the UID of an alias.</p>

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
    "branch_alias": {
        "uid": "dev",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-07-26T10:16:07.248Z",
        "updated_at": "2021-07-26T10:16:09.536Z",
        "deleted_at": false,
        "alias": "sample_alias"
    }
}
```

