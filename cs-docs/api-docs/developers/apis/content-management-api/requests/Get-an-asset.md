---
title: "Get an asset"
description: GET /assets/{asset_uid}?include_path={boolean_value}&version={version_number}&environment={environment}&include_publish_details={boolean_value}&relative_urls={relative_urls}
url: developers/apis/content-management-api/requests/get-an-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get an asset

**GET** `/assets/{asset_uid}?include_path={boolean_value}&version={version_number}&environment={environment}&include_publish_details={boolean_value}&relative_urls={relative_urls}`

The Get an asset request returns comprehensive information about a specific version of an asset of a stack.

To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.   
Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass include_metadata as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.

You will find the asset metadata under the _metadata key in the response. It will be associated with a specific extension UID as follows:

```
"_metadata":{
    "extensions":{
       "{extension_uid}":[
            {
                "image_copyrights": "Contentstack Branding",
                "scope”: “local”
            }
        ]
    }
}
```

**Tip:** To include the publish details in the response, make use of the include_publish_details parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. When you publish an asset, the associated metadata of that asset will also get published. However, when publishing assets in bulk, the associated metadata of the assets will not get published.

## URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset of which you want to retrieve the details.
  Default: `blt91af1e5af9c3639f`

## Query Parameters

- **include_path** (optional)
  Set this parameter to ‘true’ to retrieve the complete path of the folder. The path will be displayed as an array of objects which includes the names and UIDs of each parent folder.
  Default: `false`
- **version** (optional)
  Specify the version number of the asset that you want to retrieve. If the version is not specified, the details of the latest version will be retrieved. **Note**: If no version is mentioned, this request will retrieve the latest published version of the asset. To retrieve a specific version, make use of the version parameter and keep the environment parameter blank.
  Default: `1`
- **environment** (optional)
  Enter the name of the environment to retrieve assets published on them. You can enter multiple environments.
  Default: `production`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the asset.
  Default: `true`
- **relative_urls** (optional)
  Set this to 'true' to display the relative URL of the asset. This parameter is not applicable when you delete an asset.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"asset": {
		"uid": "blt558a9890b838abcd",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"created_by": "abcd1234567890",
		"updated_by": "abcd1234567890",
		"content_type": "image/png",
		"file_size": "12227244",
		"tags": [],
		"filename": "file-name.png",
		"url": "https: //images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltd44a4444444444e7/5d2dfe55af0d5dea966e/download",
		"ACL": {},
		"is_dir": false,
		"_version": 1,
		"title": "Test",
		"description": "This is testing",
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "blt7d4028cc76efee9e",
			"version": 1
		}]
	}
}
```

