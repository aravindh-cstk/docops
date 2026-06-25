---
title: "Get Details of All Versions of an Entry"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}/versions?named={boolean_value}&include_count={boolean_value}&locale={locale_code}&include_updated_at={boolean_value}&include_updated_by={boolean_value}
url: developer-apis/content-management-api-requests/get-details-of-all-versions-of-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-04-28
---

# Get Details of All Versions of an Entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/versions?named={boolean_value}&include_count={boolean_value}&locale={locale_code}&include_updated_at={boolean_value}&include_updated_by={boolean_value}`

The Get Details of All Versions of an Entry request returns comprehensive information of all the versions of a specific entry within a content type.

**Note**:

- If the entry is unlocalized, version details for entries published in the master locale are returned.
- The _version_name field is included in the response only if a name has been assigned to that version. To assign a version name, use the Set Version Name for Entry request.
- When using OAuth, ensure your application includes the cm.entry:read scope to access this endpoint.

##### Delete Version Name of Entry

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry whose version history you want to retrieve.
  Default: `your_entry_uid`

## Query Parameters

- **named** (optional)
  Set this parameter to 'true' to include in response only the named versions of the specified entry.
  Default: `false`
- **include_count** (optional)
  Set this parameter to 'true' to include in response the total number of versions of the specified entry.
  Default: `true`
- **locale** (optional)
  Enter the locale of the entry. If not provided it uses the master_locale of stack.
  Default: `en-us`
- **include_updated_at** (optional)
  Set this parameter to 'true' to include in response the timestamps for when each version was updated.
  Default: `true`
- **include_updated_by** (optional)
  Set this parameter to 'true' to include in response the UID of the user who updated each version.
  Default: `true`

## Headers

- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication.](../api-detail/content-management-api.md#authentication)
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
    "versions": [
        {
            "_version": 10,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:45:32.678Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 9,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:41:54.163Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 8,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:41:10.914Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 7,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:36:55.607Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 6,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:55.104Z",
            "updated_by": "blt**************f3"
        },
        {
            "_version": 5,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:27.080Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 4,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:35:05.469Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 3,
            "locale": "en-us",
            "updated_at": "2025-04-21T18:32:09.120Z",
            "updated_by": "blt3cf27864e6b61df3"
        },
        {
            "_version": 2,
            "locale": "en-us",
            "updated_at": "2025-04-21T16:01:05.721Z",
            "updated_by": "blt**************l3"
        },
        {
            "_version": 1,
            "locale": "en-us",
            "updated_at": "2025-04-21T15:59:48.020Z",
            "updated_by": "blt**************l3"
        }
    ],
    "count": 10
}
```

