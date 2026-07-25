---
title: "Update Brand Kit"
description: /v1/brand-kits/{brand_kit_uid}
url: /update-brand-kit
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T05:58:16.047Z
updated_at: 2024-06-06T10:53:23.597Z
---

# Update Brand Kit

<p>The <span class="code">Update Brand Kit</span> request lets you update an existing Brand Kit in an organization.</p>
<p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p>
<p>Here’s an example of the Request Body that you can use to update a Brand Kit:</p><pre>{<br />  "brand_kit": {<br />    "name": "Sample Brand Kit",<br />    "description": "This is the updated description for Sample Brand Kit",<br />    "api_keys": [<br />      "bxxxxxxxxxxxx9"<br />    ]<br />  }<br />}</pre>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}`

**Method**: `PUT`

## URL Parameters

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Headers

- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/brand-kit-management-api#authentication" target="_self">Authentication</a>.</p>

## Request Body

```json
{
  "brand_kit": {
  	"name": "Sample Brand Kit",
  	"description": "This is the updated description for Sample Brand Kit",
  "api_keys": [
    "b**********9"
  ]
}
}
```

## Response

```json
{
  "message": "Brand Kit updated successfully",
  "brand_kit": {
    "uid": "cs************0",
    "name": "Sample Brand Kit",
    "description": "This is the updated description for Sample Brand Kit",
    "created_at": "2024-05-09T13:17:15.200Z",
    "created_by": "bl**************b",
    "updated_at": "2024-05-09T13:17:15.200Z",
    "updated_by": "bl**************b",
    "deleted_at": false,
    "api_keys": [
      "b**********9",
      "b**********9"
    ],
    "organization_uid": "bl************9"
  }
}
```

