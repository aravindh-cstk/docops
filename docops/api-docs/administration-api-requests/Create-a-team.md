---
title: "Create a team"
description: /v4/teams
url: /create-a-team
product: Contentstack
doc_type: api-request
created_at: 2026-04-07T12:55:29.389Z
updated_at: 2026-07-15T13:06:18.191Z
---

# Create a team

<p>The <span data-type='inlineCode'>Create a team</span> request creates a team in the specified organization and assigns its initial members and roles in a single call.</p><p>Provide the team <span data-type='inlineCode'>name</span> (required) and, optionally, a <span data-type='inlineCode'>description</span>. Add members through the <span data-type='inlineCode'>users</span> array, where each entry identifies a user by <span data-type='inlineCode'>email</span> or <span data-type='inlineCode'>uid</span>. Grant access by including <span data-type='inlineCode'>organizationRoles</span> (organization-level role UIDs), <span data-type='inlineCode'>stackRoleMapping</span> (per-stack role assignments), and <span data-type='inlineCode'>projectRoles</span> (project-scoped roles; the <span data-type='inlineCode'>am</span> domain is currently supported). The <span data-type='inlineCode'>users</span> and <span data-type='inlineCode'>stackRoleMapping</span> arrays are required, but you can send them empty.</p><p>On success, the request returns a <span data-type='inlineCode'>201</span> response with the created team, including its generated <span data-type='inlineCode'>uid</span>. The <span data-type='inlineCode'>users</span> array in the response contains UID strings; use the Get a single team request with <span data-type='inlineCode'>include_user_details</span> set to “true” to resolve full user objects. Invalid input, such as an unknown role or stack, returns a <span data-type='inlineCode'>400</span> error that identifies the failed field.</p>

**API Endpoint**: `/v4/teams`

**Method**: `POST`

## Query Parameters

- **include_user_details** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
    "name": "Team A",
    "description": "Marketing team",
    "users": [
        {
            "email": "john.doe@contentstack.com"
        }
    ],
    "organizationRoles": [
        "blt**************8d"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
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
    ]
}
```

## Response

```json
{
    "_id": "65b******************11",
    "name": "Team A",
    "description": "Marketing team",
    "createdAt": "2024-02-01T11:01:33.399Z",
    "createdBy": "blt**************f0",
    "createdByUserName": "Jane Doe",
    "updatedAt": "2024-02-01T11:01:33.399Z",
    "updatedBy": "blt**************f0",
    "updatedByUserName": "Jane Doe",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************a0"
    ],
    "organizationRoles": [
        "blt**************8d"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
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
    "uid": "65b******************11"
}
```

