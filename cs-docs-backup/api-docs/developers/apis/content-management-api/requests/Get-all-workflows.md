---
title: "Get all workflows"
description: GET /workflows
url: developers/apis/content-management-api/requests/get-all-workflows
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-27
---

# Get all workflows

**GET** `/workflows`

The Get all Workflows request retrieves the details of all the Workflows of a stack.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

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
    "workflows":[
        {
            "_id":"5bc5a954c19dd527533325a2",
            "name":"My First Workflow",
            "description":"Workflow description",
            "uid":"bltc2bca504319aa69a",
            "org_uid":"blta04a8affd05894a2",
            "api_key":"blt410e8ed8d3ef764d",
            "branches":[
                "main",
                "development"
            ],
            "content_types":[
                "author",
                "article"
            ],
            "workflow_stages":[
                {
                    "name":"Initial Draft",
                    "uid":"blt31813070783c3b7e",
                    "color":"#2196f3",
                    "description":"This is the start stage",
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
                    "next_available_stages":[
                        "$all"
                    ]
                },
                {
                    "name":"Review",
                    "uid":"blt2d49c2802fa9744a",
                    "color":"#2196e4",
                    "description":"This is the Review stage",
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
                    "next_available_stages":[
                        "$all"
                    ]
                },
                {
                    "name":"Complete",
                    "uid":"bltbf89addc1bad1f10",
                    "color":"#219677",
                    "description":"This is the last stage",
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
                    "next_available_stages":[
                        "$all"
                    ]
                }
            ],
            "admin_users":{
                "users":[
                    
                ],
                "roles":[
                    "blt25afd7e6ed8d9d1e"
                ]
            },
            "enabled":true,
            "created_at":"2018-10-16T09:03:16.588Z",
            "created_by":"blt12b2e66fa2be0b5b",
            "deleted_at":false
        }
    ]
}
```

