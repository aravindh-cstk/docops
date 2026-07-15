---
title: "delete"
description: "The `delete` method permanently deletes multiple entries or assets from your stack."
url: "https://www.contentstack.com/java-management-bulkoperation-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The `delete` method permanently deletes multiple entries or assets from your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Data to delete multiple items from stack |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
BulkOperation bulkOperation = contentstack.stack().bulkOperation();

Call<ResponseBody> response = bulkOperation.delete(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println("Deleted successfully");
}
```
