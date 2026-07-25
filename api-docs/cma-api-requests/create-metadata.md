---
title: "Create metadata"
description: /metadata
url: /create-metadata
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.850Z
updated_at: 2025-07-29T04:36:19.444Z
---

# Create metadata

<p>The <span data-type='inlineCode'>Create metadata</span> request lets you create metadata for a specific asset or entry. Whenever you create metadata for an entry or asset, you need to specify the extension to which it will be connected.</p><p>In the ‘Body’ section, you need to provide the following information:</p><ul><li><span data-type='inlineCode'><strong>entity_uid</strong></span>: Specify the unique ID of the entry or asset for which you want to create metadata.</li><li><span data-type='inlineCode'><strong>type</strong></span>: Specify whether you want to create metadata for an entry or asset.<p class="note"><strong>Note</strong>: The default type is an asset if not mentioned.</p></li><li><span data-type='inlineCode'><strong>_content_type_uid</strong></span>: Specify the content type UID if you are creating metadata for an entry.<p class="note"><strong>Note</strong>: For an asset type, the content type UID will be "<span data-type='inlineCode'>sys_assets</span>".</p></li><li><span data-type='inlineCode'><strong>extension_uid</strong></span>: Specify the UID of the extension for which you want to create the metadata.</li><li><span data-type='inlineCode'><strong>locale</strong></span>: Specify the language in which the entry is localized if the type is an entry. If not provided, the system defaults to the stack’s <span data-type='inlineCode'>master_locale</span>.</li><li><span data-type='inlineCode'><strong>metadata key</strong></span>: Specify the additional metadata that you want to attach to an existing asset/entry under a key name that suits your need.<p class="note"><strong>Note</strong>: The metadata size allowed per extension per entry/asset is <strong>5KB</strong>. Please get in touch with our <a href="mailto:support@contentstack.com" target="_blank">support</a> team for any queries.</p></li></ul><div class="note"><strong>Note</strong><ul><li>Once a metadata is created, the associated <strong>entry or asset must be published or republished</strong> for the metadata to take effect.</li><li>You can provide any key name to store the metadata for your entry or asset except the following prebuilt keys: <span data-type='inlineCode'>created_by</span>, <span data-type='inlineCode'>updated_by</span>, <span data-type='inlineCode'>created_at</span>, <span data-type='inlineCode'>updated_at</span>, <span data-type='inlineCode'>deleted_at</span>, <span data-type='inlineCode'>api_key</span>, <span data-type='inlineCode'>scope</span>, <span data-type='inlineCode'>locale</span>, <span data-type='inlineCode'>type</span>, <span data-type='inlineCode'>extension_uid</span>, <span data-type='inlineCode'>_version</span>.</li></ul></div>

**API Endpoint**: `/metadata`

**Method**: `POST`

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

## Response

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

