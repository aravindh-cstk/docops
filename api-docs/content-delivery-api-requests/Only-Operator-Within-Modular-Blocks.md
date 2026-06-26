---
title: "Only Operator Within Modular Blocks"
description: GET /content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=modular_block_UID.block_UID.field_UID
url: developer-apis/content-delivery-api-requests/only-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-01
---

# Only Operator Within Modular Blocks

**GET** `/content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=modular_block_UID.block_UID.field_UID`

Get entries in which the data of a specific field is included in the response JSON.This query is specifically for fields that are part of any block within a Modular Block field.

**Example:** In the Products content type, we have a Modular Group field named Additional Info ("uid":"additional_info") that contains the Rating ("uid":"rating") block. And, within this Rating block, we have a field named Stars ("uid":"stars"). If, for instance, you want to retrieve the values of all the Stars field from all the entries, you can send the parameters as:

https://cdn.contentstack.io/v3/content_types/product/entries?environment=production&only[BASE][]=additional_info.rating.stars

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type in which you wish to search for entries.
  Default: `product`

## Query Parameters

- **locale** (optional)
  Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.
  Default: `en-us`
- **only[BASE][]** (required)
  Enter the actual query that will be executed to retrieve entries. This query should be in JSON format.
  Default: `additional_info.rating.stars`
- **include_branch** (optional)
  Set this to true to include the _branch top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `blt02f7b45378b008ee`
- **access_token** (required)
  Enter the environment-specific delivery token of your stack. Check [Authentication](#authentication).
  Default: `cs5b69faf35efdebd91d08bcf4`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "entries": [
    {
      "additional_info": [
        {
          "rating": {
            "stars": 1
          }
        },
        {}
      ],
      "uid": "bltbd92ac498e3d5f96"
    },
    {
      "additional_info": [
        {
          "rating": {
            "stars": 3
          }
        },
        {}
      ],
      "uid": "bltf2fa776b05a127a2"
    },
    {
      "additional_info": [
        {
          "rating": {
            "stars": 5
          }
        },
        {}
      ],
      "uid": "blt70cc672f4f806d3e"
    },
    {
      "additional_info": [
        {
          "rating": {
            "stars": 2
          }
        },
        {}
      ],
      "uid": "blt4f1fd991ec80e52f"
    },
    {
      "additional_info": [
        {},
        {
          "rating": {
            "stars": 5
          }
        }
      ],
      "uid": "blta278bb5672180c94"
    },
    {
      "additional_info": [
        {
          "rating": {
            "stars": 4
          }
        },
        {}
      ],
      "uid": "bltf8ab1ad67af3c66b"
    },
    {
      "additional_info": [
        {
          "rating": {
            "stars": 2
          }
        },
        {}
      ],
      "uid": "blt5b85ef3b0587565c"
    }
  ]
}
```

