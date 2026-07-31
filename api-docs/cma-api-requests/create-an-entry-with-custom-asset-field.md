---
title: "Create an entry with custom asset field"
description: /content_types/{content_type_uid}/entries?locale={locale_code}
url: /create-an-entry-with-custom-asset-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.893Z
updated_at: 2026-07-20T18:20:36.285Z
---

# Create an entry with custom asset field

<p>The <span data-type='inlineCode'>Create an entry with custom asset field</span> request is used to create an entry with a custom field that accepts data of type asset.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale_code}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type of which you wish to create an entry.&nbsp;The UID is generated based on the title of the content type and it is unique across a stack.</p>

## Query Parameters

- **locale** (required)
  <p>Enter the code of the language in which you want your entry to be localized in.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

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
  "entry":{
    "title":"Sample Entry",
    "asset_field":{
      "uid":"bltcdc098dc1a665a96",
      "_content_type_uid":"customassetfieldct",
      "unique_identifier":"3344f31f-5f30-428b-b3b5-0305f5db1026",
      "metadata":{
        "preset":{
          "uid":"3344f31f-5f30-428b-b3b5-0305f5db1026",
          "name":"Preset1",
          "options":{
            
          }
        }
      }
    },
    "tags":[
      
    ]
  }
}
```

## Response

```json
{
    "notice": "Entry created successfully.",
    "entry": {
        "title": "Sample Entry",
        "asset_field": {
            "uid": "bltcdc098dc1a665a96",
            "_content_type_uid": "customassetfieldct",
            "unique_identifier": "3344f31f-5f30-428b-b3b5-0305f5db1026",
            "metadata": {
                "preset": {
                    "uid": "3344f31f-5f30-428b-b3b5-0305f5db1026",
                    "name": "Preset1",
                    "options": {}
                }
            },
            "asset": {
                "uid": "bltcdc098dc1a665a96",
                "created_at": "2022-01-04T05:25:59.097Z",
                "updated_at": "2022-01-25T10:37:18.732Z",
                "created_by": "blt3cfef289de5d0c73",
                "updated_by": "blt3cfef289de5d0c73",
                "content_type": "image/jpeg",
                "file_size": "62181",
                "tags": [],
                "filename": "crop_area.jpg",
                "url": "https://dev16-images.contentstack.com/v3/assets/blt7a70757799323168/bltcdc098dc1a665a96/61d3da670c93ef0831bae4dd/crop_area.jpg",
                "ACL": [],
                "is_dir": false,
                "parent_uid": null,
                "_version": 2,
                "title": "crop_area.jpg"
            }
        },
        "tags": [],
        "locale": "en-us",
        "uid": "blt23cda66735c63ad7",
        "created_by": "bltf37273e0002a02fe",
        "updated_by": "bltf37273e0002a02fe",
        "created_at": "2022-02-23T19:17:39.646Z",
        "updated_at": "2022-02-23T19:17:39.646Z",
        "ACL": {},
        "_version": 1,
        "_in_progress": false
    }
}
```

