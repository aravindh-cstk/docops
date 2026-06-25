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

**POST** `/v1/brand-kits`

The Create Brand Kit request lets you create a new Brand Kit in the specified organization.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

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

## Sample Request

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

## Sample Response

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

