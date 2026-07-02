---
title: "create"
description: "The create role method adds a new role to your stack."
url: "https://www.contentstack.com/java-management-roles-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The create role method adds a new role to your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The body should be of a JSONObject type |

Returns:
Type
call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Roles roles = contentstack.stack().roles();
Call<ResponseBody> response = roles.create(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println(response.body().string());
} else {
    System.out.println(response.errorBody().string());
}
```
