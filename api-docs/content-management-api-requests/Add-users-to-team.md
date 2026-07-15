---
title: "Add users to team"
description: POST /organizations/{organization_uid}/teams/{team_uid}/users
url: developer-apis/content-management-api-requests/add-users-to-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Add users to team

**POST** `/organizations/{organization_uid}/teams/{team_uid}/users`

The Add users to team request allows you to send invitations to add users and assign them organizational and stack roles.

**Note**: Only the Owner or the Admin of the organization can add users to a team.

You need to pass the email IDs of the users in the request body as follows:

```
{
    "emails": [ "user1@contentstack.com", "user2@contentstack.com"]
}
```

##### Remove a user from team

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](../api-detail/content-management-api.md#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
    "emails":["john.doe@contentstack.com", "jane.doe@contentstack.com"]
}
```

