---
title: "Update embedded RTE objects"
description: /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}
url: /update-embedded-rte-objects
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.606Z
updated_at: 2024-03-21T12:59:38.717Z
---

# Update embedded RTE objects

<p>The <span data-type='inlineCode'>Update embedded RTE objects</span> request lets you update the embedded entries or assets placed inside the Rich Text Editor field of an entry.</p><p>In the 'Body' section, provide the updated Rich Text Editor information in JSON format. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.entries.management:write</span> scope.</p><p class="tip"><strong>Tip</strong>: You can either replace the embedded asset with another or change the style (downloadable or displayable) in which the asset has been embedded inside the editor.</p><p>Here’s a sample of updated Rich Text Editor content:</p><pre>"rich_text_editor": "&lt;p&gt;Updated embedded asset to downloadable image:&lt;/p&gt;&lt;img class=\"embedded-asset\" data-sys-asset-uid=\"blt120a5a04d91c9466\" type=\"asset\" sys-style-type=\"download\"&gt;&lt;/img&gt;&lt;p&gt;Updated embedded entry inline with text:&lt;/p&gt;&lt;div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"&gt;&lt;/div&gt;"</pre>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

**Method**: `PUT`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you want to update an entry. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry of which you want to update embedded objects.</p>

## Query Parameters

- **locale_code** (optional)
  <p></p>
<p>Enter the code of the language of which you want to update an entry.</p>
<p></p>
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
        "title": "example",
        "url": "/example",
        "rich_text_editor": "<p>Updated embedded asset to downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt120a5a04d91c9466\" type=\"asset\" sys-style-type=\"download\"></img><p>Updated embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div>",
        "tags": []
    }
}

```

## Response

```json
{
    "notice": "Entry updated successfully.",
    "entry": {
        "title": "example",
        "url": "/example",
        "rich_text_editor": "<p>Updated embedded asset to downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt120a5a04d91c9466\" type=\"asset\" sys-style-type=\"download\"></img><p>Updated embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div>",
        "tags": [],
        "locale": "en-us",
        "uid": "blt8fdd3f0a4313dece",
        "created_by": "blt702565fb0d35107f",
        "updated_by": "blt702565fb0d35107f",
        "created_at": "2020-11-13T17:03:18.470Z",
        "updated_at": "2020-11-13T17:58:43.300Z",
        "ACL": {},
        "_version": 2,
        "_in_progress": false
    }
}
```

