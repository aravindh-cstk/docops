---
title: "Get all languages"
description: /locales?include_count={boolean_value}
url: /get-all-languages
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.753Z
updated_at: 2024-02-28T06:16:18.043Z
---

# Get all languages

<p>This call fetches the list of all languages (along with the language codes) available for a stack.</p><p><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.languages.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.<br /></span>When executing the API call, under the 'Header' section, you need to enter the authtoken that you receive after logging into your account.</p><p>You can add queries to extend the functionality of this API call. Under the <span data-type='inlineCode'>URL Parameters</span> section, insert a parameter named <span data-type='inlineCode'>query</span> and provide a query in JSON format as the value.</p><p>To learn more about the queries, refer to the <a href="/docs/developers/apis/content-delivery-api#queries">Queries</a> section of the Content Delivery API doc.<br /></p>

**API Endpoint**: `/locales?include_count={boolean_value}`

**Method**: `GET`

## Query Parameters

- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of languages added to your stack.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

