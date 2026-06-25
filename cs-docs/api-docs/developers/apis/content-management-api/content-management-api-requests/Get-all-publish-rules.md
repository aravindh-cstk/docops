---
title: "Get all publish rules"
description: GET /workflows/publishing_rules?content_types=[{content_type_uid}]&limit={rule_limit}&include_count={boolean_value}
url: developers/apis/content-management-api/requests/get-all-publish-rules
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Get all publish rules

**GET** `/workflows/publishing_rules?content_types=[{content_type_uid}]&limit={rule_limit}&include_count={boolean_value}`

The Get all Publish Rules request retrieves the details of all the Publish rules of a workflow.   
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:read scope.

## Query Parameters

- **content_types** (required)
  Enter a comma-separated list of content type UIDs for filtering publish rules on its basis.
  Default: `{{content_type_uid1,content_type_uid2,...}}`
- **limit** (optional)
  Enter the limit value to display only the set number of publishing rules.
  Default: `10`
- **include_count** (required)
  Set this parameter to 'true' to include the total number of publish rules in the response body.
  Default: `true`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

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

