---
title: "Get a single branch"
description: /stacks/branches/{branch_uid}
url: /get-a-single-branch
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:08.450Z
updated_at: 2024-02-29T11:27:32.444Z
---

# Get a single branch

<p>The <span data-type='inlineCode'>Get a single branch</span> request returns information of a specific branch.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.branches.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/stacks/branches/{branch_uid}`

**Method**: `GET`

## URL Parameters

- **branch_uid** (required)
  Enter the unique ID of the branch of which you want to retrieve the details. The UID of a branch is unique across a stack. Execute the <a href="#get-all-branches">Get all branches</a> call to retrieve the UID of a branch.<br>

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
    "branch": {
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
    }
}
```

