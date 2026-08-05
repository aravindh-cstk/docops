---
title: "Get a single publish rule"
description: /workflows/publishing_rules/{rule_uid}
url: /get-a-single-publish-rule
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.284Z
updated_at: 2024-02-28T06:02:55.289Z
---

# Get a single publish rule

<p>The <span data-type='inlineCode'>Get a Single Publish Rule</span> request retrieves the comprehensive details of a specific publish rule of a Workflow.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.workflows.publishing-rules:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p><span style='font-size: 10.5pt;'></span></p>

**API Endpoint**: `/workflows/publishing_rules/{rule_uid}`

**Method**: `GET`

## URL Parameters

- **rule_uid** (required)
  <p>Enter the UID of the publish rule that you want to fetch.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

```json
{
    "publishing_rule":{
        "uid":"blt977147600130f0f2",
        "api_key":"blt410e8ed8d3ef764d",
        "workflow":"blt7477770bcf1d8c7d",
        "workflow_stage":"blt03166caa63cf966d",
        "actions":[
            
        ],
        "environment":"bltae72fda3f36c1136",
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "article"
        ],
        "locales":[
            "en-us"
        ],
        "approvers":{
            "users":[
                "blt12b2e66fa2be0b5b"
            ],
            "roles":[
                "blt5b74c24c7ae25d94"
            ]
        },
        "status":true,
        "disable_approver_publishing":false,
        "created_at":"2018-11-14T09:36:25.216Z",
        "created_by":"blt12b2e66fa2be0b5b"
    }
}
```

