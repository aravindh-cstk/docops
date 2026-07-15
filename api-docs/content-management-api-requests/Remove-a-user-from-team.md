---
title: "Remove a user from team"
description: DELETE /organizations/{organization_uid}/teams/{team_uid}/users/{user_uid}
url: developer-apis/content-management-api-requests/remove-a-user-from-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Remove a user from team

**DELETE** `/organizations/{organization_uid}/teams/{team_uid}/users/{user_uid}`

The Remove a user from team request allows you to remove an existing user from a particular team.

**Note**: Only the Owner or the Admin of the organization can remove users from a team.

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](../api-detail/content-management-api.md#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`
- **user_uid** (required)
  Enter the UID of the user you want to remove from the team. The UID of a user is unique across an organization. Execute the [Get all users of team](../api-detail/content-management-api.md#get-all-users-of-team) request to retrieve the UID of a user.
  Default: `user_uid`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

