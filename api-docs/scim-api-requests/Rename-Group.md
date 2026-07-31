---
title: "Rename Group"
description: scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: /rename-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.977Z
updated_at: 2023-01-05T14:09:13.977Z
---

# Rename Group

<p>The <span data-type="inlineCode">Rename Group</span> request lets you change the name of a group.</p>
<p>In the "Request Body", you need to pass a new name for the group in the <span data-type="inlineCode">value</span> key.</p>

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
      "path": "displayName",
      "value": "<<new_name>>"
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

