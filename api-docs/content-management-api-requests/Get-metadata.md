---
title: "Get metadata"
description: GET /metadata/{metadata_uid}
url: developer-apis/content-management-api-requests/get-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-28
---

# Get metadata

**GET** `/metadata/{metadata_uid}`

The Get metadata request fetches the metadata attached to a specific asset or entry of a stack.

In the URL, you need to pass the unique ID of the metadata against the metadata_uid parameter.

Keep the following points in mind when getting metadata:

- To retrieve metadata for a specific entry or asset, you need to have read access to that entry or asset.
- You must pass the include_publish_details query parameter to fetch the metadata publishing details in the response.

## URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to fetch. You can find the metadata UID by running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `cs3cbeeef5a398bf0f`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

## Sample Response

```json
{
    "metadata": {
        "uid": "cs3cbeeef5a398bf0f",
        "extension_uid": "bltf5630ec72e749256",
        "type": "entry",
        "entity_uid": "blt497cb94561dbc75b",
        "_content_type_uid": "samplecontent",
        "locale": "en-us",
        "api_key": "blta3e6690c83f6854b",
        "scope": "local",
        "created_by": "blt3a5076ac97d0c8f6",
        "updated_by": "blt3a5076ac97d0c8f6",
        "created_at": "2022-03-10T07:47:42.523Z",
        "updated_at": "2022-03-10T07:47:42.523Z",
        "deleted_at": false,
        "is_published": false,
        "presets": [
            {
                "uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
                "name": "Test1",
                "options": {}
            }
        ]
    }
}
```

