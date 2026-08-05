---
title: "Update label"
description: /labels/{label_uid}
url: /update-label
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.686Z
updated_at: 2025-07-25T06:36:49.795Z
---

# Update label

<p>The <span data-type='inlineCode'>Update label</span> call is used to update an existing label.</p>
<p>When executing the API call add the <span data-type='inlineCode'>label_uid</span> as a URL parameter and <span data-type='inlineCode'>management_token</span> in the Authorization parameters.</p>
<p>In the 'Body' section, enter the updated details of your label, which include the name of the label, the uid of the parent label, and the content types that need to be included in the label. These details need to be provided in JSON format.<br />To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.labels.management:write</span>scope.</p>

**API Endpoint**: `/labels/{label_uid}`

**Method**: `PUT`

## URL Parameters

- **label_uid** (required)
  <p>Enter the unique ID of the label that needs to be updated.&nbsp;</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
  "label": {
    "name": "Test",
    "parent": [
      "label_uid"
    ],
    "content_types": [
      "content_type_uid"
    ]
  }
}
```

## Response

```json
{
	"notice": "Label updated successfully.",
	"label": {
		"name": "Test",
		"parent": [],
		"uid": "1234567890abcdef",
		"updated_by": "sys_bltf123456789012",
		"created_by": "sys_bltf123456789012",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"tags": [],
		"content_types": [],
		"_version": "2",
		"isLabel": true
	}
}
```

