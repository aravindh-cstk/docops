---
title: "Remove All Users from Group"
description: PATCH scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: developer-apis/scim-api/requests/remove-all-users-from-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Remove All Users from Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Remove All Users from Group request removes all the existing users from a group.

This also revokes admin access for users with admin roles, unless those users have been assigned the admin role by some other group. The same logic applies to stack roles as well.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](../../../../api-detail/content-management-api.md#get-all-organizations) request to get the UID of the organization.
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
      "path": "members"
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
    "id": "602***************",
    "displayName": "<<group_name>>",
    "members": [],
    "meta": {
        "resourceType": "Group",
        "created": "2021-02-17T15:30:42.166Z",
        "lastModified": "2021-02-18T16:42:20.567Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt5***********/Groups/602*************"
    } }
```

