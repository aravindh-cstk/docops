---
title: "Delete Content"
description: DELETE /v1/knowledge-vault/{content_uid}
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/{content_uid}
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Delete Content


**Method:** `DELETE`  
**Endpoint:** `/v1/knowledge-vault/{content_uid}`

The Delete Content lets you delete a specific content stored in the Knowledge Vault.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication). |

| content_uid | your_content_uid | Enter the Content UID. |

**Response (200):**

```json
{
    "message": "Content deleted successfully"
}
```
