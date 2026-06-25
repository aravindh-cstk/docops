---
title: "Download an asset with permanent URL"
description: GET /assets/{api_key}/{asset_uid}/{slug}
url: developer-apis/content-management-api-requests/download-an-asset-with-permanent-url
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-04
---

# Download an asset with permanent URL

**GET** `/assets/{api_key}/{asset_uid}/{slug}`

The Download an asset with permanent URL request displays an asset in the response. The asset returned in the response can be saved to your local storage system. Make sure to specify the unique identifier (slug) in the request URL.  
  
To configure the permissions for your application via OAuth, please include the cm.assets:download scope.

This request will return the most recent version of the asset, however, to download the latest published version of the asset, pass the environment query parameter with the environment name.

**Note**: Before executing this API request, ensure to [create a permanent URL for the asset](../../../../api-detail/content-management-api.md#generate-permanent-asset-url) you want to download.

## URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset you want to download. Use the [Get All Assets](../../../../api-detail/content-management-api.md#get-all-assets) request to get the UID of the asset.
  Default: `your_asset_uid`
- **slug** (required)
  Enter the unique identifier of the asset.
  Default: `your_url_slug`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Pass “application/json” as the value to this parameter.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{Displays the requested asset in API response}
```

