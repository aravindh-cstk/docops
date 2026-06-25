---
title: "Content Management API"
description: Contentstack's Content Management API helps you manage the content of your account. To learn more about creating and fetching content, read our reference doc!
url: content-management-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: [API VERSION : 3.0.0]
last_updated: 2025-07-10
---

# Content Management API


## Introduction

### Base URL

- AWS North America (AWS NA): https://api.contentstack.io/
- AWS Europe (EU): https://eu-api.contentstack.com/
- AWS Australia (AWS AU): https://au-api.contentstack.com/
- Azure North America (Azure NA): https://azure-na-api.contentstack.com/
- Azure Europe (Azure EU): https://azure-eu-api.contentstack.com/
- GCP North America (GCP NA): https://gcp-na-api.contentstack.com/
- GCP Europe (GCP EU): https://gcp-eu-api.contentstack.com/

### Overview

Contentstack is a headless, API-first content management system (CMS) that provides everything you need to power your web or mobile properties. To learn more about Contentstack, visit our [website](https://www.contentstack.com) or refer to our [documentation site](https://www.contentstack.com/docs) to understand what we do.

This document is a detailed reference to Contentstack’s Content Management API.

The **Content Management API (CMA)** is used to manage the content of your Contentstack account. This includes creating, updating, deleting, and fetching content of your account. To use the Content Management API, you will need to authenticate yourself with a [Management Token](../../cs-docs/developers/create-tokens/about-management-tokens.md) or an [Authtoken](#how-to-get-authtoken). Read more about it in [Authentication](#authentication).

**Note:** The Content Management APIs also include many GET requests. However, it is highly recommended that you always use the [Content Delivery API](./content-delivery-api.md) to deliver content to your web or mobile properties.

### Content Management SDKs

We have created SDKs, API references, getting started guides, and [sample apps](/docs/developers/sample-apps) for some of the popular languages and platforms. You can use them to build your own apps and manage your content from Contentstack.

Contentstack Management SDKs interact with the Content Management APIs and allow you to create, update, delete, and fetch content from your Contentstack account. They are read-write in nature.

You will find a list of all the available management SDKs under the [Content Management SDKs](/docs/developers/sdks/) section.

We provide Management SDKs for the following platform:

- JavaScript
- .NET
- Java
- Python

### Authentication

Contentstack provides **token-based authentication** that allows you to create, update, delete, and fetch the content of your Contentstack account. You can use either the stack’s Management Token, OAuth Token, or the user Authtoken, along with the stack API key, to make Content Management API requests. The API key is a unique key assigned to each [stack](/docs/developers/set-up-stack).

Management Tokens are stack-level read-write tokens that allow making CMA requests without the need to provide user credentials. The Contentstack OAuth server generates access tokens (both App and User tokens), which client applications can employ to retrieve restricted data on behalf of the resource owner. However, Authtokens are user-specific tokens generated when user logs in to Contentstack. Read more about the different [types of tokens](../../cs-docs/developers/create-tokens/types-of-tokens.md).

#### For API Key and Authtoken-based authentication

- Pass the stack’s API key against the api_key parameter as header
- Pass the user Authtoken against the authtoken parameter as header

#### For API Key and Management Token-based authentication

- Pass the stack’s API key against the api_key parameter as header
- Pass the user Management Token value against the authorization parameter as header

#### For API Key and OAuth Token-based authentication

- Pass the stack’s API key against the api_key parameter as header for stack based APIs
- Pass the OAuth Token value against the authorization parameter as header

#### Authtokens vs Management Tokens vs OAuth Token

An **Authtoken** is a read-write token used to make authorized CMA requests, and it is a **user-specific** token. This means that your personal user details are attached to every API request that you make using the authtoken. So, if a person were to obtain access to your authtoken, and knows the Stack API key, this person would be able to make API requests that appeared to be coming from you.

**Management Tokens**, on the other hand, are **stack-level** tokens, with no users attached to them. They can do everything that authtokens can do. Since they are not personal tokens, no role-specific permissions are applicable to them. It is recommended to use these tokens for automation scripts, third-party app integrations, and for **Single Sign On (SSO)-enabled organizations**.

**Contentstack OAuth** employs the OAuth 2.0 protocol, enabling external applications to access Contentstack APIs on behalf of users. It issues access tokens (App & User tokens) to client applications, allowing them to retrieve restricted data from the Contentstack resource server without the need for the resource owner to share their credentials. Learn more about [Contentstack OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md) and [OAuth Scopes](../../cs-docs/developers/developer-hub/oauth-scopes.md).

**Authtoken** lets you make almost all the Content Management requests, while with **Management Tokens**, you have a few limitations. For more information, read our [Limitations of Management Tokens](../../cs-docs/developers/create-tokens/limitations-of-management-tokens.md) documentation.

**Note:** When trying out POST/PUT calls, in addition to the API Key and Authtoken / Management token, you need to mandatorily pass Content-Type:application/json in the Header.

#### How to Get Stack API Key

To retrieve the stack API key, perform the steps given below:

1. Go to your stack.
2. Navigate to Settings > Stack.
3. On the right-hand side of the page, under API Credentials, you will get the API Key of your stack.

**Note**: Only the developers, admins and stack owners can view the API key.

#### How to Get Authtoken

To retrieve the authtoken, log in to your Contentstack account by using the "[Log in to your account](./content-management-api.md#logging-in-out)" request. This request will return the authtoken in the response body.

You can generate multiple authtokens by executing the "[Log in to your account](./content-management-api.md#logging-in-out)" request multiple times. These tokens do not have an expiration time limit. However, currently, there is a maximum limit of **20 valid tokens** that a user can use per account at a time, to execute CMA requests. If you already have valid 20 tokens, creating a new authtoken will automatically cause the oldest authtoken to expire without warning.

For SSO-enabled organizations, the "[Log in to your account](./content-management-api.md#logging-in-out)" request will not return the user authtoken for users who access the organization through Identity Provider login credentials. Consequently, any requests that require user authtoken will not work. Only the owner of the organization and users with permission to access the organization without SSO can use the Content Management APIs. Learn more about [REST API Usage](../../cs-docs/developers/single-sign-on/rest-api-usage.md).

#### How to Get Management Tokens

To get the Management Token, perform the steps given below after logging into your Contentstack account:

1. Go to your stack.
2. Navigate to Settings > Tokens > Management Tokens.
3. From the list, pick the Management Token that you want.Read more about how you can create a new Management Token.

**Note**: Only the stack [Owner](../../cs-docs/developers/invite-users-and-assign-roles/types-of-roles.md#owner) and [Admin](../../cs-docs/developers/invite-users-and-assign-roles/types-of-roles.md#admin) users can create Management Tokens.

You can generate multiple management tokens for a specific stack within your organization. However, there is a maximum limit of **10 valid tokens** that can exist per stack at a time, to execute CMA requests. If you already have 10 valid tokens, creating a new management token will automatically cause the oldest management token to expire without warning.

#### How to Get OAuth Tokens

To get the OAuth Token, perform the steps given within the [Configuring Contentstack OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md#configuring-contentstack-oauth) section after logging into your Contentstack account.

**Note**: Only the organization Owner and Admin users can create OAuth Tokens.

### Rate limiting

Rate limit is the maximum number of requests you can make using Contentstack’s API in a given time period.

By default, the Contentstack Management API enforces the following rate limits:

- Read (GET) requests: 10 requests per second per organization.
- Write (POST/PUT/DELETE) requests: 10 requests per second per organization.

Your application will receive the HTTP 429 response code if the requests for a given time period exceed the defined rate limits.

**Note**: Bulk actions do not follow the standard CMA rate limit of 10 requests per second. The default rate limit for bulk actions is **1 request per second** i.e., in one second you can make only one bulk action API request.

We also have set a limit on stack creation. Organizations can create only one stack per minute.

The aforementioned limits are configurable depending on your plan. For more information, contact our [support](mailto:support@contentstack.com) team.

To get the current rate limit status, you can check the returned HTTP headers of any API request. These rate limits are reset at the start of each time period.

| Headers | Description |
| --- | --- |
| X-RateLimit-Limit | The maximum number of request a client is allowed to make per second per organization. |
| X-RateLimit-Remaining | The number of requests remaining in the current time period. |

### API conventions

- The base URL for Content Management API for different regions can be found in the Base URL section.
- The API version (in our case, 'v3') can be found in the URL, e.g. api.contentstack.io/v3/endpoint.
- Content Management API supports GET/POST/PUT/DELETE verbs or methods.
- URL paths are written in lower case.
- Query parameters and JSON fields use lower case, with underscores (_) separating words.
- The success/failure status of an operation is determined by the HTTP status it returns. Additional information is included in the HTTP response body.
- The JSON number type is bounded to a signed 32-bit integer.

### Errors

If there is something wrong with the API request, Contentstack returns an error.

Contentstack uses conventional, standard HTTP status codes for errors, and returns a JSON body containing details about the error. In general, codes in the 2xx range signify success. The codes in the 4xx range indicate error, mainly due to information provided (for example, a required parameter or field was omitted). Lastly, codes in the 5xx range mean that there is something wrong with Contentstack’s servers; it is very rare though.

Let’s look at the error code and their meanings.

  
    

| HTTP status code | Description |
| --- | --- |
| 400 Bad Request | The request was incorrect or corrupted. |
| 401 Access Denied | The login credentials are invalid. |
| 403 Forbidden Error | The page or resource that is being accessed is forbidden. |
| 404 Not Found | The requested page or resource could not be found. |
| 412 Pre Condition Failed | The entered API key is invalid. |
| 422* Unprocessable Entity (also includes Validation Error and Unknown Field) | The request is syntactically correct but contains semantic errors. |
| 429 Rate Limit Exceeded | The number of requests exceeds the allowed limit for the given time period. |
| 500 Internal Server Error | The server is malfunctioning and is not specific on what the problem is. |
| 502 Bad Gateway Error | A server received an invalid response from another server. |
| 504 Gateway Timeout Error | A server did not receive a timely response from another server that it was accessing while attempting to load the web page or fill another request by the browser. |

  

***** Contentstack returns the **422** HTTP status code with the "UID is not valid" message when an entry doesn’t exist, has been deleted, or belongs to a different content type. To check if an entry has been deleted, first try retrieving it from the CDN, then from the origin server if needed. This error can also occur due to invalid query parameters, such as using an empty array with logical operators like $and. Always ensure your queries contain valid conditions. For example, {"$and": [{}, {}]} is not a valid query.

**Note**: The error codes that we get in the JSON response are not HTTP error codes but are custom Contentstack error codes that are used for internal purposes.

### Using Postman Collection

Contentstack offers you a Postman Collection that helps you try out our Content Management API. You can download this collection, connect to your Contentstack account, and try out the Content Management API with ease.

Learn more about how to [get started with using the Postman Collection](./content-management-api.md#postman-collection) for Contenstack Content Management API.

### Using OpenAPI Files

Contentstack provides the OpenAPI files of the Contentstack’s Content Management APIs (CMA) that you can use to try out Contentstack APIs on any OpenAPI platform such as Swagger. You can download the OpenAPI JSON file of the Content Management API and open it on Swagger Editor to start using it.

Learn more about how to get started with using the [OpenAPI files for Contenstack Content Management API](https://github.com/contentstack/contentstack-openapi).

## API Reference

### Stacks

A [stack](/docs/developers/set-up-stack) is a space that stores the content of a project (a web or mobile property). Within a stack, you can create content structures, content entries, users, etc. related to the project.


#### Get Single Stack

#### Get a single stack

**GET** `/stacks?include_collaborators={boolean_value}&include_stack_variables={boolean_value}&include_discrete_variables={boolean_value}&include_count={boolean_value}`

The Get a single stack call fetches comprehensive details of a specific stack.

**Note**: For SSO-enabled organizations, it is mandatory to pass the organization UID in the header.

##### Query Parameters

- **include_collaborators** (optional)
  Set this parameter to 'true' to include the details of the stack collaborators.
  Default: `false`
- **include_stack_variables** (optional)
  Set this to 'true' to display the stack variables. Stack variables are extra information about the stack, such as the description, format of date, format of time, and so on. Users can include or exclude stack variables in the response.
  Default: `false`
- **include_discrete_variables** (optional)
  Set this to 'true' to view the access token of your stack.
  Default: `false`
- **include_count** (optional)
  Set this to 'true' to include in the response the total count of the stacks owned by or shared with a user account.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API Key of the stack that you want to retrieve.
  Default: `enter_your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_authtoken`
- **organization_uid** (optional)
  Enter the UID of your organization.
  Default: `Your_Organization_uid`

##### Sample Response

```json
{
    "stack": {
        "created_at": "2019-08-16T07:10:48.229Z",
        "updated_at": "2022-08-19T10:55:27.580Z",
        "uid": "bltf0ed554f9de444d5",
        "name": "Product Catalog - 2019",
        "description": "For CDA API calls try out section.",
        "org_uid": "blt8b9d1dcc7a9dadcc",
        "api_key": "blt02f7b45378b008ee",
        "master_locale": "en-us",
        "is_asset_download_public": true,
        "owner_uid": "sys_blt815d4d2116f9864d",
        "user_uids": [
            "sys_blt815d4d2116f9864d",
            "bltcd82b2c6bf913241",
            "blt75f100269fb9598f",
            "blt587a89fc7883c56700a95bfe",
            "bltaaba5fbac0ff0622",
            "blt42e55757d70d5f81026a2b9f",
            "blt231cdeced1707e06",
            "blt50a327a5c7049685",
            "blt6563a9b067fc1bc9",
            "blt1e6dead9f06f1560",
            "blt3167f0a16386ed8e",
            "blt5e99c104bb6b1a30",
            "blt80e1cb45e6624b62",
            "blta3007b105b17e5d8",
            "blte75599b1e529fa3a",
            "blt3cf27864e6b61df3",
            "bltd14dd3cbb471a414",
            "bltf926860821be02df",
            "blt59fc93b3f1c8c16b",
            "blt1e0bc4e72027812d",
            "bltd50b1d8587841ba2"
        ],
        "settings": {
            "version": "2019-04-30",
            "rte_version": 3,
            "webhook_enabled": false,
            "language_fallback": false,
            "fallback_publish_contents": true,
            "branches": true
        },
        "SYS_ACL": {
            "others": {
                "invite": false,
                "sub_acl": {
                    "create": false,
                    "read": false,
                    "update": false,
                    "delete": false
                }
            },
            "roles": [
                {
                    "uid": "blt70c41dfd00924e9f",
                    "name": "Developer",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                },
                {
                    "uid": "blt954756afc76573d1",
                    "name": "Admin",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                }
            ]
        },
        "global_search": true
    }
}
```



#### Get All Stacks

#### Get all stacks

**GET** `/stacks?include_collaborators={boolean_value}&include_stack_variables={boolean_value}&include_discrete_variables={boolean_value}&include_count={boolean_value}`

The Get all stacks call fetches the list of all stacks owned by and shared with a particular user account.

**Note**: For SSO-enabled organizations, it is mandatory to pass the organization UID in the header.

##### Query Parameters

- **include_collaborators** (optional)
  Set this parameter to 'true' to include the details of the stack collaborators.
  Default: `false`
- **include_stack_variables** (optional)
  Set this to 'true' to display the stack variables. Stack variables are extra information about the stack, such as the description, format of date, format of time, and so on. Users can include or exclude stack variables in the response.
  Default: `false`
- **include_discrete_variables** (optional)
  Set this to 'true' to view the access token of your stack.
  Default: `false`
- **include_count** (optional)
  Set this to 'true' to include in the response the total count of the stacks owned by or shared with a user account.
  Default: `false`

##### Headers

- **authtoken** (required)
  Default: `Your_Authtoken`
- **organization_uid** (optional)
  Enter the uid of your organization.
  Default: `Your_Organization_uid`

##### Sample Response

```json
{
	"stacks": [{
		"created_at": "2014-05-27T09:46:28.488Z",
		"updated_at": "2014-10-21T12:20:00.453Z",
		"uid": "blt123a123b123c",
		"name": "My First Stack",
		"description": "My new test stack",
		"org_uid": "abcdefgh1245",
		"api_key": "abcdefg1234567890",
		"master_locale": "en-us",
		"is_asset_download_public": true,
		"owner_uid": "abcdefg1234567890xyz",
		"user_uids": [
			"blt11e11111d11d1f11111a1b1f",
			"blt22dd2fd22222222e22f2aa22"
		],
		"settings": {
			"webhook_enabled": true,
			"workflow_stages": true,
			"publishing_rules": true
		},
		"master_key": "blta0b0add0e0b0000",
		"SYS_ACL": {
			"others": {
				"invite": false,
				"sub_acl": {
					"create": false,
					"read": false,
					"update": false,
					"delete": false
				}
			},
			"roles": [{
					"uid": "blt0f40fa0e3b989733",
					"name": "Developer",
					"invite": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true
					}
				},
				{
					"uid": "blte000a000a000cff0",
					"name": "Admin",
					"invite": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true
					}
				}
			]
		}
	}]
}
```



#### Create Stack

#### Create stack

**POST** `/stacks`

The Create stack call creates a new stack in your Contentstack account.

In the 'Body' section, provide the schema of the stack in JSON format.

**Note**: At any given point of time, an organization can create only one stack per minute.

##### Headers

- **authtoken** (required)
  Default: `Your_Authtoken`
- **organization_uid** (required)
  Enter the uid of your organization.
  Default: `Your_Organization_uid`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
  "stack": {
    "name": "My New Stack",
    "description": "My new test stack",
    "master_locale": "en-us"
  }
}
```

##### Sample Response

```json
{
  "notice": "Stack created successfully.",
  "stack": {
    "created_at": "2014-05-27T09:46:28.488Z",
    "updated_at": "2014-10-21T12:20:00.453Z",
    "uid": "blt123a123b123c",
    "name": "My First Stack",
    "description": "My new test stack",
     "org_uid":"abcdefgh1245",
    "api_key": "abcdefg1234567890",
    "master_locale": "en-us",
    "is_asset_download_public": true,
    "owner_uid": "abcdefg1234567890xyz",
    "user_uids": "[]",
    "collaborators": [
      {
        "uid": "abcd47a42c081522df4fc5ac57",
        "created_at": "2014-05-27T09:46:28.488Z",
        "updated_at": "2014-05-27T09:46:28.488Z",
        "email": "developer@example.com",
        "plan_id": [
          "cms_plan"
        ],
        "org_uid": [
          "pqr63a5e26545f23e63"
        ],
        "roles": [
          {}
        ]
      }
    ],
    "SYS_ACL": {
      "roles": [
        {
          "uid": "abcdefgpqr1234567890xyz",
          "sub_acl": {},
          "invite": true
        }
      ],
      "others": {
        "sub_acl": {
          "delete": false,
          "update": false,
          "read": false,
          "create": false
        },
        "invite": false
      }
    },
    "stack_variables": {
      "description": "My test stack"
    }
  }
}
```



#### Update Stack

#### Update stack

**PUT** `/stacks`

The Update stack call lets you update the name and description of an existing stack.

In the 'Body' section, provide the updated schema of the stack in JSON format.

**Warning:** The master locale cannot be changed once it is set while stack creation. So, you cannot use this call to change/update the master language.

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
	"stack": {
		"name": "My New Stack",
		"description": "My new test stack"
	}
}
```

##### Sample Response

```json
{
    "notice": "Stack updated successfully.",
    "stack": {
        "created_at": "2021-10-19T11:42:12.525Z",
        "updated_at": "2023-03-09T07:42:00.589Z",
        "uid": "blt0412fe849eede4d0",
        "name": "My New Stack",
        "description": "My new test stack",
        "org_uid": "bltbb29542f17bc03815",
        "api_key": "blt3c9eb5ecb1e5a954",
        "master_locale": "en-us",
        "is_asset_download_public": true,
        "owner_uid": "blt79ec83b4f1c8c16b",
        "user_uids": [
            "blt59fc93b3f1c8c16b"
        ],
        "settings": {
            "version": "2019-04-30",
            "rte_version": 3,
            "fallback_publish_contents": true,
            "blockAuthQueryParams": false,
            "allowedCDNTokens": [
                "authtoken",
                "access_token",
                "authorization"
            ],
            "webhook_enabled": false,
            "live_preview": {},
            "language_fallback": false,
            "workflow_stages": true,
            "publishing_rules": true
        },
        "master_key": "blt050927729g83cb19",
        "SYS_ACL": {
            "others": {
                "invite": false,
                "sub_acl": {
                    "create": false,
                    "read": false,
                    "update": false,
                    "delete": false
                }
            },
            "roles": [
                {
                    "uid": "blte5e7df28cbc8790b",
                    "name": "Developer",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                },
                {
                    "uid": "blt74a8a54546c15873",
                    "name": "Admin",
                    "invite": true,
                    "sub_acl": {
                        "create": true,
                        "read": true,
                        "update": true,
                        "delete": true
                    }
                }
            ]
        },
        "stack_variables": {},
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "57f633ab3cfa547eda8e60fa46898e7646e5b97c4"
        }
    }
}
```



#### Delete stack

#### Delete stack

**DELETE** `/stacks`

The Delete stack call is used to delete an existing stack permanently from your Contentstack account.

##### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`

##### Sample Response

```json
{
	"notice": "Stack deleted successfully!"
}
```



#### Get all users

#### Get all users of a stack

**GET** `/stacks/users`

The Get all users of a stack call fetches the list of all users of a particular stack

##### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Response

```json
{
	"users": [{
		"uid": "blt69fc93c3f1c8e16b",
		"created_at": "2021-10-19T11:43:47.606Z",
		"updated_at": "2023-01-23T05:53:40.818Z",
		"email": "john.doe@contentstack.com",
		"username": "john_blt9b474691",
		"first_name": "john",
		"last_name": "doe",
		"active": true,
		"metadata": {
			"idp_user": false
		},
		"settings": {
			"preferences": {
				"global": [],
				"stack": []
			}
		},
		"is_owner": true
	}]
}
```



#### Update Existing User Role

#### Update User Role

**POST** `/stacks/users/roles`

The Update User Role API Request updates the roles of an existing user account. This API Request will override the existing roles assigned to a user. For example, we have an existing user with the "Developer" role, and if you execute this API request with "Content Manager" role, the user role will lose "Developer" rights and the user role be updated to just "Content Manager".

When executing the API call, under the 'Body' section, enter the user UID and UIDs of roles that you want to assign the user. This information should be in JSON format.

##### Headers

- **api_key** (required)
  Enter the API key of your stack
  Default: `Enter the API key of your stack`
- **authtoken** (required)
  Enter your authtoken
  Default: `Enter_your_authtoken`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
	"users": {
		"user_uid": ["role_uid1", "role_uid2"]
	}
}
```

##### Sample Response

```json
{
	"notice": "The roles were applied successfully.",
	"users": [{
		"uid": "user_uid",
		"roles": ["role_uid1", "role_uid2"]
	}]
}
```



#### Transfer Stack Ownership

#### Transfer stack ownership to other users

**POST** `/stacks/transfer_ownership`

The Transfer stack ownership to other users call sends the specified user an email invitation for accepting the ownership of a particular stack.

Once the specified user accepts the invitation by clicking on the link provided in the email, the ownership of the stack gets transferred to the new user. Subsequently, the previous owner will no longer have any permission on the stack.

In the 'Body' section, you need to provide the email address of the user to whom you wish to transfer the ownership of the stack in JSON format.

**Additional Resource**: To transfer ownership of a stack to other users via Contentstack's UI, refer to the [Transfer Stack Ownership](../../cs-docs/developers/set-up-stack/transfer-stack-ownership.md) article.

##### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
	"transfer_to": "manager@example.com"
}
```

##### Sample Response

```json
{
	"notice": "An email has been sent to abc@example.com about transferring ownership of 'My New Stack'. The ownership will be transferred after the other user accepts ownership."
}
```



#### Accept Stack Ownership

#### Accept stack owned by other user

**GET** `/stacks/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid}`

The Accept stack owned by other user call allows a user to accept the ownership of a particular stack via an email invitation.

The email invitation includes a link (i.e., /stack/accept_ownership/{ownership_token}?api_key={api_key}&uid={user_uid} ) that consists of the ownership token, the API key, and user uid.

Once the user accepts the invitation by clicking on the link, the ownership is transferred to the new user account. Subsequently, the user who transferred the stack will no longer have any permission on the stack.

When executing the API call, in the 'URL Parameters' section, you need to provide the ownership token and the user uid that you received in the invitation mail.

##### URL Parameters

- **ownership_token** (required)
  Enter the ownership token received via email by another user.
  Default: `blt2add6864996aa9f2`

##### Query Parameters

- **api_key** (required)
  Enter the stack API key.
  Default: `blt9f902ab2842258eb`
- **uid** (required)
  Enter the user uid.
  Default: `Enter_your_user_uid`

##### Sample Response

```json
{
	"notice": "Ownership transferred successfully."
}
```



#### Stack Settings

#### Get stack settings

**GET** `/stacks/settings`

The Get stack settings call retrieves the configuration settings of an existing stack.

##### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`

##### Sample Response

```json
{
    "stack_settings": {
        "rte": {
            "cs_only_breakline": true
        },
        "stack_variables": {
            "enforce_unique_urls": true,
            "sys_rte_allowed_tags": "style, figure, script",
            "sys_rte_skip_format_on_paste": "GD:font-size"
        },
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "471f7fd8622f1cc0a0148ad7a6561943f25b79f1"
        },
        "live_preview": {}
    }
}
```


#### Add stack settings

**POST** `/stacks/settings`

The Add stack settings request lets you add additional settings for your existing stack.

You can add specific settings for your stack by passing any of the following parameters in the “Request Body”:

- Following parameters can be passed within the stack_variables section:"enforce_unique_urls": true: Ensures that entry URLs are not duplicated across the stack.
- "sys_rte_allowed_tags": "figure, style, script": You can pass a combination of the three values, figure, style, and script, to this parameter (e.g., "sys_rte_allowed_tags": "figure, style, script", "sys_rte_allowed_tags": "figure", etc.):figure: Wraps images inside the “Rich Text Editor” field within the <figure> tag.
- style: Allows to use the <style> tag within the HTML code of a “Rich Text Editor” field.
- script: Allows to use the <script> tag within the HTML code of a “Rich Text Editor” field.Note: Contentstack highly recommends that you avoid using the <script> tag within the HTML code of a “Rich Text Editor” field due to its security vulnerabilities.

"sys_rte_skip_format_on_paste": "GD:font-size": Skips the font-size attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste":"GD:color": Skips the color attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste":"GD:background-color": Skips the background-color attribute, and GD indicates the external vendor Google Document’s prefix."sys_rte_skip_format_on_paste": "MW:color": Skips the color attribute, and MW indicates the external vendor Microsoft Word’s prefix.

**Note**: We are currently supporting four attributes (GD:font-size, GD:color, GD:background-color, and MW:color) for this key. This is applicable for both HTML and JSON Rich Text Editors. For more information, refer to the [API Change Log](/docs/changelog/#accept-or-skip-source-color-background-color-while-copying-content-into-html-json-rtes) for this update.

To enable/disable Live Preview, pass the following schema in the Request Body:

```
"live_preview": {
      "enabled": true,
      "default-env": "blt93a********5c8de",
      "default-url": "https://preview.example.com"
    }
```

The editor normally uses the "enter" key for paragraphs and "shift+enter" for line breaks. However, by enabling "cs_only_breakline": true and "cs_breakline_on_enter": true in the "rte" parameter, pressing "enter" creates a line break, and "shift+enter" creates a new paragraph.

Here’s a sample of the Request Body:

```
{
    "stack_settings": {
 		"stack_variables": {
			"enforce_unique_urls": true,
			"sys_rte_allowed_tags": "style,figure,script",
			"sys_rte_skip_format_on_paste": "GD:font-size"
        },
		"rte": {
			"cs_breakline_on_enter": true,
			"cs_only_breakline": true
		},       
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```

If you exclusively set "cs_only_breakline": true within the "rte" parameter, it ensures that only a <br> tag is inserted in the "Rich Text Editor" field when the content manager presses "Enter". Conversely, when this parameter is set to false, the <br> tag is substituted with <p></p>.

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "stack_settings": {
 		"stack_variables": {
			"enforce_unique_urls": true,
			"sys_rte_allowed_tags": "style,figure,script",
			"sys_rte_skip_format_on_paste": "GD:font-size"
        },
		"rte": {
			"cs_breakline_on_enter": true,
			"cs_only_breakline": true
		},       
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```

##### Sample Response

```json
{
    "notice": "Stack settings updated successfully.",
    "stack_settings": {
        "rte": {
            "cs_breakline_on_enter": true,
            "cs_only_breakline": true
        },
        "stack_variables": {
            "enforce_unique_urls": true,
            "sys_rte_allowed_tags": "style,figure,script",
            "sys_rte_skip_format_on_paste": "GD:font-size"
        },
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "2d805ad8c8b6d59a91fa4d6238d1894c3f4483e3"
        },
        "live_preview": {
            "enabled": true,
            "default-env": "blt94aa4e3021b96811",
            "default-url": "https://preview.example.com"
        }
    }
}
```


#### Reset stack settings

**POST** `/stacks/settings/reset`

The Reset stack settings call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack.

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "stack_settings":{}
}
```

##### Sample Response

```json
{
    "notice": "Stack settings updated successfully.",
    "stack_settings": {
        "stack_variables": {},
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "471f7fd8622f1cc0a0148ad7a6561943f25b79f1"
        },
        "live_preview": {},
        "rte": {}
    }
}
```



#### Share Stack

#### Share a stack

**POST** `/stacks/share`

The Share a stack call shares a stack with the specified user to collaborate on the stack.

In the 'Body' section, you need to provide the email ID of the user with whom you wish to share the stack along with the role uid that you wish to assign the user.

##### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
	"emails": [
		"manager@example.com"
	],
	"roles": {
		"manager@example.com": [
			"abcdefhgi1234567890"
		]
	}
}
```

##### Sample Response

```json
{
	"notice": "The invitation has been sent successfully."
}
```



#### Unshare Stack

#### Unshare a stack

**POST** `/stacks/unshare`

The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators. Once this call is executed, the user will not be able to view the stack in their account.

In the 'Body' section, you need to provide the email ID of the user from whom you wish to unshare the stack.

##### Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
	"email": "manager@example.com"
}
```

##### Sample Response

```json
{
	"notice": "The stack has been successfully unshared."
}
```


### Branches

[Branches](../developers/apis/content-management-api/branches.md) allows you to isolate and easily manage your “in-progress” work from your stable, live work in the production environment. It helps multiple development teams to work in parallel in a more collaborative, organized, and structured manner without impacting each other.


#### Get All Branches

#### Get all branches

**GET** `/stacks/branches?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

The Get all branches request returns comprehensive information of all the branches available in a particular stack in your account.

You can add queries to extend the functionality of this API call. Under the 'URL Parameters' section, insert a parameter named query and provide a query in JSON format as the value. (Refer [Queries](./content-delivery-api.md#queries))  
To configure the permissions for your application via OAuth, please include the cm.branches.management:read scope.

##### Query Parameters

- **limit** (optional)
  Enter the maximum number of branches to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of branches available in a stack.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "branches": [
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-06-16T18:15:51.248Z",
            "updated_at": "2021-06-16T18:15:51.248Z",
            "alias": [
                {
                    "uid": "dev"
                }
            ]
        },
        {
            "uid": "main",
            "source": "",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-06-10T18:15:40.521Z",
            "updated_at": "2021-06-10T18:15:40.521Z",
            "alias": []
        }
    ]
}
```



#### Get a Single Branch

#### Get a single branch

**GET** `/stacks/branches/{branch_uid}`

The Get a single branch request returns information of a specific branch.  
To configure the permissions for your application via OAuth, please include the cm.branches.management:read scope.

##### URL Parameters

- **branch_uid** (required)
  Enter the unique ID of the branch of which you want to retrieve the details. The UID of a branch is unique across a stack. Execute the [Get all branches](#get-all-branches) call to retrieve the UID of a branch.
  Default: `your_branch_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "branch": {
        "uid": "development",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-06-16T18:15:51.248Z",
        "updated_at": "2021-06-16T18:15:51.248Z",
        "alias": [
            {
                "uid": "dev"
            }
        ]
    }
}
```



#### Create a Branch

#### Create a branch

**POST** `/stacks/branches`

The Create a branch request creates a new branch in a particular stack of your organization.

**Note:** Only stack owners, admins, and developers can create a new branch. You must only use the authtoken to create a branch.

In the “Body” section, you need to provide a custom UID for the new branch and also the UID of the source branch from which it will inherit data.

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your auth token.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`

##### Sample Request

```json
{
    "branch": {
        "uid": "release",
        "source": "main"
    }
}
```

##### Sample Response

```json
{
    "notice": "Branch created successfully.",
    "branch": {
        "uid": "release",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-06-17T06:42:26.136Z",
        "updated_at": "2021-06-17T06:42:26.136Z",
        "alias": []
    }
}
```



#### Delete a Branch

#### Delete a branch

**DELETE** `/stacks/branches/{branch_uid}?force={boolean_value}`

The Delete a branch request deletes an existing branch and all the content within it.

To confirm the deletion of a branch, you need to specify the force=true query parameter.

**Note:** You need to delete the child branches before deleting the parent branch. If a branch is the source for any other branch, irrespective of whether you pass a force parameter or not, the API will not allow you to delete that branch.  
 You must only use the authtoken to delete a branch.

**Additional Resource:** Deleting a branch also deletes the [alias](../developers/apis/content-management-api/branches.md#work-with-aliases) pointing towards it.

When executing the API call, in the “URL Parameters” section, provide the UID of your branch.

##### URL Parameters

- **branch_uid** (required)
  Enter the unique ID of the branch that you want to delete. The UID of a branch is unique across a stack. Execute the [Get all branches](#get-all-branches) call to retrieve the UID of a branch.
  Default: `your_branch_uid`

##### Query Parameters

- **force** (required)
  Enter 'true' to force delete a branch.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

##### Sample Response

```json
{
    "notice": "Branch deleted successfully."
}
```



#### Comparing Branches

With the [Comparing Branches](../../cs-docs/developers/branches/comparing-branches.md) functionality, you can compare and check the differences between any two branches.

##### Compare Branches

#### Compare branches

**GET** `/stacks/branches_compare?base_branch=main&compare_branch=redesign`

The Compare branches request returns a list of all the differences between two branches.

**Note:**

- The compare branches feature is only available for the content types and global fields modules.
- If the number of Content Types/Global Fields that need to be compared is more than 100, you will receive a Next URL in the response body. The comparison limit is set at 100, and for every comparison that goes beyond this limit, the process will be completed in segments of 100.

##### Compare Content Type between Branches

##### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of branches compare result to be returned. The default limit is set at 100.
  Default: `100`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":[
      {
         "title":"Banner",
         "uid":"banner",
         "type":"content_type",
         "status":"compare_only"
      },
      {
         "title":"Author",
         "uid":"author",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Product",
         "uid":"product",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Footer",
         "uid":"footer",
         "type":"content_type",
         "status":"base_only"
      },
      {
         "title":"Homepage",
         "uid":"homepage",
         "type":"content_type",
         "status":"modified"
      }
   ],
   "next_url":"https://api.contentstack.io/v3/stacks/branches_compare/content_types?base_branch=main&compare_branch=pixel&skip=5&limit=5"
}
```


#### Compare content types between branches

**GET** `/stacks/branches_compare/content_types?base_branch=main&compare_branch=redesign`

The Compare content types between branches request returns a list of all the differences in content types between the two specified branches.

##### Compare Global Fields between Branches

##### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of branches compare result to be returned. The default limit is set at 100.
  Default: `100`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":[
      {
         "title":"Banner",
         "uid":"banner",
         "type":"content_type",
         "status":"compare_only"
      },
      {
         "title":"Author",
         "uid":"author",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Product",
         "uid":"product",
         "type":"content_type",
         "status":"modified"
      },
      {
         "title":"Footer",
         "uid":"footer",
         "type":"content_type",
         "status":"base_only"
      },
      {
         "title":"Homepage",
         "uid":"homepage",
         "type":"content_type",
         "status":"modified"
      }
   ],
"next_url":"https://api.contentstack.io/v3/stacks/branches_compare/content_types?base_branch=main&compare_branch=pixel&skip=5&limit=5"
}
```


#### Compare global fields between branches

**GET** `/stacks/branches_compare/global_fields?base_branch=main&compare_branch=redesign`

The Compare global fields between branches request returns a list of all the differences in global fields between the two specified branches.

##### Compare Specific Content Types between Branches

##### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of branches compare result to be returned. The default limit is set at 100.
  Default: `100`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":[
      {
         "title":"Search",
         "uid":"search",
         "type":"global_field",
         "status":"compare_only"
      },
      {
         "title":"SEO",
         "uid":"ui",
         "type":"global_field",
         "status":"modified"
      }
   ],
"next_url":"https://api.contentstack.io/v3/stacks/branches_compare/content_types?base_branch=main&compare_branch=pixel&skip=5&limit=5"
}
```


#### Compare specific content type between branches

**GET** `/stacks/branches_compare/content_types/{content_type_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

The Compare specific content type between branches request returns all the differences of the specified content type between the two specified branches.

##### Compare Specific Global Fields between Branches

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the difference. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `content_type_uid`

##### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":{
      "uid":"homepage",
      "type":"content_type",
      "status":"modified",
      "base_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Categories",
               "display_type":"dropdown",
               "enum":{
                  "advanced":false,
                  "choices":[
                     {
                        "value":"Option A"
                     },
                     {
                        "value":"Option B"
                     }
                  ]
               },
               "multiple":false,
               "uid":"categories",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "version":3
               },
               "mandatory":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            },
            {
               "data_type":"text",
               "display_name":"Featured A",
               "uid":"featured_a",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[2]"
            },
            {
               "data_type":"text",
               "display_name":"Topics",
               "uid":"topics",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[3]"
            }
         ],
         "schema":null
      },
      "compare_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Featured B",
               "uid":"featured_a",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            },
            {
               "data_type":"text",
               "display_name":"SEO Description",
               "uid":"seo_description",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[2]"
            }
         ],
         "schema":null
      }
   }
}
```


#### Compare specific global field between branches

**GET** `/stacks/branches_compare/global_fields/{global_field_uid}?base_branch=main&compare_branch=redesign&include_schemas=true`

The  Compare specific global field between branches request returns all the differences of the specified global field between the two specified branches.

##### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field  of which you want to retrieve the difference. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

##### Query Parameters

- **base_branch** (optional)
  The basis on which comparison is done. If kept empty, the source branch of the compare branch is considered by default.
  Default: `main`
- **compare_branch** (required)
  Enter the branch you want to compare with the base branch.
  Default: `redesign`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
   "branches":{
      "base_branch":"main",
      "compare_branch":"redesign"
   },
   "diff":{
      "uid":"ui",
      "type":"global_field",
      "status":"modified",
      "base_branch":{
         "differences":[
            {
               "value":"SEO",
               "path":"title"
            },
            {
               "data_type":"text",
               "display_name":"Title",
               "uid":"title",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[0]"
            },
            {
               "data_type":"text",
               "display_name":"Description",
               "uid":"description",
               "field_metadata":{
                  "description":"",
                  "default_value":"",
                  "multiline":true,
                  "version":3
               },
               "format":"",
               "error_messages":{
                  "format":""
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            }
         ],
         "schema":null
      },
      "compare_branch":{
         "differences":[
            {
               "data_type":"text",
               "display_name":"Markdown",
               "uid":"markdown",
               "field_metadata":{
                  "description":"",
                  "markdown":true,
                  "version":3
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[0]"
            },
            {
               "data_type":"file",
               "display_name":"File",
               "uid":"file",
               "extensions":[
                  
               ],
               "field_metadata":{
                  "description":"",
                  "rich_text_type":"standard"
               },
               "mandatory":false,
               "multiple":false,
               "non_localizable":false,
               "unique":false,
               "indexed":false,
               "inbuilt_model":false,
               "path":"schema[1]"
            },
            {
               "value":"UI",
               "path":"title"
            }
         ],
         "schema":null
      }
   }
}
```



#### Merging Branches

The [Merging Branches](../../cs-docs/developers/branches/merging-branches.md)functionality enables you to merge two branches, integrating the development changes made in the compare branch into the base branch.

##### Merge Branches

#### Merge branches

**POST** `/stacks/branches_merge?base_branch=main&compare_branch=redesign&default_merge_strategy=merge_prefer_compare&merge_comment=sample comment`

The Merge branches request merges the specified two branches as per the merge strategy selected.

**Additional Resource:** To learn how to select and use the merge strategies, refer to our documentation on [Merging Branches](../../cs-docs/developers/branches/merging-branches.md).

You can pass ignore in the default_merge_strategy query parameter, and pass the item_merge_strategies in the request body to override the default strategy and use a different merge strategy for specific content types or global fields.

Here are the details of available merge strategies and what each strategy does:

| Merge Strategy | Description |
| --- | --- |
| merge_prefer_base | Merges the changes from the compare branch into the base branch, keeping the base branch's changes if there are conflicts. |
| merge_prefer_compare | Merges the changes from the compare branch into the base branch, keeping the compare branch's changes if there are conflicts. |
| overwrite_with_compare | Replaces the base branch with the compare branch, discarding any changes that are not in the compare branch. |
| merge_new_only | Adds only new items from the compare branch to the base branch ignoring the modified items. |
| merge_modified_only_prefer_base | Merges the modified items from the compare branch into the base branch, keeping the base branch's changes if there are conflicts. |
| merge_modified_only_prefer_compare | Merges the modified items from the compare branch into the base branch, keeping the compare branch's changes if there are conflicts. |
| ignore | Doesn’t merge the compare branch directly with the base branch. Lets users choose to merge each item from the compare branch into the base branch individually, using the desired merge strategy. |

**Note**:

- The merge branches feature is only available for the content types and global fields modules.
- You can create an additional revert branch beyond the established maximum limit of branches per stack. For instance, if you already have reached the maximum limit of branches in your stack, you can perform a merge operation, provided that you manually delete the backup branch or any other branch before attempting the next merge.

##### Get all Merge Jobs

##### Query Parameters

- **base_branch** (optional)
  The base branch serves as the foundation where changes can be merged.
  Default: `main`
- **compare_branch** (required)
  Enter the branch from which you want to merge changes into the base branch.
  Default: `redesign`
- **default_merge_strategy** (required)
  Specify the merge strategy to apply for the merge action.
  Default: `merge_prefer_base`
- **merge_comment** (required)
  Enter the comment to be displayed for the merge action.
  Default: `merge_comment`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Request

```json
{
    "item_merge_strategies": [
        {
            "uid": "global_field_uid", 
            "type": "global_field", 
            "merge_strategy": "merge_prefer_base"
    },
      {
            "uid": "content_type_uid", 
            "type": "content_type",
            "merge_strategy": "merge_prefer_base"
    }
  ]
}
```

##### Sample Response

```json
{
   "uid":"185c7583-f811-401a-9278-70682305dd4d",
   "api_key":"blt6de749920a15b8f6",
   "created_at":"2023-05-03T14:26:32.918Z",
   "updated_at":"2023-05-03T14:26:32.918Z",
   "created_by":"blt151bca2f320b01be",
   "updated_by":"blt151bca2f320b01be",
   "merge_details":{
      "base_branch":"main",
      "compare_branch":"redesign",
      "status":"in_progress" },
   "merged_at":null,
   "merge_comment":"sample"
}
```


#### Get all merge jobs

**GET** `/stacks/branches_queue`

The Get all merge jobs request returns a list of all the recent merge jobs within a specific period.

**Note**: By default, the last**100** merge jobs are returned in the response.

##### Get a Single Merge Job

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
    "queue": [
        {
            "uid": "3ebc12e9-20b6-40d2-8aae-f29877f3a7fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-26T16:31:37.123Z",
            "updated_at": "2023-05-26T16:31:37.123Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "in_progress",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample",
                    "no_revert": false
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "7a75ae8d-3580-48da-93eb-80b9635f6330",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-04T08:39:06.074Z",
            "updated_at": "2023-05-04T08:39:21.413Z",
            "created_by": "bltd14ff1cb3b7ca7ae",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "test",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "test",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": "2023-05-04T08:39:21.413Z",
            "errors": []
        },
        {
            "uid": "185c7583-f811-401a-9278-70682305dd4d",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T14:26:32.918Z",
            "updated_at": "2023-05-03T14:26:48.330Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T14:26:48.330Z",
            "errors": []
        },
        {
            "uid": "38c295a9-f8b9-472e-8b65-74ebc22e5f73",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:14:23.222Z",
            "updated_at": "2023-05-03T06:14:23.296Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "ignore",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": null,
            "errors": [
                "No items available for merge"
            ]
        },
        {
            "uid": "37422e29-5166-433a-95d4-e22f755a7d0c",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:03:58.566Z",
            "updated_at": "2023-05-03T06:04:13.835Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_modified_only_prefer_base",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:04:13.835Z",
            "errors": []
        },
        {
            "uid": "9e9b08ea-f0dc-4352-9495-47e13e89fe69",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:03:30.191Z",
            "updated_at": "2023-05-03T06:03:45.494Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "overwrite_with_compare",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:03:45.494Z",
            "errors": []
        },
        {
            "uid": "185e7178-e8b0-4e59-b7d8-eb1c2062ac04",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:02:42.840Z",
            "updated_at": "2023-05-03T06:02:58.126Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_base",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:02:58.126Z",
            "errors": []
        },
        {
            "uid": "c333e912-9698-4f70-91c9-728ace9e0f25",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:02:26.519Z",
            "updated_at": "2023-05-03T06:02:41.836Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-05-03T06:02:41.836Z",
            "errors": []
        },
        {
            "uid": "cab3e738-32cd-4d23-994c-bc57e43e0430",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T05:53:21.384Z",
            "updated_at": "2023-05-03T05:53:36.871Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-05-03T05:53:36.871Z",
            "errors": []
        },
        {
            "uid": "304116d6-8169-4192-8d3a-31bb27ac85ee",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-21T10:28:01.287Z",
            "updated_at": "2023-04-21T10:28:17.021Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "dev",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "dev",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-04-21T10:28:17.021Z",
            "errors": []
        },
        {
            "uid": "a7f23177-59d4-451a-bda4-e6bbd1e8a88d",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T10:48:44.794Z",
            "updated_at": "2023-04-13T10:48:59.970Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "sample",
                "compare_branch": "dev",
                "status": "complete",
                "configuration": {
                    "base_branch": "sample",
                    "compare_branch": "dev",
                    "default_merge_strategy": "merge_modified_only_prefer_base",
                    "merge_comment": "Sample comment"
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "03f35e8d-059e-44f2-905b-82e7206f8114",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T10:41:03.313Z",
            "updated_at": "2023-04-13T10:41:18.650Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "sample",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "sample",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "300fd68a-e1db-4ab6-94ea-dcf51e4e08b1",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T09:43:17.984Z",
            "updated_at": "2023-04-13T09:43:33.377Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "sample",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "sample",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": [
                {
                    "event": "update",
                    "type": "global_fields",
                    "uid": "sample",
                    "error": "{\"error_message\":\"We're sorry, but something went wrong. We've been notified about this issue and will take a look at it shortly. Please contact support@contentstack.com for assistance.\",\"error_code\":194}"
                }
            ]
        },
        {
            "uid": "a411a7e0-a988-472b-9e59-59a65ddb49fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T09:32:00.911Z",
            "updated_at": "2023-04-13T09:32:16.301Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "dev",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "dev",
                    "default_merge_strategy": "overwrite_with_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": [
                {
                    "event": "delete",
                    "type": "global_fields",
                    "uid": "sample",
                    "error": "{\"error_message\":\"Access denied. You have insufficient permissions to perform this operation.\",\"error_code\":162}"
                }
            ]
        }
    ]
}
```


#### Get single merge job

**GET** `/stacks/branches_queue/your_merge_job_uid`

The Get single merge job request returns the status and configuration details of a particular merge job.

##### URL Parameters

- **merge_job_uid** (required)
  Default: `your_merge_job_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
    "queue": [
        {
            "uid": "3ebc12e9-20b6-40d2-8aae-f29877f3a7fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-26T16:31:37.123Z",
            "updated_at": "2023-05-26T16:31:52.546Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample",
                    "no_revert": false
                }
            },
            "merged_at": "2023-05-26T16:31:52.546Z",
            "errors": []
        }
    ]
}
```


### Aliases

[](../../cs-docs/developers/branches/create-a-branch.md)

An [alias](../developers/apis/content-management-api/branches.md#work-with-aliases) acts as a pointer to a particular branch. You can specify the alias ID in your frontend code to pull content from the target branch associated with an alias.


#### Get All Aliases

#### Get all aliases

**GET** `/stacks/branch_aliases?limit={limit_value}&skip={skip_value}&include_count={boolean_value}`

The Get all aliases request returns comprehensive information of all the aliases available in a particular stack in your account.  
To configure the permissions for your application via OAuth, please include the cm.branch-aliases.management:read scope.

##### Query Parameters

- **limit** (optional)
  Enter the maximum number of branches to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of branches to be skipped from the response body.
  Default: `2`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of branches available in a stack.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "branch_aliases": [
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:16:07.248Z",
            "updated_at": "2021-07-26T10:16:09.536Z",
            "deleted_at": false,
            "alias": "release"
        },
        {
            "uid": "development",
            "source": "main",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:16:07.248Z",
            "updated_at": "2021-07-26T10:16:09.536Z",
            "deleted_at": false,
            "alias": "dev"
        },
        {
            "uid": "main",
            "source": "",
            "created_by": "blta7eaf6883dd73a0b",
            "updated_by": "blta7eaf6883dd73a0b",
            "created_at": "2021-07-26T10:04:20.752Z",
            "updated_at": "2021-07-26T10:04:20.752Z",
            "deleted_at": false,
            "alias": "sample_alias"
        }
    ]
}
```



#### Get a Single Alias

#### Get a single alias

**GET** `/stacks/branch_aliases/{branch_alias_uid}`

The Get a single alias request returns information of a specific alias.  
To configure the permissions for your application via OAuth, please include the cm.branch-aliases.management:read scope.

##### URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias of which you want to retrieve the details. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to retrieve the UID of an alias.
  Default: `your_branch_alias_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "branch_alias": {
        "uid": "dev",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-07-26T10:16:07.248Z",
        "updated_at": "2021-07-26T10:16:09.536Z",
        "deleted_at": false,
        "alias": "sample_alias"
    }
}
```



#### Assign an Alias

#### Assign an alias

**PUT** `/stacks/branch_aliases/{branch_alias_uid}`

The Assign an alias request creates a new alias in a particular stack of your organization. This alias can point to any existing branch (target branch) of your stack.

**Note:** Only stack owners, admins, and developers can assign a new alias to a branch. You must only use the authtoken to assign an alias.

##### URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias you want to assign or update. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to retrieve the UID of an alias.
  Default: `your_branch_alias_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`

##### Sample Request

```json
{
    "branch_alias": {
        "target_branch": "test"
    }
}
```

##### Sample Response

```json
{
    "notice": "Branch alias assigned successfully.",
    "branch_alias": {
        "uid": "test",
        "source": "main",
        "created_by": "blta7eaf6883dd73a0b",
        "updated_by": "blta7eaf6883dd73a0b",
        "created_at": "2021-07-27T12:45:39.690Z",
        "updated_at": "2021-07-27T12:45:40.241Z",
        "deleted_at": false,
        "alias": "sample_alias"
    }
}
```



#### Delete an Alias

#### Delete an alias

**DELETE** `/stacks/branch_aliases/{branch_alias_uid}?force={boolean_value}`

The Delete an alias request deletes an existing alias.

To confirm the deletion of an alias, you need to specify the force=true query parameter.

When executing the API call, in the “URL Parameters” section, provide the UID of your alias.

**Note**: You must only use the authtoken to delete an alias.

##### URL Parameters

- **branch_alias_uid** (required)
  Enter the unique ID of the alias that you want to delete. The UID of an alias is unique across a stack. Execute the [Get all aliases](#get-all-aliases) call to retrieve the UID of an alias.
  Default: `your_branch_alias_uid`

##### Query Parameters

- **force** (required)
  Enter 'true' to force delete an alias.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

##### Sample Response

```json
{
    "notice": "Branch alias deleted successfully."
}
```


### Content Types

[Content type](/docs/developers/create-content-types) defines the structure or schema of a page or a section of your web or mobile property. To create content for your application, you are required to first create a content type, and then create entries using the content type. 

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

**Additional Resource**: To get an idea of building your content type as per webpage’s layout, we recommend you to check out our [Content Modeling](/docs/developers/how-to-guides/content-modeling) guide.


#### Get All Content Types

#### Get all content types

**GET** `/content_types?include_count={boolean_value}&include_global_field_schema={boolean_value}`

The Get all content types call returns comprehensive information of all the content types available in a particular stack in your account.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:readscope.

When executing the API call, you can add queries to extend the functionality of this API call.

**Tip**: If any of your content types contains a Global field and you wish to fetch the content schema of the Global field, then you need to pass the include_global_field_schema:true parameter. This parameter helps return the Global field's schema along with the content type schema.

Under the 'URL Parameters' section, insert a parameter named query and provide a query in JSON format as the value. (To learn more about the queries, refer to the [Queries section of the Content Delivery API doc.](./content-delivery-api.md#queries))

**Note**:

- This API request will return a maximum of 100 content types. To retrieve the next batch of content types, make use of the skip parameter (or refer Pagination for more details).
- Information about content types can be retrieved by all roles except for custom roles where access to certain or all content types is restricted.

##### Query Parameters

- **include_count** (optional)
  Set this to 'true' to include in response the total count of content types available in your stack.
  Default: `false`
- **include_global_field_schema** (optional)
  Set this to 'true' to include in response the details of all the fields within the Global field's schema.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"content_types": [{
			"created_at": "2017-01-09T10:03:25.096Z",
			"updated_at": "2018-02-23T07:34:33.802Z",
			"title": "Product",
			"uid": "product",
			"_version": 1,
			"inbuilt_class": false,
			"schema": [{
					"display_name": "Title",
					"uid": "title",
					"data_type": "text",
					"mandatory": true,
					"unique": true,
					"field_metadata": {
						"_default": true,
						"instruction": "Product Name"
					},
					"multiple": false
				},
				{
					"display_name": "URL",
					"uid": "url",
					"data_type": "text",
					"mandatory": false,
					"field_metadata": {
						"_default": true
					},
					"multiple": false,
					"unique": false
				},
				{
					"data_type": "text",
					"display_name": "Description",
					"uid": "description",
					"field_metadata": {
						"allow_rich_text": true,
						"description": "",
						"multiline": false,
						"rich_text_type": "advanced"
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "number",
					"display_name": "Size (in GB)",
					"uid": "size",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "text",
					"display_name": "Color",
					"uid": "color",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"format": "",
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "file",
					"display_name": "Images",
					"uid": "images",
					"field_metadata": {
						"description": "",
						"rich_text_type": "standard",
						"image": true
					},
					"multiple": true,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "reference",
					"display_name": "Categories",
					"reference_to": "category",
					"field_metadata": {
						"ref_multiple": true
					},
					"uid": "categories",
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "number",
					"display_name": "Price in USD",
					"uid": "price_in_usd",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "reference",
					"display_name": "Brand",
					"reference_to": "brand",
					"field_metadata": {
						"ref_multiple": false
					},
					"uid": "brand",
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "isodate",
					"display_name": "Launch Date",
					"uid": "launch_date",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"multiple": false,
					"mandatory": false,
					"unique": false,
					"endDate": null,
					"startDate": null
				},
				{
					"data_type": "boolean",
					"display_name": "instock",
					"uid": "instock",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "blocks",
					"display_name": "Additional Info",
					"blocks": [{
							"title": "Related Products",
							"uid": "related_products",
							"schema": [{
								"data_type": "reference",
								"display_name": "Products",
								"reference_to": "product",
								"field_metadata": {
									"ref_multiple": true
								},
								"uid": "products",
								"mandatory": false,
								"multiple": false,
								"unique": false
							}]
						},
						{
							"title": "Rating",
							"uid": "rating",
							"schema": [{
								"data_type": "number",
								"display_name": "Stars",
								"display_type": "dropdown",
								"enum": {
									"advanced": false,
									"choices": [{
											"value": 1
										},
										{
											"value": 2
										},
										{
											"value": 3
										},
										{
											"value": 4
										},
										{
											"value": 5
										}
									]
								},
								"multiple": false,
								"uid": "stars",
								"field_metadata": {
									"description": "",
									"default_value": ""
								},
								"min_instance": null,
								"max_instance": null,
								"mandatory": false,
								"unique": false
							}]
						},
						{
							"title": "Deals",
							"uid": "deals",
							"schema": [{
									"data_type": "text",
									"display_name": "Deal Name",
									"display_type": "dropdown",
									"enum": {
										"advanced": false,
										"choices": [{
												"value": "Summer Deal"
											},
											{
												"value": "Independence Day Deal"
											},
											{
												"value": "Black Friday Deal"
											},
											{
												"value": "Christmas Deal"
											},
											{
												"value": "Deals of the Day"
											}
										]
									},
									"multiple": false,
									"uid": "deal_name",
									"field_metadata": {
										"description": "",
										"default_value": ""
									},
									"min_instance": null,
									"max_instance": null,
									"mandatory": false,
									"unique": false
								},
								{
									"data_type": "text",
									"display_name": "Deal Details",
									"uid": "deal_details",
									"field_metadata": {
										"description": "",
										"default_value": "",
										"multiline": true
									},
									"format": "",
									"error_messages": {
										"format": ""
									},
									"multiple": false,
									"mandatory": false,
									"unique": false
								}
							]
						}
					],
					"multiple": true,
					"uid": "additional_info",
					"field_metadata": {},
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "group",
					"display_name": "Bank Offers",
					"field_metadata": {},
					"schema": [{
							"data_type": "reference",
							"display_name": "Bank",
							"reference_to": "bank",
							"field_metadata": {
								"ref_multiple": false
							},
							"uid": "bank",
							"multiple": false,
							"mandatory": false,
							"unique": false
						},
						{
							"data_type": "text",
							"display_name": "Card Type",
							"display_type": "dropdown",
							"enum": {
								"advanced": false,
								"choices": [{
										"value": "Credit Card"
									},
									{
										"value": "Debit Card"
									}
								]
							},
							"multiple": true,
							"uid": "card_type",
							"field_metadata": {
								"description": "",
								"default_value": ""
							},
							"mandatory": false,
							"unique": false
						},
						{
							"data_type": "number",
							"display_name": "Discount In Percentage",
							"uid": "discount_in_percentage",
							"field_metadata": {
								"description": "",
								"default_value": ""
							},
							"multiple": false,
							"mandatory": false,
							"unique": false
						}
					],
					"uid": "bank_offers",
					"multiple": true,
					"mandatory": false,
					"unique": false
				}
			],
			"last_activity": {
				"environments": [{
					"uid": "bltf078df13a2193938",
					"details": [{
							"locale": "en-us",
							"time": "2019-03-28T13:08:48.487Z"
						},
						{
							"locale": "fr-fr",
							"time": "2019-02-06T06:35:09.156Z"
						},
						{
							"locale": "ja-jp",
							"time": "2019-02-06T06:35:09.156Z"
						}
					]
				}]
			},
			"maintain_revisions": true,
			"description": "",
			"options": {
				"is_page": true,
				"singleton": false,
				"title": "title",
				"sub_title": [],
				"url_pattern": "/:title",
				"url_prefix": "/mobiles/"
			},
			"abilities": {
				"get_one_object": true,
				"get_all_objects": true,
				"create_object": true,
				"update_object": true,
				"delete_object": true,
				"delete_all_objects": true
			},
			"DEFAULT_ACL": {
				"others": {
					"read": false,
					"create": false
				},
				"users": [{
					"uid": "bltf770cd8b4d387a19",
					"read": true,
					"sub_acl": {
						"read": true
					}
				}]
			},
			"SYS_ACL": {
				"others": {
					"read": false,
					"create": false,
					"update": false,
					"delete": false,
					"sub_acl": {
						"read": false,
						"create": false,
						"update": false,
						"delete": false,
						"publish": false
					}
				},
				"roles": [{
						"uid": "blt83a787d5fd1d32a3",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						},
						"update": true,
						"delete": true
					},
					{
						"uid": "blta62a52cdea3c4641",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						}
					},
					{
						"uid": "blt3595d257a5d36730",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						},
						"update": true,
						"delete": true
					}
				]
			}
		},
		{
			"created_at": "2017-01-09T10:02:47.685Z",
			"updated_at": "2019-03-27T10:12:48.323Z",
			"title": "Category",
			"uid": "category",
			"_version": 3,
			"inbuilt_class": false,
			"schema": [{
					"display_name": "Title",
					"uid": "title",
					"data_type": "text",
					"mandatory": true,
					"unique": true,
					"field_metadata": {
						"_default": true,
						"instruction": "Category Name"
					},
					"multiple": false
				},
				{
					"data_type": "text",
					"display_name": "Description",
					"uid": "description",
					"field_metadata": {
						"allow_rich_text": true,
						"description": "",
						"multiline": false,
						"rich_text_type": "advanced",
						"version": 1
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				}
			],
			"last_activity": {
				"environments": [{
					"uid": "bltf078df13a2193938",
					"details": [{
							"locale": "en-us",
							"time": "2019-03-27T09:10:42.566Z"
						},
						{
							"locale": "fr-fr",
							"time": "2018-02-23T07:51:24.732Z"
						},
						{
							"locale": "ja-jp",
							"time": "2018-02-23T07:51:24.732Z"
						}
					]
				}]
			},
			"maintain_revisions": true,
			"description": "",
			"options": {
				"is_page": false,
				"singleton": false,
				"title": "title",
				"sub_title": []
			},
			"abilities": {
				"get_one_object": true,
				"get_all_objects": true,
				"create_object": true,
				"update_object": true,
				"delete_object": true,
				"delete_all_objects": true
			},
			"DEFAULT_ACL": {
				"others": {
					"read": false,
					"create": false
				},
				"users": [{
					"uid": "bltf770cd8b4d387a19",
					"read": true,
					"sub_acl": {
						"read": true
					}
				}]
			},
			"SYS_ACL": {
				"roles": [{
						"uid": "blt83a787d5fd1d32a3",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						},
						"update": true,
						"delete": true
					},
					{
						"uid": "blta62a52cdea3c4641",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						}
					},
					{
						"uid": "blt3595d257a5d36730",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						},
						"update": true,
						"delete": true
					},
					{
						"uid": "blt6a44259832d467a1",
						"read": true,
						"sub_acl": {
							"read": true,
							"delete": true
						}
					}
				],
				"others": {
					"read": false,
					"create": false,
					"update": false,
					"delete": false,
					"sub_acl": {
						"read": false,
						"create": false,
						"update": false,
						"delete": false,
						"publish": false
					}
				}
			}
		},
		{
			"created_at": "2017-01-09T09:59:48.324Z",
			"updated_at": "2017-01-10T09:19:55.274Z",
			"title": "Brand",
			"uid": "brand",
			"_version": 1,
			"inbuilt_class": false,
			"schema": [{
					"display_name": "Title",
					"uid": "title",
					"data_type": "text",
					"mandatory": true,
					"unique": true,
					"field_metadata": {
						"_default": true,
						"description": "",
						"instruction": "Company Name"
					},
					"multiple": false
				},
				{
					"data_type": "file",
					"display_name": "Logo",
					"uid": "logo",
					"field_metadata": {
						"description": "",
						"rich_text_type": "standard"
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "text",
					"display_name": "Description",
					"uid": "description",
					"field_metadata": {
						"allow_rich_text": true,
						"description": "",
						"multiline": false,
						"rich_text_type": "advanced"
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "text",
					"display_name": "Website",
					"uid": "website",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"format": "",
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "text",
					"display_name": "Email",
					"uid": "email",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"format": "",
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "number",
					"display_name": "Phone",
					"uid": "phone",
					"field_metadata": {
						"description": "",
						"default_value": ""
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				},
				{
					"data_type": "group",
					"display_name": "Head Office Address",
					"field_metadata": {},
					"schema": [{
							"data_type": "text",
							"display_name": "Street",
							"uid": "street",
							"field_metadata": {
								"description": "",
								"default_value": ""
							},
							"format": "",
							"multiple": false,
							"mandatory": false,
							"unique": false
						},
						{
							"data_type": "text",
							"display_name": "City",
							"uid": "city",
							"field_metadata": {
								"description": "",
								"default_value": ""
							},
							"format": "",
							"multiple": false,
							"mandatory": false,
							"unique": false
						},
						{
							"data_type": "text",
							"display_name": "Country",
							"uid": "country",
							"field_metadata": {
								"description": "",
								"default_value": ""
							},
							"format": "",
							"multiple": false,
							"mandatory": false,
							"unique": false
						}
					],
					"uid": "head_office_address",
					"multiple": false,
					"mandatory": false,
					"unique": false
				}
			],
			"last_activity": {
				"environments": [{
					"uid": "bltf078df13a2193938",
					"details": [{
							"locale": "en-us",
							"time": "2018-02-23T07:51:32.188Z"
						},
						{
							"locale": "fr-fr",
							"time": "2018-02-23T07:51:32.188Z"
						},
						{
							"locale": "ja-jp",
							"time": "2018-02-23T07:51:32.188Z"
						}
					]
				}]
			},
			"maintain_revisions": true,
			"description": "",
			"options": {
				"is_page": false,
				"singleton": false,
				"title": "title",
				"sub_title": []
			},
			"abilities": {
				"get_one_object": true,
				"get_all_objects": true,
				"create_object": true,
				"update_object": true,
				"delete_object": true,
				"delete_all_objects": true
			},
			"DEFAULT_ACL": {
				"others": {
					"read": false,
					"create": false
				},
				"users": [{
					"uid": "bltf770cd8b4d387a19",
					"read": true,
					"sub_acl": {
						"read": true
					}
				}]
			},
			"SYS_ACL": {
				"roles": [{
						"uid": "blt83a787d5fd1d32a3",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						},
						"update": true,
						"delete": true
					},
					{
						"uid": "blta62a52cdea3c4641",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						}
					},
					{
						"uid": "blt3595d257a5d36730",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						},
						"update": true,
						"delete": true
					},
					{
						"uid": "blt6a44259832d467a1",
						"read": true,
						"sub_acl": {
							"read": true,
							"delete": true
						}
					}
				],
				"others": {
					"read": false,
					"create": false,
					"update": false,
					"delete": false,
					"sub_acl": {
						"read": false,
						"create": false,
						"update": false,
						"delete": false,
						"publish": false
					}
				}
			}
		},
		{
			"created_at": "2018-02-23T07:13:53.667Z",
			"updated_at": "2018-02-23T07:13:53.717Z",
			"title": "Bank",
			"uid": "bank",
			"_version": 1,
			"inbuilt_class": false,
			"schema": [{
					"display_name": "Title",
					"uid": "title",
					"data_type": "text",
					"mandatory": true,
					"unique": true,
					"field_metadata": {
						"_default": true
					},
					"multiple": false
				},
				{
					"data_type": "file",
					"display_name": "Logo",
					"uid": "logo",
					"extensions": [],
					"field_metadata": {
						"description": "",
						"rich_text_type": "standard"
					},
					"multiple": false,
					"mandatory": false,
					"unique": false
				}
			],
			"last_activity": {
				"environments": [{
					"uid": "bltf078df13a2193938",
					"details": [{
							"locale": "en-us",
							"time": "2018-02-23T07:17:06.731Z"
						},
						{
							"locale": "fr-fr",
							"time": "2018-02-23T07:17:06.731Z"
						},
						{
							"locale": "ja-jp",
							"time": "2018-02-23T07:17:06.731Z"
						}
					]
				}]
			},
			"maintain_revisions": true,
			"description": "",
			"options": {
				"is_page": false,
				"singleton": false,
				"title": "title",
				"sub_title": []
			},
			"abilities": {
				"get_one_object": true,
				"get_all_objects": true,
				"create_object": true,
				"update_object": true,
				"delete_object": true,
				"delete_all_objects": true
			},
			"DEFAULT_ACL": {
				"others": {
					"read": false,
					"create": false
				},
				"users": [{
					"uid": "bltf770cd8b4d387a19",
					"read": true,
					"sub_acl": {
						"read": true
					}
				}]
			},
			"SYS_ACL": {
				"others": {
					"read": false,
					"create": false,
					"update": false,
					"delete": false,
					"sub_acl": {
						"read": false,
						"create": false,
						"update": false,
						"delete": false,
						"publish": false
					}
				},
				"roles": [{
						"uid": "blt83a787d5fd1d32a3",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						},
						"update": true,
						"delete": true
					},
					{
						"uid": "blta62a52cdea3c4641",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						}
					},
					{
						"uid": "blt3595d257a5d36730",
						"read": true,
						"sub_acl": {
							"create": true,
							"read": true,
							"update": true,
							"delete": true,
							"publish": true
						},
						"update": true,
						"delete": true
					}
				]
			}
		}
	]
}
```



#### Get Single Content Type

#### Get a single content type

**GET** `/content_types/{content_type_uid}?version={content_type_version}`

The Get a single content type call returns information of a specific content type.

Enter the version of the content type of which you want to retrieve the details as a query parameter. If no version is specified, you will get the latest version of the content type.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:read scope.

**Note:** The schema of the content type returned will depend on the provided version. If no version is specified, you will get the latest version of the content type.

To learn more about the queries, refer to the [Queries section of the Content Delivery API doc.](./content-delivery-api.md#queries)

**Tip**: If any of your content types contains a Global field and you wish to fetch the content schema of the Global field, then you need to pass theinclude_global_field_schema:true parameter. This parameter helps return the Global field's schema along with the content type schema.

**Note**: Information about content types can be retrieved by all roles except for custom roles where access to certain or all content types is restricted.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the details. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `product`

##### Query Parameters

- **version** (optional)
  Enter the version of the content type of which you want to retrieve the details. If no version is specified, you will get the latest version of the content type.
  Default: `1`
- **include_global_field_schema** (optional)
  Set this to 'true' to include in response the details of all the fields within the Global field's schema.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"content_type": {
		"created_at": "2017-01-09T10:03:25.096Z",
		"updated_at": "2018-02-23T07:34:33.802Z",
		"title": "Product",
		"uid": "product",
		"_version": 1,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"mandatory": true,
				"unique": true,
				"field_metadata": {
					"_default": true,
					"instruction": "Product Name"
				},
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"mandatory": false,
				"field_metadata": {
					"_default": true
				},
				"multiple": false,
				"unique": false
			},
			{
				"data_type": "text",
				"display_name": "Description",
				"uid": "description",
				"field_metadata": {
					"allow_rich_text": true,
					"description": "",
					"multiline": false,
					"rich_text_type": "advanced"
				},
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "number",
				"display_name": "Size (in GB)",
				"uid": "size",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "text",
				"display_name": "Color",
				"uid": "color",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"format": "",
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "file",
				"display_name": "Images",
				"uid": "images",
				"field_metadata": {
					"description": "",
					"rich_text_type": "standard",
					"image": true
				},
				"multiple": true,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "reference",
				"display_name": "Categories",
				"reference_to": "category",
				"field_metadata": {
					"ref_multiple": true
				},
				"uid": "categories",
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "number",
				"display_name": "Price in USD",
				"uid": "price_in_usd",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "reference",
				"display_name": "Brand",
				"reference_to": "brand",
				"field_metadata": {
					"ref_multiple": false
				},
				"uid": "brand",
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "isodate",
				"display_name": "Launch Date",
				"uid": "launch_date",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"multiple": false,
				"mandatory": false,
				"unique": false,
				"endDate": null,
				"startDate": null
			},
			{
				"data_type": "boolean",
				"display_name": "instock",
				"uid": "instock",
				"field_metadata": {
					"description": "",
					"default_value": ""
				},
				"multiple": false,
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "blocks",
				"display_name": "Additional Info",
				"blocks": [{
						"title": "Related Products",
						"uid": "related_products",
						"schema": [{
							"data_type": "reference",
							"display_name": "Products",
							"reference_to": "product",
							"field_metadata": {
								"ref_multiple": true
							},
							"uid": "products",
							"mandatory": false,
							"multiple": false,
							"unique": false
						}]
					},
					{
						"title": "Rating",
						"uid": "rating",
						"schema": [{
							"data_type": "number",
							"display_name": "Stars",
							"display_type": "dropdown",
							"enum": {
								"advanced": false,
								"choices": [{
										"value": 1
									},
									{
										"value": 2
									},
									{
										"value": 3
									},
									{
										"value": 4
									},
									{
										"value": 5
									}
								]
							},
							"multiple": false,
							"uid": "stars",
							"field_metadata": {
								"description": "",
								"default_value": ""
							},
							"min_instance": null,
							"max_instance": null,
							"mandatory": false,
							"unique": false
						}]
					},
					{
						"title": "Deals",
						"uid": "deals",
						"schema": [{
								"data_type": "text",
								"display_name": "Deal Name",
								"display_type": "dropdown",
								"enum": {
									"advanced": false,
									"choices": [{
											"value": "Summer Deal"
										},
										{
											"value": "Independence Day Deal"
										},
										{
											"value": "Black Friday Deal"
										},
										{
											"value": "Christmas Deal"
										},
										{
											"value": "Deals of the Day"
										}
									]
								},
								"multiple": false,
								"uid": "deal_name",
								"field_metadata": {
									"description": "",
									"default_value": ""
								},
								"min_instance": null,
								"max_instance": null,
								"mandatory": false,
								"unique": false
							},
							{
								"data_type": "text",
								"display_name": "Deal Details",
								"uid": "deal_details",
								"field_metadata": {
									"description": "",
									"default_value": "",
									"multiline": true
								},
								"format": "",
								"error_messages": {
									"format": ""
								},
								"multiple": false,
								"mandatory": false,
								"unique": false
							}
						]
					}
				],
				"multiple": true,
				"uid": "additional_info",
				"field_metadata": {},
				"mandatory": false,
				"unique": false
			},
			{
				"data_type": "group",
				"display_name": "Bank Offers",
				"field_metadata": {},
				"schema": [{
						"data_type": "reference",
						"display_name": "Bank",
						"reference_to": "bank",
						"field_metadata": {
							"ref_multiple": false
						},
						"uid": "bank",
						"multiple": false,
						"mandatory": false,
						"unique": false
					},
					{
						"data_type": "text",
						"display_name": "Card Type",
						"display_type": "dropdown",
						"enum": {
							"advanced": false,
							"choices": [{
									"value": "Credit Card"
								},
								{
									"value": "Debit Card"
								}
							]
						},
						"multiple": true,
						"uid": "card_type",
						"field_metadata": {
							"description": "",
							"default_value": ""
						},
						"mandatory": false,
						"unique": false
					},
					{
						"data_type": "number",
						"display_name": "Discount In Percentage",
						"uid": "discount_in_percentage",
						"field_metadata": {
							"description": "",
							"default_value": ""
						},
						"multiple": false,
						"mandatory": false,
						"unique": false
					}
				],
				"uid": "bank_offers",
				"multiple": true,
				"mandatory": false,
				"unique": false
			}
		],
		"last_activity": {
			"environments": [{
				"uid": "bltf078df13a2193938",
				"details": [{
						"locale": "en-us",
						"time": "2019-03-28T13:08:48.487Z"
					},
					{
						"locale": "fr-fr",
						"time": "2019-02-06T06:35:09.156Z"
					},
					{
						"locale": "ja-jp",
						"time": "2019-02-06T06:35:09.156Z"
					}
				]
			}]
		},
		"maintain_revisions": true,
		"description": "",
		"options": {
			"is_page": true,
			"singleton": false,
			"title": "title",
			"sub_title": [],
			"url_pattern": "/:title",
			"url_prefix": "/mobiles/"
		},
		"abilities": {
			"get_one_object": true,
			"get_all_objects": true,
			"create_object": true,
			"update_object": true,
			"delete_object": true,
			"delete_all_objects": true
		},
		"DEFAULT_ACL": {
			"others": {
				"read": false,
				"create": false
			},
			"users": [{
				"uid": "bltf770cd8b4d387a19",
				"read": true,
				"sub_acl": {
					"read": true
				}
			}]
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"create": false,
				"update": false,
				"delete": false,
				"sub_acl": {
					"read": false,
					"create": false,
					"update": false,
					"delete": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "blt83a787d5fd1d32a3",
					"read": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true,
						"publish": true
					},
					"update": true,
					"delete": true
				},
				{
					"uid": "blta62a52cdea3c4641",
					"read": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true,
						"publish": true
					}
				},
				{
					"uid": "blt3595d257a5d36730",
					"read": true,
					"sub_acl": {
						"create": true,
						"read": true,
						"update": true,
						"delete": true,
						"publish": true
					},
					"update": true,
					"delete": true
				}
			]
		}
	}
}
```



#### Create Content Type

#### Create a content type

**POST** `/content_types`

The Create a content type call creates a new content type in a particular stack of your Contentstack account.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the complete schema of the content type. You can refer the [JSON schema for creating a content type](../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md) document to know how you can add fields into your content type through API.

To mark a field as non-unique, you need to set the unique parameter to false. For example, to remove the unique constraint on the default 'title' field, you need to update the JSON schema of the title field as follows:

```
{
    "display_name": "Title",
    "uid": "title",
    "data_type": "text",
    "mandatory": true,
    "unique": false,
    "field_metadata": {
      "_default": true
    },
    "multiple": false
}
```

##### Create Content Type with Select Field

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API Key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"content_type": {
		"title": "Page",
		"uid": "page",
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Content Type created successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			}
		],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/",
			"singleton": false
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"roles": [],
			"users": [{
				"uid": "abcdef1234567890",
				"read": true,
				"create": false
			}],
			"others": {
				"read": false,
				"create": false
			}
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false,
				"sub_acl": {
					"read": false,
					"update": false,
					"delete": false,
					"create": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "abcd29513cc6e50299",
					"read": true,
					"update": true,
					"delete": true,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				},
				{
					"uid": "apqr13cc6e506e50299",
					"read": true,
					"update": false,
					"delete": false,
					"create": false,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				}
			]
		}
	}
}
```


#### Create content type with select field

**POST** `/content_types`

The Create content type with select field request allows you to add a Select field while creating a content type. You can add choices within the Select field either in the form of single values or key-value pairs.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

To add single-value choices, under enum, set the advanced parameter to false and define the choice values under the choices parameter.

The schema of the **Select** field will look as follows:

```
"enum":{
    "advanced":false,
    "choices":[
        {
            "value":"1"
        },
        {
            "value":"2"
        },
        {
            "value":"3"
        }
    ]
},
```

  

To add key-value pairs as choices, under enum, set the advanced parameter to true and define the key-value choices under the choices parameter.

The schema of the **Select** field that contains key-value pairs will look as follows:

```
"enum":{
    "advanced":true,
    "choices":[
        {
            "key":"New York",
            "value":"NY"
        },
        {
            "key":"India",
            "value":"IN"
        },
        {
            "key":"Australia",
            "value":"AUS"
        }
    ]
},
```

  

**Additional Resource:** In the “Body” section, you need to provide the updated schema of your content type with the select field schema. You can refer to the [Select field JSON schema](../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md#select) document to know how you can add/update schema for the Select field in your content type through API.

##### Create Content Type with JSON RTE

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "content_type":{
        "title":"Page",
        "uid":"page",
        "schema":[
            {
                "display_name":"Title",
                "uid":"title",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "mandatory":true,
                "multiple":false
            },
            {
                "display_name":"URL",
                "uid":"url",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "multiple":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample One",
                "display_type":"dropdown",
                "enum":{
                    "advanced":false,
                    "choices":[
                        {
                            "value":"1"
                        },
                        {
                            "value":"2"
                        },
                        {
                            "value":"3"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select_sample_one",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample Two",
                "display_type":"dropdown",
                "enum":{
                    "advanced":true,
                    "choices":[
                        {
                            "key":"New York",
                            "value":"NY"
                        },
                        {
                            "key":"India",
                            "value":"IN"
                        },
                        {
                            "key":"Australia",
                            "value":"AUS"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select_sample_two",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            }
        ],
        "options":{
            "title":"title",
            "publishable":true,
            "is_page":true,
            "singleton":false,
            "sub_title":[
                "url"
            ],
            "url_pattern":"/:title",
            "url_prefix":"/"
        }
    }
}
```

##### Sample Response

```json
{
    "notice":"Content Type created successfully.",
    "content_type":{
        "created_at":"2015-03-13T07:37:03.494Z",
        "updated_at":"2015-03-13T07:37:03.494Z",
        "title":"Page",
        "uid":"page",
        "inbuilt_class":false,
        "schema":[
            {
                "display_name":"Title",
                "uid":"title",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "mandatory":true,
                "multiple":false
            },
            {
                "display_name":"URL",
                "uid":"url",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "mandatory":true,
                "multiple":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample One",
                "display_type":"dropdown",
                "enum":{
                    "advanced":false,
                    "choices":[
                        {
                            "value":"1"
                        },
                        {
                            "value":"2"
                        },
                        {
                            "value":"3"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            },
            {
                "data_type":"text",
                "display_name":"Select Sample Two",
                "display_type":"dropdown",
                "enum":{
                    "advanced":true,
                    "choices":[
                        {
                            "key":"New York",
                            "value":"NY"
                        },
                        {
                            "key":"India",
                            "value":"IN"
                        },
                        {
                            "key":"Australia",
                            "value":"AUS"
                        }
                    ]
                },
                "multiple":true,
                "uid":"select",
                "field_metadata":{
                    "description":"",
                    "default_value":""
                },
                "mandatory":false,
                "unique":false
            }
        ],
        "last_activity":[
            
        ],
        "maintain_revisions":true,
        "description":"",
        "options":{
            "title":"title",
            "publishable":true,
            "is_page":true,
            "sub_title":[
                "url"
            ],
            "url_pattern":"/:title",
            "url_prefix":"/",
            "singleton":false
        },
        "abilities":{
            
        },
        "DEFAULT_ACL":{
            "roles":[
                
            ],
            "users":[
                {
                    "uid":"abcdef1234567890",
                    "read":true,
                    "create":false
                }
            ],
            "others":{
                "read":false,
                "create":false
            }
        },
        "SYS_ACL":{
            "others":{
                "read":false,
                "update":false,
                "delete":false,
                "create":false,
                "publish":false,
                "sub_acl":{
                    "read":false,
                    "update":false,
                    "delete":false,
                    "create":false,
                    "publish":false
                }
            },
            "roles":[
                {
                    "uid":"abcd29513cc6e50299",
                    "read":true,
                    "update":true,
                    "delete":true,
                    "sub_acl":{
                        "read":true,
                        "update":true,
                        "delete":true,
                        "create":true,
                        "publish":true
                    }
                },
                {
                    "uid":"apqr13cc6e506e50299",
                    "read":true,
                    "update":false,
                    "delete":false,
                    "create":false,
                    "sub_acl":{
                        "read":true,
                        "update":true,
                        "delete":true,
                        "create":true,
                        "publish":true
                    }
                }
            ]
        }
    }
}
```


#### Create content type with JSON RTE

**POST** `/content_types`

The Create content type with JSON RTE request shows you how to add a JSON RTE field while creating a content type.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the complete schema of the content type with the JSON RTE schema as follows. You can find more details in the [JSON schema of the JSON RTE](../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md#json-rich-text-editor) document.

```
{
  "data_type":"json",
  "display_name":"JSON RTE",
  "uid":"json_rte",
  "field_metadata":{
    "allow_json_rte":true,
    "rich_text_type":"advanced",
    "description":"",
    "default_value":""
  },
  "reference_to":[
    "content_type_uid"
  ],
  "non_localizable":false,
  "multiple":false,
  "mandatory":false,
  "unique":false
}
```

Under the reference_to parameter, mention the UIDs of the content types whose entries you wish to embed within the JSON RTE field.

##### Create content type with custom asset field

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "content_type":{
    "title":"JSON test",
    "uid":"json_test",
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "mandatory":true,
        "unique":true,
        "field_metadata":{
          "_default":true
        },
        "non_localizable":false,
        "multiple":false
      },
      {
        "display_name":"URL",
        "uid":"url",
        "data_type":"text",
        "mandatory":false,
        "field_metadata":{
          "_default":true
        },
        "non_localizable":false,
        "multiple":false,
        "unique":false
      },
      {
        "data_type":"json",
        "display_name":"JSON RTE",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "description":"",
          "default_value":""
        },
        "reference_to":[
          "blog_posts"
        ],
        "non_localizable":false,
        "multiple":false,
        "mandatory":false,
        "unique":false
      }
    ],
    "options":{
      "is_page":true,
      "singleton":false,
      "title":"title",
      "sub_title":[
        
      ],
      "url_pattern":"/:title",
      "url_prefix":"/"
    }
  }
}
```

##### Sample Response

```json
{
    "notice": "Content Type created successfully.",
    "content_type": {
        "created_at": "2021-07-20T18:15:37.107Z",
        "updated_at": "2021-07-20T18:15:37.107Z",
        "title": "JSON test",
        "uid": "json_test",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Title",
                "uid": "title",
                "data_type": "text",
                "mandatory": true,
                "unique": true,
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "non_localizable": false,
                "multiple": false
            },
            {
                "display_name": "URL",
                "uid": "url",
                "data_type": "text",
                "mandatory": false,
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "non_localizable": false,
                "multiple": false,
                "unique": false
            },
            {
                "data_type": "json",
                "display_name": "JSON RTE",
                "uid": "json_rte",
                "field_metadata": {
                    "allow_json_rte": true,
                    "description": "",
                    "default_value": ""
                },
                "reference_to": [
                    "blog_posts"
                ],
                "non_localizable": false,
                "multiple": false,
                "mandatory": false,
                "unique": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": "",
        "DEFAULT_ACL": {
            "others": {
                "read": false,
                "create": false
            },
            "users": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true
                    },
                    "uid": "blt119d2427a94457f9"
                }
            ],
            "management_token": {
                "read": true
            }
        },
        "SYS_ACL": {
            "roles": [],
            "others": {
                "read": false,
                "create": false,
                "update": false,
                "delete": false,
                "sub_acl": {
                    "read": false,
                    "create": false,
                    "update": false,
                    "delete": false,
                    "publish": false
                }
            }
        },
        "options": {
            "is_page": true,
            "singleton": false,
            "title": "title",
            "sub_title": [],
            "url_pattern": "/:title",
            "url_prefix": "/"
        },
        "abilities": {
            "get_one_object": true,
            "get_all_objects": true,
            "create_object": true,
            "update_object": true,
            "delete_object": true,
            "delete_all_objects": true
        }
    }
}
```


#### Create content type with custom asset field

**POST** `/content_types`

The Create content type with custom asset field request is used to create a content type with a custom field that accepts data of type asset.

##### Create content type with taxonomy

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Request

```json
{
  "content_type":{
    "title":"Sample CT with Custom Asset Field",
    "uid":"customassetfieldct",
    "_version":3,
    "inbuilt_class":false,
    "schema":[
      {
        "data_type":"text",
        "display_name":"Title",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "uid":"title",
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"Asset Field",
        "extension_uid":"bltbf4845ca37e6b6b9",
        "field_metadata":{
          "extension":true,
          "is_asset":true
        },
        "uid":"asset_field",
        "mandatory":false,
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "config":{},
        "data_type":"json",
        "reference_to": [
           "sys_assets"
        ]

      }
    ],
    "options":{
      "is_page":false,
      "singleton":false,
      "sub_title":[
        
      ],
      "title":"title"
    }
  }
}
```

##### Sample Response

```json
{
  "notice":"Content Type created successfully.",
  "content_type":{
    "created_at":"2022-02-23T19:11:05.596Z",
    "updated_at":"2022-02-23T19:11:05.596Z",
    "title":"Sample CT with Custom Asset Field",
    "uid":"customassetfieldct",
    "_version":1,
    "inbuilt_class":false,
    "schema":[
      {
        "data_type":"text",
        "display_name":"Title",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "uid":"title",
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"Asset Field",
        "extension_uid":"bltbf4845ca37e6b6b9",
        "field_metadata":{
          "extension":true,
          "is_asset":true
        },
        "uid":"asset_field",
        "mandatory":false,
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "config":{
          
        },
        "data_type":"json"
      }
    ],
    "last_activity":{
      
    },
    "maintain_revisions":true,
    "description":"",
    "DEFAULT_ACL":{
      "others":{
        "read":false,
        "create":false
      },
      "users":[
        {
          "read":true,
          "sub_acl":{
            "read":true
          },
          "uid":"blt65eb8e54cb105da1"
        }
      ],
      "management_token":{
        "read":true
      }
    },
    "SYS_ACL":{
      "roles":[
        
      ],
      "others":{
        "read":false,
        "create":false,
        "update":false,
        "delete":false,
        "sub_acl":{
          "read":false,
          "create":false,
          "update":false,
          "delete":false,
          "publish":false
        }
      }
    },
    "options":{
      "is_page":false,
      "singleton":false,
      "sub_title":[
        
      ],
      "title":"title"
    },
    "abilities":{
      "get_one_object":true,
      "get_all_objects":true,
      "create_object":true,
      "update_object":true,
      "delete_object":true,
      "delete_all_objects":true
    }
  }
}
```


#### Create content type with taxonomy

**POST** `/content_types`

The Create content type with taxonomy request shows you how to add a taxonomy field while creating a content type.

In the “Body” section, you need to provide the complete schema of the content type with the Taxonomy schema as follows:

```
{
   "uid":"taxonomies",
   "taxonomies":[
      {
         "taxonomy_uid":"taxonomy_1",
         "max_terms":5,
         "mandatory":true,
         "non_localizable":false
      },
      {
         "taxonomy_uid":"taxonomy_2",
         "max_terms":10,
         "mandatory":false,
         "non_localizable":false
      }
   ],
   "multiple":true
}
```

##### Headers

- **api_key** (required)
  Enter the API Key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Default: `your_management_token`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
    "content_type": {
        "title": "Products",
        "uid": "products",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Title",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "mandatory": true,
                "uid": "title",
                "unique": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "data_type": "taxonomy",
                "display_name": "Taxonomy",
                "uid": "taxonomies",
                "taxonomies": [
                    {
                        "taxonomy_uid": "sample_one",
                        "max_terms": 5,
                        "mandatory": true,
                        "non_localizable": false
                    },
                    {
                        "taxonomy_uid": "sample_two",
                        "max_terms": 10,
                        "mandatory": true,
                        "non_localizable": false
                    }
                ],
                "field_metadata": {
                    "description": "",
                    "default_value": ""
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": true,
                "non_localizable": false,
                "unique": false
            }
        ]
        },
        "options": {
            "is_page": false,
            "singleton": true,
            "sub_title": [],
            "title": "title"
        }
    }
```

##### Sample Response

```json
{
    "notice": "Content Type created successfully.",
    "content_type": {
        "created_at": "2023-11-20T09:54:01.988Z",
        "updated_at": "2023-11-20T09:54:01.988Z",
        "title": "Products",
        "uid": "products",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "data_type": "text",
                "display_name": "Title",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "mandatory": true,
                "uid": "title",
                "unique": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "data_type": "taxonomy",
                "display_name": "Taxonomy",
                "uid": "taxonomies",
                "taxonomies": [
                    {
                        "taxonomy_uid": "sample_one",
                        "max_terms": 5,
                        "mandatory": true,
                        "non_localizable": false
                    },
                    {
                        "taxonomy_uid": "sample_two",
                        "max_terms": 10,
                        "mandatory": true,
                        "non_localizable": false
                    }
                ],
                "field_metadata": {
                    "description": "",
                    "default_value": ""
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": true,
                "non_localizable": false,
                "unique": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": "",
        "DEFAULT_ACL": {
            "others": {
                "read": false,
                "create": false
            },
            "users": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true
                    },
                    "uid": "blt320416c2d73b856a"
                }
            ],
            "management_token": {
                "read": true
            }
        },
        "SYS_ACL": {
            "roles": [],
            "others": {
                "read": false,
                "create": false,
                "update": false,
                "delete": false,
                "sub_acl": {
                    "read": false,
                    "create": false,
                    "update": false,
                    "delete": false,
                    "publish": false
                }
            }
        },
        "options": {
            "title": "title",
            "is_page": false,
            "singleton": false
        },
        "abilities": {
            "get_one_object": true,
            "get_all_objects": true,
            "create_object": true,
            "update_object": true,
            "delete_object": true,
            "delete_all_objects": true
        }
    }
}
```



#### Update Content Type

#### Update Content Type

**PUT** `/content_types/{content_type_uid}`

The Update Content Type call is used to update the schema of an existing content type.

**Note:** Whenever you update a content type, it will auto-increment the content type version.

When executing the API call, in the “URL Parameters” section, provide the uid of your content type.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the updated schema of your content type. You can refer the [JSON schema for creating a content type](../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md) document to know how you can add/update fields in your content type through API.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to update. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"content_type": {
		"title": "Page",
		"uid": "page",
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Content Type updated successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"_version": 2,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "Reference",
				"uid": "reference",
				"data_type": "reference",
				"reference_to": ["abc", "def"],
				"field_metadata": {
					"ref_multiple_content_types": true,
					"ref_multiple": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			}
		],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/",
			"singleton": false
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"roles": [],
			"users": [{
				"uid": "abcdef1234567890",
				"read": true,
				"create": false
			}],
			"others": {
				"read": false,
				"create": false
			}
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false,
				"sub_acl": {
					"read": false,
					"update": false,
					"delete": false,
					"create": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "abcd29513cc6e50299",
					"read": true,
					"update": true,
					"delete": true,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				},
				{
					"uid": "apqr13cc6e50299",
					"read": true,
					"update": false,
					"delete": false,
					"create": false,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				}
			]
		}
	}
}
```



#### Set Field Visibility Rule for Content Type

#### Set Field Visibility Rule for Content Type

**PUT** `/content_types/{content_type_uid}`

The Set Field Visibility Rule for Content Type API request lets you add Field Visibility Rules to existing content types. These rules allow you to show and hide fields based on the state or value of certain fields.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

[Field Visibility Rules](../../cs-docs/developers/create-content-types/about-field-visibility-rules.md) can be set while creating your content type (via UI, only after you’ve added all the required fields to the content type and saved it) or while editing a content type (both via UI and API).

To set a Field Visibility Rule, you need to add the following code snippet in the Request body of the content type:

```
{
    ...
    "content_type": {
        "field_rules": [{
            "conditions": [{
                "operand_field": "operand_field_uid",
                "operator": "equals",
                "value": "value_corresponding_to_operator"
            }],
            "match_type": "all",
            "actions": [{
                "action": "show",
                "target_field": "target_field_uid"
            }]
        }]
    }
    ...
}
```

Let’s look at the keys used in the above code snippet:

- operand_field: Pass the UID of the Operand field (operand_field_uid) i.e., the field on which you want to set the condition.
- operator: Pass the operator that you want to act on the operand field. Here’s the list of operators that are applicable based on the data type of your operand field:

| Data Types | Operations |
| --- | --- |
| Text | matches, does_not_match, starts_with, ends_with, contains |
| Number | equals, not_equals, less_than, greater_than, less_than_or_equals, greater_than_or_equals |
| Date | equals, not_equals, before_date, after_date |
| Boolean | is, is_not |
| Select | is, is_not |
| Reference | is, is_not |
- value: Pass the value that is corresponding to the operator that you have used. Note that for Date data type, you need to pass the date in ISO format.
- match_type: You need to pass either all or any depending on whether you want all your conditions or any one of your conditions to be met.
- action: You need to pass either show or hide depending on whether you want to show or hide the Target field.
- target_field: Pass the UID of the Target field (target_field_uid) i.e., the field on which you want to perform the action.

For more details, check out the [Define Conditions](../../cs-docs/developers/create-content-types/add-a-field-visibility-rule.md#define-conditions) section when adding a Field Visibility Rule.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type in which you want to add field rules. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"content_type": {
		"title": "Page",
		"uid": "page",
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Single Line Textbox",
				"uid": "single_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Multi Line Textbox",
				"uid": "multi_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"field_rules": [{
			"conditions": [{
				"operand_field": "single_line_textbox",
				"operator": "equals",
				"value": "abc"
			}],
			"match_type": "all",
			"actions": [{
				"action": "show",
				"target_field": "multi_line_textbox"
			}]
		}],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": ["url"],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Content Type updated successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"_version": 2,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": true,
				"non_localizable": false
			},
			{
				"display_name": "Single Line Textbox",
				"uid": "single_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Multi Line Textbox",
				"uid": "multi_line_textbox",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			}
		],
		"field_rules": [{
			"conditions": [{
				"operand_field": "single_line_textbox",
				"operator": "equals",
				"value": "abc"
			}],
			"match_type": "all",
			"actions": [{
				"action": "show",
				"target_field": "multi_line_textbox"
			}]
		}],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": ["url"],
			"url_pattern": "/:title",
			"url_prefix": "/",
			"singleton": false
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"roles": [],
			"users": [{
				"uid": "abcdef1234567890",
				"read": true,
				"create": false
			}],
			"others": {
				"read": false,
				"create": false
			}
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false,
				"sub_acl": {
					"read": false,
					"update": false,
					"delete": false,
					"create": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "abcd29513cc6e50299",
					"read": true,
					"update": true,
					"delete": true,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				},
				{
					"uid": "apqr13cc6e50299",
					"read": true,
					"update": false,
					"delete": false,
					"create": false,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				}
			]
		}
	}
}
```



#### Delete Content Type

#### Delete Content Type

**DELETE** `/content_types/{content_type_uid}?force={boolean value}`

The Delete Content Type call deletes an existing content type and all the entries within it.

When executing the API call, in the “URL Parameters” section, provide the UID of your content type.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **force** (optional)
  Enter 'true' to force delete a content type.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Content Type deleted successfully."
}
```



#### Content Type References

#### Get all references of content type

**GET** `/content_types/{content_type_uid}/references?include_global_fields={boolean_value}`

The Get all references of content type request retrieves a list of all content types where the specified content type is referenced. This includes both direct and nested references.

For example, if content type A is referenced in B, B in C, then making this request for C will return A and B.

This ensures you have complete visibility into every referenced content type, direct or nested, within the specified content type.

To configure the permissions for your application via OAuth, please include the cm.content-type:readscope.

Additionally, to fetch all Global fields in which the specified content type is referenced, you need to pass include_global_fields as a query parameter. Set this parameter to true to include the Global fields along with the content types.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the references. The Unique ID of a content type is unique across a stack.
  Default: `brand`

##### Query Parameters

- **include_global_fields** (optional)
  Set the include_global_fields parameter to “true” to retrieve all the Global fields in which the specified content type is referenced.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"references": [
		"Product",
		"Blog"
	]
}
```



#### Export Content Type

#### Export a content type

**GET** `/content_types/{content_type_uid}/export?version={content_type_version}`

This call is used to export a specific content type and its schema. The data is exported in JSON format. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.  
To configure the permissions for your application via OAuth, please include the cm.content-types:export scope.

However, please note that the entries of the specified content type are not exported through this call.

The schema of the content type returned will depend on the version number provided.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type you want to retrieve. The unique ID of a content type is unique across a stack.
  Default: `product`

##### Query Parameters

- **version** (optional)
  Enter the version of content type you want to retrieve. If no version is specified, you will get the latest version of the content type.
  Default: `1`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"created_at": "2016-10-03T11:44:11.839Z",
	"updated_at": "2016-10-03T11:44:11.908Z",
	"title": "Page",
	"uid": "page",
	"inbuilt_class": false,
	"_version": 1,
	"schema": [{
			"display_name": "Title",
			"uid": "title",
			"data_type": "text",
			"field_metadata": {
				"_default": true
			},
			"unique": false,
			"multiple": false,
			"mandatory": true,
			"non_localizable": false
		},
		{
			"display_name": "URL",
			"uid": "url",
			"data_type": "text",
			"field_metadata": {
				"_default": true
			},
			"unique": false,
			"multiple": false,
			"mandatory": true,
			"non_localizable": false
		},
			{
				"display_name": "Reference",
				"uid": "reference",
				"data_type": "reference",
				"reference_to": ["abc", "def"],
				"field_metadata": {
					"ref_multiple_content_types": true,
					"ref_multiple": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false,
				"mandatory": false,
				"non_localizable": false
			}
	],
	"last_activity": [],
	"maintain_revisions": true,
	"description": "",
	"options": {
		"title": "title",
		"publishable": true,
		"is_page": true,
		"sub_title": [
			"url"
		],
		"url_pattern": "/:title",
		"url_prefix": "/",
		"singleton": false
	},
	"abilities": {},
	"DEFAULT_ACL": {
		"roles": [],
		"users": [{
			"uid": "abcdef1234567890",
			"read": true,
			"create": false
		}],
		"others": {
			"read": false,
			"create": false
		}
	},
	"SYS_ACL": {
		"others": {
			"read": false,
			"update": false,
			"delete": false,
			"create": false,
			"publish": false,
			"sub_acl": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false
			}
		},
		"roles": [{
				"uid": "abcd29513cc6e50299",
				"read": true,
				"update": true,
				"delete": true,
				"sub_acl": {
					"read": true,
					"update": true,
					"delete": true,
					"create": true,
					"publish": true
				}
			},
			{
				"uid": "apqr13cc6e50299",
				"read": true,
				"update": false,
				"delete": false,
				"create": false,
				"sub_acl": {
					"read": true,
					"update": true,
					"delete": true,
					"create": true,
					"publish": true
				}
			}
		]
	}
}
```



#### Import Content Type

#### Import a content type

**POST** `/content_types/import?overwrite={boolean_value}`

The Import a content type call imports a content type into a stack by uploading JSON file.   
To configure the permissions for your application via OAuth, please include the cm.content-types:import scope.

**Tip:** You can try the call manually in any REST API client, such as Postman. You can export the required content type's JSON file, make the necessary changes to the data and then import the content type. While importing, you need to pass a form-data parameter named content_type and select the input type as 'File'. Then, select the JSON file of the content type that you wish to import.

##### Query Parameters

- **overwrite** (optional)
  Select 'true' to replace the existing content type with the imported content type file.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Content Type imported successfully.",
	"content_type": {
		"created_at": "2019-07-31T10:34:25.910Z",
		"updated_at": "2019-07-31T10:34:25.910Z",
		"title": "Page",
		"uid": "page",
		"_version": 1,
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"mandatory": true,
				"unique": true,
				"field_metadata": {
					"_default": true,
					"version": 3
				},
				"multiple": false,
				"non_localizable": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"mandatory": false,
				"field_metadata": {
					"_default": true
				},
				"multiple": false,
				"unique": false,
				"non_localizable": false
			},
			{
				"data_type": "reference",
				"display_name": "Reference",
				"reference_to": ["abc", "def"],
				"field_metadata": {
					"ref_multiple_content_types": true,
					"ref_multiple": true
				},
				"uid": "reference",
				"mandatory": false,
				"multiple": false,
				"unique": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"mandatory": true,
				"field_metadata": {
					"_default": true
				},
				"multiple": false,
				"unique": false
			}
		],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"is_page": true,
			"singleton": false,
			"title": "title",
			"sub_title": [],
			"url_pattern": "/:title",
			"url_prefix": "/"
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"others": {
				"read": false,
				"create": false
			},
			"users": [{
				"read": true,
				"sub_acl": {
					"read": true
				},
				"uid": "blt66bfb66666b6666c"
			}]
		},
		"SYS_ACL": {
			"roles": [],
			"others": {
				"read": false,
				"create": false,
				"update": false,
				"delete": false,
				"sub_acl": {
					"read": false,
					"create": false,
					"update": false,
					"delete": false,
					"publish": false
				}
			}
		}
	}
}
```


### Variant Groups

Variants in Contentstack provides an overview of variant groups and linked content types, which are used for content personalization. Linking content types to variant groups allows you to create entry variants.

**Note**:

- The Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our support team.
- Editing variant group details is not supported, as this information is managed by Personalize.


#### Get All Variant Groups

#### Get all variant groups

**GET** `/variant_groups?skip=0&limit=30&include_count=true&include_variant_info=true&include_variant_count=true&desc=created_at&content_type={your_content_type_uid}`

The Get all variant groups request returns a list of all variant groups linked to your stack. To retrieve the variant UIDs specific to a content type, include the content_type query parameter with the content type UID in your request.

##### Query Parameters

- **skip** (optional)
  Enter the number of items to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of items to be returned.
  Default: `4`
- **include_count** (optional)
  Set this parameter to “true” to include the total count of variant groups.
  Default: `true`
- **include_variant_info** (optional)
  Set this parameter to “true” to include the variant information.
  Default: `true`
- **include_variant_count** (optional)
  Set this parameter to “true” to include the total count of variants within a variant group.
  Default: `true`
- **asc** (optional)
  Sort the response in ascending order. Options include created_at and name.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order. Options include created_at and name.
  Default: `name`
- **content_type** (optional)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
    "variant_groups": [
        {
            "name": "region",
            "created_by": "blt**************59",
            "updated_by": "blt**************59",
            "uid": "cs**************43",
            "branches": [
                "main"
            ],
            "content_types": [
                {
                    "uid": "mobile",
                    "status": "linked"
                },
                {
                    "uid": "laptop",
                    "status": "linked"
                }
            ],
            "created_at": "2024-08-20T10:31:07.092Z",
            "updated_at": "2024-08-20T10:31:07.092Z"
        },
        {
            "name": "Variant-Group-test-ct",
            "created_by": "blt**************9e",
            "updated_by": "blt**************33",
            "uid": "cs8**************b6",
            "content_types": [
                {
                    "uid": "testing_variant_cases",
                    "status": "linked"
                },
                {
                    "uid": "test_reference",
                    "status": "linked"
                },
                {
                    "uid": "test",
                    "status": "linked"
                }
            ],
            "created_at": "2024-08-21T10:10:29.494Z",
            "updated_at": "2024-08-22T11:30:48.669Z",
            "description": "",
            "variant_count": 3,
            "variants": [
                {
                    "uid": "cs1**************67",
                    "created_by": "blt**************33",
                    "updated_by": "blt**************33",
                    "name": "test",
                    "created_at": "2024-08-22T11:30:48.774Z",
                    "updated_at": "2024-08-22T11:30:48.774Z"
                },
                {
                    "uid": "cs3**************8f",
                    "created_by": "blt**************33",
                    "updated_by": "blt**************33",
                    "name": "test 2",
                    "created_at": "2024-08-22T11:30:48.978Z",
                    "updated_at": "2024-08-22T11:30:48.978Z"
                },
                {
                    "uid": "cs3d901397291171c0",
                    "created_by": "blt**************33",
                    "updated_by": "blt**************33",
                    "name": "test 3",
                    "created_at": "2024-08-22T11:30:48.979Z",
                    "updated_at": "2024-08-22T11:30:48.979Z"
                }
            ]
        },
        {
            "content_types": [
                {
                    "uid": "vigor",
                    "status": "linked"
                },
                {
                    "uid": "tsyuio",
                    "status": "linked"
                }
            ],
            "name": "test segmentated",
            "personalize_metadata": {
                "project_uid": "660bc**************31ac",
                "experience_uid": "660bd**************431ba",
                "experience_short_uid": "0",
                "status": "linked"
            },
            "created_by": null,
            "updated_by": "blt**************1a",
            "uid": "cse**************e2",
            "created_at": "2024-08-22T11:41:36.588Z",
            "updated_at": "2024-08-22T13:07:10.907Z",
            "variant_count": 2,
            "variants": [
                {
                    "uid": "csf**************7d",
                    "created_by": null,
                    "updated_by": "blt**************1a",
                    "name": "Country",
                    "variant_group_uid": "cse**************e2",
                    "personalize_metadata": {
                        "project_uid": "660bc**************31ac",
                        "experience_uid": "660bd**************31ba",
                        "experience_short_uid": "0",
                        "status": "linked",
                        "variant_short_uid": "1"
                    },
                    "alias": "cs_personalize_0_1",
                    "created_at": "2024-08-22T11:41:36.602Z",
                    "updated_at": "2024-08-22T13:07:11.069Z"
                },
                {
                    "uid": "cs8**************5e",
                    "created_by": null,
                    "updated_by": "blt**************1a",
                    "name": "test",
                    "variant_group_uid": "cse**************e2",
                    "personalize_metadata": {
                        "project_uid": "660bc**************31ac",
                        "experience_uid": "660bd**************31ba",
                        "experience_short_uid": "0",
                        "status": "linked",
                        "variant_short_uid": "0"
                    },
                    "alias": "cs_personalize_0_0",
                    "created_at": "2024-08-22T11:41:36.603Z",
                    "updated_at": "2024-08-22T13:07:11.088Z"
                }
            ]
        }
    ]
}
```



#### Link Content Types

#### Link content types

**PUT** `/variant_groups/{variant_group_uid}/variants`

The Link content types request allows you to link content types to your variant group.

In the “Body” section, enter the content type UID(s) in the following format:

```
{
            "uid": "content_type_uid_1",
            "status": "linked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "linked"
        }
```

##### URL Parameters

- **variant_group_uid** (required)
  Enter the unique ID for your variant group.
  Default: `your_variant_group_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

##### Sample Request

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "linked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "linked"
        }
    ],
    "uid": "csd**************03",
    "branches": [
        "main"
    ]
}
```

##### Sample Response

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "linked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "linked"
        }
    ],
    "name": "Variant-Group-Name",
    "personalize_metadata": {
        "project_uid": "660bc**************31ac",
        "experience_uid": "660bd**************31ba",
        "experience_short_uid": "0",
        "status": "linked"
    },
    "created_by": "blt**************9e",
    "updated_by": "blt**************1a",
    "uid": "csd**************03",
    "created_at": "2024-05-22T05:56:15.393Z",
    "updated_at": "2024-09-06T09:04:19.758Z",
    "message": "Variant Group and Variants updated successfully",
    "variants": []
}
```



#### Unlink Content Types

#### Unlink content types

**PUT** `/variant_groups/{variant_group_uid}/variants`

The Unlink content types request allows you to unlink content types to your variant group.

In the “Body” section, enter the content type UID(s) in the following format:

```
{
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
```

##### URL Parameters

- **variant_group_uid** (required)
  Enter the unique ID for your variant group.
  Default: `your_variant_group_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

##### Sample Request

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
    ],
    "uid": "csd**************03",
    "branches": [
        "main"
    ]
}
```

##### Sample Response

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
    ],
    "name": "Variant-Group-Name",
    "personalize_metadata": {
        "project_uid": "660bc**************31ac",
        "experience_uid": "660bd**************31ba",
        "experience_short_uid": "0",
        "status": "linked"
    },
    "created_by": "blt**************9e",
    "updated_by": "blt**************1a",
    "uid": "csd**************03",
    "created_at": "2024-05-22T05:56:15.393Z",
    "updated_at": "2024-09-06T09:04:19.758Z",
    "message": "Variant Group and Variants updated successfully",
    "variants": []
}
```


### Taxonomy

Taxonomy, simplifies the process of organizing content in your system, making it effortless to find and retrieve information. It allows you to arrange your web properties in a hierarchy according to your specific needs, whether it's their purpose, intended audience, or other aspects of your business.


#### Get all taxonomies

#### Get all taxonomies

**GET** `/taxonomies?include_terms_count={boolean_value}&include_count={boolean_value}&deleted={boolean_value}&limit={limit_value}&skip={skip_value}`

The Get all taxonomies request returns comprehensive information of all the taxonomies available in a particular stack in your organization.

##### Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomies. If not specified, the default locale is used.
  Default: `es-es`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the taxonomy is not available in the given locale.
  Default: `true`
- **include_terms_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in a taxonomy.
  Default: `true`
- **include_referenced_terms_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms referenced in entry(ies).
  Default: `false`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which terms are added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of taxonomies available in a stack.
  Default: `true`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted taxonomies within a stack.
  Default: `false`
- **asc** (optional)
  Sort the response in ascending order.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order.
  Default: `created_at`
- **query** (optional)
  Provide a custom query for the taxonomy_uid in string format.
  Default: `{"uid":{"$in":["taxonomy_1","taxonomy_2"]}}`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **limit** (optional)
  Enter the maximum number of taxonomies to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of taxonomies to be skipped from the response body.
  Default: `2`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

##### Sample Response

```json
{
    "taxonomies": [
        {
            "uid": "sample_four",
            "name": "Sample Four",
            "description": "Description for the sample four taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:57:18.832Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:18.832Z",
            "updated_by": "b****************44",
            "terms_count": 7,

        },
        {
            "uid": "sample_three",
            "name": "Sample Three",
            "description": "Description for the sample three taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:57:04.229Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:04.229Z",
            "updated_by": "b****************44",
            "terms_count": 2
        },
        {
            "uid": "sample_two",
            "name": "Sample Two",
            "description": "Description for the sample two taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:56:39.064Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:56:39.064Z",
            "updated_by": "b****************44",
            "terms_count": 6,

        },
        {
            "uid": "sample_one",
            "name": "Sample One",
            "description": "Description for the sample one taxonomy.",
            "locale": "en-us",
            "created_at": "2023-10-15T05:30:20.509Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:30:20.509Z",
            "updated_by": "b****************44",
            "terms_count": 2
        }
    ],
    "count": 4
}
```



#### Get a single taxonomy

#### Get a single taxonomy

**GET** `/taxonomies/{taxonomy_uid}`

The Get a single taxonomy request returns comprehensive information of a specific taxonomy available in a particular stack.

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

##### Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomy. If not specified, the master locale is used.
  Default: `es`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the taxonomy is not available in the given locale.
  Default: `true`
- **include_terms_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in a taxonomy.
  Default: `true`
- **include_referenced_terms_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms referenced in entry(ies).
  Default: `false`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which terms are added.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

##### Sample Response

```json
{
   "taxonomy":{
      "uid":"global_content_topics",
      "name":"Temas Globales de Contenido",
      "description":"Description for the Global Content Topics taxonomy.",
      "locale": "es",
      "created_at":"2025-11-13T05:30:20.509Z",
      "created_by":"b****************44",
      "updated_at":"2025-11-13T05:30:20.509Z",
      "updated_by":"b****************44",
      "terms_count":2,
      "referenced_terms_count":3,
      "referenced_entries_count":6
   }
}
```



#### Create a taxonomy

#### Create a taxonomy

**POST** `/taxonomies/`

The Create a taxonomy request creates a taxonomy in a particular stack of your organization.

**Note**: Refer to the [Restricted Keywords for UIDs](../../cs-docs/developers/create-content-types/restricted-keywords-for-uids.md) to avoid using reserved keywords.

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy."
    }
}
```

##### Sample Response

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy.",
        "created_at": "2023-10-15T05:30:20.509Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T05:30:20.509Z",
        "updated_by": "b****************44"
    }
}
```



#### Update a taxonomy

#### Update a taxonomy

**PUT** `/taxonomies/{taxonomy_uid}`

The Update a taxonomy request is used to update the details of an existing taxonomy available in a particular stack.

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

##### Query Parameters

- **locale** (optional)
  Locale in which to update the taxonomy. If not specified, the master locale is used.
  Default: `es-es`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "taxonomy": {
    "name": "Updated Sample One",
    "description": "Updated description for the sample one taxonomy."
  }
}
```

##### Sample Response

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Updated Sample One",
        "description": "Updated description for the sample one taxonomy.",
      "locale": "es-es",
        "created_at": "2023-10-15T05:30:20.509Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T07:54:42.373Z",
        "updated_by": "b****************44"
    }
}
```



#### Localize a taxonomy

#### Localize a taxonomy

**POST** `/taxonomies/{taxonomy_uid}`

The Localize a taxonomy request is used to add translated values to a taxonomy for specific locales available in your stack.

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](./content-management-api.md#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`

##### Query Parameters

- **locale** (required)
  The locale in which the taxonomy should be localized.
  Default: `fr-fr`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Sujets de Contenu Mondiaux",
        "description": "Description for the Sujets de Contenu Mondiaux taxonomy in French France."
    }
}
```

##### Sample Response

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Sujets de Contenu Mondiaux",
        "description": "Description for the Sujets de Contenu Mondiaux taxonomy in French France.",
        "locale": "fr-fr",
        "created_at": "2025-11-13T11:23:11.996Z",
        "created_by": "blte21349758c55fa45",
        "updated_at": "2025-11-13T11:23:11.996Z",
        "updated_by": "blte21349758c55fa45"
    }
}
```



#### Unlocalize a taxonomy

#### Unlocalize a taxonomy

**DELETE** `/taxonomies/{taxonomy_uid}`

The Unlocalize a taxonomy request is used to remove translated values from a taxonomy in a specified locale.

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](./content-management-api.md#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`

##### Query Parameters

- **locale** (required)
  The locale from which to unlocalize. If not specified, the master locale is used.
  Default: `es-es`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`



#### Publish a taxonomy

#### Publish a taxonomy

**POST** `/taxonomies/publish`

The Publish a taxonomy request  initiates a job to publish one or more taxonomies to the specified environments, locales, and branches.

**Note**:

 

- Publishing is supported only at the taxonomy level, individual terms cannot be published.
- The locales and environments parameters are mandatory.
- The scheduled_at parameter is optional.
- Although taxonomy is global, branch selection determines locale availability and the fallback hierarchy during publishing.

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

##### Sample Request

```json
{
  "locales": ["en-us", "fr-fr"],
  "environments": ["production"],
  "scheduled_at": "2025-10-01T10:00:00.000Z",
  "items": [
    {
      "uid": "taxonomy_uid_1"
    },
    {
      "uid": "taxonomy_uid_2"
    }
  ]
}
```



#### Export a taxonomy

#### Export a taxonomy

**GET** `/taxonomies/{taxonomy_uid}/export`

The Export a taxonomy request is used to export a specific taxonomy and its terms. in JSON or CSV format.

The exported file doesn't download automatically. You can use a REST API client such as Postman to manually download it.

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to export. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](./content-management-api.md#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

##### Query Parameters

- **format** (optional)
  Enter the file format for exporting the taxonomy. The default format is JSON.
  Default: `json or csv`
- **locale** (optional)
  Exports the taxonomy in the specified locale. If not provided, the system uses the master locale by default (en-us).
  Default: `es`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

##### Sample Response

```json
{
    "taxonomy": {
        "uid": "global_content_topics",
        "name": "Temas Globales de Contenido",
        "description": "Description for the Global Content Topics taxonomy.",
        "locale": "es"
    },
    "terms": [
        {
            "uid": "artificial_intelligence",
            "name": "Inteligencia Artificial",
            "parent_uid": null,
            "locale": "es"
        },
        {
            "uid": "content_management",
            "name": "Gestión de Contenidos",
            "parent_uid": null,
            "locale": "es"
        },
        {
            "uid": "ai_child_1",
            "name": "Inteligencia Artificial Child 1",
            "parent_uid": "artificial_intelligence",
            "locale": "es"
        }
    ]
}
```



#### Import a taxonomy

#### Import a taxonomy

**POST** `/taxonomies/import`

The Import a taxonomy request is used to import a taxonomy and its terms into a stack by uploading the JSON or CSV file.

**Note**: As Taxonomies can contain numerous terms, the response will feature a terms_count field, indicating the number of successfully imported terms for this request, rather than listing them all.

You can try the call manually in any REST API client, such as Postman. While importing, you need to pass a form-data parameter named taxonomy and select the input type as 'File'. Then, select the JSON or CSV file of the taxonomy that you wish to import.

**Note**:

- If the CSV import format is invalid, any invalid rows containing taxonomy/terms and subsequent rows will be ignored and only rows with valid taxonomy/terms will be created.
- Refer to the Restricted Keywords for UIDs to avoid using reserved keywords.

##### Query Parameters

- **locale** (optional)
  Target locale in which to import the taxonomy. If not specified, the master locale is used.
  Default: `es-es`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
    "taxonomy": {
        "uid": "sample",
        "name": "Sample",
        "description": "",
      "locale": "es-es",
        "created_at": "2024-02-06T11:19:33.607Z",
        "created_by": "blt**************96",
        "updated_at": "2024-02-06T11:19:33.607Z",
        "updated_by": "blt**************96",
        "terms_count": 2
    }
}
```



#### Delete a taxonomy

#### Delete a taxonomy

**DELETE** `/taxonomies/{taxonomy_uid}`

The Delete a taxonomy request deletes an existing taxonomy and all the terms within it. To confirm the deletion of a taxonomy, you need to specify the force=true query parameter.

**Note:** When you delete a taxonomy, its existing associations with content types are removed. Additionally, the child terms will also eliminate associations with existing entries.

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

##### Query Parameters

- **force** (required)
  Enter 'true' to force delete a taxonomy.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`



#### Terms

Terms are the primary classification elements you generate within a taxonomy. They serve the purpose of categorizing entries.

##### Get all terms of a taxonomy

#### Get all terms of a taxonomy

**GET** `/taxonomies/{taxonomy_uid}/terms?include_terms_count={boolean_value}&include_count={boolean_value}&deleted=false&limit={limit_value}&skip={skip_value}`

The Get all terms of a taxonomy request returns comprehensive information of all the terms within a taxonomy available in a particular stack in your organization.

##### Get a single term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

##### Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomy terms. If not specified, the master locale is used.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **depth** (optional)
  The response includes terms beginning at the root level and continuing to the specified depth.
  Default: `3`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **include_order** (optional)
  Set this parameter to 'true' to include in response the order of the terms available in a taxonomy.
  Default: `true`
- **asc** (optional)
  Sort the response in ascending order.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order.
  Default: `created_at`
- **query** (optional)
  Provide a custom query for the term_uid in string format.
  Default: `{"uid":{"$in":["term_1","term_2"]}}`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted terms within a taxonomy.
  Default: `false`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

##### Sample Response

```json
{
    "terms": [
        {
            "uid": "data_science",
            "name": "Data Science",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:59:40.102Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:59:40.102Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 2,
            "taxonomy_uid": "sample_one",
            "ancestors": [
                {
                    "uid": "sample_one",
                    "name": "Updated Sample One",
                    "type": "TAXONOMY"
                }
            ]
        },
        {
            "uid": "ai",
            "name": "AI",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:59:23.659Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:59:23.659Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 1,
            "taxonomy_uid": "sample_one",
            "ancestors": [
                {
                    "uid": "sample_one",
                    "name": "Updated Sample One",
                    "type": "TAXONOMY"
                }
            ]
        }
    ],
    "count": 2
}
```


#### Get a single term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Get a single term request returns comprehensive information of a specific term available in a particular taxonomy.

##### Create a term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

##### Query Parameters

- **locale** (optional)
  Locale from which to fetch the taxonomy term. If not specified, the master locale is used.
  Default: `es`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

##### Sample Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Term A",
        "locale": "es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T05:59:54.988Z",
        "updated_by": "b****************44",
        "children_count": 3,
        "referenced_entries_count": 2
    }
}
```


#### Create a term

**POST** `/taxonomies/{taxonomy_uid}/terms`

The Create a term request creates a term in a particular taxonomy within your stack.

Since terms are organized hierarchically in a taxonomy, it's important to define the order when creating new terms. For instance, when creating a term at the parent level, set the parent_uid as null and specify the level within the order parameter. To create a child term, provide the parent_uid of the parent term where you want to add the new child term, and indicate the desired level within the order parameter.

When creating terms at the parent level, the request body should look like this:

```
{
   "term":{
      "uid":"term_2",
      "name":"Term 2",
      "parent_uid":null,
      "order":2
   }
}
```

When creating terms at the child level, the request body should look like this:

```
{
   "term":{
      "uid":"sub_term_t",
      "name":"Sub Term 5",
      "parent_uid":"term_1",
      "order":5
   }
}
```

**Note:** The order key signifies the term's position relative to other terms at the same level. The order of terms starts from 1, so to place a term in the first position at that level, set the order as 1.

##### Update a term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

##### Query Parameters

- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "term": {
    "uid": "term_a2",
    "name": "Term A2",
    "order": "2",
    "parent_uid": "term_a"
  }
}
```

##### Sample Response

```json
{
    "term": {
        "uid": "term_a2",
        "name": "Term A2",
        "parent_uid": "term_a",
        "depth": 2,
        "created_at": "2023-10-17T12:58:35.427Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-17T12:58:35.427Z",
        "updated_by": "b****************44"
    }
}
```


#### Update a term

**PUT** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Update a term request is used to update the details of an existing term available in a particular taxonomy.

##### Localize a term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term you want to update. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

##### Query Parameters

- **locale** (optional)
  Locale in which to update the taxonomy term. If not specified, the master locale is used.
  Default: `es`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "term": {
    "name": "Updated Term A"
  }
}
```

##### Sample Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Updated Term A",
        "locale": "es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-18T03:59:01.121Z",
        "updated_by": "b****************44"
    }
}
```


#### Localize a term

**POST** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Localize a term request is used to add translated taxonomy terms to specific locales available within a stack.

##### Unlocalize a term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`
- **term_uid** (required)
  Enter the unique ID of the term you want to localize. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `artificial_intelligence`

##### Query Parameters

- **locale** (required)
  The locale in which you want to localize the taxonomy term.
  Default: `es-es`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "term": {
    "uid": "artificial_intelligence",
    "name": "Inteligencia Artificial",
    "parent_uid": null,
    "order": 1
  }
}
```

##### Sample Response

```json
{
    "term": {
        "uid": "artificial_intelligence",
        "name": "Inteligencia Artificial",
        "locale": "es-es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2025-11-13T12:03:27.032Z",
        "created_by": "blte21349758c55fa45",
        "updated_at": "2025-11-13T12:03:27.032Z",
        "updated_by": "blte21349758c55fa45"
    }
}
```


#### Unlocalize a term

**DELETE** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Unlocalize a term request is used to remove localized values for a term in a specific locale.

##### Get descendants of a term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to unlocalize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `global_content_topics`
- **term_uid** (required)
  Enter the unique ID of the term you want to unlocalize. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `artificial_intelligence`

##### Query Parameters

- **locale** (optional)
  The locale from which you want to remove localization. If not specified, the system uses the master locale.
  Default: `es`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`


#### Get descendants of a term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants`

The Get descendants of a term request returns all the child terms of a specific term available in a particular taxonomy.

##### Get ancestors of a term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

##### Query Parameters

- **locale** (optional)
  Locale from which to fetch the descendant taxonomy terms. If not specified, the master locale is used.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **depth** (optional)
  The response includes terms beginning at the root level and continuing to the specified depth.
  Default: `3`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **include_order** (optional)
  Set this parameter to 'true' to include in response the order of the terms available in a taxonomy.
  Default: `true`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

##### Sample Response

```json
{
    "terms": [
        {
            "uid": "term_a2",
            "name": "Term A2",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-17T12:58:35.427Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-17T12:58:35.427Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "order": 2,
"referenced_entries_count": 2
        },
        {
            "uid": "term_a1",
            "name": "Term A1",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T06:00:09.621Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-17T12:36:27.508Z",
            "updated_by": "blt812144cf5a0eaada",
            "children_count": 3,
            "order": 3
        }
    ],
    "count": 2
}
```


#### Get ancestors of a term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/ancestors`

The Get ancestors of a term returns all the terms that are at higher levels in a specific taxonomy of the specified term.

##### Move/Reorder a term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to retrieve the details. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

##### Query Parameters

- **locale** (optional)
  Locale from which to fetch the ancestor taxonomy terms. If not specified, the master locale is used.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **branch** (optional)
  Specify the target branch when using the include_fallback parameter. If not specified, the system uses the main branch by default.
  Default: `dev`

##### Sample Response

```json
{
    "terms": [
        {
            "uid": "term_a",
            "name": "Updated Term A",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:59:54.988Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-18T03:59:01.121Z",
            "updated_by": "b****************44",
            "children_count": 5
        },
        {
            "uid": "term_a1",
            "name": "Term A1",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T06:00:09.621Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-17T12:36:27.508Z",
            "updated_by": "blt812144cf5a0eaada",
            "children_count": 3
        },
        {
            "uid": "term_a1_1",
            "name": "Term A1.1",
            "locale": "en-us",
            "parent_uid": "term_a1",
            "depth": 3,
            "created_at": "2023-10-15T06:00:21.461Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T06:00:21.461Z",
            "updated_by": "b****************44",
            "children_count": 2,
"referenced_entries_count": 3
        }
    ],
    "count": 3
}
```


#### Move/Reorder a term

**PUT** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/move`

The Reorder a term request is used to reposition an existing term available in a particular taxonomy.

The order key signifies the term's position relative to other terms at the same level. The order of terms starts from 1, so to place a term in the first position at that level, set the order as 1.

**Note:** By default, the force query parameter is set to false, which results in an error if an attempt is made to move a term with child terms. When set to true, it will forcefully move the term, impacting the hierarchy of all its child terms and ancestors.

When reordering terms at the parent level, the request body should look like this:

```
{
  "term": {
    "parent_uid": null,
    "order": 2
  }
}
```

When rearranging terms under an existing term on a different level, the request body should look like this:

```
{
  "term": {
    "parent_uid": "term_1",
    "order": 5
  }
}
```

When reordering terms under an existing term on the same level (reorder term), the request body should be structured as follows:

```
{
  "term": {
    "parent_uid": "term_3",
    "order": 1
  }
}
```

##### Delete a term

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to move or reorder the terms. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term you want to move or reorder. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

##### Query Parameters

- **force** (optional)
  Enter 'true' to force a term to be reordered.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type ** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "term": {
    "parent_uid": "test",
    "order": 1
  }
}
```

##### Sample Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Updated Term A",
        "locale": "en-us",
        "parent_uid": "test",
        "depth": 2,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-25T10:34:34.267Z",
        "updated_by": "b****************44",
        "order": 1
    }
}
```


#### Delete a term

**DELETE** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Delete a term request deletes an existing term and all the child terms within it.

To confirm the deletion of a term, you need to specify the force=true query parameter.

**Note:** When you delete a term, its existing associations with entries are removed. Additionally, the child terms will also eliminate associations with existing entries.

##### Get all terms across all taxonomies

##### URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy which you want to delete. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term of which you want to delete. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

##### Query Parameters

- **force** (required)
  Enter 'true' to force delete a term.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`


#### Get all terms across all taxonomies

**GET** `/taxonomies/$all/terms?typeahead={term}`

The Get all terms across all taxonomies request returns comprehensive information of all the terms across all taxonomy available in a particular stack in your organization.

**Note**:

- The parameter $all in the URL is a reserved keyword in this context. It is used to refer to all taxonomies.
- In the Query Parameters section, you must pass either the query or typeahead parameter.

##### Query Parameters

- **locale** (optional)
  Specifies the locale from which to fetch the terms. If not provided, the system uses the master locale.
  Default: `en-us`
- **include_fallback** (optional)
  Determines whether to follow the fallback locale hierarchy of the specified branch (or the main branch) when the term is not available in the given locale.
  Default: `true`
- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of terms available in the specified taxonomy.
  Default: `true`
- **query** (optional)
  Provide a custom query for the taxonomy_uid and term_uid in string format.
  Default: `{"$or":[{"taxonomy_uid":"taxonomy_1","uid":{"$in":["term_1", “term_2”]}}]}`
- **typeahead** (optional)
  Retrieves responses that match the provided string.
  Default: `sample`
- **limit** (optional)
  Enter the maximum number of terms to be returned.
  Default: `2`
- **skip** (optional)
  Enter the number of terms to be skipped from the response body.
  Default: `2`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`

##### Sample Response

```json
{
    "terms": [
        {
            "uid": "term_a2_1",
            "name": "Term A2.1",
            "locale": "en-us",
            "parent_uid": "term_a2",
            "depth": 3,
            "created_at": "2023-10-15T05:58:46.769Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:46.769Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                },
                {
                    "uid": "term_a2",
                    "name": "Term A2"
                }
            ]
        },
        {
            "uid": "term_a1",
            "name": "Term A1",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T05:58:16.921Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:16.921Z",
            "updated_by": "b****************44",
            "children_count": 0,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                }
            ]
        },
        {
            "uid": "term_a2",
            "name": "Term A2",
            "locale": "en-us",
            "parent_uid": "term_a",
            "depth": 2,
            "created_at": "2023-10-15T05:58:36.476Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:58:36.476Z",
            "updated_by": "b****************44",
            "children_count": 1,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                },
                {
                    "uid": "term_a",
                    "name": "Term A"
                }
            ]
        },
        {
            "uid": "term_a",
            "name": "Term A",
            "locale": "en-us",
            "parent_uid": null,
            "depth": 1,
            "created_at": "2023-10-15T05:57:34.775Z",
            "created_by": "b****************44",
            "updated_at": "2023-10-15T05:57:34.775Z",
            "updated_by": "b****************44",
            "children_count": 3,
            "taxonomy_uid": "sample_four",
            "ancestors": [
                {
                    "uid": "sample_four",
                    "name": "Sample Four",
                    "type": "TAXONOMY"
                }
            ]
        }
    ],
    "count": 17
}
```


### Global Fields

A Global field is a reusable field (or group of fields) that you can define once and reuse across multiple content types within your stack. This eliminates the need to recreate the same set of fields multiple times, saving effort and ensuring consistency.

**Note**: If your Global field contains [nested Global fields](../../cs-docs/developers/global-field/about-global-field.md#nested-global-fields), they will appear as part of the schema in the API response.

You can pass the **branch header** in API requests to fetch or manage modules within specific branches of the stack. Additionally, setting the include_branch query parameter to true includes the _branch key in the response, specifying the unique ID of the branch where the module resides.

**Additional Resource**: You can create dynamic and flexible Global Fields by nesting Global fields within a [Modular Block](../../cs-docs/developers/global-field/global-fields-as-blocks-within-modular-blocks.md), [Global](../../cs-docs/developers/global-field/about-global-field.md), or a [Group](../../cs-docs/developers/global-field/group-fields-within-global-fields.md) fields.


#### Get All Global Fields

#### Get all global fields

**GET** `/global_fields`

The Get all global fields request returns comprehensive information of all the global fields available in a particular stack in your organization.

**Note**:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
- To configure the permissions for your application via OAuth, please include the cm.global-fields.management:read scope.

##### Query Parameters

- **include_global_field_schema** (optional)
  Set this parameter to 'true' to include in response the schema of the nested Global field.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `true`
- **include_content_types** (optional)
  Set this parameter to 'true' to include in response the details of the content types where the current Global field is referred.
  Default: `ture`
- **include_global_fields** (optional)
  Set this parameter to 'true' to include in response the details of Global fields where the current Global field is referred.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of Global fields available in a stack.
  Default: `true`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted Global fields within a stack.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "global_fields": [
        {
            "created_at": "2019-09-06T11:30:02.108Z",
            "updated_at": "2019-09-06T11:30:02.108Z",
            "title": "Servlet",
            "uid": "servlet",
            "_version": 1,
            "inbuilt_class": false,
            "schema": [
                {
                    "display_name": "Name",
                    "uid": "name",
                    "data_type": "text",
                    "multiple": false,
                    "mandatory": false,
                    "unique": false,
                    "non_localizable": false
                },
                {
                    "data_type": "text",
                    "display_name": "Rich text editor",
                    "uid": "description",
                    "field_metadata": {
                        "allow_rich_text": true,
                        "description": "",
                        "multiline": false,
                        "rich_text_type": "advanced",
                        "options": [],
                        "version": 3
                    },
                    "multiple": false,
                    "mandatory": false,
                    "unique": false,
                    "non_localizable": false
                }
            ],
            "last_activity": {},
            "maintain_revisions": true,
            "description": ""
        }
    ]
}
```



#### Get Single Global Field

#### Get a single global field

**GET** `/global_fields/{global_field_uid}`

The Get a single global field request allows you to fetch comprehensive details of a specific global field.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

**Note**:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
- To configure the permissions for your application via OAuth, please include the cm.global-fields.management:read scope.

##### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the Global field of which you want to retrieve the details. The UID of a Global field is unique across a stack. Execute the '[Get all Global fields](./content-management-api.md#get-all-global-fields)' request to retrieve the UID of a Global field.
  Default: `category`

##### Query Parameters

- **version** (optional)
  Specify the version number of the specified Global field of which you want to retrieve details.
  Default: `4`
- **include_global_field_schema** (optional)
  Set this parameter to 'true' to include in response the schema of the Global field.
  Default: `true`
- **include_global_fields** (optional)
  Set this parameter to 'true' to include in response the count of Global fields.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `true`
- **include_content_types** (optional)
  Set this parameter to 'true' to include in response the details of the content types.
  Default: `true`
- **deleted** (optional)
  Set this parameter to 'true' to retrieve only deleted Global fields within a stack.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "global_field": {
        "created_at": "2019-09-06T11:30:02.108Z",
        "updated_at": "2019-09-06T11:30:02.108Z",
        "title": "Servlet",
        "uid": "servlet",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Name",
                "uid": "name",
                "data_type": "text",
                "multiple": false,
                "mandatory": false,
                "unique": false,
                "non_localizable": false
            },
            {
                "data_type": "text",
                "display_name": "Rich text editor",
                "uid": "description",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "options": [],
                    "version": 3
                },
                "multiple": false,
                "mandatory": false,
                "unique": false,
                "non_localizable": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": ""
    }
}
```



#### Create Global Field

#### Create a global field

**POST** `/global_fields`

The Create a global field request allows you to create a new global field in a particular stack of your Contentstack account. You can use this global field in any content type within your stack.

To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

**Note**: Only the stack owner, administrator, and developer can create global fields.

To create a nested global field, follow the schema in the request body:

```
{
    "global_field": {
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ]
    }
}
```

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "global_field": {
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ]
    }
}
```

##### Sample Response

```json
{
    "notice": "Global Field created successfully.",
    "global_field": {
        "created_at": "2024-08-07T07:39:11.410Z",
        "updated_at": "2024-08-07T07:40:02.343Z",
        "title": "Nested Global Field",
        "uid": "nested_global_field",
        "description": "",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "data_type": "text",
                "display_name": "Single Line Textbox",
                "uid": "single_line",
                "field_metadata": {
                    "description": "",
                    "default_value": "",
                    "version": 3
                },
                "format": "",
                "error_messages": {
                    "format": ""
                },
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            },
            {
                "data_type": "global_field",
                "display_name": "Global",
                "reference_to": "global_field_1",
                "field_metadata": {
                    "description": ""
                },
                "uid": "global_field",
                "mandatory": false,
                "multiple": false,
                "non_localizable": false,
                "unique": false,
                "indexed": false,
                "inbuilt_model": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true
    }
}
```



#### Update Global Field

#### Update a global field

**PUT** `/global_fields/{global_field_uid}`

The Update a global field request allows you to update the schema of an existing global field.   
To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

##### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
        "global_field": {
            "title": "Servlet",
            "uid": "servlet",
            "schema": [{
                "display_name": "Name",
                "uid": "name",
                "data_type": "text"
            }, {
                "data_type": "text",
                "display_name": "Rich text editor",
                "uid": "description",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "options": [],
                    "version": 3
                },
                "multiple": false,
                "mandatory": false,
                "unique": false
            }]
        }
    }
```

##### Sample Response

```json
{
    "notice": "Global Field updated successfully.",
    "global_field": {
        "created_at": "2019-09-06T11:30:02.108Z",
        "updated_at": "2019-09-06T11:30:02.108Z",
        "title": "Servlet",
        "uid": "servlet",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Name",
                "uid": "name",
                "data_type": "text",
                "multiple": false,
                "mandatory": false,
                "unique": false,
                "non_localizable": false
            },
            {
                "data_type": "text",
                "display_name": "Rich text editor",
                "uid": "description",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "options": [],
                    "version": 3
                },
                "multiple": false,
                "mandatory": false,
                "unique": false,
                "non_localizable": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": ""
    }
}
```



#### Delete Global Field

#### Delete global field

**DELETE** `/global_fields/{global_field_uid}?force=true`

The Delete global field request allows you to delete a specific global field.

To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

**Warning**: If your Global field has been referred within a particular content type, then you will need to pass an additional query parameter force:true to delete the Global field.

When executing the API call, in the 'URL Parameters' section, provide the unique ID of your global field.

##### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

##### Query Parameters

- **force** (required)
  Set the force parameter to 'true' to delete the Global field.
  Default: `true`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "notice": "Global Field deleted successfully."
}
```



#### Import Global Field

#### Import a global field

**POST** `/global_fields/import`

The Import a global field call imports a global field into a stack.

To import, you need to provide/upload a JSON file that contains the schema of the global field that you wish to import.

**Tip**: You can try the call manually in any REST API client, such as Postman, by passing a 'Body' parameter named global_field and selecting the input type as 'File'. Then, select the JSON file of the global field that you wish to import.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Default: `Your_management_token`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "notice": "Global Field imported successfully.",
  "global_field": {
    "created_at": "2019-08-22T05:29:37.701Z",
    "updated_at": "2019-08-22T05:29:37.701Z",
    "title": "five",
    "uid": "five",
    "_version": 1,
    "inbuilt_class": false,
    "schema": [
      {
        "display_name": "Name",
        "uid": "name",
        "data_type": "text",
        "multiple": false,
        "mandatory": false,
        "unique": false,
        "non_localizable": false
      },
      {
        "display_name": "Add",
        "uid": "add",
        "data_type": "text",
        "multiple": false,
        "mandatory": false,
        "unique": false,
        "non_localizable": false
      },
      {
        "display_name": "std",
        "uid": "std",
        "data_type": "text",
        "multiple": false,
        "mandatory": false,
        "unique": false,
        "non_localizable": false
      }
    ],
    "last_activity": {},
    "maintain_revisions": true,
    "description": ""
  }
}
```



#### Export Global Field

#### Export a global field

**GET** `/global_fields/{global_field_uid}/export`

This request is used to export a specific global field and its schema. The data is exported in JSON format. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.   
To configure the permissions for your application via OAuth, please include the cm.global-fields.management:write scope.

##### URL Parameters

- **global_field_uid** (required)
  Enter the unique ID of the global field that you wish to update. The UID is generated based on the title of the global field. The unique ID of a global field is unique across a stack.
  Default: `global_field_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "created_at": "2019-11-26T09:18:18.850Z",
    "updated_at": "2019-11-26T09:18:49.861Z",
    "title": "Servlet",
    "uid": "servlet",
    "_version": 1,
    "inbuilt_class": false,
    "schema": [
        {
            "display_name": "Name",
            "uid": "name",
            "data_type": "text",
            "multiple": false,
            "mandatory": false,
            "unique": false,
            "non_localizable": false
        },
        {
            "data_type": "text",
            "display_name": "Rich text editor",
            "uid": "description",
            "field_metadata": {
                "allow_rich_text": true,
                "description": "",
                "multiline": false,
                "rich_text_type": "advanced",
                "options": [],
                "version": 3
            },
            "multiple": false,
            "mandatory": false,
            "unique": false,
            "non_localizable": false
        }
    ],
    "last_activity": {},
    "maintain_revisions": true,
    "description": ""
}
```


### Entries

An [entry](/docs/content-managers/author-content/) is the actual piece of content created using one of the defined [content types](../../cs-docs/developers/create-content-types/about-content-types.md).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.


#### Get all Entries

#### Get all entries

**GET** `/content_types/{content_type_uid}/entries?apply_draft={boolean_value}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}`

The Get all entries API retrieves all entries for a specified content type in a stack. The response returns entry data in JSON format. You can also specify parameters such as locale, environment, workflow details, and draft merging to customize the results.

If you are using OAuth authentication, include the cm.entries.management:read scope to configure the required permissions for this request.

Use the apply_draft query parameter to merge draft entries with their corresponding base entries. Draft entries are treated as a special type of variant and are merged using the existing entry variant infrastructure while preserving draft-specific metadata.

To include metadata associated with entries, pass the include_metadata query parameter and set its value to true. The response includes entry metadata under the _metadata key, associated with the relevant extension UID.

Example structure:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

You can also extend this API request by adding queries to filter or refine results. Use the query parameter in the URL and provide the query in JSON format.

**Additional Resource**: For more information about supported queries, refer to the [Queries](./content-delivery-api.md#queries) section of the Content Delivery API documentation.

For example, to retrieve entries in a specific workflow stage, pass a query using _workflow.uid, where uid is the workflow stage UID.

**Tip**: This request returns the first **100 entries** for the specified content type. To retrieve additional entries, use [pagination](./content-delivery-api.md#pagination).

##### URL Parameters

- **content_type_uid** (required)
  The unique ID of the content type whose entries you want to retrieve. The UID is generated from the title of the content type and is unique within a stack.
  Default: `product`

##### Query Parameters

- **apply_draft** (optional)
  Set to true to retrieve and merge the draft entry (if it exists) with the base entry.
  Default: `true`
- **locale** (optional)
  Specify the locale from which to retrieve entries. If not provided, the master locale is used.
  Default: `en-us`
- **include_workflow** (optional)
  Set to true to include workflow details for each entry in the response.
  Default: `false`
- **include_publish_details** (optional)
  Set to true to include publish details for each entry.
  Default: `true`
- **include_branch** (optional)
  Set to true to include the _branch top-level key in the response. This key contains the unique ID of the branch where the entry resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication.](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "entries": [
        {
            "title": "Navigate the Heart of London via the Iconic London Tube",
            "url": "/navigate-the-heart-of-london-via-the-iconic-london-tube",
            "summary": "Immerse yourself in the vibrant energy of London as you navigate the world-famous London Tube. With its extensive network of underground lines, the Tube is not just a means of transportation but an integral part of the city's identity. Join us as we delve into the history, efficiency, and cultural significance of the London Tube, guiding you through an exciting exploration of the heart of London.",
            "content": {
                "type": "doc",
                "attrs": {},
                "uid": "d6e2********************ad5afb25",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "49a5********************6b8b4ce9",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 1
            },
            "tags": [],
            "locale": "en-us",
            "uid": "blt8c734851da83deb2",
            "created_by": "blt****************ada0",
            "updated_by": "blt****************ada0",
            "created_at": "2026-03-16T19:05:35.848Z",
            "updated_at": "2026-03-16T19:05:35.848Z",
            "ACL": {},
            "_version": 1,
            "_in_progress": false,
            "publish_details": [
                {
                    "environment": "blt****************2fd7",
                    "locale": "en-us",
                    "time": "2026-03-16T19:39:06.603Z",
                    "user": "blt****************ada0",
                    "version": 1
                },
                {
                    "environment": "blt****************2fd7",
                    "locale": "fr",
                    "time": "2026-03-16T19:39:06.603Z",
                    "user": "blt****************ada0",
                    "version": 1
                }
            ]
        },
        {
            "title": "Unleash the Speed: Japan's Bullet Train (Shinkansen)",
            "url": "/unleash-the-speed-japan-s-bullet-train-shinkansen-",
            "summary": "Get ready to experience the marvel of Japanese engineering as you board the legendary Bullet Train, also known as the Shinkansen. Zooming across the picturesque landscapes of Japan, the Shinkansen offers a thrilling, efficient, and comfortable mode of transportation. Join us as we embark on a high-speed adventure through the Land of the Rising Sun, exploring the wonders and convenience of Japan's iconic Bullet Train.",
            "content": {
                "type": "doc",
                "attrs": {},
                "uid": "620b********************c7a8f9a",
                "children": [
                    {
                        "type": "p",
                        "attrs": {},
                        "uid": "0e70********************db02b32",
                        "children": [
                            {
                                "text": ""
                            }
                        ]
                    }
                ],
                "_version": 1
            },
            "tags": [],
            "locale": "en-us",
            "uid": "blt0234e367de96772b",
            "created_by": "blt****************ada0",
            "updated_by": "blt****************ada0",
            "created_at": "2026-03-16T19:02:22.337Z",
            "updated_at": "2026-03-16T19:02:22.337Z",
            "ACL": {},
            "_version": 1,
            "_in_progress": false,
            "publish_details": [
                {
                    "environment": "blt****************2fd7",
                    "locale": "en-us",
                    "time": "2026-03-16T19:39:06.652Z",
                    "user": "blt****************ada0",
                    "version": 1
                },
                {
                    "environment": "blt****************2fd7",
                    "locale": "fr",
                    "time": "2026-03-16T19:39:06.652Z",
                    "user": "blt****************ada0",
                    "version": 1
                }
            ]
        }
    ]
}
```



#### Get a Single Entry

#### Get a single entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}?version={version_number}&locale={language_code}&include_workflow={boolean_value}&include_publish_details={boolean_value}`

The Get a single entry request fetches a particular entry of a content type.

The content of the entry is returned in JSON format. You can also specify the environment and locale of which you wish to retrieve the entries.

To configure the permissions for your application via OAuth, please include the cm.entries.management:read scope.   
Additionally, if you wish to fetch the metadata attached to each entry, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the entry metadata along with all entries in the response body.

You will find the entry metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

**Tip:** To include the publish details in the response, make use of the include_publish_details parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. In addition to entry publish details, the include_publish_details parameter also fetches the entry metadata publishing details in the response.

**Tip: **Also, if no version is mentioned, this request will retrieve the latest published version of the entry. To retrieve a specific version, make use of the version parameter.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch.
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **version** (optional)
  Enter the version number of the entry that you want to retrieve. However, to retrieve a specific version of an entry, you need to keep the environment parameter blank.
  Default: `2`
- **locale** (optional)
  Enter the code of the language of which the entries need to be included. Only the entries published in this locale will be displayed.
  Default: `en-us`
- **include_workflow** (optional)
  Enter 'true' to include the workflow details of the entry.
  Default: `true`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: ` [Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"entry": {
		"title": "example",
		"url": "/example",
		"locale": "en-us",
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"version": 1,
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "sys_bltd0f5afeabcd"
		}]
	}
}
```



#### Create an Entry

#### Create an entry

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry call creates a new entry for the selected content type.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.   
When executing the API call, in the 'Body' section, you need to provide the content of your entry based on the content type created.

Here are some important scenarios when creating an entry.

**Scenario 1:** If you have a reference field in your content type, here's the format you need to follow to add the data in the ‘Body’ section

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "reference_field_uid": [{
            "uid": "blt111000d1e110b001",
            "_content_type_uid": "referred_content_type_uid"
        }]
    }
}
```

**Scenario 2:** If you need to create an entry that contains asset files, you need to provide the asset UID(s) in the ‘Body’ section.

To add a single file, enter a single UID (file_field_uid). For multiple asset files, enter the asset files’ UIDs (file_field_uid_multiple) in an array. You need to use only one of the following formats.

Here's the JSON schema for both the cases:

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "file_field_uid": "asset_uid", // ‘File’ field marked ‘Single’
        "file_field_uid_multiple": ["asset_uid1", "asset_uid2, ..."], // ‘File’ field marked ‘Multiple’
    }
}
```

**Scenario 3:** If you need to add your asset file within a Rich Text Editor, use the following JSON schema:

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "rte_field_uid": "

"
    }
}
```

**Note**: In the above code, in place of rte-field-uid, you need to provide the UID of the Rich Text Editor field.

##### Create an Entry with JSON RTE

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`

##### Query Parameters

- **locale** (required)
  Enter the code of the language in which you want your entry to be localized in.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"title": "example",
		"url": "/example"
	}
}
```

##### Sample Response

```json
{
	"notice": "Entry created successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"locale": "en-us",
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
                "_in_progress": true
	}
}
```


#### Create an entry with JSON RTE

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with JSON RTE request lets you create a new entry for a selected content type that contains a JSON RTE field.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.   
When executing the API call, in the 'Body' section, you need to provide the content of your entry based on the content type created.

If you selected the **Embed Objects** option while creating the content type, you can embed entries within your JSON RTE field. In the 'Body' section, you need to specify the details of the entry you wish to embed.

**Note:** When creating an entry with JSON RTE, if a duplicate doc_uid is detected, the request will throw a "Duplicate UID" error in the response.

The schema to embed an entry within the JSON RTE field is as follows:

```
{
          "children":[
            {
              "text":"Embedded entry:",
              "bold":true
            },
            {
              "uid":"v4_unique_id",
              "type":"reference",
              "attrs":{
                "class-name":"embedded-entry redactor-component inline-entry",
                "content-type-uid":"content_type_uid",
                "display-type":"inline_or_block",
                "entry-uid":"uid_of_the_entry_you_want_to_embed",
                "locale":"locale_code",
                "type":"entry",
              },
              "children":[
                {
                  "text":""
                }
              ]
            },
            {
              "text":"continued text after embedding an entry."
            }
          ],
          "type":"p",
          "uid":"v4_unique_id",
          "attrs":{
          }
        }
```

**Note:** The children block should be added while creating an entry with a referenced entry and asset to help point the cursor after embedding an entry or asset. The schema of this block is as follows:

```
{
"children":[
{
"text":""
}
]
}
```

The schema to embed assets within the JSON RTE field is as follows:

```
{
  "children":[
    {
      "text":"Embedded asset:",
      "bold":true
    },
    {
      "uid":"v4_unique_id",
      "type":"reference",
      "attrs":{
        "asset-link":"asset_link",
        "asset-name":"asset_name",
        "asset-type":"image/jpg",
        "asset-uid":"uid_of_the_asset_you_want_to_embed",
        "class-name":"embedded-asset",
        "content-type-uid":"sys_assets", //System generated typename that points to all referenced assets
        "display-type":"display",
        "inline":false,
        "type":"asset",
        },
      "children":[
        {
          "text":""
        }
      ]
    },
    {
      "text":"continued text after embedding an asset",
      "bold":true
    }
  ],
  "type":"p",
  "uid":"v4_unique_id",
  "attrs":{
  }
}
```

**Note:** The UID within the block schema can be generated using any online V4 Unique ID generators. This block UID should be unique across the stack.

##### Create an Entry with Master Locale

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **locale_code** (optional)
  Enter the code of the language in which you want your entry to be localized in
  Default: `locale_code`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "entry":{
    "title":"Example One",
    "url":"/example-one",
    "json_rte":{
      "children":[
        {
          "children":[
            {
              "text":"Hello world! This is paragraph 1."
            }
          ],
          "type":"p",
          "uid":"hjsbhys1234",
          "attrs":{
           }
        },
        {
          "children":[
            {
              "text":"This is paragraph 2. "
            },
            {
              "text":"It has good content. ",
              "bold":true
            },
            {
              "text":"Enjoy the good reading!",
              "bold":true,
              "italic":true,
              "align":"right"
            }
          ],
          "type":"p",
          "uid":"ashbhushus5678",
          "attrs":{
          }
        },
        {
          "children":[
            {
              "text":"This is paragraph 3."
            }
          ],
          "type":"p",
          "uid":"kjiwueoiu76thyi70",
          "attrs":{
          }
        },
        {
          "children":[
            {
              "text":"Embedded entry:",
              "bold":true
            },
            {
              "uid":"iyriuyeu098hbhdbd654",
              "type":"reference",
              "attrs":{
                "class-name":"embedded-entry redactor-component inline-entry",
                "content-type-uid":"blog_posts",
                "display-type":"inline",
                "entry-uid":"bltf4838a625cd10cc2",
                "locale":"en-us",
                "type":"entry",
               },
              "children":[
                {
                  "text":""
                }
              ]
            },
            {
              "text":"continued text after embedding an entry."
            }
          ],
          "type":"p",
          "uid":"obmbzxnc34hh6d634",
          "attrs":{
           }
        },
        {
          "children":[
            {
              "text":"Embedded asset:",
              "bold":true
            },
            {
              "uid":"oiweywehbhsgdt64hgyt67",
              "type":"reference",
              "attrs":{
                "asset-link":"https://images.contentstack.io/v3/assets/blt7ccbb0e125b2d1ea/blt8c5a3355119db9cc/60334df62e76da7e3b023327/tech.jpg",
                "asset-name":"tech.jpg",
                "asset-type":"image/jpg",
                "asset-uid":"blt8c5a3355119db9cc",
                "class-name":"embedded-asset",
                "content-type-uid":"sys_assets",
                "display-type":"display",
                "inline":true,
                "type":"asset",
               },
              "children":[
                {
                  "text":""
                }
              ]
            },
            {
              "text":"continued text after embedding an asset",
              "bold":true
            }
          ],
          "type":"p",
          "uid":"llkkj5674hgnbc782378746",
          "attrs":{
           }
        }
      ],
      "type":"doc",
      "uid":"lkjwbhdjdnff77632346",
      "attrs":{
       }
    }
  }
}
```

##### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Example One",
        "url": "/example-one",
        "json_rte": {
            "children": [
                {
                    "children": [
                        {
                            "text": "Hello world! This is paragraph 1."
                        }
                    ],
                    "type": "p",
                    "uid": "hjsbhys1234",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "This is paragraph 2. "
                        },
                        {
                            "text": "It has good content. ",
                            "bold": true
                        },
                        {
                            "text": "Enjoy the good reading!",
                            "bold": true,
                            "italic": true,
                            "align": "right"
                        }
                    ],
                    "type": "p",
                    "uid": "ashbhushus5678",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "This is paragraph 3."
                        }
                    ],
                    "type": "p",
                    "uid": "kjiwueoiu76thyi70",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "Embedded entry:",
                            "bold": true
                        },
                        {
                            "uid": "iyriuyeu098hbhdbd654",
                            "type": "reference",
                            "attrs": {
                                "class-name": "embedded-entry redactor-component inline-entry",
                                "content-type-uid": "blog_posts",
                                "display-type": "inline",
                                "entry-uid": "bltf4838a625cd10cc2",
                                "locale": "en-us",
                                "type": "entry"
                            },
                            "children": [
                                {
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "continued text after embedding an entry."
                        }
                    ],
                    "type": "p",
                    "uid": "obmbzxnc34hh6d634",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "Embedded asset:",
                            "bold": true
                        },
                        {
                            "uid": "oiweywehbhsgdt64hgyt67",
                            "type": "reference",
                            "attrs": {
                                "asset-link": "https://images.contentstack.io/v3/assets/blt7ccbb0e125b2d1ea/blt8c5a3355119db9cc/60334df62e76da7e3b023327/tech.jpg",
                                "asset-name": "tech.jpg",
                                "asset-type": "image/jpg",
                                "asset-uid": "blt8c5a3355119db9cc",
                                "class-name": "embedded-asset",
                                "content-type-uid": "sys_assets",
                                "display-type": "display",
                                "inline": true,
                                "type": "asset"
                            },
                            "children": [
                                {
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "continued text after embedding an asset",
                            "bold": true
                        }
                    ],
                    "type": "p",
                    "uid": "llkkj5674hgnbc782378746",
                    "attrs": {}
                }
            ],
            "type": "doc",
            "uid": "lkjwbhdjdnff77632346",
            "attrs": {},
            "_version": 1
        },
        "locale": "en-us",
        "uid": "blt00364931ef487280",
        "created_by": "blte944d180178d0d41",
        "updated_by": "blte944d180178d0d41",
        "created_at": "2021-07-20T18:20:04.857Z",
        "updated_at": "2021-07-20T18:20:04.857Z",
        "ACL": {},
        "_version": 1,
        "tags": [],
        "_in_progress": false
    }
}
```


#### Create an entry with master locale

**POST** `/content_types/{content_type_uid}/entries`

The Create an entry with master locale request lets you create an entry in the master language of your stack if it does not already exist or has been deleted. You can use the UID of a [localized entry](../../cs-docs/developers/multilingual-content/localize-an-entry.md) to convert it into a [master language entry](../../cs-docs/developers/multilingual-content/set-the-master-language.md).

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.   
If the master language is not accessible or does not exist, a custom user role can still create an entry in any of the other available locales. However, the entry in the master language remains non-existent.

In such a scenario, roles with access to the master locale can create an entry in the master language using the UID of the localized entry and the copy_to_master query parameter. The copy_to_master parameter allows you to copy content from the localized entry to the master language entry version of the stack.

When executing the API call, in the ‘Body’ section, you need to provide the content of your entry based on the content type created. You also need to specify the UID of the localized entry for which you want to create an entry in the master locale.

Here’s what your request body should look like:

```
{
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "uid": "localized_entry_uid"
    }
}
```

##### Create an entry with custom asset field

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **copy_to_master** (required)
  Set this parameter to true to copy content from a localized entry to the master language.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "uid": "blta1f4ca9e3a6cd764"
    }
}
```

##### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Entry in the master language",
        "url": "/entry-in-the-master-language",
        "tags": [],
        "locale": "en-us",
        "uid": "blta1f4ca9e3a6cd764",
        "created_by": "bltb2472ae3265037b1",
        "updated_by": "bltb2472ae3265037b1",
        "created_at": "2021-11-24T10:10:14.067Z",
        "updated_at": "2021-11-24T10:10:14.067Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```


#### Create an entry with custom asset field

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with custom asset field request is used to create an entry with a custom field that accepts data of type asset.

##### Create an entry with taxonomy

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to create an entry. The UID is generated based on the title of the content type and it is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **locale** (required)
  Enter the code of the language in which you want your entry to be localized in.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Request

```json
{
  "entry":{
    "title":"Sample Entry",
    "asset_field":{
      "uid":"bltcdc098dc1a665a96",
      "_content_type_uid":"customassetfieldct",
      "unique_identifier":"3344f31f-5f30-428b-b3b5-0305f5db1026",
      "metadata":{
        "preset":{
          "uid":"3344f31f-5f30-428b-b3b5-0305f5db1026",
          "name":"Preset1",
          "options":{
            
          }
        }
      }
    },
    "tags":[
      
    ]
  }
}
```

##### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Sample Entry",
        "asset_field": {
            "uid": "bltcdc098dc1a665a96",
            "_content_type_uid": "customassetfieldct",
            "unique_identifier": "3344f31f-5f30-428b-b3b5-0305f5db1026",
            "metadata": {
                "preset": {
                    "uid": "3344f31f-5f30-428b-b3b5-0305f5db1026",
                    "name": "Preset1",
                    "options": {}
                }
            },
            "asset": {
                "uid": "bltcdc098dc1a665a96",
                "created_at": "2022-01-04T05:25:59.097Z",
                "updated_at": "2022-01-25T10:37:18.732Z",
                "created_by": "blt3cfef289de5d0c73",
                "updated_by": "blt3cfef289de5d0c73",
                "content_type": "image/jpeg",
                "file_size": "62181",
                "tags": [],
                "filename": "crop_area.jpg",
                "url": "https://dev16-images.contentstack.com/v3/assets/blt7a70757799323168/bltcdc098dc1a665a96/61d3da670c93ef0831bae4dd/crop_area.jpg",
                "ACL": [],
                "is_dir": false,
                "parent_uid": null,
                "_version": 2,
                "title": "crop_area.jpg"
            }
        },
        "tags": [],
        "locale": "en-us",
        "uid": "blt23cda66735c63ad7",
        "created_by": "bltf37273e0002a02fe",
        "updated_by": "bltf37273e0002a02fe",
        "created_at": "2022-02-23T19:17:39.646Z",
        "updated_at": "2022-02-23T19:17:39.646Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```


#### Create an entry with taxonomy

**POST** `/content_types/{content_type_uid}/entries`

The Create an entry with taxonomy request lets you create a new entry for a selected content type that contains a taxonomy field.

In the “Body” section, you need to provide the content of your entry based on the content type created and the details of the taxonomy for the specified content type as follows:

```
{
   "taxonomies":[
      {
         "taxonomy_uid":"taxonomy_uid_1",
         "term_uid":"term_uid_1"
      },
      {
         "taxonomy_uid":"taxonomy_uid_1",
         "term_uid":"term_uid_2"
      },
      {
         "taxonomy_uid":"taxonomy_uid_2",
         "term_uid":"term_uid_2"
      },
      {
         "taxonomy_uid":"taxonomy_uid_2",
         "term_uid":"term_uid_3"
      }
   ]
}
```

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `your_content_type_uid`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
    "entry": {
        "title": "Sample Entry Two",
        "taxonomies": [
            {
                "taxonomy_uid": "sample_one",
                "term_uid": "data_science"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a2"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a1"
            }
        ]
    }
}
```

##### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Sample Entry Two",
        "taxonomies": [
            {
                "taxonomy_uid": "sample_one",
                "term_uid": "data_science"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a2"
            },
            {
                "taxonomy_uid": "sample_two",
                "term_uid": "term_a1"
            }
        ],
        "locale": "en-us",
        "uid": "bltad7a2b9d5597c54c",
        "created_by": "blt4011095e7bc75796",
        "updated_by": "blt4011095e7bc75796",
        "created_at": "2023-11-20T09:58:35.207Z",
        "updated_at": "2023-11-20T09:58:35.207Z",
        "ACL": {},
        "_version": 1,
        "tags": [],
        "_in_progress": false
    }
}
```



#### Update an Entry

#### Update an entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update an entry call lets you update the content of an existing entry.

Passing the locale parameter will cause the entry to be localized in the specified locale.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the “Body” section, to update the taxonomy fields, use the following code:

```
{
   "entry":{
      "title":"example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ]
   }
}
```

**Note**: The Update an entry call does not allow you to update the workflow stage for an entry. To update the workflow stage for the entry, use the [Set Entry Workflow Stage](#set-entry-workflow-stage) call.

#####

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to update.
  Default: `enter your entry uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language of which the entry you need to update.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
   "entry":{
      "title":"example",
      "url":"/example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ]
   }
}
```

##### Sample Response

```json
{
   "notice":"Entry updated successfully.",
   "entry":{
      "title":"example",
      "url":"/example",
      "taxonomies":[
         {
            "taxonomy_uid":"color",
            "term_uid":"blue"
         },
         {
            "taxonomy_uid":"color",
            "term_uid":"yellow"
         }
      ],
      "tags":[
         
      ],
      "locale":"en-us",
      "uid":"blt797597f83fafc900",
      "created_by":"bltefbae0de565c0a44",
      "updated_by":"blt4011095e7bc75796",
      "created_at":"2023-11-20T11:26:00.698Z",
      "updated_at":"2024-07-01T12:36:50.925Z",
      "ACL":{
         
      },
      "_version":18,
      "_in_progress":false
   }
}
```


#### Update an entry with JSON RTE

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update an entry with JSON RTE call lets you update the content of an existing entry.

Passing the locale parameter will cause the entry to be localized in the specified locale.   
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

**Note:** While updating an entry with the JSON RTE field, the same block UID generated while creating an entry must be used.

The schema to update an embedded entry within the JSON RTE field is as follows:

```
{
  "children":[
    {
      "text":"Embedded entry:",
      "bold":true
    },
    {
      "uid":"v4_unique_id",
      "type":"reference",
      "attrs":{
        "class-name":"embedded-entry redactor-component inline-entry",
        "content-type-uid":"content_type_uid",
        "display-type":"inline_or_block",
        "entry-uid":"uid_of_the_entry_you_want_to_embed",
        "locale":"locale_code",
        "type":"entry",
      },
      "children":[
        {
          "text":""
        }
      ]
    },
    {
      "text":"continued text after embedding an entry updated."
    }
  ],
  "type":"p",
  "uid":"v4_unique_id",
  "attrs":{
  }
}
```

The schema to update an embedded asset within the JSON RTE field is as follows:

```
{
  "children":[
    {
      "text":"Embedded asset:",
      "bold":true
    },
    {
      "uid":"v4_unique_id",
      "type":"reference",
      "attrs":{
        "asset-link":"asset_link",
        "asset-name":"asset_name",
        "asset-type":"image/jpg",
        "asset-uid":"uid_of_the_asset_you_want_to_embed",
        "class-name":"embedded-asset",
        "content-type-uid":"sys_assets",
        "display-type":"display",
        "inline":true,
        "type":"asset",
        },
      "children":[
        {
          "text":""
        }
      ]
    },
    {
      "text":"continued text after embedding an asset",
      "bold":true
    }
  ],
  "type":"p",
  "uid":"v4_unique_id",
  "attrs":{
  }
}
```

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to update
  Default: `your_entry_uid`

##### Query Parameters

- **locale_code** (optional)
  Enter the code of the language in which you want your entry to be localized in
  Default: `locale_code`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "entry":{
    "title":"Example One",
    "url":"/example-one",
    "json_rte":{
      "children":[
        {
          "children":[
            {
              "text":"Hello world! This is paragraph 1. And it has been updated with new information."
            }
          ],
          "type":"p",
          "uid":"hjsbhys1234",
          "attrs":{
           }
        },
        {
          "children":[
            {
              "text":"This is paragraph 2. "
            },
            {
              "text":"It has good content. ",
              "bold":true
            },
            {
              "text":"Enjoy the good reading!",
              "bold":true,
              "italic":true,
              "align":"right"
            }
          ],
          "type":"p",
          "uid":"ashbhushus5678",
          "attrs":{
           }
        },
        {
          "children":[
            {
              "text":"This is paragraph 3."
            }
          ],
          "type":"p",
          "uid":"kjiwueoiu76thyi70",
          "attrs":{
           }
        },
        {
          "children":[
            {
              "text":"Embedded entry:",
              "bold":true
            },
            {
              "uid":"iyriuyeu098hbhdbd654",
              "type":"reference",
              "attrs":{
                "class-name":"embedded-entry redactor-component inline-entry",
                "content-type-uid":"blog_posts",
                "display-type":"inline",
                "entry-uid":"bltf4838a625cd10cc2",
                "locale":"en-us",
                "type":"entry",
                },
              "children":[
                {
                  "text":""
                }
              ]
            },
            {
              "text":"continued text after embedding an entry."
            }
          ],
          "type":"p",
          "uid":"obmbzxnc34hh6d634",
          "attrs":{
          }
        },
        {
          "children":[
            {
              "text":"Embedded asset:",
              "bold":true
            },
            {
              "uid":"oiweywehbhsgdt64hgyt67",
              "type":"reference",
              "attrs":{
                "asset-link":"https://images.contentstack.io/v3/assets/blt7ccbb0e125b2d1ea/blt3cc74bb0fb71b4dd/60f7153194a85a104e7e5b52/Banner.png",
                "asset-name":"Banner.png",
                "asset-type":"image/png",
                "asset-uid":"blt3cc74bb0fb71b4dd",
                "class-name":"embedded-asset",
                "content-type-uid":"sys_assets",
                "display-type":"display",
                "inline":true,
                "type":"asset",
               },
              "children":[
                {
                  "text":""
                }
              ]
            },
            {
              "text":"continued text after embedding an asset",
              "bold":true
            }
          ],
          "type":"p",
          "uid":"llkkj5674hgnbc782378746",
          "attrs":{
           }
        }
      ],
      "type":"doc",
      "uid":"lkjwbhdjdnff77632346",
      "attrs":{
       }
    }
  }
}
```

##### Sample Response

```json
{
    "notice": "Entry updated successfully.",
    "entry": {
        "title": "Example One",
        "url": "/example-one",
        "json_rte": {
            "children": [
                {
                    "children": [
                        {
                            "text": "Hello world! This is paragraph 1. And it has been updated with new information."
                        }
                    ],
                    "type": "p",
                    "uid": "hjsbhys1234",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "This is paragraph 2. "
                        },
                        {
                            "text": "It has good content. ",
                            "bold": true
                        },
                        {
                            "text": "Enjoy the good reading!",
                            "bold": true,
                            "italic": true,
                            "align": "right"
                        }
                    ],
                    "type": "p",
                    "uid": "ashbhushus5678",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "This is paragraph 3."
                        }
                    ],
                    "type": "p",
                    "uid": "kjiwueoiu76thyi70",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "Embedded entry:",
                            "bold": true
                        },
                        {
                            "uid": "iyriuyeu098hbhdbd654",
                            "type": "reference",
                            "attrs": {
                                "class-name": "embedded-entry redactor-component inline-entry",
                                "content-type-uid": "blog_posts",
                                "display-type": "inline",
                                "entry-uid": "bltf4838a625cd10cc2",
                                "locale": "en-us",
                                "type": "entry"
                            },
                            "children": [
                                {
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "continued text after embedding an entry."
                        }
                    ],
                    "type": "p",
                    "uid": "obmbzxnc34hh6d634",
                    "attrs": {}
                },
                {
                    "children": [
                        {
                            "text": "Embedded asset:",
                            "bold": true
                        },
                        {
                            "uid": "oiweywehbhsgdt64hgyt67",
                            "type": "reference",
                            "attrs": {
                                "asset-link": "https://images.contentstack.io/v3/assets/blt7ccbb0e125b2d1ea/blt3cc74bb0fb71b4dd/60f7153194a85a104e7e5b52/Banner.png",
                                "asset-name": "Banner.png",
                                "asset-type": "image/png",
                                "asset-uid": "blt3cc74bb0fb71b4dd",
                                "class-name": "embedded-asset",
                                "content-type-uid": "sys_assets",
                                "display-type": "display",
                                "inline": true,
                                "type": "asset"
                            },
                            "children": [
                                {
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "continued text after embedding an asset",
                            "bold": true
                        }
                    ],
                    "type": "p",
                    "uid": "llkkj5674hgnbc782378746",
                    "attrs": {}
                }
            ],
            "type": "doc",
            "uid": "lkjwbhdjdnff77632346",
            "attrs": {},
            "_version": 2
        },
        "locale": "en-us",
        "uid": "blt00364931ef487280",
        "created_by": "blte944d180178d0d41",
        "updated_by": "blte944d180178d0d41",
        "created_at": "2021-07-20T18:20:04.857Z",
        "updated_at": "2021-07-20T18:27:01.856Z",
        "ACL": {},
        "_version": 2,
        "tags": [],
        "_in_progress": false
    }
}
```



#### Atomic Updates to Entries

Atomic operations are particularly useful when we do not want content collaborators to overwrite data. Though it works efficiently for singular fields, these operations come handy especially in case of fields that are marked as “Multiple”.

To achieve data atomicity, we have provided support for following atomic operators: PUSH, PULL, UPDATE, ADD, and SUB.

##### PUSH Operation

#### PUSH Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The PUSH operation allows you to “push” (or append) data into an array without overriding an existing value.

For example, you have an entry with a Number field (named “Multiple Number”), marked as “Multiple” and with the data, “1,” “4,” “5,” and you need to add “2” and “3” to it. In this case, you need to use the PUSH operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "PUSH": {
                "data": [
                    2,
                    3
                ]
            }
        }
    }
}
```

Say you need to push specific data (say “abc”) into a field named “Demo Field” which is within a “Group” field marked as “Multiple”. You need to use the “PUSH” operator as follows:

```
{
    "entry": {
        "multiple_group": {
            "PUSH": {
                "data": {
                    "demo_field": "abc"
                }
            }
        }
    }
}
```

##### PULL Operation

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"multiple_number": {
			"PUSH": {
				"data": [
					2,
					3
				]
			}
		},
		"multiple_group": {
			"PUSH": {
				"data": {
					"demo_field": "abc"
				}
			}
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "No Description",
		"call_to_action_link": {
			"title": "Click here",
			"href": "https://www.contentstack.com/docs"
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:55:35.708Z",
		"_version": 2,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": [{
			"demo_field": "abc"
		}]
	}
}
```


#### PULL Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

ThePULL operationallows you to pull data from an array field based on a query passed.

For example, you have an entry with a “Number” field named “Multiple Number” which has the values, “1,” “2,” “3,” “4,” and “5”, and you need to remove “2” and “ 3”. You need to use the PULL operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "PULL": {
                "query": {
                    "$in": [
                        2,
                        3
                    ]
                }
            }
        }
    }
}
```

Another example is if you need to pull specific field data from a field (say a “Group” field) marked as “Multiple,” where the field name is “Demo Field” and the specific value to be pulled is “abc”. You need to use the “PULL” operator as follows:

```
{
    "entry": {
        "multiple_group": {
            "PULL": {
                "query": {
                    "demo_field": {
                        "$in": ["abc"]
                    }
                }
            }
        }
    }
}
```

**Note:** Here are certain limitations to the PULL request:  
1. Currently, a PULL operation on multiple fields will retrieve the result of only ONE field i.e., if you include multiple fields in your PULL request, you will be able to retrieve the data of only the first mentioned field.  
2. PULL query does not work on Nested Group fields.

##### UPDATE Operation

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"multiple_number": {
			"PULL": {
				"query": {
					"$in": [
						2,
						3
					]
				}
			}
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 4,
		"_in_progress": true,
		"multiple_number": [
			1,
			4,
			5
		]
	}
}
```


#### UPDATE Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The UPDATE operation allows you to update data at a specific index. This operation works for both singular fields and fields marked “Multiple”.

For example, you have an entry with a “Number” (named “Multiple Number”) field which has the values, “6,” “2,” “3,” “4,” and “5”, and you need to replace the number at the first index (a[0]) i.e., “6” with “1”. In this case, you need to use the UPDATE operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "UPDATE": {
                "index": 0,
                "data": 1
            }
        }
    }
}
```

#### UPDATE Operation for Group Field

For example, consider a multi-group field - "banner" with 2 instances, and with titles “banner 1” and “banner 2”.  Using the update operation, to replace the title at the second instance (a[1]) i.e., “Banner 2” with “New update” and link title at the second index with "New level 2 update through CMA call". In this case, you need to use the UPDATE operation as follows:

```
{
    "entry": { 
        "group": {
            "UPDATE": {
                "index": 1,
                "data": {
                    "title": "New update",
                    "link": {
                        "UPDATE": {
                            "data": {
                                "title": "New level 2 update through CMA call"
                            }
                        }
                    }
                }
            }
        }
    }
}
```

Thus, using the UPDATE operation you can update a single/multi-level group field without sending the whole object array. 

#### UPDATE Operation for Nested Modular Blocks

For example, consider the following modular blocks nesting scenario:

Within "content_container" modular blocks, there is a "link_module" block. Within the link_module block, there are "link_components" modular blocks. Within the link_components modular blocks, there is a "link_component" block. In such nested modular blocks scenario, single line fields can be updated with the following Update operation:

```
{
    "entry": {
        "title": "example",
        "content_container": {
            "UPDATE": {
                "index": 1,
                "data": {
                    "link_module": {
                        "module_title": "test link module 2 Updated testing 2 new",
                        "link_components": {
                            "UPDATE": {
                                "index": 1,
                                "data": {
                                    "link_component": {
                                        "teaser": "updated Nested Module teaser using CMA call"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

Thus, using the UPDATE operation, you can update single/multi-level fields within the nested modular blocks without sending the whole object array.

#### Atomic Operators for Number Fields

Contentstack provides support for atomic operators that will specifically help you to work with “Number” fields. These atomic operators include ADD and SUB.

##### ADD Operation

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"multiple_number": {
			"UPDATE": {
				"index": 0,
				"data": 1
			}
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 3,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": []
	}
}
```


#### ADD Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The ADD operation reads the latest value of a “Number” field and increments it by a numeric passed along with the operator. The increment occurs irrespective of what the current value of the field is.

For example, you have a “Number” field and you want to increment the value of the field by one. In this case, you need to use the "ADD":1 operation. This operation reads the latest value of the field, increments it by 1, and replaces the existing value of the field with the new value.

##### SUB Operation

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"number": {
			"ADD": 1
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 9,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 3,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": []
	}
}
```


#### SUB Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The SUB operation works the opposite of ADD. It reads the latest value of a “Number” field and decrements it by a numeric value passed along with the operator.

For example, you have a “Number” field and you want to decrease the value of the field by one. In this case, you need to use the "SUB":1 operation. This operation reads the latest value of the field, decrements it by 1, and replaces the existing value of the field with the new value.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"number": {
			"SUB": 2
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 7,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 3,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": []
	}
}
```



#### Delete an Entry

#### Delete an entry

**DELETE** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&delete_all_localized={boolean_value}`

The Delete an entry request allows you to delete a specific entry from a content type. This API request also allows you to delete single and/or multiple localized entries.   
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

This API Request supports the following actions as well:

- Delete specific localized entry: For this request, you need to only specify the locale code of the language in the locale query parameter. If the locale parameter is not been specified, by default, the master language entry will be deleted.
- Delete master language along with all its localized entries: For this request, instead of the locale query parameter, you need to pass the delete_all_localized:true query parameter.Note: The delete_all_localized parameter will work only if you are deleting localized versions from the master language.
- Delete multiple localized entry: Additionally, you can delete specific localized entries by passing the locale codes in the Request body using the locales key as follows:

```
{
  "entry": {
    "locales": ["hi-in", "mr-in", "es"]
  }
}
```

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to delete the entry. The content type UID is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to delete.
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language of which the entry needs to be deleted.
  Default: `en-us`
- **delete_all_localized** (optional)
  Set the "delete_all_localized" parameter to "true" to delete all the localized versions of the entry.
  Default: `true`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Entry deleted successfully."
}
```



#### Entry Versions

Entry versions provide a history of changes made to an entry over time. You can view metadata for each version and assign custom names to specific versions to help identify key milestones or changes.

To learn how to assign a name to a version, refer to the [Name Entry Version](../../cs-docs/content-managers/author-content/name-entry-versions.md) documentation.

##### Set Version Name for Entry

#### Set Version Name for Entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

The Set Version Name for Entry request allows you to assign a name to a specific version of an entry.

In the request body, you need to specify the version name to be assigned and the locale of the entry.

To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

**Tip**: You can add an additional parameter force:true to force update the version name of the master entry.

##### Get Details of All Versions of an Entry

##### URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry version to which you want to assign a specific name.
  Default: `product`
- **entry_uid** (required)
  Enter the UID of the entry to which you want to assign a specific version name.
  Default: `blt01638c90cc28fb6d`
- **version_number** (required)
  Enter the version number of the entry to which you want to assign a name.
  Default: `1`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"_version_name": "Test version",
		"locale": "fr-fr",
		"force": true
	}
}
```

##### Sample Response

```json
{
	"notice": "Version name assigned successfully"
}
```


#### Get Details of All Versions of an Entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/versions?named={boolean_value}&include_count={boolean_value}&locale={locale_code}&include_updated_at={boolean_value}&include_updated_by={boolean_value}`

The Get Details of All Versions of an Entry request returns comprehensive information of all the versions of a specific entry within a content type.

**Note**:

- If the entry is unlocalized, version details for entries published in the master locale are returned.
- The _version_name field is included in the response only if a name has been assigned to that version. To assign a version name, use the Set Version Name for Entry request.
- When using OAuth, ensure your application includes the cm.entry:read scope to access this endpoint.

##### Delete Version Name of Entry

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry whose version history you want to retrieve.
  Default: `your_entry_uid`

##### Query Parameters

- **named** (optional)
  Set this parameter to 'true' to include in response only the named versions of the specified entry.
  Default: `false`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified entry.
  Default: `true`
- **locale** (optional)
  Enter the locale of the entry. If not provided it uses the master_locale of stack.
  Default: `en-us`
- **include_updated_at** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_updated_by** (optional)
  Set this parameter to 'true' to include in response the UID of the user who updated each version.
  Default: `true`

##### Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication.](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "versions": [
        {
            "_version": 10,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:45:32.678Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 9,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:41:54.163Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 8,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:41:10.914Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 7,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:36:55.607Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 6,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:55.104Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 5,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:27.080Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 4,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:05.469Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 3,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:32:09.120Z",
            "updated_by": "blt3cf27864e6b61df3"
        },
        {
            "_version": 2,
            "locale": "en-us",
            "updated_at": "2025-04-21T16:01:05.721Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 1,
            "locale": "en-us",
            "updated_at": "2025-04-21T15:59:48.020Z",
            "updated_by": "blt**************l3"
        }
    ],
    "count": 10
}
```


#### Delete Version Name of Entry

**DELETE** `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

The Delete Version Name of Entry request allows you to delete the name assigned to a specific version of an entry. This request resets the name of the entry version to the version number.   
To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

##### URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry of which you want to delete the version name.
  Default: `product`
- **entry_uid** (required)
  Enter the UID of the entry of which you want to delete the version name.
  Default: `blt01638c90cc28fb6d`
- **version_number** (required)
  Enter the version number of the entry that you want to delete.
  Default: `1`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Request

```json
{
	"entry": {
		"locale": "en-us"
	}
}
```

##### Sample Response

```json
{
	"notice": "Version name deleted successfully"
}
```



#### Entry References

##### Get references of an entry

#### Get references of an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/references`

The Get references of an entry request retrieves a list of entries and content types that reference the specified entry.

When using OAuth, ensure your application includes the cm.entry:read scope to access this endpoint.

To include publish-related metadata for the referenced entry, set the include_publish_details query parameter to true. This metadata includes:

- _version_name: Name assigned to the latest version (if available)
- _version: Latest version number of the specified entry.
- publish_details: An array of objects containing:environment: UID of the environment where the entry is published
- locale: Locale of the published entry
- time: Timestamp of when the entry was published
- user: UID of the user who performed the publishing action
- version: Version number that was published
- version_name: Metadata about the published version, including title, updated_by, and updated_at

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry to find where it is referenced across entries and content types.
  Default: `blt**************ba`

##### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified entry.
  Default: `true`
- **locale** (optional)
  Enter the locale of the entry. If not provided it uses the master_locale of stack.
  Default: `en-us`
- **deleted** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_branch** (optional)
  Set this parameter to 'true' to include the _branch top-level key in the response.
  Default: `true`
- **include_publish_details** (optional)
  Set this parameter to 'true' to include publish-related metadata for each referenced entry in the response.
  Default: `true`

##### Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "references": [
    {
      "entry_uid": "blt**************2e",
      "content_type_uid": "ref_parent",
      "locale": "en-us",
      "_version": 8,
      "_version_name": {
        "title": "V8",
        "updated_by": "blt**************d8",
        "updated_at": "2025-05-29T08:21:57.731Z"
      },
      "title": "parent entry v8",
      "content_type_title": "Ref Parent",
      "publish_details": [
        {
          "environment": "blt**************26",
          "locale": "en-us",
          "time": "2025-05-14T18:34:49.591Z",
          "user": "blt**************d8",
          "version": 7,
          "version_name": {
            "title": "V7",
            "updated_by": "blt**************d8",
            "updated_at": "2025-05-29T08:18:08.978Z"
          }
        }
      ]
    }
  ],
  "count": 1
}
```



#### Entry Languages

#### Get languages of an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/locales`

The Get languages of an entry call returns the details of all the languages that an entry exists in.   
To configure the permissions for your application via OAuth, please include the cm.entry:read scope.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "locales": [
    {
      "code": "ja-jp",
      "localized": true
    }
  ]
}
```



#### Localize an Entry

#### Localize an entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Localize an entry request allows you to localize an entry i.e., the entry will cease to fetch data from its fallback language and possess independent content specific to the selected locale.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the "Body" parameter, you need to provide the content of your entry based on the content type.

**Note**: When localizing an entry, if a **Group**, **Modular Blocks**, or **Global** field instance contains a field that is marked as non-localizable, you must include _metadata.uid for the field in the request payload to map that instance in child locale. This ensures that the non-localizable field retains its value from the master locale. You can find the metadata UID for each non-localizable field by using the [Get a Single Entry](./content-management-api.md#get-a-single-entry) request for the master entry.

Here's a sample request body:

```
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b"
                }
            }],
        "single_line":"Localizable single line textbox",
        "tags":[]
    }
}
```

**Note:** This request will only create the localized version of your entry and not publish it. To publish your localized entry, you need to use the [**Publish an entry**](../../cs-docs/content-managers/author-content/publish-an-entry.md) request and pass the respective locale code in the locale={locale_code} parameter.

**Additional Resource:** Refer the [Localization](../../cs-docs/developers/multilingual-content/localize-an-entry.md) docs for more information.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you want to localize.
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **locale** (required)
  Enter the code of the language to localize the entry of that particular language.
  Default: `fr-fr`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b"
                }
            }],
        "single_line":"Localizable single line textbox",
        "tags":[]
    }
}
```

##### Sample Response

```json
{
    "notice": "Entry localized successfully.",
    "entry": {
        "locale": "hi-in",
        "uid": "bltf285cc2affe9f495",
        "ACL": {},
        "_in_progress": false,
        "_version": 1,
        "created_at": "2025-05-07T04:52:45.031Z",
        "created_by": "blte93d4119f79db761",
        "group": [
            {
                "single_line": "Non-localizable single line textbox",
                "_metadata": {
                    "uid": "csde3afe4a1ece294b"
                }
            }
        ],
        "single_line": "Localizable single line textbox",
        "tags": [],
        "title": "Sample Entry in Arabic",
        "updated_at": "2025-05-07T04:52:45.031Z",
        "updated_by": "blte93d4119f79db761"
    }
}
```



#### Update a Localized Entry

#### Update a localized entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update a localized entry request allows you to modify the localized version of an entry. This request is used when you want to update content specific to a locale that is independent of the fallback (master) language.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the "Body" parameter, you need to provide the content of your entry based on the content type.

**Important**: If a **Modular Blocks**, **Group**, or **Global** field (marked as multiple) contains a field marked as non-localizable, you must include both _metadata.uid and "non_localizable_content": true for that instance in the request payload. This ensures the non-localizable content continues to retrieve its value from the master locale. You can find the metadata UID for each instance by using the [Get a Single Entry](./content-management-api.md#get-a-single-entry) request for the master entry.

Here's a sample request body:

```
{
  "entry": {
    "title": "Localized Entry Title",
    "group": [
      {
        "single_line": "Master French",
        "_metadata": {
          "uid": "csc5bebf39cfc99787",
          "non_localizable_content": true
        },
        "multi_line": "Localized French Text"
      }
    ],
    "single_line": "Localized single line text",
    "tags": []
  }
}
```

In this example, the group field is marked as multiple and contains a field (single_line) that is non-localizable. The non_localizable_content: true along with _metadata.uid ensures that the single_line field continues to pull its value from the master locale, while allowing updates to other fields like multi_line.

**Note:** This request will only update the localized version of your entry and not publish it. To publish your localized entry, you need to use the [**Publish an entry**](../../cs-docs/content-managers/author-content/publish-an-entry.md) request and pass the respective locale code in the locale={locale_code} parameter.

**Additional Resource:** Refer the [Localization](../../cs-docs/developers/multilingual-content/localize-an-entry.md) docs for more information.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you want to localize.
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **locale** (required)
  Enter the code of the language to localize the entry of that particular language.
  Default: `fr-fr`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b",
                "non_localizable_content": true
                }
            }],
        "single_line":"Update localizable single line textbox",
        "tags":[]
    }
}
```

##### Sample Response

```json
{
    "notice": "Entry updated successfully.",
    "entry": {
        "locale": "hi-in",
        "uid": "bltf285cc2affe9f495",
        "ACL": {},
        "_in_progress": false,
        "_version": 1,
        "created_at": "2025-05-07T04:52:45.031Z",
        "created_by": "blte93d4119f79db761",
        "group": [
            {
                "single_line": "Non-localizable single line textbox",
                "_metadata": {
                    "uid": "csde3afe4a1ece294b"
                }
            }
        ],
        "single_line": "Localizable single line textbox",
        "tags": [],
        "title": "Sample Entry in Arabic",
        "updated_at": "2025-05-07T04:52:45.031Z",
        "updated_by": "blte93d4119f79db761"
    }
}
```



#### Unlocalize Entry

#### Unlocalize an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/unlocalize?locale={locale_code}`

The Unlocalize an entry request is used to unlocalize an existing entry. Read more about [Unlocalization](../../cs-docs/developers/multilingual-content/unlocalize-an-entry.md).   
To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **locale** (required)
  Enter the code of the language to unlocalize the entry of that particular language.
  Default: `fr-fr`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Entry unlocalized successfully."
}
```



#### Export Entry

#### Export an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/export?locale={locale_code}`

The Export an entry call is used to export an entry. The exported entry data is saved in a downloadable JSON file.The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.   
To configure the permissions for your application via OAuth, please include the cm.entries:export scope.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language to unlocalize the entry of that particular language.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"title": "example",
	"url": "/example",
	"tags": [],
	"locale": "en-us",
	"uid": "abcdefhgi1234567890",
	"created_by": "1234567890abcdefghijklmnopq",
	"updated_by": "1234567890abcdefghijklmnopq",
	"created_at": "2015-01-08T15:07:53.495Z",
	"updated_at": "2015-01-08T15:07:53.495Z",
	"ACL": {},
	"_version": 1,
	"_in_progress": false,
	"reference": [
		"bltf123123123123de"
	]
}
```



#### Import Entry

The Import Entry calls given below help you to import entries by uploading JSON files.

**Tip:** You can try the call manually in any REST API client, such as Postman. You can export the required entry's JSON file, make the necessary changes to the data and then import the entry. While importing, you need to pass a form-data parameter named entry and select the input type as 'File'. Then, select the JSON file of the entry that you wish to import.

#### Import an entry

**POST** `/content_types/{content_type_uid}/entries/import?locale={locale_code}&overwrite={overwrite}`

The Import an entry call is used to import an entry. To import an entry, you need to upload a JSON file that has entry data in the format that fits the schema of the content type it is being imported to.   
To configure the permissions for your application via OAuth, please include the cm.entries:import scope.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language to import the entry of that particular language.
  Default: `en-us`
- **overwrite** (optional)
  Select 'true' to replace an existing entry with the imported entry file.
  Default: `false`
- **inclue_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of stack of which you wish to retrieve the content types.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Entry imported successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"reference": [
			"bltfeec9dd9340037de"
		],
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
		"_in_progress": false
	}
}
```


#### Import an existing entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/import?locale={locale}&overwrite={overwrite}`

The Import an existing entry call will import a new version of an existing entry. You can create multiple versions of an entry.   
To configure the permissions for your application via OAuth, please include the cm.entries:import scope.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of an entry that you wish to import. **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language to import the entry of that particular language.
  Default: `en-us`
- **overwrite** (optional)
  Select 'true' to replace an existing entry with the imported entry file.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of stack of which you wish to retrieve the content types.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Entry imported successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"reference": [
			"bltfeec9dd9340037de"
		],
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 2,
		"tags": [],
		"_in_progress": false
	}
}
```



#### Publish Entry

#### Publish an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

The Publish an entry request lets you publish an entry either immediately or schedule it for a later date/time.

**Note:** When you publish an entry, the associated metadata of that entry will also get published. However, when publishing entries in bulk, the associated metadata of the entries will not get published.

To configure the permissions for your application via OAuth, please include the cm.entry:publish scope.

In the 'Body' section, you can specify the locales and environments to which you want to publish the entry. When you pass locales in the "Body", the following actions take place:

- If you have not localized your entry in any of your stack locales, the Master Locale entry gets localized in those locales and are published.
- If you have localized any or all of your entries in these locales, the existing localized content of those locales will NOT be published. However, if you need to publish them all, you need to perform a Bulk Publish operation.

The locale and environment details should be specified in the ‘entry’ parameter. However, if you do not specify any source locale(s), it will be published in the master locale automatically.

Along with the above details, you also need to mention the master locale and the version number of your entry that you want to publish.

In case of **Scheduled Publishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

**Note**: To publish localized entries, you must include the publish_all_localized=true query parameter. This feature is plan-based and might not be enabled by default for your organization. Reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to publish **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"environments": ["development"],
		"locales": ["en-us"]
	},
	"locale": "en-us",
	"version": 1,
	"scheduled_at": "2019-02-14T18:30:00.000Z"
}
```

##### Sample Response

```json
{
	"notice": "The requested action has been performed."
}
```


#### Publish an entry with references

**POST** `/bulk/publish?x-bulk-action=publish`

The Publish an Entry With References request allows you to publish an entry along with all its references at the same time.  
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:publish scope.

**Note:** At a time, you can publish an entry in up to **50 languages** and on **10 environments.**

In the “Body” section, you need to specify the following parameters:

- entries: Pass the details of the main entry i.e., its entry UID, content type UID, the locale code, and the version that you want to publish.
- locales: Pass the locale codes in which you want to publish your entry and its references. If you do not specify a source locale, the entries will be published in the master locale automatically.
- environments: Pass the UIDs of the environments to which you want to publish the entries. You can get the UIDs from Get all environments request.

Here are some additional parameters that you need to pass in the “Request Body”:

- "publish_with_reference": true: Pass this parameter to publish an entry along with its references.Note: Only one level of referenced entries will be published using this API Request.
- skip_workflow_stage_check: true: Pass this parameter to skip those entries that do not satisfy the workflow stage of their publishing rule(s) and publish the rest of them.Note: Specifically applicable for Workflow enabled organizations, when this parameter is set to “false” and if any one of the entries fails to satisfy the set conditions, NONE of the entries will be sent for publishing.
- approvals: true: Pass this parameter to publish only those entries that have been approved by the designated approver, and skip the rest that have not yet been approved.Note: Specifically applicable for Workflow enabled organizations, when this parameter is set to “false” and if any one of the entries is not approved by the Approver, NONE of the entries will be sent for publishing.

##### Query Parameters

- **approvals** (optional)
  Set this to “true” to publish the entries that do not require an approval to be published.
  Default: `true`
- **x-bulk-action** (required)
  Pass “publish” as the value of this parameter in order to publish an entry with all references.
  Default: `publish`
- **skip_workflow_stage_check** (optional)
  Set this to “true” to publish the entries that are at a workflow stage where they satisfy the applied publish rules.
  Default: `true`

##### Headers

- **api_key** (required)
  Default: `blt02f7b45378b008ee`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entries": [{
		"uid": "{entry_uid}",
		"content_type": "{content_type_uid}",
		"version": 1,
		"locale": "{entry_locale_code}"
	}],
	"locales": [
		"{publish_locale}"
	],
	"environments": [
		"{environment_uid}"
	],
	"publish_with_reference": true,
	"skip_workflow_stage_check": true
}
```

##### Sample Response

```json
{
	"notice": "Your bulk publish request is in progress. Please check publish queue for more details."
}
```



#### Unpublish Entry

#### Unpublish an entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/unpublish`

The Unpublish an entry call will unpublish an entry at once, and also, gives you the provision to unpublish an entry automatically at a later date/time.

To configure the permissions for your application via OAuth, please include the cm.entry:unpublish scope.

In the 'Body' section, you can specify the locales and environments from which you want to unpublish the entry. These details should be specified in the ‘entry’ parameter. However, if you do not specify a locale, it will be unpublished from the master locale automatically.

You also need to mention the master locale and the version number of your entry that you want to publish.

In case of **Scheduled Unpublishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

**Note**: To unpublish localized entries, you must include the publish_all_localized=true query parameter. This feature is plan-based and might not be enabled by default for your organization. Reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to import **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **api_version** (required)
  Enter the API version to include Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"environments": ["development"],
		"locales": ["en-us"]
	},
	"locale": "en-us",
	"version": 1,
	"scheduled_at": "2019-02-14T18:30:00.000Z"
}
```

##### Sample Response

```json
{
	"notice": "The requested action has been performed."
}
```


### Entry Variants

Entry Variants allows you to create content variations for different audiences, languages, and marketing experiments. The key concepts include **Base Entry**, **Entry Variant**, and **Variant Group**. This feature streamlines personalized content management, improves consistency, and simplifies updates.

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.


#### Create Entry Variant

#### Create entry variant

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Create entry variant request lets you create an entry variant of your existing base entry.

**Note**: You must have variant groups linked to relevant content type(s). If you have not linked your content types to a variant group yet, refer to the [Link Content Type](./content-management-api.md#link-content-types) request.

In the “Body” section, include only the fields that require updating for the entry variant. The system detects changes automatically based on the values provided. All other fields inherit their values from the base entry. For Group and Modular Blocks fields with multiple instances, use the _order property to define the preferred sequence of instance UIDs.

```
{
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Red variant group 1",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        }
      },
      {
        "single_line": "Red variant group 2",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        }
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.csc30ef8fdc0b190fe",
            "base.cs5bafacf1e94ff8c2"
          ]
        }
      ]
    }
  }
}
```

**Note:**

- The _change_set field is automatically included in the response to indicate which fields were updated in the entry variant.
- The system also detects changes in nested fields and includes them in the _change_set field of the response.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

##### Sample Request

```json
{
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Variant 2",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        },
        "multi_line": "Variant 2 Multi"
      },
      {
        "single_line": "Variant 1",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        },
        "multi_line": "Variant 1 Multi"
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.cs5bafacf1e94ff8c2",
            "base.csc30ef8fdc0b190fe"
          ]
        }
      ]
    }
  }
}
```

##### Sample Response

```json
{
    "entry": {
        "uid": "blt**************a1",
        "_variant": {
            "_change_set": [
                "title",
                "url",
                "single_line",
                "group.cs5bafacf1e94ff8c2.single_line",
                "group.cs5bafacf1e94ff8c2.multi_line",
                "group.csc30ef8fdc0b190fe.single_line",
                "group.csc30ef8fdc0b190fe.multi_line"
            ],
            "_order": [
                {
                    "group": [
                        "base.cs5bafacf1e94ff8c2",
                        "base.csc30ef8fdc0b190fe"
                    ]
                }
            ],
            "_instance_uid": "blt**************d5",
            "_uid": "cs1**************02",
            "_base_entry_version": 1
        },
        "_version": 3,
        "created_at": "2024-09-06T13:30:23.305Z",
        "created_by": "blt**************1a",
        "group": [
            {
                "single_line": "Variant 2",
                "_metadata": {
                    "uid": "cs5bafacf1e94ff8c2"
                },
                "multi_line": "Variant 2 Multi"
            },
            {
                "single_line": "Variant 1",
                "_metadata": {
                    "uid": "csc30ef8fdc0b190fe"
                },
                "multi_line": "Variant 1 Multi"
            }
        ],
        "locale": "en-us",
        "single_line": "Red variant",
        "tags": [],
        "title": "red",
        "updated_at": "2024-09-06T13:32:50.403Z",
        "updated_by": "blt**************1a",
        "url": "/red"
    },
    "notice": "Entry variant created successfully."
}
```



#### Update Entry Variant

#### Update entry variant

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Update entry variant request lets you update an entry variant of your existing base entry.

**Note**: You must have variant groups linked to relevant content type(s). If you have not linked your content types to a variant group yet, refer to the [Link Content Type](./content-management-api.md#link-content-types) request.

In the “Body” section, include only the fields that require updating for the entry variant. The system detects changes automatically based on the values provided. All other fields inherit their values from the base entry. For Group and Modular Blocks fields with multiple instances, use the _order property to define the preferred sequence of instance UIDs.

```
{
   {
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Variant 2",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        },
        "multi_line": "Variant 2 Multi"
      },
      {
        "single_line": "Variant 1",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        },
        "multi_line": "Variant 1 Multi"
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.cs5bafacf1e94ff8c2",
            "base.csc30ef8fdc0b190fe"
          ]
        }
      ]
    }
  }
}
```

**Note:**

- The _change_set field is automatically included in the response to indicate which fields were updated in the entry variant.
- The system also detects changes in nested fields and includes them in the _change_set field of the response.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`

##### Sample Request

```json
{
  "entry": {
    "title": "red",
    "url": "/red",
    "single_line": "Red variant",
    "group": [
      {
        "single_line": "Variant 2",
        "_metadata": {
          "uid": "cs5bafacf1e94ff8c2"
        },
        "multi_line": "Variant 2 Multi"
      },
      {
        "single_line": "Variant 1",
        "_metadata": {
          "uid": "csc30ef8fdc0b190fe"
        },
        "multi_line": "Variant 1 Multi"
      }
    ],
    "_variant": {
      
      "_order": [
        {
          "group": [
            "base.cs5bafacf1e94ff8c2",
            "base.csc30ef8fdc0b190fe"
          ]
        }
      ]
    }
  }
}
```

##### Sample Response

```json
{
    "entry": {
        "uid": "blt**************a1",
        "_variant": {
            "_change_set": [
                "title",
                "url",
                "single_line",
                "group.cs5bafacf1e94ff8c2.single_line",
                "group.cs5bafacf1e94ff8c2.multi_line",
                "group.csc30ef8fdc0b190fe.single_line",
                "group.csc30ef8fdc0b190fe.multi_line"
            ],
            "_order": [
                {
                    "group": [
                        "base.cs5bafacf1e94ff8c2",
                        "base.csc30ef8fdc0b190fe"
                    ]
                }
            ],
            "_instance_uid": "blt**************d5",
            "_uid": "cs1**************02",
            "_base_entry_version": 1
        },
        "_version": 3,
        "created_at": "2024-09-06T13:30:23.305Z",
        "created_by": "blt**************1a",
        "group": [
            {
                "single_line": "Variant 2",
                "_metadata": {
                    "uid": "cs5bafacf1e94ff8c2"
                },
                "multi_line": "Variant 2 Multi"
            },
            {
                "single_line": "Variant 1",
                "_metadata": {
                    "uid": "csc30ef8fdc0b190fe"
                },
                "multi_line": "Variant 1 Multi"
            }
        ],
        "locale": "en-us",
        "single_line": "Red variant",
        "tags": [],
        "title": "red",
        "updated_at": "2024-09-06T13:32:50.403Z",
        "updated_by": "blt**************1a",
        "url": "/red"
    },
    "notice": "Entry variant updated successfully."
}
```



#### Get All Entry Variants

#### Get all entry variants

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/variants`

The Get all entry variants request retrieves all entry variants of the specified entry.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`
- **include_workflow** (optional)
  Enter “true” to include the workflow details of the entry.
  Default: `true`
- **include_publish_details** (optional)
  Enter “true” to include the publish details of the entry.
  Default: `true`
- **include_rules** (optional)
  Enter “true” to include the publishing rules for the entry.
  Default: `true`
- **skip** (optional)
  Enter the number of items to be skipped from the response body.
  Default: `0`
- **limit** (optional)
  Enter the maximum number of items to be returned.
  Default: `10`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
    "entries": [
        {
            "uid": "blt**************a1",
            "_variant": {
                "_change_set": [
                    "title",
                    "url",
                    "single_line",
                    "group.cs5bafacf1e94ff8c2.single_line",
                    "group.cs5bafacf1e94ff8c2.multi_line",
                    "group.csc30ef8fdc0b190fe.single_line",
                    "group.csc30ef8fdc0b190fe.multi_line"
                ],
                "_order": [
                    {
                        "group": [
                            "base.cs5bafacf1e94ff8c2",
                            "base.csc30ef8fdc0b190fe"
                        ]
                    }
                ],
                "_instance_uid": "blta9cc89a57108129246d5",
                "_uid": "3439b92ff6b5406ab559e7e7f246a49b",
                "_base_entry_version": 1
            },
            "_version": 1,
            "created_at": "2024-09-09T10:28:46.093Z",
            "created_by": "blt6fe92749b66ad81a",
            "group": [
                {
                    "single_line": "Variant 2",
                    "_metadata": {
                        "uid": "cs5bafacf1e94ff8c2"
                    },
                    "multi_line": "Variant 2 Multi"
                },
                {
                    "single_line": "Variant 1",
                    "_metadata": {
                        "uid": "csc30ef8fdc0b190fe"
                    },
                    "multi_line": "Variant 1 Multi"
                }
            ],
            "locale": "en-us",
            "single_line": "Green Variant",
            "tags": [],
            "title": "Green RD",
            "updated_at": "2024-09-09T10:28:46.093Z",
            "updated_by": "blt6fe92749b66ad81a",
            "url": "/green"
        },
        {
            "uid": "blt05097f3d980a17a1",
            "_variant": {
                "_change_set": [
                    "title",
                    "url",
                    "single_line"
                ],
                "_order": [],
                "_instance_uid": "blta9cc89a57108129246d5",
                "_uid": "3439b92ff6b5406ab559e7e7f246a49c",
                "_base_entry_version": 1
            },
            "_version": 4,
            "created_at": "2024-09-06T13:30:23.305Z",
            "created_by": "blt**************1a",
            "locale": "en-us",
            "single_line": "Red variant",
            "tags": [],
            "title": "red",
            "updated_at": "2024-09-09T10:27:44.796Z",
            "updated_by": "blt**************1a",
            "url": "/red"
        }
    ]
}
```



#### Get Single Entry Variant

#### Get single entry variant

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Get single entry variant request retrieves a single variant entry of a given base entry.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`
- **include_workflow** (optional)
  Enter “true” to include the workflow details of the entry.
  Default: `true`
- **include_publish_details** (optional)
  Enter “true” to include the publish details of the entry.
  Default: `true`
- **include_rules** (optional)
  Enter “true” to include the publishing rules for the entry.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
    "entry": {
        "uid": "blt**************a1",
        "_variant": {
            "_change_set": [
                "title",
                "url",
                "single_line",
                "group.cs5bafacf1e94ff8c2.single_line",
                "group.cs5bafacf1e94ff8c2.multi_line",
                "group.csc30ef8fdc0b190fe.single_line",
                "group.csc30ef8fdc0b190fe.multi_line"
            ],
            "_order": [
                {
                    "group": [
                        "base.cs5bafacf1e94ff8c2",
                        "base.csc30ef8fdc0b190fe"
                    ]
                }
            ],
            "_instance_uid": "blta9cc89a57108129246d5",
            "_uid": "3439b92ff6b5406ab559e7e7f246a49b",
            "_base_entry_version": 1
        },
        "_version": 1,
        "created_at": "2024-09-09T10:28:46.093Z",
        "created_by": "blt**************1a",
            "group": [
                {
                    "single_line": "Variant 2",
                    "_metadata": {
                        "uid": "cs5bafacf1e94ff8c2"
                    },
                    "multi_line": "Variant 2 Multi"
                },
                {
                    "single_line": "Variant 1",
                    "_metadata": {
                        "uid": "csc30ef8fdc0b190fe"
                    },
                    "multi_line": "Variant 1 Multi"
                }
            ],
        "locale": "en-us",
        "single_line": "Green Variant",
        "tags": [],
        "title": "Green RD",
        "updated_at": "2024-09-09T10:28:46.093Z",
        "updated_by": "blt**************1a",
        "url": "/green"
    }
}
```



#### Delete Entry Variant

#### Delete entry variant

**DELETE** `/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}`

The Delete entry variant request lets you delete an entry variant.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`
- **variant_uid** (required)
  Enter the unique ID of your variant.
  Default: `your_variant_uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
    "notice": "Entry variant deleted successfully."
}
```



#### Publish Entry Variant

#### Publish entry variant

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/publish`

The Publish entry variant request lets you publish an entry variant.

In the “Body” section, include the variant UID and version within variants. Pass the publish_latest_base_conditionally key as true within variant_rules.

```
"variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ],
        "variant_rules": {
            "publish_latest_base_conditionally": true
        }
```

**Note**: You don't need to include the base entry version in the payload. The entry variant will be published based on the latest version or as specified by the variant_rules toggle. If the base entry version is included, the system will ignore it.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **api_version** (required)
  Enter the API version to include Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "entry": {
        "environments": ["production"],
        "locales": ["en-us"],
        "variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ],
        "variant_rules": {
            "publish_latest_base": false,
            "publish_latest_base_conditionally": true
        }
    },
    "locale": "en-us"
}
```

##### Sample Response

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "75****1f-e**0-46**-a**5-02********9a"
}
```



#### Unpublish Entry Variant

#### Unpublish entry variant

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/unpublish`

The Unpublish entry variant request lets you unpublish an entry variant.

In the “Body” section, include the version number and variant UID within variants.

```
"variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ]
```

**Note**: You don't need to include the base entry version in the payload. The entry variant will be unpublished based on the latest version or as specified by the variant_rules toggle. If the base entry version is included, the system will ignore it.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of your content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `your_entry_uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the language for the entry you want to update.
  Default: `en-us`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **api_version** (required)
  Enter the API version to include Nested Reference Publishing.
  Default: `3.2`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "entry": {
        "environments": ["blt**************fd"],
        "locales": ["en-us"],
        "variants": [
            {
                "uid": "cs6**************a5",
                "version": 1
            }
        ]
    },
    "locale": "en-us"
}
```

##### Sample Response

```json
{
    "notice": "The requested action has been performed.",
    "job_id": "05****9c-9**0-45**-9**4-ea********37"
}
```


### Assets

[Assets](/docs/content-managers/author-content/#create-and-manage-assets) refer to all the media files (images, videos, PDFs, audio files, and so on) uploaded in your Contentstack repository for future use. 

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

These files can be attached and used in multiple [entries](../../cs-docs/content-managers/author-content/about-entries.md).


#### Get All Assets

#### Get all assets

**GET** `/assets?folder={folder_uid}&include_folders={boolean_value}&environment={environment}&version={version_number}&include_publish_details={boolean_value}&include_count={include_count}&relative_urls={relative_urls}&asc={asc_field_uid}&desc={desc_field_uid}`

The Get all assets request returns comprehensive information on all assets available in a stack.

To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.   
Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.

You will find the asset metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata":{
    "extensions":{
       "{extension_uid}":[
            {
                "image_copyrights": "Contentstack Branding",
                "scope”: “local”
            }
        ]
    }
}
```

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](./content-delivery-api.md#queries) section of the Content Delivery API doc.

**Tip:** To include the publish details in the response, make use of the include_publish_details parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. When you publish an asset, the associated metadata of that asset will also get published.

##### Query Parameters

- **folder** (optional)
  Enter either the UID of a specific folder to get the assets of that folder, or enter ‘cs_root’ to get all assets and their folder details from the root folder.
  Default: `bltd7854a4567gh7`
- **include_folders** (optional)
  Set this parameter to ‘true’ to include the details of the created folders along with the details of the assets.
  Default: `true`
- **environment** (optional)
  Enter the name of the environment to retrieve the assets published on them. You can enter multiple environments.
  Default: `production`
- **version** (optional)
  Specify the version number of the asset that you want to retrieve. If the version is not specified, the details of the latest version will be retrieved.
  Default: `1`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include the total number of assets available in your stack in the response body.
  Default: `false`
- **relative_urls** (optional)
  Set this to 'true' to display the relative URL of the asset.
  Default: `false`
- **asc** (optional)
  Enter the unique ID of the field for sorting the assets in ascending order by that field.
  Default: `created_at`
- **desc** (optional)
  Enter the unique ID of the field for sorting the assets in descending order by that field.
  Default: `file_size`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"assets": [{
			"uid": "blt558a9890b838abcd",
			"created_at": "2015-01-08T15:07:53.495Z",
			"updated_at": "2015-01-08T15:07:53.495Z",
			"created_by": "abcd1234567890",
			"updated_by": "abcd1234567890",
			"content_type": "application/vnd.contenstack.folder",
			"tags": [],
			"name": "Asset Folder",
			"ACL": {},
			"is_dir": true,
			"parent_uid": null,
			"_version": 2
		},
		{
			"uid": "bltabc123e1a1231b23d",
			"created_at": "2018-12-27T04:58:58.014Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "abcd1234567890",
			"updated_by": "abcd1234567890",
			"content_type": "image/png",
			"file_size": "42670",
			"tags": [],
			"filename": "Asset file.png",
			"url": "https://images.contentstack.io/v3/assets/blt23423c2acaae34b3/bltabc123e1a2b34b5d/5c555c555d5c5e5cc5b55d555/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "blt1223b11e22ae333f",
			"_version": 1,
			"title": "Asset file.png",
			"publish_details": [{
				"environment": "bltc15045c3098babcd",
				"locale": "en-us",
				"time": "2015-01-08T15:07:53.495Z",
				"user": "blt42ed70d5f81026a2b9f",
				"version": 1
			}]
		}
	]
}
```



#### Get a Single Asset

#### Get an asset

**GET** `/assets/{asset_uid}?include_path={boolean_value}&version={version_number}&environment={environment}&include_publish_details={boolean_value}&relative_urls={relative_urls}`

The Get an asset request returns comprehensive information about a specific version of an asset of a stack.

To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.   
Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.

You will find the asset metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata":{
    "extensions":{
       "{extension_uid}":[
            {
                "image_copyrights": "Contentstack Branding",
                "scope”: “local”
            }
        ]
    }
}
```

**Tip:** To include the publish details in the response, make use of the include_publish_details parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. When you publish an asset, the associated metadata of that asset will also get published. However, when publishing assets in bulk, the associated metadata of the assets will not get published.

##### URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset of which you want to retrieve the details.
  Default: `blt91af1e5af9c3639f`

##### Query Parameters

- **include_path** (optional)
  Set this parameter to ‘true’ to retrieve the complete path of the folder. The path will be displayed as an array of objects which includes the names and UIDs of each parent folder.
  Default: `false`
- **version** (optional)
  Specify the version number of the asset that you want to retrieve. If the version is not specified, the details of the latest version will be retrieved. **Note**: If no version is mentioned, this request will retrieve the latest published version of the asset. To retrieve a specific version, make use of the version parameter and keep the environment parameter blank.
  Default: `1`
- **environment** (optional)
  Enter the name of the environment to retrieve assets published on them. You can enter multiple environments.
  Default: `production`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the asset.
  Default: `true`
- **relative_urls** (optional)
  Set this to 'true' to display the relative URL of the asset. This parameter is not applicable when you delete an asset.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"asset": {
		"uid": "blt558a9890b838abcd",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"created_by": "abcd1234567890",
		"updated_by": "abcd1234567890",
		"content_type": "image/png",
		"file_size": "12227244",
		"tags": [],
		"filename": "file-name.png",
		"url": "https: //images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltd44a4444444444e7/5d2dfe55af0d5dea966e/download",
		"ACL": {},
		"is_dir": false,
		"_version": 1,
		"title": "Test",
		"description": "This is testing",
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "blt7d4028cc76efee9e",
			"version": 1
		}]
	}
}
```



#### Get Assets of a Specific Folder

#### Get assets of a specific folder

**GET** `/assets?folder={folder_uid}`

The Get assets of a specific folder retrieves all assets of a specific asset folder; however, it doesn't retrieve the details of subfolders within it.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

##### Query Parameters

- **folder** (required)
  Enter the UID of the asset folder.
  Default: `enter_your_folder_uid`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `bltd7eee4a49bdf2842`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"assets": [{
			"uid": "bltabc555e5a5b55b5d",
			"created_at": "2018-12-27T04:58:58.014Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "blt1e1dead1f11f1111",
			"updated_by": "blt1e1dead1f11f1111",
			"content_type": "image/png",
			"file_size": "42670",
			"tags": [],
			"filename": "Sample File",
			"url": "https://images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltabc555e5a5b55b5d/5c555c55d5c5e5cc5b55d555/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "blt0011b00e11ae001f",
			"_version": 1,
			"title": "Sample File",
			"publish_details": []
		},
		{
			"uid": "bltdd55a5555555b5f5",
			"created_at": "2018-12-27T04:58:58.101Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "blt1e1dead1f11f1111",
			"updated_by": "blt1e1dead1f11f1111",
			"content_type": "image/png",
			"file_size": "53825",
			"tags": [],
			"filename": "Sample File 2",
			"url": "https://images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltdd55a5555555b5f5/5c555c555a5ac5dc5b55cc5a/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "blt0011b00e11ae001f",
			"_version": 1,
			"title": "Sample File 2",
			"publish_details": []
		}
	]
}
```



#### Get Assets and Subfolders of a Parent Folder

#### Get assets and subfolders of a parent folder

**GET** `/assets?include_folders={boolean_value}&folder={folder_uid}`

The Get assets and folders of a parent folder retrieves details of both assets and asset subfolders within a specific parent asset folder.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

##### Query Parameters

- **include_folders** (required)
  Set this parameter to ‘true’ to include the asset folders in the search query.
  Default: `true`
- **folder** (required)
  Enter the UID of the parent folder.
  Default: `enter_your_folder_uid`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"assets": [{
			"uid": "blt1111b11e11ae111f",
			"created_at": "2019-07-10T12:01:24.694Z",
			"updated_at": "2019-07-10T12:01:24.694Z",
			"created_by": "blt22e22222d22d2f22222a2b2f",
			"updated_by": "blt22e22222d22d2f22222a2b2f",
			"content_type": "application/vnd.contenstack.folder",
			"tags": [],
			"name": "Demo Folder",
			"ACL": {},
			"is_dir": true,
			"parent_uid": "bltd11bd1a1c11111ee",
			"_version": 1
		},
		{
			"uid": "bltabc555e5a5b55b5d",
			"created_at": "2018-12-27T04:58:58.014Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "blt1e1dead1f11f1111",
			"updated_by": "blt1e1dead1f11f1111",
			"content_type": "image/png",
			"file_size": "42670",
			"tags": [],
			"filename": "Sample File",
			"url": "https://images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltabc555e5a5b55b5d/5c555c55d5c5e5cc5b55d555/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "bltd11bd1a1c11111ee",
			"_version": 1,
			"title": "Sample File",
			"publish_details": []
		}
	]
}
```



#### Upload Asset

#### Upload asset

**POST** `/assets?relative_urls={boolean_value}&include_dimension={boolean_value}`

The Upload asset request uploads an asset file to your stack.  
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

To upload assets from your local system to Contentstack and manage their details, you need to use the following "form-data" parameters:

  
    

| Parameter | Description |
| --- | --- |
| asset[upload] (mandatory) | Select the input type as 'File'. Then, browse and select the asset file that you want to import. Most file types are supported. |
| asset[parent_uid] (optional) | If needed, assign a parent folder to your asset by passing the UID of the parent folder. |
| asset[title] (optional) | Enter a title for your uploaded asset. |
| asset[description] (optional) | Enter a description for your uploaded asset. |
| asset[tags] (optional) | Assign a specific tag(s) to your uploaded asset. |

  

You can try the call manually in any REST API client, such as Postman. Here's a screenshot for reference:

For easier access, here's the cURL for this API Request:

```
curl -X POST \
  https://api.contentstack.io/v3/assets?include_dimension=true \
  -H 'api_key: {api_key_of_your_stack}' \
  -H 'authtoken: {your_authtoken}' \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F 'asset[upload]=@{Filepath e.g., /C:/Users/abc/Desktop/Sample.png}' \
  -F 'asset[parent_uid]={If you need to add this file under an existing asset folder, pass the UID of the parent folder.}' \
  -F 'asset[title]={If needed, enter a title for your uploaded asset.}' \
  -F 'asset[description]={If needed, enter a description for your uploaded asset.}'
  -F 'asset[tags]={If needed, assign a specific tag to your uploaded asset.}'
```

In the above cURL command, pass the necessary values within the curly brackets. The asset[parent_uid],asset[title],asset[description],asset[tags], and include_dimension=true parameters are optional. You can skip them if not required.

##### Query Parameters

- **relative_urls** (optional)
  Set this to 'true' to display the relative URL of the asset.
  Default: `false`
- **include_dimension** (optional)
  Set this to 'true' to include the dimensions (height and width) of the image in the response.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Pass “multipart/form-data” to include form data body parameters.
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "notice": "Asset created successfully.",
    "asset": {
        "uid": "asset_uid",
        "created_at": "2020-12-09T07:58:53.020Z",
        "updated_at": "2020-12-09T07:58:53.020Z",
        "created_by": "user_uid",
        "updated_by": "user_uid",
        "content_type": "image/png",
        "file_size": "file_size",
        "tags": [
            "workflows",
            "stages"
        ],
        "filename": "file-name.png",
        "url": "https://assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/asset_name",
        "ACL": {},
        "is_dir": false,
        "parent_uid": "parent_asset_folder_uid",
        "_version": 1,
        "title": "Test",
        "description": "This is a test image.",
        "dimension": {
            "height": "image_height",
            "width": "image_width"
        }
    }
}
```



#### Replace Asset

#### Replace asset

**PUT** `/assets/{asset_uid}?environment={environment}&relative_urls={boolean_value}`

The Replace asset call will replace an existing asset with another file on the stack.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Tip:** You can try the call manually in any REST API client, such as Postman.  
Under 'Body', pass a body parameter named asset[upload] and select the input type as 'File'. This will enable you to select the file that you wish to import.  
You can assign a parent folder to your asset by using the asset[parent_uid] parameter, where you can pass the UID of the parent folder.  
Additionally, you can pass optional parameters such as asset[title] and asset[description] which let you enter a title and a description for the uploaded asset, respectively.

##### URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset of which you wish to retrieve details, or that you wish to update or delete.
  Default: `blt91af1e5af9c3639f`

##### Query Parameters

- **environment** (optional)
  Enter the name of the environment if you wish to retrieve the assets published on a particular environment. You can enter multiple environments.
  Default: `production`
- **relative_urls** (optional)
  Set this to 'true' to display the relative URL of the asset. This parameter is not applicable when you delete an asset.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Asset updated successfully.",
	"asset": {
		"uid": "blt91af1e5af9c3639f",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"created_by": "abcd1234567890",
		"updated_by": "abcd1234567890",
		"content_type": "image/png",
		"file_size": "12227244",
		"tags": [],
		"app_user_object_uid": "system",
		"filename": "file-name.png",
		"url": "https://assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
		"ACL": {},
		"_version": 1,
		"title": "Test",
		"description": "This is testing",
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "sys_bltd0f5afeabcd"
		}]
	}
}
```



#### Generate Permanent Asset URL

#### Generate permanent asset URL

**PUT** `/assets/{asset_uid}`

The Generate Permanent Asset URL request allows you to generate a permanent URL for an asset. This URL remains constant irrespective of any subsequent updates to the asset.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Warning**: You can generate the permanent asset URL and update the asset details only once. Once done, you can no longer make changes to the permanent URL.

In the request body, you need to pass the permanent URL in the following format:

```
{
    "asset": {
        "permanent_url": "https://images.contentstack.io/v3...{stack_api_key}/{asset_uid}/{unique_identifier}"

    }
}
```

In the above URL, you can pass any unique identifier (slug) that suits your requirement.

Another way to generate a permanent URL for an asset is to pass the URL as a form-data parameter, i.e., asset[permanent_url]. In that case, the Content-Type in the **Headers** section must be changed from application/json to multipart/form-data. You can provide the permanent URL of your choice (along with a slug) as a value for this parameter, for example:

```
https://{base_URL}/v3/assets/{stack_api_key}/{asset_uid}/{slug}
```

##### URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset for which you want to generate a permanent URL. Use the [Get All Assets](./content-management-api.md#get-all-assets) request to get the UID of the asset.
  Default: `your_asset_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter “application/json” to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "asset": {
        "permanent_url": "https://images.contentstack.io/v3/assets/{stack_api_key}/{asset_UID}/sample-slug.jpeg"
         
    }
}
```

##### Sample Response

```json
{
"notice": "Asset updated successfully.",
 "asset": {
    "uid": "blt27ce607b94b7e5ed",
    "created_at": "2021-04-17T09:27:06.922Z",
    "updated_at": "2021-05-10T06:47:55.726Z",
    "created_by": "blt00d8ff3f5827019c",
    "updated_by": "blt00d8ff3f5827019c",
    "content_type": "image/jpeg",
    "file_size": "5505",
    "tags": [],
    "filename": "boy.jpeg",
    "url": "https://images.contentstack.io//v3/assets/blt1fba6c8ee0351ff8/blt27ce607b94b7e5ed/607aa9ea2bd7634611656475/boy.jpeg",
    "ACL": {},
    "is_dir": false,
    "parent_uid": null,
    "_version": 31,
    "title": "boy.jpeg",
    "description": "New description",
    "permanent_url": "https://images.contentstack.io/v3/assets/{stack_api_key}/{asset_UID}/sample-slug.jpeg"
  }
}
```



#### Download an Asset with Permanent URL

#### Download an asset with permanent URL

**GET** `/assets/{api_key}/{asset_uid}/{slug}`

The Download an asset with permanent URL request displays an asset in the response. The asset returned in the response can be saved to your local storage system. Make sure to specify the unique identifier (slug) in the request URL.  
  
To configure the permissions for your application via OAuth, please include the cm.assets:download scope.

This request will return the most recent version of the asset, however, to download the latest published version of the asset, pass the environment query parameter with the environment name.

**Note**: Before executing this API request, ensure to [create a permanent URL for the asset](./content-management-api.md#generate-permanent-asset-url) you want to download.

##### URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset you want to download. Use the [Get All Assets](./content-management-api.md#get-all-assets) request to get the UID of the asset.
  Default: `your_asset_uid`
- **slug** (required)
  Enter the unique identifier of the asset.
  Default: `your_url_slug`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Pass “application/json” as the value to this parameter.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{Displays the requested asset in API response}
```



#### Delete Asset

#### Delete asset

**DELETE** `/assets/{asset_uid}`

The Delete asset call will delete an existing asset from the stack.  
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

##### URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset that you want to delete.
  Default: `blt91af1e5af9c3639f`

##### Headers

- **api_key** (required)
  Default: `the API key of the stack that holds the asset`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "notice": "Asset deleted successfully."
}
```



#### Rich Text Editor Assets

#### Get information on RTE assets

**GET** `/assets/rt`

The Get information on RTE assetscall returns comprehensive information on all assets uploaded through the [Rich Text Editor field](../../cs-docs/developers/create-content-types/rich-text-editor.md).  
To configure the permissions for your application via OAuth, please include the cm.assets.rt:read scope.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `the API key of the stack that holds the asset`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
[{
    "image": "https://api.assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "thumb": "https://api.assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "title": "filename"
}]
```



#### Asset Versions

Versioning helps you track changes made to assets over time. You can assign custom names to specific asset versions for easier identification and reference.

For more details, refer to the [Name Asset Versions](../../cs-docs/content-managers/author-content/name-asset-versions.md) documentation.

##### Set Version Name for Asset

#### Set Version Name for Asset

**POST** `/assets/{asset_uid}/versions/{version_number}/name`

The Set Version Name for Asset request allows you to assign a name to a specific version of an asset.

In the request body, you need to specify the version name to be assigned to the asset version.

To configure the permissions for your application via OAuth, please include the cm.asset:writescope.

##### Get Details of All Versions of an Asset

##### URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset of which you want to assign a name to a specific asset version.
  Default: `blt04d762f8af902c97`
- **version_number** (required)
  Enter the version number of the asset version that you want to assign a name to.
  Default: `2`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"upload": {
		"_version_name": "Version name"
	}
}
```

##### Sample Response

```json
{
	"notice": "Version name assigned successfully."
}
```


#### Get Details of All Versions of an Asset

**GET** `/assets/{asset_uid}/versions?named={boolean_value}&include_count={boolean_value}&include_updated_at={boolean_value}&include_updated_by={boolean_value}`

The Get Details of All Versions of an Asset request returns comprehensive information of all the versions of a specific asset within your stack.

**Note**:

- The _version_name field is included in the response only if a name has been assigned to that version. To assign a version name, use the Set Version Name for Asset request.
- When using OAuth, ensure your application includes the cm.asset:read scope to access this endpoint.

##### Delete Version Name of Asset

##### URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset of which you want to retrieve details of all versions.
  Default: `blt04d762f8af902c97`

##### Query Parameters

- **named** (optional)
  Set this parameter to 'true' to include in response only the named versions of the specified asset.
  Default: `false`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified asset.
  Default: `true`
- **include_updated_at** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_updated_by** (optional)
  Set this parameter to 'true' to include in response the UID of the user who updated each version.
  Default: `true`

##### Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "versions": [
        {
            "_version": 2,
            "updated_at": "2025-04-24T09:03:13.496Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 1,
            "updated_at": "2025-04-24T09:00:59.720Z",
            "updated_by": "blt**************f3"
        }
    ],
    "count": 2
}
```


#### Delete Version Name of Asset

**DELETE** `/assets/{asset_uid}/versions/{version_number}/name`

The Delete Version Name of Asset request allows you to delete the name assigned to a specific version of an asset. This request resets the name of the asset version to the version number.  
  
To configure the permissions for your application via OAuth, please include the cm.asset:write scope.

##### URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset of which you want to delete the version name.
  Default: `blt04d762f8af902c97`
- **version_number** (required)
  Enter the version number of the asset of which you want to delete the version name.
  Default: `2`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Version name deleted successfully"
}
```



#### Asset Reference

##### Get asset references

#### Get asset references

**GET** `/assets/{asset_uid}/references`

The Get asset references request retrieves a list of entries and content types that reference the specified asset.

When using OAuth, ensure your application includes the cm.asset:read scope to access this endpoint.

To include publish-related metadata for the referenced asset, set the include_publish_details query parameter to true. This metadata includes:

- _version_name: Name assigned to the latest version (if available)
- _version: Latest version number of the specified asset
- publish_details: An array of objects containing:environment: UID of the environment where the asset is published
- locale: Locale of the published asset
- time: Timestamp of when the asset was published
- user: UID of the user who performed the publishing action
- version: Version number that was published
- version_name: Metadata about the published version, including title, updated_by, and updated_at

##### URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset to find where it is referenced across entries and content types.
  Default: `blt**************ba`

##### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified asset.
  Default: `true`
- **deleted** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_branch** (optional)
  Set this parameter to 'true' to include the _branch top-level key in the response.
  Default: `true`
- **include_publish_details** (optional)
  Set this parameter to 'true' to include publish-related metadata for each referenced asset in the response.
  Default: `true`

##### Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **branch** (optional)
  Enter your branch's unique ID.
  Default: `main`

##### Sample Response

```json
{
  "references": [
    {
      "entry_uid": "blt**************2e",
      "content_type_uid": "ref_parent",
      "locale": "en-us",
      "_version": 8,
      "_version_name": {
        "title": "V8",
        "updated_by": "blt**************d8",
        "updated_at": "2025-05-29T08:21:57.731Z"
      },
      "title": "parent entry v8",
      "content_type_title": "Ref Parent",
      "publish_details": [
        {
          "environment": "blt**************26",
          "locale": "en-us",
          "time": "2025-05-14T18:34:49.591Z",
          "user": "blt**************d8",
          "version": 7,
          "version_name": {
            "title": "V7",
            "updated_by": "blt**************d8",
            "updated_at": "2025-05-29T08:18:08.978Z"
          }
        }
      ]
    }
  ],
  "count": 1
}
```



#### Retrieve Specific Asset Types

#### Get either only images or videos

**GET** `/assets/{asset_type}`

The Get either only images or videos request retrieves assets that are either image or video files, based on query request.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](./content-delivery-api.md#queries) section of the Content Delivery API doc.

##### URL Parameters

- **asset_type** (required)
  Enter the asset type that you want to retrieve. For example, "images" or "videos". For images, _https://api.contentstack.io/v3/assets/images_ For videos, _https://api.contentstack.io/v3/assets/videos_
  Default: `images`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `the API key of the stack that holds the asset`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "assets": [
    {
      "uid": "blt558a9890b838abcd",
      "created_at": "2015-01-08T15:07:53.495Z",
      "updated_at": "2015-01-08T15:07:53.495Z",
      "created_by": "abcd1234567890",
      "updated_by": "abcd1234567890",
      "content_type": "image/png",
      "file_size": "12227244",
      "tags": [],
      "app_user_object_uid": "system",
      "filename": "file-name.png",
      "url": "https://api.assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
      "ACL": {},
      "publish_details": [
        {
          "environment": "bltc15045c3098babcd",
          "locale": "en-us",
          "time": "2015-01-08T15:07:53.495Z",
          "user": "sys_bltd0f5afeabcd"
        }
      ]
    }
  ]
}
```



#### Update Asset Details

#### Update asset revision

**PUT** `/assets/{asset_uid}`

The Update asset revision call upgrades a specified version of an asset as the latest version of that asset.

To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

Under 'Body', you need to specify the asset version number that you want to make the latest in raw JSON format, and also provide a "Title" and a "Description" for the asset. Another way to provide a "Title" and a "Description" for the asset is to pass them as optional form-data parameters, i.e., asset[title] and asset[description].

Here's an example of the raw body:

```
{
    "asset": {
        "title": "Title",
        "description": "Description"
    },
    "version": 3
}
```

##### URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset of which you want to update the version.
  Default: `enter_your_asset_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Pass “application/json” to enter JSON request body and “multipart/form-data” to include form data body parameters.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"asset": {
		"title": "Title",
		"description": "Description"
	},
	"version": enter_version_number
}
```

##### Sample Response

```json
{
  "notice": "Asset updated successfully.",
  "asset": {
    "uid": "blt558a9890b838abcd",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "content_type": "image/png",
    "file_size": "12227244",
    "tags": [],
    "app_user_object_uid": "system",
    "filename": "file-name.png",
    "url": "https://assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "ACL": {},
    "_version": 2,
    "title": "Test",
    "description": "This is testing"
  }
}
```


#### Update asset

**PUT** `/assets/{asset_uid}`

The Update asset request allows you to update the title and description of an asset.  
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Note: **Here are some points to keep in mind:  
1. You can also use this request to [Generate a permanent URL](./content-management-api.md#generate-permanent-asset-url)
 for your asset, which remains constant irrespective of any further updates to the asset.  
2. This call updates only the meta data of an asset. To replace an asset, try the [Replace asset](./content-management-api.md#replace-asset) request under **Asset Collection**.

Under 'Body', you need to pass the updated details of "Title" and "Description" is in the form of 'raw' body as follows:

```
{
   "asset":{
      "title":"new title",
       "description":"updated description"
     }
}
```

Another way to provide a "Title" and a "Description" for the asset is to pass them as optional form-data parameters, i.e., asset[title] and asset[description]. You can assign a parent folder to your asset by using the asset[parent_uid] parameter, where you need to pass the UID of the parent folder.

##### URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset that you want to update.
  Default: `blt558a9890b838abcd`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Pass “multipart/form-data” as the value to this parameter to include form data body parameters.
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"asset": {
		"title": "Title",
		"description": "Description"
	},
	"version":" enter_version_number"
}
```

##### Sample Response

```json
{
  "notice": "Asset updated successfully.",
  "asset": {
    "uid": "blt558a9890b838abcd",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "content_type": "image/png",
    "file_size": "12227244",
    "tags": [],
    "app_user_object_uid": "system",
    "filename": "file-name.png",
    "url": "https://assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "ACL": {},
    "_version": 1,
    "title": "Test",
    "description": "This is testing",
    "publish_details": [
      {
        "environment": "bltc15045c3098babcd",
        "locale": "en-us",
        "time": "2015-01-08T15:07:53.495Z",
        "user": "sys_bltd0f5afeabcd"
      }
    ]
  }
}
```



#### Publish Asset

#### Publish an asset

**POST** `/assets/{asset_uid}/publish`

The Publish an asset call is used to publish a specific version of an asset on the desired [environment](../../cs-docs/developers/set-up-environments/about-environments.md) either immediately or at a later date/time.  
To configure the permissions for your application via OAuth, please include the cm.asset:publish scope.

**Note: **When you publish an asset, the associated metadata of that asset will also get published. However, when publishing assets in bulk, the associated metadata of the assets will not get published.

In case of **Scheduled Publishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

In the 'Body' section, enter the asset details, such as locales and environments, where the assets need to be published. These details should be in JSON format.

##### URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset that you want to publish.
  Default: `blt558a9890b838abcd`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"asset": {
		"locales": [
			"en-us"
		],
		"environments": [
			"development"
		]
	},
	"version": 1,
	"scheduled_at": "2019-02-08T18:30:00.000Z"
}
```

##### Sample Response

```json
{
	"notice": "Asset sent for publishing."
}
```



#### Unpublish Asset

#### Unpublish an asset

**POST** `/assets/{asset_uid}/unpublish`

The Unpublish an asset call is used to unpublish a specific version of an asset from a desired [environment](../../cs-docs/developers/set-up-environments/about-environments.md).  
To configure the permissions for your application via OAuth, please include the cm.asset:unpublish scope.

In case of **Scheduled Unpublishing**, add the scheduled_at key and provide the date/time in the ISO format as its value. Example: "scheduled_at":"2016-10-07T12:34:36.000Z"

In the 'Body' section, enter the asset details, such as locales and environments, from where the assets need to be unpublished. These details should be in JSON format.

##### URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset that you wish to unpublish.
  Default: `blt91af1e5af9c3639f`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"asset": {
		"locales": [
			"en-us"
		],
		"environments": [
			"development"
		]
	},
	"version": 1,
	"scheduled_at": "2019-02-08T18:30:00.000Z"
}
```

##### Sample Response

```json
{
  "notice": "Asset sent for unpublishing."
}
```



#### Asset Folder Collection

#### Get a single folder

**GET** `/assets/folders/{folder_uid}?include_path={boolean_value}`

The Get a single folder call gets the comprehensive details of a specific [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders) by means of folder UID.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

When executing the API call to search for a subfolder, you need to provide the parent folder UID.

##### URL Parameters

- **folder_uid** (required)
  Enter the uid of the folder
  Default: `enter_asset_folder_uid`

##### Query Parameters

- **include_path** (optional)
  Set this parameter to ‘true’ to retrieve the complete path of the folder. The path will be displayed as an array of objects which includes the names and UIDs of each parent folder.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"asset": {
		"uid": "blt91af1e5af9c3639f",
		"created_at": "2019-07-16T07:25:43.846Z",
		"updated_at": "2019-07-16T07:25:43.846Z",
		"created_by": "blt123123cc123fe123",
		"updated_by": "blt123123cc123fe123",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo",
		"ACL": {},
		"is_dir": true,
		"parent_uid": "blt123af1e2af3c12321f",
		"path": [{
			"uid": "blt99af9e9af9c9999f",
			"name": "sample"
		}],
		"_version": 1
	}
}
```


#### Get a single folder by name

**GET** `/assets?query={"is_dir": true, "name": "folder_name"}`

The Get a single folder by name call retrieves a specific [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders) based on the name provided.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

##### Query Parameters

- **query** (required)
  Enter the is_dir and name parameters to find the asset folder by name.
  Default: `{"is_dir": true, "name": "folder_name"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"assets": [{
		"uid": "blt1111b11e11ae111f",
		"created_at": "2019-07-10T12:01:24.694Z",
		"updated_at": "2019-07-10T12:01:24.694Z",
		"created_by": "blt22e22222d22d2f22222a2b2f",
		"updated_by": "blt22e22222d22d2f22222a2b2f",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo Folder",
		"ACL": {},
		"is_dir": true,
		"parent_uid": "bltd11bd1a1c11111ee",
		"_version": 1
	}]
}
```


#### Get subfolders of a parent folder

**GET** `/assets?include_folders=true&query={"is_dir": true}&folder={parent_folder_uid}`

The Get subfolders of a parent folder request retrieves the details of only the subfolders of a specific [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders). This request does not retrieve asset files.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

##### Query Parameters

- **include_folders** (required)
  Set this parameter to ‘true’ to include the asset folders in the search query.
  Default: `true`
- **query** (required)
  Enter the is_dir parameter to include asset folder details.
  Default: `{"is_dir": true}`
- **folder** (required)
  Enter the parent folder UID.
  Default: `enter_your_folder_uid`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `bltd7eee4a49bdf2842`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"assets": [{
		"uid": "blt1111b11e11ae111f",
		"created_at": "2019-07-10T12:01:24.694Z",
		"updated_at": "2019-07-10T12:01:24.694Z",
		"created_by": "blt22e22222d22d2f22222a2b2f",
		"updated_by": "blt22e22222d22d2f22222a2b2f",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo Folder",
		"ACL": {},
		"is_dir": true,
		"parent_uid": "bltd11bd1a1c11111ee",
		"_version": 1
	}]
}
```


#### Create a folder

**POST** `/assets/folders`

The Create a folder call is used to create an asset folder and/or add a parent folder to it (if required). To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

In the ‘Body’ section, you need to provide a name for the new folder.

If you want to place this folder within another folder, provide the UID of the parent folder in the Request body as follows:

```
{
    "asset": {
        "name": "asset_folder_name",
        "parent_uid": "asset_parent_folder_uid"
    }
}
```

**Note:** Here are some points that needs to be considered when executing this API request:

- A maximum of 300 folders can be created.
- The maximum level of folder nesting is 5.
- When nesting folder, you cannot nest a folder within the same folder or within its child folders.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"asset": {
		"name": "Demo"
	}
}
```

##### Sample Response

```json
{
	"notice": "Folder created successfully.",
	"asset": {
		"uid": "blt1bf1231a7fd1231b",
		"created_at": "2019-07-17T05:27:07.318Z",
		"updated_at": "2019-07-17T05:27:07.318Z",
		"created_by": "blt123123cc123fee1e",
		"updated_by": "blt123123cc123fee1e",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo",
		"ACL": {},
		"is_dir": true,
		"parent_uid": "bltf0000d00f00c0e00",
		"_version": 1
	}
}
```


#### Update or move folder

**PUT** `/assets/folders/{folder_uid}`

The Update or move folder request can be used either to update the details of a folder or set the parent folder if you want to move a folder under another folder.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

When executing the API request, provide the UID of the folder that you want to move/update.

In the ‘Body’ section, you need to provide a new name for your folder, and if you want to move your folder within another folder, then you need provide the UID of the parent folder.

**Note**: Here are some points that needs to be considered when executing this API request:

- A maximum of 300 folders can be created.
- The maximum level of folder nesting is 5.
- When nesting folder, you cannot nest a folder within the same folder or within its child folders.

##### URL Parameters

- **folder_uid** (required)
  Enter the UID of the folder that you want to either update or move.
  Default: `blt12af3e1af23c123f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"asset": {
		"name": "Demo"
	}
}
```

##### Sample Response

```json
{
	"notice": "Folder updated successfully.",
	"asset": {
		"uid": "blt91af1e5af9c3639f",
		"created_at": "2019-07-17T05:40:36.606Z",
		"updated_at": "2019-07-17T05:44:23.604Z",
		"created_by": "blt123123cc123fee1e",
		"updated_by": "blt123123cc123fee1e",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo",
		"is_dir": true,
		"parent_uid": "blt91af1e5af9c0000f",
		"_version": 3
	}
}
```


#### Delete a folder

**DELETE** `/assets/folders/{folder_uid}`

The Delete a folder call is used to delete an [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders) along with all the assets within that folder.

When executing the API call, provide the parent folder UID.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

##### URL Parameters

- **folder_uid** (required)
  Enter the UID of the asset folder that you want to delete.
  Default: `bltc7aa14ea1959b25c`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Folder deleted successfully."
}
```


### Embed Entries and Assets in the Rich Text Editor

You can embed other entries and/or assets inside the [Rich Text Editor](../../cs-docs/developers/create-content-types/rich-text-editor.md) (RTE) field while creating entries. Inside the RTE field, you can embed entries inline; at the block level; or as a hyperlink; and assets as downloadable entities or simply display them (for images).

**Note**: This feature is available only if it is part of your plan. To avail of this feature, you can get in touch with our [Support](mailto:support@contentstack.com) team.

The embedded items are added as HTML components within the RTE, and their contents change dynamically as and when you modify the source item. When retrieved or modified, these embedded HTML components are returned in the API response as JSON objects.

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

**Additional Resource**: Refer to the “Utils SDK” of our [SDKs](/docs/developers/#platforms-and-sdks) to understand how you can render embedded entries and assets using the Contentstack SDKs.


#### Create a content type with embedded RTE objects

#### Create a content type with embedded RTE objects

**POST** `/content_types`

The Create a content type with embedded RTE objects request lets you create a content type, which supports embedded objects inside its RTE field.  
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the complete schema of the content type (refer [JSON schema for creating a content type](../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md)).

To embed entries within a specific RTE, pass the reference_to parameter with valid content type UIDs to determine entries of which content type(s) can be embedded inside the editor.

**Note**: The max number of content types that can be referenced within a single Rich Text Editor field is **10**.

To embed assets within a specific RTE, you can pass "sys_assets" value within the reference_to array  along with the content type UIDs.

Here’s a sample schema of a Rich Text Editor field that supports embedded entries and assets:

```
{
    "data_type":"text",
    "display_name":"Sample RTE",
    "uid":"sample_rich_text_editor",
    "field_metadata":{
        "..."
    },
    "reference_to":[
        "content_type_UID_1",
        "content_type_UID_1",
        "sys_assets"
    ],
    "..."
}
```

**Additional Resource**: Refer to the [Rich Text Field Schema](../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md#html-based-rich-text-editor) guide to understand how you can format the content entered in the field.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "content_type":{
        "title":"Sample Content",
        "uid":"sample_content",
        "schema":[
            {
                "display_name":"Title",
                "uid":"title",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "mandatory":true,
                "multiple":false
            },
            {
                "display_name":"URL",
                "uid":"url",
                "data_type":"text",
                "field_metadata":{
                    "_default":true
                },
                "unique":false,
                "multiple":false
            },
            {
                "data_type":"text",
                "display_name":"Sample RTE",
                "uid":"sample_rich_text_editor",
                "field_metadata":{
                    "allow_rich_text":true,
                    "description":"",
                    "multiline":false,
                    "rich_text_type":"advanced"
                },
                "reference_to":[
                    "content_type_UID_1",
                    "content_type_UID_1",
                    "sys_assets"
                ],
                "mandatory":false,
                "unique":false,
                "non_localizable":false
            }
        ],
        "options":{
            "title":"title",
            "publishable":true,
            "is_page":true,
            "singleton":false,
            "sub_title":[
                "url"
            ],
            "url_pattern":"/:title",
            "url_prefix":"/"
        }
    }
}
```

##### Sample Response

```json
{
    "notice": "Content Type created successfully.",
    "content_type": {
        "created_at": "2020-11-12T18:18:18.924Z",
        "updated_at": "2020-11-12T18:18:18.924Z",
        "title": "Sample Content",
        "uid": "sample_content",
        "_version": 1,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Title",
                "uid": "title",
                "data_type": "text",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "unique": false,
                "mandatory": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "display_name": "URL",
                "uid": "url",
                "data_type": "text",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "unique": false,
                "multiple": false,
                "mandatory": false,
                "non_localizable": false
            },
            {
                "data_type": "text",
                "display_name": "Sample RTE",
                "uid": "sample_rich_text_editor",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "version": 3
                },
                "reference_to": [
                    "content_type_UID_1",
                    "content_type_UID_1",
                    "all_fields"
                ],
                "mandatory": false,
                "unique": false,
                "non_localizable": false,
                "multiple": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": "",
        "DEFAULT_ACL": {
            "others": {
                "read": false,
                "create": false
            },
            "users": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true
                    },
                    "uid": "blt6da09d8f8ac9acef"
                }
            ],
            "management_token": {
                "read": true
            }
        },
        "SYS_ACL": {
            "roles": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "blt983fb5327bb1b58a"
                },
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "blt26061f22e61a661b"
                },
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "bltf42db7c8ee32b48a"
                }
            ],
            "others": {
                "read": false,
                "create": false,
                "update": false,
                "delete": false,
                "sub_acl": {
                    "read": false,
                    "create": false,
                    "update": false,
                    "delete": false,
                    "publish": false
                }
            }
        },
        "options": {
            "title": "title",
            "publishable": true,
            "is_page": true,
            "singleton": false,
            "sub_title": [
                "url"
            ],
            "url_pattern": "/:title",
            "url_prefix": "/"
        },
        "abilities": {
            "get_one_object": true,
            "get_all_objects": true,
            "create_object": true,
            "update_object": true,
            "delete_object": true,
            "delete_all_objects": true
        }
    }
}
```



#### Update content type with embedded RTE objects

#### Update content type with embedded RTE objects

**PUT** `/content_types/{content_type_uid}`

The Update content type with embedded RTE objects request allows you to update the schema of an existing content type that contains embedded entries and/or assets within its Rich Text Editor field. To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

**Note**: Whenever you update a content type, it will auto-increment the content type version.

When executing the API request, in the “URL Parameters” section, provide the unique ID of your content type.

In the “Body” section, you need to provide the updated schema of your content type. You can refer the [JSON schema for creating a content type](../../cs-docs/developers/create-content-types/json-schema-for-creating-a-content-type.md) document to know how you can add/update fields in your content type through API.

You can make changes to the schema of the Rich Text Editor field while updating the content type schema. Here is a sample of an updated Rich Text Editor schema:

```
{
    "data_type":"text",
    "display_name":"Updated RTE",
    "uid":"updated_rich_text_editor",
    "field_metadata":{
        "allow_rich_text":true,
        "description":"",
        "multiline":false,
        "rich_text_type":"advanced"
    },
    "reference_to":[
        "content_type_UID_1",
        "content_type_UID_2",
        "sys_assets"
    ],
    "mandatory":false,
    "unique":false,
    "non_localizable":false
}
```

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that you wish to update. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"content_type": {
		"title": "Saby Content",
		"uid": "seba",
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"data_type": "text",
				"display_name": "Sample RTE",
				"uid": "sample_rich_text_editor",
				"field_metadata": {
					"allow_rich_text": true,
					"description": "",
					"multiline": false,
					"rich_text_type": "advanced"
				},
				"reference_to": ["content_type_UID_1", "content_type_UID_2", "content_type_UID_3", "sys_assets"],
				"mandatory": false,
				"unique": false,
				"non_localizable": false
			}
		],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

##### Sample Response

```json
{
    "notice": "Content Type updated successfully.",
    "content_type": {
        "created_at": "2020-11-12T18:18:18.924Z",
        "updated_at": "2020-11-12T18:27:44.555Z",
        "title": "Updated Sample Content",
        "uid": "sample_content",
        "_version": 2,
        "inbuilt_class": false,
        "schema": [
            {
                "display_name": "Title",
                "uid": "title",
                "data_type": "text",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "unique": false,
                "mandatory": true,
                "multiple": false,
                "non_localizable": false
            },
            {
                "display_name": "URL",
                "uid": "url",
                "data_type": "text",
                "field_metadata": {
                    "_default": true,
                    "version": 3
                },
                "unique": false,
                "multiple": false,
                "mandatory": false,
                "non_localizable": false
            },
            {
                "data_type": "text",
                "display_name": "Sample RTE",
                "uid": "sample_rich_text_editor",
                "field_metadata": {
                    "allow_rich_text": true,
                    "description": "",
                    "multiline": false,
                    "rich_text_type": "advanced",
                    "version": 3
                },
                "reference_to": [
                    "content_type_UID_1",
                    "content_type_UID_2",
                    "content_type_UID_3",
                    "sys_assets"
                ],
                "mandatory": false,
                "unique": false,
                "non_localizable": false,
                "multiple": false
            }
        ],
        "last_activity": {},
        "maintain_revisions": true,
        "description": "",
        "DEFAULT_ACL": {
            "others": {
                "read": false,
                "create": false
            },
            "users": [
                {
                    "uid": "blt6da09d8f8ac9acef",
                    "read": true,
                    "sub_acl": {
                        "read": true
                    }
                }
            ]
        },
        "SYS_ACL": {
            "roles": [
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "blt983fb5327bb1b58a"
                },
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "blt26061f22e61a661b"
                },
                {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "publish": true,
                        "delete": true
                    },
                    "uid": "bltf42db7c8ee32b48a"
                }
            ],
            "others": {
                "read": false,
                "create": false,
                "update": false,
                "delete": false,
                "sub_acl": {
                    "read": false,
                    "create": false,
                    "update": false,
                    "delete": false,
                    "publish": false
                }
            }
        },
        "options": {
            "title": "title",
            "publishable": true,
            "is_page": true,
            "singleton": false,
            "sub_title": [
                "url"
            ],
            "url_pattern": "/:title",
            "url_prefix": "/"
        },
        "abilities": {
            "get_one_object": true,
            "get_all_objects": true,
            "create_object": true,
            "update_object": true,
            "delete_object": true,
            "delete_all_objects": true
        }
    }
}
```



#### Create an entry with embedded entries in RTE

#### Create an entry with embedded entries in RTE

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with embedded RTE entries request allows you to embed entries inside the Rich Text Editor field while creating a new entry for the selected content type.

**Note**: Within a single Rich Text Editor field, you can embed a **maximum of 100**components, entries and assets combined.

When executing the API request, in the 'Body' section, you need to provide the content of your entry based on the fields present within the content type created.  
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

If your entry contains a Rich Text Editor field, you can embed entry/entries of the same or other content types inside the field as HTML components. These embedded entries can be added inline within the flow of content; as a separate content block; or as a dynamic hyperlink within the rich text.

**Note**: Only the Rich Text Editor fields of type Custom and Advanced support embedded objects. You cannot embed entries and/or assets inside a Basic editor.

Since we refer to an embedded entry as a separate HTML element, you need to wrap the entry component inside the <div> HTML tag. To refer to the entry of your choice and define what embedded style you prefer, specify the following attributes:

- class: To specify a class name for the HTML element (embedded entry)
- data-sys-entry-uid: To specify the unique ID of the entry that you want to embed inside the editor
- data-sys-entry-locale: To specify the locale code for the language in which the selected entry is localized
- data-sys-content-type-uid: To specify the unique ID of the content type to which the embedded entry belongs
- sys-style-type: You can pass inline, block, or link to specify how you want to embed the entry within the text
- type: To specify the type of object embedded inside the rich text, e.g., entry

Here’s a sample of rich text that contains embedded entries:

```
"rich_text_editor": "

Embedded entry as block:

Embedded entry inline with text:

Embedded entry as link:

"
```

The above Rich Text Editor contains entries embedded as a separate content block; within the flow of text; and as a hyperlink to another Contentstack entry.

**Note**: Contentstack’s [SDKs](/docs/developers/#platforms-and-sdks) help consume the response returned when you create an entry containing embedded objects. You can then decide what content (fields of the embedded entry, for instance) should be rendered on the frontend.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type for which you want to create an entry. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **locale_code** (optional)
  Enter the code of the language in the which you want to create the entry.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"title": "test entry",
		"url": "/test-entry",
		"rich_text_editor": "<p>Embedded entry as block:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"block\" type=\"entry\"></div><p>Embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltc2bcca1a99a89261\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div><p>Embedded entry as link:</p><a class='embedded-entry' data-sys-entry-uid='blt36e18c7c05db737b' data-sys-entry-locale='en-us' data-sys-content-type-uid='sample_content_type' sys-style-type='link' type='entry'></a>",
		"tags": []
	}
}
```

##### Sample Response

```json
{
	"notice": "Entry created successfully.",
	"entry": {
		"title": "test entry",
		"url": "/test-entry",
		"rich_text_editor": "<p>Embedded entry as block:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"block\" type=\"entry\"></div><p>Embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltc2bcca1a99a89261\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div><p>Embedded entry as link:</p><a class='embedded-entry' data-sys-entry-uid='blt36e18c7c05db737b' data-sys-entry-locale='en-us' data-sys-content-type-uid='sample_content_type' sys-style-type='link' type='entry'></a>",
		"tags": [],
		"locale": "en-us",
		"uid": "blt29828a1df3f0c176",
		"created_by": "blt702565fb0d35107f",
		"updated_by": "blt702565fb0d35107f",
		"created_at": "2020-11-13T14:43:44.027Z",
		"updated_at": "2020-11-13T14:43:44.027Z",
		"ACL": {},
		"_version": 1,
		"_in_progress": false
	}
}
```



#### Create an entry with embedded assets in RTE

#### Create an entry with embedded assets in RTE

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with embedded RTE assets request allows you to embed assets inside the Rich Text Editor field while creating a new entry for the selected content type.

**Note**: Within a single Rich Text Editor field, you can embed a maximum of **100 components**, entries and assets combined.

When executing the API request, in the 'Body' section, you need to provide the content of your entry based on the content type created.  
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

If your entry contains a Rich Text Editor field, you can embed assets inside the Rich Text as downloadable or display images within the rich text.

**Note**: Only the Rich Text Editor fields of type Custom and Advanced support embedded objects. You cannot embed entries and/or assets inside a Basic editor.

Since we refer to an embedded asset as a separate HTML element, you need to wrap the asset component inside the <div> HTML tag. To refer to the asset of your choice and define what embedded style you prefer, specify the following attributes:

- class: To specify a class name for the HTML element (embedded asset)
- data-sys-asset-uid: To specify the unique ID of the asset that you want to embed inside the editor
- sys-style-type: You can pass display or download to specify whether the embedded asset should be downloadable or act as a display image
- type: To specify the type of object embedded inside the rich text, e.g., asset

**Tip**: An embedded asset works exactly like the [Reference](../../cs-docs/developers/create-content-types/reference.md) field. When you update the details of an embedded asset or replace the source asset with another asset, the Rich Text Editor automatically updates the embedded HTML component with the latest version of that asset.

Here’s a sample of rich text that contains embedded assets:

```
"rich_text_editor": "

Embedded asset as display image:

Embedded asset as downloadable image:

"
```

**Note**: Contentstack’s [SDKs](/docs/developers/sdks/) help consume the response returned when you create an entry containing embedded objects. You can then render the embedded assets on the frontend whenever required.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type for which you want to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

##### Query Parameters

- **locale_code** (optional)
  Enter the code of the language in the which you want to create the entry.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"entry": {
		"title": "sample entry",
		"url": "/sample-entry",
		"rich_text_editor": "<p>Embedded asset as display image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt8d49bb742bcf2c83\" type=\"asset\" sys-style-type=\"display\"></img><p>Embedded asset as downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"bltb47f1aa5ae422cd1\" type=\"asset\" sys-style-type=\"download\"></img>",
		"tags": []
	}
}
```

##### Sample Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "sample entry",
        "url": "/sample-entry",
        "rich_text_editor": "<p>Embedded asset as display image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt8d49bb742bcf2c83\" type=\"asset\" sys-style-type=\"display\"></img><p>Embedded asset as downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"bltb47f1aa5ae422cd1\" type=\"asset\" sys-style-type=\"download\"></img>",
        "tags": [],
        "locale": "en-us",
        "uid": "blt0cc9749011036398",
        "created_by": "blt702565fb0d35107f",
        "updated_by": "blt702565fb0d35107f",
        "created_at": "2020-11-13T15:18:25.887Z",
        "updated_at": "2020-11-13T15:18:25.887Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```



#### Update embedded RTE objects

#### Update embedded RTE objects

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update embedded RTE objects request lets you update the embedded entries or assets placed inside the Rich Text Editor field of an entry.

In the 'Body' section, provide the updated Rich Text Editor information in JSON format.   
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

**Tip**: You can either replace the embedded asset with another or change the style (downloadable or displayable) in which the asset has been embedded inside the editor.

Here’s a sample of updated Rich Text Editor content:

```
"rich_text_editor": "

Updated embedded asset to downloadable image:

Updated embedded entry inline with text:

"
```

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to update an entry. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry of which you want to update embedded objects.
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **locale_code** (optional)
  Enter the code of the language of which you want to update an entry.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "entry": {
        "title": "example",
        "url": "/example",
        "rich_text_editor": "<p>Updated embedded asset to downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt120a5a04d91c9466\" type=\"asset\" sys-style-type=\"download\"></img><p>Updated embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div>",
        "tags": []
    }
}
```

##### Sample Response

```json
{
    "notice": "Entry updated successfully.",
    "entry": {
        "title": "example",
        "url": "/example",
        "rich_text_editor": "<p>Updated embedded asset to downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt120a5a04d91c9466\" type=\"asset\" sys-style-type=\"download\"></img><p>Updated embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div>",
        "tags": [],
        "locale": "en-us",
        "uid": "blt8fdd3f0a4313dece",
        "created_by": "blt702565fb0d35107f",
        "updated_by": "blt702565fb0d35107f",
        "created_at": "2020-11-13T17:03:18.470Z",
        "updated_at": "2020-11-13T17:58:43.300Z",
        "ACL": {},
        "_version": 2,
        "_in_progress": false
    }
}
```



#### Get information on embedded RTE objects

#### Get information on embedded RTE objects

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}&include_embedded_items[]=BASE`

The Get information on embedded RTE objects request returns comprehensive information on all entries and/or assets embedded within the Rich Text Editor field.

To configure the permissions for your application via OAuth, please include the cm.entries.management:read scope.   
If your entry contains a Rich Text Editor field and you wish to fetch the content schema of the items embedded inside the rich text, then you need to pass the include_embedded_items[]=BASE query parameter.

You can view information about the embedded objects under the _embedded_items parameter in the JSON response body.

**Note**: Contentstack’s [Content Delivery SDKs](../../cs-docs/developers/fetch-content.md#fetch-content-using-content-delivery-sdks) help consume the embedded entries and assets returned in the API response. You can then render the embedded objects on the frontend however required.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that contains entries with embedded objects. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry of which you wish to fetch embedded object information.
  Default: `blt9965f5f9840923ba`

##### Query Parameters

- **locale_code** (optional)
  Enter the code of the language of which the entries need to be included.
  Default: `en-us`
- **include_embedded_items[]** (optional)
  Enter ‘BASE’ to include entries and assets embedded inside the Rich Text Editor field.
  Default: `BASE`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "entry":{
        "title":"example",
        "url":"/example",
        "rich_text_editor":"<p>This is a sample article:</p><div class=\"redactor-component embedded-entry block-entry\" data-sys-entry-uid=\"blt60e06920a98836a6\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"my_homepage\" sys-style-type=\"block\" type=\"entry\"></div>\n<p>Image for reference:</p><figure class=\"embedded-asset\" data-sys-asset-filelink=\"https://images.contentstack.io/v3/assets/blt38776c9acaa22eh3/bltdd7ea64b0ed4hft3/601154640839e910126d96eg/download\" data-sys-asset-uid=\"bltdd7ea64b0ed4fdb6\" data-sys-asset-filename=\"Sample_Image.png\" data-sys-asset-contenttype=\"image/png\" type=\"asset\" sys-style-type=\"display\"></figure>",
        "tags":[
            
        ],
        "locale":"en-us",
        "uid":"blt39b7fd7860cc900f",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2021-09-17T08:25:07.139Z",
        "updated_at":"2021-09-17T08:25:07.139Z",
        "_version":1,
        "_in_progress":true,
        "_embedded_items":{
            "rich_text_editor":[
                {
                    "title":"Demo Entry",
                    "url":"/demo",
                    "reference":[
                        "blte95c40e1c723e983"
                    ],
                    "tags":[
                        "demo"
                    ],
                    "locale":"en-us",
                    "uid":"blt60e06920a98836a6",
                    "created_by":"blt42e55757d70d5f81026a2b9f",
                    "updated_by":"blt6563a9b067fc1bc9",
                    "created_at":"2020-04-08T03:05:37.254Z",
                    "updated_at":"2021-03-23T09:19:59.878Z",
                    "_content_type_uid":"my_homepage",
                    "ACL":{
                        
                    },
                    "_version":12,
                    "_in_progress":false,
                    "employee_address":[
                        {
                            "rich_text_editor":"<p><img src=\"https://images.contentstack.io/v3/assets/blt38776c9acaae33b3/blt82640f35115b64e7/5e8c6f1505ab2062f3a1b822/download\" data-sys-asset-uid=\"blt82640f35115b64e7\" alt=\"Modular Blocks within Global.png\" style=\"background-color: initial; display: block; margin: auto;\">Sample text.</p>",
                            "_metadata":{
                                "uid":"csc8c89feb26118172"
                            },
                            "boolean":true
                        },
                        {
                            "rich_text_editor":"<p>This is sample text.</p>",
                            "_metadata":{
                                "uid":"cs1d57fbd82e175ba7"
                            },
                            "boolean":true
                        }
                    ],
                    "_workflow":{
                        "uid":"draft",
                        "updated_at":"2021-01-15T07:39:19.361Z",
                        "updated_by":"blt6563a9b067fc1bc9",
                        "version":11,
                        "assigned_to":[
                            
                        ],
                        "assigned_by_roles":[
                            
                        ],
                        "due_date":"2021-01-26"
                    },
                    "publish_details":[
                        {
                            "environment":"blt53fbd8ad11c50150",
                            "locale":"en-us",
                            "time":"2021-04-15T14:01:27.846Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"en-us",
                            "time":"2021-08-25T03:57:47.466Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"blta1079be5fcfdfad2",
                            "locale":"en-us",
                            "time":"2021-08-24T05:31:55.910Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"ja-jp",
                            "time":"2021-08-25T03:57:47.481Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"blta1079be5fcfdfad2",
                            "locale":"ja-jp",
                            "time":"2021-08-24T05:31:55.917Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":12
                        },
                        {
                            "environment":"bltfd8970c7bd9cb0cb",
                            "locale":"fr-fr",
                            "time":"2021-01-15T07:39:38.340Z",
                            "user":"blt6563a9b067fc1bc9",
                            "version":1
                        }
                    ]
                },
                {
                    "uid":"bltdd7ea64b0ed4fdb6",
                    "created_at":"2021-01-27T11:54:12.316Z",
                    "updated_at":"2021-01-27T11:54:12.316Z",
                    "created_by":"blt6563a9b067fc1bc9",
                    "updated_by":"blt6563a9b067fc1bc9",
                    "content_type":"image/png",
                    "file_size":"54478",
                    "tags":[
                        
                    ],
                    "filename":"Sample_Image.png",
                    "url":"https://images.contentstack.io/v3/assets/blt38776c9acaae66r3/bltdd7ea64b0ed4hdr4/601154640839e910126d64r2/download",
                    "ACL":[
                        
                    ],
                    "parent_uid":null,
                    "_version":1,
                    "title":"Sample_Image.png",
                    "_content_type_uid":"sys_assets",
                    "publish_details":[
                        
                    ]
                }
            ]
        },
        "publish_details":[
            
        ]
    }
}
```


### Bulk Operations

You can perform bulk operations such as [Add to Release](../../cs-docs/content-managers/author-content/bulk-add-to-release.md), [Publish](../../cs-docs/content-managers/author-content/bulk-publish-entries.md), [Unpublish](../../cs-docs/content-managers/author-content/bulk-unpublish-entries.md), and [Delete](../../cs-docs/content-managers/author-content/bulk-delete-entries.md) on multiple entries or assets, or [Change the Workflow Details](../../cs-docs/content-managers/author-content/update-entry-workflow-details-in-bulk.md) of multiple entries or assets at the same time.

**Additional Resource**: You can also learn how to [perform bulk operations on search results](../../cs-docs/content-managers/search-content/about-bulk-operations-on-search-results.md).

**Points to keep in mind**:

- Each bulk publish API request publishes a maximum of 10 items per request, if the Bulk Publish feature is part of your plan. So, for example, if you publish 100 items, you need to make 10 Bulk API requests.
- Bulk actions do not follow the standard CMA rate limit of 10 requests per second. The default rate limit for bulk actions is 1 request per second i.e., in one second you can make only one bulk publish API request.
- Mentioning the version number of the entries is optional. If you don't specify the version number, the latest version of the entries will be published or unpublished.
- Bulk publishing of entries of all locals is not supported. However, you can specify the locales as an array (en-us, fr-fr, zh-zh, and so on) against the ‘locale’ parameter to get them published.

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. This key specifies the unique ID of the branch where the concerned Contentstack module resides.


#### Bulk Add to Release

#### Bulk Add to Release

**POST** `/bulk/release/items`

The Bulk Add to Release request allows you to add multiple entries and assets to a release, making content preparation for deployment more efficient and ensuring smooth, coordinated publishing.

In the 'Body' section, specify the release UID, action parameter which determines whether the release should be set for publish or unpublish, and the locale for the entries. Set the reference parameter to true to include referenced items.

The items parameter should include an array of objects, each with content type UIDs, entry UIDs, locales (optional), version (optional), and the entry title.

**Note**: Locales specified in the items parameter will override those in the request body. If no locales are provided for each entry, the locale mentioned in the request body will be used. You can also set the action parameter for each entry to publish or unpublish.

For each asset, provide the title, asset UID, set the content_type_uid to sys_assets, and optionally include the version you want to publish. Your request body will look as follows:

```
{
            "title": "Asset title",
            "uid": "blt**************46",
            "content_type_uid": "sys_assets",
            "version": 1
        }
```

Once the API request is executed, a job ID is generated in the response. You can use this job ID to track the status of your add to release request in [Get Stack Bulk Task Queue](./content-management-api.md#get-stack-bulk-task-queue).

**Note**: Pass bulk_version as 2.0 in the Headers section.

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (optional)
  Enter application/json to pass a request body.
  Default: `application/json`
- **bulk_version** (required)
  Pass the bulk_version header as 2.0 to allow bulk operation.
  Default: `2.0`

##### Sample Request

```json
{
    "release": "blt**************9d", 
    "action": "publish",
    "locale": [
        "en-us"
    ],
    "reference": true,
    "items": [
        {
            "content_type_uid": "ct_1",
            "uid": "blt**************46",
            "version": 2,
            "locale": "en-us",
            "title": "validation test"
        }
    ]
}
```

##### Sample Response

```json
{
    "job_id": "cs-13****15-5**a-42**-b**0-8f********a6",
    "notice": "Your add to release request is in progress."
}
```



#### Bulk Publish Operation

#### Publish entries and assets in bulk

**POST** `/bulk/publish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}`

The Publish entries and assets in bulk request allows you to publish multiple entries and assets at the same time.

To configure the permissions for your application via OAuth, please include the cm.bulk-operations:publish scope.

**Note:**
  

- At a time, you can publish 10 entries in 10 languages and in 10 environments.
- Additionally, nested references can be published up to five levels deep with all parent entries at the same time by passing api_version as 3.2 in the Headers section.

In the 'Body' section, you need to specify the locales (mention the locale codes) and environments (mention the names) to which you want to publish the entries or assets. If you do not specify a source locale, the entries or assets will be published in the master locale automatically.

**Tip**: To schedule the publishing of multiple entries and/or assets, you can make use of the [Create a Release](./content-management-api.md#create-a-release) request. Then, you can deploy this Release and all of the pinned items can be published together either immediately or at a scheduled time to whatever environment you choose.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, locales in which the entries are present, and the version (you need to specify the entry versions when schedule publishing) that you want to publish. Within the ‘assets’ parameter, pass these details of each entry – asset UIDs and the version that you want to publish (optional).

**Note**: The version parameter must be passed as an integer in the request body. For example, version: 2.

If some of the entries added to the bulk publish request do not satisfy the applied [publish rules](../../cs-docs/developers/set-up-workflows-and-publish-rules/about-publish-rules.md), then all the items will not be published. To publish at least the items that satisfy the publish rules, pass additional query parameters, skip_workflow_stage_check=true and approvals=true.

Let's understand how these two query parameters work while publishing entries.

When you use skip_workflow_stage_check=true as a query parameter, the entries that satisfy the publish rules are sent for publishing, while those entries that have not yet reached the workflow stage defined for the set publish rules will not be sent for publishing. However, if you set this parameter to false and some of the entries included in the bulk publish request have not yet reached the workflow stage defined for the set publish rules, then all the entries selected will not be sent for publishing.

When you use approvals=true as a query parameter, the entries that satisfy the publish rules are sent for publishing, while those entries that have not yet received authorization from the approver assigned to them will not be sent for publishing. However, if you set this parameter to false and some of the entries included in the bulk publish request have not yet received authorization from the approver assigned to them, then all the entries selected will not be sent for publishing.

##### Query Parameters

- **skip_workflow_stage_check** (optional)
  Set this to 'true' to publish the entries that are at a workflow stage where they satisfy the applied publish rules.
  Default: `true`
- **approvals** (optional)
  Set this to 'true' to publish the entries that do not require an approval to be published.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

##### Sample Request

```json
{
   "entries":[
      {
         "uid":"blt0e0945888fb09dea",
         "content_type":"ct0",
         "version": 5,
         "locale":"en-us"
      },
      {
         "uid":"bltabb69092b8d45ff7",
         "content_type":"ct0",
         "version": 1,
         "locale":"en-us"
      },
      {
         "uid":"blt5eb4637f09f0ac3e",
         "content_type":"ct5",
         "version": 2,
         "locale":"en-us"
      }
   ],
   "locales":[
      "en-us"
   ],
   "environments":[
      "env1"
   ],
   "rules":{
      "approvals":"true/false"
   },
   "scheduled_at":"scheduled_time",
   "publish_with_reference":true
}
```

##### Sample Response

```json
{
   "notice":"Your bulk publish request is in progress. Please check publish queue for more details.",
   "job_id":"00906443-2ba3-420e-a3bd-2b6b4cd7c5745"
}
```



#### Bulk Unpublish Operation

#### Unpublish entries and assets in bulk

**POST** `/bulk/unpublish?skip_workflow_stage_check={boolean_value}&approvals={boolean_value}`

The Unpublish entries and assets in bulk request allows you to unpublish multiple entries and assets at the same time.   
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:unpublish scope.

**Note**: At a time, you can unpublish **10** entries in **10** languages and on **10** environments. Additionally, you can pass api_version as **3.2** in the **Headers** section to get logs of your unpublish task as per the new nested flow.

In the 'Body' section, you need to specify the locales (mention the locale codes) and environments (mention the names) to which you want to unpublish the entries or assets. If you do not specify a source locale, the entries or assets will be unpublished in the master locale automatically.

**Tip**: To schedule the unpublishing of multiple entries and/or assets, you can make use of the ‘[Create a Release](./content-management-api.md#create-a-release)’ request. Then, you can deploy this Release and all of the pinned items can be unpublished together either immediately or at a scheduled time to whatever environment you choose.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, locales in which the entries are present, and the version that you want to unpublish. Within the ‘assets’ parameter, pass these details of each entry – asset UIDs and the version that you want to unpublish (optional).

If some of the entries added to the bulk unpublish request do not satisfy the applied [publish rules](../../cs-docs/developers/set-up-workflows-and-publish-rules/about-publish-rules.md), then all the items will not be unpublished. To unpublish at least the items that satisfy the publish rules, pass additional query parameters, skip_workflow_stage_check=true and approvals=true.

Let's understand how these two query parameters work while unpublishing entries.

When you use skip_workflow_stage_check=true as a query parameter, the entries that satisfy the publish rules are sent for unpublishing, while those entries that have not yet reached the workflow stage defined for the set publish rules will not be sent for unpublishing. However, if you set this parameter to false and some of the entries included in the bulk unpublish request have not yet reached the workflow stage defined for the set publish rules, then all the entries selected will not be sent for unpublishing.

When you use approvals=true as a query parameter, the entries that satisfy the publish rules are sent for unpublishing, while those entries that have not yet received authorization from the approver assigned to them will not be sent for unpublishing. However, if you set this parameter to false and some of the entries included in the bulk unpublish request have not yet received authorization from the approver assigned to them, then all the entries selected will not be sent for unpublishing.

##### Query Parameters

- **skip_workflow_stage_check** (optional)
  Set this to 'true' to publish the entries that are at a workflow stage where they satisfy the applied publish rules.
  Default: `true`
- **approvals** (optional)
  Set this to 'true' to publish the entries that do not require an approval to be published.
  Default: `true`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (optional)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

##### Sample Request

```json
{
  "entries": [
    {
      "content_type": "news",
      "uid": "bhs12565525612",
      "locale": "en-us"
    },
    {
      "content_type": "article",
      "uid": "bjhcud11787212",
      "locale": "en-us"
    }
  ],
  "workflow": {
    "workflow_stage": {
      "comment": "String Comment",
      "due_date": "Thu Dec 01 2018",
      "notify": false,
      "uid": "bueyr8723823",
      "assigned_to": [
        {
          "uid": "bhgt28726372",
          "name": "user_name",
          "email": "user_email_ID"
        }
      ],
      "assigned_by_roles": [
        {
          "uid": "gsshgs27627361",
          "name": "Content Manager"
        }
      ]
    }
  },
  "locales": [
    "en-us"
  ],
  "environments": [
    "{{env_uid}}"
  ]
}
```

##### Sample Response

```json
{
    "notice": "Your bulk unpublish request is in progress. Please check publish queue for more details.",
    "job_id": "24bdfd068-95b2-4fbd-c47a-365e0534dcb3"
}
```



#### Bulk Delete Operation

#### Delete entries and assets in bulk

**POST** `/bulk/delete`

The Delete entries and assets in bulk request allows you to delete multiple entries and assets at the same time.  
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:delete scope.

**Note**: At a time, you can delete **100****entries** in a bulk delete request.

In the 'Body' section, you need to specify the content type UIDs, entry UIDs or asset UIDs, and locales of which the entries or assets you want to delete.

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "entries":[{
        "content_type":"{{content_type_uid}}",
        "uid":"{{entry_uid}}",
        "locale":"{{locale}}"
    },{
        "content_type":"{{content_type_uid}}",
        "uid":"{{entry_uid}",
        "locale":"{{entry_locale}}"
    }
    ],
     "assets": [{
         "uid": "{{uid}}"
     }]
}
```

##### Sample Response

```json
{
    "notice": "Your bulk delete request is in progress. Please check bulk task queue for more details."
}
```



#### Bulk Update Workflow Details Operation

The ‘Change Workflow Details’ action is a new option that allows you to change workflow details (such as stage, assignee, due date, and comments) of multiple entries at the same time. 

**Additional Resource**: To know how you can change Workflow details of multiple entries at once, refer to the [Change Workflow Details of Entries in Bulk](../../cs-docs/content-managers/search-content/change-workflow-details-of-entries-in-bulk.md) article.

#### Update workflow details in bulk

**POST** `/bulk/workflow`

The Update workflow details in bulk request allows you to update the workflow details for multiple entries at the same time.   
To configure the permissions for your application via OAuth, please include the cm.bulk-operations:workflow scope.

**Note**: You can change the workflow stage of multiple entries only if all the entries have been assigned the same workflow stage and are associated with the same workflow.

In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.

**Note**: At a time, you can update the workflow details for **10** entries in a bulk update workflow details request. During the bulk update, if any one entry's workflow stage fails to update, then the workflow stage of all entries in the bulk operation will fail to update.

Within the ‘entries’ parameter, pass these details of each entry – content type UIDs, entry UIDs, and locales in which the entries are present.

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "entries": [{
        "content_type": "content_type_uid1",
        "uid": "entry_uid",
        "locale": "en-us"
    }, {
        "content_type": "content_type_uid2",
        "uid": "entry_uid",
        "locale": "en-us"
    }],
    "workflow": {
        "workflow_stage": {
            "comment": "Workflow-related Comments",
            "due_date": "Thu Dec 01 2018",
            "notify": false,
            "uid": "workflow_stage_uid",
            "assigned_to": [{
                "uid": "user_uid",
                "name": "user_name",
                "email": "user_email_id"
            }],
            "assigned_by_roles": [{
                "uid": "role_uid",
                "name": "role_name"
            }]
        }
    }
}
```

##### Sample Response

```json
{
"notice": "Your request to update workflow stage is complete."
}
```


### Job Status

The Job Status API allows you to monitor the progress of your bulk operations on entries and assets. This functionality helps tracking the status of jobs, offering comprehensive details about the job's execution and the items present in the job, including nested references. Read more about [Nested Reference Publishing](../../cs-docs/content-managers/publish-content/about-nested-reference-publishing.md).


#### Get Job Status

#### Get job status

**GET** `/bulk/jobs/{job_id}`

The Get job status request returns comprehensive information of a specific publish/unpublish operation.

**Note**: Pass api_version parameter as **3.2** in the Headers section.

##### URL Parameters

- **job_id** (required)
  Enter the UID of the job of which you want to retrieve the details.
  Default: `eb4c0236-103a-4a04-82a4-0a452b94bfc8`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **api_version** (required)
  Enter the API version.
  Default: `3.2`

##### Sample Response

```json
{
    "uid": "e******6-1**a-4**4-8**4-0**********7",
    "created_by": "blte*************61",
    "updated_by": "",
    "created_at": "2024-07-01T05:22:32.475Z",
    "updated_at": "2024-07-01T05:22:34.051Z",
    "action": "publish",
    "api_key": "blt**************0d",
    "status": "complete",
    "body": {
        "branch": "main",
        "locales": [
            "en-us"
        ],
        "environments": [
            "blt6************ce"
        ],
        "published_at": "2024-07-01T05:22:34.051Z",
        "scheduled_at": ""
    },
  "summary": {
        "approvals": 0,
        "skip": 2,
        "state": "completed",
        "success": 25,
        "total_processed": 29,
        "unsuccess": 2
  }
}
```



#### Get Job Items Status

#### Get job items status

**GET** `/bulk/jobs/{job_id}/items?include_count={boolean_value}&type={type_value}&skip={skip_value}&limit={limit_value}&status={status_value}&ct[]={content_type_uid}&include_reference={boolean_value}`

The Get job items status request retrieves all the details of the items associated with a specific publish/unpublish job, along with their status.

**Note**:

- Pass api_version parameter as 3.2 in the Headers section.
- The include_count query parameter will return the count only if skip is 0 or the value for skip is not provided.
- The item status API request returns only the first 100 items. If you want to fetch the details other than the first 100 in your response, refer to the Pagination section to retrieve data for all items in paginated form.

##### URL Parameters

- **job_id** (required)
  Enter the UID of the job of which you want to retrieve the details.
  Default: `eb4c0236-103a-4a04-82a4-0a452b94bfc8`

##### Query Parameters

- **include_count** (optional)
  If set to true, the response includes the total count of items within the job. Default value for this parameter is false.
  Default: `false`
- **skip** (optional)
  Enter the number of items to be skipped from the response body. Default value for this parameter is 0.
  Default: `0`
- **limit** (optional)
  Enter the maximum number of items to be returned. Default and maximum value for this parameter is 100.
  Default: `100`
- **include_reference** (optional)
  Set this parameter to 'true' to include the details of all the referenced items in response. Default value for this parameter is false.
  Default: `true`
- **status** (optional)
  Enter the status 'success' or 'failed' for which you want to retrieve items.
  Default: `success`
- **type** (optional)
  Enter the filter 'entry' or 'asset' for which you want to retrieve items.
  Default: `asset`
- **ct[]** (optional)
  Enter the unique ID of the content type from which you want to filter responses. Filter multiple content types by using ct[]=your_content_type_uid1&ct[]=your_content_type_uid2.
  Default: `your_content_type_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **api_version** (required)
  Enter the API version.
  Default: `3.2`

##### Sample Response

```json
{
    "items": [
        {
            "uid": "bltfc507bd97607bb5b",
            "locale": "",
            "version": 1,
            "title": "Charles_Dickens_Headshot.jpg",
            "type": "asset",
            "publish_details": {
                "status": "success"
            },
            "publish_locale": "en-us",
            "environment": "blt6c683aa0c6be0dce",
            "action": "publish",
            "published_at": "2024-07-01T05:22:33.931Z",
            "scheduled_at": "",
            "user": "blte93d4119f79db761",
            "depth": 4
        },
        {
            "uid": "blt212c614af8c395cc",
            "locale": "en-us",
            "version": 2,
            "title": "Mark Twain",
            "type": "entry",
            "publish_details": {
                "status": "failed",
                "failure_reason": "The entry you want to publish is in-progress. Please fill mandatory fields."
            },
            "publish_locale": "en-us",
            "environment": "blt6c683aa0c6be0dce",
            "action": "publish",
            "published_at": null,
            "scheduled_at": "",
            "user": "blte93d4119f79db761",
            "depth": 2,
            "content_type": {
                "uid": "author"
            }
        },
    ],
    "skip": 0,
    "limit": 100,
    "total_count": 29
}
```



#### Get Stack Bulk Task Queue

#### Get Stack Bulk Task Queue

**GET** `/bulk/jobs`

The Get Stack Bulk Task Queue request retrieves a list of all the bulk actions performed on entries and assets within a stack.

##### Query Parameters

- **include_count** (optional)
  Set this parameter to true to include the total count of items within the job.
  Default: `true`
- **skip** (optional)
  Enter the number of items to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of items to be returned.
  Default: `10`
- **asc** (optional)
  Sort the response in ascending order. Options include created_at, updated_at, status, created_by, and action.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order. Options include created_at, updated_at, status, created_by, and action.
  Default: `updated_at`
- **status** (optional)
  Filter results by integers (1-6) separated by a comma to represent statuses: 1 - Waiting, 2 - In Queue, 3 - In Progress, 4 - Completed, 5 - Partial Complete, 6 - Failed.
  Default: `4,2`
- **users** (optional)
  Filter results by user IDs, provided as a single ID or comma-separated IDs.
  Default: `blt**************53`
- **from** (optional)
  Specify the start date for the required data. Use the following date format: YYYY-MM-DD.
  Default: `2024-05-13`
- **to** (optional)
  Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD.
  Default: `2024-06-13`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **bulk_version** (required)
  Pass bulk_version parameter as 2.0.
  Default: `2.0`

##### Sample Response

```json
{
    "jobItems": [
        {
            "_id": "66cc68f89e393ee4e7dd1fc2",
            "action": "publish",
            "job_id": "cs-41e64add-001c-4a34-b841-c017b6a4a993",
            "uid": "blt45b6d47d9a1e8824",
            "content_type_uid": "ct_1",
            "title": "Test_RD",
            "locale": "en-us",
            "reference": true,
            "version": 3,
            "created_at": "2024-08-26T11:37:28.851Z",
            "updated_at": "2024-08-26T11:37:28.851Z"
        },
        {
            "_id": "66cc68f89e393ee4e7dd1fc3",
            "action": "publish",
            "job_id": "cs-41e64add-001c-4a34-b841-c017b6a4a993",
            "uid": "blta38419e21c526e4d",
            "content_type_uid": "ct_1",
            "title": "dascs v2",
            "locale": "en-us",
            "reference": true,
            "version": 2,
            "created_at": "2024-08-26T11:37:28.851Z",
            "updated_at": "2024-08-26T11:37:28.851Z"
        },
        {
            "_id": "66cc68f89e393ee4e7dd1fc5",
            "action": "publish",
            "job_id": "cs-41e64add-001c-4a34-b841-c017b6a4a993",
            "uid": "blt26eef6d406118a1f",
            "content_type_uid": "sys_assets",
            "title": "beautiful-peacock-feathers.jpg",
            "locale": "en-us",
            "version": 1,
            "created_at": "2024-08-26T11:37:28.884Z",
            "updated_at": "2024-08-26T11:37:28.884Z"
        },
        {
            "errors": [
                {
                    "path": "uid",
                    "errorKey": "This item has already been added to the release"
                }
            ],
            "_id": "66cc68f89e393ee4e7dd1fc6",
            "action": "publish",
            "job_id": "cs-41e64add-001c-4a34-b841-c017b6a4a993",
            "uid": "blta38419e21c526e4d",
            "content_type_uid": "ct_1",
            "title": "dascs v2",
            "locale": "en-us",
            "version": 2,
            "created_at": "2024-08-26T11:37:28.884Z",
            "updated_at": "2024-08-26T11:37:28.951Z",
            "errored": true
        }
    ]
}
```


### Extensions

**Note:** Experience Extensions use the legacy approach with extensions. We recommend using the [UI locations ](../../cs-docs/developers/developer-hub/about-ui-locations.md)for the Contentstack App Framework to extend the functionality of your apps.

Extensions let you create custom fields and custom widgets that lets you customize Contentstack's default UI and behavior. Read more about [Extensions](../../cs-docs/developers/experience-extensions-overview/about-experience-extensions.md).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.


#### Custom Fields

This type of extension lets you create custom fields that you can use in your content types. Read more [About Custom Fields](../../cs-docs/developers/create-custom-fields/about-custom-fields.md).

#### Get all custom fields

**GET** `/extensions?query={"type":"field"}`

The Get all custom fields request is used to get the information of all custom fields created in a stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

##### Query Parameters

- **query** (required)
  For custom fields
  Default: `{"type":"field"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"extensions": [{
			"uid": "blt002c000ce00b00000",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt2e2222e2222cf2e2",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Ratings",
			"multiple": false,
			"config": {},
			"type": "field",
			"data_type": "number",
			"srcdoc": "Source doc of the extension"
		},
		{
			"uid": "blt222c222ce22b22a22",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt0e0000e0000cf2e0",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Color picker",
			"multiple": false,
			"config": {},
			"type": "field",
			"data_type": "text",
			"srcdoc": "Source doc of the extension"
		}
	]
}
```


#### Get a single custom field

**GET** `/extensions/{custom_field_uid}`

The Get a single custom field request gets the comprehensive details of a specific custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

##### URL Parameters

- **custom_field_uid** (required)
  Enter the UID of the custom field of which you want to retrieve the details.
  Default: `blt123ea123b123a123f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"extensions": {
		"uid": "blt002c000ce00b00000",
		"created_at": "2018-07-03T05:32:29.450Z",
		"updated_at": "2018-07-03T05:32:29.450Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt2e2222e2222cf2d2",
		"tags": [],
		"ACL": [],
		"_version": 1,
		"title": "Ratings",
		"multiple": false,
		"config": {},
		"type": "field",
		"data_type": "number",
		"srcdoc": "Source doc of the extension"
	}
}
```


#### Upload a custom field

**POST** `/extensions`

The Upload a custom field request is used to upload a custom field to Contentstack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the custom field that you want to upload
- extension[title]: Enter the title of the custom field that you want to upload
- extension[data_type]: Enter the data type for the input field of the custom field
- extension[tags]: Enter the tags that you want to assign to the custom field
- extension[multiple]: Enter ‘true’ if you want your custom field to store multiple values
- extension[type]: Enter type as ‘field’, since this is a custom field extension.

**Tip**: You can try the call manually in any REST API client, such as Postman. Under 'Body', for the extension[upload] parameter, select the input type as 'File'. This will enable you to select the file that you wish to import.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "blt1f1111111ed11a1f",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1"
		],
		"ACL": {},
		"_version": 1,
		"title": "Demo",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"srcdoc": "Source code for the extension"
	}
}
```


#### Create a custom field with source URL

**POST** `/extensions`

The Create a custom field with source URL call is used to create a custom field that is hosted externally.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, external source link, set if the field is to take multiple values or not, and configuration details.

**Note:** The custom field has various data types you can select from – Text, Number, Date, Boolean, JSON, Reference, File, and Asset.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `main`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"title": "New Custom Field",
		"src": "https://www.sample.com",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

##### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b01d",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Custom Field",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"src": "https://www.sample.com"
	}
}
```


#### Create a custom field with source code

**POST** `/extensions`

The Create a custom field with source code request is used to create a custom field in Contentstack by providing the source code of the extensions. This source code will be hosted on Contentstack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, source code of the extension, set if the field is to take multiple values or not, and configuration details.

**Note:** The custom field has various data types you can select from – Text, Number, Date, Boolean, JSON, Reference, File, and Asset.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"title": "New Custom Field",
		"srcdoc": "Source code of the extension",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

##### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Custom Field",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"srcdoc": "Source code of the extension"
	}
}
```


#### Update a custom field

**PUT** `/extensions/{custom_field_uid}`

The Update a custom field request is used to update the details of a custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, external source link (or the updated external source code), set if the field is to take multiple values or not, and configuration details.

##### URL Parameters

- **custom_field_uid** (required)
  Enter the UID of the custom field that you want to update.
  Default: `bltcd0ac000b000b00e`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"title": "Old Extension",
		"src": "Enter either the source code (use 'srcdoc') or the external hosting link of the extension depending on the hosting method you selected.",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

##### Sample Response

```json
{
	"notice": "Extension updated successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00e",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:49:46.090Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 2,
		"title": "Old Extension",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"src": "Either you get the source code or the external hosting link of the extension depending on the hosting method."
	}
}
```


#### Delete custom field

**DELETE** `/extensions/{custom_field_uid}`

The Delete custom field request is used to delete a specific custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

##### URL Parameters

- **custom_field_uid** (required)
  Enter the UID of the custom field that you want to delete.
  Default: `blt123c123ce12b3123`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Extension deleted successfully."
}
```


#### Create Content Type with Extension Field

**POST** `/content_types`

The Create Content Type with Extension Field request is used to create a content type that includes a custom field.   
To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"content_type": {
		"title": "Sample",
		"uid": "sample",
                "schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"multiple": false
			},
			{
				"display_name": "Extension",
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"mandatory": true,
				"field_metadata": {
					"_default": true
				},
				"multiple": false,
				"unique": false
			}
		],
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"singleton": false,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/"
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Content Type created successfully.",
	"content_type": {
		"created_at": "2015-03-13T07:37:03.494Z",
		"updated_at": "2015-03-13T07:37:03.494Z",
		"title": "Page",
		"uid": "page",
		"inbuilt_class": false,
		"schema": [{
				"display_name": "Title",
				"uid": "title",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "URL",
				"uid": "url",
				"data_type": "text",
				"field_metadata": {
					"_default": true
				},
				"unique": false,
				"mandatory": true,
				"multiple": false
			},
			{
				"display_name": "Extension",
                		"config": {"key1": "value1"},
				"field_metadata": {
					"extension": true
				},
				"uid": "text",
				"data_type": "json",
				"extension_uid": "blt002c000ce00b00000",
				"multiple": false,
				"mandatory": true,
				"unique": false
			}
		],
		"last_activity": [],
		"maintain_revisions": true,
		"description": "",
		"options": {
			"title": "title",
			"publishable": true,
			"is_page": true,
			"sub_title": [
				"url"
			],
			"url_pattern": "/:title",
			"url_prefix": "/",
			"singleton": false
		},
		"abilities": {},
		"DEFAULT_ACL": {
			"roles": [],
			"users": [{
				"uid": "abcdef1234567890",
				"read": true,
				"create": false
			}],
			"others": {
				"read": false,
				"create": false
			}
		},
		"SYS_ACL": {
			"others": {
				"read": false,
				"update": false,
				"delete": false,
				"create": false,
				"publish": false,
				"sub_acl": {
					"read": false,
					"update": false,
					"delete": false,
					"create": false,
					"publish": false
				}
			},
			"roles": [{
					"uid": "abcd29513cc6e50299",
					"read": true,
					"update": true,
					"delete": true,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				},
				{
					"uid": "apqr13cc6e506e50299",
					"read": true,
					"update": false,
					"delete": false,
					"create": false,
					"sub_acl": {
						"read": true,
						"update": true,
						"delete": true,
						"create": true,
						"publish": true
					}
				}
			]
		}
	}
}
```



#### Custom Widgets

This type of extensions lets you add widgets that help you analyze content of an entry and recommend content ideas. Read more [About Custom Widgets](/docs/developers/create-custom-widgets/about-custom-widgets).

#### Get all widgets

**GET** `/extensions?query={"type":"widget"}`

The Get widgets request is used to get the information of all custom widgets created in a stack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

##### Query Parameters

- **query** (required)
  Parameter for custom widgets.
  Default: `{"type":"widget"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"extensions": [{
			"uid": "blt002c000ce00b00000",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt2e2222e2222cf2e2",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Text Intelligence",
			"config": {
				"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11dc1"
			},
			"type": "widget",
			"scope": {
				"content_types": [
					"$all"
				]
			},
			"srcdoc": "Source doc of the widget"
		},
		{
			"uid": "blt222c222ce22b22222",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt0e0000e0000cf2e0",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Translation",
			"config": {
				"from": {
					"ga": "Irish",
					"it": "Italian",
					"ja": "Japanese",
					"de": "German"
				},
				"to": {
					"en": "English",
					"hi": "Hindi"
				}
			},
			"type": "widget",
			"scope": {
				"content_types": [
					"Content type uids separated by commas"
				]
			},
			"srcdoc": "Source doc of the widget"
		}
	]
}
```


#### Get widgets of a content type

**GET** `/extensions?scope={content_type_uid}`

The Get widgets of a content type request gets the comprehensive details of all widgets that are assigned to a specific content type.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

##### Query Parameters

- **scope** (required)
  Enter the UID of the content type of which you want to retrieve the details of all the applicable widgets.
  Default: `products`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"extensions": [{
		"uid": "blt002c000ce00b0000d",
		"created_at": "2018-07-03T05:32:29.450Z",
		"updated_at": "2018-07-03T05:32:29.450Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt2e2222e2222cf2e2",
		"tags": [],
		"ACL": [],
		"_version": 1,
		"title": "Text Intelligence",
		"config": {
			"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11de1"
		},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"srcdoc": "Source doc of the widget"
	}]
}
```


#### Upload a widget

**POST** `/extensions`

The Upload a widget request is used to upload a new custom widget to a stack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the widget that you want to upload
- extension[title]: Enter the title of the widget that you want to upload
- extension[tags]: Enter the tags that you want to assign to the widget
- extension[scope]: Enter either {"content_types":["$all"]} or {"content_types":["content_type_uid1”, “content_type_uid2”, “..."]} to apply this widget to all content types or specific content types, respectively
- extension[type]: Enter type as ‘widget’, since this is a custom widget extension

**Tip**: You can try the call manually in any REST API client, such as Postman. Under 'Body', for the extension[upload] parameter, select the input type as 'File'. This will enable you to select the file that you wish to import.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "blt1f1111111ed11a0d",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"ACL": {},
		"_version": 1,
		"title": "Text Intelligence",
		"config": {
			"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11de1"
		},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"srcdoc": "Source doc of the widget"
	}
}
```


#### Create widget with source URL

**POST** `/extensions`

The Create Widget with source URL call is used to create a widget that is hosted externally.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, external source link (src), configuration details, set if the extension is a widget or field, and specify the scope, i.e., the content types to which you want to apply the widget.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
                "data_type": "text",
		"title": "New Widget",
		"src": "https://www.sample.com",
		"config": "{}",
		"type": "widget",
		"scope": {
			"content_types": ["$all"]
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "blt1f1111111ed11a0d",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"ACL": {},
		"_version": 1,
		"title": "New Widget",
		"config": {
			"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11de1"
		},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"src": "https://www.sample.com"
	}
}
```


#### Create widget with source code

**POST** `/extensions`

The Create widget with source code request is used to create a widget in Contentstack by providing the source code. This source code will be hosted on Contentstack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write
scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, source code of the widget, configuration details, set if the extension is a widget or field, and specify the scope i.e., the content types that you want to apply the widget.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"title": "New Widget",
		"srcdoc": "Source code of the widget",
		"config": "{}",
		"type": "widget",
		"scope": {
			"content_types": ["$all"]
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Widget",
		"config": {},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"srcdoc": "Source code of the widget"
	}
}
```


#### Update a widget

**PUT** `/extensions/{widget_uid}`

The Update a widget request is used to update the details of a widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, external source link (or the updated external source code), configuration details, set if the extension is a widget or field, and specify the scope i.e., the content types that you want to apply the widget.

##### URL Parameters

- **widget_uid** (required)
  Enter the UID of the widget that you want to update.
  Default: `bltcd0ac000b000b00f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"title": "Widget Updated",
		"src": "Enter either the source code or the external hosting link of the widget depending on the hosting method you selected.",
		"config": "{}",
                "type": "widget",
                "scope": {
                "content_types": [
                "<your_content_type_uid>"
                ]

         	}
	}
}
```

##### Sample Response

```json
{
	"notice": "Extension updated successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:49:46.090Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 2,
		"title": "Widget Updated",
		"config": {},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"src": "Either you get the source code or the external hosting link of the widget depending on the hosting method."
	}
}
```


#### Delete a widget

**DELETE** `/extensions/{widget_uid}`

The Delete a widget call is used to delete a specific custom widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

##### URL Parameters

- **widget_uid** (required)
  Enter the UID of the widget that you want to delete.
  Default: `bltcd0ac000b000b00f`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Extension deleted successfully."
}
```



#### Dashboard Widgets

This type of extension lets you create widgets for your dashboard. Read more [About Custom Dashboard Widgets](/docs/developers/create-dashboard-widgets/about-custom-dashboard-widgets).

#### Get All Dashboard Widgets

**GET** `/extensions?query={"type":"dashboard", "enable": true}`

The Get All Dashboard Widgets request is used to get the information of all the enabled custom dashboard extension.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

##### Query Parameters

- **query** (required)
  Query to retrieve all dashboard widgets.
  Default: `{"type":"dashboard", "enable": true}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{  
   "extensions":[  
      {  
         "uid":"blt20a7158319e3e32d",
         "created_at":"2019-04-02T11:32:45.037Z",
         "updated_at":"2019-04-02T11:33:36.062Z",
         "created_by":"blt1e6dead9f06f1560",
         "updated_by":"blt1e6dead9f06f1560",
         "tags":[  
            "tag1",
            "tag2"
         ],
         "ACL":[  

         ],
         "_version":3,
         "title":"sample 9",
         "config":{  

         },
         "type":"dashboard",
         "enable":true,
         "default_width":"half",
         "srcdoc":"xyz"
      }
   ]
}
```


#### Upload Dashboard Widget

**POST** `/extensions`

The Upload Dashboard Widget request uploads the widget to the Stack Dashboard.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the widget that you want to upload.
- extension[title]: Enter the title of the widget that you want to upload.
- extension[tags]: Enter the tags that you want to assign to the widget.
- extension[type]: Enter type as ‘dashboard’, since this is a custom widget extension.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{  
   "notice":"Extension created successfully.",
   "extension":{  
      "uid":"blt4533c57b647be007",
      "created_at":"2019-04-03T05:33:24.998Z",
      "updated_at":"2019-04-03T05:33:24.998Z",
      "created_by":"blt1e6dead9f06f1560",
      "updated_by":"blt1e6dead9f06f1560",
      "tags":[  
         "tag1",
         "tag2"
      ],
      "ACL":{  

      },
      "_version":1,
      "title":"unique",
      "config":{  

      },
      "type":"dashboard",
      "enable":false,
      "default_width":"half",
      "srcdoc":"Source doc of the extension"
   }
}
```


#### Create a Dashboard Widget with Source URL

**POST** `/extensions`

The Create a Dashboard Widget with Source URL request is used to upload an extension hosted externally.

To configure the permissions for your application via OAuth, include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the dashboard widget, such as its tags, title, external source link (src), data types, configuration details, set if the extension is a widget or field, enable the extension, and set the default width of the viewport to either full or half.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"extension": {
		"tags": [
			"tag"
		],
		"title": "New Dashboard Widget",
		"src": "https://www.sample.com",
		"config": "{}",
		"type": "dashboard",
		"enable": true,
		"default_width": "half"
	}
}
```

##### Sample Response

```json
{
    "notice": "Extension created successfully.",
    "extension": {
        "uid": "blt78d4b78a3c3f3263",
        "created_at": "2019-04-03T05:46:53.487Z",
        "updated_at": "2019-04-03T05:46:53.487Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag"
        ],
        "ACL": {},
        "_version": 1,
        "title": "New Dashboard Widget",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "src": "https://sample.com"
    }
}
```


#### Create a Dashboard Widget with Source code

**POST** `/extensions`

The Create dashboard widget with source code request is used to create a widget in Contentstack by providing the source code. This source code will be hosted on Contentstack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, source code of the widget, configuration details, set if the extension is a widget or field, enable the extension, and set the default width of the viewport to either full or half.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "extension": {
    "tags": [
      "tag1",
      "tag2"
    ],
    "type": "dashboard",
    "title": "sample 10",
    "srcdoc": "xyz",
    "config": "{}",
    "enable": true,
    "default_width": "half"
  }
}
```

##### Sample Response

```json
{
    "notice": "Extension created successfully.",
    "extension": {
        "uid": "blta8bca792a5587223",
        "created_at": "2019-04-03T05:55:09.244Z",
        "updated_at": "2019-04-03T05:55:09.244Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 1,
        "title": "sample 10",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "srcdoc": "xyz"
    }
}
```


#### Update the Dashboard Widget

**PUT** `/extensions/{extension_uid}`

The Update dashboard widget request is used to update the details of a widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the extension, such as its tags, set if the extension is a widget or field, title, source code of the widget, configuration details, enable the extension, and set the default width of the viewport to either full or half.

##### URL Parameters

- **extension_uid** (required)
  Default: `blt20a7158319e3e32d`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "extension": {
    "tags": [
      "tag1",
      "tag2"
    ],
    "type": "dashboard",
    "title": "sample 9",
    "srcdoc": "xyz",
    "config": "{}",
    "enable": true,
    "default_width": "half"
  }
}
```

##### Sample Response

```json
{
    "notice": "Extension updated successfully.",
    "extension": {
        "uid": "blt20a7158319e3e32d",
        "created_at": "2019-04-02T11:32:45.037Z",
        "updated_at": "2019-04-03T06:05:02.580Z",
        "created_by": "blt1e6dead9f06f1560",
        "updated_by": "blt1e6dead9f06f1560",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 4,
        "title": "sample 9",
        "config": {},
        "type": "dashboard",
        "enable": true,
        "default_width": "half",
        "srcdoc": "xyz"
    }
}
```


#### Delete the Dashboard Widget

**DELETE** `/extensions/{extension_uid}`

The Delete dashboard widget call is used to delete a specific custom dashboard.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

##### URL Parameters

- **extension_uid** (required)
  Default: `blt20a7158319e3e32d`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "notice": "Extension deleted successfully."
}
```



#### JSON RTE Plugins

This type of extension lets you add customized plugins to your JSON Rich Text Editor and extend its functionality. Read more [About JSON RTE Plugins](../../cs-docs/developers/json-rich-text-editor-plugins.md).

#### Get all JSON RTE plugins

**GET** `/extensions?query={"type":"rte_plugin"}`

The Get all JSON RTE plugins request is used to get the information of all JSON Rich Text Editor plugins created in a stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

##### Query Parameters

- **query** (required)
  Query to retrieve all  JSON RTE plugins.
  Default: `{"type":"rte_plugin"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "extensions":[
    {
      "uid":"bltd6b2c2c3eeca106c",
      "created_at":"2021-10-26T11:38:01.817Z",
      "updated_at":"2021-10-26T11:38:01.817Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Marketplace",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blt13415f84cf5ea6e2",
      "created_at":"2021-10-25T06:56:43.007Z",
      "updated_at":"2021-10-25T06:56:43.007Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Audience Plugin",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"bltd4408204421f820e",
      "created_at":"2021-10-25T06:56:18.311Z",
      "updated_at":"2021-10-25T06:56:18.311Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Social Embed",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blt58a13863db325d6b",
      "created_at":"2021-10-25T06:55:55.368Z",
      "updated_at":"2021-10-25T06:55:55.368Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Word Count",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    },
    {
      "uid":"blta007a6d51b7d4b6a",
      "created_at":"2021-10-25T06:55:35.657Z",
      "updated_at":"2021-10-25T06:55:35.657Z",
      "created_by":"blt1a2d7dec1a7dd682",
      "updated_by":"blt1a2d7dec1a7dd682",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Local",
      "config":{
        
      },
      "type":"rte_plugin",
      "src":"URL of the JSON RTE plugin source code"
    }
  ]
}
```


#### Get a single JSON RTE plugin

**GET** `/extensions/{json_rte_plugin_uid}`

The Get a single JSON RTE plugin request gets the comprehensive details of a specific JSON Rich Text Editor plugin.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

##### URL Parameters

- **json_rte_plugin_uid** (required)
  Enter the UID of the JSON RTE plugin of which you want to retrieve details.
  Default: `blt123ea123b123a123f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "extension":{
    "uid":"blt58a13863db325d6b",
    "created_at":"2021-10-25T06:55:55.368Z",
    "updated_at":"2021-10-25T06:55:55.368Z",
    "created_by":"blt1a2d7dec1a7dd682",
    "updated_by":"blt1a2d7dec1a7dd682",
    "tags":[
      
    ],
    "ACL":[
      
    ],
    "_version":1,
    "title":"Word Count",
    "config":{
      
    },
    "type":"rte_plugin",
    "src":"URL of the JSON RTE plugin source code"
  }
}
```


#### Create a JSON RTE plugin with source URL

**POST** `/extensions`

The Create a JSON RTE plugin with source URL request allows you to add an externally hosted JSON RTE plugin to your stack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:writescope.

In the ‘Body’ section, you need to provide details of the JSON RTE plugin, such as its tags, title, external source link, set if the field is to take multiple values or not, configuration details, and the extension type. Enter the extension type as ‘rte_plugin’, since this is a JSON RTE plugin extension.

**Note:** You can add a maximum of **50** extensions (including custom fields , custom widgets and JSON RTE plugins) in a stack.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "extension":{
    "tags":[
      "tag1",
      "tag2"
    ],
    "title":"Sample JSON RTE Plugin",
    "src":"URL of the JSON RTE plugin source code",
    "multiple":false,
    "config":"{}",
    "type":"rte_plugin"
  }
}
```

##### Sample Response

```json
{
  "notice":"Extension created successfully.",
  "extension":{
    "uid":"blt23982036789e969e",
    "created_at":"2021-12-06T04:01:10.626Z",
    "updated_at":"2021-12-06T04:01:10.626Z",
    "created_by":"blt3cf27864e6b61df3",
    "updated_by":"blt3cf27864e6b61df3",
    "tags":[
      "tag1",
      "tag2"
    ],
    "ACL":{
      
    },
    "_version":1,
    "title":"Sample JSON RTE Plugin",
    "config":{
      
    },
    "type":"rte_plugin",
    "src":"URL of the JSON RTE plugin source code"
  }
}
```


#### Update a JSON RTE plugin

**PUT** `/extensions/{json_rte_plugin_uid}`

The Update a JSON RTE plugin request allows you to update the details of an existing JSON RTE plugin.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the JSON RTE plugin, such as its tags, title, external source link (or the updated external source code), set if the field is to take multiple values or not, configuration details, and the extension type.

##### URL Parameters

- **json_rte_plugin_uid** (required)
  Enter the UID of the JSON RTE plugin that you want to update.
  Default: `blt123ea123b123a123f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "extension":{
    "tags":[
      "tag1",
      "tag2"
    ],
    "title":"Updated Sample JSON RTE Plugin",
    "src":"URL of the JSON RTE plugin source code",
    "multiple":false,
    "config":"{}",
    "type":"rte_plugin"
  }
}
```

##### Sample Response

```json
{
    "notice": "Extension updated successfully.",
    "extension": {
        "uid": "blt23982036789e969e",
        "created_at": "2021-12-06T04:01:10.626Z",
        "updated_at": "2021-12-06T04:17:31.643Z",
        "created_by": "blt3cf27864e6b61df3",
        "updated_by": "blt3cf27864e6b61df3",
        "tags": [
            "tag1",
            "tag2"
        ],
        "ACL": {},
        "_version": 2,
        "title": "Updated Sample JSON RTE Plugin",
        "config": {},
        "type": "rte_plugin",
        "src": "URL of the JSON RTE plugin source code"
    }
}
```


#### Delete JSON RTE plugin

**DELETE** `/extensions/{json_rte_plugin_uid}`

The Delete JSON RTE plugin request allows you to delete a specific JSON RTE plugin.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

##### URL Parameters

- **json_rte_plugin_uid** (required)
  Enter the UID of the JSON RTE plugin that you want to update.
  Default: `blt123ea123b123a123f`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "notice": "Extension deleted successfully."
}
```


#### Create content type with JSON RTE plugin

**POST** `/content_types`

The Create content type with JSON RTE plugin request allows you to create a content type that includes JSON RTE plugins within the JSON Rich Text Editor.

To configure the permissions for your application via OAuth, please include the cm.content-types.management:write scope.

In the “Body” section, you need to provide the UIDs of the JSON RTE plugins you want to add within the plugins parameter.

The schema for this is as follows:

```
"plugins":[
          "bag98lo5467qs532l0c",
          "ang22qw1234pl345g8j",
          "pnr65op1258hs807k9l"
        ]
```

**Note:** The maximum number of JSON RTE plugins that can be added to a single JSON RTE field in a content type is **five**.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "content_type":{
    "title":"Sample CT with JSON RTE Plugins",
    "uid":"sample_ct_with_plugins",
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "field_metadata":{
          "_default":true
        },
        "mandatory":true,
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"URL",
        "uid":"url",
        "data_type":"text",
        "field_metadata":{
          "_default":true
        },
        "unique":false,
        "multiple":false
      },
      {
        "data_type":"json",
        "display_name":"JSON Rich Text Editor",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "embed_entry":false,
          "description":"",
          "default_value":"",
          "multiline":false,
          "rich_text_type":"basic",
          "options":[
            
          ]
        },
        "reference_to":[
          "sys_assets"
        ],
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "mandatory":false,
        "plugins":[
          "blt58a13863db325d6b",
          "bltd6b2c2c3eeca106c",
          "blt13415f84cf5ea6e2"
        ]
      }
    ],
    "options":{
      "title":"title",
      "publishable":true,
      "is_page":true,
      "singleton":false,
      "sub_title":[
        "url"
      ],
      "url_pattern":"/:title",
      "url_prefix":"/"
    }
  }
}
```

##### Sample Response

```json
{
  "notice":"Content Type created successfully.",
  "content_type":{
    "created_at":"2021-12-16T10:27:15.897Z",
    "updated_at":"2021-12-16T10:27:15.897Z",
    "title":"Sample CT with JSON RTE Plugins",
    "uid":"sample_ct_with_plugins",
    "_version":1,
    "inbuilt_class":false,
    "schema":[
      {
        "display_name":"Title",
        "uid":"title",
        "data_type":"text",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "mandatory":true,
        "unique":true,
        "multiple":false,
        "non_localizable":false
      },
      {
        "display_name":"URL",
        "uid":"url",
        "data_type":"text",
        "field_metadata":{
          "_default":true,
          "version":3
        },
        "unique":false,
        "multiple":false,
        "mandatory":false,
        "non_localizable":false
      },
      {
        "data_type":"json",
        "display_name":"JSON Rich Text Editor",
        "uid":"json_rte",
        "field_metadata":{
          "allow_json_rte":true,
          "embed_entry":false,
          "description":"",
          "default_value":"",
          "multiline":false,
          "rich_text_type":"basic",
          "options":[
            
          ]
        },
        "reference_to":[
          "sys_assets"
        ],
        "multiple":false,
        "non_localizable":false,
        "unique":false,
        "mandatory":false,
        "plugins":[
          "blt58a13863db325d6b",
          "bltd6b2c2c3eeca106c",
          "blt13415f84cf5ea6e2"
        ]
      }
    ],
    "last_activity":{
      
    },
    "maintain_revisions":true,
    "description":"",
    "DEFAULT_ACL":{
      "others":{
        "read":false,
        "create":false
      },
      "users":[
        {
          "read":true,
          "sub_acl":{
            "read":true
          },
          "uid":"blt24edc44154f3eb37"
        }
      ],
      "management_token":{
        "read":true
      }
    },
    "SYS_ACL":{
      "roles":[
        
      ],
      "others":{
        "read":false,
        "create":false,
        "update":false,
        "delete":false,
        "sub_acl":{
          "read":false,
          "create":false,
          "update":false,
          "delete":false,
          "publish":false
        }
      }
    },
    "options":{
      "title":"title",
      "publishable":true,
      "is_page":true,
      "singleton":false,
      "sub_title":[
        "url"
      ],
      "url_pattern":"/:title",
      "url_prefix":"/"
    },
    "abilities":{
      "get_one_object":true,
      "get_all_objects":true,
      "create_object":true,
      "update_object":true,
      "delete_object":true,
      "delete_all_objects":true
    }
  }
}
```



#### Asset Sidebar Extensions

This type of extension lets you add widgets with more capabilities or custom functionalities for editors to manage, transform, and optimize stack assets. Read more about [Asset Sidebar Extensions](../../cs-docs/developers/create-asset-sidebar-extensions.md).

#### Get all asset sidebar extensions

**GET** `/extensions?query={"type":"asset_sidebar_widget"}`

The Get all asset sidebar extensions request is used to get the information of all the asset sidebar extensions created in a stack.

##### Query Parameters

- **query** (required)
  Pass the query to retrieve all  asset sidebar extensions.
  Default: `{"type":"asset_sidebar_widget"}`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Response

```json
{
  "extensions":[
    {
      "uid":"bltdf58aac9c3589644",
      "created_at":"2022-02-21T11:32:53.240Z",
      "updated_at":"2022-02-21T11:32:53.240Z",
      "created_by":"blt8588eda026739d77",
      "updated_by":"blt8588eda026739d77",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":1,
      "title":"Demo2",
      "config":{
        
      },
      "type":"asset_sidebar_widget",
      "width":700,
      "blur":false,
      "src":"URL of the asset sidebar extension source code"
    },
    {
      "uid":"blt39df56f2cfbf297f",
      "created_at":"2022-01-04T05:29:52.990Z",
      "updated_at":"2022-02-21T11:18:55.948Z",
      "created_by":"blt3cfef289de5d0c73",
      "updated_by":"bltf37273e0002a02fe",
      "tags":[
        
      ],
      "ACL":[
        
      ],
      "_version":12,
      "title":"Image Preset Builder",
      "config":{
        
      },
      "type":"asset_sidebar_widget",
      "width":1000,
      "blur":true,
      "src":"URL of the asset sidebar extension source code"
    }
  ]
}
```


#### Get a single asset sidebar extension

**GET** `/extensions/{asset_sidebar_extension_uid}`

The Get a single asset sidebar extension request gets the comprehensive details of a specific asset sidebar extension.

##### URL Parameters

- **asset_sidebar_extension_uid** (required)
  Enter the UID of the asset sidebar extension of which you want to retrieve details.
  Default: `blt123ea123b123a123f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Response

```json
{
  "extension":{
    "uid":"blt39df56f2cfbf297f",
    "created_at":"2022-01-04T05:29:52.990Z",
    "updated_at":"2022-02-21T11:18:55.948Z",
    "created_by":"blt3cfef289de5d0c73",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":[
      
    ],
    "_version":12,
    "title":"Image Preset Builder",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1000,
    "blur":true,
    "src":"URL of the asset sidebar extension source code"
  }
}
```


#### Create an asset sidebar extension with source URL

**POST** `/extensions`

The Create an asset sidebar extension with source URL request allows you to add an externally hosted asset sidebar extension to your stack.

In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link, width, and blur effect. Enter the extension type as asset_sidebar_widget, since this is an asset sidebar extension.

The popup panel width should be within the range of **335** to **1024** pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.

**Note:** You can add a maximum of **50** extensions (including custom fields , custom widgets, JSON RTE plugins, and asset sidebar extensions) in a stack.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Request

```json
{
    "extension": {
        "type": "asset_sidebar_widget",
        "title": "Image Preset Builder",
        "config": {},
        "src": "URL of the asset sidebar extension source code",
        "width":1024,
        "blur":false
    }
}
```

##### Sample Response

```json
{
  "notice":"Extension created successfully.",
  "extension":{
    "uid":"blte62a5cadf9fa955f",
    "created_at":"2022-02-22T06:48:42.939Z",
    "updated_at":"2022-02-22T06:48:42.939Z",
    "created_by":"bltf37273e0002a02fe",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":{
      
    },
    "_version":1,
    "title":"Image Preset Builder",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1024,
    "blur":false,
    "src":"URL of the asset sidebar extension source code"
  }
}
```


#### Update an asset sidebar extension

**PUT** `/extensions/{asset_sidebar_extension_uid}`

The Update an asset sidebar extension request allows you to update the details of an existing asset sidebar extension.

In the ‘Body’ section, you need to provide details of the asset sidebar extension, such as the extension type, title, configuration details, external source link (or the updated external source code), width, and blur effect.

The popup panel width should be within the range of **335** to **1024** pixels. Set the blur effect to true if you want to blur the details of the uploaded file by default.

##### URL Parameters

- **asset_sidebar_extension_uid** (required)
  Enter the UID of the asset sidebar extension of which you want to update details.
  Default: `blt123ea123b123a123f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Request

```json
{
    "extension":{
    "type": "asset_sidebar_widget",
    "title": "Updated Title for Asset Sidebar Extension",
    "config": {},
    "src": "Updated URL of the asset sidebar extension source code"
  }
}
```

##### Sample Response

```json
{
  "notice":"Extension updated successfully.",
  "extension":{
    "uid":"blte62a5cadf9fa955f",
    "created_at":"2022-02-22T06:48:42.939Z",
    "updated_at":"2022-02-22T06:56:58.150Z",
    "created_by":"bltf37273e0002a02fe",
    "updated_by":"bltf37273e0002a02fe",
    "tags":[
      
    ],
    "ACL":{
      
    },
    "_version":2,
    "title":"Updated Title for Asset Sidebar Extension",
    "config":{
      
    },
    "type":"asset_sidebar_widget",
    "width":1024,
    "blur":false,
    "src":"Updated URL of the asset sidebar extension source code"
  }
}
```


#### Delete asset sidebar extension

**DELETE** `/extensions/{asset_sidebar_extension_uid}`

The Delete asset sidebar extension request allows you to delete a specific asset sidebar extension.

##### URL Parameters

- **asset_sidebar_extension_uid** (required)
  Enter the UID of the asset sidebar extension that you want to delete.
  Default: `blt123ea123b123a123f`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Response

```json
{
    "notice": "Extension deleted successfully."
}
```


### Metadata for Entries and Assets

Metadata is a piece of information that lets you describe or classify an asset/entry.

You can manage your digital entities effectively and facilitate enhanced accessibility with additional metadata.

**Note:** The Metadata feature allows users to update their [asset metadata](../../cs-docs/content-managers/author-content/additional-metadata-support-for-assets.md) or [entry metadata](../../cs-docs/content-managers/working-with-entries/additional-metadata-support-for-entries.md) without incrementing the asset or entry version.

**Note:** An [extension](./content-management-api.md#extensions) or app is required to use Metadata APIs.


#### Get Metadata

#### Get metadata

**GET** `/metadata/{metadata_uid}`

The Get metadata request fetches the metadata attached to a specific asset or entry of a stack.

In the URL, you need to pass the unique ID of the metadata against the metadata_uid parameter.

Keep the following points in mind when getting metadata:

- To retrieve metadata for a specific entry or asset, you need to have read access to that entry or asset.
- You must pass the include_publish_details query parameter to fetch the metadata publishing details in the response.

##### URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to fetch. You can find the metadata UID by running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `cs3cbeeef5a398bf0f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Response

```json
{
    "metadata": {
        "uid": "cs3cbeeef5a398bf0f",
        "extension_uid": "bltf5630ec72e749256",
        "type": "entry",
        "entity_uid": "blt497cb94561dbc75b",
        "_content_type_uid": "samplecontent",
        "locale": "en-us",
        "api_key": "blta3e6690c83f6854b",
        "scope": "local",
        "created_by": "blt3a5076ac97d0c8f6",
        "updated_by": "blt3a5076ac97d0c8f6",
        "created_at": "2022-03-10T07:47:42.523Z",
        "updated_at": "2022-03-10T07:47:42.523Z",
        "deleted_at": false,
        "is_published": false,
        "presets": [
            {
                "uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
                "name": "Test1",
                "options": {}
            }
        ]
    }
}
```



#### Get All Metadata

#### Get All Metadata

**GET** `/metadata/`

The Get All Metadata request returns comprehensive information of all the metadata attached to all the entries and assets in your stack.

**Note**: Limited keys such as entity_uid, content_type_uid etc. are shown to the user with no access. For eg: You will see limited keys in the third object of the example response body as the user has no access to that particular entry in the stack.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`
- **include_multi_stack** (optional)
  Set this to 'true' to fetch data from multiple stacks.
  Default: `false`
- **include_multi_branch** (optional)
  Set this to 'true' to fetch data from multiple branches.
  Default: `false`
- **include_title[]** (optional)
  You can request multiple titles in a single response. For example: - Set to ‘content_type’ to fetch the name of the content type. - Set to ‘stack’ to fetch the name of the stack. - Set to ‘entity’ to fetch the title of the entity. An entity could be either an entry or an asset.
  Default: `content_type`
- **limit** (optional)
  Set the limit in between ‘0-100’ to limit the number of items returned as response.
  Default: `50`
- **skip** (optional)
  Set this as ‘0’ to skip the number of items from the response body.
  Default: `7`
- **query** (optional)
  Set this to {{{key}}:{{value}}}. This key allows you to fetch the data that matches the query value.
  Default: `{“tags” :”presetBuilder”}`
- **asc** (optional)
  Set this to {{key}}. This key will fetch the data in the ascending order as per the defined value.
  Default: `type`
- **desc** (optional)
  Set this to {{key}}. This key will fetch the data in the descending order as per the defined value.
  Default: `type`
- **only[BASE][]** (optional)
  Set this to {{key}}. This key will only return the data defined in the value field.
  Default: `presets`
- **except[BASE][]** (optional)
  Set this to {{key}}. This key will not return the data defined in the value field.
  Default: `created_by`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: ` your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Response

```json
{
    "metadata": [
        {
            "uid": "cs71bc04a2566cd9d8",
            "extension_uid": "blte879cdefd0d30f36",
            "type": "entry",
            "entity_uid": "blt9c7274d7e34e3bbb",
            "_content_type_uid": "sample",
            "locale": "en-us",
            "api_key": "blt506a64809d6fe5d5",
            "scope": "local",
            "created_by": "blte79886ae7dda55c4",
            "updated_by": "blte79886ae7dda55c4",
            "created_at": "2023-04-10T06:43:17.905Z",
            "updated_at": "2023-04-10T06:43:17.905Z",
            "deleted_at": false,
            "_version": 1,
            "presets": [
                {
                    "uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
                    "name": "Test1",
                    "options": {}
                }
            ],
            "_metadata": {
                "title": {
                    "stack": "Test 101",
                    "entity": "Sample",
                    "content_type": "Sample"
                }
            }
        },
        {
            "uid": "cs5121647dd9154d42",
            "extension_uid": "blt912e40f8b2c3c71c",
            "type": "entry",
            "entity_uid": "bltbed0b14a57107fe7",
            "_content_type_uid": "demo",
            "locale": "en-us",
            "api_key": "blt506a64809d6fe5d5",
            "scope": "local",
            "created_by": "blte79886ae7dda55c4",
            "updated_by": "blte79886ae7dda55c4",
            "created_at": "2022-12-12T12:45:59.291Z",
            "updated_at": "2022-12-12T12:45:59.291Z",
            "deleted_at": false,
            "_version": 1,
            "tags": [
                "blt1db5abe772845959:cross_stack:main:bltb346e33a286a069c",
                "bltb346e33a286a069c:main"
            ],
            "refers_to": [
                {
                    "api_key": "bltb346e33a286a069c",
                    "_content_type_uid": "cross_stack",
                    "entry_uid": "blt1db5abe772845959",
                    "branch": "main",
                    "path": "custom"
                }
            ],
            "_metadata": {
                "title": {
                    "stack": "Test 101",
                    "entity": "New entry custom",
                    "content_type": "demo"
                }
            }
        }
    ]
}
```



#### Create Metadata

#### Create metadata

**POST** `/metadata`

The Create metadata request lets you create metadata for a specific asset or entry. Whenever you create metadata for an entry or asset, you need to specify the extension to which it will be connected.

In the ‘Body’ section, you need to provide the following information:

- entity_uid: Specify the unique ID of the entry or asset for which you want to create metadata.
- type: Specify whether you want to create metadata for an entry or asset.Note: The default type is an asset if not mentioned.
- _content_type_uid: Specify the content type UID if you are creating metadata for an entry.Note: For an asset type, the content type UID will be "sys_assets".
- extension_uid: Specify the UID of the extension for which you want to create the metadata.
- locale: Specify the language in which the entry is localized if the type is an entry. If not provided, the system defaults to the stack’s master_locale.
- metadata key: Specify the additional metadata that you want to attach to an existing asset/entry under a key name that suits your need.Note: The metadata size allowed per extension per entry/asset is 5KB. Please get in touch with our support team for any queries.

**Note**

- Once a metadata is created, the associated entry or asset must be published or republished for the metadata to take effect.
- You can provide any key name to store the metadata for your entry or asset except the following prebuilt keys: created_by, updated_by, created_at, updated_at, deleted_at, api_key, scope, locale, type, extension_uid, _version.

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Request

```json
{
	"metadata": {
		"entity_uid": "bltcbdfb3f254446076",
		"type": "entry",
		"_content_type_uid": "sample_content",
		"extension_uid": "blt8c723a09fdd0b25e",
		"presets": [{
			"uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
			"name": "Test1",
			"options": {

			}
		}]
	}
}
```

##### Sample Response

```json
{
	"notice": "Metadata created successfully.",
	"metadata": {
		"uid": "cs112ba1c547a3488c",
		"entity_uid": "bltcbdfb3f254446076",
		"type": "entry",
		"_content_type_uid": "sample_content",
		"extension_uid": "blt8c723a09fdd0b25e",
		"presets": [{
			"uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
			"name": "test1",
			"options": {

			}
		}],
		"locale": "en-us",
		"scope": "local",
		"created_by": "blt8588eda026739d77",
		"updated_by": "blt8588eda026739d77",
		"created_at": "2022-02-10T08:15:40.028Z",
		"updated_at": "2022-02-10T08:15:40.028Z",
		"api_key": "blt7a70757799323168",
		"deleted_at": false,
		"_version": 1
	}
}
```



#### Update Metadata

#### Update metadata

**PUT** `/metadata/{metadata_uid}`

The Update metadata request lets you update the metadata for a specific entry or asset.

In the ‘Body’ section, you need to provide the metadata key, that specifies the additional metadata that you want to attach to an existing asset/entry under a key name that suits your need.

**Note**: The metadata size allowed per extension per entry/asset is **5KB**. Please get in touch with our [support](mailto:support@contentstack.com) team for any queries.

You can partially update metadata for a defined key without having to specify all the key details every time you update metadata.

Keep the following points in mind when updating metadata:

- To create/update metadata for a specific entry or asset, you need update access to that entry or asset.
- If you update entry or asset metadata once, then you cannot recover the previous version of the metadata.

**Note**

- Once a metadata is updated, the associated entry or asset must be published or republished for the metadata to take effect.
- You can provide any key name to store the metadata for your entry or asset except the following prebuilt keys: created_by, updated_by, created_at, updated_at, deleted_at, api_key, scope, locale, type, extension_uid, _version, publish_details.

##### URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to update. You can find the metadata UID by running the [Get all assets](#get-all-assets) or [Get all entries](#get-all-entries) API request.
  Default: `cs112ba1c547a3488c`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Request

```json
{
	"metadata": {
		"entity_uid": "bltcbdfb3f254446076",
		"type": "entry",
		"extension_uid": "blt8c723a09fdd0b25e",
		"locale": "en_us",
		"_content_type_uid": "sample_content",
		"presets": [{
				"uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
				"name": "test1",
				"options": {}
			},
			
			{
				"name": "Test3",
				"uid": "8418f24e-4393-4dd9-9f20-d2ecba539431",
				"options": {
					"quality": "100",
					"transform": {
						"height": 500,
						"width": 500
					},
					"image-type": "jpeg",
					"focal-point": {
						"x": 0,
						"y": 0
					}
				}
			}
		]
	}
}
```

##### Sample Response

```json
{
    "notice": "Metadata updated successfully.",
    "metadata": {
        "uid": "cs112ba1c547a3488c",
        "entity_uid": "bltcbdfb3f254446076",
        "type": "entry",
        "_content_type_uid": "sample_content",
        "extension_uid": "blt8c723a09fdd0b25e",
        "presets": [
            {
                "uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
                "name": "test1",
                "options": {}
            },
            
            {
                "name": "Test3",
                "uid": "8418f24e-4393-4dd9-9f20-d2ecba539431",
                "options": {
                    "quality": "100",
                    "transform": {
                        "height": 500,
                        "width": 500
                    },
                    "image-type": "jpeg",
                    "focal-point": {
                        "x": 0,
                        "y": 0
                    }
                }
            }
        ],
        "locale": "en-us",
        "scope": "local",
        "created_by": "blt8588eda026739d77",
        "updated_by": "blt8588eda026739d77",
        "created_at": "2022-02-10T08:15:40.028Z",
        "updated_at": "2022-02-10T09:58:05.518Z",
        "api_key": "blt7a70757799323168",
        "deleted_at": false
    }
}
```



#### Delete Metadata

#### Delete metadata

**DELETE** `/metadata/{metadata_uid}`

The Delete metadata request lets you delete the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to delete against the metadata_uid parameter.

Keep the following points in mind when deleting metadata:

- To delete metadata for a specific entry or asset, you need delete access to that entry or asset.
- Once you delete entry or asset metadata, it is permanently deleted and cannot be restored.

##### URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to delete. You can find the metadata UID by running the [Get all assets](#get-all-assets) API request or [Get all entries](https://www.contentstack.com/developers/apis/content-management-api#get-all-entries) API request.
  Default: `cs3cbeeef5a398bf0f`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Metadata deleted successfully."
}
```



#### Publish Metadata

#### Publish metadata

**POST** `/metadata/{metadata_uid}/publish`

The Publish metadata request lets you publish the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to publish against the metadata_uid parameter.

Keep the following points in mind when publishing metadata:

- When you publish an entry/asset, the associated metadata of that entry/asset will also get published.Tip: If you publish only the metadata without publishing the corresponding asset or entry, the metadata will not resolve if you pass include_metadata: true. As a best practice, always publish the associated asset or entry.
- You must pass the include_publish_details query parameter to fetch the metadata publishing details in the response.

##### URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to publish. You can find the metadata UID by passing include_metadata parameters while running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `blt045d039eb6f2f9df`

##### Query Parameters

- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Request

```json
{
  "metadata": {
    "environments": [
      "test"
    ],
    "locales": [
      "en-us"
    ]
  }
}
```

##### Sample Response

```json
{
    "notice": "Metadata sent for publishing."
}
```



#### Unpublish Metadata

#### Unpublish metadata

**POST** `/metadata/{metadata_uid}/unpublish`

The Unpublish metadata request lets you unpublish the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to unpublish against the metadata_uid parameter.

##### URL Parameters

- **metadata_uid** (optional)
  Enter the unique ID of the metadata that you want to unpublish. You can find the metadata UID by by passing include_metadata parameters while running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `blt045d039eb6f2f9df`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

##### Sample Request

```json
{
  "metadata": {
    "environments": [
      "test"
    ],
    "locales": [
      "en-us"
    ]
  }
}
```

##### Sample Response

```json
{
    "notice": "Metadata sent for unpublishing."
}
```


### Labels

Labels allow you to group a collection of content within a stack. Using labels you can group content types that need to work together. Read more about [Labels](/docs/developers/create-content-types/#content-type-labels).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.


#### Labels Collection

#### Get all labels

**GET** `/labels?include_count={boolean_value}`

The Get all labels call fetches all the existing labels of the stack.

When executing the API call, under the 'Headers' section, enter the API key of your stack and management_token in the Authorization parameters.  
To configure the permissions for your application via OAuth, include the cm.labels.management:readscope.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](./content-delivery-api.md#queries) section of the Content Delivery API doc.

##### URL Parameters

- **query** (optional)
  Query to retrieve all labels of the stack.
  Default: `{"type":"dashboard", "enable": true}`

##### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of labels applied to content types.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `the API key of the stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"labels": [{
			"name": "Others",
			"parent": [],
			"uid": "blt3d33e33ea3bcf3f3",
			"created_by": "blt123123123123",
			"updated_by": "blt123123123123",
			"created_at": "2020-07-27T01:58:49.227Z",
			"updated_at": "2020-07-27T01:58:49.227Z",
			"ACL": [],
			"_version": 1,
			"content_types": [
				"bank",
				"brand",
				"category",
				"for_synchronization_calls"
			]
		},
		{
			"name": "Household items",
			"parent": [
				"blt77777f77ebe77e7c"
			],
			"uid": "blt48285aba9e3e5305",
			"created_by": "blt123123123123",
			"updated_by": "blt123123123123",
			"created_at": "2020-07-27T01:57:04.139Z",
			"updated_at": "2020-07-27T01:57:04.139Z",
			"ACL": [],
			"_version": 1,
			"content_types": [
				"kitchen_appliances",
				"electronics"
			]
		},
		{
			"name": "All Products",
			"parent": [],
			"uid": "blt77777f77ebe77e7c",
			"created_by": "blt123123123123",
			"updated_by": "blt123123123123",
			"created_at": "2020-07-27T01:55:48.514Z",
			"updated_at": "2020-07-27T01:55:48.514Z",
			"ACL": [],
			"_version": 1,
			"content_types": [
				"product"
			]
		}
	]
}
```


#### Get a single label

**GET** `/labels/{label_uid}`

The Get a single label call returns information about a particular label of a stack.

When executing the API call, add the label_uid as a URL parameter and management_token in the Authorization parameters.

To configure the permissions for your application via OAuth, please include the cm.labels.management:readscope.

##### URL Parameters

- **label_uid** (required)
  Enter the unique ID of the label that you want to retrieve.
  Default: `blt5d1761bce4b36d57`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"label": [{
		"name": "Test",
		"parent": [],
		"uid": "1234567890abcdef",
		"created_by": "sys_bltf123456789012",
		"updated_by": "sys_bltf123456789012",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": "1"
	}]
}
```


#### Add label

**POST** `/labels`

The Add label call is used to create a label.

When executing the API call, under the 'Headers' section, add the API key of your stack and management_token in the Authorization parameters.

In the 'Body' section, enter the label details, such as the name of the label, the uid of the parent label, and the content types that need to be included in the label. These details need to be provided in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `the API key of the stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "label": {
    "name": "Test",
    "parent": [
      "label_uid"
    ],
    "content_types": [
      "content_type_uid"
    ]
  }
}
```

##### Sample Response

```json
{
  "notice": "Label created successfully.",
  "label": {
    "name": "Test",
    "parent": [],
    "uid": "1234567890abcdef",
    "updated_by": "sys_bltf123456789012",
    "created_by": "sys_bltf123456789012",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "content_types": [],
    "_version": "1"
  }
}
```


#### Update label

**PUT** `/labels/{label_uid}`

The Update label call is used to update an existing label.

When executing the API call add the label_uid as a URL parameter and management_token in the Authorization parameters.

In the 'Body' section, enter the updated details of your label, which include the name of the label, the uid of the parent label, and the content types that need to be included in the label. These details need to be provided in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

##### URL Parameters

- **label_uid** (required)
  Enter the unique ID of the label that needs to be updated.
  Default: `blt5d1761bce4b36d57`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "label": {
    "name": "Test",
    "parent": [
      "label_uid"
    ],
    "content_types": [
      "content_type_uid"
    ]
  }
}
```

##### Sample Response

```json
{
	"notice": "Label updated successfully.",
	"label": {
		"name": "Test",
		"parent": [],
		"uid": "1234567890abcdef",
		"updated_by": "sys_bltf123456789012",
		"created_by": "sys_bltf123456789012",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"tags": [],
		"content_types": [],
		"_version": "2",
		"isLabel": true
	}
}
```


#### Delete label

**DELETE** `/labels/{label_uid}`

The Delete label call is used to delete a specific label.

When executing the API call, add the management_token in the Authorization parameters.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

##### URL Parameters

- **label_uid** (required)
  Enter the unique ID of the label that you want to delete.
  Default: `blt5d1761bce4b36d57`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "notice": "Label deleted successfully."
}
```


### Releases

You can pin a set of entries and assets (along with the deploy action, i.e., publish/unpublish) to a ‘release’, and then deploy this release to an environment. This will publish/unpublish all the items of the release to the specified environment. Read more about [Releases](/docs/content-managers/create-and-manage-releases).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

**Note**: Pass the release_version parameter as **2.0** in the Headers section if you have the latest release enabled for your organization. Reach out to our [support](mailto:support@contentstack.com) team for more information.


#### Releases Collection

#### Get all Releases

**GET** `/releases?include_count={boolean_value}&count={boolean_value}&include_items_count={boolean_value}&limit={limit_value}&skip={skip_value}`

The Get all Releases request retrieves a list of all Releases of a stack along with details of each Release. To configure the permissions for your application via OAuth, please include the cm.releases.management:read scope.

##### Query Parameters

- **include_count** (optional)
  The ‘include_count’ parameter includes the count of total number of releases in your stack, along with the details of each release. Example: If you want to know the total number of releases, you need to mention ‘true’ as the value of this parameter.
  Default: `false`
- **count** (optional)
  The ‘count’ parameter works similar to the ‘include_count’ parameter but returns ONLY the total count of releases in your stack and not the details of the releases in the response. Example: If you want to know the total number of releases in your stack, you need to mention ‘true’ as value for this parameter.
  Default: `true`
- **include_items_count** (optional)
  The ‘include_items_count’ parameter returns the total number of items in a specific release. Example: If you want to know the total number of items in a release, you need to mention ‘true’ as the value of this parameter.
  Default: `true`
- **limit** (optional)
  The ‘limit’ parameter will return a specific number of releases in the output. Example, if there are 10 releases and you want to fetch the  five latest updated releases, you need to specify '5' as value in this parameter.
  Default: `2`
- **skip** (optional)
  The ‘skip’ parameter will skip a specific number of releases in the response. Example: If there are 12 releases and you want to skip the first two updated releases to get only the next 10 in the response body, you need to specify ‘2’ here.
  Default: `2`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"releases": [{
		"name": "Release Name",
		"description": "2018-12-12",
		"uid": "blt123123bfc123fdd1",
		"created_by": "blt42e123123a2b1239f",
		"updated_by": "blt42e123123a2b1239f",
		"created_at": "2018-11-05T11:22:20.027Z",
		"updated_at": "2019-03-08T10:30:19.493Z",
		"locked": true,
		"status": [{
			"environment": "bltfd123123123123cb",
			"time": "2019-03-08T10:30:19.451Z",
			"status": "success",
			"user": "blt42e55757d70d5f81026a2b9f"
		}],
		"items_count": 10
	}]
}
```


#### Get a single Release

**GET** `/releases/{release_uid}`

The Get a single Release request gets the details of a specific Release in a stack.

When executing the API request, provide the Release UID as parameter.

To configure the permissions for your application via OAuth, please include the cm.releases.management:read scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release of which you want to retrieve the details.
  Default: `blt719af000dcde0000`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "release": {
        "uid": "bl***************38",
        "name": "Release Name",
        "description": "Fall Collection",
        "locked": false,
        "sys_version": 2,
        "created_at": "2025-04-04T08:41:52.729Z",
        "updated_at": "2025-07-24T10:34:29.852Z",
        "created_by": "bl***************8f",
        "updated_by": "bl***************2d",
        "status": [
            {
                "environment": "bl***************91",
                "status": "success",
                "user": "bl***************2d",
                "job_id": "7a78cb20-77b4-4bc5-93c0-092bcdde6c5a",
                "time": "2025-07-24T10:33:50.811Z"
            }
        ],
        "_deploy_latest": false,
        "items": [
            {
                "uid": "bl***************1a",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 2,
                "title": "Entry name",
                "variant_id": null
            },
            {
                "uid": "bl***************24",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 2,
                "title": "AI Innovation",
                "variant_id": null
            },
            {
                "uid": "bl***************10",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "blog",
                "version": 14,
                "title": "My First Blog",
                "variant_id": null
            },
            {
                "uid": "bl***************79",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 8,
                "title": "My first Article",
                "variant_id": null
            }
        ]
    }
}
```


#### Create a Release

**POST** `/releases`

The Create a Release request allows you to create a new Release in your stack. To create a release, you need to provide the name of the release in the request body.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"release": {
		"name": "Release Name",
		"description": "2018-12-12",
		"locked": false,
		"archived": false
	}
}
```

##### Sample Response

```json
{
	"notice": "Release created successfully.",
	"release": {
		"name": "Release Name",
		"description": "2018-12-12",
		"locked": false,
		"uid": "blt123123aaa321321",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123123",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-12T12:12:12:122Z",
		"status": [],
               "_deploy_latest": false
	}
}
```


#### Update a Release

**PUT** `/releases/{release_uid}`

The Update a Release call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’.

When executing this API request, provide the Release UID as parameter. In the 'Body' section, you need to provide the new name and description of the Release that you want to update.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to update the details of.
  Default: `blt719af000dcde0000`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "release": {
        "name": "Release Name",
        "description": "2018-12-22"
    }
}
```

##### Sample Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "name": "Release Name",
        "description": "2018-12-22",
        "locked": false,
        "uid": "blt9dc98b5d9d4d1e4a",
        "created_by": "blta068b6e50264acf6",
        "updated_by": "blta068b6e50264acf6",
        "created_at": "2023-02-28T07:11:57.077Z",
        "updated_at": "2023-02-28T07:19:30.886Z",
        "status": [],
        "_deploy_latest": false
    }
}
```


#### Delete a Release

**DELETE** `/releases/{release_uid}`

The Delete a Release request allows you to delete a specific Release from a stack.

When executing the API request, provide the Release UID.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to delete.
  Default: `blt719af000dcde0000`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"notice": "Release deleted successfully."
}
```



#### Release Items

#### Get all items in a Release

**GET** `/releases/{release_uid}/items`

The Get all items in a Release request retrieves a list of all items (entries and assets) that are part of a specific Release.

When executing the API request, you need to provide the Release UID.

To configure the permissions for your application via OAuth, please include the cm.release:read scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release of which you want to retrieve the items.
  Default: `blt719af000dcde0000`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
    "items": [
        {
            "action": "publish",
            "title": "Group",
            "uid": "blt63177c0f00f20b61",
            "locale": "en-us",
            "version": 2,
            "content_type_uid": "test_fields"
        },
        {
            "action": "publish",
            "title": "Modular Blocks",
            "uid": "bltcad3ea0479ffb274",
            "locale": "en-us",
            "version": 1,
            "content_type_uid": "test_fields"
        },
        {
            "action": "publish",
            "title": "File",
            "uid": "blt47a6d5202496b1da",
            "locale": "en-us",
            "version": 2,
            "content_type_uid": "test_fields"
        }
    ]
}
```


#### Add a single item to a Release

**POST** `/releases/{release_uid}/item`

The Add a single item to a Release request allows you to add an item (entry or asset) to a Release.

When executing the API request, you need to provide the Release UID. In the 'Body' section, you need to provide the details of the item such as the UID, version (of the entry and asset), content type UID (of an entry), the action to be performed (publish/unpublish), and the locale of the item. To add the asset in the release, the content type should be passed as "content_type_uid": "built_io_upload" in the request body.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release in which you want to add an item.
  Default: `your_release_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"item": {
		"version": 1,
		"uid": "entry_or_asset_uid",
		"content_type_uid": "your_content_type_uid",
		"action": "publish",
		"locale": "en-us"
	}
}
```

##### Sample Response

```json
{
    "notice": "Item added to release successfully.",
    "release": {
        "name": "Release Name 2",
        "description": "2018-12-12",
        "locked": false,
        "items": [
            {
                "action": "publish",
                "title": "Sample1",
                "uid": "bltc24b029fc706fc8d",
                "locale": "en-us",
                "version": 1,
                "content_type_uid": "localization"
            }
        ],
        "uid": "bltfb07235c1e256728",
        "created_by": "bltf7b2fe26db42adc6",
        "updated_by": "bltf7b2fe26db42adc6",
        "created_at": "2023-02-22T10:30:10.032Z",
        "updated_at": "2023-02-27T13:35:20.768Z",
        "ACL": [],
        "app_user_object_uid": null,
        "_version": 4,
        "status": [],
        "_deploy_latest": false,
        "tags": []
    }
}
```


#### Add multiple items to a Release

**POST** `/releases/{release_uid}/items`

The Add multiple items to a Release request allows you to add multiple items (entries and/or assets) to a Release.

When executing the API request, you need to provide the Release UID. In the 'Body' section, you need to provide the details of the items such as their UIDs, versions (in case of entries and assets), content type UIDs (in case of entries), the action to be performed (publish/unpublish), and the locales of the items. To add the asset in the release, the content type should be passed as "content_type_uid": "built_io_upload" in the request body.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

**Note**: In a single request, you can add maximum **25** items (entries/assets) to a Release.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release in which you want to add multiple items.
  Default: `your_release_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"items": [{
		"uid": "entry_or_asset_uid1",
		"version": 1,
		"locale": "en-us",
		"content_type_uid": "demo1",
		"action": "publish"
	}, {
		"uid": "entry_or_asset_uid2",
		"version": 4,
		"locale": "fr-fr",
		"content_type_uid": "demo2",
		"action": "publish"
	}]
}
```

##### Sample Response

```json
{
	"notice": "Item(s) to be added to the release has been sent successfully.",
	"release": {
		"name": "Release Name 2",
		"description": "2018-12-12",
		"items": [{
				"action": "publish",
				"title": "Sample1",
				"uid": "entry_or_asset_uid1",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo1"
			},
			{
				"action": "publish",
				"title": "Sample2",
				"uid": "entry_or_asset_uid2",
				"locale": "fr-fr",
				"version": 4,
				"content_type_uid": "demo2"
			}
		],
		"app_user_object_uid": "system",
		"uid": "release_uid",
		"created_by": "blt7d123123cc321fee9e",
		"updated_by": "blt7d123123cc321fee9e",
		"created_at": "2019-07-18T08:41:33.915Z",
		"updated_at": "2019-07-18T08:41:33.915Z",
		"ACL": [],
		"_version": 1,
		"locked": false,
		"status": [],
		"tags": []
	}
}
```


#### Update Release items to their latest versions

**PUT** `/releases/{release_uid}/update_items`

The Update Release items to their latest versions request let you update all the release items (entries and assets) to their latest versions before deployment.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

In the 'Body' section, you need to specify the following:

```
{
    "items":[
        "$all"
    ]
}
```

**Note**: This API request only allows you to collectively update all items in the release to their latest versions and not update any particular item individually.

In case an un-localized entry in the release has been localized later, this request will update the entry to the latest localized version. For example, if you add an un-localized entry to a release and later localize it to the French (France) language, this API request will update the release with the localized French version of the entry.

**Note**: You cannot update the release items under the following scenarios:

- If the updated version of an entry has new references, this API request doesn't automatically add the references to the release. You need to add them manually.
- You cannot update the items in a release once you deploy it.
- If the latest version of an entry is in the in-progress state, this API request doesn't update the entry.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release of which you want to update the items (entries and assets) to their latest versions. You can find the release uid by running the [Get all Releases](./content-management-api.md#releases-collection) API request.
  Default: `blt045d036eb8f2f9df`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
    "items":[
        "$all"
    ]
}
```

##### Sample Response

```json
{
  "notice":"Release items updated to their latest versions successfully.",
  "release":{
    "name":"Sample release", 
    "description":"Sample release",
    "uid":"blt046d036db7f2f9df",
    "created_by":"blt55927d24ccdc8d74e",
    "updated_by":"bltf41b5ae869879839",
    "created_at":"2021-11-15T06:29:21.061Z",
    "updated_at":"2021-12-01T07:09:42.201Z",
    "locked":false,
    "status":[
      
    ],
    "_deploy_latest":false,
    "items":[
      {
        "uid":"blta5cd0e5e62e4bc97",
        "version":4,
        "action":"publish",
        "content_type_uid":"sample_ct",
        "locale":"en-us",
        "title":"Sample entry"
      },
      {
        "uid":"blte254916f7d580dda",
        "version":2,
        "action":"publish",
        "content_type_uid":"demo-ct",
        "locale":"en-us",
        "title":"11.jpg"
      }
    ]
  }
}
```


#### Remove an item from a Release

**DELETE** `/releases/{release_uid}/items`

The Remove an item from a Release request removes one or more items (entries and/or assets) from a specific Release.

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the item such as their UIDs, version (of the entry), content type UID (of an entry), the action to be performed (publish/unpublish), and the locale of the item.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release from which you want to remove an item.
  Default: `blt718af000dcde0000`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"items": [{
		"uid": "blt123123123123",
		"version": 1,
		"locale": "ja-jp",
		"content_type_uid": "category",
		"action": "publish"
	}]
}
```

##### Sample Response

```json
{
	"notice": "Item(s) send to remove from release successfully.",
	"release": {
		"name": "Release Name 2",
		"description": "2018-12-12",
		"items": [{
				"action": "publish",
				"title": "Sample1",
				"uid": "blt123123ef321321",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo1"
			},
			{
				"action": "unpublish",
				"title": "Sample2",
				"uid": "blt321321fe123123",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo2"
			}
		],
		"uid": "blt123123ab12312de",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123322",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-14T13:13:13:122Z",
		"locked": false,
		"status": []
	}
}
```


#### Delete multiple items from a Release

**DELETE** `/releases/{release_uid}/items?all={boolean_value}`

The Delete multiple items from a Release request deletes one or more items (entries and/or assets) from a specific Release.

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the UIDs of the items along with details such as their locale, versions, the action to be performed on the items (publish/unpublish), and content type UID of entries (if any).

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release from which you want to remove items.
  Default: `blt719af000dcde0000`

##### Query Parameters

- **all** (required)
  The ‘all’ parameter will allow you to delete all items (entries and/or assets) of a release at once.
  Default: `true`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"items": [{
		"uid": "item_uid",
		"locale": "en-us",
		"version": 1,
		"content_type_uid": "your_content_type_uid",
		"action": "publish_or_unpublish"
	}]
}
```

##### Sample Response

```json
{
	"notice": "Item(s) send to remove from release successfully.",
	"release": {
		"name": "Release Name",
		"description": "2018-12-12",
		"items": [{
				"action": "publish_or_unpublish",
				"title": "Sample",
				"uid": "item_uid",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "your_content_type_uid"
			}
		],
		"uid": "blt123123ab12312de",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123322",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-14T13:13:13:122Z",
		"locked": false,
		"status": []
	}
}
```



#### Deploy/Execute a Release

#### Deploy a Release

**POST** `/releases/{release_uid}/deploy`

The Deploy a Release request deploys a specific Release to specific environment(s) and locale(s).

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the Release that you want to deploy. For example, you need to provide the scheduled time (in case of scheduled release), action, and environment(s) on which the Release should be deployed.

To configure the permissions for your application via OAuth, please include the cm.release:deploy scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release which you want to deploy on a specific environment and locale.
  Default: `blt719af000dcde0000`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"release": {
		"scheduled_at": "2018-12-12T13:13:13.122Z",
		"action": "publish/unpublish",
		"environments": [
			"Production",
			"UAT"
		]
	}
}
```

##### Sample Response

```json
{
	"notice": "Release sent successfully for deployment."
}
```



#### Clone a Release

#### Clone a Release

**POST** `/releases/{release_uid}/clone`

The Clone a Release request allows you to clone (make a copy of) a specific Release in a stack. When executing the API request, provide the Release UID.

In the 'Body' section, you need to provide the new name and description of the cloned Release.

To configure the permissions for your application via OAuth, please include the cm.release:clone scope.

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to clone.
  Default: `blt719af000dcde0000`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
	"release": {
		"name": "New Release Name",
		"description": "2018-12-12"
	}
}
```

##### Sample Response

```json
{
	"notice": "Release cloned successfully.",
	"release": {
		"name": "New Release Name",
		"description": "2018-12-12",
		"items": [{
				"action": "publish",
				"title": "Sample1",
				"uid": "blt123123ef321321",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo1"
			},
			{
				"action": "unpublish",
				"title": "Sample2",
				"uid": "blt321321fe123123",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo2"
			}
		],
		"uid": "blt1123ab123ede123",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123123",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-12T12:12:12:122Z",
		"locked": false,
		"status": []
	}
}
```



#### Lock a Release

#### Lock a Release

**PUT** `/releases/{release_uid}`

The Lock a Release request prevents further modifications to the specified release by locking it. In the 'Body' section, set the locked parameter as true to lock the release.

Your request body is as follows:

```
{
  "release": {
    "locked": true
  }
}
```

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to lock.
  Default: `blt719af000dcde0000`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "release": {
    "locked": true
  }
}
```

##### Sample Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "uid": "blt4**************a",
        "name": "Christmas Releases",
        "description": "",
        "locked": true,
        "sys_locked": false,
        "sys_version": 2,
        "status": [
            {
                "environment": "bltf6**************0",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "445f0669-50fc-4918-8f36-09abb3d573f4",
                "time": "2025-03-04T12:06:27.951Z"
            },
            {
                "environment": "blta**************1",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "44****69-50fc-4918-8f36-09********f4",
                "time": "2025-03-04T12:06:27.974Z"
            }
        ],
        "created_at": "2025-02-13T05:55:46.177Z",
        "updated_at": "2025-06-25T08:24:04.621Z",
        "created_by": "blt3**************4",
        "updated_by": "blte9**************1"
    }
}
```



#### Unlock a Release

#### Unock a Release

**PUT** `/releases/{release_uid}`

The Unlock a Release request removes the lock from a release, allowing further modifications to the specified release. In the 'Body' section, set the locked parameter as false to unlock the release.

Your request body is as follows:

```
{
  "release": {
    "locked": false
  }
}
```

##### URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to unlock.
  Default: `blt719af000dcde0000`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "release": {
    "locked": false
  }
}
```

##### Sample Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "uid": "blt4**************a",
        "name": "Christmas Releases",
        "description": "",
        "locked": false,
        "sys_locked": false,
        "sys_version": 2,
        "status": [
            {
                "environment": "bltf6**************0",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "445f0669-50fc-4918-8f36-09abb3d573f4",
                "time": "2025-03-04T12:06:27.951Z"
            },
            {
                "environment": "blta**************1",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "44****69-50fc-4918-8f36-09********f4",
                "time": "2025-03-04T12:06:27.974Z"
            }
        ],
        "created_at": "2025-02-13T05:55:46.177Z",
        "updated_at": "2025-06-25T08:24:04.621Z",
        "created_by": "blt3**************4",
        "updated_by": "blte9**************1"
    }
}
```


### Workflows

Workflow is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly. For more information, refer to our [Workflows](/docs/developers/set-up-workflows-and-publish-rules/) documentation.


#### Get All Workflows

#### Get all workflows

**GET** `/workflows`

The Get all Workflows request retrieves the details of all the Workflows of a stack.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "workflows":[
        {
            "_id":"5bc5a954c19dd527533325a2",
            "name":"My First Workflow",
            "description":"Workflow description",
            "uid":"bltc2bca504319aa69a",
            "org_uid":"blta04a8affd05894a2",
            "api_key":"blt410e8ed8d3ef764d",
            "branches":[
                "main",
                "development"
            ],
            "content_types":[
                "author",
                "article"
            ],
            "workflow_stages":[
                {
                    "name":"Initial Draft",
                    "uid":"blt31813070783c3b7e",
                    "color":"#2196f3",
                    "description":"This is the start stage",
                    "SYS_ACL":{
                        "others":{
                            "read":true,
                            "write":true,
                            "transit":false
                        },
                        "users":{
                            "uids":[
                                "$all"
                            ],
                            "read":true,
                            "write":true,
                            "transit":true
                        },
                        "roles":{
                            "uids":[
                                
                            ],
                            "read":true,
                            "write":true,
                            "transit":true
                        }
                    },
                    "next_available_stages":[
                        "$all"
                    ]
                },
                {
                    "name":"Review",
                    "uid":"blt2d49c2802fa9744a",
                    "color":"#2196e4",
                    "description":"This is the Review stage",
                    "SYS_ACL":{
                        "others":{
                            "read":true,
                            "write":true,
                            "transit":false
                        },
                        "users":{
                            "uids":[
                                "blt12b2e66fa2be0b5b"
                            ],
                            "read":true,
                            "write":true,
                            "transit":true
                        },
                        "roles":{
                            "uids":[
                                "bltc3e95f0c83fb879c"
                            ],
                            "read":true,
                            "write":true,
                            "transit":true
                        }
                    },
                    "next_available_stages":[
                        "$all"
                    ]
                },
                {
                    "name":"Complete",
                    "uid":"bltbf89addc1bad1f10",
                    "color":"#219677",
                    "description":"This is the last stage",
                    "SYS_ACL":{
                        "others":{
                            "read":true,
                            "write":true,
                            "transit":false
                        },
                        "users":{
                            "uids":[
                                
                            ],
                            "read":true,
                            "write":true,
                            "transit":true
                        },
                        "roles":{
                            "uids":[
                                "bltc3e95f0c83fb879c"
                            ],
                            "read":true,
                            "write":true,
                            "transit":true
                        }
                    },
                    "next_available_stages":[
                        "$all"
                    ]
                }
            ],
            "admin_users":{
                "users":[
                    
                ],
                "roles":[
                    "blt25afd7e6ed8d9d1e"
                ]
            },
            "enabled":true,
            "created_at":"2018-10-16T09:03:16.588Z",
            "created_by":"blt12b2e66fa2be0b5b",
            "deleted_at":false
        }
    ]
}
```



#### Get a Single Workflow

#### Get a single workflow

**GET** `/workflows/{workflow_uid}`

The Get a Single Workflow request retrieves the comprehensive details of a specific Workflow of a stack.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

##### URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow that you want to retrieve.
  Default: `bltc2bca504319aa69a`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "workflow":{
        "name":"My New Workflow",
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ],
        "admin_users":{
            "users":[
                
            ],
            "roles":[
                "blt25afd7e6ed8d9d1e"
            ]
        },
        "description":"Some description herrererererererere",
        "workflow_stages":[
            {
                "name":"Initial Draft",
                "color":"#2196f3",
                "description":"It is the start stage",
                "next_available_stages":[
                    "$all"
                ],
                "position":"start_stage",
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt53e09746340f82d9"
            },
            {
                "name":"Review",
                "color":"#2196e4",
                "description":"It is the Review stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            "blt12b2e66fa2be0b5b"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt4f291a4405705930"
            },
            {
                "name":"Complete",
                "color":"#219677",
                "description":"It is the last stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt8b2b8c51285819aa"
            }
        ],
        "uid":"blt5ed9de17258e14c3",
        "api_key":"blt410e8ed8d3ef764d",
        "org_uid":"blta04a8affd05894a2",
        "enabled":true,
        "created_by":"blt12b2e66fa2be0b5b",
        "created_at":"2018-10-17T10:21:53.397Z",
        "deleted_at":false
    }
}
```



#### Create a Workflow

#### Create a workflow

**POST** `/workflows`

The Create a Workflow request allows you to create a Workflow.

In the 'Body' section, you can provide the details of the workflow that includes name, content types, owners, description, and workflow stages of your Workflow. To define the branch scope, specify the unique IDs of the branches for which the workflow will be applicable in the following schema in the request body:

```
"branches":[
    "main",
    "development"
]
```

To control who can edit an entry at different stages of the workflow, you can pass the entry_lock parameter inside each workflow stage.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:writescope.

**Note**: Workflow superusers, organization owners, and stack owners/admins can edit or delete the entry in any workflow stage, irrespective of the stage access rules set for that stage.

You can assign any one of the following values to this parameter:

- $none: This is the default value for all workflow stages. This value allows all users to have edit access over the entry at any workflow stage until the value for the entry_lock parameter is changed.
- $others: Set the entry_lock parameter to $others to allow only those users who have stage transition rights to edit the entry in the current workflow stage.
- $all: Set the entry_lock parameter to $all to restrict all users from accessing the entry.
    Note: Users with stage transition rights, however, will still be able to change the workflow stage of the entry.

**Note**: The entry is available for editing, by default, in the first stage that you create in your workflow. As a result, the entry_lock parameter is set to $none for the first stage in the workflow.

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Request

```json
{
    "workflow":{
        "workflow_stages":[
            {
                "color":"#2196f3",
                "SYS_ACL":{
                    "roles":{
                        "uids":[
                            
                        ]
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ]
                    },
                    "others":{
                        
                    }
                },
                "next_available_stages":[
                    "$all"
                ],
                "allStages":true,
                "allUsers":true,
                "specificStages":false,
                "specificUsers":false,
                "entry_lock":"$none",
                "name":"Review"
            },
            {
                "color":"#74ba76",
                "SYS_ACL":{
                    "roles":{
                        "uids":[
                            
                        ]
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ]
                    },
                    "others":{
                        
                    }
                },
                "allStages":true,
                "allUsers":true,
                "specificStages":false,
                "specificUsers":false,
                "next_available_stages":[
                    "$all"
                ],
                "entry_lock":"$none",
                "name":"Complete"
            }
        ],
        "admin_users":{
            "users":[
                
            ]
        },
        "name":"Workflow",
        "enabled":true,
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ]
    }
}
```

##### Sample Response

```json
{
    "notice": "Workflow created successfully.",
    "workflow": {
        "_id": "5d8c8391423efc02ae7a15f5",
        "name": "Workflow 3.0",
        "uid": "workflow_uid",
        "org_uid": "organization_uid",
        "api_key": "stack_api_key",
        "branches": [
            "main",
            "development"
        ],
        "content_types": [
            "$all"
        ],
        "workflow_stages": [
            {
                "name": "Initial Draft",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": true,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "$all"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "uid_of_next_available_stages"
                ]
            },
            {
                "name": "Review",
                "uid": "workflow_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "comma-separated_user_uids"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "comma-separated_names_of_next_workflow_stages"
                ]
            },
            {
                "name": "Complete",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "user_uids"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "next_workflow_stage_uids"
                ]
            },
            {
                "name": "Publish",
                "uid": "workflw_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "$all"
                        ],
                        "read": true,
                        "write": false,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": false,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "$all"
                ]
            }
        ],
        "admin_users": {
            "users": [],
            "roles": [
                "role_uid"
            ]
        },
        "enabled": true,
        "created_at": "2019-09-26T09:23:29.828Z",
        "created_by": "user_uid",
        "deleted_at": false,
        "updated_at": "2020-04-16T06:12:41.305Z",
        "updated_by": "user_uid",
        "description": "Some description here"
    }
}
```



#### Add or Update Workflow Details

#### Add or update workflow details

**PUT** `/workflows/{workflow_uid}`

The Add or Update Workflow request allows you to add a workflow stage or update the details of the existing stages of a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:writescope.

In the 'Body' section, you can provide the updated details of the name, content types, owners, and workflow stages of your Workflow. To define the branch scope, specify the unique IDs of the branches for which the workflow will be applicable in the following schema in the request body:

```
"branches":[
    "main",
    "development"
]
```

To control who can edit an entry at different stages of the workflow, you can pass the entry_lock parameter inside each workflow stage.

**Note**: Workflow superusers, organization owners, and stack owners/admins can edit or delete the entry in any workflow stage, irrespective of the stage access rules set for that stage.

You can assign any one of the following values to this parameter:

- $none: This is the default value for all workflow stages. This value allows all users to have edit access over the entry at any workflow stage until the value for the entry_lock parameter is changed.
- $others: Set the entry_lock parameter to $others to allow only those users who have stage transition rights to edit the entry in the current workflow stage.
- $all: Set the entry_lock parameter to $all to restrict all users from accessing the entry.
    Note: Users with stage transition rights, however, will still be able to change the workflow stage of the entry.

**Note**: The entry is available for editing, by default, in the first stage that you create in your workflow. As a result, the entry_lock parameter is set to $none for the first stage in the workflow.

##### URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow whose details you want to update.
  Default: `blt53e09746340f82d9`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Request

```json
{
    "workflow":{
        "workflow_stages":[
            {
                "color":"#2196f3",
                "SYS_ACL":{
                    "roles":{
                        "uids":[
                            
                        ]
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ]
                    },
                    "others":{
                        
                    }
                },
                "next_available_stages":[
                    "$all"
                ],
                "allStages":true,
                "allUsers":true,
                "specificStages":false,
                "specificUsers":false,
                "entry_lock":"$none",
                "name":"Review"
            },
            {
                "color":"#74ba76",
                "SYS_ACL":{
                    "roles":{
                        "uids":[
                            
                        ]
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ]
                    },
                    "others":{
                        
                    }
                },
                "allStages":true,
                "allUsers":true,
                "specificStages":false,
                "specificUsers":false,
                "next_available_stages":[
                    "$all"
                ],
                "entry_lock":"$none",
                "name":"Complete"
            }
        ],
        "admin_users":{
            "users":[
                
            ]
        },
        "name":"Workflow",
        "enabled":true,
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ]
    }
}
```

##### Sample Response

```json
{
    "notice": "Workflow created successfully.",
    "workflow": {
        "_id": "5d8c8391423efc02ae7a15f5",
        "name": "Workflow 3.0",
        "uid": "workflow_uid",
        "org_uid": "organization_uid",
        "api_key": "stack_api_key",
        "branches": [
            "main",
            "development"
        ],
        "content_types": [
            "$all"
        ],
        "workflow_stages": [
            {
                "name": "Initial Draft",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": true,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "$all"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "comma-separated_names_of_next_workflow_stages"
                ]
            },
            {
                "name": "Review",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "comma-separated_user_uids"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "comma-separated_names_of_next_workflow_stages"
                ]
            },
            {
                "name": "Complete",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description for the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "comma-separated_user_uids"
                        ],
                        "read": true,
                        "write": true,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": true,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "comma-separated_names_of_next_workflow_stages"
                ]
            },
            {
                "name": "Publish",
                "uid": "workflow_stage_uid",
                "color": "hex_color_code",
                "description": "Description of the stage",
                "SYS_ACL": {
                    "others": {
                        "read": true,
                        "write": false,
                        "transit": false
                    },
                    "users": {
                        "uids": [
                            "$all"
                        ],
                        "read": true,
                        "write": false,
                        "transit": true
                    },
                    "roles": {
                        "uids": [],
                        "read": true,
                        "write": false,
                        "transit": true
                    }
                },
                "next_available_stages": [
                    "$all"
                ]
            }
        ],
        "admin_users": {
            "users": [],
            "roles": [
                "comma-separated_role_uids"
            ]
        },
        "enabled": true,
        "created_at": "2019-09-26T09:23:29.828Z",
        "created_by": "user_uid",
        "deleted_at": false,
        "updated_at": "2020-04-16T06:12:41.305Z",
        "updated_by": "user_uid",
        "description": "Some description here"
    }
}
```



#### Disable Workflow

#### Disable workflow

**GET** `/workflows/{workflow_uid}/disable`

The Disable Workflow request allows you to disable a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:write scope.

##### URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow that you want to disable.
  Default: `blt53e09746340f82d9`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "notice":"Workflow disabled successfully.",
    "workflow":{
        "name":"My New Workflow",
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ],
        "admin_users":{
            "users":[
                
            ],
            "roles":[
                "blt25afd7e6ed8d9d1e"
            ]
        },
        "description":"Some description here",
        "workflow_stages":[
            {
                "name":"Initial Draft",
                "color":"#2196f3",
                "description":"This is the start stage",
                "next_available_stages":[
                    "$all"
                ],
                "position":"start_stage",
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt53e09746340f82d9"
            },
            {
                "name":"Review",
                "color":"#2196e4",
                "description":"This is the Review stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            "blt12b2e66fa2be0b5b"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt4f291a4405705930"
            },
            {
                "name":"Complete",
                "color":"#219677",
                "description":"This is the last stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":false
                    }
                },
                "uid":"blt8b2b8c51285819aa"
            }
        ],
        "uid":"blt5ed9de17258e14c3",
        "api_key":"blt410e8ed8d3ef764d",
        "org_uid":"blta04a8affd05894a2",
        "enabled":true,
        "created_by":"blt12b2e66fa2be0b5b",
        "created_at":"2018-10-17T10:21:53.397Z",
        "deleted_at":false
    }
}
```



#### Enable Workflow

#### Enable workflow

**GET** `/workflows/{workflow_uid}/enable`

The Enable Workflow request allows you to enable a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:write scope.

##### URL Parameters

- **workflow_uid** (required)
  Enter the UID of your workflow that you want to enable.
  Default: `blt53e09746340f82d9`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "notice":"Workflow enabled successfully.",
    "workflow":{
        "name":"My New Workflow",
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ],
        "admin_users":{
            "users":[
                
            ],
            "roles":[
                "blt25afd7e6ed8d9d1e"
            ]
        },
        "description":"Some description herrererererererere",
        "workflow_stages":[
            {
                "name":"Initial Draft",
                "color":"#2196f3",
                "description":"It is the start stage",
                "next_available_stages":[
                    "$all"
                ],
                "position":"start_stage",
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt53e09746340f82d9"
            },
            {
                "name":"Review",
                "color":"#2196e4",
                "description":"It is the Review stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            "blt12b2e66fa2be0b5b"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt4f291a4405705930"
            },
            {
                "name":"Complete",
                "color":"#219677",
                "description":"It is the last stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":true,
                        "transit":false
                    },
                    "users":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true,
                        "transit":true
                    }
                },
                "uid":"blt8b2b8c51285819aa"
            }
        ],
        "uid":"blt5ed9de17258e14c3",
        "api_key":"blt410e8ed8d3ef764d",
        "org_uid":"blta04a8affd05894a2",
        "enabled":true,
        "created_by":"blt12b2e66fa2be0b5b",
        "created_at":"2018-10-17T10:21:53.397Z",
        "deleted_at":false
    }
}
```



#### Delete Workflow

#### Delete workflow

**DELETE** `/workflows/{workflow_uid}`

The Delete Workflow request allows you to delete a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:write scope.

##### URL Parameters

- **workflow_uid** (required)
  Enter the UID of the workflow that you want to delete.
  Default: `blt53e09746340f82d9`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "notice":"Workflow deleted successfully.",
    "workflow":{
        "name":"My New Workflow",
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ],
        "admin_users":{
            "users":[
                
            ],
            "roles":[
                "blt25afd7e6ed8d9d1e"
            ]
        },
        "description":"Some description herrererererererere",
        "workflow_stages":[
            {
                "name":"Initial Draft",
                "color":"#2196f3",
                "description":"It is the start stage",
                "next_available_stages":[
                    "$all"
                ],
                "position":"start_stage",
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":false
                    },
                    "users":{
                        "uids":[
                            "$all"
                        ],
                        "read":true,
                        "write":true
                    },
                    "roles":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true
                    }
                },
                "uid":"blt53e09746340f82d9"
            },
            {
                "name":"Review",
                "color":"#2196e4",
                "description":"It is the Review stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":false
                    },
                    "users":{
                        "uids":[
                            "blt12b2e66fa2be0b5b"
                        ],
                        "read":true,
                        "write":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true
                    }
                },
                "uid":"blt4f291a4405705930"
            },
            {
                "name":"Complete",
                "color":"#219677",
                "description":"It is the last stage",
                "next_available_stages":[
                    "$all"
                ],
                "SYS_ACL":{
                    "others":{
                        "read":true,
                        "write":false
                    },
                    "users":{
                        "uids":[
                            
                        ],
                        "read":true,
                        "write":true
                    },
                    "roles":{
                        "uids":[
                            "bltc3e95f0c83fb879c"
                        ],
                        "read":true,
                        "write":true
                    }
                },
                "uid":"blt8b2b8c51285819aa"
            }
        ],
        "uid":"blt5ed9de17258e14c3",
        "api_key":"blt410e8ed8d3ef764d",
        "org_uid":"blta04a8affd05894a2",
        "enabled":true,
        "created_by":"blt12b2e66fa2be0b5b",
        "created_at":"2018-10-17T10:21:53.397Z",
        "deleted_at":"2018-10-18T10:21:53.397Z"
    }
}
```



#### Entry Workflow Stages

#### Set entry workflow stage

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

The Set Entry Workflow Stage request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry.   
To configure the permissions for your application via OAuth, please include the cm.entry.workflow:write scope.

In the 'Body' section, you need to provide the details of the workflow stage. Enter a comment for the assigned user, if needed; provide the due date; set notification settings to ‘true’, so that the specified user will be notified of it; enter the UID of the workflow stage; and finally, enter the user details, such as UID, name, and email address of the user.

**Note**: The request operates using a management token only when the transition rule is configured to "All users/roles."

##### URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry of which you want to change the workflow stage.
  Default: `blt53e09746340f82d9`
- **entry_uid** (required)
  Enter the UID of the entry of which you want to change the workflow stage.
  Default: `blt01638c90cc28fb6d`

##### Query Parameters

- **locale** (optional)
  Enter you locale.
  Default: `en-us`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
	"workflow": {
		"workflow_stage": {
			"comment": "Workflow Comment",
			"due_date": "Thu Dec 01 2018",
			"notify": false,
			"uid": "workflow_stage_uid",
			"assigned_to": [{
					"uid": "user_uid", 
					"name": "Username", 
					"email": "user_email_id"
					}],
			"assigned_by_roles": [{
				"uid": "role_uid",
				"name": "Role name"
			}]		
		}
	}
}
```

##### Sample Response

```json
{
	"notice": "Workflow stage updated successfully."
}
```



#### Publish Rules Collection

#### Create publish rules

**POST** `/workflows/publishing_rules`

The Create Publish Rules request allows you to create publish rules for the workflow of a stack.  
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:write scope.

To define the branch scope, specify the unique IDs of the branches for which the publishing rule will be applicable in the following schema in the request body:

```
"branches":[
    "main",
    "development"
]
```

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Request

```json
{
    "publishing_rule":{
        "workflow":"workflow_uid",
        "actions":[],
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "$all"
        ],
        "locales":[
            "en-us"
        ],
        "environment":"environment_uid",
        "approvers":{
            "users":[
                "user_uids"
            ],
            "roles":[
                "role_uids"
            ]
        },
        "workflow_stage":"workflow_stage_uid",
        "disable_approver_publishing":false
    }
}
```

##### Sample Response

```json
{
    "notice":"Publish rule created successfully.",
    "publishing_rule":{
        "uid":"rule_uid",
        "api_key":"stack_api_key",
        "workflow":"workflow_uid",
        "workflow_stage":"workflow_stage_uid",
        "actions":[],
        "environment":"environment_uid",
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "article"
        ],
        "locales":[
            "en-us"
        ],
        "approvers":{
            "users":[
                "user_uid"
            ],
            "roles":[
                "role_uid"
            ]
        },
        "status":true,
        "disable_approver_publishing":false,
        "created_at":"2018-11-14T09:36:25.216Z",
        "created_by":"user_uid",
        "_id":"5bebec991ee0bdfb2b9bfe83"
    }
}
```


#### Update publish rules

**PUT** `/workflows/publishing_rules/{rule_uid}`

The Update Publish Rules request allows you to add a publish rule or update the details of the existing publish rules of a workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:write scope.

To define the branch scope, specify the unique IDs of the branches for which the publishing rule will be applicable in the following schema in the request body:

```
"branches":[
    "main",
    "development"
]
```

##### URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to update.
  Default: `your_rule_uid`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "publishing_rule": {
    	"workflow": "workflow_uid",
        "actions": [],
        "branches": [
            "main",
            "development"
        ],
        "content_types": ["$all"],
        "locales": ["en-us"],
        "environment": "environment_uid",
         "approvers": {
        	"users": ["user_uid"],
        	"roles": ["role_uid"]
        },
        "workflow_stage": "workflow_stage_uid",
         "disable_approver_publishing": false

    }
}
```

##### Sample Response

```json
{
	"notice": "Publish rule updated successfully."
}
```


#### Delete publish rules

**DELETE** `/workflows/publishing_rules/{rule_uid}`

The Delete Publish Rules request allows you to delete an existing publish rule.   
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:write scope.

##### URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to delete.
  Default: `publish_rule_uid`

##### Headers

- **api_key** (required)
  Enter your stack API key
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
	"notice": "Publish rule deleted successfully."
}
```


#### Get all publish rules

**GET** `/workflows/publishing_rules?content_types=[{content_type_uid}]&limit={rule_limit}&include_count={boolean_value}`

The Get all Publish Rules request retrieves the details of all the Publish rules of a workflow.   
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:read scope.

##### Query Parameters

- **content_types** (required)
  Enter a comma-separated list of content type UIDs for filtering publish rules on its basis.
  Default: `{{content_type_uid1,content_type_uid2,...}}`
- **limit** (optional)
  Enter the limit value to display only the set number of publishing rules.
  Default: `10`
- **include_count** (required)
  Set this parameter to 'true' to include the total number of publish rules in the response body.
  Default: `true`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "count":2,
    "publishing_rules":[
        {
            "_id":"5beac61a4d4ad9fa0d25d4dd",
            "uid":"blt76cdbf02766801a5",
            "api_key":"blt410e8ed8d3ef764d",
            "actions":[
                "publish"
            ],
            "environment":"bltae72fda3f36c1136",
            "branches":[
                "main",
                "development"
            ],
            "content_types":[
                "product",
                "kitchen_appliances"
            ],
            "locales":[
                "en-us"
            ],
            "approvers":{
                "users":[
                    
                ],
                "roles":[
                    "blt5b74c24c7ae25d94"
                ]
            },
            "status":true,
            "disable_approver_publishing":false,
            "created_at":"2020-09-23T05:14:34.305Z",
            "created_by":"blt12b2e66fa2be0b5b"
        },
        {
            "_id":"5bebbbe9e87d0afa2501ccb5",
            "uid":"5bebbbe9e87d0afa2501ccb5",
            "api_key":"blt410e8ed8d3ef764d",
            "actions":[
                "publish"
            ],
            "environment":"blt212026a468e6e103",
            "branches":[
                "main",
                "development"
            ],
            "content_types":[
                "brand",
                "category"
            ],
            "locales":[
                "en-us"
            ],
            "approvers":{
                "users":[
                    "blt12b2e66fa2be0b5b"
                ]
            },
            "status":true,
            "disable_approver_publishing":false,
            "created_at":"2020-09-23T05:16:04.103Z",
            "created_by":"blt12b2e66fa2be0b5b"
        }
    ]
}
```


#### Get a single publish rule

**GET** `/workflows/publishing_rules/{rule_uid}`

The Get a Single Publish Rule request retrieves the comprehensive details of a specific publish rule of a Workflow.  
To configure the permissions for your application via OAuth, please include the cm.workflows.publishing-rules:read scope.

##### URL Parameters

- **rule_uid** (required)
  Enter the UID of the publish rule that you want to fetch.
  Default: `blt53e09746340f82d9`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "publishing_rule":{
        "uid":"blt977147600130f0f2",
        "api_key":"blt410e8ed8d3ef764d",
        "workflow":"blt7477770bcf1d8c7d",
        "workflow_stage":"blt03166caa63cf966d",
        "actions":[
            
        ],
        "environment":"bltae72fda3f36c1136",
        "branches":[
            "main",
            "development"
        ],
        "content_types":[
            "article"
        ],
        "locales":[
            "en-us"
        ],
        "approvers":{
            "users":[
                "blt12b2e66fa2be0b5b"
            ],
            "roles":[
                "blt5b74c24c7ae25d94"
            ]
        },
        "status":true,
        "disable_approver_publishing":false,
        "created_at":"2018-11-14T09:36:25.216Z",
        "created_by":"blt12b2e66fa2be0b5b"
    }
}
```



#### Publish Rules by Content Types

#### Get publish rules by content types

**GET** `/workflows/content_type/{content_type_uid}?action=(publish/unpublish)&locale={locale_code}&environment={environment_uid}`

The Get Publish Rules by Content Types request allows you to retrieve details of a Publish Rule applied to a specific content type of your stack.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

##### URL Parameters

- **content_type_uid** (required)
  Enter the UID of the content type of which you want to retrieve the Publishing Rule.
  Default: `content_type_uid`

##### Query Parameters

- **action** (required)
  Enter the action that has been set in the Publishing Rule.
  Default: `publish/unpublish`
- **locale** (optional)
  Enter the code of the locale where your Publishing Rule will be applicable.
  Default: `en-us`
- **environment** (optional)
  Enter the UID of the environment where your Publishing Rule will be applicable.
  Default: `production`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Response

```json
{
	"publishing_rules": [{
			"locale": "en-us",
			"action": "publish",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"uid": "blt27ae01ef747fa622"
		},
		{
			"locale": "fr-fr",
			"action": "publish",
			"uid": "blt9b9253297f117e84",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"approvers": [
				"blt5f75d38457c7b306"
			]
		},
		{
			"locale": "hi-in",
			"action": "publish",
			"uid": "blt9b9253297f117e84",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"approvers": [
				"blt5f75d38457c7b306"
			]
		}
	]
}
```



#### Publish Request Approval

#### Request/Accept/Reject Entry Publish Request

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

This multipurpose request allows you to either send a publish request or accept/reject a received publish request.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, you need to provide the details of the publish rule, such as its UID, action (‘publish’, ‘unpublish’, or ’both’), status (this could be ‘0’ for Approval Requested, ‘1’ for ‘Approval Accepted’, and ‘-1’ for ‘Approval Rejected’), notification setting, and comment for the approver.

##### URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type to which the entry belongs.
  Default: `content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry on which the Publishing Rule is applicable.
  Default: `entry_uid`

##### Query Parameters

- **locale** (optional)
  Enter the code of the locale that the entry belongs to.
  Default: `en-us`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `your_authtoken`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
	"workflow": {
		"publishing_rule": {
			"uid": "blt9b9253297f117e84",
			"action": "publish",
			"status": 1,
			"notify": false,
			"comment": "Please review this."
		}
	}
}
```

##### Sample Response

```json
[{
		"notice": "You have sent an approval request to publish the entry on development environment."
	},
	{
		"notice": "You have accepted the request to publish entry on development environment."
	},
	{
		"notice": "You have rejected the request to publish entry on development environment."
	}
]
```



#### Workflow Tasks

#### Get all Tasks

**GET** `/user/assignments?query={query_in_JSON}&sort={field_uid: "asc/desc"}&limit={limit_value}&skip={skip_value}`

The Get all Tasks request retrieves a list of all tasks assigned to you.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.

##### Query Parameters

- **query** (required)
  Enter the actual query that will be executed to retrieve the tasks. This query should be in JSON format. Example: - {"job.publishing_rule.status":0}: retrieves pending approval requests - {"type":"workflow_stage"}: retrieve tasks based on Workflow Stages - {"job.workflow_stage.uid": "workflow_stage_uid"}: retrieve tasks based on a specific Workflow Stage  - {"content_type":"content_type_uid", "type": "publishing_rule"}: retrieve tasks based on multiple conditions
  Default: `{"type":"workflow_stage"}`
- **sort** (optional)
  Enter the field UID on the basis of which you want to sort your tasks. Example: {"assigned_at": "desc"}, {"content_type": "asc"}, or {"assigned_date": "desc", "locale":"asc"}
  Default: `{“assigned_at”: “desc”}`
- **limit** (optional)
  Enter the maximum number of tasks that you want to retrieve in the response.
  Default: `5`
- **skip** (optional)
  Enter the number of tasks to be skipped.
  Default: `5`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Response

```json
{
	"assignments": [{
			"api_key": "bltead62b75f44449be",
			"content_type": "test_2",
			"entry_uid": "blt85e280c58eee9371",
			"locale": "en-us",
			"org_uid": "blt987d5031d804e50b",
			"type": "workflow_stage",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d38457c7b306"
			],
			"assigned_at": "2018-04-03T15:05:50.047Z",
			"assigned_by": "blt5f75d38457c7b306",
			"due_date": "2018-04-03T18:30:00.000Z",
			"job": {
				"org": "sample_org",
				"stack": "demo",
				"content_type": "test_ct_2",
				"entry": "Hi",
				"locale": "English - United States",
				"workflow_stage": {
					"uid": "review",
					"title": "Review",
					"color": "red"
				}
			}
		},
		{
			"api_key": "bltead62b75f44449be",
			"content_type": "test_2",
			"entry_uid": "blt85e280c58eee9371",
			"locale": "en-us",
			"org_uid": "blt987d5031d804e50b",
			"type": "workflow_stage",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d38457c7b306"
			],
			"assigned_at": "2018-04-03T15:05:50.047Z",
			"assigned_by": "blt5f75d38457c7b306",
			"due_date": "2018-04-03T18:30:00.000Z",
			"job": {
				"org": "demo_org",
				"stack": "test",
				"content_type": "test_ct",
				"entry": "Hello",
				"locale": "English - United States",
				"workflow_stage": {
					"uid": "review",
					"title": "Review",
					"color": "red"
				}
			}
		},
		{
			"action": "publish",
			"api_key": "bltead62b75f00000be",
			"content_type": "test_1",
			"entry_uid": "blt4d9ab000e00ddfa8",
			"environment": "bltf00d80f0b000cf90",
			"locale": "hi-in",
			"org_uid": "blt987d0000d000e50b",
			"type": "publishing_rule",
			"entry_locale": "en-us",
			"version": 1,
			"assigned_to": [
				"blt5f75d00000c7b000"
			],
			"assigned_at": "2018-04-04T07:36:05.087Z",
			"assigned_by": "blt5f75d00000c7b306",
			"job": {
				"org": "test_org",
				"stack": "sample2",
				"content_type": "test_ct_2",
				"entry": "Test",
				"locale": "French - France",
				"environment": "development",
				"publishing_rule": {
					"uid": "blt9b0000097f117e84",
					"status": -1
				}
			},
			"comment": "Here’s your task."
		}
	]
}
```


### Languages

Contentstack has a sophisticated multilingual capability. It allows you to create and publish entries in any language. This feature allows you to set up multilingual websites and cater to a wide variety of audience by serving content in their local language(s).

Read more about [Languages](/docs/developers/multilingual-content).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.


#### Language Collection (Locales)

#### Get all languages

**GET** `/locales?include_count={boolean_value}`

This call fetches the list of all languages (along with the language codes) available for a stack.

To configure the permissions for your application via OAuth, please include the cm.languages.management:read scope.  
When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](./content-delivery-api.md#queries) section of the Content Delivery API doc.

##### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of languages added to your stack.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
	"locales": [{
			"code": "zh-cn",
			"uid": "qwertyuiop123456",
			"created_by": "abcd1234567890",
			"updated_by": "abcd1234567890",
			"created_at": "2015-01-08T15:07:53.495Z",
			"updated_at": "2015-01-08T15:07:53.495Z",
			"name": "Chinese - China",
			"ACL": {},
			"_version": 1,
			"fallback_locale": "en-us"
		},
		{
			"code": "ja-jp",
			"uid": "qwertyuiop123321",
			"created_by": "abcd1234567890",
			"updated_by": "abcd1234567890",
			"created_at": "2015-01-08T15:08:13.495Z",
			"updated_at": "2015-01-08T15:08:13.495Z",
			"name": "Japanese - Japan",
			"ACL": [],
			"_version": 1,
			"fallback_locale": "en-us"
		}
	]
}
```


#### Add a language

**POST** `/locales`

This call lets you add a new language to your stack. You can either add a [supported language](../../cs-docs/developers/multilingual-content/supported-languages.md) or a [custom language](../../cs-docs/developers/multilingual-content/add-a-custom-language.md) of your choice.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, enter the language name and code in JSON format. You can also specify the fallback language you want to assign to the new language within the same JSON.

**Warning**: Once generated, you cannot modify a custom language code. However, you can update the language name and fallback language if required.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `false`

##### Sample Request

```json
{
  "locale":{
    "name":"Arabic - Bahrain",
    "code":"ar-bh",
    "fallback_locale":"en-us"
  }
}
```

##### Sample Response

```json
{
    "notice": "Language added successfully.",
    "locale": {
        "code": "ar-bh",
        "uid": "blt3e7b80f501b604ef",
        "created_by": "blt7b815b05d2fe5dd8",
        "updated_by": "blt7b815b05d2fe5dd8",
        "created_at": "2021-07-01T10:20:16.887Z",
        "updated_at": "2021-07-01T10:20:16.887Z",
        "fallback_locale": "en-us",
        "name": "Arabic - Bahrain",
        "ACL": {},
        "_version": 1
    }
}
```


#### Get a language

**GET** `/locales/{code}`

The Get a language call returns information about a specific language available on the stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:read scope.

##### URL Parameters

- **code** (required)
  Enter the code of the language that you want to retrieve.
  Default: `fr-fr`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "locale": {
    "code": "zh-cn",
    "uid": "qwertyuiop123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "name": "Chinese - China",
    "ACL": {},
    "_version": 1,
    "tags": []
  }
}
```


#### Update language

**PUT** `/locales/{code}`

The Update language call will let you update the details (such as display name) and the fallback language of an existing language of your stack.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

In the 'Body' section, enter the updated details of your language name and fallback language in JSON format.

##### URL Parameters

- **code** (required)
  Enter the code of the language that you wish to update.
  Default: `your_language_code`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "locale":{
    "name":"Updated Locale Name",
    "fallback_locale":"zh-cn"
  }
}
```

##### Sample Response

```json
{
    "notice": "Language updated successfully.",
    "locale": {
        "code": "ar-bh",
        "uid": "blt3e7b80f501b604ef",
        "created_by": "blt7b815b05d2fe5dd8",
        "updated_by": "blt7b815b05d2fe5dd8",
        "created_at": "2021-07-01T10:20:16.887Z",
        "updated_at": "2021-07-01T10:47:43.068Z",
        "fallback_locale": "zh-cn",
        "name": "Updated Locale Name",
        "ACL": {},
        "_version": 3
    }
}
```


#### Delete language

**DELETE** `/locales/{code}`

The Delete language call deletes an existing language from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

##### URL Parameters

- **code** (required)
  Enter the code of the language that you wish to delete.
  Default: `fr-fr`

##### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "notice": "Language removed successfully."
}
```



#### Fallback Languages

Language fallback allows entries created in a particular language to initially inherit data from the fallback language instead of directly inheriting content from the master language. For more information, refer the documentation for [Fallback Language](../../cs-docs/developers/multilingual-content/about-fallback-languages.md).

#### Set a fallback language

**POST** `/locales`

The Set a fallback language request allows you to assign a fallback language for an entry in a particular language.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.

In the 'Body' section, enter the language codes in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

**Note**: The language set as a fallback language will always inherit data from the master language if it does not have localized content.

##### Query Parameters

- **include_language** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "locale": {
    "name": "German - German",
    "code": "de-de",
    "fallback_locale": "de-en"
  }
}
```

##### Sample Response

```json
{
  "locale": {
    "name": "German - German",
    "code": "de-de",
    "fallback_locale": "de-en"
  }
}
```


#### Update fallback language

**PUT** `/locales/{locale_uid}`

The Update fallback language request allows you to update the fallback language for an existing language of your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.

In the 'Body' section, enter the updated details of the fallback language in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

**Note**: The language set as a fallback language will always inherit data from the master language if it does not have localized content.

##### URL Parameters

- **locale_code** (required)
  Enter the language code of the language that you want to assign as a fallback language for an existing language of your stack.
  Default: `zh-cn`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Request

```json
{
  "locale": {
    "name": "German",
    "code": "de",
    "fallback_locale": "en-us"
      }
}
```

##### Sample Response

```json
{
    "notice": "Language updated successfully.",
    "locale": {
        "code": "de",
        "name": "German",
        "fallback_locale": "en-us",
        "uid": "blt9627e0b4fe7b5986",
        "created_by": "blt58fb93b4f1c8e17b",
        "updated_by": "bltf6c2ef24db42bde6",
        "created_at": "2023-02-17T11:56:25.173Z",
        "updated_at": "2023-02-27T13:19:03.106Z",
        "ACL": {},
        "_version": 1
    }
}
```


### Environment

A publishing environment corresponds to one or more deployment servers or a content delivery destination where the entries need to be published.

Read more about [Environments](/docs/developers/set-up-environments).


#### Environment Collection

#### Get all environments

**GET** `/environments?include_count={boolean_value}&asc={field_uid}&desc={field_uid}`

The Get all environments call fetches the list of all environments available in a stack.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](./content-delivery-api.md#queries) section of the Content Delivery API doc.  
To configure the permissions for your application via OAuth, please include thecm.environments.management:read scope.

##### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of languages added to your stack.
  Default: `false`
- **asc** (optional)
  Enter the unique ID of the field for sorting the environments in ascending order with respect to that field.
  Default: `created_at`
- **desc** (optional)
  Enter the unique ID of the field for sorting the environments in descending order with respect to that field.
  Default: `updated_at`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "environments": [
        {
                    "urls": [
                {
                    "url": "http://localhost.com",
                    "locale": "en-us"
                }
            ],
            "name": "local",
            "uid": "blta1212be1fcfdfad2",
            "created_by": "blt12e12121d12d1f81212a1b2f",
            "updated_by": "blt12e12121d12d1f81212a1b2f",
            "created_at": "2017-06-13T12:28:59.488Z",
            "updated_at": "2018-11-01T13:25:00.349Z",
            "ACL": [],
            "_version": 2
        },
        {
            "deploy_content": false,
             "urls": [
                {
                    "url": "/staging",
                    "locale": "en-us"
                }
            ],
            "name": "staging",
            "uid": "bltf66ca6a66d66cecf",
            "created_by": "blt6565a6b056fc5bc6",
            "updated_by": "blt6565a6b056fc5bc6",
            "created_at": "2019-05-03T08:11:12.583Z",
            "updated_at": "2019-05-03T08:11:12.583Z",
            "ACL": [],
            "_version": 1
        },
        {
            "deploy_content": false,
             "urls": [
                {
                    "url": "",
                    "locale": "en-us"
                }
            ],
            "name": "production",
            "uid": "bltfd8888c8bd8cb8cb",
            "created_by": "blt22e22222d22d2f22222a2b2f",
            "updated_by": "blt22e22222d22d2f22222a2b2f",
            "created_at": "2018-08-09T13:39:37.117Z",
            "updated_at": "2018-08-09T13:39:37.117Z",
            "ACL": [],
            "_version": 1
        }
    ]
}
```


#### Get a single environment

**GET** `/environments/{environment_name}`

The Get a single environment call returns more details about the specified environment of a stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.environments.management:read scope.

##### URL Parameters

- **environment_name** (required)
  Enter the name of the environment.
  Default: `development`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
  "environment": {
    "name": "production",
     "urls": [
      {
        "locale": "en-us",
        "url": "http://example.com/"
      }
    ],
    "uid": "asdfghjkl123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "tags": [],
    "_version": 1
  }
}
```


#### Add an environment

**POST** `/environments`

The Add an environment call will add a publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, mention the environment name, the URLs (which include the language code and the URL of the server).  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

##### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
	"environment": {
		"name": "development",
		"urls": [{
			"locale": "en-us",
			"url": "http://example.com/"
		}]
	}
}
```

##### Sample Response

```json
{
  "notice": "Environment created successfully.",
  "environment": {
    "name": "production",
     "urls": [
      {
        "locale": "en-us",
        "url": "http://example.com/"
      }
    ],
    "uid": "asdfghjkl123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "tags": [],
    "_version": 1
  }
}
```


#### Update environment

**PUT** `/environments/{environment_name}`

The Update environment call will update the details of an existing publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, enter the updated details of the environment. You can modify the environment name, the URLs (which include the language code and the URL of the server).  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

##### URL Parameters

- **environment_name** (required)
  Enter the name of the environment.
  Default: `development`

##### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
	"environment": {
		"name": "development",
		"urls": [{
			"locale": "en-us",
			"url": "http://example.com/"
		}]
	}
}
```

##### Sample Response

```json
{
  "notice": "Environment updated successfully.",
  "environment": {
    "name": "production",
     "urls": [
      {
        "locale": "en-us",
        "url": "http://example.com/"
      }
    ],
    "uid": "asdfghjkl123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "tags": [],
    "_version": 1
  }
}
```


#### Delete environment

**DELETE** `/environments/{environment_name}`

The Delete environment call will delete an existing publishing environment from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

##### URL Parameters

- **environment_name** (required)
  Enter the name of the environment.
  Default: `development`

##### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
  "notice": "Environment deleted successfully."
}
```


### Tokens

Contentstack provides different [types of tokens](../../cs-docs/developers/create-tokens/types-of-tokens.md) to authorize API requests. You can use [Delivery Tokens](../../cs-docs/developers/create-tokens/about-delivery-tokens.md) to authenticate Content Delivery API (CDA) requests and retrieve the published content of an environment. To authenticate Content Management API (CMA) requests over your stack content, you can use [Management Tokens](../../cs-docs/developers/create-tokens/about-management-tokens.md).

Delivery tokens provide read-only access to the associated environments, while management tokens provide read-write access to the content of your stack. Use these tokens along with the stack API key to make authorized API requests.


#### Delivery Token Collection

#### Get all delivery tokens

**GET** `/stacks/delivery_tokens`

The Get all delivery tokens request returns the details of all the delivery tokens created in a stack.

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`

##### Sample Response

```json
{
    "tokens":[
        {
            "name":"Test",
            "scope":[
                {
                    "environments":[
                        {
                            "deploy_content":false,
                            "servers":[
                                
                            ],
                            "urls":[
                                {
                                    "url":"http://www.sample.com",
                                    "locale":"en-us"
                                }
                            ],
                            "name":"production",
                            "app_user_object_uid":"system",
                            "uid":"bltc123123ab6c32126",
                            "created_by":"blt7d123cc321ee12e",
                            "updated_by":"blt7d123cc321ee12e",
                            "created_at":"2019-07-15T07:26:10.915Z",
                            "updated_at":"2019-07-15T07:26:10.915Z",
                            "ACL":[
                                
                            ],
                            "_version":1,
                            "tags":[
                                
                            ]
                        }
                    ],
                    "module":"environment",
                    "acl":{
                        "read":true
                    }
                },
                {
                    "module":"branch",
                    "acl":{
                        "read":true
                    },
                    "branches":[
                        "main",
                        "development"
                    ],
                    "_metadata":{
                        "uid":"cs766df728fb56e697"
                    }
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy",
                        "release"
                    ],
                    "_metadata":{
                        "uid":"cs27a40bf57db84414"
                    }
                }
            ],
            "uid":"bltdce123123d321f3",
            "created_by":"blt7d123cc321ee12e",
            "updated_by":"blt7d123cc321ee12e",
            "created_at":"2019-07-19T07:41:05.070Z",
            "updated_at":"2019-07-19T07:41:05.070Z",
            "description":"",
            "token":"csf72faf222222e222ddd2222b",
            "type":"delivery"
        }
    ]
}
```


#### Get a single delivery token

**GET** `/stacks/delivery_tokens/{token_uid}`

The Get a single delivery token request returns the details of a particular delivery token created in a stack.

##### URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to retrieve.
  Default: `blt22222ecd22a2ccd222`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`

##### Sample Response

```json
{
    "tokens":[
        {
            "name":"Test",
            "scope":[
                {
                    "environments":[
                        {
                            "deploy_content":false,
                            "servers":[
                                
                            ],
                            "urls":[
                                {
                                    "url":"http://www.sample.com",
                                    "locale":"en-us"
                                }
                            ],
                            "name":"production",
                            "app_user_object_uid":"system",
                            "uid":"bltc123123ab6c32126",
                            "created_by":"blt7d123cc321ee12e",
                            "updated_by":"blt7d123cc321ee12e",
                            "created_at":"2019-07-15T07:26:10.915Z",
                            "updated_at":"2019-07-15T07:26:10.915Z",
                            "ACL":[
                                
                            ],
                            "_version":1,
                            "tags":[
                                
                            ]
                        }
                    ],
                    "module":"environment",
                    "acl":{
                        "read":true
                    }
                },
                {
                    "module":"branch",
                    "acl":{
                        "read":true
                    },
                    "branches":[
                        "main",
                        "development"
                    ],
                    "_metadata":{
                        "uid":"cs766df728fb56e697"
                    }
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy",
                        "release"
                    ],
                    "_metadata":{
                        "uid":"cs27a40bf57db84414"
                    }
                }
            ],
            "uid":"bltdce123123d321f3",
            "created_by":"blt7d123cc321ee12e",
            "updated_by":"blt7d123cc321ee12e",
            "created_at":"2019-07-19T07:41:05.070Z",
            "updated_at":"2019-07-19T07:41:05.070Z",
            "description":"",
            "token":"csf72faf222222e222ddd2222b",
            "type":"delivery"
        }
    ]
}
```


#### Create delivery token

**POST** `/stacks/delivery_tokens`

The Create delivery token request is used to create a delivery token in the stack.

In the Request Body, you need to pass the details of the delivery token in JSON format. The details include the name, description, and the environment of the delivery token.

To create a delivery token with associated preview token, pass the create_with_preview_token query parameter as true.

**Note**: It is highly recommended to set only one publishing environment per delivery token.

You need to specify the branch and alias scope for your delivery token through the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main",
        "development"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy",
        "release"
    ],
    "acl":{
        "read":true
    }
}
```

##### Query Parameters

- **create_with_preview_token** (optional)
  Set this to true to create a preview token.
  Default: `true`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
	"token": {
		"name": "Sample Delivery Token",
		"description": "This is a sample delivery token.",
		"scope": [{
			"module": "environment",
			"environments": ["production"],
			"acl": {
				"read": true
			}
		}]
	}
}
```

##### Sample Response

```json
{
    "notice": "Delivery Token created successfully.",
    "token": {
        "name": "Sample Delivery Token",
        "description": "This is a sample delivery token.",
        "scope": [
            {
                "environments": [
                    {
                        "urls": [
                            {
                                "url": "",
                                "locale": "en-us"
                            }
                        ],
                        "name": "production",
                        "_version": 2,
                        "app_user_object_uid": "system",
                        "uid": "bltb3c6cea2fefce1a6",
                        "created_by": "blt0f1b34d48616093a",
                        "updated_by": "blt0f1b34d48616093a",
                        "created_at": "2023-06-26T12:15:12.745Z",
                        "updated_at": "2023-06-26T12:15:12.745Z",
                        "ACL": [],
                        "tags": []
                    }
                ],
                "module": "environment",
                "acl": {
                    "read": true
                },
                "_metadata": {
                    "uid": "cse639d7ef7edf687b"
                }
            }
        ],
        "preview_token": "cs76f46e9817405ec92b1d2dc1",
        "uid": "blt8041e844c449278a",
        "created_by": "blt0a9cc7075b8decf0",
        "updated_by": "blt0a9cc7075b8decf0",
        "created_at": "2023-11-29T10:45:40.826Z",
        "updated_at": "2023-11-29T10:45:40.826Z",
        "token": "csb2d9c0f6158aff22d9e09460",
        "type": "delivery"
    }
}
```


#### Update delivery token

**PUT** `/stacks/delivery_tokens/{token_uid}`

The Update delivery token request lets you update the details of a delivery token.

In the Request Body, you need to pass the updated details of the delivery token in JSON format. The details include the updated name, description, and/or the environment of the delivery token.

You need to specify
the branch and alias scope for your delivery token through the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main",
        "development"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy",
        "release"
    ],
    "acl":{
        "read":true
    }
}
```

##### URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to update.
  Default: `blt12312ecd31a2ccd123`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

##### Sample Request

```json
{
    "token":{
        "name":"Test",
        "description":"This is a updated token.",
        "scope":[
            {
                "module":"environment",
                "environments":[
                    "production"
                ],
                "acl":{
                    "read":true
                }
            },
            {
                "module":"branch",
                "branches":[
                    "main",
                    "development"
                ],
                "acl":{
                    "read":true
                }
            },
            {
                "module":"branch_alias",
                "branch_aliases":[
                    "deploy"
                ],
                "acl":{
                    "read":true
                }
            }
        ]
    }
}
```

##### Sample Response

```json
{
    "notice:":"Delivery token updated successfully",
    "tokens":[
        {
            "name":"Test",
            "scope":[
                {
                    "environments":[
                        {
                            "deploy_content":false,
                            "servers":[
                                
                            ],
                            "urls":[
                                {
                                    "url":"http://www.sample.com",
                                    "locale":"en-us"
                                }
                            ],
                            "name":"production",
                            "app_user_object_uid":"system",
                            "uid":"bltc123123ab6c32126",
                            "created_by":"blt7d123cc321ee12e",
                            "updated_by":"blt7d123cc321ee12e",
                            "created_at":"2019-07-15T07:26:10.915Z",
                            "updated_at":"2019-07-15T07:26:10.915Z",
                            "ACL":[
                                
                            ],
                            "_version":1,
                            "tags":[
                                
                            ]
                        }
                    ],
                    "module":"environment",
                    "acl":{
                        "read":true
                    }
                },
                {
                    "module":"branch",
                    "acl":{
                        "read":true
                    },
                    "branches":[
                        "main",
                        "development"
                    ],
                    "_metadata":{
                        "uid":"csee4be95096e55c10"
                    }
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy"
                    ],
                    "_metadata":{
                        "uid":"cs930edafb5eaf80e7"
                    }
                }
            ],
            "uid":"bltdce123123d321f3",
            "created_by":"blt7d123cc321ee12e",
            "updated_by":"blt7d123cc321ee12e",
            "created_at":"2019-07-19T07:41:05.070Z",
            "updated_at":"2019-07-19T07:41:05.070Z",
            "description":"This is a updated token.",
            "token":"csf72faf222222e222ddd2222b",
            "type":"delivery"
        }
    ]
}
```


#### Delete delivery token

**DELETE** `/stacks/delivery_tokens/{token_uid}?force={boolean_value}`

The Delete delivery token request deletes a specific delivery token.

##### URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to delete.
  Default: `cs22222ecd22a2ccd222`

##### Query Parameters

- **force** (optional)
  Enter ‘true’ to force delete a delivery token.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`

##### Sample Response

```json
{
	"notice:": "Delivery Token deleted successfully."
}
```



#### Preview Token Collection

A [Preview Token](../../cs-docs/developers/create-tokens/about-delivery-tokens.md#about-preview-tokens) provides you access to retrieve details of your website within the live preview panel.

**Note**: The Preview tokens are exclusively compatible with the new rest-preview.contentstack.com endpoint.

#### Create preview token

**POST** `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

The Create preview token request creates a Preview token for a particular Delivery token in a stack of your organization.

##### URL Parameters

- **delivery_token_uid** (required)
  Enter the UID of the delivery token for which you want to delete the preview token.
  Default: `your_delivery_token_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Response

```json
{
    "notice": "Preview token created successfully.",
    "token": {
        "name": "Sample Delivery Token",
        "description": "This is a sample delivery token.",
        "scope": [
            {
                "environments": [
                    {
                        "urls": [
                            {
                                "url": "",
                                "locale": "en-us"
                            }
                        ],
                        "name": "production",
                        "_version": 2,
                        "app_user_object_uid": "system",
                        "uid": "bltb3c6cea2fefce1a6",
                        "created_by": "blt0f1b34d48616093a",
                        "updated_by": "blt0f1b34d48616093a",
                        "created_at": "2023-06-26T12:15:12.745Z",
                        "updated_at": "2023-06-26T12:15:12.745Z",
                        "ACL": [],
                        "tags": []
                    }
                ],
                "module": "environment",
                "acl": {
                    "read": true
                },
                "_metadata": {
                    "uid": "cs965b4bfbe0afec6b"
                }
            }
        ],
        "uid": "blt8041e844c449278a",
        "created_by": "blt0a9cc7075b8decf0",
        "updated_by": "blt0a9cc7075b8decf0",
        "created_at": "2023-11-29T10:45:40.826Z",
        "updated_at": "2023-11-29T10:47:53.587Z",
        "token": "csb2d9c0f6158aff22d9e09460",
        "type": "delivery",
        "preview_token": "cs0d1431d6a4f8fe3d10b1861c"
    }
}
```


#### Delete preview token

**DELETE** `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

The Delete preview token request deletes a preview token associated with a specific delivery token.

##### URL Parameters

- **delivery_token_uid** (required)
  Enter the UID of the delivery token for which you want to delete the preview token.
  Default: `your_delivery_token_uid`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

##### Sample Response

```json
{
    "notice": "Preview token deleted successfully."
}
```



#### Management Token Collection

#### Get all management tokens

**GET** `/stacks/management_tokens`

The Get all management tokens request returns the details of all the management tokens generated in a stack and not the actual management tokens.

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

##### Sample Response

```json
{
    "tokens":[
        {
            "name":"Test Token",
            "expires_on":"2020-12-10",
            "is_email_notification_enabled":true,
            "scope":[
                {
                    "module":"content_type",
                    "acl":{
                        "read":true,
                        "write":true
                    }
                },
                {
                    "module":"branch",
                    "acl":{
                        "read":true
                    },
                    "branches":[
                        "main",
                        "development"
                    ]
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy"
                    ]
                }
            ],
            "uid":"bltds822f23g4d28hg2",
            "created_by":"blt6563a9b067fc1bc9",
            "updated_by":"blt6563a9b067fc1bc9",
            "created_at":"2020-11-12T09:32:12.239Z",
            "updated_at":"2020-11-12T09:32:12.239Z",
            "description":"This is a sample management token."
        },
        {
            "name":"Sample Token",
            "expires_on":"2020-11-27",
            "is_email_notification_enabled":true,
            "scope":[
                {
                    "module":"$all",
                    "acl":{
                        "read":true,
                        "write":true
                    }
                },
                {
                    "module":"branch",
                    "acl":{
                        "read":true
                    },
                    "branches":[
                        "main",
                        "development"
                    ]
                },
                {
                    "module":"branch_alias",
                    "acl":{
                        "read":true
                    },
                    "branch_aliases":[
                        "deploy"
                    ]
                }
            ],
            "uid":"bltcde433gf0967fdac",
            "created_by":"blt6563a9b067fc1bc9",
            "updated_by":"blt6563a9b067fc1bc9",
            "created_at":"2020-11-12T09:24:57.191Z",
            "updated_at":"2020-11-12T09:24:57.191Z",
            "description":"This is a sample token."
        }
    ]
}
```


#### Get a single management token

**GET** `/stacks/management_tokens/{token_uid}`

The Get a single management token request returns the details of a specific management token generated in a stack and not the actual management token.

##### URL Parameters

- **token_uid** (required)
  Enter the UID of the management token of which you want to retrieve the details of.
  Default: `blt4c10d48233884473`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

##### Sample Response

```json
{
    "token":{
        "name":"Test Token",
        "expires_on":"2020-12-10",
        "is_email_notification_enabled":true,
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"branch",
                "acl":{
                    "read":true
                },
                "branches":[
                    "main",
                    "development"
                ]
            },
            {
                "module":"branch_alias",
                "acl":{
                    "read":true
                },
                "branch_aliases":[
                    "deploy"
                ]
            }
        ],
        "uid":"bltda613c24d4e12c28",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2020-11-12T09:32:12.239Z",
        "updated_at":"2020-11-12T09:32:12.239Z",
        "description":"This is a sample management token."
    }
}
```


#### Create management token

**POST** `/stacks/management_tokens`

The Create management token request is used to create a management token in a stack. This token provides you with read-write access to the content of your stack.

**Note**: A management token can only be generated by the owner or admin of a stack.

In the Request Body, you need to pass the details of the management token in JSON format. The details include the name, description, the stack-level permissions you need to assign to the token, and the expiry date of the token in UTC time (if required). Additionally, you can also choose to get notified (via email) **seven** days before the token expires.

You need to specify
the branch and alias scope for your management token through the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main",
        "development"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy",
        "release"
    ],
    "acl":{
        "read":true
    }
}
```

**Note**: You can generate a maximum of 10 management tokens for a specific stack within your organization.

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "token":{
        "name":"Test Token",
        "description":"This is a sample management token.",
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"branch",
                "branches":[
                    "main",
                    "development"
                ],
                "acl":{
                    "read":true
                }
            },
            {
                "module":"branch_alias",
                "branch_aliases":[
                    "deploy",
                    "release"
                ],
                "acl":{
                    "read":true
                }
            }
        ],
        "expires_on":"2020-12-10",
        "is_email_notification_enabled":true
    }
}
```

##### Sample Response

```json
{
    "notice":"Management Token created successfully.",
    "token":{
        "name":"Test Token",
        "description":"This is a sample management token.",
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"branch",
                "acl":{
                    "read":true
                },
                "branches":[
                    "main",
                    "development"
                ]
            },
            {
                "module":"branch_alias",
                "acl":{
                    "read":true
                },
                "branch_aliases":[
                    "deploy",
                    "release"
                ]
            }
        ],
        "expires_on":"2020-12-10",
        "is_email_notification_enabled":true,
        "uid":"blt3b10e39122774473",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2020-11-12T09:04:49.561Z",
        "updated_at":"2020-11-12T09:04:49.561Z",
        "token":"cs808c053abc70fe2ccda123b2"
    }
}
```


#### Update management token

**PUT** `/stacks/management_tokens/{token_uid}`

The Update management token request lets you update the details of a management token. You can change the name and description of the token; update the stack-level permissions assigned to the token; and change the expiry date of the token (if set).

In the Request Body, you need to pass the updated details of the management token in JSON format.

To specify the updated branch and alias scope for your management token, use the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main",
        "development"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy",
        "release"
    ],
    "acl":{
        "read":true
    }
}
```

##### URL Parameters

- **token_uid** (required)
  Enter the UID of the management token that you want to update.
  Default: `blt3c33b3833884482`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
    "token":{
        "name":"Updated Test Token",
        "description":"This is an updated management token.",
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"entry",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"branch",
                "branches":[
                    "main",
                    "development"
                ],
                "acl":{
                    "read":true
                }
            },
            {
                "module":"branch_alias",
                "branch_aliases":[
                    "deploy"
                ],
                "acl":{
                    "read":true
                }
            }
        ],
        "expires_on":"2020-12-31",
        "is_email_notification_enabled":true
    }
}
```

##### Sample Response

```json
{
    "notice":"Management Token updated successfully.",
    "token":{
        "name":"Updated Test Token",
        "description":"This is an updated management token.",
        "scope":[
            {
                "module":"content_type",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"entry",
                "acl":{
                    "read":true,
                    "write":true
                }
            },
            {
                "module":"branch",
                "acl":{
                    "read":true
                },
                "branches":[
                    "main",
                    "development"
                ]
            },
            {
                "module":"branch_alias",
                "acl":{
                    "read":true
                },
                "branch_aliases":[
                    "deploy"
                ]
            }
        ],
        "expires_on":"2020-12-31",
        "is_email_notification_enabled":true,
        "uid":"blt4d23e29233884473",
        "created_by":"blt6563a9b067fc1bc9",
        "updated_by":"blt6563a9b067fc1bc9",
        "created_at":"2020-11-12T09:04:49.561Z",
        "updated_at":"2020-11-12T09:21:02.244Z"
    }
}
```


#### Delete management token

**DELETE** `/stacks/management_tokens/{token_uid}`

The Delete management token request deletes a specific management token.

##### URL Parameters

- **token_uid** (required)
  Enter the UID of the management token that you want to delete.
  Default: `blt3c33b3833884482`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

##### Sample Response

```json
{
    "notice": "Management Token deleted successfully."
}
```


### Roles

A role is a collection of permissions that will be applicable to all the users who are assigned with that role. Read more about [Roles](/docs/developers/invite-users-and-assign-roles/).


#### Role Collection

#### Get all roles

**GET** `/roles?include_permissions={boolean_value}&include_rules={boolean_value}`

The Get all roles request returns comprehensive information about all roles created in a stack.

You can add queries to extend the functionality of this API request. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](./content-delivery-api.md#queries) section of the Content Delivery API doc.  
To configure the permissions for your application via OAuth, please include the cm.roles.management:read scope.

##### Query Parameters

- **include_permissions** (optional)
  Set this parameter to 'true' to include the details of the permissions assigned to a particular role.
  Default: `false`
- **include_rules** (optional)
  Set this to ‘true’ to include the details of the rules assigned to a role.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
  "roles":[
    {
      "name":"Developer",
      "description":"Developer can perform all Content Manager's actions, view audit logs, create roles, invite users, manage content types, languages, and environments.",
      "uid":"bltf177eec8730751a3",
      "created_by":"blta7eaf6883dd73a0b",
      "updated_by":"blta7eaf6883dd73a0b",
      "created_at":"2021-09-16T11:54:15.300Z",
      "updated_at":"2021-09-16T12:29:24.192Z",
      "roles":[
        
      ],
      "users":[
        "blt1fd0057b90905592"
      ],
      "owner":"john.doe@contentstack.com",
      "stack":{
        "created_at":"2021-09-16T11:54:14.172Z",
        "updated_at":"2021-09-16T12:29:24.179Z",
        "uid":"blt48b5e7f7b2f4b962",
        "name":"My Site",
        "description":"My site related content.",
        "org_uid":"blteac54a27425b3b0e",
        "api_key":"blt29ec365eaa0c8d67",
        "master_locale":"en-us",
        "is_asset_download_public":true,
        "owner_uid":"blta7eaf6883dd73a0b",
        "user_uids":[
          "blta7eaf6883dd73a0b",
          "blt1fd0057b90905592"
        ],
        "settings":{
          "version":"2019-04-30",
          "rte_version":3,
          "blockAuthQueryParams":true,
          "allowedCDNTokens":[
            "access_token"
          ],
          "branches":true,
          "webhook_enabled":true,
          "stack_variables":{
            
          },
          "live_preview":{
            
          },
          "discrete_variables":{
            "cms":true,
            "_version":3,
            "secret_key":"6ab0a6df0447b33386648f1d889d27b253ffe7fc"
          },
          "language_fallback":false,
          "workflow_stages":true,
          "publishing_rules":true
        },
        "master_key":"bltb0dad0b0b7033f78"
      },
      "SYS_ACL":{
        
      }
    },
    {
      "name":"Content Manager",
      "description":null,
      "uid":"blt6c7ffc6b4906acf5",
      "created_by":"blta7eaf6883dd73a0b",
      "updated_by":"blt1fd0057b90905592",
      "created_at":"2021-09-16T11:54:15.300Z",
      "updated_at":"2021-09-23T15:29:44.813Z",
      "roles":[
        
      ],
      "users":[
        "blt1fd0057b90905592"
      ],
      "owner":"john.doe@contentstack.com",
      "stack":{
        "created_at":"2021-09-16T11:54:14.172Z",
        "updated_at":"2021-09-16T12:29:24.179Z",
        "uid":"blt48b5e7f7b2f4b962",
        "name":"My Site",
        "description":"My site related content.",
        "org_uid":"blteac54a27425b3b0e",
        "api_key":"blt29ec365eaa0c8d67",
        "master_locale":"en-us",
        "is_asset_download_public":true,
        "owner_uid":"blta7eaf6883dd73a0b",
        "user_uids":[
          "blta7eaf6883dd73a0b",
          "blt1fd0057b90905592"
        ],
        "settings":{
          "version":"2019-04-30",
          "rte_version":3,
          "blockAuthQueryParams":true,
          "allowedCDNTokens":[
            "access_token"
          ],
          "branches":true,
          "webhook_enabled":true,
          "stack_variables":{
            
          },
          "live_preview":{
            
          },
          "discrete_variables":{
            "cms":true,
            "_version":3,
            "secret_key":"6ab0a6df0447b33386648f1d889d27b253ffe7fc"
          },
          "language_fallback":false,
          "workflow_stages":true,
          "publishing_rules":true
        },
        "master_key":"bltb0dad0b0b7033f78"
      },
      "SYS_ACL":{
        
      }
    },
    {
      "name":"Admin",
      "description":"Admin can perform all actions and manage all settings of the stack, except the ability to delete or transfer ownership of the stack.",
      "uid":"bltc5412bb640c8cce1",
      "created_by":"blta7eaf6883dd73a0b",
      "updated_by":"blta7eaf6883dd73a0b",
      "created_at":"2021-09-16T11:54:15.300Z",
      "updated_at":"2021-09-16T11:54:15.300Z",
      "users":[
        "blt1fd0057b90905592"
      ],
      "owner":"john.doe@contentstack.com",
      "stack":{
        "created_at":"2021-09-16T11:54:14.172Z",
        "updated_at":"2021-09-16T12:29:24.179Z",
        "uid":"blt48b5e7f7b2f4b962",
        "name":"My Site",
        "description":"My site related content.",
        "org_uid":"blteac54a27425b3b0e",
        "api_key":"blt29ec365eaa0c8d67",
        "master_locale":"en-us",
        "is_asset_download_public":true,
        "owner_uid":"blta7eaf6883dd73a0b",
        "user_uids":[
          "blta7eaf6883dd73a0b",
          "blt1fd0057b90905592"
        ],
        "settings":{
          "version":"2019-04-30",
          "rte_version":3,
          "blockAuthQueryParams":true,
          "allowedCDNTokens":[
            "access_token"
          ],
          "branches":true,
          "webhook_enabled":true,
          "stack_variables":{
            
          },
          "live_preview":{
            
          },
          "discrete_variables":{
            "cms":true,
            "_version":3,
            "secret_key":"6ab0a6df0447b33386648f1d889d27b253ffe7fc"
          },
          "language_fallback":false,
          "workflow_stages":true,
          "publishing_rules":true
        },
        "master_key":"bltb0dad0b0b7033f78"
      },
      "SYS_ACL":{
        
      }
    }
  ]
}
```


#### Get a single role

**GET** `/roles/{role_uid}?include_permissions={include_permissions}&include_rules={include_rules}`

The Get a single role request returns comprehensive information on a specific role.  
To configure the permissions for your application via OAuth, please include the cm.roles.management:read scope.

##### URL Parameters

- **role_uid** (required)
  Enter the unique ID of the role of which you want to retrieve the details.
  Default: `blt0123123b123733`

##### Query Parameters

- **include_permissions** (optional)
  Set this parameter to 'true' to include the details of the permissions assigned to a particular role.
  Default: `true`
- **include_rules** (optional)
  Set this to ‘true’ to include the details of the rules assigned to a particular role.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
  "role":{
    "name":"Developer",
    "description":"Developer can perform all Content Manager's actions, view audit logs, create roles, invite users, manage content types, languages, and environments.",
    "uid":"bltf177eec8730751a3",
    "created_by":"blta7eaf6883dd73a0b",
    "updated_by":"blta7eaf6883dd73a0b",
    "created_at":"2021-09-16T11:54:15.300Z",
    "updated_at":"2021-09-16T12:29:24.192Z",
    "roles":[
      
    ],
    "users":[
      "blt1fd0057b90905592"
    ],
    "owner":"john.doe@contentstack.com",
    "stack":{
      "created_at":"2021-09-16T11:54:14.172Z",
      "updated_at":"2021-09-16T12:29:24.179Z",
      "uid":"blt48b5e7f7b2f4b962",
      "name":"My Site",
      "description":"My site related content.",
      "org_uid":"blteac54a27425b3b0e",
      "api_key":"blt29ec365eaa0c8d67",
      "master_locale":"en-us",
      "is_asset_download_public":true,
      "owner_uid":"blta7eaf6883dd73a0b",
      "user_uids":[
        "blta7eaf6883dd73a0b",
        "blt1fd0057b90905592"
      ],
      "settings":{
        "version":"2019-04-30",
        "rte_version":3,
        "blockAuthQueryParams":true,
        "allowedCDNTokens":[
          "access_token"
        ],
        "branches":true,
        "webhook_enabled":true,
        "stack_variables":{
          
        },
        "live_preview":{
          
        },
        "discrete_variables":{
          "cms":true,
          "_version":3,
          "secret_key":"6ab0a6df0447b33386648f1d889d27b253ffe7fc"
        },
        "language_fallback":false,
        "workflow_stages":true,
        "publishing_rules":true
      },
      "master_key":"bltb0dad0b0b7033f78"
    },
    "SYS_ACL":{
      
    }
  }
}
```


#### Create a role

**POST** `/roles`

The Create a role request creates a new role in a stack.

In the 'Body' section, mention the role name, description, users, additional roles, rules (includes the actions that can be performed on entries, fields, and/or assets), and permissions (which include the details of the content types, taxonomies, environments, and languages that are accessible).
To configure the permissions for your application via OAuth, please include the cm.roles.management:write scope.

**Note**: You can also restrict access to the [master language entry](../../cs-docs/developers/multilingual-content/set-the-master-language.md) while defining permissions for a new role. Refer to our [Manage Language Permissions](../../cs-docs/developers/multilingual-content/manage-language-permissions.md) documentation for more details.

To add customized exceptions for all or specific languages, add an additional locale module in the request body. Under this module, pass the following parameters:

- locales: Specify the unique IDs of the languages for which you want to add exception rules
- sub_acl: Add this under acl. Here, specify the permissions you want to restrict for the languages specified in the above parameter, e.g., "create":true
- restrict: true: Set this parameter to true to enable exception rules for the specified languages

Here’s what your request body should look like:

```
{
    "module":"locale",
    "locales":[
        "blt**************e8"
    ],
    "acl":{
        "read":true,
        "sub_acl":{
            "read":false,
            "create":false,
            "update":true,
            "delete":false
        }
    },
    "restrict":true
}
```

**Note**: [Language-related exceptions](../../cs-docs/developers/invite-users-and-assign-roles/create-a-role.md#exceptions-on-languages) can be added only for custom roles and the developer and content manager system roles.

When creating a user role, you need to specify the branch and alias scope through the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy"
    ],
    "acl":{
        "read":true
    }
}
```

To add taxonomy specific permissions, follow the following schema in your request body:

```
{
      "module": "taxonomy",
      "taxonomies": ["regions"],
      "terms": ["regions.north_america"],
      "content_types": [
        {
          "uid": "$all",
          "acl": {
            "read": true,
            "sub_acl": {
              "read": true,
              "create": true,
              "update": true,
              "delete": true,
              "publish": true
            }
          }
        }
      ],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    }
```

##### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **api_key** (required)
  Enter the API key of your stack
  Default: `your_api_key`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "role":{
  "name": "Regional Custom Role",
  "description": "",
  "rules": [
    {
      "module": "branch",
      "branches": [
        "main"
      ],
      "acl": {
        "read": true
      }
    },
    {
      "module": "environment",
      "environments": ["blt**************ad", "blt**************b4"],
      "acl": {
        "read": true
      }
    },
    {
      "module": "locale",
      "locales": ["blt**************46", "blt**************88"],
      "acl": {
        "read": true
      }
    },
    {
      "module": "taxonomy",
      "taxonomies": ["regions"],
      "terms": ["regions.north_america"],
      "content_types": [
        {
          "uid": "$all",
          "acl": {
            "read": true,
            "sub_acl": {
              "read": true,
              "create": true,
              "update": true,
              "delete": true,
              "publish": true
            }
          }
        }
      ],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    },
    {
      "module": "content_type",
      "content_types": ["marketing_blogs"],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    }
  ],
  "users": [],
  "uid": "blt**************09",
  "org_uid": "blt**************c6",
  "api_key": "blt**************af"
}
}
```

##### Sample Response

```json
{
    "notice": "The role created successfully.",
    "role": {
        "name": "Regional Custom Role",
        "description": "",
        "rules": [
            {
                "module": "branch",
                "branches": [
                    "main"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "environment",
                "environments": [
                    "blt**************ad",
                    "blt**************b4"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "locale",
                "locales": [
                    "blt**************46",
                    "blt**************88"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "taxonomy",
                "taxonomies": [
                    "regions"
                ],
                "terms": [
                    "regions.north_america"
                ],
                "content_types": [
                    {
                        "uid": "$all",
                        "acl": {
                            "read": true,
                            "sub_acl": {
                                "read": true,
                                "create": true,
                                "update": true,
                                "delete": true,
                                "publish": true
                            }
                        }
                    }
                ],
                "acl": {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "delete": true,
                        "publish": true
                    }
                }
            },
            {
                "module": "content_type",
                "content_types": [
                    "marketing_blogs"
                ],
                "acl": {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "delete": true,
                        "publish": true
                    }
                }
            }
        ],
        "users": [],
        "uid": "blt**************c3",
        "org_uid": "blt**************c6",
        "api_key": "blt**************af",
        "created_by": "blt**************96",
        "updated_by": "blt**************96",
        "created_at": "2024-05-29T09:49:16.952Z",
        "updated_at": "2024-05-29T09:49:16.952Z"
    }
}
```


#### Update role

**PUT** `/roles/{role_uid}`

The Update role request lets you modify an existing role of your stack. However, the pre-existing system roles cannot be modified.

In the 'Body' section, include the updated details of the role which include name, description, users, additional roles, rules (includes the actions that can be performed on entries, fields, and/or assets), and permissions (which include the details of the content types, taxonomies, environments, and languages that are accessible).
To configure the permissions for your application via OAuth, please include the cm.roles.management:write scope.

**Note**: You can also restrict access to the [master language](../../cs-docs/developers/multilingual-content/set-the-master-language.md) entry while defining permissions for a new role.

To add customized exceptions for all or specific languages, add an additional locale module in the request body. Under this module, pass the following parameters:

- locales: Specify the unique IDs of the languages for which you want to add exception rules
- sub_acl: Add this under acl. Here, specify the permissions you want to restrict for the languages specified in the above parameter, e.g., "create":true
- restrict: true: Set this parameter to true to enable exception rules for the specified languages

Here’s what your request body should look like:

```
{
    "module":"locale",
    "locales":[
        "blt008a444c98ab47e8"
    ],
    "acl":{
        "read":true,
        "sub_acl":{
            "read":false,
            "create":false,
            "update":true,
            "delete":false
        }
    },
    "restrict":true
}
```

**Note**: [Language-related exceptions](../../cs-docs/developers/invite-users-and-assign-roles/create-a-role.md#exceptions-on-languages) can be added only for custom roles and the developer and content manager system roles.

When updating a user role, you need to specify the branch and alias scope through the following schema in the request body:

```
{
    "module":"branch",
    "branches":[
        "main"
    ],
    "acl":{
        "read":true
    }
},
{
    "module":"branch_alias",
    "branch_aliases":[
        "deploy"
    ],
    "acl":{
        "read":true
    }
}
```

To add taxonomy specific permissions, follow the following schema in your request body:

```
{
      "module": "taxonomy",
      "taxonomies": ["regions"],
      "terms": ["regions.north_america", "regions.south_america"],
      "content_types": [
        {
          "uid": "$all",
          "acl": {
            "read": true,
            "sub_acl": {
              "read": true,
              "create": true,
              "update": true,
              "delete": true,
              "publish": true
            }
          }
        }
      ],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    }
```

##### URL Parameters

- **role_uid** (required)
  Enter the unique ID of the role of which you want to update the details.
  Default: `your_role_uid`

##### Headers

- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **api_key** (required)
  Enter the API key of your stack
  Default: `your_api_key`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "role":{
  "name": "Updated Regional Custom Role",
  "description": "",
  "rules": [
    {
      "module": "branch",
      "branches": [
        "main"
      ],
      "acl": {
        "read": true
      }
    },
    {
      "module": "environment",
      "environments": ["blt**************ad", "blt**************b4"],
      "acl": {
        "read": true
      }
    },
    {
      "module": "locale",
      "locales": ["blt**************46", "blt**************88"],
      "acl": {
        "read": true
      }
    },
    {
      "module": "taxonomy",
      "taxonomies": ["regions"],
      "terms": ["regions.north_america", "regions.south_america"],
      "content_types": [
        {
          "uid": "$all",
          "acl": {
            "read": true,
            "sub_acl": {
              "read": true,
              "create": true,
              "update": true,
              "delete": true,
              "publish": true
            }
          }
        }
      ],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    },
    {
      "module": "content_type",
      "content_types": ["marketing_blogs"],
      "acl": {
        "read": true,
        "sub_acl": {
          "read": true,
          "create": true,
          "update": true,
          "delete": true,
          "publish": true
        }
      }
    }
  ],
  "users": [],
  "uid": "blt**************09",
  "org_uid": "blt**************c6",
  "api_key": "blt**************af"
}
}
```

##### Sample Response

```json
{
    "notice": "The role updated successfully.",
    "role": {
        "name": "Updated Regional Custom Role",
        "description": "",
        "rules": [
            {
                "module": "branch",
                "branches": [
                    "main"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "environment",
                "environments": [
                    "blt**************ad",
                    "blt**************b4"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "locale",
                "locales": [
                    "blt**************46",
                    "blt**************88"
                ],
                "acl": {
                    "read": true
                }
            },
            {
                "module": "taxonomy",
                "taxonomies": [
                    "regions"
                ],
                "terms": [
                    "regions.north_america",
                    "regions.south_america"
                ],
                "content_types": [
                    {
                        "uid": "$all",
                        "acl": {
                            "read": true,
                            "sub_acl": {
                                "read": true,
                                "create": true,
                                "update": true,
                                "delete": true,
                                "publish": true
                            }
                        }
                    }
                ],
                "acl": {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "delete": true,
                        "publish": true
                    }
                }
            },
            {
                "module": "content_type",
                "content_types": [
                    "marketing_blogs"
                ],
                "acl": {
                    "read": true,
                    "sub_acl": {
                        "read": true,
                        "create": true,
                        "update": true,
                        "delete": true,
                        "publish": true
                    }
                }
            }
        ],
        "users": [],
        "uid": "blt**************c3",
        "org_uid": "blt**************c6",
        "api_key": "blt**************af",
        "created_by": "blt**************96",
        "updated_by": "blt**************96",
        "created_at": "2024-05-29T09:49:16.952Z",
        "updated_at": "2024-05-29T09:51:40.141Z"
    }
}
```


#### Delete role

**DELETE** `/roles/{role_uid}`

The Delete role call deletes an existing role from your stack.  
To configure the permissions for your application via OAuth, please include the cm.roles.management:write scope.

##### URL Parameters

- **role_uid** (required)
  Enter the unique ID of the role that you want to delete.
  Default: `bltc7aa14ea1959b252`

##### Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
  "notice": "The role deleted successfully."
}
```


### Webhooks

A webhook is a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account. Webhooks allow you to specify a URL to which you would like Contentstack to post data when an event happens. Read more about [Webhooks](/docs/developers/set-up-webhooks).

**Note**: If any key name in the response data sent to a notification URL begins with a dollar sign ($), it will be prefixed with the acronym "cs" as a wildcard. For example, the key named "$success" would be replaced with "cs$success." For more information, refer to our [API Change Log](/docs/developers/apis/api-change-log#january-21-2022) documentation.


#### Get all Webhooks

#### Get all webhooks

**GET** `/webhooks`

The Get all Webhooks request returns comprehensive information on all the available webhooks in the specified stack.

**Tip:** Execute this call when you wish to retrieve the UID of a webhook.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.webhooks.management:read scope.

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Response

```json
{
    "webhooks": [
        {
            "name": "Basic Test",
            "destinations": [
                {
                    "target_url": "http://example.com",
                    "http_basic_auth": "username",
                    "http_basic_password": "********",
                    "authentication_type": "Basic",
                    "custom_header": [
                        {
                            "header_name": "",
                            "value": ""
                        }
                    ]
                }
            ],
            "channels": [
                "assets.create"
            ],
            "retry_policy": "manual",
            "notifiers": [
                "john.doe@gmail.com"
            ],
            "disabled": false,
            "applikation_id": "blt**************b7",
            "org_uid": "blt**************d5",
            "updated_by": "blt**************de",
            "created_by": "blt**************de",
            "app_user_object_uid": "system",
            "concise_payload": true,
            "uid": "cs******2e-b24f-46c0-b087-ba********19",
            "created_at": "2024-07-11T06:09:00.827Z",
            "updated_at": "2024-07-11T06:09:00.827Z",
            "__v": 0
        },
        {
            "name": "Aman Test",
            "destinations": [
                {
                    "target_url": "http://example.com",
                    "access_token_url": "your_access_token_url",
                    "client_id": "your_client_id",
                    "client_secret": "your_client_secret",
                    "request_query_parameters": "=",
                    "authentication_type": "OAuth2",
                    "custom_header": [
                        {
                            "header_name": "",
                            "value": ""
                        }
                    ]
                }
            ],
            "channels": [
                "content_types.entries.create"
            ],
            "retry_policy": "manual",
            "notifiers": [],
            "disabled": false,
            "applikation_id": "blt**************b7",
            "org_uid": "blt**************d5",
            "updated_by": "blt**************a8",
            "created_by": "blt**************a8",
            "app_user_object_uid": "system",
            "concise_payload": false,
            "uid": "cs******2b-ed6b-4eaa-9ca7-b9********61",
            "created_at": "2024-07-03T12:11:34.794Z",
            "updated_at": "2024-07-03T12:11:34.794Z",
            "__v": 0
        }
    ],
    "destination": {}
}
```



#### Get Single Webhook

#### Get webhook

**GET** `/webhooks/{webhook_uid}`

The Get webhook request returns comprehensive information on a specific webhook.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.webhooks.management:read scope.

##### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook of which you want to retrieve the details. Execute the 'Get all webhooks' call to retrieve the UID of a webhook.
  Default: `cscb27cf54-3abd-46b4-970e-1f11a11e2905`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "webhook": {
        "name": "Webhook Test",
        "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "********",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
        "channels": [
            "assets.create",
            "content_types.entries.create"
        ],
        "retry_policy": "manual",
        "branches": [
            "main"
        ],
        "notifiers": [
            "john.doe@gmail.com"
        ],
        "disabled": false,
        "org_uid": "blt**************d5",
        "updated_by": "blt**************de",
        "created_by": "blt**************f1",
        "concise_payload": true,
        "uid": "cs******44-9e58-4153-aa40-b4********df",
        "created_at": "2024-07-16T10:43:06.658Z",
        "updated_at": "2024-07-24T12:42:04.061Z",
        "unhealthy": {
            "state": false
        }
    }
}
```



#### Create a Webhook

#### Create a webhook

**POST** `/webhooks`

The Create a webhook request allows you to create a new webhook in a specific stack.

In the “Body” section, you need to enter the name of the webhook; the destination details i.e., target URLs, authentication details, and custom headers; and the channels; and set the disabled and concise_payload parameters as per requirement.

The disabled parameter, allows you to enable or disable the webhook. You can set its value to either false to enable the webhook and true to disable the webhook.

The concise_payload parameter allows you to send a concise JSON payload to the target URL when a specific event occurs. To send a comprehensive JSON payload, you can set its value to false. However, to send a concise payload, set the value of the concise_payload parameter to true.

**Note**: Refer to our [Webhook Events](../../cs-docs/developers/set-up-webhooks/webhook-events.md) document to get a list of conditions that can be included in your request body. You can also set trigger conditions based on actions performed on [entry comments](../../cs-docs/developers/set-up-webhooks/webhook-events.md#entry-comments) and [discussions](../../cs-docs/developers/set-up-webhooks/webhook-events.md#entry-discussions).

The authentication_type parameter specifies the type of authentication to be used for the webhook, such as **Basic Auth**, **OAuth2.0 Client Credential**, **Bearer Token**, and **None**. Based on the selected authentication type, you will need to provide the relevant authentication details in the request body.

To add OAuth 2.0 Client Credential authentication, use the following schema in the request body:

```
"destinations": [
            {
                "target_url": "http://example.com",
                "access_token_url": "your_access_token_url",
                "client_id": "your_client_id",
                "client_secret": "your_client_secret",
                "request_query_parameters": "=",
                "authentication_type": "OAuth2",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
```

**Note**: To get the access_token_url, client_id, client_secret, and request_query_parameters refer to your OAuth application settings. The request query parameters will be appended to the access token URL.

To add Bearer Token authentication, use the following schema in the request body:

```
"destinations": [
            {
                "target_url": "http://example.com",
                "bearer_token": "your_bearer_token",
                "authentication_type": "Bearer",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
```

To configure your webhook without any authentication, use the following schema in the request body:

```
"destinations": [
            {
                "target_url": "http://example.com",
                "authentication_type": "None",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
```

When creating a webhook, you can specify the branch scope through the following schema in the request body:

```
"branches":[
    "main"
]
```

**Note**: To configure the permissions for applications that are using Contentstack OAuth, add the cm.webhooks.management:write user-related permission scope under the OAuth settings of your app in Developer Hub. For more details, refer to the [Contentstack OAuth documentation](../../cs-docs/developers/developer-hub/contentstack-oauth.md).

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "webhook":{
    "name":"Basic Test",
    "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "password",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
    "notifiers": "john.doe@gmail.com",
    "channels":[
      "assets.create"
    ],
    "branches":[
      "main"
    ],
    "retry_policy":"automatic",
    "disabled":false,
    "concise_payload":true
  }
}
```

##### Sample Response

```json
{
    "notice": "The webhook was created successfully",
    "webhook": {
        "name": "Basic Test",
        "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "********",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
        "channels": [
            "assets.create"
        ],
        "retry_policy": "automatic",
        "branches": [
            "main"
        ],
        "notifiers": [
            "john.doe@gmail.com"
        ],
        "disabled": false,
        "updated_by": "blt**************de",
        "created_by": "blt**************de",
        "concise_payload": true,
        "uid": "cs******2e-b**f-4**0-b**7-ba********19",
        "created_at": "2024-07-11T06:09:00.827Z",
        "updated_at": "2024-07-11T06:09:00.827Z"
    }
}
```



#### Update Webhook

#### Update webhook

**PUT** `/webhooks/{webhook_uid}`

The Update webhook request allows you to update the details of an existing webhook in the stack.

In the “Body” section, you need to enter new details such as the name of the webhook; the destination details i.e., target URLs, authentication details, and custom headers; and the channels; or reset the disabled or concise_payload parameters as per requirement.

The disabled parameter allows you to enable or disable the webhook. You can set its value to either false to enable the webhook and true to disable the webhook.

The concise_payload parameter allows you to send a concise JSON payload to the target URL when a specific event occurs. To send a comprehensive JSON payload, you can set its value to false. However, to send a concise payload, set the value of the concise_payload parameter to true.

**Note**: Refer to our [Webhook Events](../../cs-docs/developers/set-up-webhooks/webhook-events.md) document to get a list of conditions that can be included in your request body. You can also set trigger conditions based on actions performed on [entry comments](../../cs-docs/developers/set-up-webhooks/webhook-events.md#entry-comments) and [discussions](../../cs-docs/developers/set-up-webhooks/webhook-events.md#entry-discussions).

The authentication_type parameter specifies the type of authentication to be used for the webhook, such as **Basic Auth**, **OAuth2.0 Client Credential**, **Bearer Token**, and **None**. Based on the selected authentication type, you will need to provide the relevant authentication details in the request body.

To update your OAuth 2.0 Client Credential authentication, use the following schema in the request body:

```
"destinations": [
            {
                "target_url": "http://example.com",
                "access_token_url": "your_access_token_url",
                "client_id": "your_client_id",
                "client_secret": "your_client_secret",
                "request_query_parameters": "=",
                "authentication_type": "OAuth2",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
```

**Note**: To get the access_token_url, client_id, client_secret, and request_query_parameters refer to your OAuth application settings. The request query parameters will be appended to the access token URL.

To update your Bearer Token authentication, use the following schema in the request body:

```
"destinations": [
            {
                "target_url": "http://example.com",
                "bearer_token": "your_bearer_token",
                "authentication_type": "Bearer",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
```

To update your webhook without any authentication, use the following schema in the request body:

```
"destinations": [
            {
                "target_url": "http://example.com",
                "authentication_type": "None",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
```

When updating a webhook, you can specify the branch scope through the following schema in the request body:

```
"branches":[
    "main"
]
```

**Note**: To configure the permissions for applications that are using Contentstack OAuth, add the cm.webhooks.management:write user-related permission scope under the OAuth settings of your app in Developer Hub. For more details, refer to the [Contentstack OAuth documentation](../../cs-docs/developers/developer-hub/contentstack-oauth.md).

##### URL Parameters

- **webhook_uid** (required)
  Enter the UID of the webhook that you want to update. Execute the “Get all webhooks” request to retrieve the UID of a webhook.
  Default: `csbe27cf64-3abd-86b4-970e-1f11b14e2705`

##### Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

##### Sample Request

```json
{
  "webhook":{
    "name":"Webhook Update Test",
    "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "password",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
    "notifiers": "john.doe@gmail.com",
    "channels":[
      "assets.create"
    ],
    "branches":[
      "main"
    ],
    "retry_policy":"automatic",
    "disabled":false,
    "concise_payload":true
  }
}
```

##### Sample Response

```json
{
    "notice": "The Webhook was updated successfully",
    "webhook": {
        "name": "Webhook Update Test",
        "destinations": [
            {
                "target_url": "http://example.com",
                "http_basic_auth": "username",
                "http_basic_password": "********",
                "authentication_type": "Basic",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
        "channels": [
            "assets.create"
        ],
        "retry_policy": "automatic",
        "branches": [
            "main"
        ],
        "notifiers": [
            "john.doe@gmail.com"
        ],
        "disabled": false,
        "updated_by": "blt**************de",
        "created_by": "blt**************de",
        "concise_payload": true,
        "uid": "cs******2e-b24f-46c0-b087-ba********19",
        "created_at": "2024-07-11T06:09:00.827Z",
        "updated_at": "2024-07-11T08:10:12.888Z",
        "unhealthy": {
            "state": false
        }
    }
}
```



#### Delete Webhook

#### Delete webhook

**DELETE** `/webhooks/{webhook_uid}`

The Delete webhook call deletes an existing webhook from a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.webhooks.management:write scope.

##### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook that you want to delete. Execute the 'Get all webhooks' call to retrieve the UID of a webhook.
  Default: `bltc7aa14ea1959b252`

##### Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "notice": "The Webhook was deleted successfully"
}
```



#### Export Webhook

#### Export a Webhook

**GET** `/webhooks/{webhook_uid}/export`

The Export a Webhook request exports an existing webhook. The exported webhook data is saved in a downloadable JSON file. The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.  
To configure the permissions for your application via OAuth, please include the cm.webhooks:export scope.

##### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook that you want to export. **Note:** In case you do not know the UID of the webhook, use the **Get all webhooks** request to get all the webhooks (along with the UIDs).
  Default: `cs14804cde-9be3-48c3-9008-33a7884bacb5`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "multipart/form-data" to pass form-data params.
  Default: `multipart/form-data`

##### Sample Response

```json
{
    "name": "new",
    "destinations": [
        {
            "target_url": "https://www.google.com",
            "http_basic_auth": "",
            "http_basic_password": "",
            "custom_header": [
                {
                    "header_name": "",
                    "value": ""
                }
            ]
        }
    ],
    "channels": [
        "content_types.test.entries.update"
    ],
    "retry_policy": "manual",
    "branches": [
        "main"
    ],
    "notifiers": [],
    "disabled": false,
    "org_uid": "blt**************d5",
    "updated_by": "blt**************f1",
    "created_by": "blt**************f1",
    "concise_payload": false,
    "uid": "cs******01-17d3-4f99-af43-4a********96",
    "created_at": "2024-07-16T06:28:37.170Z",
    "updated_at": "2024-07-16T06:28:37.170Z"
}
```



#### Import Webhook

The 'Import Webhook' section consists of the following two requests that will help you to import new Webhooks or update existing ones by uploading JSON files.

**Note:** You can try the call manually in any REST API client, such as Postman, by passing a 'Body' parameter named webhook under form-data. Select the input type as 'File' and select the JSON file of the webhook that you want to import.

#### Import a Webhook

**POST** `/webhooks/import`

The Import Webhook request imports a webhook. To import a webhook, you need to upload a JSON file with the webhook data.

To configure the permissions for your application via OAuth, please include the cm.webhooks:import scope.

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "multipart/form-data" to pass form-data params.
  Default: `multipart/form-data`

##### Sample Response

```json
{
    "notice": "webhook was imported successfully",
    "webhook": {
        "name": "new",
        "destinations": [
            {
                "target_url": "https://www.google.com",
                "http_basic_auth": "",
                "http_basic_password": "",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
        "channels": [
            "content_types.test.entries.update"
        ],
        "retry_policy": "manual",
        "branches": [
            "main"
        ],
        "notifiers": [],
        "retry": {
            "auto": true
        },
        "disabled": false,
        "updated_by": "blt**************de",
        "created_by": "blt**************de",
        "concise_payload": false,
        "uid": "cs******66-47ba-4300-948e-d4********98",
        "created_at": "2024-07-25T07:32:43.531Z",
        "updated_at": "2024-07-25T07:32:43.532Z"
    }
}
```


#### Import an Existing Webhook

**POST** `/webhooks/{webhook_uid}/import`

The Import an Existing Webhook request will allow you to update the details of an existing webhook.  
To configure the permissions for your application via OAuth, please include the cm.webhooks:import scope.

##### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook that you want to update.
  Default: `csbd27df54-3aad-46b4-970e-1f11a13e2708`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "multipart/form-data" to pass a form-data params.
  Default: `multipart/form-data`

##### Sample Response

```json
{
    "notice": "webhook was imported successfully",
    "webhook": {
        "name": "new",
        "destinations": [
            {
                "target_url": "https://www.google.com",
                "http_basic_auth": "",
                "http_basic_password": "",
                "custom_header": [
                    {
                        "header_name": "",
                        "value": ""
                    }
                ]
            }
        ],
        "channels": [
            "content_types.test.entries.update"
        ],
        "retry_policy": "manual",
        "branches": [
            "main"
        ],
        "notifiers": [],
        "retry": {
            "auto": true
        },
        "disabled": false,
        "updated_by": "blt**************de",
        "created_by": "blt**************f1",
        "concise_payload": false,
        "uid": "cs******66-47ba-4300-948e-d4********98",
        "created_at": "2024-07-25T07:32:43.531Z",
        "updated_at": "2024-07-25T07:51:48.030Z",
        "unhealthy": {
            "state": false
        }
    }
}
```



#### Get Webhook Executions

#### Get executions of a webhook

**GET** `/webhooks/{webhook_uid}/executions?from=2020-12-14T08:00:00.000Z&to=2020-12-22T07:59:59.999Z&query={ "status": { "$gte": "200", "$lte": "399" } }`

The Get executions of a webhook request allows you to fetch the execution details of a specific webhook, which includes the **execution UID**. These details are instrumental in retrieving webhook logs and retrying a failed webhook.  
To configure the permissions for your application via OAuth, please include the cm.webhook:read scope.

**Note**: You can retrieve webhook log information only for **30 days** prior to the current day.

Each execution of a webhook is assigned a unique ID that allows you to gather information, such as request-response body, retry attempts, and so on, pertaining to a specific execution of the webhook.

To filter the webhook execution details based on a specific date range, you must pass from and to as query parameters. For both of these parameters, provide a date in ISO format as the value. For instance, to set the start date in the from parameter to December 8, 2017, you can pass the date in ISO format as shown below:  
  
from=2017-12-08T00:00:00.000Z

To filter the webhook execution details based on whether the webhook successfully ran or failed to execute, pass the query parameter under the URL Parameters section, and provide a query in JSON format as its value. Within the query, you can use the status key to filter the response as per your desired execution status.

The following table shows values you can use for the query parameter:

| Webhook Execution Status | Query JSON Value |
| --- | --- |
| Success | ```
{
  "status": {
    "$gte": "200",
    "$lte": "399"
  }
}
``` |
| Failure | ```
{
  "status": {
    "$gte": “400",
    "$lte": “599"
  }
}
``` |

This API request will return a maximum of **100** records while fetching the execution details for a specific webhook. Previously, there was no limit on the number of records returned. You can use the "[skip](./content-delivery-api.md#skip)" parameter to fetch older records. To limit the number of records returned, you can use the “[limit](./content-delivery-api.md#limit)” parameter.

##### URL Parameters

- **webhook_uid** (required)
  Enter the unique ID of the webhook of which you want to retrieve the details. Execute the 'Get all webhooks' call to retrieve the uid of a webhook.
  Default: `cs2642bec9-c336-4da1-8aad-fded56c7d50e`

##### Query Parameters

- **from** (optional)
  Enter the start date for your date range filter in ISO format.
  Default: `2016-10-07T12:34:36.000Z`
- **to** (optional)
  Enter the end date for your date range filter in ISO format.
  Default: `2020-12-22T07:59:59.999Z`
- **query** (optional)
  Enter the actual query that will be executed to retrieve failed or successful webhook executions. This query should be in JSON format.
  Default: `{  "status": {     "$gte": "200",     "$lte": "399"   } }`
- **only_events** (optional)
  Set to true to receive events without "request_details," and set to false to include "request_details" in the response.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter the API key of your stack
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "webhooks": [
        {
            "uid": "cs******e5-3c3f-41a2-b0ac-5b********25",
            "channel": [
                "content_types.entries.update",
                "content_types.ref.entries.update",
                "content_types.ref.entries.bltd97eb3484fc00c48.update"
            ],
            "created_at": "2024-07-25T08:48:56.919Z",
            "event_data": {
                "module": "entry",
                "api_key": "blt**************b7",
                "data": {
                    "entry": {
                        "title": "test 19",
                        "file": null,
                        "tags": [
                            "d"
                        ],
                        "locale": "en-us",
                        "uid": "blt**************48",
                        "created_by": "blt**************f1",
                        "updated_by": "blt**************de",
                        "created_at": "2024-05-28T12:57:24.162Z",
                        "updated_at": "2024-07-25T08:48:46.460Z",
                        "ACL": {},
                        "_version": 44,
                        "_in_progress": false
                    },
                    "content_type": {
                        "created_at": "2024-05-15T10:12:26.284Z",
                        "created_by": "blt**************a2",
                        "updated_at": "2024-05-15T10:12:36.656Z",
                        "updated_by": "blt**************a2",
                        "title": "Ref",
                        "uid": "ref",
                        "description": "",
                        "schema": [
                            {
                                "data_type": "text",
                                "display_name": "Title",
                                "field_metadata": {
                                    "_default": true,
                                    "version": 3
                                },
                                "mandatory": true,
                                "uid": "title",
                                "unique": true,
                                "multiple": false,
                                "non_localizable": false,
                                "indexed": false,
                                "inbuilt_model": false
                            },
                            {
                                "data_type": "file",
                                "display_name": "File",
                                "uid": "file",
                                "extensions": [],
                                "field_metadata": {
                                    "description": "",
                                    "rich_text_type": "standard"
                                },
                                "mandatory": false,
                                "multiple": false,
                                "non_localizable": false,
                                "unique": false,
                                "indexed": false,
                                "inbuilt_model": false
                            }
                        ],
                        "options": {
                            "is_page": false,
                            "singleton": false,
                            "sub_title": [],
                            "title": "title"
                        }
                    },
                    "branch": {
                        "uid": "main",
                        "source": "",
                        "alias": []
                    }
                },
                "event": "update"
            },
            "event_headers": {
                "Content-Type": "application/json",
                "User-Agent": "Contentstack",
                "X-Contentstack-Signature": "75e9068f3ca4e2ef7cdbfbb2480822f5f6473ac5",
                "Authorization": null,
                "X-Contentstack-Request-Signature": "v1=n9uHP1hmYcBz82h5imH3+EKTzfyl7tTxBnp6vn1giT4dT/FMhOLPBGkQ4PMu9k9lgcSkBfLHjmTWDUgBZxK/STyFHJKjgYjUEvLflRV1gUlzYmqFXbU+lmYLzsy/DnVwaH70fAcvXa6sbobvzugbAAoP5BVeGXI0Ldd9OPbFFIy8/j/oBVVp7nNMDZIpRxIVAHYX0lmUmFdlsAmzKhNNx0zyPmwS+jooeYYNL7bDSRu1ORlSNC2iNwAD/SSe3N8gYjUaws1d04yr7qAykszdJatxDs0S4dyWWz+XBNjXska9aGzxgt0CidecRlnL6VSaOvCPDCXj+P3L7u0FTr/n0Q=="
            },
            "org_uid": "blt**************d5",
            "request_details": [
                {
                    "_id": "cs4740e44f-24ab-4d15-9d6e-614bceceb58d",
                    "retry_number": 0,
                    "request": {
                        "method": "POST",
                        "followAllRedirects": true,
                        "uri": "https://www.googe.com",
                        "body": {
                            "triggered_at": "2024-07-25T08:48:46.861Z",
                            "module": "entry",
                            "api_key": "blt**************b7",
                            "data": {
                                "entry": {
                                    "title": "test 19",
                                    "file": null,
                                    "tags": [
                                        "d"
                                    ],
                                    "locale": "en-us",
                                    "uid": "blt**************48",
                                    "created_by": "blt**************f1",
                                    "updated_by": "blt**************de",
                                    "created_at": "2024-05-28T12:57:24.162Z",
                                    "updated_at": "2024-07-25T08:48:46.460Z",
                                    "ACL": {},
                                    "_version": 44,
                                    "_in_progress": false
                                },
                                "content_type": {
                                    "created_at": "2024-05-15T10:12:26.284Z",
                                    "created_by": "blt**************a2",
                                    "updated_at": "2024-05-15T10:12:36.656Z",
                                    "updated_by": "blt**************a2",
                                    "title": "Ref",
                                    "uid": "ref",
                                    "description": "",
                                    "schema": [
                                        {
                                            "data_type": "text",
                                            "display_name": "Title",
                                            "field_metadata": {
                                                "_default": true,
                                                "version": 3
                                            },
                                            "mandatory": true,
                                            "uid": "title",
                                            "unique": true,
                                            "multiple": false,
                                            "non_localizable": false,
                                            "indexed": false,
                                            "inbuilt_model": false
                                        },
                                        {
                                            "data_type": "file",
                                            "display_name": "File",
                                            "uid": "file",
                                            "extensions": [],
                                            "field_metadata": {
                                                "description": "",
                                                "rich_text_type": "standard"
                                            },
                                            "mandatory": false,
                                            "multiple": false,
                                            "non_localizable": false,
                                            "unique": false,
                                            "indexed": false,
                                            "inbuilt_model": false
                                        }
                                    ],
                                    "options": {
                                        "is_page": false,
                                        "singleton": false,
                                        "sub_title": [],
                                        "title": "title"
                                    }
                                },
                                "branch": {
                                    "uid": "main",
                                    "source": "",
                                    "alias": []
                                }
                            },
                            "event": "update"
                        },
                        "headers": {
                            "Content-Type": "application/json",
                            "User-Agent": "Contentstack",
                            "X-Contentstack-Signature": "75e9068f3ca4e2ef7cdbfbb2480822f5f6473ac5",
                            "Authorization": null,
                            "X-Contentstack-Request-Signature": "v1=n9uHP1hmYcBz82h5imH3+EKTzfyl7tTxBnp6vn1giT4dT/FMhOLPBGkQ4PMu9k9lgcSkBfLHjmTWDUgBZxK/STyFHJKjgYjUEvLflRV1gUlzYmqFXbU+lmYLzsy/DnVwaH70fAcvXa6sbobvzugbAAoP5BVeGXI0Ldd9OPbFFIy8/j/oBVVp7nNMDZIpRxIVAHYX0lmUmFdlsAmzKhNNx0zyPmwS+jooeYYNL7bDSRu1ORlSNC2iNwAD/SSe3N8gYjUaws1d04yr7qAykszdJatxDs0S4dyWWz+XBNjXska9aGzxgt0CidecRlnL6VSaOvCPDCXj+P3L7u0FTr/n0Q=="
                        },
                        "json": true,
                        "resolveWithFullResponse": true,
                        "timeout": 30000
                    },
                    "response": {
                        "message": "read ECONNRESET",
                        "statusCode": null,
                        "code": "ECONNRESET",
                        "body": null,
                        "headers": null,
                        "request": {
                            "uri": {
                                "href": "https://www.googe.com"
                            },
                            "method": "POST",
                            "headers": {
                                "Content-Type": "application/json",
                                "User-Agent": "Contentstack",
                                "X-Contentstack-Signature": "75e9068f3ca4e2ef7cdbfbb2480822f5f6473ac5",
                                "Authorization": null,
                                "X-Contentstack-Request-Signature": "v1=n9uHP1hmYcBz82h5imH3+EKTzfyl7tTxBnp6vn1giT4dT/FMhOLPBGkQ4PMu9k9lgcSkBfLHjmTWDUgBZxK/STyFHJKjgYjUEvLflRV1gUlzYmqFXbU+lmYLzsy/DnVwaH70fAcvXa6sbobvzugbAAoP5BVeGXI0Ldd9OPbFFIy8/j/oBVVp7nNMDZIpRxIVAHYX0lmUmFdlsAmzKhNNx0zyPmwS+jooeYYNL7bDSRu1ORlSNC2iNwAD/SSe3N8gYjUaws1d04yr7qAykszdJatxDs0S4dyWWz+XBNjXska9aGzxgt0CidecRlnL6VSaOvCPDCXj+P3L7u0FTr/n0Q=="
                            }
                        }
                    },
                    "created_at": "2024-07-25T08:48:56.919Z"
                },
            ],
            "retry_count": 3,
            "status": null,
            "updated_at": "2024-07-25T08:51:52.788Z",
            "webhooks": [
                "cs402507db-7085-428d-82f4-03005500626c"
            ],
            "projectUid": "blt**************b7",
            "destination": {}
        }
    ]
}
```



#### Webhook Retry

#### Retry a webhook

**POST** `/webhooks/{execution_uid}/retry`

This call makes a manual attempt to execute a webhook after the webhook has finished executing its automatic attempts.

When executing the API call, in the 'URL Parameter' section, enter the execution UID that you receive when you execute the [Get executions of webhooks](#get-webhook-executions) call.

To configure the permissions for your application via OAuth, please include the cm.webhooks.management:write scope.

##### URL Parameters

- **execution_uid** (required)
  Enter the execution unique ID of the webhook that you want to retry. Execute the [Get executions of a webhook](./content-management-api.md#get-executions-of-a-webhook) call to retrieve the UID of a webhook.
  Default: `cs2642bec9-c336-4da1-8aad-fded56c7d50e`

##### Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
  "notice": "Webhook retry scheduled"
}
```



#### Get Execution Log

#### Get latest execution log of a webhook

**GET** `/webhooks/{execution_uid}/logs`

Get latest execution log of a webhook call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle.

When executing the API call, in the 'URL Parameter' section, enter the execution UID that you receive when you execute the call.  
To configure the permissions for your application via OAuth, please include the cm.webhook:read scope.

##### URL Parameters

- **execution_uid** (required)
  Enter the execution unique ID of the webhook of which you want to retrieve the execution log. Execute the [Get executions of a webhook](./content-management-api.md#get-executions-of-a-webhook) call to retrieve the UID of a webhook.
  Default: `cs4eb0cd75-8a6e-416a-b367-07158d698d41`

##### Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

##### Sample Response

```json
{
    "webhook": {
        "uid": "cs******75-8a6e-416a-b367-07********41",
        "channel": [
            "assets.update",
            "assets.bltaa9509abac6e272b.update"
        ],
        "created_at": "2024-07-26T09:24:27.347Z",
        "event_data": {
            "module": "asset",
            "api_key": "blt**************b7",
            "data": {
                "asset": {
                    "uid": "blt**************2b",
                    "created_at": "2024-05-15T09:38:59.976Z",
                    "updated_at": "2024-07-26T09:24:26.783Z",
                    "created_by": "blt**************35",
                    "updated_by": "blt**************de",
                    "content_type": "image/jpeg",
                    "file_size": "251123",
                    "tags": [],
                    "filename": "Wild-West-Warrior_Large.jpeg",
                    "url": "https://app.contentstack.com/v3/assets/bltbf684bd9d22b48b7/bltaa9509abac6e272b/664482b3b80dfd12c8b1ad15/Wild-West-Warrior_Large.jpeg",
                    "ACL": {},
                    "is_dir": false,
                    "parent_uid": "blt**************7e",
                    "_version": 2,
                    "title": "Wild-West-Warrior_Large.jpeg"
                },
                "branch": {
                    "uid": "main",
                    "source": "",
                    "alias": []
                }
            },
            "event": "update"
        },
        "event_headers": {
            "Content-Type": "application/json",
            "User-Agent": "Contentstack",
            "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
            "Authorization": null,
            "X-Contentstack-Request-Signature": "v1=I1Lc/sQbu+tOUSt3Uqnjwi1DhJ9LtG3I3aEaecuRbkb2M3/p8aFwXAw+t1aLYqWkeEfpf4GdIz+e2ImIyIZY8PzwkL54iBn17EhEFM6+B6rK8Pdx6iPD9iV+tv3ZcE9C+JmDQvQQWiC3lAsi9rxmdBF2JqTK4G1Wo3MBI8FQZkyuMy5rfZAzp2sJA60A/8WAxy75pejvH9aiBiF0wKu/UiJ2mhhj64aPe6Luu/BVSzkkUx4TFo3RhOnsbMJREk2Rd2Gbv8nzeHk+umZ05NpuSz82nDTT1KV71XHb1GaZOsIFCYrVOKIBD6LL7hUsfcJfC2DQIvG0NPN/6lCD0774WQ=="
        },
        "org_uid": "blt**************d5",
        "request_details": {
            "_id": "csdded59f4-f5d1-4f5a-9c7b-9a82bce457fb",
            "retry_number": 3,
            "request": {
                "method": "POST",
                "followAllRedirects": true,
                "uri": "https://www.test.com",
                "body": {
                    "triggered_at": "2024-07-26T09:27:03.088Z",
                    "module": "asset",
                    "api_key": "bltbf684bd9d22b48b7",
                    "data": {
                        "asset": {
                            "uid": "blt**************2b",
                            "created_at": "2024-05-15T09:38:59.976Z",
                            "updated_at": "2024-07-26T09:24:26.783Z",
                            "created_by": "blte5ba115d2d3ad735",
                            "updated_by": "bltddd27e9dcd3831de",
                            "content_type": "image/jpeg",
                            "file_size": "251123",
                            "tags": [],
                            "filename": "Wild-West-Warrior_Large.jpeg",
                            "url": "https://app.contentstack.com/v3/assets/bltbf684bd9d22b48b7/bltaa9509abac6e272b/664482b3b80dfd12c8b1ad15/Wild-West-Warrior_Large.jpeg",
                            "ACL": {},
                            "is_dir": false,
                            "parent_uid": "blt**************7e",
                            "_version": 2,
                            "title": "Wild-West-Warrior_Large.jpeg"
                        },
                        "branch": {
                            "uid": "main",
                            "source": "",
                            "alias": []
                        }
                    },
                    "event": "update"
                },
                "headers": {
                    "Content-Type": "application/json",
                    "User-Agent": "Contentstack",
                    "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
                    "X-Contentstack-Request-Signature": "v1=oddk8EBQR7385dg5LTN7brHk7WERnP17Ze/Ed6/yFWkam6jYPPg7+30ZoOtAMRvws8Ans/sHSBp+3wF+powzEHieBIWF070McSeSok3SdGhDYcoSC1ouAHWy60eIo/FVqHJGyChkWFhHpaR4d7Ov2sE1WiSI3lmRkYxgHvJaxdMwGGlv4f2+lwl14Ot0qooSF6gBEZDtCW1kKGN9GC39EMrj/p9vs24Qgv2Cfyys+mzHJMSXPFEfA3Hv3Cbc53tnI9AUh0NLz4ONtxPkBcVcQC23tH3vbFPNOPhPZk/soq4acYl5JzaYbWjBhCHN8tV6WXWao+8m8NML5YBDqbYcTA==",
                    "Authorization": null
                },
                "json": true,
                "resolveWithFullResponse": true,
                "timeout": 30000
            },
            "response": {
                "message": "Request failed with status code 403",
                "statusCode": 403,
                "code": "ERR_BAD_REQUEST",
                "body": "<!DOCTYPE html><html lang=\"en-US\"><head><title>Just a moment...</title><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"><meta name=\"robots\" content=\"noindex,nofollow\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"></script></body></html>",
                "headers": {
                    "date": "Fri, 26 Jul 2024 09:27:03 GMT",
                    "content-type": "text/html; charset=UTF-8",
                    "transfer-encoding": "chunked",
                    "connection": "close",
                    "accept-ch": "Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA",
                    "critical-ch": "Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA",
                    "cross-origin-embedder-policy": "require-corp",
                    "cross-origin-opener-policy": "same-origin",
                    "cross-origin-resource-policy": "same-origin",
                    "origin-agent-cluster": "?1",
                    "permissions-policy": "accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()",
                    "referrer-policy": "same-origin",
                    "x-content-options": "nosniff",
                    "x-frame-options": "SAMEORIGIN",
                    "cf-mitigated": "challenge",
                    "cf-chl-out": "FABmu/NVxTXsS+jHAJthwYvD+kqsweMKDyLzMsacsCHOUJcnpQ84Kqkc5p4d1qJhSlnWtrV7HsarN/IFetQG+oDQSV8umzPhk0dLI2TI/90OJmZivukMCrQO+nh1SvUJua92Owj14s1i1qUZATV9ag==$NtcUIiSpEDo33XcBEXTh2Q==",
                    "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
                    "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
                    "set-cookie": [
                        "__cf_bm=Qquv.Qrv0U09Sdlblp2a8e3Og6Wz9kOcSrauhzKX8AQ-1721986023-1.0.1.1-Iq3rQXN3kDbJNyawpvdUG5h2a03JXv041myJKjTq3HRJ664jvbuj2wAlFRN6qo4o3Efb7O.nS5ynpJRJfhZA_Q; path=/; expires=Fri, 26-Jul-24 09:57:03 GMT; domain=.squadhelp.com; HttpOnly; Secure; SameSite=None"
                    ],
                    "vary": "Accept-Encoding",
                    "server": "cloudflare",
                    "cf-ray": "8a935a05ace2ba21-SEA"
                },
                "request": {
                    "uri": {
                        "href": "https://www.test.com"
                    },
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        "User-Agent": "Contentstack",
                        "X-Contentstack-Signature": "9f85c9fb9d2ebb69a27e47b6c05e53078583b78c",
                        "X-Contentstack-Request-Signature": "v1=oddk8EBQR7385dg5LTN7brHk7WERnP17Ze/Ed6/yFWkam6jYPPg7+30ZoOtAMRvws8Ans/sHSBp+3wF+powzEHieBIWF070McSeSok3SdGhDYcoSC1ouAHWy60eIo/FVqHJGyChkWFhHpaR4d7Ov2sE1WiSI3lmRkYxgHvJaxdMwGGlv4f2+lwl14Ot0qooSF6gBEZDtCW1kKGN9GC39EMrj/p9vs24Qgv2Cfyys+mzHJMSXPFEfA3Hv3Cbc53tnI9AUh0NLz4ONtxPkBcVcQC23tH3vbFPNOPhPZk/soq4acYl5JzaYbWjBhCHN8tV6WXWao+8m8NML5YBDqbYcTA==",
                        "Authorization": null
                    }
                }
            },
            "created_at": "2024-07-26T09:27:03.317Z"
        },
        "retry_count": 3,
        "status": 403,
        "updated_at": "2024-07-26T09:27:03.317Z",
        "webhooks": [
            {
                "name": "Dummy Webhook",
                "destinations": [
                    {
                        "target_url": "https://www.test.com",
                        "http_basic_auth": "",
                        "http_basic_password": "",
                        "request_query_parameters": "",
                        "authentication_type": "Basic",
                        "custom_header": [
                            {
                                "header_name": "",
                                "value": ""
                            }
                        ]
                    }
                ],
                "channels": [
                    "assets.update"
                ],
                "retry_policy": "manual",
                "branches": [
                    "main"
                ],
                "notifiers": [
                    "sample@gmail.com"
                ],
                "disabled": false,
                "applikation_id": "blt**************b7",
                "org_uid": "blt**************d5",
                "updated_by": "blt**************de",
                "created_by": "blt**************de",
                "app_user_object_uid": "system",
                "concise_payload": false,
                "uid": "cs******c9-c336-4da1-8aad-fd********0e",
                "created_at": "2024-07-26T09:04:06.984Z",
                "updated_at": "2024-07-26T09:04:06.984Z",
                "__v": 0
            }
        ],
        "projectUid": "blt**************b7",
        "destination": {}
    }
}
```


### Audit Log

Audit log displays a record of all the activities performed in a stack and helps you keep a track of all published items, updates, deletes, and current status of the existing content.

Read more about [Audit Log](../../cs-docs/developers/set-up-stack/monitor-stack-activities-in-audit-log.md).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.


#### Get Audit Log

#### Get audit log

**GET** `/audit-logs`

The Get audit log request is used to retrieve the audit log of a stack.

You can apply queries to filter the results. Refer to the [Queries](./content-delivery-api.md#queries) section for more details.  
To configure the permissions for your application via OAuth, please include the cm.audit-logs:read scope.

**Note:** You can retrieve audit log information only for 30 days prior to the current day (for an organization).

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "logs":[
    {
      "uid":"blt3502b7d1528607d300d0",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:37:44.429Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"environment",
      "event_type":"create",
      "request_id":"86352",
      "metadata":{
        "title":"production",
        "uid":"blt2c60160a046ce26d"
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "r":"0.5090218519397551",
        "environment":{
          "deploy_content":false,
          "servers":[
            
          ],
          "urls":[
            {
              "url":"",
              "locale":"en-us"
            }
          ],
          "name":"production",
          "color":"#01977c"
        }
      },
      "response":{
        "notice":"Environment created successfully.",
        "environment":{
          "deploy_content":false,
          "servers":[
            
          ],
          "urls":[
            {
              "url":"",
              "locale":"en-us"
            }
          ],
          "name":"production",
          "uid":"blt2c60160a046ce26d",
          "created_by":"blt7b815b05d2fe5dd8",
          "updated_by":"blt7b815b05d2fe5dd8",
          "created_at":"2021-08-19T12:37:44.414Z",
          "updated_at":"2021-08-19T12:37:44.414Z",
          "ACL":{
            
          },
          "_version":1,
          "isEnvironment":true
        }
      }
    },
    {
      "uid":"blt904c8db22bb5f0cc6066",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:37:13.629Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"entry",
      "event_type":"create",
      "request_id":"41774",
      "metadata":{
        "content_type":{
          "title":"Sample",
          "uid":"sample"
        },
        "locale":{
          "name":"English - United States",
          "code":"en-us"
        },
        "title":"Test",
        "uid":"bltfab061dff1aa989b",
        "version":1
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "form_uid":"sample",
        "locale":"en-us",
        "r":"0.09477605369787079",
        "entry":{
          "title":"Test",
          "json_rte":{
            "type":"doc",
            "attrs":{
              "dirty":true
            },
            "uid":"3ccce4d01b9e4f46a2153b9de8e3e3e3",
            "children":[
              {
                "type":"p",
                "attrs":{
                  "dirty":true
                },
                "uid":"bf6548b838504b458d3fce4bcbeb9a68",
                "children":[
                  {
                    "text":"Hello World!"
                  }
                ]
              }
            ]
          },
          "tags":[
            "new",
            "entry"
          ],
          "locale":"en-us"
        },
        "deleted":null,
        "fallback_locale":"en-us"
      },
      "response":{
        "notice":"Entry created successfully.",
        "entry":{
          "title":"Test",
          "json_rte":{
            "type":"doc",
            "attrs":{
              
            },
            "uid":"3ccce4d01b9e4f46a2153b9de8e3e3e3",
            "children":[
              {
                "type":"p",
                "attrs":{
                  
                },
                "uid":"bf6548b838504b458d3fce4bcbeb9a68",
                "children":[
                  {
                    "text":"Hello World!"
                  }
                ]
              }
            ],
            "_version":1
          },
          "tags":[
            "new",
            "entry"
          ],
          "locale":"en-us",
          "uid":"bltfab061dff1aa989b",
          "created_by":"blt7b815b05d2fe5dd8",
          "updated_by":"blt7b815b05d2fe5dd8",
          "created_at":"2021-08-19T12:37:13.553Z",
          "updated_at":"2021-08-19T12:37:13.553Z",
          "ACL":{
            
          },
          "_version":1,
          "_in_progress":false
        }
      }
    },
    {
      "uid":"blt83c51a06f22550179da7",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:36:44.681Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"content_type",
      "event_type":"update",
      "request_id":"41315",
      "metadata":{
        "title":"Sample",
        "uid":"sample",
        "version":2,
        "scope":null
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "r":"0.5419430454788539",
        "content_type":{
          "created_at":"2021-08-19T12:36:33.899Z",
          "updated_at":"2021-08-19T12:36:33.899Z",
          "title":"Sample",
          "uid":"sample",
          "_version":1,
          "schema":[
            {
              "data_type":"text",
              "display_name":"Title",
              "field_metadata":{
                "_default":true,
                "version":3
              },
              "mandatory":true,
              "uid":"title",
              "unique":true,
              "multiple":false,
              "non_localizable":false,
              "indexed":false,
              "inbuilt_model":false
            },
            {
              "data_type":"json",
              "display_name":"JSON Rich Text Editor",
              "uid":"json_rte",
              "field_metadata":{
                "allow_json_rte":true,
                "embed_entry":false,
                "description":"",
                "default_value":"",
                "multiline":false,
                "rich_text_type":"advanced",
                "options":[
                  
                ]
              },
              "format":"",
              "error_messages":{
                "format":""
              },
              "reference_to":[
                "sys_assets"
              ],
              "multiple":false,
              "non_localizable":false,
              "unique":false,
              "mandatory":false,
              "indexed":false,
              "inbuilt_model":false
            }
          ],
          "last_activity":{
            
          },
          "maintain_revisions":true,
          "description":"",
          "DEFAULT_ACL":{
            "others":{
              "read":false,
              "create":false
            },
            "users":[
              {
                "read":true,
                "sub_acl":{
                  "read":true
                },
                "uid":"blt893f7ed431972225"
              }
            ],
            "management_token":{
              "read":true
            }
          },
          "SYS_ACL":{
            "roles":[
              {
                "uid":"bltbc79e980cd6e5f1f",
                "read":true,
                "sub_acl":{
                  "create":true,
                  "read":true,
                  "update":true,
                  "delete":true,
                  "publish":true
                },
                "update":true,
                "delete":true
              },
              {
                "uid":"blt027922b7aee26e6c",
                "read":true,
                "sub_acl":{
                  "create":true,
                  "read":true,
                  "update":true,
                  "delete":true,
                  "publish":true
                }
              },
              {
                "uid":"bltf59a1e55f70e4fd0",
                "read":true,
                "sub_acl":{
                  "create":true,
                  "read":true,
                  "update":true,
                  "delete":true,
                  "publish":true
                },
                "update":true,
                "delete":true
              }
            ],
            "others":{
              "read":false,
              "create":false,
              "update":false,
              "delete":false,
              "sub_acl":{
                "read":false,
                "create":false,
                "update":false,
                "delete":false,
                "publish":false
              }
            }
          },
          "options":{
            "is_page":false,
            "singleton":true,
            "sub_title":[
              
            ],
            "title":"title"
          },
          "abilities":{
            "get_one_object":true,
            "get_all_objects":true,
            "create_object":true,
            "update_object":true,
            "delete_object":true,
            "delete_all_objects":true
          },
          "extension_uids":[
            
          ],
          "id":"rootfields"
        },
        "form_uid":"sample",
        "deleted":false
      },
      "response":{
        "notice":"Content Type updated successfully.",
        "content_type":{
          "created_at":"2021-08-19T12:36:33.899Z",
          "updated_at":"2021-08-19T12:36:44.643Z",
          "title":"Sample",
          "uid":"sample",
          "_version":2,
          "inbuilt_class":false,
          "schema":[
            {
              "data_type":"text",
              "display_name":"Title",
              "field_metadata":{
                "_default":true,
                "version":3
              },
              "mandatory":true,
              "uid":"title",
              "unique":true,
              "multiple":false,
              "non_localizable":false
            },
            {
              "data_type":"json",
              "display_name":"JSON Rich Text Editor",
              "uid":"json_rte",
              "field_metadata":{
                "allow_json_rte":true,
                "embed_entry":false,
                "description":"",
                "default_value":"",
                "multiline":false,
                "rich_text_type":"advanced",
                "options":[
                  
                ]
              },
              "format":"",
              "error_messages":{
                "format":""
              },
              "reference_to":[
                "sys_assets"
              ],
              "multiple":false,
              "non_localizable":false,
              "unique":false,
              "mandatory":false
            }
          ],
          "last_activity":{
            
          },
          "maintain_revisions":true,
          "description":"",
          "DEFAULT_ACL":{
            "others":{
              "read":false,
              "create":false
            },
            "users":[
              {
                "uid":"blt893f7ed431972225",
                "read":true,
                "sub_acl":{
                  "read":true
                }
              }
            ]
          },
          "SYS_ACL":{
            "roles":[
              
            ],
            "others":{
              "read":false,
              "create":false,
              "update":false,
              "delete":false,
              "sub_acl":{
                "read":false,
                "create":false,
                "update":false,
                "delete":false,
                "publish":false
              }
            }
          },
          "field_rules":null,
          "options":{
            "is_page":false,
            "singleton":true,
            "sub_title":[
              
            ],
            "title":"title"
          },
          "abilities":{
            "get_one_object":true,
            "get_all_objects":true,
            "create_object":true,
            "update_object":true,
            "delete_object":true,
            "delete_all_objects":true
          }
        }
      }
    },
    {
      "uid":"blt0eb433d0dc9f6ed2b25f",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:36:33.934Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"content_type",
      "event_type":"create",
      "request_id":"80989",
      "metadata":{
        "title":"Sample",
        "uid":"sample",
        "version":1
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "r":"0.0007076494692754842",
        "content_type":{
          "title":"Sample",
          "description":"",
          "options":{
            "is_page":false,
            "singleton":true,
            "sub_title":[
              
            ],
            "title":"title"
          },
          "schema":[
            {
              "data_type":"text",
              "display_name":"Title",
              "field_metadata":{
                "_default":true,
                "version":3
              },
              "mandatory":true,
              "uid":"title",
              "unique":true,
              "multiple":false,
              "indexed":false,
              "inbuilt_model":false,
              "non_localizable":false
            }
          ],
          "uid":"sample"
        },
        "prevcreate":true,
        "limit":100,
        "environment":null
      },
      "response":{
        "notice":"Content Type created successfully.",
        "content_type":{
          "created_at":"2021-08-19T12:36:33.899Z",
          "updated_at":"2021-08-19T12:36:33.899Z",
          "title":"Sample",
          "uid":"sample",
          "_version":1,
          "inbuilt_class":false,
          "schema":[
            {
              "data_type":"text",
              "display_name":"Title",
              "field_metadata":{
                "_default":true,
                "version":3
              },
              "mandatory":true,
              "uid":"title",
              "unique":true,
              "multiple":false,
              "non_localizable":false
            }
          ],
          "last_activity":{
            
          },
          "maintain_revisions":true,
          "description":"",
          "DEFAULT_ACL":{
            "others":{
              "read":false,
              "create":false
            },
            "users":[
              {
                "read":true,
                "sub_acl":{
                  "read":true
                },
                "uid":"blt893f7ed431972225"
              }
            ],
            "management_token":{
              "read":true
            }
          },
          "SYS_ACL":{
            "roles":[
              
            ],
            "others":{
              "read":false,
              "create":false,
              "update":false,
              "delete":false,
              "sub_acl":{
                "read":false,
                "create":false,
                "update":false,
                "delete":false,
                "publish":false
              }
            }
          },
          "field_rules":null,
          "options":{
            "is_page":false,
            "singleton":true,
            "sub_title":[
              
            ],
            "title":"title"
          },
          "abilities":{
            "get_one_object":true,
            "get_all_objects":true,
            "create_object":true,
            "update_object":true,
            "delete_object":true,
            "delete_all_objects":true
          }
        }
      }
    },
    {
      "uid":"bltf5917f09e8ccda132fc1",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:36:23.047Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"stack",
      "event_type":"create",
      "request_id":"17045",
      "metadata":{
        "title":"Test",
        "uid":"blt76a929e3bf2324c9"
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "r":"0.30356792013646405",
        "stack":{
          "name":"Test",
          "master_locale":"en-us"
        },
        "include_discrete_variables":true,
        "limit":200
      },
      "response":{
        "notice":"Stack created successfully.",
        "stack":{
          "cluster":"default",
          "created_at":"2021-08-19T12:36:21.510Z",
          "updated_at":"2021-08-19T12:36:23.025Z",
          "uid":"blt76a929e3bf2324c9",
          "name":"Test",
          "description":null,
          "org_uid":"blt4051c65ea6ddf287",
          "api_key":"blt8d542b122115b153",
          "master_locale":"en-us",
          "is_asset_download_public":true,
          "owner_uid":"blt7b815b05d2fe5dd8",
          "user_uids":[
            "blt7b815b05d2fe5dd8"
          ],
          "settings":{
            "version":"2019-04-30",
            "rte_version":3,
            "fallback_publish_contents":true,
            "blockAuthQueryParams":false,
            "allowedCDNTokens":[
              "authtoken",
              "access_token",
              "authorization"
            ],
            "webhook_enabled":false,
            "live_preview":{
              
            },
            "language_fallback":false
          },
          "master_key":"blt716b635e7e01bc33",
          "SYS_ACL":{
            "others":{
              "invite":false,
              "sub_acl":{
                "create":false,
                "read":false,
                "update":false,
                "delete":false
              }
            },
            "roles":[
              {
                "uid":"bltbc79e980cd6e5f1f",
                "name":"Developer",
                "invite":true,
                "sub_acl":{
                  "create":true,
                  "read":true,
                  "update":true,
                  "delete":true
                }
              },
              {
                "uid":"bltf59a1e55f70e4fd0",
                "name":"Admin",
                "invite":true,
                "sub_acl":{
                  "create":true,
                  "read":true,
                  "update":true,
                  "delete":true
                }
              }
            ]
          },
          "discrete_variables":{
            "cms":true,
            "_version":3,
            "secret_key":"e7c0a91c26c12e8f4b0cc8fd4465d1c70ece58ec"
          }
        }
      }
    },
    {
      "uid":"bltf1d8caa6ea22d77c4da4",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:36:22.916Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"locale",
      "event_type":"create",
      "request_id":"17045",
      "metadata":{
        "title":"English - United States",
        "uid":"en-us"
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "r":"0.30356792013646405",
        "stack":{
          "name":"Test",
          "master_locale":"en-us"
        }
      },
      "response":{
        "code":"en-us",
        "fallback_locale":null,
        "uid":"blt160172ec89fa4a8f",
        "created_by":"blt7b815b05d2fe5dd8",
        "updated_by":"blt7b815b05d2fe5dd8",
        "created_at":"2021-08-19T12:36:22.906Z",
        "updated_at":"2021-08-19T12:36:22.906Z",
        "api_key":"blt8d542b122115b153",
        "org_uid":"blt4051c65ea6ddf287",
        "name":"English - United States",
        "ACL":{
          
        },
        "_version":1,
        "isLanguage":true
      }
    },
    {
      "uid":"blt55e8bb1fb9f52f96627e",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:36:22.906Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"roles",
      "event_type":"create",
      "request_id":"17045",
      "metadata":{
        "title":"Admin",
        "uid":"bltf59a1e55f70e4fd0",
        "description":"Admin can perform all actions and manage all settings of the stack, except the ability to delete or transfer ownership of the stack."
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "r":"0.30356792013646405",
        "stack":{
          "name":"Test",
          "master_locale":"en-us"
        }
      },
      "response":{
        "name":"Admin",
        "description":"Admin can perform all actions and manage all settings of the stack, except the ability to delete or transfer ownership of the stack.",
        "uid":"bltf59a1e55f70e4fd0",
        "org_uid":"blt4051c65ea6ddf287",
        "api_key":"blt8d542b122115b153",
        "created_by":"blt7b815b05d2fe5dd8",
        "updated_by":"blt7b815b05d2fe5dd8",
        "created_at":"2021-08-19T12:36:22.886Z",
        "updated_at":"2021-08-19T12:36:22.886Z",
        "deleted_at":false,
        "_id":"611e504617da5917890a656a"
      }
    },
    {
      "uid":"blt21bbbddffec2a55cd93e",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:36:22.901Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"roles",
      "event_type":"create",
      "request_id":"17045",
      "metadata":{
        "title":"Content Manager",
        "uid":"blt027922b7aee26e6c",
        "description":"Content Managers can view all content types, manage entries and assets. They cannot edit content types or access stack settings."
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "r":"0.30356792013646405",
        "stack":{
          "name":"Test",
          "master_locale":"en-us"
        }
      },
      "response":{
        "name":"Content Manager",
        "description":"Content Managers can view all content types, manage entries and assets. They cannot edit content types or access stack settings.",
        "uid":"blt027922b7aee26e6c",
        "rules":[
          {
            "module":"locale",
            "locales":[
              "$all"
            ]
          },
          {
            "module":"environment",
            "environments":[
              "$all"
            ]
          },
          {
            "module":"asset",
            "assets":[
              "$all"
            ],
            "acl":{
              "create":true,
              "read":true,
              "update":true,
              "delete":true,
              "publish":true
            }
          }
        ],
        "org_uid":"blt4051c65ea6ddf287",
        "api_key":"blt8d542b122115b153",
        "created_by":"blt7b815b05d2fe5dd8",
        "updated_by":"blt7b815b05d2fe5dd8",
        "created_at":"2021-08-19T12:36:22.886Z",
        "updated_at":"2021-08-19T12:36:22.886Z",
        "deleted_at":false,
        "_id":"611e504617da5917890a6569"
      }
    },
    {
      "uid":"blta408bd1f57664b451d4f",
      "stack":"blt8d542b122115b153",
      "created_at":"2021-08-19T12:36:22.890Z",
      "created_by":"blt7b815b05d2fe5dd8",
      "module":"roles",
      "event_type":"create",
      "request_id":"17045",
      "metadata":{
        "title":"Developer",
        "uid":"bltbc79e980cd6e5f1f",
        "description":"Developer can perform all Content Manager's actions, view audit logs, create roles, invite users, manage content types, languages, and environments."
      },
      "remote_addr":"202.179.94.0",
      "request":{
        "r":"0.30356792013646405",
        "stack":{
          "name":"Test",
          "master_locale":"en-us"
        }
      },
      "response":{
        "name":"Developer",
        "description":"Developer can perform all Content Manager's actions, view audit logs, create roles, invite users, manage content types, languages, and environments.",
        "uid":"bltbc79e980cd6e5f1f",
        "rules":[
          {
            "module":"locale",
            "locales":[
              "$all"
            ]
          },
          {
            "module":"environment",
            "environments":[
              "$all"
            ]
          },
          {
            "module":"asset",
            "assets":[
              "$all"
            ],
            "acl":{
              "create":true,
              "read":true,
              "update":true,
              "delete":true,
              "publish":true
            }
          }
        ],
        "org_uid":"blt4051c65ea6ddf287",
        "api_key":"blt8d542b122115b153",
        "created_by":"blt7b815b05d2fe5dd8",
        "updated_by":"blt7b815b05d2fe5dd8",
        "created_at":"2021-08-19T12:36:22.886Z",
        "updated_at":"2021-08-19T12:36:22.886Z",
        "deleted_at":false,
        "_id":"611e504617da5917890a6568"
      }
    }
  ]
}
```



#### Get Audit Log Item

#### Get audit log item

**GET** `/audit-logs/{log_item_uid}`

The Get audit log item request is used to retrieve a specific item from the audit log of a stack.  
To configure the permissions for your application via OAuth, please include the cm.audit-logs:read scope.

**Note:** You can retrieve audit log information only for 30 days prior to the current day (for an organization).

##### URL Parameters

- **log_item_uid** (required)
  Enter the UID of a specific log item you want to retrieve the details of.
  Default: `blt1ffebe11111e111d11c1`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

##### Sample Response

```json
{
  "log":{
    "_id":"blt3502b7d1528607d300d0",
    "uid":"blt3502b7d1528607d300d0",
    "stack":"blt8d542b122115b153",
    "created_at":"2021-08-19T12:37:44.429Z",
    "created_by":"blt7b815b05d2fe5dd8",
    "module":"environment",
    "event_type":"create",
    "request_id":"86352",
    "metadata":{
      "title":"production",
      "uid":"blt2c60160a046ce26d"
    },
    "remote_addr":"202.179.94.0",
    "request":{
      "r":"0.5090218519397551",
      "environment":{
        "deploy_content":false,
        "servers":[
          
        ],
        "urls":[
          {
            "url":"",
            "locale":"en-us"
          }
        ],
        "name":"production",
        "color":"#01977c"
      }
    },
    "response":{
      "notice":"Environment created successfully.",
      "environment":{
        "deploy_content":false,
        "servers":[
          
        ],
        "urls":[
          {
            "url":"",
            "locale":"en-us"
          }
        ],
        "name":"production",
        "uid":"blt2c60160a046ce26d",
        "created_by":"blt7b815b05d2fe5dd8",
        "updated_by":"blt7b815b05d2fe5dd8",
        "created_at":"2021-08-19T12:37:44.414Z",
        "updated_at":"2021-08-19T12:37:44.414Z",
        "ACL":{
          
        },
        "_version":1,
        "isEnvironment":true
      }
    }
  }
}
```


### Publish Queue

The **Publish Queue** displays the historical and current details of activities such as publish, unpublish, or delete that can be performed on entries and/or assets. It also shows details of Release deployments. These details include time, entry, content type, version, language, user, environment, and status.  
  
For more details, refer the [Publish Queue](../../cs-docs/content-managers/publish-content/view-publish-status-of-entries-assets-in-publish-queue.md) documentation.

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.


#### Get Publish Queue

#### Get publish queue

**GET** `/publish-queue`

The Get publish queue request returns comprehensive information on activities such as publish, unpublish, and delete that have performed on entries and/or assets. This request also includes the details of the release deployments in the response body.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:read scope.

**Note**: You can retrieve the publish queue details for activities performed on entries and/or assets of your stack in the last 30 days. To retrieve publish queue details for nested reference published tasks, pass api_version parameter as **3.2** in the **Headers** section.

You can apply various queries such as [count](./content-delivery-api.md#count), [limit](./content-delivery-api.md#limit), bulkJobId, include_job_details: true/false, etc. to filter the results. Refer to the [Queries](./content-delivery-api.md#queries) section for more details.

Now, you can limit the number of bulk job details in the response body to **25** items. Also, you can view the summary of your bulk jobs within the summary key in the response body.

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

##### Sample Response

```json
{
    "queue": [
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.900Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.900Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "hi-in",
                "version": 1,
                "title": "ct5-entry1-hi-in",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.862Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "b51cd99f-3b77-5d5a-bf86-19ad787107c0",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.891Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.891Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "hi-in",
                "version": 1,
                "title": "ct5-entry1-hi-in",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.862Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "19044a26-70b2-5d07-a32e-88c15fa6c6ba",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.882Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.882Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "hi-in",
                "version": 1,
                "title": "ct5-entry1-hi-in",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.862Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "27971fe2-2582-55e9-829f-82294553370e",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.872Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.872Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "hi-in",
                "version": 1,
                "title": "ct5-entry1-hi-in",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.862Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "a3434a9b-1a59-5ae8-a16b-7ed314990f6d",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.860Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.860Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "807b7d72-468e-5d85-af07-d1b432ef83a4",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.813Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.813Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "8dc071ee-a4b6-541e-8cde-bf8bdc2dbb0f",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.801Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.801Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "1a26e4bf-1bea-575e-8fee-5744d0aee539",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.790Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.790Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "1ab03abe-0247-5e79-a5a4-e94e53712cac",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.781Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.781Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "070e2fa0-fa1c-587d-98fb-f9b9134a6333",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.772Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.772Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "bf5fc540-f42f-55cb-b2f8-806118105c0a",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.763Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.763Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "d2455778-dfe6-5de1-b4d4-746f657e093c",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.753Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.753Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "ar",
                "version": 1,
                "title": "ct5-entry1-ar",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.743Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "f483b3c9-b127-55fc-b286-483c30a8f284",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.711Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.711Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "bltc3c07d8e15a19de6"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "a7fb8d77-73b1-5a2d-a570-cdd09b0e03a5",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.709Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.709Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "bltc3c07d8e15a19de6"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "139739db-7b7a-5d86-99ef-3fa72fcf55ba",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.708Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.708Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "bltc3c07d8e15a19de6"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "55e560f8-eb00-5df3-a826-66abbdc538dc",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.706Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.706Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "bltc3c07d8e15a19de6"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "hi-in"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "9da7827f-da70-574e-9d1c-ca64d3e0d5a3",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.639Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.639Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "f04e9642-0878-530d-b468-47830d6cabed",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.638Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.638Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "969a51ec-6308-585b-aa4c-7fcb2fcc2659",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.636Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.636Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "1d9fcfd0-13e1-538c-bda2-03aee9c950ef",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.635Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.635Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blte98201bbf32307b0"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "a9745880-f7e2-5fe0-866a-52dc20ab70c0",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.633Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.633Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "d0a31411-9476-502d-9e8a-0bcc6547abdd",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.631Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.631Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blt77f78d0838d7aade"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "72bdcd17-7ffc-5a9a-a078-5d25d5a25808",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.630Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.630Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "es"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "d538224f-d1a3-5289-8870-c50276929fc4",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.628Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.628Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "version": 1,
                "title": "307x450.jpg",
                "uid": "blt01100021489a94c0"
            },
            "environment": [
                "blt79075cd84751ceac"
            ],
            "locale": [
                "ar"
            ],
            "publish_details": {
                "status": "skipped",
                "message": "The asset is already published in the specified environment and locale.",
                "error": "The asset is already published in the specified environment and locale."
            },
            "published_at": null,
            "stack": "blt7ba9bf271af8ee2b",
            "type": "asset",
            "uid": "31678107-98cf-56c5-9dc0-7a4ac47bd59e",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        {
            "approval": false,
            "approved": true,
            "rejected": false,
            "created_at": "2023-06-08T12:20:50.560Z",
            "created_by": "bltbb063a2a53a012c0",
            "updated_at": "2023-06-08T12:20:50.560Z",
            "updated_by": "bltbb063a2a53a012c0",
            "user": "bltbb063a2a53a012c0",
            "action": "publish",
            "entry": {
                "locale": "en-us",
                "version": 2,
                "title": "Child Entry - Level 5",
                "uid": "blt5eb4637f09f0ac3e"
            },
            "environment": [
                "bltbfd5336db8928d6a"
            ],
            "locale": [
                "mr-in"
            ],
            "publish_details": {
                "status": "success"
            },
            "published_at": "2023-06-08T12:20:50.410Z",
            "stack": "blt7ba9bf271af8ee2b",
            "type": "entry",
            "uid": "f8489855-90c1-50c6-818a-e04da9d1d51b",
            "bulkJobId": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "content_type": {
                "uid": "ct5"
            }
        }
    ],
    "jobDetails": {
        "approval": false,
        "approved": true,
        "rejected": false,
        "created_at": "2023-06-08T12:20:46.796Z",
        "created_by": "bltbb063a2a53a012c0",
        "updated_at": "2023-06-08T12:20:51.003Z",
        "updated_by": "bltbb063a2a53a012c0",
        "user": "bltbb063a2a53a012c0",
        "action": "publish",
        "entry": {
            "title": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
            "uid": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026"
        },
        "environment": [
            "blt79075cd84751ceac",
            "blt77f78d0838d7aade",
            "blte98201bbf32307b0",
            "bltbfd5336db8928d6a"
        ],
        "locale": [
            "en-us",
            "ar",
            "fr",
            "hi-in",
            "ja",
            "mr-in",
            "es"
        ],
        "publish_details": {
            "status": "complete",
            "recordsCount": 392,
            "process_count": 392
        },
        "published_at": "2023-06-08T12:20:51.003Z",
        "stack": "blt7ba9bf271af8ee2b",
        "type": "bulk-job",
        "uid": "4f60c1b5-1d6b-4223-95f5-f73bb2b27026",
        "publish_with_reference": true,
        "summary": {
            "top_level_items": 2,
            "total_processed": 392,
            "success": 189,
            "unsuccess": 0,
            "approvals": 7,
            "skip": 196
        }
    }
}
```



#### Get Publish Queue Activity

#### Get publish queue activity

**GET** `/publish-queue/{publish_queue_uid}`

The Get publish queue activity request returns comprehensive information on a specific publish, unpublish, or delete action that was performed on an entry and/or asset. You can also retrieve details of a specific release deployment.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:read scope.

**Note**: You can retrieve the publish queue details for activities performed in the last **30** days only.

You can apply queries to filter the results. Refer to the [Queries](./content-management-api.md#authentication) section for more details.

##### URL Parameters

- **publish_queue_uid** (required)
  Enter the UID of a specific publish queue activity of which you want to retrieve the details. Execute the [Get publish queue](./content-management-api.md#get-publish-queue) API request to retrieve the UID of a particular publish queue activity.
  Default: `your_publish_queue_uid`

##### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

##### Headers

- **api_key** (required)
  Enter your stack API Key.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version.
  Default: `3.2`

##### Sample Response

```json
{
    "entry": {
        "_id": "blt7632hgshdg7236236733",
        "uid": "entry_uid",
        "stack": "stack_api_key",
        "created_at": "2020-06-09T06:48:46.461Z",
        "updated_at": "2020-06-09T06:48:46.461Z",
        "created_by": "user_uid",
        "updated_by": "user_uid",
        "type": "entry",
        "content_type": {
            "title": "Author Details",
            "uid": "author_details"
        },
        "publish_details": {
            "status": "success"
        },
        "entry": {
            "title": "Author 2",
            "uid": "user_uid",
            "locale": "en-us",
            "version": 1
        },
        "locale": [
            "en-us"
        ],
        "environment": [
            "environment_uid"
        ],
        "action": "publish",
        "published_at": "2020-06-09T06:48:46.410Z",
        "user": "user_uid",
        "approval": false,
        "approved": true,
        "rejected": false
    }
}
```



#### Cancel Scheduled Action

#### Cancel scheduled action

**GET** `/publish-queue/{publish_queue_uid}/unschedule`

The Cancel Scheduled Action request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and also cancel the deployment of releases.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:write scope.

**Note**: You must pass api_version:3.2 parameter in the **Header** section of the request to enable Nested References Publishing.

##### URL Parameters

- **publish_queue_uid** (required)
  Enter the UID of the event to be cancelled in the publish queue.
  Default: `bltc2bbdb4a01c313a2cb3b`

##### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](./content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

##### Sample Response

```json
{
    "notice": "Entry unscheduled successfully."
}
```


## Postman Collection

### About Contentstack Postman Collection

The Contentstack Postman collection is a set of preconfigured REST API requests that will make it easy for you to get started with the [Contentstack APIs](/docs/developers/apis/) and try out our API requests through the popular [Postman](https://www.getpostman.com/) REST client.

### Install Postman

To use the Contentstack Postman collection you will need to have the [Postman](https://www.postman.com/downloads/). You can either download the **Desktop app**or use **Postman for Web**.

**Note:** If you have already installed Postman for your device, go to the [Download Latest Postman Collection for Contentstack](#download-latest-collection) section.

Postman is available for [Windows (x64)](https://dl.pstmn.io/download/latest/win64), Mac ([Intel Chip](https://dl.pstmn.io/download/latest/osx_64) / [Apple Chip](https://dl.pstmn.io/download/latest/osx_arm64)), and [Linux](https://dl.pstmn.io/download/latest/linux64) environments.

### Download Latest Collection

Once you have installed Postman on your device, click the **Run in Postman** button to start working with the Content Management API endpoints for Contentstack.

**Note:** The Contentstack Postman collection does not support the now deprecated Postman Chrome extension. Make sure you have installed the latest version of the [Postman desktop app](https://www.postman.com/downloads/).

This opens the **Fork collection into your workspace** modal from where you can proceed to download/work with the Contentstack Postman collection in the following three ways:

- View the Collection
- Import a Copy of the Collection
- Fork the Collection

Let’s look at each of the above methods in detail.

#### View the Collection

This option allows you to just view (and not try out) the API requests of the Postman collection.

Perform the following steps to view the Content Management API Postman collection:

1. Click the View collection link in the Fork collection into your workspace modal.A new tab opens up in your browser where you should see the latest collection preloaded in the left navigation.

#### Import a Copy of the Collection

This option allows you to import a copy of the collection into your workspace.

To import the Content Management API collection, perform the following steps:

1. Click the import a copy link in the Fork collection into your workspace modal.
2. In the resulting Import Collection modal within the Postman app, select a workspace and click Import to import the latest Postman collection into your selected workspace.

#### Fork the Collection

This option allows you to fork, or create a copy of the collection, and perform changes to the collection without affecting the original.

To fork the Content Management API collection, perform the following steps:

1. Click the Fork Collection button in the Fork collection into your workspace modal.
2. This opens the Sign In page. You can either enter your login credentials and click Sign in, or sign in using your Google account or via SSO.
3. In the resulting Fork collection modal, if needed, enter a Fork label that lets you uniquely identify your collection and select a Workspace.
4. Once done, click Fork Collection to fork the Postman collection into your selected workspace.

#### Download Collection from GitHub Page

We have also hosted our Postman collection on [GitHub](https://github.com/contentstack/contentstack-postman-collections). You can follow the steps mentioned in the [Readme](https://github.com/contentstack/contentstack-postman-collections/blob/development/README.md) file to download and start using it.

You can also choose to watch the latest Postman collection to get notifications of new releases or updates.

To do so, click on the following **Watch** button and select **Watching**.

### Configure Environment Variables

When you download and install the latest version of the Content Management API (CMA) Postman Collection, you also download and import the respective environment along with the environment variables.

Once your Environment is imported, next you need to set your Contentstack account specific values.

**Note:** As these environment variables are referenced across multiple API requests, once you set the variables, it becomes a lot more convenient to make repeated use of the Postman Collection.

Some of the important variables that you need to set are as follows:

| Environment Variable | Value |
| --- | --- |
| base_url | api.contentstack.io |
| api_key | your_stack_api_key |
| authorization | your_management_token |

**Note:** The Contentstack Postman Collection will require a valid [Management token](../../cs-docs/developers/create-tokens/about-management-tokens.md) to make API calls. Check out the [Authentication](#authentication) section for more details.

If you want to add your own environment variables, you can follow the procedure in the next section.

#### Add Other Environment Variables

To add any new environment variables for your Postman collection, perform the following steps:

1. Identify the environment variables that you want to define.
2. In the top right corner of Postman, click on the environment's dropdown and select Content Management API - Environment.
3. Click the "eye" icon present in the top right corner of Postman. It opens up in the environment variables modal. Click Edit to make changes in the variables.
4. In the VARIABLE field, enter the name of the environment variable. In the INITIAL VALUE field, enter your Contentstack-account-specific value that will replace the variable when the call is made.
5. Once you have defined your variables, click on Save.

#### Update Environment Variables

With every new API request added, we update our environment file. So, to get the latest environment variables, you need to download the collection along with the updated environment file again, compare your existing environment with the latest environment, identify and add the new variables to your existing environment.

Next, let’s see how you can run API Requests from your Contentstack Postman collection using your environment.

### Make an API Request

With the Contentstack Postman Collection loaded into the Postman app (on the left pane) and the environment created, you can now make API requests to the Contentstack API via Postman.

To make an API request, perform the following steps:

1. Select the respective environment, Content Management API-Environment, from the dropdown.
2. Select an API Request from the Contentstack Postman Collection. In this example, we will use the Get user request which is a part of the Users folder.Note: If you want to make changes to your parameters or want to add parameters of your own, you can do it here.
3. Next, click on Send at the top right to make the API request.The API call should return with a response under the Body tab in the bottom half of the screen.

### Secure API Keys and Tokens

We strongly advise against storing your API keys and tokens in your collection permanently. If you or someone else shares the collection by mistake, other users will be able to export it along with these keys.

We recommend that you provide your Contentstack account-specific API keys and tokens in your environment or directly to the sample requests.

#### Users using Authtoken

For users who use authtoken to authenticate their calls, when you make the **Log in to your account** API Request, your authtoken will be saved in cookies.

If you want to prevent this action, perform the steps given below:

1. Click on Cookies on the far right corner.
2. In the Cookies modal under the Manage Cookies tab, click the Domains Allowlist at the bottom left.
3. Add api.contentstack.io and click Add.

This will allow you to access [cookies of this domain in scripts](https://learning.postman.com/docs/sending-requests/cookies/#accessing-cookies-in-scripts) programmatically.

**Note:** To avoid this situation, we recommend you to use the stack’s Management Token along with the stack API key to make valid Content Management API requests. For more information, refer to [Authentication](#authentication).

### Postman Collection Updates

We keep our Postman Collection updated. To get the latest version of our Postman Collection, all you need to do is to [download the Postman Collection along with the updated environment](#download-latest-collection) again and you are good to go.

You can also choose to watch for the latest Postman Collection updates on our [GitHub repository](https://github.com/contentstack/contentstack-postman-collections) and get notifications of new releases or updates to the repository. The [GitHub Readme](https://github.com/contentstack/contentstack-postman-collections/blob/development/README.md) doc will help you with the steps that you need to follow.

## Regions


| Region | Host |
|--------|------|

| North America | https://api.contentstack.io/v3 |

| Europe | https://eu-api.contentstack.com/v3 |

| AWS - Australia | https://au-api.contentstack.com/v3 |

| Azure - North America | https://azure-na-api.contentstack.com/v3 |

| Azure - Europe | https://azure-eu-api.contentstack.com/v3 |

| GCP - North America | https://gcp-na-api.contentstack.com/v3 |

| GCP - Europe | https://gcp-eu-api.contentstack.com/v3 |
