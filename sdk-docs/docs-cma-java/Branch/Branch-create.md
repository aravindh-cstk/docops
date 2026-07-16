---
title: "create"
description: "The \"Create a branch\" request creates a new branch in a particular stack of your organization."
url: "https://www.contentstack.com/java-management-branch-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The "Create a branch" request creates a new branch in a particular stack of your organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Branch branch = contentstack.stack().branch();
Call<responsebody> response = branch.create("body");
if (response.isSuccessful) { 
    System.out.println("Response" + response)
}
```
