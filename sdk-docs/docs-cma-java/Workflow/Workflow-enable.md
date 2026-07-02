---
title: "enable"
description: "The \"Enable Workflow\" request allows you to enable a workflow."
url: "https://www.contentstack.com/java-management-workflow-enable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## enable

The "Enable Workflow" request allows you to enable a workflow.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.enable().execute();
if (response.isSuccessful) {
	System.out.println("Response" + response);
}
```
