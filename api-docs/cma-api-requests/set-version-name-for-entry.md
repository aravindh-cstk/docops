---
title: "Set Version Name for Entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name
url: /set-version-name-for-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.160Z
updated_at: 2026-07-20T18:25:58.067Z
---

# Set Version Name for Entry

<p>The <span data-type='inlineCode'>Set Version Name for Entry</span> request allows you to assign a name to a specific version of an entry.</p><p>In the request body, you need to specify the version name to be assigned and the locale of the entry.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.entry:write</span> scope.</p><p class="tip"><strong>Tip</strong>: You can add an additional parameter <span data-type='inlineCode'>force:true</span> to force update the version name of the master entry.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the content type UID of the entry version to which you want to assign a specific name.</p>
- **entry_uid** (required)
  <p>Enter the UID of the entry to which you want to assign a specific version name.</p>
- **version_number** (required)
  <p>Enter the version number of the entry to which you want to assign a name.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"entry": {
		"_version_name": "Test version",
		"locale": "fr-fr",
		"force": true
	}
}
```

## Response

```json
{
	"notice": "Version name assigned successfully"
}
```

