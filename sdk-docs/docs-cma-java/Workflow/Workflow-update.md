---
title: "update"
description: "The \"Add or Update Workflow\" request allows you to add a workflow stage or update the details of the existing stages of a workflow."
url: "https://www.contentstack.com/java-management-workflow-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Add or Update Workflow" request allows you to add a workflow stage or update the details of the existing stages of a workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The body should be in JSONObject format. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.update(requestBody).execute();
if (response.isSuccessful) {
	System.out.println("Response" + response);
}
```
