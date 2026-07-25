---
title: "Get a single team"
description: /v4/teams/{team_uid}
url: /get-a-single-team
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:27.238Z
updated_at: 2026-07-15T13:06:02.256Z
---

# Get a single team

<p>The <span data-type='inlineCode'>Get a single team</span> request returns comprehensive information about one team in your organization, including its members and its assigned organization roles, stack role mappings, and project roles.</p><p>Pass the team’s UID as <span data-type='inlineCode'>team_uid</span> in the request path and your organization’s UID in the <span data-type='inlineCode'>organization_uid</span> header. By default, the <span data-type='inlineCode'>users</span> array contains user UID strings. Set <span data-type='inlineCode'>include_user_details</span> to “true” to expand them into full user objects that include <span data-type='inlineCode'>uid</span>, <span data-type='inlineCode'>username</span>, <span data-type='inlineCode'>email</span>, <span data-type='inlineCode'>firstName</span>, <span data-type='inlineCode'>lastName</span>, <span data-type='inlineCode'>active</span>, and <span data-type='inlineCode'>orgInvitationStatus</span>.</p><p>The <span data-type='inlineCode'>uid</span> and <span data-type='inlineCode'>_id</span> fields hold the same value; use either to reference the team in follow-up requests. A request for a team that does not exist returns a <span data-type='inlineCode'>404</span> error.</p>

**API Endpoint**: `/v4/teams/{team_uid}`

**Method**: `GET`

## URL Parameters

- **team_uid** (required)
  <p>Enter the UID of the team of which you want to retrieve the details. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Query Parameters

- **include_user_details** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>

## Response

```json
{
    "_id": "65b*****************e9a",
    "name": "Sample Team",
    "description": "Marketing team",
    "createdAt": "2024-02-01T09:55:46.703Z",
    "createdBy": "blt**************f0",
    "createdByUserName": "Sample User",
    "updatedAt": "2024-02-01T09:56:36.724Z",
    "updatedBy": "blt**************f0",
    "updatedByUserName": "Sample User",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************a0",
        "blt**************8d"
    ],
    "organizationRoles": [
        "blt**************8d"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************37"
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

