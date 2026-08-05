---
title: "Get metadata"
description: /metadata/{metadata_uid}
url: /get-metadata
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:03.590Z
updated_at: 2025-07-28T06:29:57.564Z
---

# Get metadata

<p>The <span data-type='inlineCode'>Get metadata</span> request fetches the metadata attached to a specific asset or entry of a stack.</p><p>In the URL, you need to pass the unique ID of the metadata against the <span data-type='inlineCode'>metadata_uid</span> parameter.</p><p></p><p>Keep the following points in mind when getting metadata:<br/></p><ul><li>To retrieve metadata for a specific entry or asset, you need to have read access to that entry or asset.</li><li>You must pass the <span data-type='inlineCode'>include_publish_details</span> query parameter to fetch the metadata publishing details in the response.</li></ul>

**API Endpoint**: `/metadata/{metadata_uid}`

**Method**: `GET`

## URL Parameters

- **metadata_uid** (required)
  <p>Enter the unique ID of the metadata that you want to fetch. You can find the metadata UID by running the <a href="#get-all-assets" target="_self">Get all assets</a> API request or <a href="#get-all-entries" target="_self">Get all entries</a> API request.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>
- **include_publish_details** (optional)
  <p>Enter 'true' to include the publish details of the entry.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a Request body.</p>
- **branch** (optional)
  <p>Enter your branch or alias unique ID.</p>

## Response

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

