---
title: "Add or Update Workflow Stages"
description: POST /workflows/workflow_stages
url: developers/apis/content-management-api/requests/add-or-update-workflow-stages
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-02-02
---

# Add or Update Workflow Stages


**Method:** `POST`  
**Endpoint:** `/workflows/workflow_stages`

The Add or Update Workflow Stages request allows you to add or update the workflow stages.

**Note**: You need to use either the stack’s Management Token or the user Authtoken (any one is mandatory), along with the stack API key, to make a valid Content Management API request. Read more about [authentication](/docs/developers/apis/content-management-api/#authentication).

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json |  |

**Request Body:**

```json
{
	"workflow_stages": [{
			"name": "Review",
			"description": "Check for technical accuracy",
			"color": "red"
		},
		{
			"name": "Needs Changes",
			"description": "Incorporate introduced changes",
			"color": "orange"
		}
	],
	"status": {
		"workflow_stages": true
	}
}
```

**Response (200):**

```json
{
	"message": "Workflow updated successfully.",
	"workflow": {
		"api_key": "bltead62b75f44449be",
		"name": "Workflow",
		"uid": "blta0fbf5645cfe70a7",
		"org_uid": "blt987d5031d804e50b",
		"workflow_stages": [{
				"name": "Draft",
				"uid": "draft",
				"color": "#FFCC00",
				"description": "This stage marks the beginning of your entry lifecycle. Every new entry is assigned the ‘Draft’ stage by default."
			},
			{
				"name": "Review",
				"uid": "review",
				"color": "red",
				"description": "Check for technical accuracy"
			},
			{
				"name": "Needs Changes",
				"uid": "needschanges",
				"color": "orange",
				"description": "Incorporate introduced changes"
			},
			{
				"name": "Complete",
				"uid": "complete",
				"color": "#7ED321",
				"description": "This is the final stage of your entry. Assign this stage when the entry is ready for publishing."
			}
		],
		"status": {
			"workflow_stages": true,
			"publishing_rules": true
		},
		"created_at": "2018-03-27T15:51:13.510Z",
		"updated_at": "2018-04-03T10:22:57.999Z",
		"created_by": "blt5f75d38457c7b306",
		"updated_by": "blt5f75d38457c7b306"
	}
}
```
