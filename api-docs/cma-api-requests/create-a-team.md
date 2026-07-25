---
title: "Create a team"
description: /organizations/{organization_uid}/teams
url: /create-a-team
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T09:59:32.615Z
updated_at: 2024-02-13T11:30:16.227Z
---

# Create a team

<p>The <span data-type='inlineCode'>Create a team</span> request creates a team in the specified organization.</p>

**API Endpoint**: `/organizations/{organization_uid}/teams`

**Method**: `POST`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>

## Query Parameters

- **includeUserDetails** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
    "name": "Team A",
    "users": ["blt**************a0"],
    "stackRoleMapping": [{
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }],
    "organizationRole": "blt**************c5"
}
```

## Response

```json
{
    "_id": "65b*******************11",
    "name": "Team A",
    "createdAt": "2024-02-01T11:01:33.399Z",
    "createdBy": "blt**************f0",
    "updatedAt": "2024-02-01T11:01:33.399Z",
    "updatedBy": "blt**************f0",
    "organizationUid": "blt**************b5",
    "users": [
        "blt**************a0"
    ],
    "stackRoleMapping": [
        {
            "stackApiKey": "blt**************74",
            "roles": [
                "blt**************f6"
            ]
        }
    ],
    "organizationRole": "blt**************c5",
    "__v": 0,
    "uid": "65b*******************11",
    "createdByUserName": "Jane Doe
    "updatedByUserName": "Jane Doe"
}
```

