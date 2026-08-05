---
title: "Update a team"
description: /organizations/{organization_uid}/teams/{team_uid}
url: /update-a-team
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T10:02:23.645Z
updated_at: 2024-02-13T11:31:41.872Z
---

# Update a team

<p>The <span data-type='inlineCode'>Update a team</span> request is used to modify details, such as adding or removing users from a team, assigning or removing stack roles within a team, updating team descriptions, and updating organization roles for an existing team within a specific organization.</p>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}`

**Method**: `PUT`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team you want to update. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Query Parameters

- **includeUserDetails** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

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

## Response

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

