---
title: "Localize an entry"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}
url: developer-apis/content-management-api-requests/localize-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-06-30
---

# Localize an entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Localize an entry request allows you to localize an entry i.e., the entry will cease to fetch data from its fallback language and possess independent content specific to the selected locale.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the "Body" parameter, you need to provide the content of your entry based on the content type.

**Note**: When localizing an entry, if a **Group**, **Modular Blocks**, or **Global** field instance contains a field that is marked as non-localizable, you must include _metadata.uid for the field in the request payload to map that instance in child locale. This ensures that the non-localizable field retains its value from the master locale. You can find the metadata UID for each non-localizable field by using the [Get a Single Entry](../../../../api-detail/content-management-api.md#get-a-single-entry) request for the master entry.

Here's a sample request body:

```
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b"
                }
            }],
        "single_line":"Localizable single line textbox",
        "tags":[]
    }
}
```

**Note:** This request will only create the localized version of your entry and not publish it. To publish your localized entry, you need to use the [**Publish an entry**](../../../../../cs-docs/content-managers/author-content/publish-an-entry.md) request and pass the respective locale code in the locale={locale_code} parameter.

**Additional Resource:** Refer the [Localization](../../../../../cs-docs/developers/multilingual-content/localize-an-entry.md) docs for more information.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you want to localize.
  Default: `blt9965f5f9840923ba`

## Query Parameters

- **locale** (required)
  Enter the code of the language to localize the entry of that particular language.
  Default: `fr-fr`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
    "entry":{
        "title":"Sample Entry in Arabic",
        "group":[{
            "single_line":"Non-localizable single line textbox",
            "_metadata":{
                "uid":"csde3afe4a1ece294b"
                }
            }],
        "single_line":"Localizable single line textbox",
        "tags":[]
    }
}
```

## Sample Response

```json
{
    "notice": "Entry localized successfully.",
    "entry": {
        "locale": "hi-in",
        "uid": "bltf285cc2affe9f495",
        "ACL": {},
        "_in_progress": false,
        "_version": 1,
        "created_at": "2025-05-07T04:52:45.031Z",
        "created_by": "blte93d4119f79db761",
        "group": [
            {
                "single_line": "Non-localizable single line textbox",
                "_metadata": {
                    "uid": "csde3afe4a1ece294b"
                }
            }
        ],
        "single_line": "Localizable single line textbox",
        "tags": [],
        "title": "Sample Entry in Arabic",
        "updated_at": "2025-05-07T04:52:45.031Z",
        "updated_by": "blte93d4119f79db761"
    }
}
```

