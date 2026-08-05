---
title: "Add or Update Workflow Stages"
description: /workflows/workflow_stages
url: /add-or-update-workflow-stages
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:08.502Z
updated_at: 2023-02-02T06:09:46.601Z
---

# Add or Update Workflow Stages

<p>The <span data-type="inlineCode">Add or Update Workflow Stages</span> request allows you to add or update the workflow stages.</p>
<p class="note"><strong>Note</strong>: You need to use either the stack’s Management Token or the user Authtoken (any one is mandatory), along with the stack API key, to make a valid Content Management API request. Read more about <a href="/docs/developers/apis/content-management-api/#authentication">authentication</a>.</p>

**API Endpoint**: `/workflows/workflow_stages`

**Method**: `POST`

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)

## Request Body

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

## Response

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

