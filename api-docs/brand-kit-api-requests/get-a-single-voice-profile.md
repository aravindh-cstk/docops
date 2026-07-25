---
title: "Get a Single Voice Profile"
description: /v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}?include_users={boolean}
url: /get-a-single-voice-profile
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T06:04:11.883Z
updated_at: 2025-11-21T12:13:45.340Z
---

# Get a Single Voice Profile

<p>The <span class="code">Get a Single Voice Profile</span> request fetches the specific Voice Profile from a Brand Kit in an organization.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:read</span> scope.</p>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}?include_users={boolean}`

**Method**: `GET`

## URL Parameters

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>
- **voice_profile_uid** (required)
  <p>Enter the Voice Profile UID.</p>

## Query Parameters

- **include_users** (optional)
  <p>The “include_users” parameter allows you to fetch users information.</p>

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
    "voice_profile": {
        "brand_kit_uid": "cs***************0",
        "uid": "cs***************d",
        "name": "Test Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
                "formality_level": 4,
                "tone": 3,
                "humor_level": 2,
                "complexity_level": 1
          },
        "created_at": "2024-05-13T15:59:02.987Z",
        "created_by": "bl***************b",
        "updated_at": "2024-05-13T15:59:02.987Z",
        "updated_by": "bl***************b",
        "deleted_at": false
    }
}
```

