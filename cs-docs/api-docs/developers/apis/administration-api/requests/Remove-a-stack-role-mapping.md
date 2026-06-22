---
title: "Remove a stack role mapping"
description: DELETE /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}
url: developers/apis/administration-api/requests/remove-a-stack-role-mapping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Remove a stack role mapping


**Method:** `DELETE`  
**Endpoint:** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}`

The Remove a stack role mapping request allows you to delete the associations of team users for a specified stack in your organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| team_uid | team_uid | Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](/docs/ |

| stack_api_key | your_stack_api_key | Enter the API key of the stack. |
