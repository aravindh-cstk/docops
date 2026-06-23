---
title: "Brand Kit Management API"
description: Use the Contentstack Brand Kit Management API to create, update, and manage brand kits and voice profiles for consistent and scalable brand control.
url: brand-kit-management-api
product: Contentstack
doc_type: api-detail
audience:
  - developers
version: unknown
last_updated: 2025-11-20
---

# Brand Kit Management API


## Introduction

### Overview

Contentstack is a headless, API-first content management system (CMS) that provides everything you need to power your web or mobile properties. To learn more about Contentstack, visit our [website](https://www.contentstack.com) or refer to our [documentation site](https://www.contentstack.com/docs) to understand what we do.

This documentation provides information on endpoints, operations, parameters, and responses for the Brand Kit Management API. It includes details for creating, fetching, updating, and deleting Brand Kits and Voice Profiles.

Brand Kit is a powerful tool that serves as a centralized hub for your organization's brand identity, encompassing detailed brand information and persona guidelines. You can create, view, update, and delete multiple Brand Kits via the API requests documented.

Voice Profile lets you create distinct AI-generated brand voices for your content. You can use the API requests in this doc to manage these profiles within a Brand Kit.

Learn more about [Brand Kit](../../cs-docs/content-managers/brand-kit/about-brand-kit.md).

### Base URL

- AWS North America (AWS NA): https://brand-kits-api.contentstack.com
- AWS Europe (AWS EU): https://eu-brand-kits-api.contentstack.com
- AWS Australia (AWS AU): https://au-na-brand-kits-api.contentstack.com
- Azure North America (Azure NA): https://azure-na-brand-kits-api.contentstack.com
- Azure Europe (Azure EU): https://azure-eu-brand-kits-api.contentstack.com
- GCP North America (GCP NA): https://gcp-na-brand-kits-api.contentstack.com
- GCP Europe (GCP EU): https://gcp-eu-brand-kits-api.contentstack.com

### Authentication

Brand Kit uses token-based authentication. You can use the Authtoken along with the Organization UID to make API requests. Read more about the different [types of tokens](../../cs-docs/developers/create-tokens/types-of-tokens.md).

#### For Authtoken-based authentication

- Pass the user Authtoken against the authtoken parameter as header.
- Pass the OAuth Token value against the authorization parameter as header.
- Pass the Organization UID against the organization_uid parameter as header for performing CRUD operations on Brand Kits.
- Pass the Brand Kit UID against the brand_kit_uid parameter as header for performing CRUD operations on Voice Profiles.

#### How to Get Authtoken

To retrieve the authtoken, log in to your Contentstack account by using the [Log into your account](./content-management-api.md#logging-in-out) request under [User Session](./content-management-api.md#user-session). This request will return the authtoken in the response body.

You can generate multiple authtokens by executing the [Log into your account](./content-management-api.md#logging-in-out) request multiple times. These tokens do not have an expiration time limit. However, currently, there is a maximum limit of 20 valid tokens that a user can use per account at a time, to execute CMA requests.

**Note**: If you already have valid 20 tokens, creating a new authtoken will automatically cause the oldest authtoken to expire without warning.

For SSO-enabled organizations, the [Log into your account](./content-management-api.md#logging-in-out) request will not return the user authtoken for users who access the organization through Identity Provider login credentials. Consequently, any requests that require a user authtoken will not work. Only the owner of the organization and users with permission to access the Organization without SSO can use these APIs. Learn more about [REST API Usage](../../cs-docs/developers/single-sign-on/rest-api-usage.md).

### Rate Limiting

Rate limit is the maximum number of requests you can make using the Contentstack’s APIs in a given time period.

By default, the Brand Kit Management API enforces the following rate limits:

| API Request | Rate Limit |
| --- | --- |
| Brand Kit Read (GET) and Write (POST/PUT/DELETE) requests | 10 requests per second per organization |

Your application will receive the HTTP 429 response code if the requests for a given time period exceed the defined rate limits.

The aforementioned limits are configurable depending on your plan. For more information, contact our [Support](mailto:support@contentstack.com) team.

### API Conventions

- The base URL for Brand Kit API for different regions can be found in the Base URL section.
- The API version can be found in the URL, e.g. brand-kits-api.contentstack.com/v1/brand-kits
- Brand Kit Management API supports GET/POST/PUT/DELETE verbs or methods.
- URL paths are written in lower case.
- Query parameters and JSON fields use lower case, with underscores (_) separating words.
- The success/failure status of an operation is determined by the HTTP status it returns. Additional information is included in the HTTP response body.
- The JSON number type is bounded to a signed 32-bit integer.

### Errors

If there is something wrong with the API request, Contentstack returns an error.

Brand Kit uses conventional, standard HTTP status codes for errors, and returns a JSON body containing details about the error. In general, codes in the 2xx range signify success. The codes in the 4xx range indicate error, mainly due to information provided (for example, a required parameter or field was omitted). Lastly, codes in the 5xx range mean that there is something wrong with our servers; it is very rare though.

Let’s look at the error code and their meanings.

| HTTP status code | Description |
| --- | --- |
| 400 Bad Request | The request was incorrect or corrupted. |
| 401 Unauthorized User | The user is not authorized. |
| 403 Forbidden Error | The page or resource that is being accessed is forbidden. |
| 500 Internal Server Error | The server is malfunctioning and is not specific on what the problem is. |
| 502 Bad Gateway Error | A server received an invalid response from another server. |
| 504 Gateway Timeout Error | A server did not receive a timely response from another server that it was accessing while attempting to load the web page or fill another request by the browser. |

**Note:** The error codes that we get in the JSON response are not HTTP error codes but are custom Contentstack error codes that are used for internal purposes.

### Using Postman Collection

Contentstack offers you a Postman Collection that helps you try out our Brand Kit Management API. You can download this collection, connect to your Contentstack account, and try out the Brand Kit API with ease.

Learn more about [how to get started with using the Postman Collection](./brand-kit-management-api.md#postman-collection) for Brand Kit Management API.

## API Reference

### Brand Kit

[Brand Kit](../../cs-docs/content-managers/brand-kit/about-brand-kit.md) serves as a centralized repository for your organization's brand identity and guidelines, offering a comprehensive array of product details and overall brand persona. By using the API requests, you can create, view, update, and delete one or more Brand Kits.


#### Get All Brand Kits

#### Get All Brand Kits

**GET** `/v1/brand-kits?skip={skip}&limit={limit}&include_users={boolean}&include_count={boolean}&include_voice_profiles_count={boolean}&typeahead={string}`

The Get All Brand Kits request fetches the list of all the Brand Kits in an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

##### Query Parameters

- **skip** (optional)
  Enter the number of Brand Kits to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of Brand Kits to be returned.
  Default: `2`
- **include_users** (optional)
  The “include_users” parameter allows you to fetch users information.
  Default: `false`
- **include_count** (optional)
  The “include_count” parameter allows you to fetch the total count of the stacks owned by or shared with a user account.
  Default: `false`
- **include_voice_profiles_count** (optional)
  The “include_voice_profiles_count” parameter allows you to fetch the count of all voice profiles from a Brand Kit.
  Default: `false`
- **typeahead** (optional)
  The “typeahead” parameter retrieves responses that match the provided string.
  Default: `sample`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **api_key** (optional)
  Enter the API Key of the stack to retrieve the details of Brand Kits specifically associated with it.
  Default: `api_key_of_your_stack`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Response

```json
{
  "brand_kits": [
    {
      "uid": "cs***********0",
      "name": "AI Blogs",
      "description": "Brand Kit for AI related Blogs",
      "created_at": "2024-04-26T07:56:35.584Z",
      "created_by": "bl**************b",
      "updated_at": "2024-04-26T08:27:13.974Z",
      "updated_by": "bl**************b",
      "deleted_at": false,
      "api_keys": [
        "bl**************7",
        "bl**************5"
      ],
      "organization_uid": "bl***************9"
    }
  ]
}
```



#### Get a Single Brand Kit

#### Get a Single Brand Kit

**GET** `/v1/brand-kits/{brand_kit_uid}`

The Get a Single Brand Kit request fetches the details of a specific Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]  `

##### Sample Response

```json
{
  "brand_kit": {
    "uid": "cs***********40",
    "name": "AI Blogs",
    "description": "Brand Kit for AI related Blogs",
    "created_at": "2024-04-26T07:56:35.584Z",
    "created_by": "bl****************b",
    "updated_at": "2024-04-26T08:27:13.974Z",
    "updated_by": "bl****************b",
    "deleted_at": false,
    "api_keys": [
      "bl*************7",
      "bl*************5"
    ],
    "organization_uid": "bl**************9"
  }
}
```



#### Create Brand Kit

#### Create Brand Kit

**POST** `/v1/brand-kits`

The Create Brand Kit request lets you create a new Brand Kit in the specified organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for creating a new Brand Kit:

```
{
  "brand_kit": {
    "name": "Sample Brand Kit",
    "description": "This is a sample Brand Kit created for testing",
    "api_keys": [
      "bxxxxxxxxxxxx9",
	"bxxxxxxxxxxxx9"
    ]
  }
}
```

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Request

```json
{
  "brand_kit": {
    "name": "Test Brand Kit",
    "description": "Brand Kit for testing",
    "api_keys": [
      "xxxxxxxxxxxx"
    ]
  }
}
```

##### Sample Response

```json
{
  "message": "Brand Kit created successfully",
  "brand_kit": {
    "uid": "cs4**********0",
    "name": "Test Brand Kit",
    "description": "Brand Kit for testing",
    "created_at": "2024-05-09T13:17:15.200Z",
    "created_by": "bxxxxxxxxxxxxb",
    "updated_at": "2024-05-09T13:17:15.200Z",
    "updated_by": "bxxxxxxxxxxxxb",
    "deleted_at": false,
    "api_keys": [
      "xxxxxxxxxxxx"
    ],
    "organization_uid": "bxxxxxxxxxxxx9"
  }
}
```



#### Update Brand Kit

#### Update Brand Kit

**PUT** `/v1/brand-kits/{brand_kit_uid}`

The Update Brand Kit request lets you update an existing Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body that you can use to update a Brand Kit:

```
{
  "brand_kit": {
    "name": "Sample Brand Kit",
    "description": "This is the updated description for Sample Brand Kit",
    "api_keys": [
      "bxxxxxxxxxxxx9"
    ]
  }
}
```

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Request

```json
{
  "brand_kit": {
  	"name": "Sample Brand Kit",
  	"description": "This is the updated description for Sample Brand Kit",
  "api_keys": [
    "b**********9"
  ]
}
}
```

##### Sample Response

```json
{
  "message": "Brand Kit updated successfully",
  "brand_kit": {
    "uid": "cs************0",
    "name": "Sample Brand Kit",
    "description": "This is the updated description for Sample Brand Kit",
    "created_at": "2024-05-09T13:17:15.200Z",
    "created_by": "bl**************b",
    "updated_at": "2024-05-09T13:17:15.200Z",
    "updated_by": "bl**************b",
    "deleted_at": false,
    "api_keys": [
      "b**********9",
      "b**********9"
    ],
    "organization_uid": "bl************9"
  }
}
```



#### Delete Brand Kit

#### Delete Brand Kit

**DELETE** `/v1/brand-kits/{brand_kit_uid}`

The Delete Brand Kit request lets you delete an existing Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Response

```json
{
  "message": "Brand Kit deleted successfully"
}
```


### Voice Profile

[Voice Profiles](../../cs-docs/content-managers/brand-kit/about-voice-profile.md) allows you to define unique AI-generated brand voices that you can apply to your content. By using the API requests, you can create, view, update, and delete the Voice Profile in a Brand Kit.


#### Get All Voice Profiles

#### Get All Voice Profiles

**GET** `/v1/brand-kits/{brand_kit_uid}/voice-profiles?skip={index}&limit={limit}&include_users={boolean}&include_count={boolean}&typeahead={string}&sort={string}&order={string}`

The Get All Voice Profiles request fetches the list of all Voice Profiles in a Brand Kit within an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

##### Query Parameters

- **skip** (optional)
  Enter the number of Voice Profiles to be skipped from the response body.
  Default: `0`
- **limit** (optional)
  Enter the maximum number of Voice Profiles to be returned.
  Default: `2`
- **include_users** (optional)
  The “include_users” parameter allows you to fetch users information.
  Default: `true`
- **include_count** (optional)
  The “include_count” parameter allows you to fetch the total count of the stacks owned by or shared with a user account.
  Default: `true`
- **typeahead** (optional)
  The “typeahead” parameter retrieves responses that match the provided string.
  Default: `sample`
- **sort** (optional)
  Enter the value on the basis of which you want to sort your Voice Profiles. The voice profiles can be sorted by created_at, updated_at, and name values. The default value is updated_at.
  Default: `created_at`
- **order** (optional)
  Specify how you want to order your Voice Profiles; asc for ascending order and desc for descending order. The default value is desc.
  Default: `asc`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]  `

##### Sample Response

```json
{
    "voice_profile": {
        "brand_kit_uid": "cs***************0",
        "uid": "cs***************d",
        "name": "Test Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
                "formality_level": 4,
                "tone": 3,
                "humor_level": 2,
                "complexity_level": 1
          },
        "created_at": "2024-05-13T15:59:02.987Z",
        "created_by": "bl***************b",
        "updated_at": "2024-05-13T15:59:02.987Z",
        "updated_by": "bl***************b",
        "deleted_at": false
    }
}
```



#### Get a Single Voice Profile

#### Get a Single Voice Profile

**GET** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}?include_users={boolean}`

The Get a Single Voice Profile request fetches the specific Voice Profile from a Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **voice_profile_uid** (required)
  Enter the Voice Profile UID.
  Default: `your_voice_profile_uid`

##### Query Parameters

- **include_users** (optional)
  The “include_users” parameter allows you to fetch users information.
  Default: `true`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Response

```json
{
    "voice_profile": {
        "brand_kit_uid": "cs***************0",
        "uid": "cs***************d",
        "name": "Test Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
                "formality_level": 4,
                "tone": 3,
                "humor_level": 2,
                "complexity_level": 1
          },
        "created_at": "2024-05-13T15:59:02.987Z",
        "created_by": "bl***************b",
        "updated_at": "2024-05-13T15:59:02.987Z",
        "updated_by": "bl***************b",
        "deleted_at": false
    }
}
```



#### Create Voice Profile

#### Create Voice Profile

**POST** `/v1/brand-kits/{brand_kit_uid}/voice-profiles`

The Create Voice Profile request lets you create a new Voice Profile in a Brand Kit within an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for creating a new Voice Profile:

```
{
    "voice_profile": {
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        }
    }
}
```

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Request

```json
{
    "voice_profile": {
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        }
    }
}
```

##### Sample Response

```json
{
    "message": "Voice Profile created successfully",
    "voice_profile": {
        "brand_kit_uid": "cs*************4d",
        "uid": "cs*************49",
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        },
        "created_at": "2024-06-06T12:18:18.619Z",
        "created_by": "bl*************5b",
        "updated_at": "2024-06-06T12:18:18.619Z",
        "updated_by": "bl*************5b",
        "deleted_at": false
    }
}
```



#### Update Voice Profile

#### Update Voice Profile

**PUT** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

The Update Voice Profile request lets you update an existing Voice Profile from the Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for updating a Voice Profile:

```
{
    "voice_profile":{
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        }
    }
}
```

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **voice_profile_uid** (required)
  Enter the Voice Profile UID.
  Default: `your_voice_profile_uid`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Request

```json
{
    "voice_profile":{
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        }
    }
}
```

##### Sample Response

```json
{
    "message": "Voice Profile updated successfully",
    "voice_profile": {
        "brand_kit_uid": "cs***************0",
        "uid": "cs*************d",
        "name": "Test Voice Profile",
        "description": "Test Brand Kit Description",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        },
"created_at": "2024-05-13T15:59:02.987Z",
        "created_by": "bl*************b",
        "updated_at": "2024-05-13T16:25:55.803Z",
        "updated_by": "bl*************b",
        "deleted_at": false,
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content"
    }
}
```



#### Delete Voice Profile

#### Delete Voice Profile

**DELETE** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

The Delete Voice Profile request lets you delete an existing Voice Profile from the Brand Kits in an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **voice_profile_uid** (required)
  Enter the Voice Profile UID.
  Default: `your_voice_profile_uid`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Response

```json
{
  "message": "Voice Profile deleted successfully"
}
```


### Custom Credentials (LLM) Configuration

Custom Credentials (LLM) Configuration allows you to integrate your own Large Language Model (LLM) credentials instead of using Contentstack’s default API settings. By using custom credentials, you can specify details such as the API provider, model type, and other required fields, enabling a personalized setup that aligns with your specific requirements.


#### Get Custom Credentials

#### Get Custom Credentials

**GET** `/v1/brand-kits/{brand_kit_uid}/llm-configs?include_decrypted_keys={boolean}`

The Get Custom Credentials request fetches the custom credentials from a Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

##### Query Parameters

- **include_decrypted_keys** (optional)
  The “include_decrypted_keys” parameter allows you to fetch LLM Configuration details in encrypted format when set to true.
  Default: `true`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Response

```json
{
    "llm_config": {
        "_id": "672b04a6e3d93d9a8269741f",
        "deleted_at": false,
        "organization_uid": "blt53d0371e00331654",
        "uid": "cse56a3c0b2a7a4d",
        "__v": 0,
        "created_at": "2024-11-06T05:54:46.838Z",
        "deleted_by": false,
        "mode": 1,
        "updated_at": "2024-11-08T07:26:41.370Z",
        "updated_by": "blt520e013f9bbe3976",
        "config": {
            "model": "gpt-4o-mini",
            "provider": "openai",
            "decrypted_keys": {
                "api_key": "Key-XXXXXXXXXXXXXX"
            }
        }
    }
}
```



#### Set Custom Credentials

#### Set Custom Credentials

**PUT** `/v1/brand-kits/{brand_kit_uid}/llm-configs`

The Set Custom Credentials request lets you configure the custom API credentials for Brand Kit.

To configure the permissions for your application via [OAuth](../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for configuring the Brand Kit using **OpenAI** API provider:

```
{
    "include_decrypted_keys": true,
    "llm_config": {
        "mode": 1,
        "config": {
            "provider": "openai",
            "keys": {
                "api_key": "Key-XXXXXXXXXXXXXX"
            },
            "model": "gpt-4o-mini"
        }
    }
}
```

##### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

##### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](./brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

##### Sample Request

```json
{
    "include_decrypted_keys": true,
    "llm_config": {
        "mode": 1,
        "config": {
            "provider": "openai",
            "keys": {
                "api_key": "Key-XXXXXXXXXXXXXX"
            },
            "model": "gpt-4o-mini"
        }
    }
}
```

##### Sample Response

```json
{
    "message": "llm config updated successfully",
    "llm_config": {
        "_id": "672b04a6e3d93d9a8269741f",
        "deleted_at": false,
        "organization_uid": "blt53d0371e00331654",
        "uid": "cse56a3c0b2a7a4d",
        "__v": 0,
        "created_at": "2024-11-06T05:54:46.838Z",
        "deleted_by": false,
        "mode": 1,
        "updated_at": "2024-11-08T07:26:41.370Z",
        "updated_by": "blt520e013f9bbe3976",
        "config": {
            "model": "gpt-4o-mini",
            "provider": "openai",
            "decrypted_keys": {
                "api_key": "Key-XXXXXXXXXXXXXX"
            }
        }
    }
}
```


## Postman Collection

### About Brand Kit Postman Collection

The Brand Kit Postman collection is a set of preconfigured REST API requests that will make it easy for you to get started with the [Contentstack APIs](/docs/developers/apis/) and try out our API requests through the popular [Postman](https://www.getpostman.com/) REST client.

### Install Postman

To use the Brand Kit Postman collection you will need to have the [Postman](https://www.postman.com/downloads/). You can either download the **Desktop app**or use **Postman for Web**.

**Note:** If you have already installed Postman for your device, go to the [Download Latest Postman Collection for Brand Kit](#download-latest-collection) section.

Postman is available for [Windows (x32)](https://dl.pstmn.io/download/latest/win32), [Windows (x64)](https://dl.pstmn.io/download/latest/win64), Mac ([Intel Chip](https://dl.pstmn.io/download/latest/osx_64) / [Apple Chip](https://dl.pstmn.io/download/latest/osx_arm64)), and [Linux](https://dl.pstmn.io/download/latest/linux64) environments.

### Download Latest Collection

Once you have installed Postman on your device, click the **Run in Postman** button to start working with the Brand Kit Management API endpoints for Contentstack.

**Note:** The Brand Kit Postman collection does not support the now deprecated Postman Chrome extension. Make sure you have installed the latest version of the [Postman desktop app](https://www.postman.com/downloads/).

This opens the **Fork collection into your workspace** modal from where you can proceed to download/work with the Brand Kit Postman collection in the following three ways:

- View the Collection
- Import a Copy of the Collection
- Fork the Collection
- Download Collection from GitHub Page

Let’s look at each of the above methods in detail.

#### View the Collection

This option allows you to just view (and not try out) the API requests of the Postman collection.

Perform the following steps to view the Brand Kit Management API Postman collection:

1. Click the View collection link in the Fork collection into your workspace modal.A new tab opens up in your browser where you should see the latest collection preloaded in the left navigation.Note: If you want to try out the API requests, you can either import a copy of the collection or fork the collection.

#### Import a Copy of the Collection

This option allows you to import a copy of the collection into your workspace.

To import the Brand Kit Management API collection, perform the following steps:

1. Click the import a copy link in the Fork collection into your workspace modal.
2. In the resulting Import Collection modal within the Postman app, select a workspace and click Import to import the latest Postman collection into your selected workspace.
3. You will see a copy of the latest Postman collection in the left navigation panel.

#### Fork the Collection

This option allows you to fork, or create a copy of the collection, and perform changes to the collection without affecting the original.

To fork the Brand Kit Management API collection, perform the following steps:

1. Click the Fork Collection button in the Fork collection into your workspace modal.
2. This opens the Sign In page. You can either enter your login credentials and click Sign in, or sign in using your Google account or via SSO.
3. In the resulting Fork collection modal, if needed, enter a Fork label that lets you uniquely identify your collection and select a Workspace.
4. Under Notifications, check Watch original collection to get notified of any changes that are made to the original collection.
5. Once done, click Fork Collection to fork the Postman collection into your selected workspace.

#### Download Collection from GitHub Page

We have also hosted our Postman collection on GitHub. You can follow the steps mentioned in the Readme file to download and start using it.

You can also choose to watch the latest Postman collection to get notifications of new releases or updates.

To do so, click the following **Watch**button and select **Watching**.

### Configure Environment Variables

When you download and install the latest version of the Brand Kit Management API Postman Collection, you also download and import the respective environment along with the environment variables.

Once your Environment is imported, next you need to set your Brand Kit account specific values.

**Note:** As these environment variables are referenced across multiple API requests, once you set the variables, it becomes a lot more convenient to make repeated use of the Postman Collection.

Some of the important variables that you need to set are as follows:

  
    

| Environment Variable | Value |
| --- | --- |
| base_url | https://ai.contentstack.com/brand-kits |
| brand_kit_uid | your_brand_kit_uid |
| authtoken | your_authtoken |

  

**Note:** The Brand Kit Postman Collection will require a valid Authtoken to make API calls. Check out the [Authentication](./brand-kit-management-api.md#authentication) section for more details.

If you want to add your own environment variables, you can follow the procedure in the next section.

#### Add Other Environment Variables

To add any new environment variables for your Postman collection, perform the following steps:

1. Identify the environment variables that you want to define.
2. In the top right corner of Postman, click on the environment's dropdown and select Brand Kit Management API - Environment.
3. Click the "eye" icon present in the top right corner of Postman. It opens up in the environment variables modal. Click Edit to make changes in the variables.
4. In the VARIABLE field, enter the name of the environment variable. In the INITIAL VALUE field, enter your Brand Kit-account-specific value that will replace the variable when the call is made.
5. Once you have defined your variables, click Save.

#### Update Environment Variables

With every new API request added, we update our environment file. So, to get the latest environment variables, you need to download the collection along with the updated environment file again, compare your existing environment with the latest environment, identify and add the new variables to your existing environment.

Next, let’s see how you can run API Requests from your Brand Kit Postman collection using your environment.

### Make an API Request

With the Brand Kit Postman Collection loaded into the Postman app (on the left panel) and the environment created, you can now make API requests to the Brand Kit Management API via Postman.

To make an API request, perform the following steps:

1. Select the respective environment, Brand Kit Management API - Environment, from the dropdown.
2. Select an API Request from the Brand Kit Postman Collection. In this example, we will use the Get all projects request which is a part of the Projects folder.
    Note: If you want to make changes to your parameters or want to add parameters of your own, you can do it here.
3. Next, click Send at the top right to make the API request.The API call should return with a response under the Body tab in the bottom half of the screen.

### Secure Organization UID and Tokens

We strongly advise against storing your Organization UID and authtokens in your collection permanently. If you or someone else shares the collection by mistake, other users will be able to export it along with these keys.

We recommend that you provide your Brand Kit account-specific Organization UID and tokens in your environment or directly to the sample requests.

#### Users using Authtoken

For users who use authtoken to authenticate their calls, when you make the **Log in to your account** API Request, your authtoken will be saved in cookies.

If you want to prevent this action, perform the steps given below:

1. Click Cookies on the far right corner.
2. In the Cookies modal under the Manage Cookies tab, click the Domains Allowlist at the bottom left.
3. Add ai.contentstack.com/brand-kits and click Add.

This will allow you to access [cookies of this domain in scripts](https://learning.postman.com/docs/sending-requests/cookies/#accessing-cookies-in-scripts) programmatically.

**Note:** To avoid this situation, we recommend you to use the Brand Kit UID along with the Authtoken to make valid Brand Kit Management API requests. For more information, refer to [Authentication](./brand-kit-management-api.md#authentication).

### Postman Collection Updates

We keep our Postman Collection updated. To get the latest version of our Postman Collection, all you need to do is to [download the Postman Collection along with the updated environment](./brand-kit-management-api.md#download-latest-collection) again and you are good to go.

You can also choose to watch for the latest Postman Collection updates on our GitHub repository and get notifications of new releases or updates to the repository. The GitHub Readme doc will help you with the steps that you need to follow.

## Regions


| Region | Host |
|--------|------|

| North America | https://brand-kits-api.contentstack.com |

| Europe | https://eu-brand-kits-api.contentstack.com |

| AWS - Australia | https://au-brand-kits-api.contentstack.com |

| Azure - North America | https://azure-na-brand-kits-api.contentstack.com |

| Azure - Europe | https://azure-eu-brand-kits-api.contentstack.com |

| GCP - North America | https://gcp-na-brand-kits-api.contentstack.com |

| GCP - Europe | https://gcp-eu-brand-kits-api.contentstack.com |
