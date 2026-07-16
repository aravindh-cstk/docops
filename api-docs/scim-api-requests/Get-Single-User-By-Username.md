---
title: "Get Single User By Username"
description: GET scim/v2.0/organizations/{organization_uid}/Users?filter=userName eq '<<email-address>>'
url: scim-api-requests/username
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get Single User By Username

**GET** `scim/v2.0/organizations/{organization_uid}/Users?filter=userName eq "<<email-address>>"`

The Get Single User by Username request returns comprehensive details of a specific user that exists in the Contentstack organization.

You need to pass the username as a query parameter.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

## Query Parameters

- **filter** (required)
  Specify the type of filter you want to use. In this case, the filter will be “userName eq”
  Default: `userName eq "user.name@contentstack.com"`

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
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 1,
    "startIndex": 1,
    "itemsPerPage": 100,
    "Resources": [
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "id": "bltfa*********",
            "userName": "user.name@contentstack.com",
            "name": {
                "givenName": "User",
                "familyName": "Name"
            },
            "active": true,
            "emails": [
                {
                    "value": "user.name@contentstack.com",
                    "type": "work",
                    "primary": true
                }
            ],
            "meta": {
                "resourceType": "User",
                "created": "2020-09-30T13:34:40.878Z",
                "lastModified": "2021-01-27T09:59:35.782Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt56********/Users/bltfa*********"
            }
        }
    ]
}
```

