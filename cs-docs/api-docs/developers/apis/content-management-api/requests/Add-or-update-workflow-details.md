---
title: "Add or update workflow details"
description: PUT /workflows/{workflow_uid}
url: developers/apis/content-management-api/requests/add-or-update-workflow-details
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-25
---

# Add or update workflow details

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

## URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow whose details you want to update.
  Default: `blt53e09746340f82d9`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Request

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

## Sample Response

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

