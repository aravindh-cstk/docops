---
title: "deletePublishRule"
description: "The \"Delete Publish Rules\" request allows you to delete an existing publish rule."
url: "https://www.contentstack.com/copy-of-java-management-workflow-deletepublishrule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## deletePublishRule

The "Delete Publish Rules" request allows you to delete an existing publish rule.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| ruleUid | String | Yes | — | The UID of the published rule that you want to delete. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.deletePublishRule("ruleUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
