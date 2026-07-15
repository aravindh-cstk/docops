---
title: "Create metadata"
description: POST /metadata
url: developer-apis/content-management-api-requests/create-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-29
---

# Create metadata

**POST** `/metadata`

The Create metadata request lets you create metadata for a specific asset or entry. Whenever you create metadata for an entry or asset, you need to specify the extension to which it will be connected.

In the ‘Body’ section, you need to provide the following information:

- entity_uid: Specify the unique ID of the entry or asset for which you want to create metadata.
- type: Specify whether you want to create metadata for an entry or asset.Note: The default type is an asset if not mentioned.
- _content_type_uid: Specify the content type UID if you are creating metadata for an entry.Note: For an asset type, the content type UID will be "sys_assets".
- extension_uid: Specify the UID of the extension for which you want to create the metadata.
- locale: Specify the language in which the entry is localized if the type is an entry. If not provided, the system defaults to the stack’s master_locale.
- metadata key: Specify the additional metadata that you want to attach to an existing asset/entry under a key name that suits your need.Note: The metadata size allowed per extension per entry/asset is 5KB. Please get in touch with our support team for any queries.

**Note**

- Once a metadata is created, the associated entry or asset must be published or republished for the metadata to take effect.
- You can provide any key name to store the metadata for your entry or asset except the following prebuilt keys: created_by, updated_by, created_at, updated_at, deleted_at, api_key, scope, locale, type, extension_uid, _version.

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

## Sample Request

```json
{
	"metadata": {
		"entity_uid": "bltcbdfb3f254446076",
		"type": "entry",
		"_content_type_uid": "sample_content",
		"extension_uid": "blt8c723a09fdd0b25e",
		"presets": [{
			"uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
			"name": "Test1",
			"options": {

			}
		}]
	}
}
```

## Sample Response

```json
{
	"notice": "Metadata created successfully.",
	"metadata": {
		"uid": "cs112ba1c547a3488c",
		"entity_uid": "bltcbdfb3f254446076",
		"type": "entry",
		"_content_type_uid": "sample_content",
		"extension_uid": "blt8c723a09fdd0b25e",
		"presets": [{
			"uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
			"name": "test1",
			"options": {

			}
		}],
		"locale": "en-us",
		"scope": "local",
		"created_by": "blt8588eda026739d77",
		"updated_by": "blt8588eda026739d77",
		"created_at": "2022-02-10T08:15:40.028Z",
		"updated_at": "2022-02-10T08:15:40.028Z",
		"api_key": "blt7a70757799323168",
		"deleted_at": false,
		"_version": 1
	}
}
```

