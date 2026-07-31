---
title: "Only Operator Within Modular Blocks"
description: /content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=modular_block_UID.block_UID.field_UID
url: /only-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.223Z
updated_at: 2024-07-01T05:35:01.918Z
---

# Only Operator Within Modular Blocks

<p>Get entries in which the data of a specific field is included in the response JSON.<span>This query is specifically for fields that are part of any block within a Modular Block field.</span></p><p><strong>Example:</strong> In the <span data-type='inlineCode'>Products</span> content type, we have a Modular Group field named <span data-type='inlineCode'>Additional Info</span> ("uid":"additional_info") that contains the <span data-type='inlineCode'>Rating</span>&nbsp;("uid":"rating") block. And, within this <span data-type='inlineCode'>Rating</span>&nbsp;block, we have a field named <span data-type='inlineCode'>Stars</span> ("uid":"stars"). If, for instance, you want to retrieve the values of all the <span data-type='inlineCode'>Stars</span> field from all the entries, you can send the parameters as:</p><p><span data-type='inlineCode'>https://cdn.contentstack.io/v3/content_types/product/entries?environment=production&amp;only[BASE][]=additional_info.rating.stars</span></p>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=modular_block_UID.block_UID.field_UID`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type in which you wish to search for entries.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.</p>
- **only[BASE][]** (required)
  <p>Enter the actual query that will be executed to retrieve entries. This query should be in JSON format.</p>
- **include_branch** (optional)
  <p> Set this to <span data-type="inlineCode">true</span> to include the <span data-type="inlineCode">_branch</span> top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

