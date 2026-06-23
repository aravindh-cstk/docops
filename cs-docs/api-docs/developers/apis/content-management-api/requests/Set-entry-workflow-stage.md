---
title: "Set entry workflow stage"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}
url: developers/apis/content-management-api/requests/set-entry-workflow-stage
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-09-10
---

# Set entry workflow stage

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

The Set Entry Workflow Stage request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry.   
To configure the permissions for your application via OAuth, please include the cm.entry.workflow:write scope.

In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.

**Note**: The request operates using a management token only when the transition rule is configured to "All users/roles."

## URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry of which you want to change the workflow stage.
  Default: `blt53e09746340f82d9`
- **entry_uid** (required)
  Enter the UID of the entry of which you want to change the workflow stage.
  Default: `blt01638c90cc28fb6d`

## Query Parameters

- **locale** (optional)
  Enter you locale.
  Default: `en-us`

## Headers

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

## Sample Request

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

## Sample Response

```json
{
	"notice": "Workflow stage updated successfully."
}
```

