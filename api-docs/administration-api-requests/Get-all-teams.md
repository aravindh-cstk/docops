---
title: "Get all teams"
description: /v4/teams
url: /get-all-teams
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:24.912Z
updated_at: 2026-07-15T13:05:47.524Z
---

# Get all teams

<p>The <span data-type='inlineCode'>Get all teams</span> request returns comprehensive information about all the teams in your organization, so you can review how users are grouped and which organization roles, stack roles, and project roles each team carries.</p><p>Contentstack identifies the organization from the <span data-type='inlineCode'>organization_uid</span> request header and returns the teams that the requesting user can access. By default, the response is wrapped in a <span data-type='inlineCode'>{ count, teams }</span> object and paginated, with <span data-type='inlineCode'>x-total-results</span>, <span data-type='inlineCode'>x-skip</span>, and <span data-type='inlineCode'>x-limit</span> returned as response headers. Use <span data-type='inlineCode'>skip</span> and <span data-type='inlineCode'>limit</span> to page through the results (default <span data-type='inlineCode'>limit</span> is 500), or set <span data-type='inlineCode'>skip_pagination</span> to “true” to receive every team as a plain array without the wrapper.</p><p>Refine the results with <span data-type='inlineCode'>typeahead</span> to match team names, <span data-type='inlineCode'>user_uid</span> or <span data-type='inlineCode'>stack_api_key</span> to filter by membership or stack mapping, and <span data-type='inlineCode'>asc</span> or <span data-type='inlineCode'>desc</span> to sort. Set <span data-type='inlineCode'>include_user_details</span> to “true” to expand each team’s <span data-type='inlineCode'>users</span> array from UID strings into full user objects, and <span data-type='inlineCode'>group_roles_by_domain</span> to “true” to add a <span data-type='inlineCode'>rolesByDomain</span> object that groups each team’s roles by domain. When the organization has no teams, the request returns a <span data-type='inlineCode'>204</span> response with no body.</p>

**API Endpoint**: `/v4/teams`

**Method**: `GET`

## Query Parameters

- **include_user_details** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>
- **skip_pagination** (optional)
  <p>Set this parameter to “true” to return all teams as a plain array, without the <span data-type='inlineCode'>count</span> and <span data-type='inlineCode'>teams</span> wrapper.</p>
- **typeahead** (optional)
  <p>Retrieves responses that match the provided <span data-type='inlineCode'>string</span>.</p>
- **asc** (optional)
  <p>Sort the response in ascending order.</p>
- **desc** (optional)
  <p>Sort the response in descending order.</p>
- **limit** (optional)
  <p>Enter the maximum number of teams to be returned.</p>
- **skip** (optional)
  <p>Enter the number of teams to be skipped from the response body.</p>
- **user_uid** (optional)
  <p>Enter the user UIDs in string format, separated by commas, for filtering.</p>
- **stack_api_key** (optional)
  <p>Enter stack API keys in string format, separated by commas, to filter teams that have a role mapping for those stacks.</p>
- **group_roles_by_domain** (optional)
  <p>Set this parameter to “true” to group each team's roles by domain in a <span data-type='inlineCode'>rolesByDomain</span> object.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>

## Response

```json
{
    "count": 2,
    "teams": [
        {
            "_id": "65b*****************e9a",
            "name": "Team A",
            "description": "Marketing team",
            "createdAt": "2024-02-01T09:55:46.703Z",
            "createdBy": "blt**************f0",
            "createdByUserName": "Jane Doe",
            "updatedAt": "2024-02-01T09:56:36.724Z",
            "updatedBy": "blt**************f0",
            "updatedByUserName": "Jane Doe",
            "organizationUid": "blt**************b5",
            "users": [
                "blt**************a0",
                "blt**************8d"
            ],
            "organizationRoles": [
                "blt**************8d"
            ],
            "stackRoleMapping": [
                {
                    "stackApiKey": "blt**************74",
                    "roles": [
                        "blt**************37"
                    ]
                }
            ],
            "projectRoles": [
                {
                    "projectUid": "blt**************p1",
                    "domain": "am",
                    "roles": [
                        "blt**************r1"
                    ]
                }
            ],
            "__v": 0,
            "uid": "65b*****************e9a"
        },
        {
            "_id": "65b*****************892",
            "name": "Sample Team",
            "createdAt": "2024-01-31T11:52:27.049Z",
            "createdBy": "blt**************f0",
            "createdByUserName": "Jane Doe",
            "updatedAt": "2024-01-31T11:52:27.049Z",
            "updatedBy": "blt**************f0",
            "updatedByUserName": "Jane Doe",
            "organizationUid": "blt**************b5",
            "users": [],
            "organizationRoles": [],
            "stackRoleMapping": [],
            "projectRoles": [],
            "__v": 0,
            "uid": "65b*****************892"
        }
    ]
}
```

