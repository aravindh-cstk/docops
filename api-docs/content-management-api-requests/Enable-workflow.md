---
title: "Enable workflow"
description: GET /workflows/{workflow_uid}/enable
url: developer-apis/content-management-api-requests/enable-workflow
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-27
---

# Enable workflow

**GET** `/workflows/{workflow_uid}/enable`

The Enable Workflow request allows you to enable a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:write scope.

## URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow that you want to enable.
  Default: `blt53e09746340f82d9`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

```json
{
    "notice":"Workflow enabled successfully.",
    "workflow":{
        "name":"My New Workflow",
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ],
        "admin_users":{
            "users":[
                
            ],
            "roles":[
                "blt25afd7e6ed8d9d1e"
            ]
        },
        "description":"Some description herrererererererere",
        "workflow_stages":[
            {
                "name":"Initial Draft",
                "color":"#2196f3",
                "description":"It is the start stage",
                "next_available_stages":[
                    "$all"
                ],
                "position":"start_stage",
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt53e09746340f82d9"
            },
            {
                "name":"Review",
                "color":"#2196e4",
                "description":"It is the Review stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            "blt12b2e66fa2be0b5b"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt4f291a4405705930"
            },
            {
                "name":"Complete",
                "color":"#219677",
                "description":"It is the last stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt8b2b8c51285819aa"
            }
        ],
        "uid":"blt5ed9de17258e14c3",
        "api_key":"blt410e8ed8d3ef764d",
        "org_uid":"blta04a8affd05894a2",
        "enabled":true,
        "created_by":"blt12b2e66fa2be0b5b",
        "created_at":"2018-10-17T10:21:53.397Z",
        "deleted_at":false
    }
}
```

