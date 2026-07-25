---
title: "Get asset references"
description: /assets/{asset_uid}/references
url: /get-asset-references
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.838Z
updated_at: 2025-06-11T05:52:28.109Z
---

# Get asset references

<p>The <span data-type='inlineCode'>Get asset references</span> request retrieves a list of entries and content types that reference the specified asset.</p><p>When using OAuth, ensure your application includes the <span data-type='inlineCode'>cm.asset:read</span> scope to access this endpoint.</p><p>To include publish-related metadata for the referenced asset, set the <span data-type='inlineCode'>include_publish_details</span> query parameter to <span data-type='inlineCode'>true</span>. This metadata includes:</p><ul><li><span data-type='inlineCode'>_version_name</span>: Name assigned to the latest version (if available)</li><li><span data-type='inlineCode'>_version</span>: Latest version number of the specified asset</li><li><span data-type='inlineCode'>publish_details</span>: An array of objects containing:<ul><li><span data-type='inlineCode'>environment</span>: UID of the environment where the asset is published</li><li><span data-type='inlineCode'>locale</span>: Locale of the published asset</li><li><span data-type='inlineCode'>time</span>: Timestamp of when the asset was published</li><li><span data-type='inlineCode'>user</span>: UID of the user who performed the publishing action</li><li><span data-type='inlineCode'>version</span>: Version number that was published</li><li><span data-type='inlineCode'>version_name</span>: Metadata about the published version, including <span data-type='inlineCode'>title</span>, <span data-type='inlineCode'>updated_by</span>, and <span data-type='inlineCode'>updated_at</span></li></ul></li></ul>

**API Endpoint**: `/assets/{asset_uid}/references`

**Method**: `GET`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the unique ID of the asset to find where it is referenced across entries and content types.</p>

## Query Parameters

- **include_count** (optional)
  <p>Set this parameter to 'true' to include in response the total number of versions of the specified asset.</p>
- **deleted** (optional)
  <p>Set this parameter to 'true' to include in response the timestamps for when each version was updated.</p>
- **include_branch** (optional)
  <p>Set this parameter to 'true' to include the <span data-type='inlineCode'>_branch</span> top-level key in the response.</p>
- **include_publish_details** (optional)
  <p>Set this parameter to 'true' to include publish-related metadata for each referenced asset in the response.</p>

## Headers

- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **Content-Type** (required)
  <p>Pass application/json value.</p>
- **branch** (optional)
  <p>Enter your branch's unique ID.</p>

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

