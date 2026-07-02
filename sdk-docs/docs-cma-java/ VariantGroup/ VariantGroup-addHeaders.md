---
title: "addHeaders"
description: "The addHeaders method sets multiple headers for the request. Pass a HashMap containing key–value pairs of header names and values."
url: "https://www.contentstack.com/java-management-variantgroups-addheaders"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addHeaders

The `addHeaders` method sets multiple headers for the request. Pass a `HashMap` containing key–value pairs of header names and values.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | HashMap<String,String> | No | — | A `HashMap` that maps `String` keys to `String` values. Common headers include `authorization` , `authtoken` , and `api_key` . |

Returns:
Type
Void

```
HashMap<String, String>  headers = new HashMap<>();

// Replace AUTHTOKEN and API_KEY with your actual credentials

headers.put("authtoken", "authToken");

headers.put("api_key", "apiKey");

variantGroup.addHeaders(headers);
```
