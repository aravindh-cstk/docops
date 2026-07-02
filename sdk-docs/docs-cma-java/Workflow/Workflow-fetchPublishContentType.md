---
title: "fetchPublishContentType"
description: "The \"Get Publish Rules by Content Types\" request allows you to retrieve details of a Publish Rule applied to a specific content type of your stack."
url: "https://www.contentstack.com/java-management-workflow-fetchpublishrules"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchPublishContentType

The "Get Publish Rules by Content Types" request allows you to retrieve details of a Publish Rule applied to a specific content type of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeUid | String | Yes | — | The UID of the content type of which you want to retrieve the Publishing Rule. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Workflow workflow = contentstack.stack().workflow();
Call<ResponseBody> response = workflow.fetchPublishRuleContentType("contentTypeUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
