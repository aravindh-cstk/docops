---
title: "EqualAndBelow"
description: "The EqualAndBelow method retrieves all entries for a specific taxonomy that match a specific term and its descendant terms, requiring only the target term. Note: This query is applicable for the stack.Taxonomies() and stack.ContentType('uid').Query() methods."
url: "https://www.contentstack.com/dotnet-delivery-taxonomy-equalandbelow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## EqualAndBelow

The `EqualAndBelow` method retrieves all entries for a specific taxonomy that match a specific term and its descendant terms, requiring only the target term.

**Note:** This query is applicable for the `stack.Taxonomies()` and `stack.ContentType('uid').Query()` methods.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Enter the UID of the taxonomy |
| value | string | Yes | — | Enter the UID of the term |
| levels | int | No | — | Enter the level |

Returns:
Type
Taxonomy

**Example:**

```
ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Query csQuery = stack.Taxonomies();

csQuery.EqualAndBelow("taxonomies.taxonomy_uid", "term_uid", 3);
csQuery.Find<Product>().ContinueWith((queryResult) => {
	//Your callback code.
});
```
