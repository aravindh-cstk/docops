---
title: "Above"
description: "The Above method retrieves all entries for a specific taxonomy that match only the parent terms of a specified target term, excluding the target term itself and a specified level. Note: If you don't specify the level, the default behavior is to retrieve terms up to level 10."
url: "https://www.contentstack.com/dotnet-delivery-taxonomy-above"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Above

The `Above` method retrieves all entries for a specific taxonomy that match only the parent terms of a specified target term, excluding the target term itself and a specified level.

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
ContentstackClient stack = new ContentstackClinet("api_key", "delivery_token", "environment");
Query csQuery = stack.Taxonomies();

csQuery.Above("taxonomies.taxonomy_uid", "term_uid", 3);
csQuery.Find<Product>().ContinueWith((queryResult) => {
	//Your callback code.
});
```
