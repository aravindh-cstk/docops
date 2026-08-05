---
title: "Create a workflow"
description: /workflows
url: /create-a-workflow
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:11.438Z
updated_at: 2025-07-25T08:41:26.579Z
---

# Create a workflow

<p>The <span data-type='inlineCode'>Create a Workflow</span> request allows you to create a Workflow.</p>
<p>In the 'Body' section, you can provide the details of the workflow that includes name, content types, owners, description, and workflow stages of your Workflow. To define the branch scope, specify the unique IDs of the branches for which the workflow will be applicable in the following schema in the request body:<br /></p><pre>"branches":[
    "main",
    "development"
]</pre>
<p>To control who can edit an entry at different stages of the workflow, you can pass the <span data-type='inlineCode'>entry_lock</span> parameter inside each workflow stage.<br />To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.workflows.management:write</span>scope.</p>
<p class="note"><strong>Note</strong>: Workflow superusers, organization owners, and stack owners/admins can edit or delete the entry in any workflow stage, irrespective of the stage access rules set for that stage.</p>
<p>You can assign any one of the following values to this parameter:</p>
<ul>
  <li><strong>$none:</strong> This is the default value for all workflow stages. This value allows all users to have edit access over the entry at any workflow stage until the value for the <span data-type='inlineCode'>entry_lock</span> parameter is changed.</li>
  <li><strong>$others: </strong>Set the <span data-type='inlineCode'>entry_lock</span> parameter to $others to allow only those users who have stage transition rights to edit the entry in the current workflow stage.</li>
  <li><strong>$all:</strong> Set the <span data-type='inlineCode'>entry_lock</span> parameter to $all to restrict all users from accessing the entry.<br />
    <p class="note"><strong>Note</strong>: Users with stage transition rights, however, will still be able to change the workflow stage of the entry.</p>
  </li>
</ul>
<p class="note"><strong>Note</strong>: The entry is available for editing, by default, in the first stage that you create in your workflow. As a result, the entry_lock parameter is set to $none for the first stage in the workflow.</p>

**API Endpoint**: `/workflows`

**Method**: `POST`

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>

## Request Body

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

## Response

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

