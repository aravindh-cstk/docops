---
title: "Delete workflow"
description: DELETE /workflows/{workflow_uid}
url: developers/apis/content-management-api/requests/delete-workflow
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-27
---

# Delete workflow


**Method:** `DELETE`  
**Endpoint:** `/workflows/{workflow_uid}`

The Delete Workflow request allows you to delete a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| workflow_uid | blt53e09746340f82d9 | Enter the UID of the workflow that you want to delete. |

**Response (200):**

```json
{
    "notice":"Workflow deleted successfully.",
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
                        "write":false
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ],
                        "read":true,
                        "write":true
                    },
                    "roles":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true
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
                        "write":false
                    },
                    "users":{
                        "uids":[
                            "blt12b2e66fa2be0b5b"
                        ],
                        "read":true,
                        "write":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true
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
                        "write":false
                    },
                    "users":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true
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
        "deleted_at":"2018-10-18T10:21:53.397Z"
    }
}
```
