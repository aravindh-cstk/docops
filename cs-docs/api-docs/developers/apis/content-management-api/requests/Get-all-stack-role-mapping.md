---
title: "Get all stack role mapping"
description: GET /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings
url: developers/apis/content-management-api/requests/get-all-stack-role-mapping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Get all stack role mapping


**Method:** `GET`  
**Endpoint:** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings`

The Get all stack role mapping request allows you to retrieve details of all associated stacks for a specified team in your organization.

##### Add a stack role mapping

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| team_uid | team_uid | Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/ |

**Response (200):**

```json
{
    "stackRoleMappings": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        },
        {
            "stackApiKey": "blt**************fe",
            "roles": [
                "blt**************3a"
            ]
        }
    ]
}
```
