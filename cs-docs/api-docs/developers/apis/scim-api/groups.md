---
title: "SCIM | Groups"
description: Create, update, fetch, and manage SCIM groups for identity provisioning and user access management.
url: https://www.contentstack.com/docs/developers/apis/scim-api/groups
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# SCIM | Groups

Use the SCIM API requests to create groups, manage users within it, and perform other operations on groups.

## Create Group

### Create Group

**POST** `scim/v2.0/organizations/{organization_uid}/Groups`

The Create Group request lets you create a group in your IdP client and add users to it.

In the "Request Body" section, you need to pass the ID of the user in Contentstack as the value. Refer to the [Get All Users](#get-all-users) request to get the user ID. Also, provide a name to the group in the displayName key.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Request

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "displayName": "<<group_name>>",
  "members": [
    {
      "value": "<<user_uid>>"
    }
  ]
}
```

#### Sample Response

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "id": "blt*********",
  "meta": {
      "resourceType": "Group",
      "created": "2020-11-24T05:48:14.060Z",
      "lastModified": "2011-05-13T04:42:34Z",
      "location": "http://auth-api.contentstack.com/scim/v2/organizations/blt**********/groups/blt**********"
  },
  "displayName": "<group_name>",
  "members": [
    {
      "value": "<user_uid>",
      "display": "User Name"
    }
  ]
}
```




## Get All Groups

### Get All Groups

**GET** `scim/v2.0/organizations/{organization_uid}/Groups`

The Get All Groups request fetches details of all groups that exist in the IdP client account.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

#### Query Parameters

- **count** (optional)
  To fetch a certain number of groups in a single request. For example, if you specify 2, you will receive details of two groups in a single request. You can fetch a maximum of 100 groups at once.
  Default: `2`
- **startIndex** (optional)
  It is the index number from which you want to fetch group details. By default, the value is 1. If you specify 5, you will get details starting from the fifth group.
  Default: `2`
- **excludedAttributes** (optional)
  It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned. Currently, we support excluding only the 'members' attribute.
  Default: `members`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Response

```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:ListResponse"
  ],
  "totalResults": 1,
  "startIndex": 2,
  "itemsPerPage": 100,
  "Resources": [
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "id": "blt2**********",
      "meta": {
        "resourceType": "Group",
        "created": "2020-11-24T05:48:14.060Z",
        "location": "http://localhost:8000/scim/v2/organizations/blta********/groups/blt2********"
      },
      "displayName": "MyGroup",
      "active": true,
      "members": [
        {
          "value": "<user-uid>",
          "display": "User Name"
        }
      ]
    }
  ]
}
```




## Get Single Group By ID

### Get Single Group By ID

**GET** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Get Single Group by ID request fetches details of a single group that exists in the IdP client account.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

#### Query Parameters

- **excludedAttributes** (optional)
  It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned. Currently, we support excluding only the 'members' attribute.
  Default: `members`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Response

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




## Get Single Group By Display Name

### Get Single Group By Display Name

**GET** `scim/v2.0/organizations/{organization_uid}/Groups?filter=displayName Eq "<<group_name>>"`

The Get Single Group By Display Name returns comprehensive details of a specific group that exists in the IdP client account, which is mapped in your Contentstack organization.

You need to pass the displayname as a query parameter.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

#### Query Parameters

- **filter** (required)
  Specify the type of filter you want to use. In this case, the filter will be “displayName Eq”
  Default: `displayName Eq "name_of_group"`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Response

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
            "id": "601**************",
            "displayName": "<<group_name>>",
            "members": [],
            "meta": {
                "resourceType": "Group",
                "created": "2021-02-01T11:25:11.082Z",
                "lastModified": "2021-02-18T11:34:53.619Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt56**********/Groups/601***************"
            }
        }
    ]
}
```




## Add Users to Group

### Add Users to Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Add Users to Group request adds the user(s) to a group.

The specified user will then have the permissions (at the stack level and at the organization level) that are specific to that group.

In the "Request Body", you need to pass the ID of the user in the value key.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Request

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

#### Sample Response

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




## Rename Group

### Rename Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Rename Group request lets you change the name of a group.

In the "Request Body", you need to pass a new name for the group in the value key.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Request

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

#### Sample Response

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




## Remove All Users from Group

### Remove All Users from Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Remove All Users from Group request removes all the existing users from a group.

This also revokes admin access for users with admin roles, unless those users have been assigned the admin role by some other group. The same logic applies to stack roles as well.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Request

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

#### Sample Response

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




## Remove User from Group

### Remove User from Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Remove User from Group request removes a user from a group.

In the "Request Body", you need to pass the ID of the user you want to remove from the group. Refer to the [Get All Users](#get-all-users) request to get the ID.

This also revokes admin access for the user with an admin role, unless that user has been assigned an admin role by some other group as well. The same logic applies to stack roles as well.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Request

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

#### Sample Response

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




## Replace Users in Group

### Replace Users in Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Replace Users in Group request replaces the existing set of users with a new set of users.

In the "Request Body", pass the user ID in the value key. Refer to the [Get All Users](#get-all-users) request to get the user IDs.

This request removes all the existing users from a group and replaces them with the specified user(s).

This also revokes admin access for users with admin role, unless that user has been assigned an admin role by some other group as well. The same logic applies to stack roles as well.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

#### Sample Request

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

#### Sample Response

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




## Delete Group

### Delete Group

**DELETE** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Delete Group request deletes an existing group from the SCIM. This will remove all the users from that group.

**Note**: This API request will not remove users from the organization or from the Contentstack account.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group you want to delete. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

#### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

