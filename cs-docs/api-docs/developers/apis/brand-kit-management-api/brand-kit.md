---
title: "Brand Kit | Brand Kit"
description: Create, update, fetch, and manage brand kits that define reusable brand context for AI-assisted content workflows.
url: https://www.contentstack.com/docs/developers/apis/brand-kit-management-api/brand-kit
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Brand Kit | Brand Kit

[Brand Kit](/docs/content-managers/brand-kit/about-brand-kit) serves as a centralized repository for your organization's brand identity and guidelines, offering a comprehensive array of product details and overall brand persona. By using the API requests, you can create, view, update, and delete one or more Brand Kits.

## Get All Brand Kits

### Get All Brand Kits

**GET** `/v1/brand-kits?skip={skip}&limit={limit}&include_users={boolean}&include_count={boolean}&include_voice_profiles_count={boolean}&typeahead={string}`

The Get All Brand Kits request fetches the list of all the Brand Kits in an organization.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:read scope.

#### Query Parameters

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

#### Headers

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
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Response

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




## Get a Single Brand Kit

### Get a Single Brand Kit

**GET** `/v1/brand-kits/{brand_kit_uid}`

The Get a Single Brand Kit request fetches the details of a specific Brand Kit in an organization.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:read scope.

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).
  Default: `[Bearer <OAuth token>]  `

#### Sample Response

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




## Create Brand Kit

### Create Brand Kit

**POST** `/v1/brand-kits`

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

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Request

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

#### Sample Response

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




## Update Brand Kit

### Update Brand Kit

**PUT** `/v1/brand-kits/{brand_kit_uid}`

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

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Request

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

#### Sample Response

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




## Delete Brand Kit

### Delete Brand Kit

**DELETE** `/v1/brand-kits/{brand_kit_uid}`

The Delete Brand Kit request lets you delete an existing Brand Kit in an organization.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Response

```json
{
  "message": "Brand Kit deleted successfully"
}
```

