---
title: "Update a stack role mapping"
description: POST /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}
url: developers/apis/administration-api/requests/update-a-stack-role-mapping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Update a stack role mapping


**Method:** `POST`  
**Endpoint:** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}`

The Update a stack role mapping request allows you to update the stack roles for a specific stack in your organization. You need to pass the role UIDs in the request body as follows:

```
{
    "roles": [
        "role_uid"
    ]
}
```

##### Remove a stack role mapping

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| team_uid | team_uid | Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/ |

| stack_api_key | your_stack_api_key | Enter the API key of the stack. |

**Request Body:**

```json
{
    "roles": [
        "blt**************48",
        "blt**************f4"
    ]
}
```

**Response (200):**

```json
{
    "stackRoleMapping": {
        "stackApiKey": "blt**************74",
        "roles": [
            "blt**************48",
            "blt**************f4"
        ]
    }
}
```
