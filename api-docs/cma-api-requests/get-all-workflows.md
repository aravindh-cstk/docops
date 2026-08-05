---
title: "Get all workflows"
description: /workflows
url: /get-all-workflows
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:10.327Z
updated_at: 2024-02-27T13:51:58.071Z
---

# Get all workflows

<p>The <span data-type='inlineCode'>Get all Workflows</span> request retrieves the details of all the Workflows of a stack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span></span><span style='font-size: 10.5pt;'></span><span>cm.workflows.management:read scope.</span></p>

**API Endpoint**: `/workflows`

**Method**: `GET`

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Response

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

