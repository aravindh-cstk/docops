---
title: "Delete Voice Profile"
description: /v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}
url: /delete-voice-profile
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T06:05:10.985Z
updated_at: 2024-06-06T10:54:13.431Z
---

# Delete Voice Profile

<p>The <span class="code">Delete Voice Profile</span> request lets you delete an existing Voice Profile from the Brand Kits in an organization.</p>
<p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

**Method**: `DELETE`

## URL Parameters

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>
- **voice_profile_uid** (required)
  <p>Enter the Voice Profile UID.</p>

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
  "message": "Voice Profile deleted successfully"
}
```

