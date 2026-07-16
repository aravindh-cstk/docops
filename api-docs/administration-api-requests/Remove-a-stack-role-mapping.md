---
title: "Remove a stack role mapping"
description: DELETE /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}
url: administration-api-requests/mapping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Remove a stack role mapping

**DELETE** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}`

The Remove a stack role mapping request allows you to delete the associations of team users for a specified stack in your organization.

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](../api-detail/content-management-api.md#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`
- **stack_api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

