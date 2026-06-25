---
title: "Get All Groups"
description: GET scim/v2.0/organizations/{organization_uid}/Groups
url: developer-apis/scim-api/requests/get-all-groups
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get All Groups

**GET** `scim/v2.0/organizations/{organization_uid}/Groups`

The Get All Groups request fetches details of all groups that exist in the IdP client account.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../../../../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

## Query Parameters

- **count** (optional)
  To fetch a certain number of groups in a single request. For example, if you specify 2, you will receive details of two groups in a single request. You can fetch a maximum of 100 groups at once.
  Default: `2`
- **startIndex** (optional)
  It is the index number from which you want to fetch group details. By default, the value is 1. If you specify 5, you will get details starting from the fifth group.
  Default: `2`
- **excludedAttributes** (optional)
  It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned. Currently, we support excluding only the 'members' attribute.
  Default: `members`

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
  "startIndex": 2,
  "itemsPerPage": 100,
  "Resources": [
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "id": "blt2**********",
      "meta": {
        "resourceType": "Group",
        "created": "2020-11-24T05:48:14.060Z",
        "location": "http://localhost:8000/scim/v2/organizations/blta********/groups/blt2********"
      },
      "displayName": "MyGroup",
      "active": true,
      "members": [
        {
          "value": "<user-uid>",
          "display": "User Name"
        }
      ]
    }
  ]
}
```

