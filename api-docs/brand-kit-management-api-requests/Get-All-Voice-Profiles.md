---
title: "Get All Voice Profiles"
description: GET /v1/brand-kits/{brand_kit_uid}/voice-profiles?skip={index}&limit={limit}&include_users={boolean}&include_count={boolean}&typeahead={string}&sort={string}&order={string}
url: developer-apis/brand-kit-management-api-requests/get-all-voice-profiles
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-21
---

# Get All Voice Profiles

**GET** `/v1/brand-kits/{brand_kit_uid}/voice-profiles?skip={index}&limit={limit}&include_users={boolean}&include_count={boolean}&typeahead={string}&sort={string}&order={string}`

The Get All Voice Profiles request fetches the list of all Voice Profiles in a Brand Kit within an organization.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

## URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

## Query Parameters

- **skip** (optional)
  Enter the number of Voice Profiles to be skipped from the response body.
  Default: `0`
- **limit** (optional)
  Enter the maximum number of Voice Profiles to be returned.
  Default: `2`
- **include_users** (optional)
  The “include_users” parameter allows you to fetch users information.
  Default: `true`
- **include_count** (optional)
  The “include_count” parameter allows you to fetch the total count of the stacks owned by or shared with a user account.
  Default: `true`
- **typeahead** (optional)
  The “typeahead” parameter retrieves responses that match the provided string.
  Default: `sample`
- **sort** (optional)
  Enter the value on the basis of which you want to sort your Voice Profiles. The voice profiles can be sorted by created_at, updated_at, and name values. The default value is updated_at.
  Default: `created_at`
- **order** (optional)
  Specify how you want to order your Voice Profiles; asc for ascending order and desc for descending order. The default value is desc.
  Default: `asc`

## Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]  `

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

