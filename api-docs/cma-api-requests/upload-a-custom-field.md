---
title: "Upload a custom field"
description: /extensions
url: /upload-a-custom-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.990Z
updated_at: 2024-02-22T10:46:39.842Z
---

# Upload a custom field

<p>The <span data-type='inlineCode'>Upload a custom field</span>&nbsp;request is used to upload a custom field&nbsp;to Contentstack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:</p><ul><li><strong>extension[upload]</strong>: Select the HTML file of the custom field that you want to upload</li><li><strong>extension[title]</strong>: Enter the title of the custom field that you want to upload</li><li><strong>extension[data_type]</strong>: Enter the data type for the input field of the custom field</li><li><strong>extension[tags]</strong>: Enter the tags that you want to assign to the custom field</li><li><strong>extension[multiple]</strong>: Enter ‘true’ if you want your custom field to store multiple values</li><li><strong>extension[type]</strong>: Enter type as ‘field’, since this is a custom field extension.</li></ul><p class="tip"><strong>Tip</strong>: You can try the call manually in any REST API client, such as Postman.&nbsp;Under 'Body', for the <span data-type='inlineCode'>extension[upload]</span> parameter, select the input type as 'File'. This will enable you to select the file that you wish to import.</p>

**API Endpoint**: `/extensions`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p><br></p>
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
		"uid": "blt1f1111111ed11a1f",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1"
		],
		"ACL": {},
		"_version": 1,
		"title": "Demo",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"srcdoc": "Source code for the extension"
	}
}
```

