---
title: "Remove All Users from Group"
description: scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: /remove-all-users-from-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.122Z
updated_at: 2023-01-05T14:09:13.122Z
---

# Remove All Users from Group

<p>The <span data-type="inlineCode">Remove All Users from Group</span> request removes all the existing users from a group.</p>
<p>This also revokes admin access for users with admin roles, unless those users have been assigned the admin role by some other group. The same logic applies to stack roles as well.</p>

**API Endpoint**: `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

**Method**: `PATCH`

## URL Parameters

- **organization_uid** (required)
  <p>The UID of the organization. Use the <a href="/docs/developers/apis/content-management-api#get-all-organizations">Get All Organizations</a> request to get the UID of the organization.</p>
- **group_id** (required)
  <p>The ID of the group. Refer to the <a href="#get-all-groups">Get All Groups</a> request to fetch group ID.</p>

## Headers

- **Content-Type** (required)
  <p>The format of the response content.</p>
- **Authorization** (required)
  <p>The access token obtained after authorizing the IdP client.</p>

## Request Body

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

## Response

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

