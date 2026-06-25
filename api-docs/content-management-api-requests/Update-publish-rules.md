---
title: "Update publish rules"
description: PUT /workflows/publishing_rules/{rule_uid}
url: developer-apis/content-management-api-requests/update-publish-rules
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-27
---

# Update publish rules

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

## URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to update.
  Default: `your_rule_uid`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

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

## Sample Response

```json
{
	"notice": "Publish rule updated successfully."
}
```

