---
title: "Create Brand Kit"
description: /v1/brand-kits
url: /create-brand-kit
product: Contentstack
doc_type: api-request
created_at: 2024-06-02T20:56:17.935Z
updated_at: 2024-06-06T10:51:17.837Z
---

# Create Brand Kit

<p>The <span class="code">Create Brand Kit</span> request lets you create a new Brand Kit in the specified organization.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p><p>Here’s an example of the Request Body for creating a new Brand Kit:</p><pre>{<br />  "brand_kit": {<br />    "name": "Sample Brand Kit",<br />    "description": "This is a sample Brand Kit created for testing",<br />    "api_keys": [<br />      "bxxxxxxxxxxxx9",<br />	"bxxxxxxxxxxxx9"<br />    ]<br />  }<br />}</pre>

**API Endpoint**: `/v1/brand-kits`

**Method**: `POST`

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
    "name": "Test Brand Kit",
    "description": "Brand Kit for testing",
    "api_keys": [
      "xxxxxxxxxxxx"
    ]
  }
}
```

## Response

```json
{
  "message": "Brand Kit created successfully",
  "brand_kit": {
    "uid": "cs4**********0",
    "name": "Test Brand Kit",
    "description": "Brand Kit for testing",
    "created_at": "2024-05-09T13:17:15.200Z",
    "created_by": "bxxxxxxxxxxxxb",
    "updated_at": "2024-05-09T13:17:15.200Z",
    "updated_by": "bxxxxxxxxxxxxb",
    "deleted_at": false,
    "api_keys": [
      "xxxxxxxxxxxx"
    ],
    "organization_uid": "bxxxxxxxxxxxx9"
  }
}
```

