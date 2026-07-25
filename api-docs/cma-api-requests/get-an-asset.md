---
title: "Get an asset"
description: /assets/{asset_uid}?include_path={boolean_value}&version={version_number}&environment={environment}&include_publish_details={boolean_value}&relative_urls={relative_urls}
url: /get-an-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.806Z
updated_at: 2024-03-21T13:15:34.146Z
---

# Get an asset

<p>The <span data-type='inlineCode'>Get an asset</span> request returns comprehensive information about a specific version of an asset of a stack.</p><p><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:read</span> scope. <br />Additionally, if you wish to fetch the metadata attached to each asset, then you need to pass <span data-type='inlineCode'>include_metadata</span> as a query parameter. Set this parameter to true to include the asset metadata along with all assets in the response body.</p><p>You will find the asset metadata under the <span data-type='inlineCode'>_metadata</span> key in the response. It will be associated with a specific extension UID as follows:</p><pre><br /> "_metadata":{<br />    "extensions":{<br />       "{extension_uid}":[<br />            {<br />                "image_copyrights": "Contentstack Branding",<br />                "scope”: “local”<br />            }<br />        ]<br />    }<br />}</pre><p class="tip"><strong>Tip:</strong> To include the publish details in the response, make use of the <span data-type='inlineCode'>include_publish_details</span> parameter and set its value to ‘true’. This query will return the publish details of the entry in every environment along with the version number that is published in each of the environment.&nbsp;When you publish an asset, the associated metadata of that asset will also get published. However, when publishing assets in bulk, the associated metadata of the assets will not get published.</p>

**API Endpoint**: `/assets/{asset_uid}?include_path={boolean_value}&version={version_number}&environment={environment}&include_publish_details={boolean_value}&relative_urls={relative_urls}`

**Method**: `GET`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the unique ID of the asset of which you want to retrieve the details.</p>

## Query Parameters

- **include_path** (optional)
  <p><span style="background-color: initial;">Set this parameter to ‘true’ to retrieve the complete path of the folder. The path will be displayed as an array of objects which includes the names and UIDs of each parent folder.</span></p>
- **version** (optional)
  <p>Specify the version number of the asset that you want to retrieve. If the version is not specified, the details of the latest version will be retrieved.</p>
<p class="note"><strong>Note</strong>: If no version is mentioned, this request will retrieve the latest published version of the asset. To retrieve a specific version, make use of the <span data-type="inlineCode">version</span> parameter and keep the <span data-type="inlineCode">environment</span> parameter blank.</p>
- **environment** (optional)
  <p><span style="background-color: initial;">Enter the name of the environment to retrieve assets published on&nbsp;them. You can enter multiple environments.</span></p>
- **include_publish_details** (optional)
  <p><span style="background-color: initial;">Enter 'true' to include the publish details of the asset.</span></p>
- **relative_urls** (optional)
  <p><span style="background-color: initial;">Set this to 'true' to display the relative URL of the asset. This parameter is not applicable when you delete an asset.</span></p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span></p><p></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

