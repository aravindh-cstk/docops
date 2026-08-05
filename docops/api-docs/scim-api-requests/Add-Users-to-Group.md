---
title: "Add Users to Group"
description: scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: /add-users-to-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.093Z
updated_at: 2023-01-05T14:09:13.093Z
---

# Add Users to Group

<p>The <span data-type="inlineCode">Add Users to Group</span> request adds the user(s) to a group.</p>
<p>The specified user will then have the permissions (at the stack level and at the organization level) that are specific to that group.</p>
<p>In the "Request Body", you need to pass the ID of the user in the <span data-type="inlineCode">value</span> key.</p>

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
      "op": "add",
      "path": "members",
      "value": [
        {
          "value": "<user_id>"
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
    "id": "60************",
    "displayName": "mygroup",
    "members": [
        {
            "value": "blt*********",
            "display": "<username>"
        }
    ],
    "meta": {
        "resourceType": "Group",
        "created": "2021-02-16T09:32:54.627Z",
        "lastModified": "2021-02-16T09:49:00.578Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt5******Groups/602b***********"
    }
}
```

