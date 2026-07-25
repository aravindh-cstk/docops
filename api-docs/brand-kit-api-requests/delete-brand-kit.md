---
title: "Delete Brand Kit"
description: /v1/brand-kits/{brand_kit_uid}
url: /delete-brand-kit
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T05:58:45.350Z
updated_at: 2024-06-06T10:54:30.302Z
---

# Delete Brand Kit

<p>The <span class="code">Delete Brand Kit</span> request lets you delete an existing Brand Kit in an organization.</p>
<p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}`

**Method**: `DELETE`

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
  "message": "Brand Kit deleted successfully"
}
```

