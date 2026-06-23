---
title: "Get a Single Brand Kit"
description: GET /v1/brand-kits/{brand_kit_uid}
url: developers/apis/brand-kit-management-api/requests/get-a-single-brand-kit
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-21
---

# Get a Single Brand Kit

**GET** `/v1/brand-kits/{brand_kit_uid}`

The Get a Single Brand Kit request fetches the details of a specific Brand Kit in an organization.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:read scope.

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
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).
  Default: `[Bearer <OAuth token>]  `

## Sample Response

```json
{
  "brand_kit": {
    "uid": "cs***********40",
    "name": "AI Blogs",
    "description": "Brand Kit for AI related Blogs",
    "created_at": "2024-04-26T07:56:35.584Z",
    "created_by": "bl****************b",
    "updated_at": "2024-04-26T08:27:13.974Z",
    "updated_by": "bl****************b",
    "deleted_at": false,
    "api_keys": [
      "bl*************7",
      "bl*************5"
    ],
    "organization_uid": "bl**************9"
  }
}
```

