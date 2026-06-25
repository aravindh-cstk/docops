---
title: "Add a stack role mapping"
description: POST /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings
url: developer-apis/content-management-api-requests/add-a-stack-role-mapping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Add a stack role mapping

**POST** `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings`

The Add a stack role mapping request allows you to associate users from a specified team with the available stacks in your organization.

You need to pass the API key of the stack and the role UIDs in the request body as follows:

```
{
    "stackApiKey": "stack_api_key",
    "roles": [
        "role_one_uid",
        "role_two_uid"
    ]
}
```

##### Update a stack role mapping

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`
- **team_uid** (required)
  Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the [Get all teams](../../../../api-detail/content-management-api.md#get-all-teams) request to retrieve the UID of a team.
  Default: `team_uid`

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
    "stackApiKey": "blt**************74",
    "roles": [
        "blt**************f6",
        "blt**************37"
    ]
}
```

## Sample Response

```json
{
    "stackRoleMapping": {
        "stackApiKey": "blt**************74",
        "roles": [
            "blt**************f6",
            "blt**************37"
        ]
    }
}
```

