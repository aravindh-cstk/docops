---
title: "Get a single asset"
description: /assets/{asset_uid}?environment={environment_name}&version={version}&include_fallback=true&include_dimension={boolean_value}
url: /get-a-single-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:03.374Z
updated_at: 2026-04-17T10:14:17.135Z
---

# Get a single asset

<p>The <span data-type='inlineCode'>Get a single asset</span> request fetches the latest version of a specific asset of a particular stack.</p><p class="tip"><strong>Tip</strong>: If no version is mentioned, the request will retrieve the latest published version of the asset. To get a specific version of an asset, refer to the <a href="/docs/developers/apis/content-management-api#get-a-single-asset" target="_self">Get a Single Asset</a> management API.</p><p>Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass <span data-type='inlineCode'>include_metadata</span> as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.</p><p>You will find the entry metadata under the <span data-type='inlineCode'>_metadata</span> key in the response. It will be associated with a specific extension UID as follows:</p><pre>"_metadata": {<br />    "extensions": {<br />        "{extension_uid}": [{<br />            "image_copyrights": "Contentstack Branding",<br />            "scope": "local"<br />        }]<br />    }<br />}<br /></pre><p>If an asset is not published in a specific locale, make use of the <span data-type='inlineCode'>include_fallback=true</span> query parameter to fetch the published version from the fallback locale.</p><p><strong>When using Delivery Tokens</strong></p><ul><li>Fetches ONLY published asset</li><li>Environment is <strong>mandatory</strong> to fetch an asset published on the specified environment</li><li>Version is <strong>optional</strong><ul><li>If no version is specified, it fetches the latest published version</li><li>If a version is specified and if it is not the latest published version, <strong>it will not return any result</strong></li></ul></li><li>Locale is <strong>optional</strong><ul><li>If no locale is specified, it returns the asset from the master locale</li><li>If you specify a locale in the query, it returns the latest published version of the localized asset</li><li>If an asset is not localized, make use of the <span data-type='inlineCode'>include_fallback=true</span> query parameter to fetch the published asset from its fallback locale</li></ul></li></ul>

**API Endpoint**: `/assets/{asset_uid}?environment={environment_name}&version={version}&include_fallback=true&include_dimension={boolean_value}`

**Method**: `GET`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the unique ID of the asset of which you want to retrieve the details.
</p>

## Query Parameters

- **environment** (required)
  <p><span style="background-color: initial;">Enter the name of the environment if you want to retrieve an asset published in a particular environment.</span></p>
- **version** (optional)
  <p>Specify the version number of the asset that you want to retrieve. To retrieve a specific version, keep the <span data-type="inlineCode">environment</span> parameter blank.&nbsp;If the version is not specified, the details of the latest version will be retrieved.</p>
- **include_fallback** (optional)
  <p>Enter 'true' to include published asset details from the fallback locale when the specified locale does not contain published information.</p>
- **include_dimension** (optional)
  <p><span style="background-color: initial;">Enter 'true' to include the dimensions (height and width)&nbsp;of the image&nbsp;in the response.&nbsp;Supported image&nbsp;types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD.</span></p>
- **include_branch** (optional)
  <p>Set this to <span data-type="inlineCode">true</span> to include the <span data-type="inlineCode">_branch</span> top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>
- **include_metadata** (optional)
  <p>Set this parameter to <span class="code">true</span> to include the asset metadata along with all assets in the response body.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

