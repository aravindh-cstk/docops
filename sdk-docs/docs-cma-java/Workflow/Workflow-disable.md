---
title: "disable"
description: "Disable Workflow request allows you to disable a workflow."
url: "https://www.contentstack.com/java-management-workflow-disable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## disable

Disable Workflow request allows you to disable a workflow.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.disable().execute();
if (response.isSuccessful) {
	System.out.println("Response" + response);
}
```
