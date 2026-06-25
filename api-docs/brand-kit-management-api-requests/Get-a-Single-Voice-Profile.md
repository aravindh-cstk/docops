---
title: "Get a Single Voice Profile"
description: GET /v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}?include_users={boolean}
url: developer-apis/brand-kit-management-api-requests/get-a-single-voice-profile
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-21
---

# Get a Single Voice Profile

**GET** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}?include_users={boolean}`

The Get a Single Voice Profile request fetches the specific Voice Profile from a Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

## URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **voice_profile_uid** (required)
  Enter the Voice Profile UID.
  Default: `your_voice_profile_uid`

## Query Parameters

- **include_users** (optional)
  The “include_users” parameter allows you to fetch users information.
  Default: `true`

## Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

## Sample Response

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

