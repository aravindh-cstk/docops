---
title: "Remove a stack role mapping"
description: /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}
url: /remove-a-stack-role-mapping
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:48.816Z
updated_at: 2026-04-07T12:55:48.816Z
---

# Remove a stack role mapping

<p>The <span data-type='inlineCode'>Remove a stack role mapping</span> request allows you to delete the associations of team users for a specified stack in your organization.</p>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}`

**Method**: `DELETE`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>
- **stack_api_key** (required)
  <p>Enter the API key of the stack.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

