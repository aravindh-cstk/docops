---
title: "Get all project variables"
description: GET /v1/projects/{project_uid}/variables?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}
url: developers/apis/automations-management-api/requests/get-all-project-variables
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get all project variables


**Method:** `GET`  
**Endpoint:** `/v1/projects/{project_uid}/variables?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get all project variables request returns comprehensive information of all the project variables defined in a project.

To configure the permissions for your application via OAuth, include the automationhub.variables:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter your Organization UID. |

| project_uid | 05732fe9f7d6454791715b09a3792f52 |  |

| limit | 30 | The “limit” parameter will return a specific number of project variables (in between 0-100) in your response based on the value you provide. If there are 100 pr |

| skip | 2 | The “skip” parameter will skip a specific number of project variables and return the remaining ones in your response based on the value you provide. If there ar |

| asc | created_at | The “asc” parameter allows you to sort the list of project variables in the ascending order with respect to the value of a specific field. The project variables |

| desc | created_at | The “desc” parameter allows you to sort the list of project variables in the descending order with respect to the value of a specific field. The project variabl |

| include_count | true | Set this to “true” to include the total number (count) of project variables in an organization. |

**Response (200):**

```json
{
    "variables": [
        {
            "key": "Key1",
            "value": "1234567",
            "org_id": "blt******5ea6ddf287",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "type": "text",
            "created_at": "2024-02-22T11:32:54.440Z",
            "updated_at": "2024-02-22T11:33:09.574Z",
            "id": "fe4c65e93a664948b24854277af477da"
        },
        {
            "key": "Key2",
            "value": "ENC_123456789014;2WjbDeWolmvVJVsm;vjFptQQq3+I/V27Uru97/g==;wKoBGVLgsw==",
            "org_id": "blt******5ea6ddf287",
            "project_id": "05732fe9f7d6454791715b09a3792f52",
            "type": "password",
            "created_at": "2024-02-22T11:33:03.772Z",
            "updated_at": "2024-02-22T11:33:03.772Z",
            "id": "f7bbf2d9cb894b5aa34b3d28603ae174"
        }
    ]
}
```
