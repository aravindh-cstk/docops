---
title: "Get All Voice Profiles"
description: /v1/brand-kits/{brand_kit_uid}/voice-profiles?skip={index}&limit={limit}&include_users={boolean}&include_count={boolean}&typeahead={string}&sort={string}&order={string}
url: /get-all-voice-profiles
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T06:02:45.207Z
updated_at: 2025-11-21T12:14:24.659Z
---

# Get All Voice Profiles

<p>The <span class="code">Get All Voice Profiles</span> request fetches the list of all Voice Profiles in a Brand Kit within an organization.</p>
<p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:read</span> scope.</p>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}/voice-profiles?skip={index}&limit={limit}&include_users={boolean}&include_count={boolean}&typeahead={string}&sort={string}&order={string}`

**Method**: `GET`

## URL Parameters

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Query Parameters

- **skip** (optional)
  <p>Enter the number of Voice Profiles to be skipped from the response body.</p>
- **limit** (optional)
  <p>Enter the maximum number of Voice Profiles to be returned.</p>
- **include_users** (optional)
  <p>The “include_users” parameter allows you to fetch users information.</p>
- **include_count** (optional)
  <p>The “include_count” parameter allows you to fetch the total count of the stacks owned by or shared with a user account.</p>
- **typeahead** (optional)
  <p>The “typeahead” parameter retrieves responses that match the provided string.</p>
- **sort** (optional)
  <p>Enter the value on the basis of which you want to sort your Voice Profiles. The voice profiles can be sorted by <span class="code">created_at</span>, <span class="code">updated_at</span>, <span class="code"></span>and <span class="code">name</span> values. The default value is <span class="code">updated_at</span>.</p>
- **order** (optional)
  <p>Specify how you want to order your Voice Profiles; <span class="code">asc</span> for ascending order and desc for descending order. The default value is <span class="code">desc</span>.</p>

## Headers

- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/brand-kit-management-api#authentication" target="_self">Authentication</a>.</p>

## Response

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

