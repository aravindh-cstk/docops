---
title: "Get all automations"
description: GET /v1/projects/{project_uid}/automations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&show_steps={boolean_value}
url: developers/apis/automations-management-api/requests/get-all-automations
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-11
---

# Get all automations


**Method:** `GET`  
**Endpoint:** `/v1/projects/{project_uid}/automations?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}&show_steps={boolean_value}`

The Get all automations request returns comprehensive information of all the automations created in a project.

To configure the permissions for your application via OAuth, include the automationhub.automations:read scope.

To get a list of automations that are active, you need to pass the query={'active':'true'} parameter.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 | Enter the Project UID of the project. |

| limit | 30 | The “limit” parameter will return a specific number of automations (in between 0-100) in your response based on the value you provide. If there are 100 automati |

| skip | 2 | The “skip” parameter will skip a specific number of automations and return the remaining ones in your response based on the value you provide. If there are 12 a |

| asc | created_at | The “asc” parameter allows you to sort the list of automations in the ascending order with respect to the value of a specific field. The automations can be sort |

| desc | created_at | The “desc” parameter allows you to sort the list of automations in the descending order with respect to the value of a specific field. The automations can be so |

| include_count | true | Set this to “true” to include the total number (count) of automations present in a project accessible in an organization. |

| show_steps | true | Set this to “true” to return all the steps, triggers associated with each automation in a project. |

**Response (200):**

```json
{
    "rules": [
        {
            "id": "345ae3c033c643***f34fe90032eaaad",
            "title": "ChatGPT",
            "description": "",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "org_id": "blt4051c65****df287",
            "user_id": "blt762406d****c6b33",
            "active": true,
            "updated_by": "blt762406****1c6b33",
            "throttle": false,
            "created_at": "2024-02-22T11:32:24.309Z",
            "updated_at": "2024-02-22T12:12:08.109Z"
        },
        {
            "id": "b5b0a755a51d4***81d0968fe19a5f62",
            "title": "ChatGPT Test 2",
            "description": "",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "org_id": "blt4051c6***6ddf287",
            "user_id": "blt76240****71c6b33",
            "active": false,
            "updated_by": "blt76240****71c6b33",
            "throttle": false,
            "created_at": "2024-02-22T12:12:24.422Z",
            "updated_at": "2024-02-22T12:12:24.422Z"
        }
    ]
}
```
