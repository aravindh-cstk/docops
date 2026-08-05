---
title: "Get all teams"
description: /organizations/{organization_uid}/teams
url: /get-all-teams
product: Contentstack
doc_type: api-request
created_at: 2024-02-02T16:03:07.569Z
updated_at: 2024-02-13T11:26:28.130Z
---

# Get all teams

<p>The <span data-type='inlineCode'>Get all teams</span> request returns comprehensive information of all the teams available in your organization.</p>

**API Endpoint**: `/organizations/{organization_uid}/teams`

**Method**: `GET`

## URL Parameters

- **organization_uid** (required)
  <p>Enter the UID of your Organization.</p>

## Query Parameters

- **includeUserDetails** (optional)
  <p>Set this parameter to “true” to include the details of users in the response.</p>
- **asc** (optional)
  <p>Sort the response in ascending order.</p>
- **desc** (optional)
  <p>Sort the response in descending order.</p>
- **typeahead** (optional)
  <p>Retrieves responses that match the provided <span data-type='inlineCode'>string</span>.</p>
- **limit** (optional)
  <p>Enter the maximum number of teams to be returned.</p>
- **skip** (optional)
  <p>Enter the number of teams to be skipped from the response body.</p>
- **user_uid** (optional)
  <p>Enter the user UIDs in string format, separated by commas, for filtering.</p>

## Headers

- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **api_version** (required)
  <p>Enter the API version.</p>

## Response

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

