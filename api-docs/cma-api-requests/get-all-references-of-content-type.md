---
title: "Get all references of content type"
description: /content_types/{content_type_uid}/references?include_global_fields={boolean_value}
url: /get-all-references-of-content-type
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:23.608Z
updated_at: 2026-01-08T09:55:21.436Z
---

# Get all references of content type

<p>The <span data-type='inlineCode'>Get all references of content type</span> request retrieves a list of all content types where the specified content type is referenced. This includes both direct and nested references.</p>
<p>For example, if content type A is referenced in B, B in C, then making this request for C will return A and B.</p>
<p>This ensures you have complete visibility into every referenced content type, direct or nested, within the specified content type.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.content-type:read</span>scope.</p>
<p>Additionally, to fetch all Global fields in which the specified content type is referenced, you need to pass <span class="code">include_global_fields</span> as a query parameter. Set this parameter to <span class="code">true</span> to include the Global fields along with the content types.</p>

**API Endpoint**: `/content_types/{content_type_uid}/references?include_global_fields={boolean_value}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to retrieve the references. The Unique ID&nbsp;of a content type is unique across a stack.</p>

## Query Parameters

- **include_global_fields** (optional)
  <p>Set the <span data-type="inlineCode">include_global_fields</span> parameter to “true” to retrieve all the Global fields in which the specified content type is referenced.</p>
- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"references": [
		"Product",
		"Blog"
	]
}
```

