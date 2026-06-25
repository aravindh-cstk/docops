---
title: "Get All Brand Kits"
description: GET /v1/brand-kits?skip={skip}&limit={limit}&include_users={boolean}&include_count={boolean}&include_voice_profiles_count={boolean}&typeahead={string}
url: developers/apis/brand-kit-management-api/requests/get-all-brand-kits
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Get All Brand Kits

**GET** `/v1/brand-kits?skip={skip}&limit={limit}&include_users={boolean}&include_count={boolean}&include_voice_profiles_count={boolean}&typeahead={string}`

The Get All Brand Kits request fetches the list of all the Brand Kits in an organization.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

## Query Parameters

- **skip** (optional)
  Enter the number of Brand Kits to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of Brand Kits to be returned.
  Default: `2`
- **include_users** (optional)
  The “include_users” parameter allows you to fetch users information.
  Default: `false`
- **include_count** (optional)
  The “include_count” parameter allows you to fetch the total count of the stacks owned by or shared with a user account.
  Default: `false`
- **include_voice_profiles_count** (optional)
  The “include_voice_profiles_count” parameter allows you to fetch the count of all voice profiles from a Brand Kit.
  Default: `false`
- **typeahead** (optional)
  The “typeahead” parameter retrieves responses that match the provided string.
  Default: `sample`

## Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **api_key** (optional)
  Enter the API Key of the stack to retrieve the details of Brand Kits specifically associated with it.
  Default: `api_key_of_your_stack`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

## Sample Response

```json
{
  "brand_kits": [
    {
      "uid": "cs***********0",
      "name": "AI Blogs",
      "description": "Brand Kit for AI related Blogs",
      "created_at": "2024-04-26T07:56:35.584Z",
      "created_by": "bl**************b",
      "updated_at": "2024-04-26T08:27:13.974Z",
      "updated_by": "bl**************b",
      "deleted_at": false,
      "api_keys": [
        "bl**************7",
        "bl**************5"
      ],
      "organization_uid": "bl***************9"
    }
  ]
}
```

