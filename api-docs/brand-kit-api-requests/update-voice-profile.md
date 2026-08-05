---
title: "Update Voice Profile"
description: /v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}
url: /update-voice-profile
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T06:04:41.308Z
updated_at: 2025-11-21T12:20:24.193Z
---

# Update Voice Profile

<p>The <span class="code">Update Voice Profile</span> request lets you update an existing Voice Profile from the Brand Kit in an organization.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p><p>Here’s an example of the Request Body for updating a Voice Profile:</p><pre>{<br />    "voice_profile":{<br />        "description": "Test Brand Kit Description",<br />        "insights": "Sample Insights",<br />        "sample_content": "Sample Content",<br />        "communication_style": {<br />            "complexity_level": 1,<br />            "formality_level": 2,<br />            "humor_level": 3,<br />            "tone": 4<br />        }<br />    }<br />}</pre>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}/voice-profiles/{voice_profile_uid}`

**Method**: `PUT`

## URL Parameters

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>
- **voice_profile_uid** (required)
  <p>Enter the Voice Profile UID.</p>

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

## Response

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

