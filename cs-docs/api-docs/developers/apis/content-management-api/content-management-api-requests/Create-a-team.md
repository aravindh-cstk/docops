---
title: "Create a team"
description: POST /organizations/{organization_uid}/teams
url: developers/apis/content-management-api/requests/create-a-team
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Create a team

**POST** `/organizations/{organization_uid}/teams`

The Create a team request creates a team in the specified organization.

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`

## Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`

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

## Sample Response

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

