---
title: "Create a Space"
description: /v4/spaces
url: /create-a-space
product: Contentstack
doc_type: api-request
created_at: 2026-01-13T11:11:49.784Z
updated_at: 2026-01-13T11:21:14.716Z
---

# Create a Space

<p>The <span class="code">Create a space</span> request allows you to create a new space within Asset Management.</p><p>In the request body, you must provide:</p><ul><li><strong>name</strong> (required): The name of the space you want to create.<br /><strong>Example</strong>:&nbsp;<span class="code">Marketing</span></li><li><strong>description</strong> (optional): A short description of the space.<br /><strong>Example</strong>:&nbsp;<span class="code">This space contains all marketing assets.</span></li></ul><p>Sample request body:</p><pre>{
  "name": "Test Space",
  "description": "Sample Space Description"
}
</pre>

**API Endpoint**: `/v4/spaces`

**Method**: `POST`

## Headers

- **x-cs-api-version** (required)
  <p>Pass the API version to be used for the request.</p>
- **organization_uid** (required)
  <p>Enter your organization UID.</p>
- **access_token** (required)
  <p>Enter your authtoken.</p>
- **content-type** (required)
  <p>Pass <span class="code">application/json</span> value.</p>

## Request Body

```json
{
  "name": "Marketing",
  "description": "This space will contain all marketing assets."
}
```

## Response

```json
{
    "notice": "Space created successfully",
    "space": {
        "uid": "dam39f58e6ad9c75dd3",
        "name": "Test",
        "description": "description",
        "org_uid": "blt88556370c4c6f3cc",
        "owner_uid": "bltdec2ecb708ddfb23",
        "locales": [
            {
                "code": "en",
                "fallback": "en-us"
            },
            {
                "code": "en-us",
                "fallback": null
            }
        ],
        "tags": [],
        "created_by": "bltdec2ecb708ddfb23",
        "updated_by": "bltdec2ecb708ddfb23",
        "updated_at": "2025-04-28T12:26:42.976Z",
        "created_at": "2025-04-28T12:26:42.976Z",
        "deleted_at": false,
        "meta_info": {
            "storage": 0,
            "assets_count": 0,
            "folders_count": 0,
            "last_modified_at": "2025-04-28T12:26:42.976Z"
        },
        "users_count": 0
    }
}
```

