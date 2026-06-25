---
title: "Remove User from Group"
description: PATCH scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: scim-api-requests/group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Remove User from Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Remove User from Group request removes a user from a group.

In the "Request Body", you need to pass the ID of the user you want to remove from the group. Refer to the [Get All Users](#get-all-users) request to get the ID.

This also revokes admin access for the user with an admin role, unless that user has been assigned an admin role by some other group as well. The same logic applies to stack roles as well.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

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
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ],
  "Operations": [
    {
      "op": "remove",
      "path": "members[value eq \"<<user-id>>\"]"
    }
  ]
}
```

## Sample Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
    ],
    "id": "602**************",
    "displayName": "<<group-name>>",
    "members": [],
    "meta": {
        "resourceType": "Group",
        "created": "2021-02-17T15:30:42.166Z",
        "lastModified": "2021-02-18T16:42:20.567Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt5**********/Groups/602*************"
    }
}
```

