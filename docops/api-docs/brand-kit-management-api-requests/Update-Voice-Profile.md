---
title: "Update Voice Profile"
description: PUT /v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}
url: developer-apis/brand-kit-management-api-requests/update-voice-profile
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-21
---

# Update Voice Profile

**PUT** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

The Update Voice Profile request lets you update an existing Voice Profile from the Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for updating a Voice Profile:

```
{
    "voice_profile":{
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        }
    }
}
```

## URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **voice_profile_uid** (required)
  Enter the Voice Profile UID.
  Default: `your_voice_profile_uid`

## Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

## Sample Request

```json
{
    "voice_profile":{
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        }
    }
}
```

## Sample Response

```json
{
    "message": "Voice Profile updated successfully",
    "voice_profile": {
        "brand_kit_uid": "cs***************0",
        "uid": "cs*************d",
        "name": "Test Voice Profile",
        "description": "Test Brand Kit Description",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        },
"created_at": "2024-05-13T15:59:02.987Z",
        "created_by": "bl*************b",
        "updated_at": "2024-05-13T16:25:55.803Z",
        "updated_by": "bl*************b",
        "deleted_at": false,
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content"
    }
}
```

