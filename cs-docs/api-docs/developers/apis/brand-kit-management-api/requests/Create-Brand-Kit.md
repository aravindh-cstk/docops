---
title: "Create Brand Kit"
description: POST /v1/brand-kits
url: developers/apis/brand-kit-management-api/requests/create-brand-kit
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Create Brand Kit


**Method:** `POST`  
**Endpoint:** `/v1/brand-kits`

The Create Brand Kit request lets you create a new Brand Kit in the specified organization.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

Here’s an example of the Request Body for creating a new Brand Kit:

```
{
  "brand_kit": {
    "name": "Sample Brand Kit",
    "description": "This is a sample Brand Kit created for testing",
    "api_keys": [
      "bxxxxxxxxxxxx9",
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

**Request Body:**

```json
{
  "brand_kit": {
    "name": "Test Brand Kit",
    "description": "Brand Kit for testing",
    "api_keys": [
      "xxxxxxxxxxxx"
    ]
  }
}
```

**Response (201):**

```json
{
  "message": "Brand Kit created successfully",
  "brand_kit": {
    "uid": "cs4**********0",
    "name": "Test Brand Kit",
    "description": "Brand Kit for testing",
    "created_at": "2024-05-09T13:17:15.200Z",
    "created_by": "bxxxxxxxxxxxxb",
    "updated_at": "2024-05-09T13:17:15.200Z",
    "updated_by": "bxxxxxxxxxxxxb",
    "deleted_at": false,
    "api_keys": [
      "xxxxxxxxxxxx"
    ],
    "organization_uid": "bxxxxxxxxxxxx9"
  }
}
```
