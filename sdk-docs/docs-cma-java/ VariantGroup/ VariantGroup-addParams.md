---
title: "addParams"
description: "The addParams() method sets multiple query parameters for the request. Pass a HashMap of key-value pairs to customize the API response."
url: "https://www.contentstack.com/java-management-variants-group-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParams

The `addParams()` method sets multiple query parameters for the request. Pass a `HashMap` of key-value pairs to customize the API response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | HashMap<String,Object> | No | — | Maps key–value pairs for API request customization such as `include_count` , `limit` , or `content_type` . |

Returns:
Type
Void

```
// Create a map of query parameters to include in the API request

HashMap<String, Object>  params = new HashMap<>();

params.put("include_count", true);

params.put("include_variant_info", true);

variantGroup.addParams(params);
```
