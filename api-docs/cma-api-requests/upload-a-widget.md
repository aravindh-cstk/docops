---
title: "Upload a widget"
description: /extensions
url: /upload-a-widget
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.987Z
updated_at: 2024-02-22T13:00:38.167Z
---

# Upload a widget

<p>The <span data-type='inlineCode'>Upload a widget</span> request is used to upload a new custom widget to a stack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:<br /></p><ul><li><strong>extension[upload]</strong>: Select the HTML file of the widget that you want to upload</li><li><strong>extension[title]</strong>: Enter the title of the widget that you want to upload</li><li><strong>extension[tags]</strong>: Enter the tags that you want to assign to the widget</li><li><strong>extension[scope]</strong>: Enter either <span data-type='inlineCode'>{"content_types":["$all"]}</span> or <span data-type='inlineCode'>{"content_types":["content_type_uid1”, “content_type_uid2”, “..."]}</span> to apply this widget to all content types or specific content types, respectively</li><li><strong>extension[type]</strong>: Enter type as ‘widget’, since this is a custom widget extension</li></ul><p class="tip"><strong>Tip</strong>: You can try the call manually in any REST API client, such as Postman.&nbsp;Under 'Body', for the <span data-type='inlineCode'>extension[upload]</span> parameter, select the input type as 'File'. This will enable you to select the file that you wish to import.</p>

**API Endpoint**: `/extensions`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "blt1f1111111ed11a0d",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"ACL": {},
		"_version": 1,
		"title": "Text Intelligence",
		"config": {
			"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11de1"
		},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"srcdoc": "Source doc of the widget"
	}
}
```

