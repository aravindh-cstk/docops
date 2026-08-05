---
title: "Get a single team"
description: /organizations/{organization_uid}/teams/{team_uid}
url: /get-a-single-team
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T09:57:13.765Z
updated_at: 2024-02-13T11:29:31.162Z
---

# Get a single team

<p>The <span data-type='inlineCode'>Get a single team</span> request returns comprehensive information of a specific team available in a particular organization.</p>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team of which you want to retrieve the details. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Query Parameters

- **includeUserDetails** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

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

