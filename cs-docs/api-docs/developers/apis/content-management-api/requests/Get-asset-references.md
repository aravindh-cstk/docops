---
title: "Get asset references"
description: GET /assets/{asset_uid}/references
url: developers/apis/content-management-api/requests/get-asset-references
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-06-11
---

# Get asset references


**Method:** `GET`  
**Endpoint:** `/assets/{asset_uid}/references`

The Get asset references request retrieves a list of entries and content types that reference the specified asset.

When using OAuth, ensure your application includes the cm.asset:read scope to access this endpoint.

To include publish-related metadata for the referenced asset, set the include_publish_details query parameter to true. This metadata includes:

- _version_name: Name assigned to the latest version (if available)
- _version: Latest version number of the specified asset
- publish_details: An array of objects containing:environment: UID of the environment where the asset is published
- locale: Locale of the published asset
- time: Timestamp of when the asset was published
- user: UID of the user who performed the publishing action
- version: Version number that was published
- version_name: Metadata about the published version, including title, updated_by, and updated_at

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| api_key | your_api_key | Enter the API key of your stack. |

| Content-Type | application/json | Pass application/json value. |

| branch | main | Enter your branch's unique ID. |

| asset_uid | blt**************ba | Enter the unique ID of the asset to find where it is referenced across entries and content types. |

| include_count | true | Set this parameter to 'true' to include in response the total number of versions of the specified asset. |

| deleted | true | Set this parameter to 'true' to include in response the timestamps for when each version was updated. |

| include_branch | true | Set this parameter to 'true' to include the _branch top-level key in the response. |

| include_publish_details | true | Set this parameter to 'true' to include publish-related metadata for each referenced asset in the response. |

**Response (200):**

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
