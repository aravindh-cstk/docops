---
title: "Get all users of team"
description: /organizations/{organization_uid}/teams/{team_uid}/users
url: /get-all-users-of-team
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:35.968Z
updated_at: 2026-04-07T12:55:35.968Z
---

# Get all users of team

<p>The <span data-type='inlineCode'>Get all users of team</span> request retrieves information about all the users associated with a particular team.</p><p>Additionally, you can also set the query parameters: <span data-type='inlineCode'>includeUserDetails</span> or <span data-type='inlineCode'>include_count</span> to <span data-type='inlineCode'>true</span> to include user details and the count of users in the response.</p><h5>Add users to team</h5>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}/users`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Query Parameters

- **includeUserDetails** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>
- **include_count** (optional)
  <p>Set this parameter to “true” to include the total count of users in the response.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

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

