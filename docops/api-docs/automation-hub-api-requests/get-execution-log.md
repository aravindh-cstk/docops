---
title: "Get execution log"
description: /v1/projects/{project_uid}/executions?&limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}
url: /get-execution-log
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T16:46:55.729Z
updated_at: 2024-02-22T13:35:51.991Z
---

# Get execution log

<p>The <span class="code">Get execution log</span> request is used to retrieve the execution log of a project.</p><p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.executions:read</span> scope.</p><p class="note"><strong>Note:</strong> If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.</p>

**API Endpoint**: `/v1/projects/{project_uid}/executions?&limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>

## Query Parameters

- **limit** (optional)
  <span>The “limit” parameter will return a specific number of execution log (in between 0-100) in your response based on the value you provide. If there are 100 execution log and you want to fetch only 30 execution log, set the limit as 30.</span>
- **skip** (optional)
  <span>The “skip” parameter will skip a specific number of execution log and return the remaining ones in your response based on the value you provide. If there are 12 log and you want to exclude the first 2 log, set this to 2 to fetch the remaining 10 log.
</span>
- **asc** (optional)
  <span>The “asc” parameter allows you to sort the list of execution log in the ascending order with respect to the value of a specific field. The execution log can be sorted by <em>created_at</em>, <em>title</em>, and <em>updated_at </em>values.</span>
- **desc** (optional)
  <span>The “desc” parameter allows you to sort the list of execution log in the descending order with respect to the value of a specific field. The execution log can be sorted by <em>created_at</em>, <em>title</em>, and <em>updated_at </em>values.</span>
- **include_count** (optional)
  <span>Set this to “true” to include the total number (count) of execution log in an organization.</span>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

```json
{
    "executions": [
        {
            "title": "Slack",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "trigger_payload_id": "1fa815a1d****c59874404adebe2451f",
            "org_id": "blt4051c6***6ddf287",
            "rule_id": "bb27e85b4b3****bac4c19b7765b1d0f",
            "status": "success",
            "task": 3,
            "resume": 0,
            "details": [
                {
                    "start": 1708608898366,
                    "end": 1708608898374,
                    "title": "Trigger",
                    "name": "1",
                    "status": "success"
                },
                {
                    "start": 1708608898374,
                    "end": 1708608898374,
                    "parent": null,
                    "counter": 0,
                    "group": "transform",
                    "name": "110002",
                    "status": "success",
                    "title": "Transform"
                },
                {
                    "start": 1708608898374,
                    "end": 1708608898374,
                    "parent": null,
                    "counter": 0,
                    "group": "response",
                    "name": "110003",
                    "status": "success",
                    "title": "Response"
                }
            ],
            "created_at": "2024-02-22T13:34:58.354Z",
            "updated_at": "2024-02-22T13:34:58.374Z",
            "id": "7cc3a3be3bcd48a4****96d1fc1f2e170f",
            "step_name_map": {
                "1": "1",
                "110002": "2",
                "110003": "3"
            },
            "duration": 8
        }
    ]
}
```

