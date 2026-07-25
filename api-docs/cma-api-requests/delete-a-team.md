---
title: "Delete a team"
description: /organizations/{organization_uid}/teams/{team_uid}
url: /delete-a-team
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T10:05:54.592Z
updated_at: 2024-02-13T11:32:42.004Z
---

# Delete a team

<p>The <span data-type='inlineCode'>Delete a team</span> request deletes an existing team along with all its associated users and assigned roles.</p>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}`

**Method**: `DELETE`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team you want to update. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

