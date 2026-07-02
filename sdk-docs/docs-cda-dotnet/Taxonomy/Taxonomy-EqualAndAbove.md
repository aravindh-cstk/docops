---
title: "EqualAndAbove"
description: "The EqualAndAbove method retrieves all entries for a specific taxonomy that match a specific term and all its ancestor terms, requiring only the target term and a specified level. Note: If you don't specify the level, the default behavior is to retrieve terms up to level 10."
url: "https://www.contentstack.com/dotnet-delivery-taxonomy-equalandabove"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## EqualAndAbove

The `EqualAndAbove` method retrieves all entries for a specific taxonomy that match a specific term and all its ancestor terms, requiring only the target term and a specified level.

**Note:** If you don't specify the level, the default behavior is to retrieve terms up to level 10.

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

csQuery.EqualAndAbove("taxonomies.taxonomy_uid", "term_uid", 3);
csQuery.Find<Product>().ContinueWith((queryResult) => {
	//Your callback code.
});
```
