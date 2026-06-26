---
title: "updatePublishRule"
description: "The \"Add or Update Publish Rules\" request allows you to add a publishing rule or update the details of the existing publishing rules of a workflow."
url: "https://www.contentstack.com/java-management-workflow-updatepublishrule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## updatePublishRule

The "Add or Update Publish Rules" request allows you to add a publishing rule or update the details of the existing publishing rules of a workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| ruleUid | String | Yes | — | The UID of the publishing rule that you want to update. |
| requestBody |  | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.updatePublishRule("ruleUid", requestBody).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
