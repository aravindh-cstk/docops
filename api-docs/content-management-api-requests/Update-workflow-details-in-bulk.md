---
title: "Update workflow details in bulk"
description: POST /bulk/workflow
url: developer-apis/content-management-api-requests/update-workflow-details-in-bulk
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Update workflow details in bulk

**POST** `/bulk/workflow`

The Update workflow details in bulk request allows you to update the workflow details for multiple entries at the same time.   
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:workflow scope.

**Note**: You can change the workflow stage of multiple entries only if all the entries have been assigned the same workflow stage and are associated with the same workflow.

In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.

**Note**: At a time, you can update the workflow details for **10** entries in a bulk update workflow details request. During the bulk update, if any one entry's workflow stage fails to update, then the workflow stage of all entries in the bulk operation will fail to update.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, and locales in which the entries are present.

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

```json
{
"notice": "Your request to update workflow stage is complete."
}
```

