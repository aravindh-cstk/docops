---
title: "Request/Accept/Reject Entry Publish Request"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}
url: developers/apis/content-management-api/requests/request-accept-reject-entry-publish-request
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Request/Accept/Reject Entry Publish Request


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

This multipurpose request allows you to either send a publish request or accept/reject a received publish request.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, you need to provide the details of the publish rule, such as its UID, action (‘publish’, ‘unpublish’, or ’both’), status (this could be ‘0’ for Approval Requested, ‘1’ for ‘Approval Accepted’, and ‘-1’ for ‘Approval Rejected’), notification setting, and comment for the approver.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken |  |

| Content-Type | application/json |  |

| content_type_uid | content_type_uid | Enter the unique ID of the content type to which the entry belongs. |

| entry_uid | entry_uid | Enter the unique ID of the entry on which the Publishing Rule is applicable. |

| locale | en-us | Enter the code of the locale that the entry belongs to. |

**Request Body:**

```json
{
	"workflow": {
		"publishing_rule": {
			"uid": "blt9b9253297f117e84",
			"action": "publish",
			"status": 1,
			"notify": false,
			"comment": "Please review this."
		}
	}
}
```

**Response (200):**

```json
[{
		"notice": "You have sent an approval request to publish the entry on development environment."
	},
	{
		"notice": "You have accepted the request to publish entry on development environment."
	},
	{
		"notice": "You have rejected the request to publish entry on development environment."
	}
]
```
