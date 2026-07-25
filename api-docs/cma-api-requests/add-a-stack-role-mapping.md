---
title: "Add a stack role mapping"
description: /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings
url: /add-a-stack-role-mapping
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T11:06:51.350Z
updated_at: 2024-02-13T11:39:21.172Z
---

# Add a stack role mapping

<p>The <span data-type='inlineCode'>Add a stack role mapping</span> request allows you to associate users from a specified team with the available stacks in your organization.</p><p>You need to pass the API key of the stack and the role UIDs in the request body as follows:</p><pre>{<br />    "stackApiKey": "stack_api_key",<br />    "roles": [<br />        "role_one_uid",<br />        "role_two_uid"<br />    ]<br />}<br /></pre><h5>Update a stack role mapping</h5>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings`

**Method**: `POST`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **team_uid** (required)
  <p>Enter the UID of the team of which you want to retrieve the user details. The UID of a team is unique across an organization. Execute the <a href="/docs/developers/apis/content-management-api#get-all-teams" target="_self">Get all teams</a> request to retrieve the UID of a team.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
    "stackApiKey": "blt**************74",
    "roles": [
        "blt**************f6",
        "blt**************37"
    ]
}
```

## Response

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

