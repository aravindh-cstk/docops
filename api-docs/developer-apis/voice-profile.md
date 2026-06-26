---
title: "Brand Kit | Voice Profile"
description: Create, update, fetch, and manage voice profiles that guide tone, style, and messaging for generated content.
url: https://www.contentstack.com/docs/developer-apis/brand-kit-management-api/voice-profile
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Brand Kit | Voice Profile

[Voice Profiles](../../../../cs-docs/content-managers/brand-kit/about-voice-profile.md) allows you to define unique AI-generated brand voices that you can apply to your content. By using the API requests, you can create, view, update, and delete the Voice Profile in a Brand Kit.

## Get All Voice Profiles

### Get All Voice Profiles

**GET** `/v1/brand-kits/{brand_kit_uid}/voice-profiles?skip={index}&limit={limit}&include_users={boolean}&include_count={boolean}&typeahead={string}&sort={string}&order={string}`

The Get All Voice Profiles request fetches the list of all Voice Profiles in a Brand Kit within an organization.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Query Parameters

- **skip** (optional)
  Enter the number of Voice Profiles to be skipped from the response body.
  Default: `0`
- **limit** (optional)
  Enter the maximum number of Voice Profiles to be returned.
  Default: `2`
- **include_users** (optional)
  The “include_users” parameter allows you to fetch users information.
  Default: `true`
- **include_count** (optional)
  The “include_count” parameter allows you to fetch the total count of the stacks owned by or shared with a user account.
  Default: `true`
- **typeahead** (optional)
  The “typeahead” parameter retrieves responses that match the provided string.
  Default: `sample`
- **sort** (optional)
  Enter the value on the basis of which you want to sort your Voice Profiles. The voice profiles can be sorted by created_at, updated_at, and name values. The default value is updated_at.
  Default: `created_at`
- **order** (optional)
  Specify how you want to order your Voice Profiles; asc for ascending order and desc for descending order. The default value is desc.
  Default: `asc`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]  `

#### Sample Response

```json
{
    "voice_profile": {
        "brand_kit_uid": "cs***************0",
        "uid": "cs***************d",
        "name": "Test Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
                "formality_level": 4,
                "tone": 3,
                "humor_level": 2,
                "complexity_level": 1
          },
        "created_at": "2024-05-13T15:59:02.987Z",
        "created_by": "bl***************b",
        "updated_at": "2024-05-13T15:59:02.987Z",
        "updated_by": "bl***************b",
        "deleted_at": false
    }
}
```




## Get a Single Voice Profile

### Get a Single Voice Profile

**GET** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}?include_users={boolean}`

The Get a Single Voice Profile request fetches the specific Voice Profile from a Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **voice_profile_uid** (required)
  Enter the Voice Profile UID.
  Default: `your_voice_profile_uid`

#### Query Parameters

- **include_users** (optional)
  The “include_users” parameter allows you to fetch users information.
  Default: `true`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Response

```json
{
    "voice_profile": {
        "brand_kit_uid": "cs***************0",
        "uid": "cs***************d",
        "name": "Test Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
                "formality_level": 4,
                "tone": 3,
                "humor_level": 2,
                "complexity_level": 1
          },
        "created_at": "2024-05-13T15:59:02.987Z",
        "created_by": "bl***************b",
        "updated_at": "2024-05-13T15:59:02.987Z",
        "updated_by": "bl***************b",
        "deleted_at": false
    }
}
```




## Create Voice Profile

### Create Voice Profile

**POST** `/v1/brand-kits/{brand_kit_uid}/voice-profiles`

The Create Voice Profile request lets you create a new Voice Profile in a Brand Kit within an organization.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for creating a new Voice Profile:

```
{
    "voice_profile": {
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        }
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
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Request

```json
{
    "voice_profile": {
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        }
    }
}
```

#### Sample Response

```json
{
    "message": "Voice Profile created successfully",
    "voice_profile": {
        "brand_kit_uid": "cs*************4d",
        "uid": "cs*************49",
        "name": "Sample Voice Profile",
        "description": "This is the sample description for new Voice Profile.",
        "communication_style": {
            "formality_level": 4,
            "tone": 3,
            "humor_level": 2,
            "complexity_level": 1
        },
        "created_at": "2024-06-06T12:18:18.619Z",
        "created_by": "bl*************5b",
        "updated_at": "2024-06-06T12:18:18.619Z",
        "updated_by": "bl*************5b",
        "deleted_at": false
    }
}
```




## Update Voice Profile

### Update Voice Profile

**PUT** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

The Update Voice Profile request lets you update an existing Voice Profile from the Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for updating a Voice Profile:

```
{
    "voice_profile":{
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        }
    }
}
```

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **voice_profile_uid** (required)
  Enter the Voice Profile UID.
  Default: `your_voice_profile_uid`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Request

```json
{
    "voice_profile":{
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        }
    }
}
```

#### Sample Response

```json
{
    "message": "Voice Profile updated successfully",
    "voice_profile": {
        "brand_kit_uid": "cs***************0",
        "uid": "cs*************d",
        "name": "Test Voice Profile",
        "description": "Test Brand Kit Description",
        "communication_style": {
            "complexity_level": 1,
            "formality_level": 2,
            "humor_level": 3,
            "tone": 4
        },
"created_at": "2024-05-13T15:59:02.987Z",
        "created_by": "bl*************b",
        "updated_at": "2024-05-13T16:25:55.803Z",
        "updated_by": "bl*************b",
        "deleted_at": false,
        "description": "Test Brand Kit Description",
        "insights": "Sample Insights",
        "sample_content": "Sample Content"
    }
}
```




## Delete Voice Profile

### Delete Voice Profile

**DELETE** `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

The Delete Voice Profile request lets you delete an existing Voice Profile from the Brand Kits in an organization.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **voice_profile_uid** (required)
  Enter the Voice Profile UID.
  Default: `your_voice_profile_uid`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Response

```json
{
  "message": "Voice Profile deleted successfully"
}
```

