---
title: "Get All Groups"
description: GET scim/v2.0/organizations/{organization_uid}/Groups
url: developers/apis/scim-api/requests/get-all-groups
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get All Groups


**Method:** `GET`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Groups`

The Get All Groups request fetches details of all groups that exist in the IdP client account.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json | The format of the response content. |

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the o |

| count | 2 | To fetch a certain number of groups in a single request.  For example, if you specify 2, you will receive details of two groups in a single request.  You can fe |

| startIndex | 2 | It is the index number from which you want to fetch group details.  By default, the value is 1. If you specify 5, you will get details starting from the fifth g |

| excludedAttributes | members | It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned.  Currently, we support excludi |

**Response (200):**

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
