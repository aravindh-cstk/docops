---
title: "Get Single Group By Display Name"
description: GET scim/v2.0/organizations/{organization_uid}/Groups?filter=displayName Eq '<<group_name>>'
url: scim-api-requests/name
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get Single Group By Display Name

**GET** `scim/v2.0/organizations/{organization_uid}/Groups?filter=displayName Eq "<<group_name>>"`

The Get Single Group By Display Name returns comprehensive details of a specific group that exists in the IdP client account, which is mapped in your Contentstack organization.

You need to pass the displayname as a query parameter.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

## Query Parameters

- **filter** (required)
  Specify the type of filter you want to use. In this case, the filter will be “displayName Eq”
  Default: `displayName Eq "name_of_group"`

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
                "urn:ietf:params:scim:schemas:core:2.0:Group"
            ],
            "id": "601**************",
            "displayName": "<<group_name>>",
            "members": [],
            "meta": {
                "resourceType": "Group",
                "created": "2021-02-01T11:25:11.082Z",
                "lastModified": "2021-02-18T11:34:53.619Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt56**********/Groups/601***************"
            }
        }
    ]
}
```

