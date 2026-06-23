---
title: "Upload a custom field"
description: POST /extensions
url: developers/apis/content-management-api/requests/upload-a-custom-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Upload a custom field

**POST** `/extensions`

The Upload a custom field request is used to upload a custom field to Contentstack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the custom field that you want to upload
- extension[title]: Enter the title of the custom field that you want to upload
- extension[data_type]: Enter the data type for the input field of the custom field
- extension[tags]: Enter the tags that you want to assign to the custom field
- extension[multiple]: Enter ‘true’ if you want your custom field to store multiple values
- extension[type]: Enter type as ‘field’, since this is a custom field extension.

**Tip**: You can try the call manually in any REST API client, such as Postman. Under 'Body', for the extension[upload] parameter, select the input type as 'File'. This will enable you to select the file that you wish to import.

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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

