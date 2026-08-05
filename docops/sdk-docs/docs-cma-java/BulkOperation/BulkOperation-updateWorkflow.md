---
title: "updateWorkflow"
description: "The `updateWorkflow` method updates the workflow stage for multiple entries in bulk."
url: "https://www.contentstack.com/java-management-bulkoperation-updateworkflow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## updateWorkflow

The `updateWorkflow` method updates the workflow stage for multiple entries in bulk.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The requestBody to update workflow |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
BulkOperation bulkOperation = contentstack.stack().bulkOperation();

Call<ResponseBody> response = bulkOperation.updateWorkflow(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println("Workflow updated");
}
```
