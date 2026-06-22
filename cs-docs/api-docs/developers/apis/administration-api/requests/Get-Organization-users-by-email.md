---
title: "Get Organization users by email"
description: POST /organizations/{organization_uid}/share/search
url: developers/apis/administration-api/requests/get-organization-users-by-email
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-07
---

# Get Organization users by email


**Method:** `POST`  
**Endpoint:** `/organizations/{organization_uid}/share/search`

The Get Organization users by email request retrieves information about users within an organization based on their email addresses.

When executing the API request, you need to provide the organization UID. In the request body, you need to enter the email IDs of the users whose details you want to retrieve from the mentioned organization, like as follows:

```
{
    "emails":["abc@sample.com", "xyz@sample.com", …]
}
```

**Note:** If you do not pass the request body, you will get the details of all the users in the Organization.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| organization_uid | blt3213213213213213 | Enter the UID of the Organization of which you want to retrieve the list of users. |

| include_roles | false | The include_roles parameter, when set to “true,” will display the details of the roles that are assigned to the organization users. |

| include_user_details | false | The include_user_details parameter, when set to “true,” lets you know whether the user has enabled Two-factor Authentication or not. |

| include_count | false | The include_count parameter returns the total number of organization users. Example: If you wish to know the total number of organization invitations, you need  |

| limit | false | The limit parameter will return a specific number of organization users in your output. Example, if you want to retrieve details of 10 users and you wish to fet |

| skip | false | The skip parameter will skip a specific number of organization users in your output. Example, if you want to retrieve details of 10 users and you wish to skip t |

**Request Body:**

```json
{
    "emails":["abc@sample.com"]
}
```

**Response (200):**

```json
{
    "shares": [
        {
            "uid": "blt1231231231231231",
            "email": "abc@sample.com",
            "user_uid": "blteaf2e44ba211bb3f",
            "message": "",
            "org_uid": "blt3213213213213213",
            "org_roles": [
                "blt2132132132132132"
            ],
            "invited_by": "blt1321321321321321",
            "invited_at": "2023-10-13T12:17:02.473Z",
            "status": "accepted",
            "acceptance_token": "blt1112223331231231",
            "created_at": "2023-10-13T12:17:02.468Z",
            "updated_at": "2023-10-13T12:17:25.670Z"
        }
    ]
}
```
