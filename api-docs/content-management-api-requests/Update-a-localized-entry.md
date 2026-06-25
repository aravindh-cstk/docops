---
title: "Update a localized entry"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}
url: developer-apis/content-management-api-requests/update-a-localized-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-09-22
---

# Update a localized entry

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}?locale={locale_code}`

The Update a localized entry request allows you to modify the localized version of an entry. This request is used when you want to update content specific to a locale that is independent of the fallback (master) language.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.

In the "Body" parameter, you need to provide the content of your entry based on the content type.

**Important**: If a **Modular Blocks**, **Group**, or **Global** field (marked as multiple) contains a field marked as non-localizable, you must include both _metadata.uid and "non_localizable_content": true for that instance in the request payload. This ensures the non-localizable content continues to retrieve its value from the master locale. You can find the metadata UID for each instance by using the [Get a Single Entry](../api-detail/content-management-api.md#get-a-single-entry) request for the master entry.

Here's a sample request body:

```
{
  "entry": {
    "title": "Localized Entry Title",
    "group": [
      {
        "single_line": "Master French",
        "_metadata": {
          "uid": "csc5bebf39cfc99787",
          "non_localizable_content": true
        },
        "multi_line": "Localized French Text"
      }
    ],
    "single_line": "Localized single line text",
    "tags": []
  }
}
```

In this example, the group field is marked as multiple and contains a field (single_line) that is non-localizable. The non_localizable_content: true along with _metadata.uid ensures that the single_line field continues to pull its value from the master locale, while allowing updates to other fields like multi_line.

**Note:** This request will only update the localized version of your entry and not publish it. To publish your localized entry, you need to use the [**Publish an entry**](../../../../../cs-docs/content-managers/author-content/publish-an-entry.md) request and pass the respective locale code in the locale={locale_code} parameter.

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
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
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
                "uid":"csde3afe4a1ece294b",
                "non_localizable_content": true
                }
            }],
        "single_line":"Update localizable single line textbox",
        "tags":[]
    }
}
```

## Sample Response

```json
{
    "notice": "Entry updated successfully.",
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

