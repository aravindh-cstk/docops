---
title: "Get a single label"
description: /labels/{label_uid}
url: /get-a-single-label
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.648Z
updated_at: 2025-07-25T06:35:57.553Z
---

# Get a single label

<p>The <span data-type='inlineCode'>Get a single label</span> call returns information about a particular label of a stack.</p>
<p>When executing the API call, add the <span data-type='inlineCode'>label_uid</span> as a URL parameter and <span data-type='inlineCode'>management_token</span> in the Authorization parameters.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.labels.management:read</span>scope.</p>

**API Endpoint**: `/labels/{label_uid}`

**Method**: `GET`

## URL Parameters

- **label_uid** (required)
  <p>Enter the unique ID of the label that you want to retrieve.<br></p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"label": [{
		"name": "Test",
		"parent": [],
		"uid": "1234567890abcdef",
		"created_by": "sys_bltf123456789012",
		"updated_by": "sys_bltf123456789012",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": "1"
	}]
}
```

