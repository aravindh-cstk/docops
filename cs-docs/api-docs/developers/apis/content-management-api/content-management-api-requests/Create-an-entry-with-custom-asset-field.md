---
title: "Create an entry with custom asset field"
description: POST /content_types/{content_type_uid}/entries?locale={locale_code}
url: developers/apis/content-management-api/requests/create-an-entry-with-custom-asset-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-11-20
---

# Create an entry with custom asset field

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry with custom asset field request is used to create an entry with a custom field that accepts data of type asset.

##### Create an entry with taxonomy

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to create an entry. The UID is generated based on the title of the content type and it is unique across a stack.
  Default: `your_content_type_uid`

## Query Parameters

- **locale** (required)
  Enter the code of the language in which you want your entry to be localized in.
  Default: `en-us`
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
- **Content-Type** (required)
  Enter "application/json" to pass a Request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

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

