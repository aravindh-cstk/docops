---
title: "Update embedded RTE objects"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}
url: developers/apis/content-management-api/requests/update-embedded-rte-objects
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Update embedded RTE objects

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update embedded RTE objects request lets you update the embedded entries or assets placed inside the Rich Text Editor field of an entry.

In the 'Body' section, provide the updated Rich Text Editor information in JSON format.   
To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

**Tip**: You can either replace the embedded asset with another or change the style (downloadable or displayable) in which the asset has been embedded inside the editor.

Here’s a sample of updated Rich Text Editor content:

```
"rich_text_editor": "

Updated embedded asset to downloadable image:

Updated embedded entry inline with text:

"
```

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to update an entry. The uid is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry of which you want to update embedded objects.
  Default: `blt9965f5f9840923ba`

## Query Parameters

- **locale_code** (optional)
  Enter the code of the language of which you want to update an entry.
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
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
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
        "title": "example",
        "url": "/example",
        "rich_text_editor": "<p>Updated embedded asset to downloadable image:</p><img class=\"embedded-asset\" data-sys-asset-uid=\"blt120a5a04d91c9466\" type=\"asset\" sys-style-type=\"download\"></img><p>Updated embedded entry inline with text:</p><div class=\"embedded-entry\" data-sys-entry-uid=\"bltb6ea3a0ab9699748\" data-sys-entry-locale=\"en-us\" data-sys-content-type-uid=\"sample_content_type\" sys-style-type=\"inline\" type=\"entry\"></div>",
        "tags": []
    }
}
```

## Sample Response

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

