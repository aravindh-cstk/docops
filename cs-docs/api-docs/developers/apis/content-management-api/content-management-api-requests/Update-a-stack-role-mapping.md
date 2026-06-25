---
title: "Update a stack role mapping"
description: POST /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}
url: developers/apis/content-management-api/requests/update-a-stack-role-mapping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Update a stack role mapping

**POST** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}`

The Update a stack role mapping request allows you to update the stack roles for a specific stack in your organization. You need to pass the role UIDs in the request body as follows:

```
{
    "roles": [
        "role_uid"
    ]
}
```

##### Remove a stack role mapping

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](../../../../api-detail/content-management-api.md#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`
- **stack_api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
    "roles": [
        "blt**************48",
        "blt**************f4"
    ]
}
```

## Sample Response

```json
{
    "stackRoleMapping": {
        "stackApiKey": "blt**************74",
        "roles": [
            "blt**************48",
            "blt**************f4"
        ]
    }
}
```

