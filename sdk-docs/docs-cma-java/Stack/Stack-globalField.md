---
title: "globalField"
description: "A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and effort) to create the same set of fields repeatedly in multiple content types."
url: "https://www.contentstack.com/java-management-stack-globalfield"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## globalField

A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and effort) to create the same set of fields repeatedly in multiple content types.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| globalFiledUid | String | No | — | The globalField UID. |

Returns:
Type
Instance of Extensions

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.globalField("globalFiledUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
