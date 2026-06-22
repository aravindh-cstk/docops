---
title: "Get all projects"
description: GET /v1/projects?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}
url: developers/apis/automations-management-api/requests/get-all-projects
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Get all projects


**Method:** `GET`  
**Endpoint:** `/v1/projects?limit={limit_value}&skip={skip_value}&asc={field_uid}&desc={field_uid}&include_count={boolean_value}`

The Get all projects request returns comprehensive information of all the projects related to the Organization in which they are created.

To configure the permissions for your application via OAuth, include the automationhub.projects.management:read scope.

**Note:** If you do not specify a value for the optional “limit” query parameter, the API request will by default return the initial 100 items.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. Refer [Authentication](/docs/developers/apis/automation-hub-management-api#authentication) for more details. |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| limit | 30 | The “limit” parameter will return a specific number of projects (in between 0-100) in your response based on the value you provide. If there are 100 projects an |

| skip | 2 | The “skip” parameter will skip a specific number of projects and return the remaining ones in your response based on the value you provide.  If there are 12 pro |

| asc | created_at | The “asc” parameter allows you to sort the list of projects in the ascending order with respect to the value of a specific field. The projects can be sorted by  |

| desc | created_at | The “desc” parameter allows you to sort the list of projects in the descending order with respect to the value of a specific field. The projects can be sorted b |

| include_count | true | Set this to “true” to include the total number (count) of projects in an organization. |

**Response (200):**

```json
{
    "projects": [
        {
            "title": "demo 14dec",
            "description": "",
            "user_id": "bltb71****0e9b7facc",
            "org_id": "bltc14f1***7416061b",
            "shared": [
                "blt82dbdb***5e144b53"
            ],
            "tags": [],
            "updated_by": "bltb712****e9b7facc",
            "type": "standard",
            "created_at": "2024-02-04T13:44:35.265Z",
            "updated_at": "2024-02-04T14:20:22.442Z",
            "id": "bbc469d1f445482****cae6b358479d0",
            "created_by": {
                "uid": "bltb7128*****9b7facc",
                "username": "test1_bltc0ec3c96",
                "email": "sample_user1@example.com",
                "firstName": "John",
                "lastName": "Doe",
                "active": true
            }
        },

        {
            "title": "Demo",
            "description": "",
            "user_id": "bltb712****e9b7facc",
            "org_id": "bltc14f1****416061b",
            "shared": [],
            "tags": [
                "testing"
            ],
            "updated_by": "bltb7128****9b7facc",
            "type": "standard",
            "created_at": "2024-01-31T06:39:54.994Z",
            "updated_at": "2024-01-31T06:39:54.994Z",
            "id": "f2065bad17f24****9faba08539b2753",
            "created_by": {
                "uid": "bltb7128***e9b7facc",
                "username": "test2_bltc0ec3c96",
                "email": "sample_user2@example.com",
                "firstName": "John",
                "lastName": "Smith",
                "active": true
            }
        }
          
    ] 
}
```
