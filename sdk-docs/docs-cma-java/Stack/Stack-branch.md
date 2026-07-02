---
title: "branch"
description: "Branches allow you to isolate and easily manage your in-progress work from your stable, live work in the production environment. It helps multiple development teams to work in parallel in a more collaborative, organized, and structured manner without impacting each other."
url: "https://www.contentstack.com/java-management-stack-branch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## branch

Branches allow you to isolate and easily manage your in-progress work from your stable, live work in the production environment. It helps multiple development teams to work in parallel in a more collaborative, organized, and structured manner without impacting each other.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| branchUid | String | No | — | The unique ID of the branch of which you want to retrieve the details. |

Returns:
Type
Branch

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.branch("branchUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
