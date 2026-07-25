---
title: "Update a stack role mapping"
description: /organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}
url: /update-a-stack-role-mapping
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T11:09:24.033Z
updated_at: 2024-02-13T11:40:00.080Z
---

# Update a stack role mapping

<p>The <span data-type='inlineCode'>Update a stack role mapping</span> request allows you to update the stack roles for a specific stack in your organization. You need to pass the role UIDs in the request body as follows:</p><pre>{<br />    "roles": [<br />        "role_uid"<br />    ]<br />}</pre><h5>Remove a stack role mapping</h5>

**API Endpoint**: `/organizations/{organization_uid}/teams/{team_uid}/stack_role_mappings/{stack_api_key}`

**Method**: `POST`

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
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
    "roles": [
        "blt**************48",
        "blt**************f4"
    ]
}
```

## Response

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

