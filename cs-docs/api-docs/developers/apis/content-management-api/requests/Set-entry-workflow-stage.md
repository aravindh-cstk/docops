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


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

The Set Entry Workflow Stage request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry.   
To configure the permissions for your application via OAuth, please include the cm.entry.workflow:write scope.

In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.

**Note**: The request operates using a management token only when the transition rule is configured to "All users/roles."

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| Content-Type | application/json |  |

| content_type_uid | blt53e09746340f82d9 | Enter the content type UID of the entry of which you want to change the workflow stage. |

| entry_uid | blt01638c90cc28fb6d | Enter the UID of the entry of which you want to change the workflow stage. |

| locale | en-us | Enter you locale. |

**Request Body:**

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

**Response (200):**

```json
{
	"notice": "Workflow stage updated successfully."
}
```
