---
title: "Get references of an entry"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}/references
url: developer-apis/content-management-api-requests/get-references-of-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-06-10
---

# Get references of an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/references`

The Get references of an entry request retrieves a list of entries and content types that reference the specified entry.

When using OAuth, ensure your application includes the cm.entry:read scope to access this endpoint.

To include publish-related metadata for the referenced entry, set the include_publish_details query parameter to true. This metadata includes:

- _version_name: Name assigned to the latest version (if available)
- _version: Latest version number of the specified entry.
- publish_details: An array of objects containing:environment: UID of the environment where the entry is published
- locale: Locale of the published entry
- time: Timestamp of when the entry was published
- user: UID of the user who performed the publishing action
- version: Version number that was published
- version_name: Metadata about the published version, including title, updated_by, and updated_at

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry to find where it is referenced across entries and content types.
  Default: `blt**************ba`

## Query Parameters

- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified entry.
  Default: `true`
- **locale** (optional)
  Enter the locale of the entry. If not provided it uses the master_locale of stack.
  Default: `en-us`
- **deleted** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_branch** (optional)
  Set this parameter to 'true' to include the _branch top-level key in the response.
  Default: `true`
- **include_publish_details** (optional)
  Set this parameter to 'true' to include publish-related metadata for each referenced entry in the response.
  Default: `true`

## Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_api_key`
- **Content-Type** (required)
  Pass application/json value.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "references": [
    {
      "entry_uid": "blt**************2e",
      "content_type_uid": "ref_parent",
      "locale": "en-us",
      "_version": 8,
      "_version_name": {
        "title": "V8",
        "updated_by": "blt**************d8",
        "updated_at": "2025-05-29T08:21:57.731Z"
      },
      "title": "parent entry v8",
      "content_type_title": "Ref Parent",
      "publish_details": [
        {
          "environment": "blt**************26",
          "locale": "en-us",
          "time": "2025-05-14T18:34:49.591Z",
          "user": "blt**************d8",
          "version": 7,
          "version_name": {
            "title": "V7",
            "updated_by": "blt**************d8",
            "updated_at": "2025-05-29T08:18:08.978Z"
          }
        }
      ]
    }
  ],
  "count": 1
}
```

