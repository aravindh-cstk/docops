---
title: "CMA | Environment"
description: Create, update, fetch, and manage environments used to publish and deliver Contentstack content.
url: https://www.contentstack.com/docs/developer-apis/content-management-api/environment
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Environment

A publishing environment corresponds to one or more deployment servers or a content delivery destination where the entries need to be published.

Read more about [Environments](/docs/developers/set-up-environments).

## Environment Collection

### Get all environments

**GET** `/environments?include_count={boolean_value}&asc={field_uid}&desc={field_uid}`

The Get all environments call fetches the list of all environments available in a stack.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](../../../api-detail/content-delivery-api.md#queries) section of the Content Delivery API doc.  
To configure the permissions for your application via OAuth, please include thecm.environments.management:read scope.

#### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of languages added to your stack.
  Default: `false`
- **asc** (optional)
  Enter the unique ID of the field for sorting the environments in ascending order with respect to that field.
  Default: `created_at`
- **desc** (optional)
  Enter the unique ID of the field for sorting the environments in descending order with respect to that field.
  Default: `updated_at`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

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


### Get a single environment

**GET** `/environments/{environment_name}`

The Get a single environment call returns more details about the specified environment of a stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.environments.management:read scope.

#### URL Parameters

- **environment_name** (required)
  Enter the name of the environment.
  Default: `development`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

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


### Add an environment

**POST** `/environments`

The Add an environment call will add a publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, mention the environment name, the URLs (which include the language code and the URL of the server).  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

#### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

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

#### Sample Response

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


### Update environment

**PUT** `/environments/{environment_name}`

The Update environment call will update the details of an existing publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, enter the updated details of the environment. You can modify the environment name, the URLs (which include the language code and the URL of the server).  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

#### URL Parameters

- **environment_name** (required)
  Enter the name of the environment.
  Default: `development`

#### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

#### Sample Request

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

#### Sample Response

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


### Delete environment

**DELETE** `/environments/{environment_name}`

The Delete environment call will delete an existing publishing environment from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

#### URL Parameters

- **environment_name** (required)
  Enter the name of the environment.
  Default: `development`

#### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

#### Sample Response

```json
{
  "notice": "Environment deleted successfully."
}
```

