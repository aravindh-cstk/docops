---
title: "CMA | Workflows"
description: Create, update, fetch, and manage editorial workflows, stages, and workflow actions for entries.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/workflows
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Workflows

Workflow is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly. For more information, refer to our [Workflows](/docs/developers/set-up-workflows-and-publish-rules/) documentation.

## Get All Workflows

### Get all workflows

**GET** `/workflows`

The Get all Workflows request retrieves the details of all the Workflows of a stack.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

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




## Get a Single Workflow

### Get a single workflow

**GET** `/workflows/{workflow_uid}`

The Get a Single Workflow request retrieves the comprehensive details of a specific Workflow of a stack.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

#### URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow that you want to retrieve.
  Default: `bltc2bca504319aa69a`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
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




## Create a Workflow

### Create a workflow

**POST** `/workflows`

The Create a Workflow request allows you to create a Workflow.

In the 'Body' section, you can provide the details of the workflow that includes name, content types, owners, description, and workflow stages of your Workflow. To define the branch scope, specify the unique IDs of the branches for which the workflow will be applicable in the following schema in the request body:

```
"branches":[
    "main",
    "development"
]
```

To control who can edit an entry at different stages of the workflow, you can pass the entry_lock parameter inside each workflow stage.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:writescope.

**Note**: Workflow superusers, organization owners, and stack owners/admins can edit or delete the entry in any workflow stage, irrespective of the stage access rules set for that stage.

You can assign any one of the following values to this parameter:

- $none: This is the default value for all workflow stages. This value allows all users to have edit access over the entry at any workflow stage until the value for the entry_lock parameter is changed.
- $others: Set the entry_lock parameter to $others to allow only those users who have stage transition rights to edit the entry in the current workflow stage.
- $all: Set the entry_lock parameter to $all to restrict all users from accessing the entry.
    Note: Users with stage transition rights, however, will still be able to change the workflow stage of the entry.

**Note**: The entry is available for editing, by default, in the first stage that you create in your workflow. As a result, the entry_lock parameter is set to $none for the first stage in the workflow.

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Request

```json
{
    "workflow":{
        "workflow_stages":[
            {
                "color":"#2196f3",
                "SYS_ACL":{
                    "roles":{
                        "uids":[
                            
                        ]
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ]
                    },
                    "others":{
                        
                    }
                },
                "next_available_stages":[
                    "$all"
                ],
                "allStages":true,
                "allUsers":true,
                "specificStages":false,
                "specificUsers":false,
                "entry_lock":"$none",
                "name":"Review"
            },
            {
                "color":"#74ba76",
                "SYS_ACL":{
                    "roles":{
                        "uids":[
                            
                        ]
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ]
                    },
                    "others":{
                        
                    }
                },
                "allStages":true,
                "allUsers":true,
                "specificStages":false,
                "specificUsers":false,
                "next_available_stages":[
                    "$all"
                ],
                "entry_lock":"$none",
                "name":"Complete"
            }
        ],
        "admin_users":{
            "users":[
                
            ]
        },
        "name":"Workflow",
        "enabled":true,
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ]
    }
}
```

#### Sample Response

```json
{
    "notice": "Workflow created successfully.",
    "workflow": {
        "_id": "5d8c8391423efc02ae7a15f5",
        "name": "Workflow 3.0",
        "uid": "workflow_uid",
        "org_uid": "organization_uid",
        "api_key": "stack_api_key",
        "branches": [
            "main",
            "development"
        ],
        "content_types": [
            "$all"
        ],
        "workflow_stages": [
            {
                "name": "Initial Draft",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": true,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "$all"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "uid_of_next_available_stages"
                ]
            },
            {
                "name": "Review",
                "uid": "workflow_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "comma-separated_user_uids"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "comma-separated_names_of_next_workflow_stages"
                ]
            },
            {
                "name": "Complete",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "user_uids"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "next_workflow_stage_uids"
                ]
            },
            {
                "name": "Publish",
                "uid": "workflw_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "$all"
                        ],
                        "read": true,
                        "write": false,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": false,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "$all"
                ]
            }
        ],
        "admin_users": {
            "users": [],
            "roles": [
                "role_uid"
            ]
        },
        "enabled": true,
        "created_at": "2019-09-26T09:23:29.828Z",
        "created_by": "user_uid",
        "deleted_at": false,
        "updated_at": "2020-04-16T06:12:41.305Z",
        "updated_by": "user_uid",
        "description": "Some description here"
    }
}
```




