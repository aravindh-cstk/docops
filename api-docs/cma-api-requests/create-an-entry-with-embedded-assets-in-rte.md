---
title: "Create an entry with embedded assets in RTE"
description: /content_types/{content_type_uid}/entries?locale={locale_code}
url: /create-an-entry-with-embedded-assets-in-rte
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:28.398Z
updated_at: 2025-07-04T05:41:39.791Z
---

# Create an entry with embedded assets in RTE

<p>The <span data-type='inlineCode'>Create an entry with embedded RTE assets</span> request allows you to embed assets inside the Rich Text Editor field while creating a new entry for the selected content type.</p><p class="note"><strong>Note</strong>: Within a single Rich Text Editor field, you can embed a maximum of <strong>100 components</strong>, entries and assets combined.</p><p>When executing the API request, in the 'Body' section, you need to provide the content of your entry based on the content type created.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.entries.management:write</span> scope.</p><p>If your entry contains a Rich Text Editor field, you can embed assets inside the Rich Text as downloadable or display images within the rich text.</p><p class="note"><strong>Note</strong>: Only the Rich Text Editor fields of type Custom and Advanced support embedded objects. You cannot embed entries and/or assets inside a Basic editor.</p><p>Since we refer to an embedded asset as a separate HTML element, you need to wrap the asset component inside the &lt;div&gt; HTML tag. To refer to the asset of your choice and define what embedded style you prefer, specify the following attributes:</p><ul><li><span data-type='inlineCode'>class</span>: To specify a class name for the HTML element (embedded asset)</li><li><span data-type='inlineCode'>data-sys-asset-uid</span>: To specify the unique ID of the asset that you want to embed inside the editor</li><li><span data-type='inlineCode'>sys-style-type</span>: You can pass display or download to specify whether the embedded asset should be downloadable or act as a display image</li><li><span data-type='inlineCode'>type</span>: To specify the type of object embedded inside the rich text, e.g., asset</li></ul><p class="tip"><strong>Tip</strong>: An embedded asset works exactly like the <a href="/docs/developers/create-content-types/reference" target="_self">Reference</a> field. When you update the details of an embedded asset or replace the source asset with another asset, the Rich Text Editor automatically updates the embedded HTML component with the latest version of that asset.</p><p>Here’s a sample of rich text that contains embedded assets:</p><pre>"rich_text_editor": "&lt;p&gt;Embedded asset as display image:&lt;/p&gt;&lt;img class=\"embedded-asset\" data-sys-asset-uid=\"blt8d49bb742bcf2c83\" type=\"asset\" sys-style-type=\"display\"&gt;&lt;/img&gt;&lt;p&gt;Embedded asset as downloadable image:&lt;/p&gt;&lt;img class=\"embedded-asset\" data-sys-asset-uid=\"bltb47f1aa5ae422cd1\" type=\"asset\" sys-style-type=\"download\"&gt;&lt;/img&gt;"
</pre><p class="note"><strong>Note</strong>: Contentstack’s <a href="/docs/developers/sdks/" target="_blank">SDKs</a> help consume the response returned when you create an entry containing embedded objects. You can then render the embedded assets on the frontend whenever required.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale_code}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  

<p>Enter the unique ID of the content type for which you want to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>
<p></p>
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
		"title": "sample entry",
		"url": "/sample-entry",
		"rich_text_editor": "<p>Embedded asset as display image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt8d49bb742bcf2c83\" type=\"asset\" sys-style-type=\"display\"></img><p>Embedded asset as downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"bltb47f1aa5ae422cd1\" type=\"asset\" sys-style-type=\"download\"></img>",
		"tags": []
	}
}
```

## Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "sample entry",
        "url": "/sample-entry",
        "rich_text_editor": "<p>Embedded asset as display image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt8d49bb742bcf2c83\" type=\"asset\" sys-style-type=\"display\"></img><p>Embedded asset as downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"bltb47f1aa5ae422cd1\" type=\"asset\" sys-style-type=\"download\"></img>",
        "tags": [],
        "locale": "en-us",
        "uid": "blt0cc9749011036398",
        "created_by": "blt702565fb0d35107f",
        "updated_by": "blt702565fb0d35107f",
        "created_at": "2020-11-13T15:18:25.887Z",
        "updated_at": "2020-11-13T15:18:25.887Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}

```

