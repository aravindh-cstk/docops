---
title: "setWorkflowStage"
description: "The Set Entry Workflow Stage request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry."
url: "https://www.contentstack.com/js-management-entry-setworkflowstage"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setWorkflowStage

The Set Entry Workflow Stage request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.publishing_rule | object | Yes | — | Details for the publish request |
| locale | string | No | — | Enter the code of the locale that the entry belongs to. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const workflow_stage = {
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

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.setWorkflowStage({workflow_stage, locale: 'en-us'})
.then((response) => console.log(response.notice));
```
