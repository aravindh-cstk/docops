---
title: "Add Users to Group"
description: PATCH scim/v2.0/organizations/{organization_uid}/Groups/{group_id}
url: developers/apis/scim-api/requests/add-users-to-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Add Users to Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Add Users to Group request adds the user(s) to a group.

The specified user will then have the permissions (at the stack level and at the organization level) that are specific to that group.

In the "Request Body", you need to pass the ID of the user in the value key.

## URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
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

## Sample Response

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

