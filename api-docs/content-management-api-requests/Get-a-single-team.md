---
title: "Get a single team"
description: GET /organizations/{organization_uid}/teams/{team_uid}
url: developer-apis/content-management-api-requests/get-a-single-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Get a single team

**GET** `/organizations/{organization_uid}/teams/{team_uid}`

The Get a single team request returns comprehensive information of a specific team available in a particular organization.

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the details. The UID of a team is unique across an organization. Execute the [Get all teams](../api-detail/content-management-api.md#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

## Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

## Sample Response

```json
{
    "_id": "65b******************e9a",
    "name": "Sample Team",
    "createdAt": "2024-02-01T09:55:46.703Z",
    "createdBy": "blt**************f0",
    "updatedAt": "2024-02-01T09:56:36.724Z",
    "updatedBy": "blt**************f0",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************a0",
        "blt**************8d",
        "blt**************21"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************37"
            ]
        },
        {
            "stackApiKey": "blt**************fe",
            "roles": [
                "blt**************32"
            ]
        }
    ],
    "organizationRole": "blt**************8d",
    "__v": 0,
    "uid": "65b******************e9a",
    "createdByUserName": "Sample User",
    "updatedByUserName": "Sample User"
}
```

