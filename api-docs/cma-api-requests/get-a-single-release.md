---
title: "Get a single Release"
description: /releases/{release_uid}
url: /get-a-single-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:00.822Z
updated_at: 2026-01-06T10:16:00.915Z
---

# Get a single Release

<p>The <span data-type='inlineCode'>Get a single Release</span> request gets the details of a specific Release in a stack.</p><p>When executing the API request, provide the Release UID as parameter.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.releases.management:read</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}`

**Method**: `GET`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release of which you want to retrieve the details.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **release_version** (optional)
  <p>Enter the release version.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
    "release": {
        "uid": "bl***************38",
        "name": "Release Name",
        "description": "Fall Collection",
        "locked": false,
        "sys_version": 2,
        "created_at": "2025-04-04T08:41:52.729Z",
        "updated_at": "2025-07-24T10:34:29.852Z",
        "created_by": "bl***************8f",
        "updated_by": "bl***************2d",
        "status": [
            {
                "environment": "bl***************91",
                "status": "success",
                "user": "bl***************2d",
                "job_id": "7a78cb20-77b4-4bc5-93c0-092bcdde6c5a",
                "time": "2025-07-24T10:33:50.811Z"
            }
        ],
        "_deploy_latest": false,
        "items": [
            {
                "uid": "bl***************1a",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 2,
                "title": "Entry name",
                "variant_id": null
            },
            {
                "uid": "bl***************24",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 2,
                "title": "AI Innovation",
                "variant_id": null
            },
            {
                "uid": "bl***************10",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "blog",
                "version": 14,
                "title": "My First Blog",
                "variant_id": null
            },
            {
                "uid": "bl***************79",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 8,
                "title": "My first Article",
                "variant_id": null
            }
        ]
    }
}
```

