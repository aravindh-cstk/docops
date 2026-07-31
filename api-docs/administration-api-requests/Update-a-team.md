---
title: "Update a team"
description: /v4/teams/{team_uid}
url: /update-a-team
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:31.665Z
updated_at: 2026-07-15T13:06:36.834Z
---

# Update a team

<p>The <span data-type='inlineCode'>Update a team</span> request modifies an existing team, including its <span data-type='inlineCode'>name</span>, <span data-type='inlineCode'>description</span>, members, organization roles, stack role mappings, and project roles.</p><p>This request replaces values rather than merging them. The <span data-type='inlineCode'>users</span>, <span data-type='inlineCode'>organizationRoles</span>, and <span data-type='inlineCode'>stackRoleMapping</span> values you send become the team’s complete set, so include every member and role you want to keep, not only the ones you are adding or changing. To clear one of these, send an empty array, for example <span data-type='inlineCode'>"users": []</span>. The <span data-type='inlineCode'>projectRoles</span> field behaves differently: it stays unchanged only when you omit it entirely, and sending it with any value, including <span data-type='inlineCode'>[]</span>, replaces the existing project roles.</p><p>Pass the team’s UID as <span data-type='inlineCode'>team_uid</span> in the request path and your organization’s UID in the <span data-type='inlineCode'>organization_uid</span> header. On success, the request returns a <span data-type='inlineCode'>200</span> response with the updated team. Set <span data-type='inlineCode'>include_user_details</span> to “true” to receive full user objects in the response.</p>

**API Endpoint**: `/v4/teams/{team_uid}`

**Method**: `PUT`

## URL Parameters

- **team_uid** (required)
  <p>Enter the UID of the team you want to update. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Query Parameters

- **include_user_details** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
    "name": "Team A",
    "description": "Marketing team",
    "users": [
        {
            "email": "john.doe@contentstack.com"
        }
    ],
    "organizationRoles": [
        "blt**************8d"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }
    ],
    "projectRoles": [
        {
            "projectUid": "blt**************p1",
            "domain": "am",
            "roles": [
                "blt**************r1"
            ]
        }
    ]
}
```

## Response

```json
{
    "_id": "65b*****************e9a",
    "name": "Team A",
    "description": "Marketing team",
    "createdAt": "2024-02-01T09:55:46.703Z",
    "createdBy": "blt**************f0",
    "createdByUserName": "Jane Doe",
    "updatedAt": "2024-02-01T11:06:35.107Z",
    "updatedBy": "blt**************f0",
    "updatedByUserName": "Jane Doe",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************21"
    ],
    "organizationRoles": [
        "blt**************8d"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }
    ],
    "projectRoles": [
        {
            "projectUid": "blt**************p1",
            "domain": "am",
            "roles": [
                "blt**************r1"
            ]
        }
    ],
    "__v": 0,
    "uid": "65b*****************e9a"
}
```

