---
title: "Replace Users in Group"
description: PATCH scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: developers/apis/scim-api/requests/replace-users-in-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Replace Users in Group


**Method:** `PATCH`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Replace Users in Group request replaces the existing set of users with a new set of users.

In the "Request Body", pass the user ID in the value key. Refer to the [Get All Users](#get-all-users) request to get the user IDs.

This request removes all the existing users from a group and replaces them with the specified user(s).

This also revokes admin access for users with admin role, unless that user has been assigned an admin role by some other group as well. The same logic applies to stack roles as well.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| Content-Type | application/json | The format of the response content. |

| Authorization | Bearer access_token_from_IdP_client | The access token obtained after authorizing the IdP client. |

| organization_uid | your_organization_uid | The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the o |

| group_id | your_group_id | The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID. |

**Request Body:**

```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ],
  "Operations": [
    {
      "op": "replace",
      "path": "members",
      "value": [
          {
              "value": "<<user1-id>>"
          },
          {
              "value": "<<user2-id>>"
          }
      ]
    }
  ]
}
```

**Response (200):**

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
    ],
    "id": "602d05a041339f00113353b7",
    "displayName": "<<group-name>>",
    "members": [
        {
            "value": "blta*********",
            "display": "Username 1"
        },
        {
            "value": "blta*********",
            "display": "Username 2"
        }
    ],
    "meta": {
        "resourceType": "Group",
        "created": "2021-02-17T12:01:36.423Z",
        "lastModified": "2021-02-18T19:12:59.241Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt56**********/Groups/602**************"
    }
}
```
