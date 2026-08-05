---
title: "Export an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/export?locale={locale_code}
url: /export-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.904Z
updated_at: 2024-03-21T13:05:15.197Z
---

# Export an entry

<p>The <span data-type='inlineCode'>Export an entry</span> call is used to export an entry. The exported entry data is saved in a downloadable JSON file.The exported file won’t get downloaded automatically. To download the exported file, a <strong>REST API</strong> client, such as <strong>Postman</strong> can be used. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span><span data-type='inlineCode'>cm.entries:export</span></span> scope.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/export?locale={locale_code}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.</p>
- **entry_uid** (required)
  <p><br></p><p>Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language to unlocalize the entry of that particular language.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

