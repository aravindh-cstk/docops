---
title: "Add a stack role mapping"
description: POST /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings
url: developers/apis/administration-api/requests/add-a-stack-role-mapping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Add a stack role mapping


**Method:** `POST`  
**Endpoint:** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings`

The Add a stack role mapping request allows you to associate users from a specified team with the available stacks in your organization.

You need to pass the API key of the stack and the role UIDs in the request body as follows:

```
{
    "stackApiKey": "stack_api_key",
    "roles": [
        "role_one_uid",
        "role_two_uid"
    ]
}
```

##### Update a stack role mapping

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| team_uid | team_uid | Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/ |

**Request Body:**

```json
{
    "stackApiKey": "blt**************74",
    "roles": [
        "blt**************f6",
        "blt**************37"
    ]
}
```

**Response (201):**

```json
{
    "stackRoleMapping": {
        "stackApiKey": "blt**************74",
        "roles": [
            "blt**************f6",
            "blt**************37"
        ]
    }
}
```
