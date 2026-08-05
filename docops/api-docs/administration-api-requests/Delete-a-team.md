---
title: "Delete a team"
description: /v4/teams/{team_uid}
url: /delete-a-team
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:33.714Z
updated_at: 2026-07-15T13:06:43.720Z
---

# Delete a team

<p>The <span data-type='inlineCode'>Delete a team</span> request removes an existing team along with its members and assigned roles.</p><p>Deletion is a soft delete: Contentstack marks the team as deleted and excludes it from subsequent reads instead of removing the record permanently. Deleting a team revokes the access that the team granted through its organization, stack, and project roles, unless a member holds the same access through another team or a direct assignment.</p><p>Pass the team’s UID as <span data-type='inlineCode'>team_uid</span> in the request path and your organization’s UID in the <span data-type='inlineCode'>organization_uid</span> header. A successful request returns a <span data-type='inlineCode'>200</span> response, and deleting a team that does not exist returns a <span data-type='inlineCode'>404</span> error.</p>

**API Endpoint**: `/v4/teams/{team_uid}`

**Method**: `DELETE`

## URL Parameters

- **team_uid** (required)
  <p>Enter the UID of the team you want to delete. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>

