---
title: "Get All Brand Kits"
description: /v1/brand-kits?skip={skip}&limit={limit}&include_users={boolean}&include_count={boolean}&include_voice_profiles_count={boolean}&typeahead={string}
url: /get-all-brand-kits
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T05:57:11.290Z
updated_at: 2024-06-06T11:08:40.581Z
---

# Get All Brand Kits

<p>The <span class="code">Get All Brand Kits</span> request fetches the list of all the Brand Kits in an organization.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:read</span> scope.</p>

**API Endpoint**: `/v1/brand-kits?skip={skip}&limit={limit}&include_users={boolean}&include_count={boolean}&include_voice_profiles_count={boolean}&typeahead={string}`

**Method**: `GET`

## Query Parameters

- **skip** (optional)
  <p>Enter the number of Brand Kits to be skipped from the response body.</p>
- **limit** (optional)
  <p>Enter the maximum number of Brand Kits to be returned.</p>
- **include_users** (optional)
  <p>The “include_users” parameter allows you to fetch users information.</p>
- **include_count** (optional)
  <p>The “include_count” parameter allows you to fetch the total count of the stacks owned by or shared with a user account.</p>
- **include_voice_profiles_count** (optional)
  <p>The “include_voice_profiles_count” parameter allows you to fetch the count of all voice profiles from a Brand Kit.</p>
- **typeahead** (optional)
  <p>The “typeahead” parameter retrieves responses that match the provided string.</p>

## Headers

- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **api_key** (optional)
  <p>Enter the API Key of the stack to retrieve the details of Brand Kits specifically associated with it.</p>
- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/brand-kit-management-api#authentication" target="_self">Authentication</a>.</p>

## Response

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

