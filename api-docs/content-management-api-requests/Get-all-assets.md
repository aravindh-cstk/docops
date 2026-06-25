---
title: "Get all assets"
description: GET /assets?folder={folder_uid}&include_folders={boolean_value}&environment={environment}&version={version_number}&include_publish_details={boolean_value}&include_count={include_count}&relative_urls={relative_urls}&asc={asc_field_uid}&desc={desc_field_uid}
url: developer-apis/content-management-api-requests/get-all-assets
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-20
---

# Get all assets

**GET** `/assets?folder={folder_uid}&include_folders={boolean_value}&environment={environment}&version={version_number}&include_publish_details={boolean_value}&include_count={include_count}&relative_urls={relative_urls}&asc={asc_field_uid}&desc={desc_field_uid}`

The Get all assets request returns comprehensive information on all assets available in a stack.

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

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](../api-detail/content-delivery-api.md#queries) section of the Content Delivery API doc.

**Tip:** To include the publish details in the response, make use of the include_publish_details parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. When you publish an asset, the associated metadata of that asset will also get published.

## Query Parameters

- **folder** (optional)
  Enter either the UID of a specific folder to get the assets of that folder, or enter ‘cs_root’ to get all assets and their folder details from the root folder.
  Default: `bltd7854a4567gh7`
- **include_folders** (optional)
  Set this parameter to ‘true’ to include the details of the created folders along with the details of the assets.
  Default: `true`
- **environment** (optional)
  Enter the name of the environment to retrieve the assets published on them. You can enter multiple environments.
  Default: `production`
- **version** (optional)
  Specify the version number of the asset that you want to retrieve. If the version is not specified, the details of the latest version will be retrieved.
  Default: `1`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `true`
- **include_count** (optional)
  Set this parameter to 'true' to include the total number of assets available in your stack in the response body.
  Default: `false`
- **relative_urls** (optional)
  Set this to 'true' to display the relative URL of the asset.
  Default: `false`
- **asc** (optional)
  Enter the unique ID of the field for sorting the assets in ascending order by that field.
  Default: `created_at`
- **desc** (optional)
  Enter the unique ID of the field for sorting the assets in descending order by that field.
  Default: `file_size`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"assets": [{
			"uid": "blt558a9890b838abcd",
			"created_at": "2015-01-08T15:07:53.495Z",
			"updated_at": "2015-01-08T15:07:53.495Z",
			"created_by": "abcd1234567890",
			"updated_by": "abcd1234567890",
			"content_type": "application/vnd.contenstack.folder",
			"tags": [],
			"name": "Asset Folder",
			"ACL": {},
			"is_dir": true,
			"parent_uid": null,
			"_version": 2
		},
		{
			"uid": "bltabc123e1a1231b23d",
			"created_at": "2018-12-27T04:58:58.014Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "abcd1234567890",
			"updated_by": "abcd1234567890",
			"content_type": "image/png",
			"file_size": "42670",
			"tags": [],
			"filename": "Asset file.png",
			"url": "https://images.contentstack.io/v3/assets/blt23423c2acaae34b3/bltabc123e1a2b34b5d/5c555c555d5c5e5cc5b55d555/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "blt1223b11e22ae333f",
			"_version": 1,
			"title": "Asset file.png",
			"publish_details": [{
				"environment": "bltc15045c3098babcd",
				"locale": "en-us",
				"time": "2015-01-08T15:07:53.495Z",
				"user": "blt42ed70d5f81026a2b9f",
				"version": 1
			}]
		}
	]
}
```

