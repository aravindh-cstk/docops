---
title: "Get a single asset"
description: GET /assets/{asset_uid}?environment={environment_name}&version={version}&include_fallback=true&include_dimension={boolean_value}
url: developer-apis/content-delivery-api-requests/get-a-single-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-04-17
---

# Get a single asset

**GET** `/assets/{asset_uid}?environment={environment_name}&version={version}&include_fallback=true&include_dimension={boolean_value}`

The Get a single asset request fetches the latest version of a specific asset of a particular stack.

**Tip**: If no version is mentioned, the request will retrieve the latest published version of the asset. To get a specific version of an asset, refer to the [Get a Single Asset](../../../../api-detail/content-management-api.md#get-a-single-asset) management API.

Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.

You will find the entry metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata": {
    "extensions": {
        "{extension_uid}": [{
            "image_copyrights": "Contentstack Branding",
            "scope": "local"
        }]
    }
}
```

If an asset is not published in a specific locale, make use of the include_fallback=true query parameter to fetch the published version from the fallback locale.

**When using Delivery Tokens**

- Fetches ONLY published asset
- Environment is mandatory to fetch an asset published on the specified environment
- Version is optionalIf no version is specified, it fetches the latest published version
- If a version is specified and if it is not the latest published version, it will not return any result

Locale is **optional**

- If no locale is specified, it returns the asset from the master locale
- If you specify a locale in the query, it returns the latest published version of the localized asset
- If an asset is not localized, make use of the include_fallback=true query parameter to fetch the published asset from its fallback locale

## URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset of which you want to retrieve the details.
  Default: `blt19c34e5374418484`

## Query Parameters

- **environment** (required)
  Enter the name of the environment if you want to retrieve an asset published in a particular environment.
  Default: `production`
- **version** (optional)
  Specify the version number of the asset that you want to retrieve. To retrieve a specific version, keep the environment parameter blank. If the version is not specified, the details of the latest version will be retrieved.
  Default: `1`
- **include_fallback** (optional)
  Enter 'true' to include published asset details from the fallback locale when the specified locale does not contain published information.
  Default: `true`
- **include_dimension** (optional)
  Enter 'true' to include the dimensions (height and width) of the image in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD.
  Default: `true`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`
- **include_metadata** (optional)
  Set this parameter to true to include the asset metadata along with all assets in the response body.
  Default: `true`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "asset": {
    "uid": "blt19c34e5374418484",
    "created_at": "2019-08-16T08:05:30.460Z",
    "updated_at": "2019-08-16T08:05:30.460Z",
    "created_by": "bltcd82b2c6bf913241",
    "updated_by": "bltcd82b2c6bf913241",
    "content_type": "image/jpeg",
    "file_size": "69609",
    "tags": [],
    "filename": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
    "url": "https://images.contentstack.io/v3/assets/blt02f7b45378b008ee/blt19c34e5374418484/5d5663ca9e9032233cab321a/in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
    "ACL": {
      "roles": [],
      "others": {
        "read": false,
        "create": false,
        "update": false,
        "delete": false,
        "sub_acl": {
          "read": false,
          "create": false,
          "update": false,
          "delete": false,
          "publish": false
        }
      }
    },
    "is_dir": false,
    "_version": 1,
    "title": "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg",
    "dimension": {
      "height": 615,
      "width": 802
    },
    "publish_details": {
      "environment": "blta39a4441696e35e0",
      "locale": "en-us",
      "time": "2019-08-19T12:28:47.432Z",
      "user": "blt587a89fc7883c56700a95bfe"
    }
  }
}
```

