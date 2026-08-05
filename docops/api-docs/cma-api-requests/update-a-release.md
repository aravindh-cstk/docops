---
title: "Update a Release"
description: /releases/{release_uid}
url: /update-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.726Z
updated_at: 2024-11-14T06:30:38.598Z
---

# Update a Release

<p>The <span data-type='inlineCode'>Update a Release</span> call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’.</p><p>When executing this API request, provide the Release UID as parameter. In the 'Body' section, you need to provide the new name and description of the Release that you want to update.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.releases.management:write</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}`

**Method**: `PUT`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release that you want to update the details of.</p>

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
- **Content-Type** (required)
  <p>Enter <span class="code">application/json</span> to pass a request body.</p>

## Request Body

```json
{
    "release": {
        "name": "Release Name",
        "description": "2018-12-22"
    }
}
```

## Response

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "name": "Release Name",
        "description": "2018-12-22",
        "locked": false,
        "uid": "blt9dc98b5d9d4d1e4a",
        "created_by": "blta068b6e50264acf6",
        "updated_by": "blta068b6e50264acf6",
        "created_at": "2023-02-28T07:11:57.077Z",
        "updated_at": "2023-02-28T07:19:30.886Z",
        "status": [],
        "_deploy_latest": false
    }
}
```

