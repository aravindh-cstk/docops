---
title: "Only Operator Within Group"
description: /content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=group_UID.field_UID
url: /only-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.044Z
updated_at: 2024-07-01T05:34:39.196Z
---

# Only Operator Within Group

<p>Get entries in which the data of a specific field is included in the response JSON.<span>This query is specifically for entries and works on fields that are part of the Group field.</span></p><p><strong>Example:</strong> In the <span data-type='inlineCode'>Products</span>’ content type, we have a Group field named <span data-type='inlineCode'>Bank Offers</span> ("uid":"bank_offers"). And, within this Group field, we have a subfield named <span data-type='inlineCode'>Discount in Percentage</span> ("uid":"discount_in_percentage"). If, for instance, you want to retrieve only the values of the <span data-type='inlineCode'>Discount in Percentage</span> field of all the entries, you can send the parameters as:</p><p><span data-type='inlineCode'>https://cdn.contentstack.io/v3/content_types/product/entries?environment=production&amp;only[BASE][]=bank_offers.discount_in_percentage</span></p><h5 id="only-operator-within-modular-blocks">Only Operator Within Modular Blocks</h5>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=group_UID.field_UID`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type in which you wish to search for entries.</p>

## Query Parameters

- **locale** (optional)
  <p><span style="background-color: initial;">Enter the code of the language of which the entries needs to be included. Only the entries published in this locale will be displayed.</span></p>
- **only[BASE][]** (required)
  <p><span style="background-color: initial;">Enter the actual query that will be executed to retrieve entries. This query should be in JSON format.</span></p>
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
      "bank_offers": [
        {
          "discount_in_percentage": 12
        }
      ],
      "uid": "bltbd92ac498e3d5f96"
    },
    {
      "bank_offers": [
        {
          "discount_in_percentage": 15
        }
      ],
      "uid": "bltf2fa776b05a127a2"
    },
    {
      "bank_offers": [
        {
          "discount_in_percentage": 60
        },
        {
          "discount_in_percentage": 55
        }
      ],
      "uid": "blt70cc672f4f806d3e"
    },
    {
      "bank_offers": [
        {
          "discount_in_percentage": 27
        },
        {
          "discount_in_percentage": 24
        }
      ],
      "uid": "blt4f1fd991ec80e52f"
    },
    {
      "bank_offers": [
        {
          "discount_in_percentage": 12
        }
      ],
      "uid": "blta278bb5672180c94"
    },
    {
      "bank_offers": [
        {
          "discount_in_percentage": 25
        },
        {
          "discount_in_percentage": 30
        }
      ],
      "uid": "bltf8ab1ad67af3c66b"
    },
    {
      "bank_offers": [
        {
          "discount_in_percentage": 8
        }
      ],
      "uid": "blt5b85ef3b0587565c"
    }
  ]
}
```

