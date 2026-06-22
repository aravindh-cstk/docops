---
title: "Create an entry with embedded entries in RTE"
description: POST /content_types/{content_type_uid}/entries?locale={locale_code}
url: developers/apis/content-management-api/requests/create-an-entry-with-embedded-entries-in-rte
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-01
---

# Create an entry with embedded entries in RTE


**Method:** `POST`  
**Endpoint:** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with embedded RTE entries request allows you to embed entries inside the Rich Text Editor field while creating a new entry for the selected content type.

**Note**: Within a single Rich Text Editor field, you can embed a **maximum of 100**components, entries and assets combined.

When executing the API request, in the 'Body' section, you need to provide the content of your entry based on the fields present within the content type created.  
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

If your entry contains a Rich Text Editor field, you can embed entry/entries of the same or other content types inside the field as HTML components. These embedded entries can be added inline within the flow of content; as a separate content block; or as a dynamic hyperlink within the rich text.

**Note**: Only the Rich Text Editor fields of type Custom and Advanced support embedded objects. You cannot embed entries and/or assets inside a Basic editor.

Since we refer to an embedded entry as a separate HTML element, you need to wrap the entry component inside the <div> HTML tag. To refer to the entry of your choice and define what embedded style you prefer, specify the following attributes:

- class: To specify a class name for the HTML element (embedded entry)
- data-sys-entry-uid: To specify the unique ID of the entry that you want to embed inside the editor
- data-sys-entry-locale: To specify the locale code for the language in which the selected entry is localized
- data-sys-content-type-uid: To specify the unique ID of the content type to which the embedded entry belongs
- sys-style-type: You can pass inline, block, or link to specify how you want to embed the entry within the text
- type: To specify the type of object embedded inside the rich text, e.g., entry

Here’s a sample of rich text that contains embedded entries:

```
"rich_text_editor": "

Embedded entry as block:

Embedded entry inline with text:

Embedded entry as link:

"
```

The above Rich Text Editor contains entries embedded as a separate content block; within the flow of text; and as a hyperlink to another Contentstack entry.

**Note**: Contentstack’s [SDKs](/docs/developers/#platforms-and-sdks) help consume the response returned when you create an entry containing embedded objects. You can then decide what content (fields of the embedded entry, for instance) should be rendered on the frontend.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of your stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| branch | main | Enter your branch unique ID. |

| content_type_uid | your_content_type_uid | Enter the unique ID of the content type for which you want to create an entry. The uid is generated based on the title of the content type. The unique ID of a c |

| locale_code | en-us | Enter the code of the language in the which you want to create the entry. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
	"entry": {
		"title": "test entry",
		"url": "/test-entry",
		"rich_text_editor": "<p>Embedded entry as block:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"block\" type=\"entry\"></div><p>Embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltc2bcca1a99a89261\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div><p>Embedded entry as link:</p><a class='embedded-entry' data-sys-entry-uid='blt36e18c7c05db737b' data-sys-entry-locale='en-us' data-sys-content-type-uid='sample_content_type' sys-style-type='link' type='entry'></a>",
		"tags": []
	}
}
```

**Response (201):**

```json
{
	"notice": "Entry created successfully.",
	"entry": {
		"title": "test entry",
		"url": "/test-entry",
		"rich_text_editor": "<p>Embedded entry as block:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"block\" type=\"entry\"></div><p>Embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltc2bcca1a99a89261\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div><p>Embedded entry as link:</p><a class='embedded-entry' data-sys-entry-uid='blt36e18c7c05db737b' data-sys-entry-locale='en-us' data-sys-content-type-uid='sample_content_type' sys-style-type='link' type='entry'></a>",
		"tags": [],
		"locale": "en-us",
		"uid": "blt29828a1df3f0c176",
		"created_by": "blt702565fb0d35107f",
		"updated_by": "blt702565fb0d35107f",
		"created_at": "2020-11-13T14:43:44.027Z",
		"updated_at": "2020-11-13T14:43:44.027Z",
		"ACL": {},
		"_version": 1,
		"_in_progress": false
	}
}
```
