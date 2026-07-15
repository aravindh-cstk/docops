---
title: "Only operator"
description: GET /content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=field_UID
url: developer-apis/content-delivery-api-requests/only-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-10-08
---

# Only operator

**GET** `/content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=field_UID`

The only[][] parameter will include the data of only the specified fields for each entry and exclude the data of all other fields. There are two approaches to this parameter. Firstly, we have the only[BASE][] parameter, where 'BASE' is the default value and refers to the top-level fields of the schema. Secondly, we have the only[Reference_field_uid][] parameter, where you need to enter the UID of the reference field in place of "Reference_field_uid".This query will work for entries only.

**Example:** In the Product content type, if we need to retrieve the data of only the Price in USD parameter of all the entries, you can send the parameter as:

https://cdn.contentstack.io/v3/content_types/author/entries?environment=production&only[BASE][]=price_in_usd

**Note**: To retrieve multiple fields use the following syntax:

https://cdn.contentstack.io/v3/content_types/author/entries?environment=production&only[BASE][]=price_in_usd&only[BASE][]=color

##### Only Operator Within Group

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
  Default: `price_in_usd`
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
      "price_in_usd": 749,
      "uid": "bltbd92ac498e3d5f96"
    },
    {
      "price_in_usd": 102.63,
      "uid": "bltf2fa776b05a127a2"
    },
    {
      "price_in_usd": 649,
      "uid": "blt70cc672f4f806d3e"
    },
    {
      "price_in_usd": 117.3,
      "uid": "blt4f1fd991ec80e52f"
    },
    {
      "price_in_usd": 146,
      "uid": "blta278bb5672180c94"
    },
    {
      "price_in_usd": 159.78,
      "uid": "bltf8ab1ad67af3c66b"
    },
    {
      "price_in_usd": 101,
      "uid": "blt5b85ef3b0587565c"
    }
  ]
}
```

