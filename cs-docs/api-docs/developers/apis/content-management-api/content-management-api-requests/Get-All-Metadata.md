---
title: "Get All Metadata"
description: GET /metadata/
url: developers/apis/content-management-api/requests/get-all-metadata
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-31
---

# Get All Metadata

**GET** `/metadata/`

The Get All Metadata request returns comprehensive information of all the metadata attached to all the entries and assets in your stack.

**Note**: Limited keys such as entity_uid, content_type_uid etc. are shown to the user with no access. For eg: You will see limited keys in the third object of the example response body as the user has no access to that particular entry in the stack.

## Query Parameters

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

## Headers

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

## Sample Response

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

