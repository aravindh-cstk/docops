---
title: "Get All Metadata"
description: /metadata/
url: /get-all-metadata
product: Contentstack
doc_type: api-request
created_at: 2023-02-14T11:58:38.194Z
updated_at: 2025-07-31T12:04:51.193Z
---

# Get All Metadata

<p>The <span data-type='inlineCode'>Get All Metadata</span> request returns comprehensive information of all the metadata attached to all the entries and assets in your stack.</p><p class="note"><strong>Note</strong>: Limited keys such as entity_uid, content_type_uid etc. are shown to the user with no access. For eg: You will see limited keys in the third object of the example response body as the user has no access to that particular entry in the stack.</p>

**API Endpoint**: `/metadata/`

**Method**: `GET`

## Query Parameters

- **include_branch** (optional)
  <p><span style='font-size: 12pt;'>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</span><br/></p>
- **include_multi_stack** (optional)
  <p><span style='font-size: 12pt;'>Set this to 'true' to fetch data from multiple stacks.</span></p>
- **include_multi_branch** (optional)
  <p><span style="font-size: 12pt;">Set this to 'true' to fetch data from multiple branches.</span></p>
- **include_title[]** (optional)
  <p>You can request multiple titles in a single response. For example:</p><ul><li>Set to ‘content_type’ to fetch the name of the content type.</li><li>Set to ‘stack’ to fetch the name of the stack.</li><li>Set to ‘entity’ to fetch the title of the entity. An entity could be either an entry or an asset.</li></ul>
- **limit** (optional)
  <p><span style='font-size: 12pt;'>Set the limit in between ‘0-100’ to limit the number of items returned as response.</span></p>
- **skip** (optional)
  <p><span style="font-size: 12pt;">Set this as ‘0’ to skip the number of items from the response body.</span></p>
- **query** (optional)
  <p><span style="font-size: 12pt;">Set this to {{{key}}:{{value}}}. This key allows you to fetch the data that matches the query value.</span></p>
- **asc** (optional)
  <p><span style='font-size: 12pt;'>Set this to {{key}}. This key will fetch the data in the ascending order as per the defined value.</span></p>
- **desc** (optional)
  <p><span style='font-size: 12pt;'>Set this to {{key}}. This key will fetch the data in the descending order as per the defined value.</span></p>
- **only[BASE][]** (optional)
  <p><span style='font-size: 12pt;'>Set this to {{key}}. This key will only return the data defined in the value field.</span><br/></p>
- **except[BASE][]** (optional)
  <p><span style='font-size: 12pt;'>Set this to {{key}}. This key will not return the data defined in the value field.</span><br/></p>

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

## Response

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

