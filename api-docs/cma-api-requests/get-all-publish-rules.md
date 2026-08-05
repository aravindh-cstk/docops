---
title: "Get all publish rules"
description: /workflows/publishing_rules?content_types=[{content_type_uid}]&limit={rule_limit}&include_count={boolean_value}
url: /get-all-publish-rules
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.573Z
updated_at: 2024-02-28T06:00:56.863Z
---

# Get all publish rules

<p>The <span data-type='inlineCode'>Get all Publish Rules</span>&nbsp;request retrieves the details of all the Publish rules of a workflow.&nbsp;<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.workflows.publishing-rules:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/workflows/publishing_rules?content_types=[{content_type_uid}]&limit={rule_limit}&include_count={boolean_value}`

**Method**: `GET`

## Query Parameters

- **content_types** (required)
  <p>Enter a comma-separated list of content type UIDs for filtering publish rules on its basis.</p>
- **limit** (optional)
  <p>Enter the limit value to display only the set number of publishing rules.</p>
- **include_count** (required)
  <p>Set this parameter to 'true' to include the total number of publish rules in the response body.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

```json
{
    "count":2,
    "publishing_rules":[
        {
            "_id":"5beac61a4d4ad9fa0d25d4dd",
            "uid":"blt76cdbf02766801a5",
            "api_key":"blt410e8ed8d3ef764d",
            "actions":[
                "publish"
            ],
            "environment":"bltae72fda3f36c1136",
            "branches":[
                "main",
                "development"
            ],
            "content_types":[
                "product",
                "kitchen_appliances"
            ],
            "locales":[
                "en-us"
            ],
            "approvers":{
                "users":[
                    
                ],
                "roles":[
                    "blt5b74c24c7ae25d94"
                ]
            },
            "status":true,
            "disable_approver_publishing":false,
            "created_at":"2020-09-23T05:14:34.305Z",
            "created_by":"blt12b2e66fa2be0b5b"
        },
        {
            "_id":"5bebbbe9e87d0afa2501ccb5",
            "uid":"5bebbbe9e87d0afa2501ccb5",
            "api_key":"blt410e8ed8d3ef764d",
            "actions":[
                "publish"
            ],
            "environment":"blt212026a468e6e103",
            "branches":[
                "main",
                "development"
            ],
            "content_types":[
                "brand",
                "category"
            ],
            "locales":[
                "en-us"
            ],
            "approvers":{
                "users":[
                    "blt12b2e66fa2be0b5b"
                ]
            },
            "status":true,
            "disable_approver_publishing":false,
            "created_at":"2020-09-23T05:16:04.103Z",
            "created_by":"blt12b2e66fa2be0b5b"
        }
    ]
}
```

