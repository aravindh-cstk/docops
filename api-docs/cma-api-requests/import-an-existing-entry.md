---
title: "Import an existing entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/import?locale={locale}&overwrite={overwrite}
url: /import-an-existing-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.846Z
updated_at: 2024-03-21T13:06:30.957Z
---

# Import an existing entry

<p>The <span data-type='inlineCode'>Import an existing entry</span> call will import a new version of an existing entry. You can create multiple versions of an entry. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span><span data-type='inlineCode'>cm.entries:import</span></span> scope.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/import?locale={locale}&overwrite={overwrite}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of an entry that you wish to import. <strong>Note:</strong> In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language to import the entry of that particular language.</p>
- **overwrite** (optional)
  <p>Select 'true' to replace an existing entry with the imported entry file.</p>
- **include_branch** (optional)
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
		"_version": 2,
		"tags": [],
		"_in_progress": false
	}
}
```

