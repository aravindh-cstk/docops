---
title: "Delete Voice Profile"
description: DELETE /v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}
url: developers/apis/brand-kit-management-api/requests/delete-voice-profile
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Delete Voice Profile


**Method:** `DELETE`  
**Endpoint:** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

The Delete Voice Profile request lets you delete an existing Voice Profile from the Brand Kits in an organization.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| organization_uid | your_organization_uid | Enter the Organization UID. |

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication). |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| voice_profile_uid | your_voice_profile_uid | Enter the Voice Profile UID. |

**Response (200):**

```json
{
  "message": "Voice Profile deleted successfully"
}
```
