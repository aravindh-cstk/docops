---
title: "addReleaseItems"
description: "The addReleaseItems method adds multiple entries or assets to a release in a single request."
url: "https://www.contentstack.com/java-management-bulkoperation-addreleaseitems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addReleaseItems

The `addReleaseItems` method adds multiple entries or assets to a release in a single request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Items to be added to the release |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
BulkOperation bulkOperation = contentstack.stack().bulkOperation();

Call<ResponseBody> response = bulkOperation.addReleaseItems(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println("Items added to release");
}
```
