---
title: "Only Operator Within Group"
description: GET /content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=group_UID.field_UID
url: developers/apis/content-delivery-api/requests/only-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-01
---

# Only Operator Within Group

**GET** `/content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=group_UID.field_UID`

Get entries in which the data of a specific field is included in the response JSON.This query is specifically for entries and works on fields that are part of the Group field.

**Example:** In the Products’ content type, we have a Group field named Bank Offers ("uid":"bank_offers"). And, within this Group field, we have a subfield named Discount in Percentage ("uid":"discount_in_percentage"). If, for instance, you want to retrieve only the values of the Discount in Percentage field of all the entries, you can send the parameters as:

https://cdn.contentstack.io/v3/content_types/product/entries?environment=production&only[BASE][]=bank_offers.discount_in_percentage

##### Only Operator Within Modular Blocks

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
  Default: `bank_offers.discount_in_percentage`
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

