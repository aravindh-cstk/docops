---
title: "Get all users of team"
description: GET /organizations/{organization_uid}/teams/{team_uid}/users
url: developers/apis/content-management-api/requests/get-all-users-of-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-16
---

# Get all users of team

**GET** `/organizations/{organization_uid}/teams/{team_uid}/users`

The Get all users of team request retrieves information about all the users associated with a particular team.

Additionally, you can also set the query parameters: includeUserDetails or include_count to true to include user details and the count of users in the response.

##### Add users to team

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/developers/apis/content-management-api#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

## Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`
- **include_count** (optional)
  Set this parameter to “true” to include the total count of users in the response.
  Default: `true`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

## Sample Response

```json
{
    "users": [
        {
            "uid": "blt**************f0",
            "username": "jane_blt6266157b",
            "email": "jane.doer@contentstack.com",
            "firstName": "Jane",
            "lastName": "Doer",
            "active": true,
            "orgInvitationStatus": "accepted"
        },
        {
            "uid": "blt**************8d",
            "username": "john_blt28057039",
            "email": "john.doe@contentstack.com",
            "firstName": "John",
            "lastName": "Doe",
            "active": true,
            "orgInvitationStatus": "accepted"
        },
        {
            "uid": "blt**************21",
            "username": "jane_blt9d1e076e",
            "email": "jane.doe@contentstack.com",
            "firstName": "Jane",
            "lastName": "Doe",
            "active": true,
            "orgInvitationStatus": "accepted"
        },
        {
            "uid": "blt**************a0",
            "username": "sample_blt03a1b0ad",
            "email": "sample.user@contentstack.com",
            "firstName": "Sample",
            "lastName": "User",
            "active": true,
            "orgInvitationStatus": "accepted"
        }
    ],
    "count": 4
}
```

