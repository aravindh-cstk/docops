---
title: "fetch"
description: "The \"Get a Single Workflow\" request retrieves the comprehensive details of a specific Workflow of a stack."
url: "https://www.contentstack.com/java-management-workflow-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get a Single Workflow" request retrieves the comprehensive details of a specific Workflow of a stack.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.fetch().execute();
if (response.isSuccessful) {
	System.out.println("Response" + response);
}
```
