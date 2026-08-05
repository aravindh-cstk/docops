---
title: "Get an execution log item"
description: /v1/projects/{project_uid}/executions/{execution_uid}
url: /get-an-execution-log-item
product: Contentstack
doc_type: api-request
created_at: 2024-02-07T17:29:54.517Z
updated_at: 2024-02-22T13:38:15.051Z
---

# Get an execution log item

<p>The <span class="code">Get an execution log item</span> request is used to retrieve a specific item from the execution log of a project.</p><p>To configure the permissions for your application via OAuth, include the <span class="code">automationhub.executions:read</span> scope.</p>

**API Endpoint**: `/v1/projects/{project_uid}/executions/{execution_uid}`

**Method**: `GET`

## URL Parameters

- **project_uid** (required)
  <p>Enter the Project UID.</p>
- **execution_uid** (required)
  <p>Enter the UID of the specific execution log.</p>

## Headers

- **authtoken** (required)
  <p><span style="font-size: 12pt;">Enter your authtoken. Refer </span><a href="/docs/developers/apis/automation-hub-management-api#authentication" target="_self"><span style="font-size: 12pt;">Authentication</span></a><span style="font-size: 12pt;"> for more details.</span></p>
- **organization_uid** (required)
  <p>Enter the Organization UID.</p>

## Response

```json
{
    "title": "Slack",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "trigger_payload_id": "1fa815a1dc27***9874404adebe2451f",
    "org_id": "blt4051c65***ddf287",
    "rule_id": "bb27e85b4b3b****ac4c19b7765b1d0f",
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
    "id": "7cc3a3be3bcd48a49***d1fc1f2e170f",
    "step_name_map": {
        "1": "1",
        "110002": "2",
        "110003": "3"
    },
    "duration": 8
}
```

