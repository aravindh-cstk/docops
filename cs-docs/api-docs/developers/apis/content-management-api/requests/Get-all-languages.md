---
title: "Get all languages"
description: GET /locales?include_count={boolean_value}
url: developers/apis/content-management-api/requests/get-all-languages
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Get all languages


**Method:** `GET`  
**Endpoint:** `/locales?include_count={boolean_value}`

This call fetches the list of all languages (along with the language codes) available for a stack.

To configure the permissions for your application via OAuth, please include the cm.languages.management:read scope.  
When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](/docs/developers/apis/content-delivery-api#queries) section of the Content Delivery API doc.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| include_count | false | Set this parameter to 'true' to include in response the total count of languages added to your stack. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

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
