---
title: "Get all assets"
description: /assets?folder={folder_uid}&include_folders={boolean_value}&environment={environment}&version={version_number}&include_publish_details={boolean_value}&include_count={include_count}&relative_urls={relative_urls}&asc={asc_field_uid}&desc={desc_field_uid}
url: /get-all-assets
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.019Z
updated_at: 2026-01-20T16:28:43.623Z
---

# Get all assets

<p>The <span data-type='inlineCode'>Get all assets</span> request returns comprehensive information on all assets available in a stack.</p><p><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.assets.management:read</span> scope. <br />Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass <span data-type='inlineCode'>include_metadata</span> as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.</p><p>You will find the asset metadata under the <span data-type='inlineCode'>_metadata</span> key in the response. It will be associated with a specific extension UID as follows:</p><pre>    "_metadata":{<br />    "extensions":{<br />       "{extension_uid}":[<br />            {<br />                "image_copyrights": "Contentstack Branding",<br />                "scope”: “local”<br />            }<br />        ]<br />    }<br />}</pre><p>You can add queries to extend the functionality of this API call. Under the <span data-type='inlineCode'>URL</span>&nbsp;Parameters section, insert a parameter named query and provide a query in JSON format as the value.</p><p>To learn more about the queries, refer to the <a href="/docs/developers/apis/content-delivery-api#queries" target="_self">Queries</a> section of the Content Delivery API doc.</p><p class="tip"><strong>Tip:</strong> To include the publish details in the response, make use of the <span data-type='inlineCode'>include_publish_details</span> parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment. When you publish an asset, the associated metadata of that asset will also get published.</p>

**API Endpoint**: `/assets?folder={folder_uid}&include_folders={boolean_value}&environment={environment}&version={version_number}&include_publish_details={boolean_value}&include_count={include_count}&relative_urls={relative_urls}&asc={asc_field_uid}&desc={desc_field_uid}`

**Method**: `GET`

## Query Parameters

- **folder** (optional)
  <p>Enter either the UID of a specific folder to get the assets of that folder, or enter ‘cs_root’ to get all assets and their folder details from the root folder.</p>
- **include_folders** (optional)
  <p>Set this parameter to ‘true’ to include the details of the created folders along with the details of the assets.</p>
- **environment** (optional)
  <p>Enter the name of the environment to retrieve the assets published on them. You can enter multiple environments.</p>
- **version** (optional)
  <p>Specify the version number of the asset that you want to retrieve. If the version is not specified, the details of the latest version will be retrieved.</p>
- **include_publish_details** (optional)
  <p>Enter 'true' to include the publish details of the entry.</p>
- **include_count** (optional)
  <p>Set this parameter to 'true' to include the total number of assets available in your stack in the response body.</p>
- **relative_urls** (optional)
  <p>Set this to 'true' to display the relative URL of the asset.</p>
- **asc** (optional)
  <p>Enter the unique ID of the field for sorting the assets in ascending order by that field.</p>
- **desc** (optional)
  <p><span style="color: rgb(116, 133, 144); font-family: proximaNovaRegular, Arial, Helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Enter the unique ID of the field for sorting the assets in descending order by that field.</span></p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

