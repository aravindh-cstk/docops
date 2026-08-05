---
title: "workflow"
description: "A workflow is a tool that allows you to streamline the process of content creation and publishing and lets you manage the content lifecycle of your project smoothly."
url: "https://www.contentstack.com/java-management-stack-workflow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## workflow

A workflow is a tool that allows you to streamline the process of content creation and publishing and lets you manage the content lifecycle of your project smoothly.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| workflowUid | String | No | — | The UID of your workflow that you want to retrieve. |

Returns:
Type
Workflow

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.workflow("workflowUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
