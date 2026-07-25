---
title: "Update metadata"
description: /metadata/{metadata_uid}
url: /update-metadata
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.881Z
updated_at: 2025-10-01T10:31:09.352Z
---

# Update metadata

<p>The <span data-type='inlineCode'>Update metadata</span> request lets you update the metadata for a specific entry or asset.</p><p>In the ‘Body’ section, you need to provide the <span data-type='inlineCode'>metadata</span> key, that specifies the additional metadata that you want to attach to an existing asset/entry under a key name that suits your need.</p><p class="note"><strong>Note</strong>: The metadata size allowed per extension per entry/asset is <strong>5KB</strong>. Please get in touch with our <a href="mailto:support@contentstack.com" target="_blank">support</a> team for any queries.</p><p>You can partially update metadata for a defined key without having to specify all the key details every time you update metadata.</p><p>Keep the following points in mind when updating metadata:</p><ul><li>To create/update metadata for a specific entry or asset, you need update access to that entry or asset.</li><li>If you update entry or asset metadata once, then you cannot recover the previous version of the metadata.</li></ul><div class="note"><strong>Note</strong><ul><li>Once a metadata is updated, the <strong>associated entry or asset must be published or republished</strong> for the metadata to take effect.</li><li>You can provide any key name to store the metadata for your entry or asset except the following prebuilt keys: <span data-type='inlineCode'>created_by</span>, <span data-type='inlineCode'>updated_by</span>, <span data-type='inlineCode'>created_at</span>, <span data-type='inlineCode'>updated_at</span>, <span data-type='inlineCode'>deleted_at</span>, <span data-type='inlineCode'>api_key</span>, <span data-type='inlineCode'>scope</span>, <span data-type='inlineCode'>locale</span>, <span data-type='inlineCode'>type</span>, <span data-type='inlineCode'>extension_uid</span>, <span data-type='inlineCode'>_version</span>, <span data-type='inlineCode'>publish_details</span>.</li></ul></div>

**API Endpoint**: `/metadata/{metadata_uid}`

**Method**: `PUT`

## URL Parameters

- **metadata_uid** (required)
  <p>Enter the unique ID of the metadata that you want to update. You can find the metadata UID by running the <a href="#get-all-assets" target="_self">Get all assets</a> or <a href="#get-all-entries" target="_self">Get all entries</a> API request.</p>

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
		"extension_uid": "blt8c723a09fdd0b25e",
		"locale": "en_us",
		"_content_type_uid": "sample_content",
		"presets": [{
				"uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
				"name": "test1",
				"options": {}
			},
			
			{
				"name": "Test3",
				"uid": "8418f24e-4393-4dd9-9f20-d2ecba539431",
				"options": {
					"quality": "100",
					"transform": {
						"height": 500,
						"width": 500
					},
					"image-type": "jpeg",
					"focal-point": {
						"x": 0,
						"y": 0
					}
				}
			}
		]
	}
}
```

## Response

```json
{
    "notice": "Metadata updated successfully.",
    "metadata": {
        "uid": "cs112ba1c547a3488c",
        "entity_uid": "bltcbdfb3f254446076",
        "type": "entry",
        "_content_type_uid": "sample_content",
        "extension_uid": "blt8c723a09fdd0b25e",
        "presets": [
            {
                "uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
                "name": "test1",
                "options": {}
            },
            
            {
                "name": "Test3",
                "uid": "8418f24e-4393-4dd9-9f20-d2ecba539431",
                "options": {
                    "quality": "100",
                    "transform": {
                        "height": 500,
                        "width": 500
                    },
                    "image-type": "jpeg",
                    "focal-point": {
                        "x": 0,
                        "y": 0
                    }
                }
            }
        ],
        "locale": "en-us",
        "scope": "local",
        "created_by": "blt8588eda026739d77",
        "updated_by": "blt8588eda026739d77",
        "created_at": "2022-02-10T08:15:40.028Z",
        "updated_at": "2022-02-10T09:58:05.518Z",
        "api_key": "blt7a70757799323168",
        "deleted_at": false
    }
}
```

