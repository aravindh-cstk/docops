---
title: "Delete Version Name of Entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name
url: /delete-version-name-of-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:04.675Z
updated_at: 2024-03-21T13:02:05.713Z
---

# Delete Version Name of Entry

<p>The <span data-type='inlineCode'>Delete Version Name of Entry</span> request allows you to delete the name assigned to a specific version of an entry. This request resets the name of the entry version to the version number. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.entry:writ</span>e scope.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

**Method**: `DELETE`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the content type UID of the entry of which you want to delete the version name.</p>
- **entry_uid** (required)
  <p>Enter the UID of the entry of which you want to delete the version name.</p>
- **version_number** (required)
  <p>Enter the version number of the entry that you want to delete.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>

## Request Body

```json
{
	"entry": {
		"locale": "en-us"
	}
}
```

## Response

```json
{
	"notice": "Version name deleted successfully"
}
```

