---
title: "Get all entries with defined taxonomies"
description: /taxonomies/entries?query={"taxonomies.taxonomy_uid": "term_uid"}
url: /get-all-entries-with-defined-taxonomies
product: Contentstack
doc_type: api-request
created_at: 2023-11-20T16:34:26.105Z
updated_at: 2026-05-18T15:27:24.874Z
---

# Get all entries with defined taxonomies

<p>The <span data-type='inlineCode'>Get all entries with defined taxonomies</span> request returns comprehensive information of all the entries associated with a specific taxonomy or term available in a particular stack in your organization.</p><p>To retrieve entries that match only taxonomy and term UID and belong to a specific content type.</p><pre>query={
  "taxonomies.taxonomy_uid" : "term_uid",
  "_content_type_uid": "_content_type_uid"
}</pre><p><strong>Example</strong>: If you want to match entries with the term red from the products content type.</p><pre>query={
  "taxonomies.color" : "red",
  "_content_type_uid": "products"
}</pre><p>To retrieve entries that match only taxonomy and term UID and belong to multiple content types.</p><pre>query={
  "taxonomies.taxonomy_uid" : "term_uid",
  "_content_type_uid": { "$in" : ["_content_type_uid1", "_content_type_uid2"] }
}</pre><p><strong>Example</strong>: If you want to match entries with the term red from the products or blogs content types.</p><pre>query={
  "taxonomies.color" : "red",
  "_content_type_uid": { "$in" : ["products", "blogs"] }
}</pre><p class="note"><strong>Note</strong>: Refer to the <a href="/docs/developers/apis/content-delivery-api#taxonomy-queries" target="_self">Taxonomy Queries</a> section for more query filters.</p>

**API Endpoint**: `/taxonomies/entries?query={"taxonomies.taxonomy_uid": "term_uid"}`

**Method**: `GET`

## Query Parameters

- **query** (optional)
  <p>Provide a custom query in <span data-type='inlineCode'>string </span>format.</p>
- **resolve_terms** (optional)
  <p>If <span data-type='inlineCode'>true</span>, includes resolved term metadata (name, depth, order) for each taxonomy field.</p>

## Headers

- **api_key** (required)
  <p><span style="color: rgb(116, 133, 144); font-family: proximaNovaRegular, Arial, Helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Enter the API key of your stack.</span></p>
- **access_token** (required)
  <p>Enter the environment-specific delivery token of your stack. Check <a href="#authentication">Authentication</a>.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

```json
{
  "entries": [
    {
      "uid": "entry_uid_1",
      "title": "Summer Hat",
      "color": [
        {
          "uid": "yellow",
          "name": "Yellow",
          "depth": 1,
          "order": 2
        }
      ],
      "_content_type_uid": "accessories"
    }
  ]
}
```

