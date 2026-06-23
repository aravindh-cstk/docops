---
title: "Get single entry variant"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}
url: developers/apis/content-delivery-api/requests/get-single-entry-variant
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-09-17
---

# Get single entry variant

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}`

The Get single entry variant request retrieves a single variant entry of a given base entry.

Pass your variant UID(s) or [aliases](/docs/personalize/glossary-key-features#variant-aliases) in the x-cs-variant-uid header to get all the variants applied to the entries.

**Note**: By default you can add up to **3 variant UIDs or aliases** (comma-separated) simultaneously. The limit can vary based on your organization plan. The variant UID or alias added first takes priority and will be applied to the base entry fields. For example, if you pass UIDs for Red, Green, and Blue variants in that order, the Red variant will have the highest priority. Sample header request, x-cs-variant-uid: cs6c42daef493fb432, cs7697ce80c9bbcc3e, cs8697ce80c9bbcc4f or x-cs-variant-uid: cs_personalize_0_0, cs_personalize_0_1, cs_personalize_0_2.

You can add other [queries](../../../../api-detail/content-delivery-api.md#queries) to extend the functionality of this API call.

**Note**:

- The API timeout for entry variants is capped at 10 seconds
- The maximum response document size for all entry variants is 10 MB

**When using Delivery Tokens**

- Fetches ONLY published content
- Passing the environment as a query parameter is optional but recommended to ensure that the CDN delivers the most recent content
- Locale is optionalIf no locale is specified, it returns the entry from the master locale
- If you specify a locale in the query, it returns the latest published version of the localized entry/entries
- If an entry is not localized, make use of the include_fallback=true query parameter to fetch the published content from its fallback locale

**Tip**: This request returns only the first **100 entries** of the specified content type. Refer to the [Pagination](../../../../api-detail/content-delivery-api.md#pagination) section to retrieve the rest of your entries in a paginated form.

**Error Handling**

If the number of variants exceeds the configured limit:

- The API processes only up to the allowed limit.
- Pass the show_errors=true query parameter to include an errors array describing the truncation.
- If show_errors is false or not set, the errors key is omitted.

Sample response when the show_errors=true query parameter is passed and allowed variant limit is exceeded:

```
{
  "entries": [ ... ],
  "errors": [
    {
      "code": "VARIANT_LIMIT_EXCEEDED",
      "message": "x-cs-variant-uid should not be greater than {{your_set_limit}}",
      "details": {
        "provided_count": 7,
        "limit": {{your_set_limit}},
        "applied_count": {{your_set_limit}}
      }
    }
  ]
}
```

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you want to retrieve the entries. The UID is often based on the title of the content type and it is unique across a stack.
  Default: `home_page`
- **entry_uid** (required)
  Enter the unique ID of your entry.
  Default: `blt3e91e3812a44ba90`

## Query Parameters

- **environment** (optional)
  Enter the environment scoped to your delivery token. For example, if your delivery token is scoped to the production environment, pass the value as production.
  Default: `production`
- **locale** (optional)
  Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.
  Default: `en`
- **include_fallback** (optional)
  Enter “true” to include the published localized content from the fallback locale when the specified locale does not contain published content.
  Default: `true`
- **include_publish_details** (optional)
  Enter “true” to include the publish details of the entry.
  Default: `true`
- **include_rules** (optional)
  Enter “true” to include the publishing rules for the entry.
  Default: `true`
- **include_metadata** (optional)
  Pass this as "true" to fetch the metadata attached to each entry.
  Default: `true`
- **show_errors** (optional)
  Pass this as true to include the errors array in the response.
  Default: `true`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blte5318f6d4fcd10db`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `csdb72e2bdb75536c727b9129d`
- **x-cs-variant-uid** (required)
  Enter the variant UID linked with your content type.
  Default: `csa639040f051b6db6, csbf165536748bdee2, cs619c85c94f383934, cs669f1759b774fe1d`

## Sample Response

```json
{
    "entry": {
        "_version": 3,
        "locale": "en-us",
        "uid": "blt492d7ae2f81ee5fd",
        "ACL": {},
        "_in_progress": false,
        "created_at": "2024-09-25T09:41:26.807Z",
        "created_by": "blt6fe92749b66ad81a",
        "group": [
            {
                "single_line": "Variant 2",
                "multi_line": "Variant 2 Multi",
                "_metadata": {
                    "uid": "cs5bafacf1e94ff8c2"
                }
            },
            {
                "single_line": "Variant 1",
                "multi_line": "Variant 1 Multi",
                "_metadata": {
                    "uid": "csc30ef8fdc0b190fe"
                }
            }
        ],
        "tags": [],
        "title": "Testhghghhgh",
        "updated_at": "2024-09-25T09:44:25.673Z",
        "updated_by": "blt6fe92749b66ad81a",
        "publish_details": {
            "environment": "blt0c46fa6bf0ebbc8f",
            "locale": "en-us",
            "time": "2024-09-25T11:25:12.450Z",
            "user": "blt6fe92749b66ad81a",
            "variants": {
                "3439b92ff6b5406ab559e7e7f246a49b": {
                    "time": "2024-09-25T12:43:11.986Z",
                    "user": "blt3d9f7cdb9bffaa6a",
                    "environment": "blt0c46fa6bf0ebbc8f",
                    "locale": "en-us"
                }
            }
        }
    }
}
```

