---
title: "Get a single custom field"
description: /extensions/{custom_field_uid}
url: /get-a-single-custom-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.995Z
updated_at: 2024-02-20T12:22:31.638Z
---

# Get a single custom field

<p>The <span data-type='inlineCode'>Get a single custom field</span>&nbsp;request gets the comprehensive details of a specific custom field.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/extensions/{custom_field_uid}`

**Method**: `GET`

## URL Parameters

- **custom_field_uid** (required)
  <p>Enter the UID of the custom field of which you want to retrieve the details.</p>

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
	"extensions": {
		"uid": "blt002c000ce00b00000",
		"created_at": "2018-07-03T05:32:29.450Z",
		"updated_at": "2018-07-03T05:32:29.450Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt2e2222e2222cf2d2",
		"tags": [],
		"ACL": [],
		"_version": 1,
		"title": "Ratings",
		"multiple": false,
		"config": {},
		"type": "field",
		"data_type": "number",
		"srcdoc": "Source doc of the extension"
	}
}
```

