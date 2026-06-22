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


**Method:** `GET`  
**Endpoint:** `/organizations/{organization_uid}/teams`

The Get all teams request returns comprehensive information of all the teams available in your organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| api_version | 1.1 | Enter the API version. |

| organization_uid | your_organization_uid | Enter the UID of your Organization. |

| includeUserDetails | true | Set this parameter to “true” to include the details of users in the response. |

| asc | created_at | Sort the response in ascending order. |

| desc | created_at | Sort the response in descending order. |

| typeahead | sample | Retrieves responses that match the provided string. |

| limit | 2 | Enter the maximum number of teams to be returned. |

| skip | 2 | Enter the number of teams to be skipped from the response body. |

| user_uid | user_uid_1, user_uid_2 | Enter the user UIDs in string format, separated by commas, for filtering. |

**Response (200):**

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
