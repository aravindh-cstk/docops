---
title: "Get all Tasks"
description: /user/assignments?query={query_in_JSON}&sort={field_uid: "asc/desc"}&limit={limit_value}&skip={skip_value}
url: /get-all-tasks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:09.461Z
updated_at: 2023-01-05T14:09:09.461Z
---

# Get all Tasks

<p>The&nbsp;<span data-type="inlineCode" style="font-size: 12.6px;">Get all Tasks</span>&nbsp;request retrieves a list of all tasks assigned to you.</p><p>When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.</p>

**API Endpoint**: `/user/assignments?query={query_in_JSON}&sort={field_uid: "asc/desc"}&limit={limit_value}&skip={skip_value}`

**Method**: `GET`

## Query Parameters

- **query** (required)
  <p>Enter the actual query that will be executed to retrieve the tasks. This query should be in JSON format. Example:
</p>
<ul>
	<li><span data-type="inlineCode">{"job.publishing_rule.status":0}</span>: retrieves pending approval requests</li>
	<li><span data-type="inlineCode">{"type":"workflow_stage"}</span>: retrieve tasks based on Workflow Stages</li>
	<li><span data-type="inlineCode">{"job.workflow_stage.uid": "workflow_stage_uid"}</span>: retrieve tasks based on a specific Workflow Stage&nbsp;</li>
	<li><span data-type="inlineCode">{"content_type":"content_type_uid", "type": "publishing_rule"}</span>: retrieve tasks based on multiple conditions</li>
</ul>
- **sort** (optional)
  <p>Enter the field UID on the basis of which you want to sort your tasks. Example: <span data-type="inlineCode">{"assigned_at": "desc"}</span>, <span data-type="inlineCode">{"content_type": "asc"}</span>, or <span data-type="inlineCode">{"assigned_date": "desc", "locale":"asc"}</span>
</p>
- **limit** (optional)
  <p>Enter the maximum number of tasks that you want to retrieve in the response.</p>
- **skip** (optional)
  <p>Enter the number of tasks to be skipped.</p>

## Headers

- **api_key** (required)
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Response

```json
{
	"assignments": [{
			"api_key": "bltead62b75f44449be",
			"content_type": "test_2",
			"entry_uid": "blt85e280c58eee9371",
			"locale": "en-us",
			"org_uid": "blt987d5031d804e50b",
			"type": "workflow_stage",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d38457c7b306"
			],
			"assigned_at": "2018-04-03T15:05:50.047Z",
			"assigned_by": "blt5f75d38457c7b306",
			"due_date": "2018-04-03T18:30:00.000Z",
			"job": {
				"org": "sample_org",
				"stack": "demo",
				"content_type": "test_ct_2",
				"entry": "Hi",
				"locale": "English - United States",
				"workflow_stage": {
					"uid": "review",
					"title": "Review",
					"color": "red"
				}
			}
		},
		{
			"api_key": "bltead62b75f44449be",
			"content_type": "test_2",
			"entry_uid": "blt85e280c58eee9371",
			"locale": "en-us",
			"org_uid": "blt987d5031d804e50b",
			"type": "workflow_stage",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d38457c7b306"
			],
			"assigned_at": "2018-04-03T15:05:50.047Z",
			"assigned_by": "blt5f75d38457c7b306",
			"due_date": "2018-04-03T18:30:00.000Z",
			"job": {
				"org": "demo_org",
				"stack": "test",
				"content_type": "test_ct",
				"entry": "Hello",
				"locale": "English - United States",
				"workflow_stage": {
					"uid": "review",
					"title": "Review",
					"color": "red"
				}
			}
		},
		{
			"action": "publish",
			"api_key": "bltead62b75f00000be",
			"content_type": "test_1",
			"entry_uid": "blt4d9ab000e00ddfa8",
			"environment": "bltf00d80f0b000cf90",
			"locale": "hi-in",
			"org_uid": "blt987d0000d000e50b",
			"type": "publishing_rule",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d00000c7b000"
			],
			"assigned_at": "2018-04-04T07:36:05.087Z",
			"assigned_by": "blt5f75d00000c7b306",
			"job": {
				"org": "test_org",
				"stack": "sample2",
				"content_type": "test_ct_2",
				"entry": "Test",
				"locale": "French - France",
				"environment": "development",
				"publishing_rule": {
					"uid": "blt9b0000097f117e84",
					"status": -1
				}
			},
			"comment": "Here’s your task."
		}
	]
}
```

