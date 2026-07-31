---
title: "Create publish rules"
description: /workflows/publishing_rules
url: /create-publish-rules
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.336Z
updated_at: 2024-02-27T14:05:52.073Z
---

# Create publish rules

<p>The <span data-type='inlineCode'>Create Publish Rules</span> request allows you to create publish rules for the&nbsp;workflow&nbsp;of a stack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.workflows.publishing-rules:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>To define the branch scope, specify the unique IDs of the branches for which the publishing rule will be applicable in the following schema in the request body:</p><pre>"branches":[<br />    "main",<br />    "development"<br />]</pre>

**API Endpoint**: `/workflows/publishing_rules`

**Method**: `POST`

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Request Body

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

## Response

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

