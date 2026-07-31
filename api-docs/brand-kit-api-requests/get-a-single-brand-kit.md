---
title: "Get a Single Brand Kit"
description: /v1/brand-kits/{brand_kit_uid}
url: /get-a-single-brand-kit
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T05:57:40.644Z
updated_at: 2025-11-21T11:05:49.229Z
---

# Get a Single Brand Kit

<p>The <span class="code">Get a Single Brand Kit</span> request fetches the details of a specific Brand Kit in an organization.</p>
<p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:read</span> scope.</p>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}`

**Method**: `GET`

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

## Response

```json
{
  "brand_kit": {
    "uid": "cs***********40",
    "name": "AI Blogs",
    "description": "Brand Kit for AI related Blogs",
    "created_at": "2024-04-26T07:56:35.584Z",
    "created_by": "bl****************b",
    "updated_at": "2024-04-26T08:27:13.974Z",
    "updated_by": "bl****************b",
    "deleted_at": false,
    "api_keys": [
      "bl*************7",
      "bl*************5"
    ],
    "organization_uid": "bl**************9"
  }
}
```

