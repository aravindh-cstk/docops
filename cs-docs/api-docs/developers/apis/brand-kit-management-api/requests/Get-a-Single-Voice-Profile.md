---
title: "Get a Single Voice Profile"
description: GET /v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}?include_users={boolean}
url: developers/apis/brand-kit-management-api/requests/get-a-single-voice-profile
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-21
---

# Get a Single Voice Profile


**Method:** `GET`  
**Endpoint:** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}?include_users={boolean}`

The Get a Single Voice Profile request fetches the specific Voice Profile from a Brand Kit in an organization.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| organization_uid | your_organization_uid | Enter the Organization UID. |

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication). |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| voice_profile_uid | your_voice_profile_uid | Enter the Voice Profile UID. |

| include_users | true | The “include_users” parameter allows you to fetch users information. |

**Response (200):**

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
