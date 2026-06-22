---
title: "Update a team"
description: PUT /organizations/{organization_uid}/teams/{team_uid}
url: developers/apis/administration-api/requests/update-a-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Update a team


**Method:** `PUT`  
**Endpoint:** `/organizations/{organization_uid}/teams/{team_uid}`

The Update a team request is used to modify details, such as adding or removing users from a team, assigning or removing stack roles within a team, updating team descriptions, and updating organization roles for an existing team within a specific organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| team_uid | team_uid | Enter the UID of the team you want to update. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-mana |

| includeUserDetails | true | Set this parameter to “true” to include the details of users in the response. |

**Request Body:**

```json
{
    "name": "Team A",
    "users": [
        {
            "email": "john.doe@contentstack.com"
        }
    ],
    "organizationRole": "blt**************8d",
    "stackRoleMapping": [
        {
            "roles": [
                "blt**************f6"
            ],
            "stackApiKey": "blt**************74"
        }
    ]
}
```

**Response (200):**

```json
{
    "_id": "65b******************e9a",
    "name": "Team A",
    "createdAt": "2024-02-01T09:55:46.703Z",
    "createdBy": "blt**************f0",
    "updatedAt": "2024-02-01T11:06:35.107Z",
    "updatedBy": "blt**************f0",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************21"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }
    ],
    "organizationRole": "blt**************8d",
    "__v": 0,
    "uid": "65b******************e9a",
    "createdByUserName": "Jane Doe",
    "updatedByUserName": "Jane Doe"
}
```
