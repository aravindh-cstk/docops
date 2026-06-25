---
title: "Get all Tasks"
description: GET /user/assignments?query={query_in_JSON}&sort={field_uid: 'asc/desc'}&limit={limit_value}&skip={skip_value}
url: developers/apis/content-management-api/requests/get-all-tasks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get all Tasks

**GET** `/user/assignments?query={query_in_JSON}&sort={field_uid: "asc/desc"}&limit={limit_value}&skip={skip_value}`

The Get all Tasks request retrieves a list of all tasks assigned to you.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.

## Query Parameters

- **query** (required)
  Enter the actual query that will be executed to retrieve the tasks. This query should be in JSON format. Example: - {"job.publishing_rule.status":0}: retrieves pending approval requests - {"type":"workflow_stage"}: retrieve tasks based on Workflow Stages - {"job.workflow_stage.uid": "workflow_stage_uid"}: retrieve tasks based on a specific Workflow Stage  - {"content_type":"content_type_uid", "type": "publishing_rule"}: retrieve tasks based on multiple conditions
  Default: `{"type":"workflow_stage"}`
- **sort** (optional)
  Enter the field UID on the basis of which you want to sort your tasks. Example: {"assigned_at": "desc"}, {"content_type": "asc"}, or {"assigned_date": "desc", "locale":"asc"}
  Default: `{“assigned_at”: “desc”}`
- **limit** (optional)
  Enter the maximum number of tasks that you want to retrieve in the response.
  Default: `5`
- **skip** (optional)
  Enter the number of tasks to be skipped.
  Default: `5`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Response

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