## Add or Update Workflow Details

### Add or update workflow details

**PUT** `/workflows/{workflow_uid}`

The Add or Update Workflow request allows you to add a workflow stage or update the details of the existing stages of a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:writescope.

In the 'Body' section, you can provide the updated details of the name, content types, owners, and workflow stages of your Workflow. To define the branch scope, specify the unique IDs of the branches for which the workflow will be applicable in the following schema in the request body:

```
"branches":[
    "main",
    "development"
]
```

To control who can edit an entry at different stages of the workflow, you can pass the entry_lock parameter inside each workflow stage.

**Note**: Workflow superusers, organization owners, and stack owners/admins can edit or delete the entry in any workflow stage, irrespective of the stage access rules set for that stage.

You can assign any one of the following values to this parameter:

- $none: This is the default value for all workflow stages. This value allows all users to have edit access over the entry at any workflow stage until the value for the entry_lock parameter is changed.
- $others: Set the entry_lock parameter to $others to allow only those users who have stage transition rights to edit the entry in the current workflow stage.
- $all: Set the entry_lock parameter to $all to restrict all users from accessing the entry.
    Note: Users with stage transition rights, however, will still be able to change the workflow stage of the entry.

**Note**: The entry is available for editing, by default, in the first stage that you create in your workflow. As a result, the entry_lock parameter is set to $none for the first stage in the workflow.

#### URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow whose details you want to update.
  Default: `blt53e09746340f82d9`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Request

```json
{
    "workflow":{
        "workflow_stages":[
            {
                "color":"#2196f3",
                "SYS_ACL":{
                    "roles":{
                        "uids":[
                            
                        ]
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ]
                    },
                    "others":{
                        
                    }
                },
                "next_available_stages":[
                    "$all"
                ],
                "allStages":true,
                "allUsers":true,
                "specificStages":false,
                "specificUsers":false,
                "entry_lock":"$none",
                "name":"Review"
            },
            {
                "color":"#74ba76",
                "SYS_ACL":{
                    "roles":{
                        "uids":[
                            
                        ]
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ]
                    },
                    "others":{
                        
                    }
                },
                "allStages":true,
                "allUsers":true,
                "specificStages":false,
                "specificUsers":false,
                "next_available_stages":[
                    "$all"
                ],
                "entry_lock":"$none",
                "name":"Complete"
            }
        ],
        "admin_users":{
            "users":[
                
            ]
        },
        "name":"Workflow",
        "enabled":true,
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ]
    }
}
```

#### Sample Response

```json
{
    "notice": "Workflow created successfully.",
    "workflow": {
        "_id": "5d8c8391423efc02ae7a15f5",
        "name": "Workflow 3.0",
        "uid": "workflow_uid",
        "org_uid": "organization_uid",
        "api_key": "stack_api_key",
        "branches": [
            "main",
            "development"
        ],
        "content_types": [
            "$all"
        ],
        "workflow_stages": [
            {
                "name": "Initial Draft",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": true,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "$all"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "comma-separated_names_of_next_workflow_stages"
                ]
            },
            {
                "name": "Review",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "comma-separated_user_uids"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "comma-separated_names_of_next_workflow_stages"
                ]
            },
            {
                "name": "Complete",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "comma-separated_user_uids"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "comma-separated_names_of_next_workflow_stages"
                ]
            },
            {
                "name": "Publish",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description of the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "$all"
                        ],
                        "read": true,
                        "write": false,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": false,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "$all"
                ]
            }
        ],
        "admin_users": {
            "users": [],
            "roles": [
                "comma-separated_role_uids"
            ]
        },
        "enabled": true,
        "created_at": "2019-09-26T09:23:29.828Z",
        "created_by": "user_uid",
        "deleted_at": false,
        "updated_at": "2020-04-16T06:12:41.305Z",
        "updated_by": "user_uid",
        "description": "Some description here"
    }
}
```




