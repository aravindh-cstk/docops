---
title: "Create Voice Profile"
description: POST /v1/brand-kits/{brand_kit_uid}/voice-profiles
url: developer-apis/brand-kit-management-api-requests/create-voice-profile
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Create Voice Profile

**POST** `/v1/brand-kits/{brand_kit_uid}/voice-profiles`

The Create Voice Profile request lets you create a new Voice Profile in a Brand Kit within an organization.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for creating a new Voice Profile:

```
{
    "voice_profile": {
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        }
    }
}
```

## URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

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
    "voice_profile": {
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        }
    }
}
```

## Sample Response

```json
{
    "message": "Voice Profile created successfully",
    "voice_profile": {
        "brand_kit_uid": "cs*************4d",
        "uid": "cs*************49",
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        },
        "created_at": "2024-06-06T12:18:18.619Z",
        "created_by": "bl*************5b",
        "updated_at": "2024-06-06T12:18:18.619Z",
        "updated_by": "bl*************5b",
        "deleted_at": false
    }
}
```

