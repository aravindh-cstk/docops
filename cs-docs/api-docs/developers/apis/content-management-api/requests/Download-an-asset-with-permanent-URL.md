---
title: "Download an asset with permanent URL"
description: GET /assets/{api_key}/{asset_uid}/{slug}
url: developers/apis/content-management-api/requests/download-an-asset-with-permanent-url
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-04
---

# Download an asset with permanent URL


**Method:** `GET`  
**Endpoint:** `/assets/{api_key}/{asset_uid}/{slug}`

The Download an asset with permanent URL request displays an asset in the response. The asset returned in the response can be saved to your local storage system. Make sure to specify the unique identifier (slug) in the request URL.  
  
To configure the permissions for your application via OAuth, please include the cm.assets:download scope.

This request will return the most recent version of the asset, however, to download the latest published version of the asset, pass the environment query parameter with the environment name.

**Note**: Before executing this API request, ensure to [create a permanent URL for the asset](/docs/developers/apis/content-management-api#generate-permanent-asset-url) you want to download.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack that holds the asset. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json | Pass “application/json” as the value to this parameter. |

| branch | main | Enter your branch unique ID. |

| asset_uid | your_asset_uid | Enter the UID of the asset you want to download. Use the [Get All Assets](/docs/developers/apis/content-management-api#get-all-assets) request to get the UID of |

| slug | your_url_slug | Enter the unique identifier of the asset. |

**Response (200):**

```json
{Displays the requested asset in API response}
```
