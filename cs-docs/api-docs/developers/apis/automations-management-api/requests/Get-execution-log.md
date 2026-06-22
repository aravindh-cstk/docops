---
title: "Get execution log"
description: GET /v1/projects/{project_uid}/executions?&limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}
url: developers/apis/automations-management-api/requests/get-execution-log
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get execution log


**Method:** `GET`  
**Endpoint:** `/v1/projects/{project_uid}/executions?&limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get execution log request is used to retrieve the execution log of a project.

To configure the permissions for your application via OAuth, include the automationhub.executions:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 | Enter the Project UID. |

| limit | 30 | The “limit” parameter will return a specific number of execution log (in between 0-100) in your response based on the value you provide. If there are 100 execut |

| skip | 2 | The “skip” parameter will skip a specific number of execution log and return the remaining ones in your response based on the value you provide. If there are 12 |

| asc | created_at | The “asc” parameter allows you to sort the list of execution log in the ascending order with respect to the value of a specific field. The execution log can be  |

| desc | created_at | The “desc” parameter allows you to sort the list of execution log in the descending order with respect to the value of a specific field. The execution log can b |

| include_count | true | Set this to “true” to include the total number (count) of execution log in an organization. |

**Response (200):**

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
