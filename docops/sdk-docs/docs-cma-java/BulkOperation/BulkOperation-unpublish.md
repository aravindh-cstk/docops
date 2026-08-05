---
title: "unpublish"
description: "The `unpublish` method removes multiple entries and assets from specific environments and locales."
url: "https://www.contentstack.com/java-management-bulkoperation-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## unpublish

The `unpublish` method removes multiple entries and assets from specific environments and locales.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Data to unpublish multiple items |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
BulkOperation bulkOperation = contentstack.stack().bulkOperation();

Call<ResponseBody> response = bulkOperation.unpublish(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println("Unpublished successfully");
}
```
