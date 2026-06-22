---
title: "Remove users from organization"
description: DELETE /organizations/{organization_uid}/share
url: developers/apis/content-management-api/requests/remove-users-from-organization
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Remove users from organization


**Method:** `DELETE`  
**Endpoint:** `/organizations/{organization_uid}/share`

The Remove users from organization request allows you to remove existing users from your organization.

**Note**: Only the owner or the admin of the organization can remove users.

When executing the API request, provide the organization UID. In the “Body” section, you need to enter the email IDs of the users you want to remove from the organization as follows:

```
{
  "emails":[
    "abc@sample.com", "xyz@sample.com"
  ]
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken of the user. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| organization_uid | bltad182661f48a9afe1d00cdc2 | Enter the UID of the organization from which you want to remove users. |

**Request Body:**

```json
{
    "emails":[
        "abc@sample.com", "xyz@sample.com"
    ]
}
```

**Response (200):**

```json
{
    "notice":"The invitation has been deleted successfully.",
    "shares":[
        {
            "uid":"bltdad32690d8ac4698f4afc1",
            "email":"abc@sample.com",
            "user_uid":"blt65a26b0aae48wexft43",
            "org_uid":"bltad661f48a9afe1d00cd2",
            "org_roles":[
                "blt18d4b92df0b3b432975188a7"
            ],
            "invited_by":"bltf922a54cfc0811eb7",
            "invited_at":"2017-09-17T19:46:48.987Z",
            "status":"pending",
            "created_at":"2019-03-12T05:21:40.015Z",
            "updated_at":"2019-03-12T05:21:40.015Z",
            "access_without_sso":true
        },
        {
            "uid":"bltcbc41b34a1c352f8ce",
            "email":"xyz@sample.com",
            "user_uid":"blt65a26b0aae482c7d5c3",
            "message":"Test Message",
            "org_uid":"bltad161f48a9afe1d00cd2",
            "org_roles":[
                "blt3733b2ca83073f4c71a4ca"
            ],
            "invited_by":"blte75599b1e529fa3a",
            "invited_at":"2020-03-06T06:29:13.510Z",
            "status":"pending",
            "created_at":"2020-03-06T06:29:13.510Z",
            "updated_at":"2020-03-06T06:29:13.510Z"
        }
    ]
}
```
