---
title: "environment"
description: "A publishing environment corresponds to one or more deployment servers or a content delivery destination where the entries need to be published."
url: "https://www.contentstack.com/java-management-stack-environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## environment

A publishing environment corresponds to one or more deployment servers or a content delivery destination where the entries need to be published.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| environmentUid | String | Yes | — | The environment UID |

Returns:
Type
Environment

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.environment("environmentUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
