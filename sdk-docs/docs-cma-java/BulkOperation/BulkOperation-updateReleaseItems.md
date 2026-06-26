---
title: "updateReleaseItems"
description: "The `updateReleaseItems` method updates all items in a release to their latest saved versions."
url: "https://www.contentstack.com/java-management-bulkoperation-updatereleaseitems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## updateReleaseItems

The `updateReleaseItems`  method updates all items in a release to their latest saved versions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Configuration to update release items |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
BulkOperation bulkOperation = contentstack.stack().bulkOperation();

Call<ResponseBody> response = bulkOperation.updateReleaseItems(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println("Release items updated");
}
```
