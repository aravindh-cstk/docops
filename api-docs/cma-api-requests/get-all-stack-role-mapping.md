---
title: "Get all stack role mapping"
description: /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings
url: /get-all-stack-role-mapping
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T11:02:33.181Z
updated_at: 2024-02-13T11:38:53.782Z
---

# Get all stack role mapping

<p>The <span data-type='inlineCode'>Get all stack role mapping</span> request allows you to retrieve details of all associated stacks for a specified team in your organization.</p>
<h5>Add a stack role mapping</h5>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

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

