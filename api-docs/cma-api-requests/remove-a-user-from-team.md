---
title: "Remove a user from team"
description: /organizations/{organization_uid}/teams/{team_uid}/users/{user_uid}
url: /remove-a-user-from-team
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T10:16:33.842Z
updated_at: 2024-02-13T11:38:11.962Z
---

# Remove a user from team

<p>The <span data-type='inlineCode'>Remove a user from team</span> request allows you to remove an existing user from a particular team.</p><p class="note"><strong>Note</strong>: Only the Owner or the Admin of the organization can remove users from a team.</p>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}/users/{user_uid}`

**Method**: `DELETE`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>
- **user_uid** (required)
  <p>Enter the UID of the user you want to remove from the team. The UID of a user is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-users-of-team" target="_self">Get all users of team</a> request to retrieve the UID of a user.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

