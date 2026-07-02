---
title: "createPublishRule"
description: "The \"Create Publish Rules\" request allows you to create publish rules for the workflow of a stack."
url: "https://www.contentstack.com/java-management-workflow-createpublishrule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## createPublishRule

The "Create Publish Rules" request allows you to create publish rules for the workflow of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Specify the unique IDs of the branches for which the publishing rule will be applicable in the schema in the request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.createPublishRule(requestBody).execute();
if (response.isSuccessful) {
	System.out.println("Response" + response);
}
```
