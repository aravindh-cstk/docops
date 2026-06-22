---
title: "Rename Group"
description: PATCH scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: developers/apis/scim-api/requests/rename-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Rename Group


**Method:** `PATCH`  
**Endpoint:** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Rename Group request lets you change the name of a group.

In the "Request Body", you need to pass a new name for the group in the value key.

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
      "path": "displayName",
      "value": "<<new_name>>"
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
    "id": "602***************",
    "displayName": "<<new_name>>",
    "members": [],
    "meta": {
        "resourceType": "Group",
        "created": "2021-02-17T15:30:42.166Z",
        "lastModified": "2021-02-18T15:38:42.690Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt56**********/Groups/60*************"
    }
}
```
