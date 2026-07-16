---
title: "Create an entry with embedded assets in RTE"
description: POST /content_types/{content_type_uid}/entries?locale={locale_code}
url: developer-apis/content-management-api-requests/create-an-entry-with-embedded-assets-in-rte
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-04
---

# Create an entry with embedded assets in RTE

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with embedded RTE assets request allows you to embed assets inside the Rich Text Editor field while creating a new entry for the selected content type.

**Note**: Within a single Rich Text Editor field, you can embed a maximum of **100 components**, entries and assets combined.

When executing the API request, in the 'Body' section, you need to provide the content of your entry based on the content type created.  
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

If your entry contains a Rich Text Editor field, you can embed assets inside the Rich Text as downloadable or display images within the rich text.

**Note**: Only the Rich Text Editor fields of type Custom and Advanced support embedded objects. You cannot embed entries and/or assets inside a Basic editor.

Since we refer to an embedded asset as a separate HTML element, you need to wrap the asset component inside the <div> HTML tag. To refer to the asset of your choice and define what embedded style you prefer, specify the following attributes:

- class: To specify a class name for the HTML element (embedded asset)
- data-sys-asset-uid: To specify the unique ID of the asset that you want to embed inside the editor
- sys-style-type: You can pass display or download to specify whether the embedded asset should be downloadable or act as a display image
- type: To specify the type of object embedded inside the rich text, e.g., asset

**Tip**: An embedded asset works exactly like the [Reference](../../../../../cs-docs/developers/create-content-types/reference.md) field. When you update the details of an embedded asset or replace the source asset with another asset, the Rich Text Editor automatically updates the embedded HTML component with the latest version of that asset.

Here’s a sample of rich text that contains embedded assets:

```
"rich_text_editor": "

Embedded asset as display image:

Embedded asset as downloadable image:

"
```

**Note**: Contentstack’s [SDKs](/docs/developers/sdks/) help consume the response returned when you create an entry containing embedded objects. You can then render the embedded assets on the frontend whenever required.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type for which you want to create an entry. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`

## Query Parameters

- **locale_code** (optional)
  Enter the code of the language in the which you want to create the entry.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

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

