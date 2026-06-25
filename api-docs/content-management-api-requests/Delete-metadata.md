---
title: "Delete metadata"
description: DELETE /metadata/{metadata_uid}
url: developer-apis/content-management-api-requests/delete-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete metadata

**DELETE** `/metadata/{metadata_uid}`

The Delete metadata request lets you delete the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to delete against the metadata_uid parameter.

Keep the following points in mind when deleting metadata:

- To delete metadata for a specific entry or asset, you need delete access to that entry or asset.
- Once you delete entry or asset metadata, it is permanently deleted and cannot be restored.

## URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to delete. You can find the metadata UID by running the [Get all assets](#get-all-assets) API request or [Get all entries](https://www.contentstack.com/developer-apis/content-management-api#get-all-entries) API request.
  Default: `cs3cbeeef5a398bf0f`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
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
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

## Sample Response

```json
{
	"notice": "Metadata deleted successfully."
}
```

