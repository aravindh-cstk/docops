---
title: "Get an execution log item"
description: GET /v1/projects/{project_uid}/executions/{execution_uid}
url: developers/apis/automations-management-api/requests/get-an-execution-log-item
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get an execution log item


**Method:** `GET`  
**Endpoint:** `/v1/projects/{project_uid}/executions/{execution_uid}`

The Get an execution log item request is used to retrieve a specific item from the execution log of a project.

To configure the permissions for your application via OAuth, include the automationhub.executions:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 | Enter the Project UID. |

| execution_uid | 050efa54ebe646349619e1eaf40cd130 | Enter the UID of the specific execution log. |

**Response (200):**

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
