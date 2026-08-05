---
title: "Get references of an entry"
description: /content_types/{content_type_uid}/entries/{entry_uid}/references
url: /get-references-of-an-entry
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.942Z
updated_at: 2025-06-10T10:01:41.931Z
---

# Get references of an entry

<p>The <span data-type='inlineCode'>Get references of an entry</span> request retrieves a list of entries and content types that reference the specified entry.</p><p>When using OAuth, ensure your application includes the <span data-type='inlineCode'>cm.entry:read</span> scope to access this endpoint.</p><p>To include publish-related metadata for the referenced entry, set the <span data-type='inlineCode'>include_publish_details</span> query parameter to <span data-type='inlineCode'>true</span>. This metadata includes:</p><ul><li><span data-type='inlineCode'>_version_name</span>: Name assigned to the latest version (if available)</li><li><span data-type='inlineCode'>_version</span>: Latest version number of the specified entry.</li><li><span data-type='inlineCode'>publish_details</span>: An array of objects containing:<ul><li><span data-type='inlineCode'>environment</span>: UID of the environment where the entry is published</li><li><span data-type='inlineCode'>locale</span>: Locale of the published entry</li><li><span data-type='inlineCode'>time</span>: Timestamp of when the entry was published</li><li><span data-type='inlineCode'>user</span>: UID of the user who performed the publishing action</li><li><span data-type='inlineCode'>version</span>: Version number that was published</li><li><span data-type='inlineCode'>version_name</span>: Metadata about the published version, including <span data-type='inlineCode'>title</span>, <span data-type='inlineCode'>updated_by</span>, and <span data-type='inlineCode'>updated_at</span></li></ul></li></ul>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/references`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type.<br /></p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry to find where it is referenced across entries and content types.</p>

## Query Parameters

- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total number of versions of the specified entry.</p>
- **locale** (optional)
  <p>Enter the locale of the entry. If not provided it uses the <span data-type='inlineCode'>master_locale</span> of stack.</p>
- **deleted** (optional)
  <p>Set this parameter to 'true' to include in response the timestamps for when each version was updated.</p>
- **include_branch** (optional)
  <p>Set this parameter to 'true' to include the <span data-type='inlineCode'>_branch</span> top-level key in the response.</p>
- **include_publish_details** (optional)
  <p>Set this parameter to 'true' to include publish-related metadata for each referenced entry in the response.</p>

## Headers

- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a><div></div><span></span></p><p></p>
- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **Content-Type** (required)
  <p>Pass application/json value.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

