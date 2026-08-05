---
title: "Update Brand Kit"
description: PUT /v1/brand-kits/{brand_kit_uid}
url: developer-apis/brand-kit-management-api-requests/update-brand-kit
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Update Brand Kit

**PUT** `/v1/brand-kits/{brand_kit_uid}`

The Update Brand Kit request lets you update an existing Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

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
  "brand_kit": {
  	"name": "Sample Brand Kit",
  	"description": "This is the updated description for Sample Brand Kit",
  "api_keys": [
    "b**********9"
  ]
}
}
```

## Sample Response

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

