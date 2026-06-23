---
title: "System for Cross-domain Identity Management (SCIM)"
description: Contentstack's SCIM API helps you provision and deprovision users from the Contentstack organization via IdP client. To learn more about SCIM API operations, read our reference doc!
url: scim-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: [API version: 2.0]
last_updated: 2025-08-04
---

# System for Cross-domain Identity Management (SCIM)


## Introduction

### Base URL

- AWS North America (AWS NA): https://auth-api.contentstack.com
- AWS Europe (AWS EU): https://eu-auth-api.contentstack.com
- AWS Australia (AWS AU): https://au-auth-api.contentstack.com
- Azure North America (Azure NA): https://azure-na-auth-api.contentstack.com
- Azure Europe (Azure EU): https://azure-eu-auth-api.contentstack.com
- GCP North America (GCP NA): https://gcp-na-auth-api.contentstack.com
- GCP Europe (GCP EU): https://gcp-eu-auth-api.contentstack.com

### Overview

Contentstack is a headless, API-first content management system (CMS) that provides everything you need to power your web or mobile properties. To learn more about Contentstack, visit our [website](https://www.contentstack.com) or refer to our [documentation site](/docs) to understand what we do.

This document is a detailed reference to the beta version of Contentstack’s SCIM API.

The SCIM API helps businesses to manage their users in their Contentstack [organization](/docs/owners-and-admins/about-organizations)via an IdP client. This includes provisioning (adding) and deprovisioning (removing) users in a Contentstack Organization via IdP client, and assigning permissions to these users via group mapping in Contentstack.

Contentstack SCIM API is built using SCIM 2.0 protocol. Currently, we extend our SCIM’s support to OneLogin, but you can write your custom tools that can use Contentstack’s SCIM API.

**Note**: Before using the SCIM API requests, make sure you have enabled SCIM in the SCIM 2.0 section of your [Organization Settings](/docs/owners-and-admins/organization-settings-overview) page.

### Authentication

To use the SCIM API, you need to first authenticate yourself with your IdP client and generate its access token.

### API conventions

- The base URL for Content Management API is auth-api.contentstack.com and for the European region, the base URL is eu-auth-api.contentstack.com.
- The SCIM API version (in our case, 'v2.0') can be found in the URL, e.g. auth-api.contentstack.com/scim/v2.0/endpoint.
- SCIM API supports GET/POST/PUT/DELETE/PATCH verbs or methods.
- URL paths are written in lower case.
- Query parameters use the Camel case style.
- The success/failure status of an operation is determined by the HTTP status it returns. Additional information is included in the HTTP response body.
- The JSON number type is bound to a signed 32-bit integer.

### Rate limiting

Rate limit is the maximum number of requests you can make using Contentstack’s API in a given time period.

By default, the Contentstack SCIM API enforces the following rate limits:

- Read (GET) requests: 10 requests per second per organization
- Write (POST/PUT/DELETE) requests: 10 requests per second per organization

Your application will receive the HTTP 429 response code if the requests for a given time period exceed the defined rate limits.

We also have set a limit on stack creation. Organizations can create only one stack per minute.

The aforementioned limits are configurable depending on your plan. For more information, contact our [Support](mailto:support@contentstack.com) team.

To get the current rate limit status, you can check the returned HTTP headers of any API request. These rate limits are reset at the start of each time period.

| Headers | Description |
| --- | --- |
| X-RateLimit-Limit | The maximum number of request a client is allowed to make per second per organization. |
| X-RateLimit-Remaining | The number of requests remaining in the current time period. |

### Errors

If there is something wrong with the API request, Contentstack returns an error.

Contentstack supports SCIM implementation that uses conventional, standard HTTP status codes for errors, and returns a JSON body containing details about the error.

Let’s look at the error code and their meanings.

    

| HTTP status code | Description |
| --- | --- |
| 400 Bad Request | The request is unparsable, syntactically incorrect, or violates schema. |
| 401 Unauthorized | The authorization header is invalid or missing. |
| 403 Forbidden | Operation is not permitted based on the provided authorization. |
| 404 Not Found | The requested resource (for example, User) or endpoint does not exist. |
| 409 (Conflict) | The service provider refused to create a new or duplicate resource. |
| 412 Pre Condition Failed | Failed to update. |
| 429 Rate Limit Exceeded | The number of requests exceeds the allowed limit for the given time period. |
| 500 Internal Server Error | The server is malfunctioning and is not specific on what the problem is. |
| 501 Not Implemented | The requested operation is not supported |

## API Reference

### Users

Use the SCIM API requests to provision, deprovison, and perform other operations on users.


#### Provision Users into Organization

#### Provision User into Organization

**POST** `scim/v2.0/organizations/{organization_uid}/Users`

The Provision User into Organization request adds the user to a Contentstack organization.

If the user does not already exist in Contentstack, you can add the new user to the organization by using this request.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Get All Users

#### Get All Users

**GET** `scim/v2.0/organizations/{organization_uid}/Users`

The Get All Users request fetches the list of all users (along with details such as name, user ID, and email address) of your Contentstack organization.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

##### Query Parameters

- **count** (optional)
  To fetch a certain number of users in a single request. You can fetch a maximum of 100 users at a time.
  Default: `2`
- **startIndex** (optional)
  It is the index number from which you want to fetch user details. By default, the value is 1. Example: If you specify 2, you will get details starting from the second user in the list.
  Default: `2`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Response

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



#### Get Single User By ID

#### Get Single User By ID

**GET** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Get Single User by ID request returns comprehensive information of a specific user that exists in the organization.

You need to pass the ID of the user as the URL parameter.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user whose details you want to fetch. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Response

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



#### Get Single User By Username

#### Get Single User By Username

**GET** `scim/v2.0/organizations/{organization_uid}/Users?filter=userName eq "<<email-address>>"`

The Get Single User by Username request returns comprehensive details of a specific user that exists in the Contentstack organization.

You need to pass the username as a query parameter.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

##### Query Parameters

- **filter** (required)
  Specify the type of filter you want to use. In this case, the filter will be “userName eq”
  Default: `userName eq "user.name@contentstack.com"`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Response

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



#### Update User By ID (PUT)

#### Update User By ID (PUT)

**PUT** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Update User Using PUT request lets you update the details of a specific user by using the PUT request type.

In the “Body” section, you need to provide the updated schema of the user in the JSON format.

**Note**: As no user attributes, like name and email, are liable to change, this endpoint is currently provided for identity provider compatibility. Set the active flag to “False” to deprovision a user.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user whose details you want to update. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Update User By ID (PATCH)

#### Update User By ID (PATCH)

**PATCH** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Update User Using PATCH request lets you update the details of a specific user by using the PATCH request type.

In the “Body” section, you need to provide the updated schema of the user in JSON format.

**Note**: As no user attributes, like name and email, are liable to change, this endpoint is currently provided for identity provider compatibility. You can deprovision a user by sending the 'Replace' operation to the path 'active' with the value 'false'.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user whose details you want to update. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Deprovision User

#### Deprovision User

**DELETE** `scim/v2.0/organizations/{organization_uid}/Users/{user_id}`

The Deprovision User request lets you remove a user from a Contentstack organization.

This will remove the user from all the assigned stacks, but the user will continue to have a Contentstack account.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **user_id** (required)
  The ID of the user you want to remove. Refer to the [Get All Users](#get-all-users) request to get the user ID.
  Default: `id_of_user`

##### Headers

- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`


### Groups

Use the SCIM API requests to create groups, manage users within it, and perform other operations on groups.


#### Create Group

#### Create Group

**POST** `scim/v2.0/organizations/{organization_uid}/Groups`

The Create Group request lets you create a group in your IdP client and add users to it.

In the "Request Body" section, you need to pass the ID of the user in Contentstack as the value. Refer to the [Get All Users](#get-all-users) request to get the user ID. Also, provide a name to the group in the displayName key.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Get All Groups

#### Get All Groups

**GET** `scim/v2.0/organizations/{organization_uid}/Groups`

The Get All Groups request fetches details of all groups that exist in the IdP client account.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

##### Query Parameters

- **count** (optional)
  To fetch a certain number of groups in a single request. For example, if you specify 2, you will receive details of two groups in a single request. You can fetch a maximum of 100 groups at once.
  Default: `2`
- **startIndex** (optional)
  It is the index number from which you want to fetch group details. By default, the value is 1. If you specify 5, you will get details starting from the fifth group.
  Default: `2`
- **excludedAttributes** (optional)
  It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned. Currently, we support excluding only the 'members' attribute.
  Default: `members`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Response

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



#### Get Single Group By ID

#### Get Single Group By ID

**GET** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Get Single Group by ID request fetches details of a single group that exists in the IdP client account.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

##### Query Parameters

- **excludedAttributes** (optional)
  It is a list of strings indicating which resource attributes should be removed from the default set of attributes to be returned. Currently, we support excluding only the 'members' attribute.
  Default: `members`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Response

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



#### Get Single Group By Display Name

#### Get Single Group By Display Name

**GET** `scim/v2.0/organizations/{organization_uid}/Groups?filter=displayName Eq "<<group_name>>"`

The Get Single Group By Display Name returns comprehensive details of a specific group that exists in the IdP client account, which is mapped in your Contentstack organization.

You need to pass the displayname as a query parameter.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

##### Query Parameters

- **filter** (required)
  Specify the type of filter you want to use. In this case, the filter will be “displayName Eq”
  Default: `displayName Eq "name_of_group"`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Response

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



#### Add Users to Group

#### Add Users to Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Add Users to Group request adds the user(s) to a group.

The specified user will then have the permissions (at the stack level and at the organization level) that are specific to that group.

In the "Request Body", you need to pass the ID of the user in the value key.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Rename Group

#### Rename Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Rename Group request lets you change the name of a group.

In the "Request Body", you need to pass a new name for the group in the value key.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Remove All Users from Group

#### Remove All Users from Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Remove All Users from Group request removes all the existing users from a group.

This also revokes admin access for users with admin roles, unless those users have been assigned the admin role by some other group. The same logic applies to stack roles as well.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Remove User from Group

#### Remove User from Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Remove User from Group request removes a user from a group.

In the "Request Body", you need to pass the ID of the user you want to remove from the group. Refer to the [Get All Users](#get-all-users) request to get the ID.

This also revokes admin access for the user with an admin role, unless that user has been assigned an admin role by some other group as well. The same logic applies to stack roles as well.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Replace Users in Group

#### Replace Users in Group

**PATCH** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Replace Users in Group request replaces the existing set of users with a new set of users.

In the "Request Body", pass the user ID in the value key. Refer to the [Get All Users](#get-all-users) request to get the user IDs.

This request removes all the existing users from a group and replaces them with the specified user(s).

This also revokes admin access for users with admin role, unless that user has been assigned an admin role by some other group as well. The same logic applies to stack roles as well.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Request

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

##### Sample Response

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



#### Delete Group

#### Delete Group

**DELETE** `scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`

The Delete Group request deletes an existing group from the SCIM. This will remove all the users from that group.

**Note**: This API request will not remove users from the organization or from the Contentstack account.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](/docs/developers/apis/content-management-api#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`
- **group_id** (required)
  The ID of the group you want to delete. Refer to the [Get All Groups](#get-all-groups) request to fetch group ID.
  Default: `your_group_id`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`


### Schema Discovery

Use the SCIM API requests to retrieve information about SCIM schemas supported by Contentstack and types of available resources.


#### Get Schemas

#### Get Schemas

**GET** `scim/v2.0/organizations/{organization_uid}/Schemas`

The Get Schemas request fetches a list of schemas for all supported resources, which can be used to introspect resources and attribute extensions

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](https://app.contentstack.com/docs/developers/apis/content-management-api/#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 2,
    "startIndex": 1,
    "itemsPerPage": 2,
    "Resources": [
        {
            "description": "User Account",
            "id": "urn:ietf:params:scim:schemas:core:2.0:User",
            "name": "User",
            "attributes": [
                {
                    "name": "userName",
                    "type": "String",
                    "description": "Unique identifier for the User. Use email as userName.",
                    "mutability": "readWrite",
                    "multiValued": false,
                    "required": true,
                    "caseExact": false,
                    "returned": "default",
                    "uniqueness": "global"
                },
                {
                    "name": "name",
                    "type": "complex",
                    "multiValued": false,
                    "description": "User's name component",
                    "required": true,
                    "subAttributes": [
                        {
                            "name": "familyName",
                            "type": "string",
                            "multiValued": false,
                            "description": "The family name of the User, or last name.",
                            "required": true,
                            "caseExact": false,
                            "mutability": "readWrite",
                            "returned": "default",
                            "uniqueness": "none"
                        },
                        {
                            "name": "givenName",
                            "type": "string",
                            "multiValued": false,
                            "description": "The given name of the User, or first name.",
                            "required": true,
                            "caseExact": false,
                            "mutability": "readWrite",
                            "returned": "default",
                            "uniqueness": "none"
                        }
                    ]
                },
                {
                    "name": "emails",
                    "type": "complex",
                    "multiValued": true,
                    "description": "Email addresses for the user.",
                    "required": false,
                    "subAttributes": [
                        {
                            "name": "value",
                            "type": "string",
                            "multiValued": false,
                            "description": "Email addresses for the user.",
                            "required": false,
                            "caseExact": false,
                            "mutability": "readWrite",
                            "returned": "default",
                            "uniqueness": "none"
                        },
                        {
                            "name": "type",
                            "type": "string",
                            "multiValued": false,
                            "description": "A label indicating the type email address. only 'work' is supported.",
                            "required": false,
                            "caseExact": false,
                            "mutability": "readWrite",
                            "returned": "default",
                            "uniqueness": "none",
                            "canonicalValues": [
                                "work"
                            ]
                        },
                        {
                            "name": "primary",
                            "type": "boolean",
                            "multiValued": false,
                            "description": "A Boolean value indicating the 'primary' or preferred attribute value for this attribute",
                            "required": false,
                            "mutability": "readWrite",
                            "returned": "default"
                        }
                    ]
                },
                {
                    "caseExact": false,
                    "type": "Boolean",
                    "description": "A Boolean value indicating the User's administrative status.",
                    "mutability": "readWrite",
                    "name": "active",
                    "multiValued": false,
                    "required": true,
                    "returned": "default",
                    "uniqueness": "none"
                }
            ]
        },
        {
            "description": "Group",
            "id": "urn:ietf:params:scim:schemas:core:2.0:Group",
            "name": "Group",
            "attributes": [
                {
                    "name": "displayName",
                    "type": "string",
                    "multiValued": false,
                    "description": "A human-readable name for the Group. REQUIRED.",
                    "required": false,
                    "caseExact": false,
                    "mutability": "readWrite",
                    "returned": "default",
                    "uniqueness": "server"
                },
                {
                    "name": "members",
                    "type": "complex",
                    "multiValued": true,
                    "description": "A list of members of the Group.",
                    "required": false,
                    "subAttributes": [
                        {
                            "name": "value",
                            "type": "string",
                            "multiValued": false,
                            "description": "Identifier of the member of this Group.",
                            "required": true,
                            "caseExact": false,
                            "mutability": "immutable",
                            "returned": "default",
                            "uniqueness": "none"
                        },
                        {
                            "name": "display",
                            "type": "string",
                            "multiValued": false,
                            "description": "Display name of the member.",
                            "required": false,
                            "caseExact": false,
                            "mutability": "immutable",
                            "returned": "default",
                            "uniqueness": "none"
                        }
                    ]
                }
            ]
        }
    ]
}
```



#### Get Resource Types

#### Get Resource Types

**GET** `scim/v2.0/organizations/{organization_uid}/ResourceTypes`

The Get Resource Types request returns the list of available resource types like Users or Groups.

##### URL Parameters

- **organization_uid** (required)
  The UID of the organization. Use the [Get All Organizations](https://app.contentstack.com/docs/developers/apis/content-management-api/#get-all-organizations) request to get the UID of the organization.
  Default: `your_organization_uid`

##### Headers

- **Content-Type** (required)
  The format of the response content.
  Default: `application/json`
- **Authorization** (required)
  The access token obtained after authorizing the IdP client.
  Default: `Bearer access_token_from_IdP_client`

##### Sample Response

```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 2,
    "startIndex": 1,
    "itemsPerPage": 2,
    "Resources": [
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
            ],
            "id": "User",
            "name": "User",
            "endpoint": "/Users",
            "description": "User Account",
            "schema": "urn:ietf:params:scim:schemas:core:2.0:User",
            "meta": {
                "resourceType": "ResourceType"
            }
        },
        {
            "schemas": [
                "urn:ietf:params:scim:schemas:core:2.0:ResourceType"
            ],
            "id": "Group",
            "name": "Group",
            "endpoint": "/Groups",
            "description": "Group",
            "schema": "urn:ietf:params:scim:schemas:core:2.0:Group",
            "meta": {
                "resourceType": "ResourceType"
            }
        }
    ]
}
```


## Regions


| Region | Host |
|--------|------|

| North America | https://auth-api.contentstack.com/ |

| Europe | https://eu-auth-api.contentstack.com/ |

| AWS - Australia | https://au-auth-api.contentstack.com/ |

| Azure - North America | https://azure-na-auth-api.contentstack.com/ |

| Azure - Europe | https://azure-eu-auth-api.contentstack.com/ |

| GCP - North America | https://gcp-na-auth-api.contentstack.com/ |

| GCP - Europe | https://gcp-eu-auth-api.contentstack.com/ |
