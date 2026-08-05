---
title: "Get Details of All Versions of an Entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/versions?named={boolean_value}&include_count={boolean_value}&locale={locale_code}&include_updated_at={boolean_value}&include_updated_by={boolean_value}
url: /get-details-of-all-versions-of-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.929Z
updated_at: 2026-07-20T18:26:26.047Z
---

# Get Details of All Versions of an Entry

<p>The <span data-type='inlineCode'>Get Details of All Versions of an Entry</span> request returns comprehensive information of all the versions of a specific entry within a content type.</p><div class="note"><strong>Note</strong>:<ul><li>If the entry is unlocalized, version details for entries published in the master locale are returned.</li><li>The <span data-type='inlineCode'>_version_name</span> field is included in the response only if a name has been assigned to that version. To assign a version name, use the <a href="/docs/developers/apis/content-management-api#set-version-name-for-entry" target="_self">Set Version Name for Entry</a> request.</li><li>When using OAuth, ensure your application includes the <span data-type='inlineCode'>cm.entry:read</span> scope to access this endpoint.</li></ul></div>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/versions?named={boolean_value}&include_count={boolean_value}&locale={locale_code}&include_updated_at={boolean_value}&include_updated_by={boolean_value}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry whose version history you want to retrieve.</p>

## Query Parameters

- **named** (optional)
  <p>Set this parameter to 'true' to include in response only the named versions of the specified entry.</p><p></p>
- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total number of versions of the specified entry.</p>
- **locale** (optional)
  <p>Enter the locale of the entry. If not provided it uses the <span data-type='inlineCode'>master_locale</span> of stack.</p>
- **include_updated_at** (optional)
  <p>Set this parameter to 'true' to include in response the timestamps for when each version was updated.</p>
- **include_updated_by** (optional)
  <p>Set this parameter to 'true' to include in response the UID of the user who updated each version.</p>

## Headers

- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication.</a></p><div></div><span></span>
- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **Content-Type** (required)
  <p>Pass application/json value.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

