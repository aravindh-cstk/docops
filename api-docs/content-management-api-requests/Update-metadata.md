---
title: "Update metadata"
description: PUT /metadata/{metadata_uid}
url: developer-apis/content-management-api-requests/update-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-10-01
---

# Update metadata

**PUT** `/metadata/{metadata_uid}`

The Update metadata request lets you update the metadata for a specific entry or asset.

In the ‘Body’ section, you need to provide the metadata key, that specifies the additional metadata that you want to attach to an existing asset/entry under a key name that suits your need.

**Note**: The metadata size allowed per extension per entry/asset is **5KB**. Please get in touch with our [support](mailto:support@contentstack.com) team for any queries.

You can partially update metadata for a defined key without having to specify all the key details every time you update metadata.

Keep the following points in mind when updating metadata:

- To create/update metadata for a specific entry or asset, you need update access to that entry or asset.
- If you update entry or asset metadata once, then you cannot recover the previous version of the metadata.

**Note**

- Once a metadata is updated, the associated entry or asset must be published or republished for the metadata to take effect.
- You can provide any key name to store the metadata for your entry or asset except the following prebuilt keys: created_by, updated_by, created_at, updated_at, deleted_at, api_key, scope, locale, type, extension_uid, _version, publish_details.

## URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to update. You can find the metadata UID by running the [Get all assets](#get-all-assets) or [Get all entries](#get-all-entries) API request.
  Default: `cs112ba1c547a3488c`

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

## Sample Response

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

