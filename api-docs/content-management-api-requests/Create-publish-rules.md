---
title: "Create publish rules"
description: POST /workflows/publishing_rules
url: developer-apis/content-management-api-requests/create-publish-rules
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-27
---

# Create publish rules

**POST** `/workflows/publishing_rules`

The Create Publish Rules request allows you to create publish rules for the workflow of a stack.  
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:write scope.

To define the branch scope, specify the unique IDs of the branches for which the publishing rule will be applicable in the following schema in the request body:

```
"branches":[
    "main",
    "development"
]
```

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Request

```json
{
    "publishing_rule":{
        "workflow":"workflow_uid",
        "actions":[],
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ],
        "locales":[
            "en-us"
        ],
        "environment":"environment_uid",
        "approvers":{
            "users":[
                "user_uids"
            ],
            "roles":[
                "role_uids"
            ]
        },
        "workflow_stage":"workflow_stage_uid",
        "disable_approver_publishing":false
    }
}
```

## Sample Response

```json
{
    "notice":"Publish rule created successfully.",
    "publishing_rule":{
        "uid":"rule_uid",
        "api_key":"stack_api_key",
        "workflow":"workflow_uid",
        "workflow_stage":"workflow_stage_uid",
        "actions":[],
        "environment":"environment_uid",
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
                "user_uid"
            ],
            "roles":[
                "role_uid"
            ]
        },
        "status":true,
        "disable_approver_publishing":false,
        "created_at":"2018-11-14T09:36:25.216Z",
        "created_by":"user_uid",
        "_id":"5bebec991ee0bdfb2b9bfe83"
    }
}
```

