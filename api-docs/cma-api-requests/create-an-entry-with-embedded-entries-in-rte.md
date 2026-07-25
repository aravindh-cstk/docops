---
title: "Create an entry with embedded entries in RTE"
description: /content_types/{content_type_uid}/entries?locale={locale_code}
url: /create-an-entry-with-embedded-entries-in-rte
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:27.460Z
updated_at: 2025-07-01T05:11:26.321Z
---

# Create an entry with embedded entries in RTE

<p>The <span data-type='inlineCode'>Create an entry with embedded RTE entries</span> request allows you to embed entries inside the Rich Text Editor field while creating a new entry for the selected content type.</p><p class="note"><strong>Note</strong>: Within a single Rich Text Editor field, you can embed a <strong>maximum of 100 </strong>components, entries and assets combined.</p><p>When executing the API request, in the 'Body' section, you need to provide the content of your entry based on the fields present within the content type created.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.entries.management:write</span> scope.</p><p>If your entry contains a Rich Text Editor field, you can embed entry/entries of the same or other content types inside the field as HTML components. These embedded entries can be added inline within the flow of content; as a separate content block; or as a dynamic hyperlink within the rich text.</p><p class="note"><strong>Note</strong>: Only the Rich Text Editor fields of type Custom and Advanced support embedded objects. You cannot embed entries and/or assets inside a Basic editor.</p><p>Since we refer to an embedded entry as a separate HTML element, you need to wrap the entry component inside the <span data-type='inlineCode'>&lt;div&gt;</span> HTML tag. To refer to the entry of your choice and define what embedded style you prefer, specify the following attributes:</p><ul><li><span data-type='inlineCode'>class</span>: To specify a class name for the HTML element (embedded entry)</li><li><span data-type='inlineCode'>data-sys-entry-uid</span>: To specify the unique ID of the entry that you want to embed inside the editor</li><li><span data-type='inlineCode'>data-sys-entry-locale</span>: To specify the locale code for the language in which the selected entry is localized</li><li><span data-type='inlineCode'>data-sys-content-type-uid</span>: To specify the unique ID of the content type to which the embedded entry belongs</li><li><span data-type='inlineCode'>sys-style-type</span>: You can pass <span data-type='inlineCode'>inline</span>, <span data-type='inlineCode'>block</span>, or <span data-type='inlineCode'>link</span> to specify how you want to embed the entry within the text</li><li><span data-type='inlineCode'>type</span>: To specify the type of object embedded inside the rich text, e.g., <span data-type='inlineCode'>entry</span></li></ul><p>Here’s a sample of rich text that contains embedded entries:</p><pre>"rich_text_editor": "&lt;p&gt;Embedded entry as block:&lt;/p&gt;&lt;div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"block\" type=\"entry\"&gt;&lt;/div&gt;&lt;p&gt;Embedded entry inline with text:&lt;/p&gt;&lt;div class=\"embedded-entry\" data-sys-entry-uid=\"bltc2bcca1a99a89261\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"&gt;&lt;/div&gt;&lt;p&gt;Embedded entry as link:&lt;/p&gt;&lt;a class='embedded-entry' data-sys-entry-uid='blt36e18c7c05db737b' data-sys-entry-locale='en-us' data-sys-content-type-uid='sample_content_type' sys-style-type='link' type='entry'&gt;&lt;/a&gt;"<br /></pre><p>The above Rich Text Editor contains entries embedded as a separate content block; within the flow of text; and as a hyperlink to another Contentstack entry.</p><p class="note"><strong>Note</strong>: Contentstack’s <a href="/docs/developers/#platforms-and-sdks" target="_self">SDKs</a> help consume the response returned when you create an entry containing embedded objects. You can then decide what content (fields of the embedded entry, for instance) should be rendered on the frontend.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale_code}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p></p>
<p>Enter the unique ID of the content type for which you want to create an entry. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>
<p></p>

## Query Parameters

- **locale_code** (optional)
  <p>Enter the code of the language in the which you want to create the entry.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

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

## Response

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

