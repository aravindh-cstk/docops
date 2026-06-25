---
title: "Get a single publish rule"
description: GET /workflows/publishing_rules/{rule_uid}
url: developer-apis/content-management-api-requests/get-a-single-publish-rule
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Get a single publish rule

**GET** `/workflows/publishing_rules/{rule_uid}`

The Get a Single Publish Rule request retrieves the comprehensive details of a specific publish rule of a Workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:read scope.

## URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to fetch.
  Default: `blt53e09746340f82d9`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

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

