---
title: "Create an entry"
description: /content_types/{content_type_uid}/entries?locale={locale_code}
url: /create-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.090Z
updated_at: 2026-07-20T18:19:42.333Z
---

# Create an entry

<p>The <span data-type='inlineCode'>Create an entry</span> call creates a new&nbsp;entry for the selected content type.</p><p><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth,&nbsp;</span>please include the&nbsp;<span><span data-type='inlineCode'>cm.entries.management:write</span>&nbsp;</span>scope.<br />When executing the API call, in the&nbsp;'Body' section, you need to provide the content of your entry based on the content type created.</p><p>Here are some important scenarios when creating an entry.</p><p><strong>Scenario 1:</strong> If you have a reference field in your content type, here's the format you need to follow to add the data in the ‘Body’ section</p><pre>{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "reference_field_uid": [{
            "uid": "blt111000d1e110b001",
            "_content_type_uid": "referred_content_type_uid"
        }]
    }
}</pre><p><strong>Scenario 2:</strong> If you need to create an entry that contains asset files, you need to provide the asset UID(s) in the ‘Body’ section.</p><p>To add a single file, enter a single UID (<span data-type='inlineCode'>file_field_uid</span>). For multiple asset files, enter the asset files’ UIDs (<span data-type='inlineCode'>file_field_uid_multiple</span>) in an array. You need to use only one of the following formats.</p><p>Here's the JSON schema for both the cases:</p><pre>{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "file_field_uid": "asset_uid", // ‘File’ field marked ‘Single’
        "file_field_uid_multiple": ["asset_uid1", "asset_uid2, ..."], // ‘File’ field marked ‘Multiple’
    }
}
</pre><p><strong>Scenario 3:</strong> If you need to add your asset file within a Rich Text Editor, use the following JSON schema:</p><pre>{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "rte_field_uid": "&lt;p&gt;&lt;img src=\"asset_URL\" data-sys-asset-uid=\"blt111000e1c110b011" alt=\"alternative_text\"&gt;&lt;/p&gt;"
    }
}
</pre><p class="note"><strong>Note</strong>: In the above code, in place of rte-field-uid, you need to provide the UID of the Rich Text Editor field.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale_code}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.</p>

## Query Parameters

- **locale** (required)
  <p>Enter the code of the language in which you want your entry to be localized in.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"entry": {
		"title": "example",
		"url": "/example"
	}
}
```

## Response

```json
{
	"notice": "Entry created successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"locale": "en-us",
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
                "_in_progress": true
	}
}
```

