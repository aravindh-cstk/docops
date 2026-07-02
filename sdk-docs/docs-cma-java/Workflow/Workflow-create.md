---
title: "create"
description: "The \"Create a Workflow\" request allows you to create a Workflow."
url: "https://www.contentstack.com/java-management-workflow-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The "Create a Workflow" request allows you to create a Workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The details of the workflow in JSONObject format. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.create(requestBody).execute();
if (response.isSuccessful) {
	System.out.println("Response" + response);
}
```
