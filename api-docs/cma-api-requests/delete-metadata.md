---
title: "Delete metadata"
description: /metadata/{metadata_uid}
url: /delete-metadata
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.884Z
updated_at: 2026-02-18T11:35:47.895Z
---

# Delete metadata

<p>The <span data-type='inlineCode'>Delete metadata</span> request lets you delete the metadata associated with a specific entry or asset.</p><p>In the URL, you need to pass the unique ID of the metadata that you want to delete against the <span data-type='inlineCode'>metadata_uid</span> parameter.</p><p>Keep the following points in mind when deleting metadata:</p><ul><li>To delete metadata for a specific entry or asset, you need delete access to that entry or asset.</li><li>Once you delete entry or asset metadata, it is permanently deleted and cannot be restored.</li></ul>

**API Endpoint**: `/metadata/{metadata_uid}`

**Method**: `DELETE`

## URL Parameters

- **metadata_uid** (required)
  <p>Enter the unique ID of the metadata that you want to delete. You can find the metadata UID by running the <a href="#get-all-assets" target="_self">Get all assets</a> API request or <a href="https://www.contentstack.com/developers/apis/content-management-api#get-all-entries">Get all entries</a> API request.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **branch** (optional)
  <p>Enter your branch or alias unique ID.</p>

## Response

```json
{
	"notice": "Metadata deleted successfully."
}
```

