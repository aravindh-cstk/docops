---
title: "Update publish rules"
description: /workflows/publishing_rules/{rule_uid}
url: /update-publish-rules
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.343Z
updated_at: 2024-02-27T14:07:11.963Z
---

# Update publish rules

<p>The <span data-type='inlineCode'>Update Publish Rules</span> request allows you to add a publish rule&nbsp;or update the details of the existing publish rules&nbsp;of a workflow.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.workflows.publishing-rules:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>To define the branch scope, specify the unique IDs of the branches for which the publishing rule will be applicable in the following schema in the request body:</p><pre>"branches":[<br />    "main",<br />    "development"<br />]</pre>

**API Endpoint**: `/workflows/publishing_rules/{rule_uid}`

**Method**: `PUT`

## URL Parameters

- **rule_uid** (required)
  <p>Enter the UID of the&nbsp;publish rule that you want to update.&nbsp;</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

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

## Response

```json
{
	"notice": "Publish rule updated successfully."
}
```

