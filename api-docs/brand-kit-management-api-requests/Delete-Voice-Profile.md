---
title: "Delete Voice Profile"
description: DELETE /v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}
url: developer-apis/brand-kit-management-api-requests/delete-voice-profile
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Delete Voice Profile

**DELETE** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

The Delete Voice Profile request lets you delete an existing Voice Profile from the Brand Kits in an organization.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

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

## Sample Response

```json
{
  "message": "Voice Profile deleted successfully"
}
```

