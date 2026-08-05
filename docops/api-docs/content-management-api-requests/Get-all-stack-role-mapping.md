---
title: "Get all stack role mapping"
description: GET /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings
url: developer-apis/content-management-api-requests/get-all-stack-role-mapping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Get all stack role mapping

**GET** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings`

The Get all stack role mapping request allows you to retrieve details of all associated stacks for a specified team in your organization.

##### Add a stack role mapping

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

## Sample Response

```json
{
    "stackRoleMappings": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        },
        {
            "stackApiKey": "blt**************fe",
            "roles": [
                "blt**************3a"
            ]
        }
    ]
}
```