## Disable Workflow

### Disable workflow

**GET** `/workflows/{workflow_uid}/disable`

The Disable Workflow request allows you to disable a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:write scope.

#### URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow that you want to disable.
  Default: `blt53e09746340f82d9`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
    "notice":"Workflow disabled successfully.",
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
        "description":"Some description here",
        "workflow_stages":[
            {
                "name":"Initial Draft",
                "color":"#2196f3",
                "description":"This is the start stage",
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
                "description":"This is the Review stage",
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
                "description":"This is the last stage",
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
                        "transit":false
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":false
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




## Enable Workflow

### Enable workflow

**GET** `/workflows/{workflow_uid}/enable`

The Enable Workflow request allows you to enable a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:write scope.

#### URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow that you want to enable.
  Default: `blt53e09746340f82d9`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

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




## Delete Workflow

### Delete workflow

**DELETE** `/workflows/{workflow_uid}`

The Delete Workflow request allows you to delete a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:write scope.

#### URL Parameters

- **workflow_uid** (required)
  Enter the UID of the workflow that you want to delete.
  Default: `blt53e09746340f82d9`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

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




## Entry Workflow Stages

### Set entry workflow stage

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

The Set Entry Workflow Stage request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry.   
To configure the permissions for your application via OAuth, please include the cm.entry.workflow:write scope.

In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.

**Note**: The request operates using a management token only when the transition rule is configured to "All users/roles."

#### URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry of which you want to change the workflow stage.
  Default: `blt53e09746340f82d9`
- **entry_uid** (required)
  Enter the UID of the entry of which you want to change the workflow stage.
  Default: `blt01638c90cc28fb6d`

#### Query Parameters

- **locale** (optional)
  Enter you locale.
  Default: `en-us`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"workflow": {
		"workflow_stage": {
			"comment": "Workflow Comment",
			"due_date": "Thu Dec 01 2018",
			"notify": false,
			"uid": "workflow_stage_uid",
			"assigned_to": [{
					"uid": "user_uid", 
					"name": "Username", 
					"email": "user_email_id"
					}],
			"assigned_by_roles": [{
				"uid": "role_uid",
				"name": "Role name"
			}]		
		}
	}
}
```

#### Sample Response

```json
{
	"notice": "Workflow stage updated successfully."
}
```




## Publish Rules Collection

### Create publish rules

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

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Request

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

#### Sample Response

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


### Update publish rules

**PUT** `/workflows/publishing_rules/{rule_uid}`

The Update Publish Rules request allows you to add a publish rule or update the details of the existing publish rules of a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:write scope.

To define the branch scope, specify the unique IDs of the branches for which the publishing rule will be applicable in the following schema in the request body:

```
"branches":[
    "main",
    "development"
]
```

#### URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to update.
  Default: `your_rule_uid`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

```json
{
    "publishing_rule": {
    	"workflow": "workflow_uid",
        "actions": [],
        "branches": [
            "main",
            "development"
        ],
        "content_types": ["$all"],
        "locales": ["en-us"],
        "environment": "environment_uid",
         "approvers": {
        	"users": ["user_uid"],
        	"roles": ["role_uid"]
        },
        "workflow_stage": "workflow_stage_uid",
         "disable_approver_publishing": false

    }
}
```

#### Sample Response

```json
{
	"notice": "Publish rule updated successfully."
}
```


### Delete publish rules

**DELETE** `/workflows/publishing_rules/{rule_uid}`

The Delete Publish Rules request allows you to delete an existing publish rule.   
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:write scope.

#### URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to delete.
  Default: `publish_rule_uid`

#### Headers

- **api_key** (required)
  Enter your stack API key
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
	"notice": "Publish rule deleted successfully."
}
```


### Get all publish rules

**GET** `/workflows/publishing_rules?content_types=[{content_type_uid}]&limit={rule_limit}&include_count={boolean_value}`

The Get all Publish Rules request retrieves the details of all the Publish rules of a workflow.   
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:read scope.

#### Query Parameters

- **content_types** (required)
  Enter a comma-separated list of content type UIDs for filtering publish rules on its basis.
  Default: `{{content_type_uid1,content_type_uid2,...}}`
- **limit** (optional)
  Enter the limit value to display only the set number of publishing rules.
  Default: `10`
- **include_count** (required)
  Set this parameter to 'true' to include the total number of publish rules in the response body.
  Default: `true`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

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


### Get a single publish rule

**GET** `/workflows/publishing_rules/{rule_uid}`

The Get a Single Publish Rule request retrieves the comprehensive details of a specific publish rule of a Workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:read scope.

#### URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to fetch.
  Default: `blt53e09746340f82d9`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

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




## Publish Rules by Content Types

### Get publish rules by content types

**GET** `/workflows/content_type/{content_type_uid}?action=(publish/unpublish)&locale={locale_code}&environment={environment_uid}`

The Get Publish Rules by Content Types request allows you to retrieve details of a Publish Rule applied to a specific content type of your stack.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

#### URL Parameters

- **content_type_uid** (required)
  Enter the UID of the content type of which you want to retrieve the Publishing Rule.
  Default: `content_type_uid`

#### Query Parameters

- **action** (required)
  Enter the action that has been set in the Publishing Rule.
  Default: `publish/unpublish`
- **locale** (optional)
  Enter the code of the locale where your Publishing Rule will be applicable.
  Default: `en-us`
- **environment** (optional)
  Enter the UID of the environment where your Publishing Rule will be applicable.
  Default: `production`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Response

```json
{
	"publishing_rules": [{
			"locale": "en-us",
			"action": "publish",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"uid": "blt27ae01ef747fa622"
		},
		{
			"locale": "fr-fr",
			"action": "publish",
			"uid": "blt9b9253297f117e84",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"approvers": [
				"blt5f75d38457c7b306"
			]
		},
		{
			"locale": "hi-in",
			"action": "publish",
			"uid": "blt9b9253297f117e84",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"approvers": [
				"blt5f75d38457c7b306"
			]
		}
	]
}
```




## Publish Request Approval

### Request/Accept/Reject Entry Publish Request

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

This multipurpose request allows you to either send a publish request or accept/reject a received publish request.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, you need to provide the details of the publish rule, such as its UID, action (‘publish’, ‘unpublish’, or ’both’), status (this could be ‘0’ for Approval Requested, ‘1’ for ‘Approval Accepted’, and ‘-1’ for ‘Approval Rejected’), notification setting, and comment for the approver.

#### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type to which the entry belongs.
  Default: `content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry on which the Publishing Rule is applicable.
  Default: `entry_uid`

#### Query Parameters

- **locale** (optional)
  Enter the code of the locale that the entry belongs to.
  Default: `en-us`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `your_authtoken`
- **Content-Type** (required)
  Default: `application/json`

#### Sample Request

```json
{
	"workflow": {
		"publishing_rule": {
			"uid": "blt9b9253297f117e84",
			"action": "publish",
			"status": 1,
			"notify": false,
			"comment": "Please review this."
		}
	}
}
```

#### Sample Response

```json
[{
		"notice": "You have sent an approval request to publish the entry on development environment."
	},
	{
		"notice": "You have accepted the request to publish entry on development environment."
	},
	{
		"notice": "You have rejected the request to publish entry on development environment."
	}
]
```




## Workflow Tasks

### Get all Tasks

**GET** `/user/assignments?query={query_in_JSON}&sort={field_uid: "asc/desc"}&limit={limit_value}&skip={skip_value}`

The Get all Tasks request retrieves a list of all tasks assigned to you.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.

#### Query Parameters

- **query** (required)
  Enter the actual query that will be executed to retrieve the tasks. This query should be in JSON format. Example: - {"job.publishing_rule.status":0}: retrieves pending approval requests - {"type":"workflow_stage"}: retrieve tasks based on Workflow Stages - {"job.workflow_stage.uid": "workflow_stage_uid"}: retrieve tasks based on a specific Workflow Stage  - {"content_type":"content_type_uid", "type": "publishing_rule"}: retrieve tasks based on multiple conditions
  Default: `{"type":"workflow_stage"}`
- **sort** (optional)
  Enter the field UID on the basis of which you want to sort your tasks. Example: {"assigned_at": "desc"}, {"content_type": "asc"}, or {"assigned_date": "desc", "locale":"asc"}
  Default: `{“assigned_at”: “desc”}`
- **limit** (optional)
  Enter the maximum number of tasks that you want to retrieve in the response.
  Default: `5`
- **skip** (optional)
  Enter the number of tasks to be skipped.
  Default: `5`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Response

```json
{
	"assignments": [{
			"api_key": "bltead62b75f44449be",
			"content_type": "test_2",
			"entry_uid": "blt85e280c58eee9371",
			"locale": "en-us",
			"org_uid": "blt987d5031d804e50b",
			"type": "workflow_stage",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d38457c7b306"
			],
			"assigned_at": "2018-04-03T15:05:50.047Z",
			"assigned_by": "blt5f75d38457c7b306",
			"due_date": "2018-04-03T18:30:00.000Z",
			"job": {
				"org": "sample_org",
				"stack": "demo",
				"content_type": "test_ct_2",
				"entry": "Hi",
				"locale": "English - United States",
				"workflow_stage": {
					"uid": "review",
					"title": "Review",
					"color": "red"
				}
			}
		},
		{
			"api_key": "bltead62b75f44449be",
			"content_type": "test_2",
			"entry_uid": "blt85e280c58eee9371",
			"locale": "en-us",
			"org_uid": "blt987d5031d804e50b",
			"type": "workflow_stage",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d38457c7b306"
			],
			"assigned_at": "2018-04-03T15:05:50.047Z",
			"assigned_by": "blt5f75d38457c7b306",
			"due_date": "2018-04-03T18:30:00.000Z",
			"job": {
				"org": "demo_org",
				"stack": "test",
				"content_type": "test_ct",
				"entry": "Hello",
				"locale": "English - United States",
				"workflow_stage": {
					"uid": "review",
					"title": "Review",
					"color": "red"
				}
			}
		},
		{
			"action": "publish",
			"api_key": "bltead62b75f00000be",
			"content_type": "test_1",
			"entry_uid": "blt4d9ab000e00ddfa8",
			"environment": "bltf00d80f0b000cf90",
			"locale": "hi-in",
			"org_uid": "blt987d0000d000e50b",
			"type": "publishing_rule",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d00000c7b000"
			],
			"assigned_at": "2018-04-04T07:36:05.087Z",
			"assigned_by": "blt5f75d00000c7b306",
			"job": {
				"org": "test_org",
				"stack": "sample2",
				"content_type": "test_ct_2",
				"entry": "Test",
				"locale": "French - France",
				"environment": "development",
				"publishing_rule": {
					"uid": "blt9b0000097f117e84",
					"status": -1
				}
			},
			"comment": "Here’s your task."
		}
	]
}
```

