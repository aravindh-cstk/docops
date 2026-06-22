---
title: "Get a single automation"
description: GET /v1/projects/{project_uid}/automations/{automation_uid}?show_steps={boolean_value}
url: developers/apis/automations-management-api/requests/get-a-single-automation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get a single automation


**Method:** `GET`  
**Endpoint:** `/v1/projects/{project_uid}/automations/{automation_uid}?show_steps={boolean_value}`

The Get a single automation request fetches a specific automation from a project in which it was created.

To configure the permissions for your application via OAuth, include the automationhub.automations:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 | Enter the Project UID. |

| automation_uid | e82a0f19673b4a808cd39743b71ae624 | Enter the Automation UID. |

| show_steps | true | Set this to “true” to return all the steps, triggers associated with each automation in a project. |

**Response (200):**

```json
{
    "id": "b5b0a755a51d4****1d0968fe19a5f62",
    "title": "ChatGPT Test 2",
    "description": "",
    "project_id": "05732fe9f7d6454791715b09a3792f52",
    "org_id": "blt4051c****6ddf287",
    "user_id": "blt76240****71c6b33",
    "active": false,
    "updated_by": "blt7624****e71c6b33",
    "throttle": false,
    "created_at": "2024-02-22T12:12:24.422Z",
    "updated_at": "2024-02-22T12:12:24.422Z"
}
```
