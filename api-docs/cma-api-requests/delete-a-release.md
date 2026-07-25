---
title: "Delete a Release"
description: /releases/{release_uid}
url: /delete-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.787Z
updated_at: 2026-01-06T09:44:49.119Z
---

# Delete a Release

<p>The <span data-type='inlineCode'>Delete a Release</span> request allows you to delete a specific Release from a stack.</p><p>When executing the API request, provide the Release UID.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.releases.management:write</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}`

**Method**: `DELETE`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release that you want to delete.</p>

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
	"notice": "Release deleted successfully."
}
```

