---
title: "Create Voice Profile"
description: /v1/brand-kits/{brand_kit_uid}/voice-profiles
url: /create-voice-profile
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T06:02:09.736Z
updated_at: 2024-06-06T14:02:56.266Z
---

# Create Voice Profile

<p>The <span class="code">Create Voice Profile</span> request lets you create a new Voice Profile in a Brand Kit within an organization.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p><p>Here’s an example of the Request Body for creating a new Voice Profile:</p><pre>{<br />    "voice_profile": {<br />        "name": "Sample Voice Profile",<br />        "description": "This is the sample description for new Voice Profile.",<br />        "communication_style": {<br />            "formality_level": 4,<br />            "tone": 3,<br />            "humor_level": 2,<br />            "complexity_level": 1<br />        }<br />    }<br />}</pre>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}/voice-profiles`

**Method**: `POST`

## URL Parameters

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Headers

- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/brand-kit-management-api#authentication" target="_self">Authentication</a>.</p>

## Request Body

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

## Response

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

