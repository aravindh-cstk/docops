---
title: "Delete Content Type"
description: /content_types/{content_type_uid}?force={boolean value}
url: /delete-content-type
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:22.798Z
updated_at: 2024-03-21T12:04:01.676Z
---

# Delete Content Type

<p>The <span data-type='inlineCode'>Delete Content Type</span> call deletes an existing content type and all the entries within it.</p><p>When executing the API call, in the “URL Parameters” section, provide the UID of your content type.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.content-types.management:write</span> scope.</p><p></p>

**API Endpoint**: `/content_types/{content_type_uid}?force={boolean value}`

**Method**: `DELETE`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type that you wish to delete. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>

## Query Parameters

- **force** (optional)
  <p><span style="background-color: initial;">Enter 'true' to force delete a content type.</span></p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a><span></span></p><div></div></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
	"notice": "Content Type deleted successfully."
}
```

