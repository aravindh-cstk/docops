---
title: "Only operator"
description: /content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=field_UID
url: /only-operator
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.019Z
updated_at: 2024-10-08T05:17:11.647Z
---

# Only operator

<p>The <span data-type='inlineCode'>only[][]</span> parameter will include the data of only the specified fields for each entry and exclude the data of all other fields. There are two approaches to this parameter. Firstly, we have the <span data-type='inlineCode'>only[BASE][]</span> parameter, where 'BASE' is the default value and refers to the top-level fields of the schema. Secondly, we have the <span data-type='inlineCode'>only[Reference_field_uid][]</span> parameter, where you need to enter the UID&nbsp;of the reference field in place&nbsp;of "<span data-type='inlineCode'>Reference_field_uid</span>".<span>This query will work for entries only.</span></p><p><strong>Example:</strong> In the <span data-type='inlineCode'>Product</span> content type, if we need to retrieve the data of only the <span data-type='inlineCode'>Price in USD</span> parameter of all the entries, you can send the parameter as:</p><p><span data-type='inlineCode'>https://cdn.contentstack.io/v3/content_types/author/entries?environment=production&amp;only[BASE][]=price_in_usd</span></p><div class="note"><strong>Note</strong>: To retrieve multiple fields use the following syntax:<p><span data-type='inlineCode'>https://cdn.contentstack.io/v3/content_types/author/entries?environment=production&amp;only[BASE][]=price_in_usd&amp;only[BASE][]=color</span></p></div><h5 id="only-operator-within-group">Only Operator Within Group</h5>

**API Endpoint**: `/content_types/{content_type_uid}/entries?locale={locale}&only[BASE][]=field_UID`

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

