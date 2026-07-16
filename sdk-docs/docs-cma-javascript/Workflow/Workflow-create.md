---
title: "create"
description: "The Create a Workflow request allows you to create a Workflow."
url: "https://www.contentstack.com/js-management-workflow-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create a Workflow request allows you to create a Workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.workflow | object | No | — | The workflow details with workflow stages. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const workflow = {
"workflow_stages": [
     {
       "color": "#2196f3",
       "SYS_ACL": {
         "roles": {
           "uids": []
         },
         "users": {
         "uids": [
           "$all"
         ]
       },
       "others": {}
     },
     "next_available_stages": [
       "$all"
     ],
     "allStages": true,
     "allUsers": true,
     "specificStages": false,
     "specificUsers": false,
     "entry_lock": "$none", 
     "name": "Review"
   },
   {
     "color": "#74ba76",
     "SYS_ACL": {
       "roles": {
         "uids": []
       },
       "users": {
         "uids": [
           "$all"
         ]
       },
       "others": {}
     },
     "allStages": true,
     "allUsers": true,
     "specificStages": false,
     "specificUsers": false,
     "next_available_stages": [
         "$all"
       ],
       "entry_lock": "$none",
       "name": "Complete"
     }
   ],
   "admin_users": {
     "users": []
   },
     "name": "Workflow Name",
     "enabled": true,
     "content_types": [
       "$all"
     ]
 }

client.stack({ api_key: 'api_key'}).workflow()
.create({ workflow })
.then((workflow) => console.log(workflow))
```
