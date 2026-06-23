---
title: "CMA | Metadata for Entries and Assets"
description: Manage custom metadata for entries and assets to support richer organization, search, and operational workflows.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/metadata-for-entries-and-assets
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Metadata for Entries and Assets

Metadata is a piece of information that lets you describe or classify an asset/entry.

You can manage your digital entities effectively and facilitate enhanced accessibility with additional metadata.

**Note:** The Metadata feature allows users to update their [asset metadata](../../../../cs-docs/content-managers/author-content/additional-metadata-support-for-assets.md) or [entry metadata](../../../../cs-docs/content-managers/working-with-entries/additional-metadata-support-for-entries.md) without incrementing the asset or entry version.

**Note:** An [extension](../../../api-detail/content-management-api.md#extensions) or app is required to use Metadata APIs.

## Get Metadata

### Get metadata

**GET** `/metadata/{metadata_uid}`

The Get metadata request fetches the metadata attached to a specific asset or entry of a stack.

In the URL, you need to pass the unique ID of the metadata against the metadata_uid parameter.

Keep the following points in mind when getting metadata:

- To retrieve metadata for a specific entry or asset, you need to have read access to that entry or asset.
- You must pass the include_publish_details query parameter to fetch the metadata publishing details in the response.

#### URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to fetch. You can find the metadata UID by running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `cs3cbeeef5a398bf0f`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`
- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `false`

#### Headers

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

#### Sample Response

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




## Get All Metadata

### Get All Metadata

**GET** `/metadata/`

The Get All Metadata request returns comprehensive information of all the metadata attached to all the entries and assets in your stack.

**Note**: Limited keys such as entity_uid, content_type_uid etc. are shown to the user with no access. For eg: You will see limited keys in the third object of the example response body as the user has no access to that particular entry in the stack.

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`
- **include_multi_stack** (optional)
  Set this to 'true' to fetch data from multiple stacks.
  Default: `false`
- **include_multi_branch** (optional)
  Set this to 'true' to fetch data from multiple branches.
  Default: `false`
- **include_title[]** (optional)
  You can request multiple titles in a single response. For example: - Set to ‘content_type’ to fetch the name of the content type. - Set to ‘stack’ to fetch the name of the stack. - Set to ‘entity’ to fetch the title of the entity. An entity could be either an entry or an asset.
  Default: `content_type`
- **limit** (optional)
  Set the limit in between ‘0-100’ to limit the number of items returned as response.
  Default: `50`
- **skip** (optional)
  Set this as ‘0’ to skip the number of items from the response body.
  Default: `7`
- **query** (optional)
  Set this to {{{key}}:{{value}}}. This key allows you to fetch the data that matches the query value.
  Default: `{“tags” :”presetBuilder”}`
- **asc** (optional)
  Set this to {{key}}. This key will fetch the data in the ascending order as per the defined value.
  Default: `type`
- **desc** (optional)
  Set this to {{key}}. This key will fetch the data in the descending order as per the defined value.
  Default: `type`
- **only[BASE][]** (optional)
  Set this to {{key}}. This key will only return the data defined in the value field.
  Default: `presets`
- **except[BASE][]** (optional)
  Set this to {{key}}. This key will not return the data defined in the value field.
  Default: `created_by`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: ` your_management_token`
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

#### Sample Response

```json
{
    "metadata": [
        {
            "uid": "cs71bc04a2566cd9d8",
            "extension_uid": "blte879cdefd0d30f36",
            "type": "entry",
            "entity_uid": "blt9c7274d7e34e3bbb",
            "_content_type_uid": "sample",
            "locale": "en-us",
            "api_key": "blt506a64809d6fe5d5",
            "scope": "local",
            "created_by": "blte79886ae7dda55c4",
            "updated_by": "blte79886ae7dda55c4",
            "created_at": "2023-04-10T06:43:17.905Z",
            "updated_at": "2023-04-10T06:43:17.905Z",
            "deleted_at": false,
            "_version": 1,
            "presets": [
                {
                    "uid": "d9300b22-f37d-4b25-93df-fc0395d62814",
                    "name": "Test1",
                    "options": {}
                }
            ],
            "_metadata": {
                "title": {
                    "stack": "Test 101",
                    "entity": "Sample",
                    "content_type": "Sample"
                }
            }
        },
        {
            "uid": "cs5121647dd9154d42",
            "extension_uid": "blt912e40f8b2c3c71c",
            "type": "entry",
            "entity_uid": "bltbed0b14a57107fe7",
            "_content_type_uid": "demo",
            "locale": "en-us",
            "api_key": "blt506a64809d6fe5d5",
            "scope": "local",
            "created_by": "blte79886ae7dda55c4",
            "updated_by": "blte79886ae7dda55c4",
            "created_at": "2022-12-12T12:45:59.291Z",
            "updated_at": "2022-12-12T12:45:59.291Z",
            "deleted_at": false,
            "_version": 1,
            "tags": [
                "blt1db5abe772845959:cross_stack:main:bltb346e33a286a069c",
                "bltb346e33a286a069c:main"
            ],
            "refers_to": [
                {
                    "api_key": "bltb346e33a286a069c",
                    "_content_type_uid": "cross_stack",
                    "entry_uid": "blt1db5abe772845959",
                    "branch": "main",
                    "path": "custom"
                }
            ],
            "_metadata": {
                "title": {
                    "stack": "Test 101",
                    "entity": "New entry custom",
                    "content_type": "demo"
                }
            }
        }
    ]
}
```




## Create Metadata

### Create metadata

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

#### Headers

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

#### Sample Request

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

#### Sample Response

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




## Update Metadata

### Update metadata

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

#### URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to update. You can find the metadata UID by running the [Get all assets](#get-all-assets) or [Get all entries](#get-all-entries) API request.
  Default: `cs112ba1c547a3488c`

#### Headers

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

#### Sample Request

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

#### Sample Response

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




## Delete Metadata

### Delete metadata

**DELETE** `/metadata/{metadata_uid}`

The Delete metadata request lets you delete the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to delete against the metadata_uid parameter.

Keep the following points in mind when deleting metadata:

- To delete metadata for a specific entry or asset, you need delete access to that entry or asset.
- Once you delete entry or asset metadata, it is permanently deleted and cannot be restored.

#### URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to delete. You can find the metadata UID by running the [Get all assets](#get-all-assets) API request or [Get all entries](https://www.contentstack.com/developers/apis/content-management-api#get-all-entries) API request.
  Default: `cs3cbeeef5a398bf0f`

#### Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

#### Headers

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

#### Sample Response

```json
{
	"notice": "Metadata deleted successfully."
}
```




## Publish Metadata

### Publish metadata

**POST** `/metadata/{metadata_uid}/publish`

The Publish metadata request lets you publish the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to publish against the metadata_uid parameter.

Keep the following points in mind when publishing metadata:

- When you publish an entry/asset, the associated metadata of that entry/asset will also get published.Tip: If you publish only the metadata without publishing the corresponding asset or entry, the metadata will not resolve if you pass include_metadata: true. As a best practice, always publish the associated asset or entry.
- You must pass the include_publish_details query parameter to fetch the metadata publishing details in the response.

#### URL Parameters

- **metadata_uid** (required)
  Enter the unique ID of the metadata that you want to publish. You can find the metadata UID by passing include_metadata parameters while running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `blt045d039eb6f2f9df`

#### Query Parameters

- **include_publish_details** (optional)
  Enter 'true' to include the publish details of the entry.
  Default: `false`

#### Headers

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

#### Sample Request

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

#### Sample Response

```json
{
    "notice": "Metadata sent for publishing."
}
```




## Unpublish Metadata

### Unpublish metadata

**POST** `/metadata/{metadata_uid}/unpublish`

The Unpublish metadata request lets you unpublish the metadata associated with a specific entry or asset.

In the URL, you need to pass the unique ID of the metadata that you want to unpublish against the metadata_uid parameter.

#### URL Parameters

- **metadata_uid** (optional)
  Enter the unique ID of the metadata that you want to unpublish. You can find the metadata UID by by passing include_metadata parameters while running the [Get all assets](#get-all-assets) API request or [Get all entries](#get-all-entries) API request.
  Default: `blt045d039eb6f2f9df`

#### Headers

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

#### Sample Request

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

#### Sample Response

```json
{
    "notice": "Metadata sent for unpublishing."
}
```

