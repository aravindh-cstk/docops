---
title: "Replace Users in Group"
description: scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: /replace-users-in-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.065Z
updated_at: 2023-01-05T14:09:14.065Z
---

# Replace Users in Group

<p>The <span data-type="inlineCode">Replace Users in Group</span> request replaces the existing set of users with a new set of users.</p>
<p> In the "Request Body", pass the user ID in the <span data-type="inlineCode">value</span> key. Refer to the <a href="#get-all-users">Get All Users</a> request to get the user IDs.</p>
<p>This request removes all the existing users from a group and replaces them with the specified user(s).</p>
<p>This also revokes admin access for users with admin role, unless that user has been assigned an admin role by some other group as well. The same logic applies to stack roles as well.</p>

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

## Response

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

