---
title: "Remove a user from team"
description: DELETE /organizations/{organization_uid}/teams/{team_uid}/users/{user_uid}
url: developers/apis/content-management-api/requests/remove-a-user-from-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Remove a user from team


**Method:** `DELETE`  
**Endpoint:** `/organizations/{organization_uid}/teams/{team_uid}/users/{user_uid}`

The Remove a user from team request allows you to remove an existing user from a particular team.

**Note**: Only the Owner or the Admin of the organization can remove users from a team.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| team_uid | team_uid | Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/ |

| user_uid | user_uid | Enter the UID of the user you want to remove from the team. The UID of a user is unique across an organization. Execute the [Get all users of team](/docs/develo |
