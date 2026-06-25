---
title: "Delete a team"
description: DELETE /organizations/{organization_uid}/teams/{team_uid}
url: developer-apis/content-management-api-requests/delete-a-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Delete a team

**DELETE** `/organizations/{organization_uid}/teams/{team_uid}`

The Delete a team request deletes an existing team along with all its associated users and assigned roles.

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team you want to update. The UID of a team is unique across an organization. Execute the [Get all teams](../api-detail/content-management-api.md#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

