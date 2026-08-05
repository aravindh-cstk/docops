---
title: "Import an entry"
description: /content_types/{content_type_uid}/entries/import?locale={locale_code}&overwrite={overwrite}
url: /import-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.848Z
updated_at: 2024-03-21T13:05:53.704Z
---

# Import an entry

<p>The <span data-type='inlineCode'>Import an entry</span> call is used to import an entry. To import an entry, you need to upload a JSON file that has entry data in the format that fits the schema of the content type it is being imported to. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span><span data-type='inlineCode'>cm.entries:import</span></span> scope.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/import?locale={locale_code}&overwrite={overwrite}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language to import the entry of that particular language.</p>
- **overwrite** (optional)
  <p>Select 'true' to replace an existing entry with the imported entry file.</p>
- **inclue_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of stack of which you wish to retrieve the content types.</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

