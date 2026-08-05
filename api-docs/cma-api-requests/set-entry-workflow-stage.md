---
title: "Set entry workflow stage"
description: /content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}
url: /set-entry-workflow-stage
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:10.268Z
updated_at: 2024-09-10T12:45:55.293Z
---

# Set entry workflow stage

<p>The <span data-type='inlineCode'>Set Entry Workflow Stage</span> request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span><span data-type='inlineCode'>cm.entry.workflow:write</span></span> scope.</p><p>In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.</p><p class="note"><strong>Note</strong>: The request operates using a management token only when the transition rule is configured to "All users/roles."<span></span></p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the content type&nbsp;<span style="background-color: initial;">UID of the entry of which you want to change the workflow stage</span><span style="background-color: initial;">.</span></p>
- **entry_uid** (required)
  <p>Enter the UID of the entry of which you want to change the workflow stage.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter you locale.</p>

## Headers

- **api_key** (required)
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **authorization** (optional)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)

## Request Body

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

## Response

```json
{
	"notice": "Workflow stage updated successfully."
}
```

