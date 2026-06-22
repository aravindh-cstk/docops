---
title: "Delete metadata"
description: DELETE /metadata/{metadata_uid}
url: developers/apis/content-management-api/requests/delete-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete metadata


**Method:** `DELETE`  
**Endpoint:** `/metadata/{metadata_uid}`

The Delete metadata request lets you delete the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to delete against the metadata_uid parameter.

Keep the following points in mind when deleting metadata:

- To delete metadata for a specific entry or asset, you need delete access to that entry or asset.
- Once you delete entry or asset metadata, it is permanently deleted and cannot be restored.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | main | Enter your branch or alias unique ID. |

| metadata_uid | cs3cbeeef5a398bf0f | Enter the unique ID of the metadata that you want to delete. You can find the metadata UID by running the [Get all assets](#get-all-assets) API request or [Get  |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"notice": "Metadata deleted successfully."
}
```
