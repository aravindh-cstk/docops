---
title: "Update workflow details in bulk"
description: /bulk/workflow
url: /update-workflow-details-in-bulk
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:59.857Z
updated_at: 2024-03-21T13:13:49.433Z
---

# Update workflow details in bulk

<p>The <span class="code">Update workflow details in bulk</span> request allows you to update the workflow details for multiple entries at the same time. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span><span data-type='inlineCode'>cm.bulk-operations:workflow</span></span> scope.</p><p class="note"><strong>Note</strong>: You can change the workflow stage of multiple entries only if all the entries have been assigned the same workflow stage and are associated with the same workflow.</p><p>In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.</p><p class="note"><strong>Note</strong>: At a time, you can update the workflow details for <strong>10</strong> entries in a bulk update workflow details request. During the bulk update, if any one entry's workflow stage fails to update, then the workflow stage of all entries in the <span data-type='inlineCode'>bulk operation</span> will fail to update.</p><p>Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, and locales in which the entries are present.</p>

**API Endpoint**: `/bulk/workflow`

**Method**: `POST`

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
    "entries": [{
        "content_type": "content_type_uid1",
        "uid": "entry_uid",
        "locale": "en-us"
    }, {
        "content_type": "content_type_uid2",
        "uid": "entry_uid",
        "locale": "en-us"
    }],
    "workflow": {
        "workflow_stage": {
            "comment": "Workflow-related Comments",
            "due_date": "Thu Dec 01 2018",
            "notify": false,
            "uid": "workflow_stage_uid",
            "assigned_to": [{
                "uid": "user_uid",
                "name": "user_name",
                "email": "user_email_id"
            }],
            "assigned_by_roles": [{
                "uid": "role_uid",
                "name": "role_name"
            }]
        }
    }
}
```

## Response

```json
{
"notice": "Your request to update workflow stage is complete."
}
```

