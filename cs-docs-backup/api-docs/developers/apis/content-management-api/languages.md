---
title: "CMA | Languages"
description: Create, update, fetch, and manage languages and locales for localized Contentstack content.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/languages
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Languages

Contentstack has a sophisticated multilingual capability. It allows you to create and publish entries in any language. This feature allows you to set up multilingual websites and cater to a wide variety of audience by serving content in their local language(s).

Read more about [Languages](/docs/developers/multilingual-content).

You can now pass the branch header in the API request to fetch or manage modules located within specific branches of the stack. Additionally, you can also set the include_branch query parameter to true to include the _branch top-level key in the response. This key specifies the unique ID of the branch where the concerned Contentstack module resides.

## Language Collection (Locales)

### Get all languages

**GET** `/locales?include_count={boolean_value}`

This call fetches the list of all languages (along with the language codes) available for a stack.

To configure the permissions for your application via OAuth, please include the cm.languages.management:read scope.  
When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](../../../api-detail/content-delivery-api.md#queries) section of the Content Delivery API doc.

#### Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total count of languages added to your stack.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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


### Add a language

**POST** `/locales`

This call lets you add a new language to your stack. You can either add a [supported language](../../../../cs-docs/developers/multilingual-content/supported-languages.md) or a [custom language](../../../../cs-docs/developers/multilingual-content/add-a-custom-language.md) of your choice.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, enter the language name and code in JSON format. You can also specify the fallback language you want to assign to the new language within the same JSON.

**Warning**: Once generated, you cannot modify a custom language code. However, you can update the language name and fallback language if required.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `false`

#### Sample Request

```json
{
  "locale":{
    "name":"Arabic - Bahrain",
    "code":"ar-bh",
    "fallback_locale":"en-us"
  }
}
```

#### Sample Response

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


### Get a language

**GET** `/locales/{code}`

The Get a language call returns information about a specific language available on the stack.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:read scope.

#### URL Parameters

- **code** (required)
  Enter the code of the language that you want to retrieve.
  Default: `fr-fr`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

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


### Update language

**PUT** `/locales/{code}`

The Update language call will let you update the details (such as display name) and the fallback language of an existing language of your stack.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

In the 'Body' section, enter the updated details of your language name and fallback language in JSON format.

#### URL Parameters

- **code** (required)
  Enter the code of the language that you wish to update.
  Default: `your_language_code`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "locale":{
    "name":"Updated Locale Name",
    "fallback_locale":"zh-cn"
  }
}
```

#### Sample Response

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


### Delete language

**DELETE** `/locales/{code}`

The Delete language call deletes an existing language from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

#### URL Parameters

- **code** (required)
  Enter the code of the language that you wish to delete.
  Default: `fr-fr`

#### Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Response

```json
{
  "notice": "Language removed successfully."
}
```




## Fallback Languages

Language fallback allows entries created in a particular language to initially inherit data from the fallback language instead of directly inheriting content from the master language. For more information, refer the documentation for [Fallback Language](../../../../cs-docs/developers/multilingual-content/about-fallback-languages.md).

### Set a fallback language

**POST** `/locales`

The Set a fallback language request allows you to assign a fallback language for an entry in a particular language.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.

In the 'Body' section, enter the language codes in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

**Note**: The language set as a fallback language will always inherit data from the master language if it does not have localized content.

#### Query Parameters

- **include_language** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

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
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "locale": {
    "name": "German - German",
    "code": "de-de",
    "fallback_locale": "de-en"
  }
}
```

#### Sample Response

```json
{
  "locale": {
    "name": "German - German",
    "code": "de-de",
    "fallback_locale": "de-en"
  }
}
```


### Update fallback language

**PUT** `/locales/{locale_uid}`

The Update fallback language request allows you to update the fallback language for an existing language of your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging in to your account.

In the 'Body' section, enter the updated details of the fallback language in JSON format.  
To configure the permissions for your application via OAuth, please include the cm.languages.management:write scope.

**Note**: The language set as a fallback language will always inherit data from the master language if it does not have localized content.

#### URL Parameters

- **locale_code** (required)
  Enter the language code of the language that you want to assign as a fallback language for an existing language of your stack.
  Default: `zh-cn`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

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
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

#### Sample Request

```json
{
  "locale": {
    "name": "German",
    "code": "de",
    "fallback_locale": "en-us"
      }
}
```

#### Sample Response

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

