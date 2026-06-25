---
title: "Get Single User By ID"
description: GET scim/v2.0/organizations/{organization_uid}/Users/{user_id}
url: developers/apis/scim-api/requests/get-single-user-by-id
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get Single User By ID

**GET** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Get Single User by ID request returns comprehensive information of a specific user that exists in the organization.

You need to pass the ID of the user as the URL parameter.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../../../../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user whose details you want to fetch. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

## Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

## Sample Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blt**********",
    "userName": "user1@contentstack.com",
    "name": {
        "givenName": "firstname",
        "familyName": "lastname"
    },
    "active": true,
    "emails": [
        {
            "value": "user1@contentstack.com",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2018-01-10T09:54:44.800Z",
        "lastModified": "2021-02-08T11:06:02.058Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt**********/Users/blt**********"
    }
}
```

