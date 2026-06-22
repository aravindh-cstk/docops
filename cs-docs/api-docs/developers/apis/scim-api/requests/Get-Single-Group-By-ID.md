---
title: "Get Single Group By ID"
description: GET scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: developers/apis/scim-api/requests/get-single-group-by-id
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Get Single Group By ID


**Method:** `GET`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Get Single Group by ID request fetches details of a single group that exists in the IdP client account.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json | The format of the response content. |

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the o |

| group_id | your_group_id | The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID. |

| excludedAttributes | members | It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned.  Currently, we support excludi |

**Response (200):**

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
      "id": "blt**********",
      "meta": {
        "resourceType": "Group",
        "created": "2020-11-24T05:48:14.060Z",
        "location": "http://auth-api.contentstack.com/scim/v2/organizations/blta6********/groups/blt22**********"
      },
      "displayName": "<group_name>",
      "active": true,
      "members": [
        {
          "value": "<user_uid>",
          "display": "User Name"
        }
      ]
    }
  ]
}
```
