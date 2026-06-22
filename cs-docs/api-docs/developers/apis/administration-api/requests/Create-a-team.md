---
title: "Create a team"
description: POST /organizations/{organization_uid}/teams
url: developers/apis/administration-api/requests/create-a-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Create a team


**Method:** `POST`  
**Endpoint:** `/organizations/{organization_uid}/teams`

The Create a team request creates a team in the specified organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| includeUserDetails | true | Set this parameter to “true” to include the details of users in the response. |

**Request Body:**

```json
{
    "name": "Team A",
    "users": ["blt**************a0"],
    "stackRoleMapping": [{
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }],
    "organizationRole": "blt**************c5"
}
```

**Response (201):**

```json
{
    "_id": "65b*******************11",
    "name": "Team A",
    "createdAt": "2024-02-01T11:01:33.399Z",
    "createdBy": "blt**************f0",
    "updatedAt": "2024-02-01T11:01:33.399Z",
    "updatedBy": "blt**************f0",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************a0"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }
    ],
    "organizationRole": "blt**************c5",
    "__v": 0,
    "uid": "65b*******************11",
    "createdByUserName": "Jane Doe
    "updatedByUserName": "Jane Doe"
}
```
