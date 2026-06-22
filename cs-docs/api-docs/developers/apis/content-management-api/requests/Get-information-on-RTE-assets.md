---
title: "Get information on RTE assets"
description: GET /assets/rt
url: developers/apis/content-management-api/requests/get-information-on-rte-assets
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-01
---

# Get information on RTE assets


**Method:** `GET`  
**Endpoint:** `/assets/rt`

The Get information on RTE assetscall returns comprehensive information on all assets uploaded through the [Rich Text Editor field](/docs/developers/create-content-types/rich-text-editor).  
To configure the permissions for your application via OAuth, please include the cm.assets.rt:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of the stack that holds the asset |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
[{
    "image": "https://api.assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "thumb": "https://api.assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "title": "filename"
}]
```
