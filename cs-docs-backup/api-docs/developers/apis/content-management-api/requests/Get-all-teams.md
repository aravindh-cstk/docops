---
title: "Get all teams"
description: GET /organizations/{organization_uid}/teams
url: developers/apis/content-management-api/requests/get-all-teams
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-13
---

# Get all teams

**GET** `/organizations/{organization_uid}/teams`

The Get all teams request returns comprehensive information of all the teams available in your organization.

## URL Parameters

- **organization_uid** (required)
  Enter the UID of your Organization.
  Default: `your_organization_uid`

## Query Parameters

- **includeUserDetails** (optional)
  Set this parameter to “true” to include the details of users in the response.
  Default: `true`
- **asc** (optional)
  Sort the response in ascending order.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order.
  Default: `created_at`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **limit** (optional)
  Enter the maximum number of teams to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of teams to be skipped from the response body.
  Default: `2`
- **user_uid** (optional)
  Enter the user UIDs in string format, separated by commas, for filtering.
  Default: `user_uid_1, user_uid_2`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **api_version** (required)
  Enter the API version.
  Default: `1.1`

## Sample Response

```json
{
    "count": 2,
    "teams": [
        {
            "_id": "65b*****************e9a",
            "name": "Team A",
            "createdAt": "2024-02-01T09:55:46.703Z",
            "createdBy": "blt**************f0",
            "updatedAt": "2024-02-01T09:56:36.724Z",
            "updatedBy": "blt**************f0",
            "organizationUid": "blt**************b5",
            "users": [
                "blt**************a0",
                "blt**************8d",
                "blt**************21"
            ],
            "stackRoleMapping": [
                {
                    "stackApiKey": "blt**************74",
                    "roles": [
                        "blt**************37"
                    ]
                },
                {
                    "stackApiKey": "blt**************fe",
                    "roles": [
                        "blt**************32"
                    ]
                }
            ],
            "organizationRole": "blt**************8d",
            "__v": 0,
            "uid": "65b*****************e9a",
            "createdByUserName": "Jane Doe",
            "updatedByUserName": "Jane Doe"
        },
        {
            "_id": "65b*****************892",
            "name": "Sample Team",
            "createdAt": "2024-01-31T11:52:27.049Z",
            "createdBy": "blt**************f0",
            "updatedAt": "2024-01-31T11:52:27.049Z",
            "updatedBy": "blt**************f0",
            "organizationUid": "blt**************b5",
            "users": [],
            "stackRoleMapping": [],
            "organizationRole": "blt**************8d",
            "__v": 0,
            "uid": "65b*****************892",
            "createdByUserName": "Jane Doe",
            "updatedByUserName": "Jane Doe"
        }
    ]
}
```

