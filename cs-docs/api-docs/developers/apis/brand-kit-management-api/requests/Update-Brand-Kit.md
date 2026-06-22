---
title: "Update Brand Kit"
description: PUT /v1/brand-kits/{brand_kit_uid}
url: developers/apis/brand-kit-management-api/requests/update-brand-kit
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Update Brand Kit


**Method:** `PUT`  
**Endpoint:** `/v1/brand-kits/{brand_kit_uid}`

The Update Brand Kit request lets you update an existing Brand Kit in an organization.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

Here’s an example of the Request Body that you can use to update a Brand Kit:

```
{
  "brand_kit": {
    "name": "Sample Brand Kit",
    "description": "This is the updated description for Sample Brand Kit",
    "api_keys": [
      "bxxxxxxxxxxxx9"
    ]
  }
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| organization_uid | your_organization_uid | Enter the Organization UID. |

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication). |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

**Request Body:**

```json
{
  "brand_kit": {
  	"name": "Sample Brand Kit",
  	"description": "This is the updated description for Sample Brand Kit",
  "api_keys": [
    "b**********9"
  ]
}
}
```

**Response (200):**

```json
{
  "message": "Brand Kit updated successfully",
  "brand_kit": {
    "uid": "cs************0",
    "name": "Sample Brand Kit",
    "description": "This is the updated description for Sample Brand Kit",
    "created_at": "2024-05-09T13:17:15.200Z",
    "created_by": "bl**************b",
    "updated_at": "2024-05-09T13:17:15.200Z",
    "updated_by": "bl**************b",
    "deleted_at": false,
    "api_keys": [
      "b**********9",
      "b**********9"
    ],
    "organization_uid": "bl************9"
  }
}
```
