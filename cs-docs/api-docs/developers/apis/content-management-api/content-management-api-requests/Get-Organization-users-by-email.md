---
title: "Get Organization users by email"
description: POST /organizations/{organization_uid}/share/search
url: developers/apis/content-management-api/requests/get-organization-users-by-email
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-01-05
---

# Get Organization users by email

**POST** `/organizations/{organization_uid}/share/search`

The Get Organization users by email request retrieves information about users within an organization based on their email addresses.

When executing the API request, you need to provide the organization UID. In the request body, you need to enter the email IDs of the users whose details you want to retrieve from the mentioned organization, like as follows:

```
{
    "emails":["abc@sample.com", "xyz@sample.com", …]
}
```

**Note:** If you do not pass the request body, you will get the details of all the users in the Organization.

## URL Parameters

- **organization_uid** (required)
  Enter the UID of the Organization of which you want to retrieve the list of users.
  Default: `blt3213213213213213`

## Query Parameters

- **include_roles** (optional)
  The include_roles parameter, when set to “true,” will display the details of the roles that are assigned to the organization users.
  Default: `false`
- **include_user_details** (optional)
  The include_user_details parameter, when set to “true,” lets you know whether the user has enabled Two-factor Authentication or not.
  Default: `false`
- **include_count** (optional)
  The include_count parameter returns the total number of organization users. Example: If you wish to know the total number of organization invitations, you need to mention “true.”
  Default: `false`
- **limit** (optional)
  The limit parameter will return a specific number of organization users in your output. Example, if you want to retrieve details of 10 users and you wish to fetch only the first 5, you need to specify “5” as the value in this parameter.
  Default: `false`
- **skip** (optional)
  The skip parameter will skip a specific number of organization users in your output. Example, if you want to retrieve details of 10 users and you wish to skip the latest 5, you need to specify “5” as the value in this parameter.
  Default: `false`

## Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

## Sample Request

```json
{
    "emails":["abc@sample.com"]
}
```

## Sample Response

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

