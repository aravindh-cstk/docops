---
title: "fetchTasks"
description: "The \"Get all Tasks\" request retrieves a list of all tasks assigned to you. When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account."
url: "https://www.contentstack.com/java-management-workflow-fetchtasks"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchTasks

The "Get all Tasks" request retrieves a list of all tasks assigned to you.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.fetchTasks().execute();
if (response.isSuccessful) {
	System.out.println("Response" + response);
}
```
