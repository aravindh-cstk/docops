---
title: "Update User By ID (PUT)"
description: PUT scim/v2.0/organizations/{organization_uid}/Users/{user_id}
url: developers/apis/scim-api/requests/update-user-by-id-put
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-20
---

# Update User By ID (PUT)


**Method:** `PUT`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Update User Using PUT request lets you update the details of a specific user by using the PUT request type.

In the “Body” section, you need to provide the updated schema of the user in the JSON format.

**Note**: As no user attributes, like name and email, are liable to change, this endpoint is currently provided for identity provider compatibility. Set the active flag to “False” to deprovision a user.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json | The format of the response content. |

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the o |

| user_id | id_of_user | The ID of the user whose details you want to update. Refer to the [Get All Users](#get-all-users) request to get the user ID. |

**Request Body:**

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "<email_1>",
  "name": {
    "familyName": "<lastName_1>",
    "givenName": "<firstName_1>",
    "active": false
  }
}
```

**Response (200):**

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blt***********",
    "userName": "<email_1>",
    "name": {
        "givenName": "<firstName_1>",
        "familyName": "<lastName_1>"
    },
    "active": false,
    "emails": [
        {
            "value": "<email_1>",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2021-02-08T18:46:03.284Z",
        "lastModified": "2021-02-17T15:22:22.171Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt*************/Users/blt**************"
    }
}
```
