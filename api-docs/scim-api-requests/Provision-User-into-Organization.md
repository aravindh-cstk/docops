---
title: "Provision User into Organization"
description: POST scim/v2.0/organizations/{organization_uid}/Users
url: scim-api-requests/organization
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Provision User into Organization

**POST** `scim/v2.0/organizations/{organization_uid}/Users`

The Provision User into Organization request adds the user to a Contentstack organization.

If the user does not already exist in Contentstack, you can add the new user to the organization by using this request.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

## Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

## Sample Request

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

## Sample Response

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

