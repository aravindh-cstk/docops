---
title: "Publish metadata"
description: /metadata/{metadata_uid}/publish
url: /publish-metadata
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.997Z
updated_at: 2025-10-01T09:09:20.253Z
---

# Publish metadata

<p>The <span data-type='inlineCode'>Publish metadata</span> request lets you publish the metadata associated with a specific entry or asset.</p><p>In the URL, you need to pass the unique ID of the metadata that you want to publish against the <span data-type='inlineCode'>metadata_uid</span> parameter.</p><p>Keep the following points in mind when publishing metadata:</p><ul><li>When you publish an entry/asset, the associated metadata of that entry/asset will also get published.<p class="tip"><strong>Tip</strong>: If you publish only the metadata without publishing the corresponding asset or entry, the metadata will not resolve if you pass <span class="code">include_metadata: true</span>. As a best practice, always publish the associated asset or entry.</p></li><li>You must pass the <span data-type='inlineCode'>include_publish_details</span> query parameter to fetch the metadata publishing details in the response.</li></ul>

**API Endpoint**: `/metadata/{metadata_uid}/publish`

**Method**: `POST`

## URL Parameters

- **metadata_uid** (required)
  <p>Enter the unique ID of the metadata that&nbsp;you want to publish. You can find the metadata UID by passing <span data-type='inlineCode'>include_metadata</span> parameters while running the <a href="#get-all-assets" target="_self">Get all assets</a> API request or <a href="#get-all-entries" target="_self">Get all entries</a> API request.</p>

## Query Parameters

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

## Request Body

```json
{
  "metadata": {
    "environments": [
      "test"
    ],
    "locales": [
      "en-us"
    ]
  }
}
```

## Response

```json
{
    "notice": "Metadata sent for publishing."
}
```

