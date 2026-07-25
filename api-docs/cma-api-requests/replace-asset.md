---
title: "Replace asset"
description: /assets/{asset_uid}?environment={environment}&relative_urls={boolean_value}
url: /replace-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.753Z
updated_at: 2024-03-21T13:20:35.332Z
---

# Replace asset

<p>The <span data-type='inlineCode'>Replace asset</span> call will replace an existing asset with another file on the stack. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p><p class="tip"><strong>Tip:</strong> You can try the call manually in any REST API client, such as Postman.<br />Under 'Body', pass a body parameter named <span data-type='inlineCode'>asset[upload]</span> and select the input type as 'File'. This will enable you to select the file that you wish to import.<br />You can assign a parent folder to your asset by using the <span data-type='inlineCode'>asset[parent_uid]</span> parameter, where you can pass the UID of the parent folder.<br />Additionally, you can pass optional parameters such as <span data-type='inlineCode'>asset[title]</span> and <span data-type='inlineCode'>asset[description]</span> which let you enter a title and a description for the uploaded asset, respectively.</p>

**API Endpoint**: `/assets/{asset_uid}?environment={environment}&relative_urls={boolean_value}`

**Method**: `PUT`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the unique ID of the asset of which you wish to retrieve details, or that you wish to update or delete.</p>

## Query Parameters

- **environment** (optional)
  <p><span style="background-color: initial;">Enter the name of the environment if you wish to retrieve the assets published on a particular environment. You can enter multiple environments.</span></p>
- **relative_urls** (optional)
  <p><span style="background-color: initial;">Set this to 'true' to display the relative URL of the asset. This parameter is not applicable when you delete an asset.</span></p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"notice": "Asset updated successfully.",
	"asset": {
		"uid": "blt91af1e5af9c3639f",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"created_by": "abcd1234567890",
		"updated_by": "abcd1234567890",
		"content_type": "image/png",
		"file_size": "12227244",
		"tags": [],
		"app_user_object_uid": "system",
		"filename": "file-name.png",
		"url": "https://assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
		"ACL": {},
		"_version": 1,
		"title": "Test",
		"description": "This is testing",
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "sys_bltd0f5afeabcd"
		}]
	}
}
```

