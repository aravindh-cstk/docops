---
title: "SCIM | Users"
description: Provision, update, fetch, and deactivate users with SCIM endpoints for identity management.
url: https://www.contentstack.com/docs/developers/apis/scim-api/users
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# SCIM | Users

Use the SCIM API requests to provision, deprovison, and perform other operations on users.

## Provision Users into Organization

### Provision User into Organization

**POST** `scim/v2.0/organizations/{organization_uid}/Users`

The Provision User into Organization request adds the user to a Contentstack organization.

If the user does not already exist in Contentstack, you can add the new user to the organization by using this request.

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
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "email_of_user",
  "name": {
    "familyName": "last_name",
    "givenName": "first_name"
  }
}
```

#### Sample Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blta********",
    "userName": "username@contentstack.com",
    "name": {
        "givenName": "firstname",
        "familyName": "lastname"
    },
    "active": true,
    "emails": [
        {
            "value": "username@contentstack.com",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2021-02-05T07:44:33.272Z",
        "lastModified": "2021-02-05T07:45:41.301Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt********/Users/blta*******"
    }
}
```




## Get All Users

### Get All Users

**GET** `scim/v2.0/organizations/{organization_uid}/Users`

The Get All Users request fetches the list of all users (along with details such as name, user ID, and email address) of your Contentstack organization.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

#### Query Parameters

- **count** (optional)
  To fetch a certain number of users in a single request. You can fetch a maximum of 100 users at a time.
  Default: `2`
- **startIndex** (optional)
  It is the index number from which you want to fetch user details. By default, the value is 1. Example: If you specify 2, you will get details starting from the second user in the list.
  Default: `2`

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
    "totalResults": 17,
    "startIndex": 2,
    "itemsPerPage": 2,
    "Resources": [
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "id": "bl*********",
            "userName": "user2@contentstack.com",
            "name": {
                "givenName": "firstname",
                "familyName": "lastname"
            },
            "active": true,
            "emails": [
                {
                    "value": "user2@contentstack.com",
                    "type": "work",
                    "primary": true
                }
            ],
            "meta": {
                "resourceType": "User",
                "created": "2018-01-10T09:54:44.800Z",
                "lastModified": "2021-02-08T11:06:02.058Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt*******/Users/blt*******"
            }
        },
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "id": "blta3*********",
            "userName": "user3@contentstack.com",
            "name": {
                "givenName": "firstname3",
                "familyName": "lastname3"
            },
            "active": true,
            "emails": [
                {
                    "value": "user3@contentstack.com",
                    "type": "work",
                    "primary": true
                }
            ],
            "meta": {
                "resourceType": "User",
                "created": "2018-08-14T06:18:34.231Z",
                "lastModified": "2021-01-28T06:10:33.971Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt*********/Users/blta3*********"
            }
        }
    ]
}
```




## Get Single User By ID

### Get Single User By ID

**GET** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Get Single User by ID request returns comprehensive information of a specific user that exists in the organization.

You need to pass the ID of the user as the URL parameter.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user whose details you want to fetch. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

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
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blt**********",
    "userName": "user1@contentstack.com",
    "name": {
        "givenName": "firstname",
        "familyName": "lastname"
    },
    "active": true,
    "emails": [
        {
            "value": "user1@contentstack.com",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2018-01-10T09:54:44.800Z",
        "lastModified": "2021-02-08T11:06:02.058Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt**********/Users/blt**********"
    }
}
```




## Get Single User By Username

### Get Single User By Username

**GET** `scim/v2.0/organizations/{organization_uid}/Users?filter=userName eq "<<email-address>>"`

The Get Single User by Username request returns comprehensive details of a specific user that exists in the Contentstack organization.

You need to pass the username as a query parameter.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

#### Query Parameters

- **filter** (required)
  Specify the type of filter you want to use. In this case, the filter will be “userName eq”
  Default: `userName eq "user.name@contentstack.com"`

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
                "urn:ietf:params:scim:schemas:core:2.0:User"
            ],
            "id": "bltfa*********",
            "userName": "user.name@contentstack.com",
            "name": {
                "givenName": "User",
                "familyName": "Name"
            },
            "active": true,
            "emails": [
                {
                    "value": "user.name@contentstack.com",
                    "type": "work",
                    "primary": true
                }
            ],
            "meta": {
                "resourceType": "User",
                "created": "2020-09-30T13:34:40.878Z",
                "lastModified": "2021-01-27T09:59:35.782Z",
                "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt56********/Users/bltfa*********"
            }
        }
    ]
}
```




## Update User By ID (PUT)

### Update User By ID (PUT)

**PUT** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Update User Using PUT request lets you update the details of a specific user by using the PUT request type.

In the “Body” section, you need to provide the updated schema of the user in the JSON format.

**Note**: As no user attributes, like name and email, are liable to change, this endpoint is currently provided for identity provider compatibility. Set the active flag to “False” to deprovision a user.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user whose details you want to update. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

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
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "<email_1>",
  "name": {
    "familyName": "<lastName_1>",
    "givenName": "<firstName_1>",
    "active": false
  }
}
```

#### Sample Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blt***********",
    "userName": "<email_1>",
    "name": {
        "givenName": "<firstName_1>",
        "familyName": "<lastName_1>"
    },
    "active": false,
    "emails": [
        {
            "value": "<email_1>",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2021-02-08T18:46:03.284Z",
        "lastModified": "2021-02-17T15:22:22.171Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt*************/Users/blt**************"
    }
}
```




## Update User By ID (PATCH)

### Update User By ID (PATCH)

**PATCH** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Update User Using PATCH request lets you update the details of a specific user by using the PATCH request type.

In the “Body” section, you need to provide the updated schema of the user in JSON format.

**Note**: As no user attributes, like name and email, are liable to change, this endpoint is currently provided for identity provider compatibility. You can deprovision a user by sending the 'Replace' operation to the path 'active' with the value 'false'.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user whose details you want to update. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

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
	"Operations": [{
		"op": "Replace",
		"path": "active",
		"value": false
	}]

}
```

#### Sample Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "id": "blt6b9c8c1164bf8e6c",
    "userName": "<userName_1>",
    "name": {
        "givenName": "<firstName_1>",
        "familyName": "<lastName_1>"
    },
    "active": false,
    "emails": [
        {
            "value": "<userName_1>",
            "type": "work",
            "primary": true
        }
    ],
    "meta": {
        "resourceType": "User",
        "created": "2021-02-08T18:46:03.284Z",
        "lastModified": "2021-02-17T15:22:22.171Z",
        "location": "https://auth-api.contentstack.com/scim/v2.0/organizations/blt*************/Users/blt****************"
    }
}
```




## Deprovision User

### Deprovision User

**DELETE** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Deprovision User request lets you remove a user from a Contentstack organization.

This will remove the user from all the assigned stacks, but the user will continue to have a Contentstack account.

#### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user you want to remove. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

#### Headers

- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

