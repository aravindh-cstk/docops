---
title: "Provision User into Organization"
description: POST scim/v2.0/organizations/{organization_uid}/Users
url: developers/apis/scim-api/requests/provision-user-into-organization
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Provision User into Organization


**Method:** `POST`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Users`

The Provision User into Organization request adds the user to a Contentstack organization.

If the user does not already exist in Contentstack, you can add the new user to the organization by using this request.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json | The format of the response content. |

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the o |

**Request Body:**

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "email_of_user",
  "name": {
    "familyName": "last_name",
    "givenName": "first_name"
  }
}
```

**Response (200):**

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blta********",
    "userName": "username@contentstack.com",
    "name": {
        "givenName": "firstname",
        "familyName": "lastname"
    },
    "active": true,
    "emails": [
        {
            "value": "username@contentstack.com",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2021-02-05T07:44:33.272Z",
        "lastModified": "2021-02-05T07:45:41.301Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt********/Users/blta*******"
    }
}
```
