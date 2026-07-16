---
title: "auditLog"
description: "An audit log displays a record of all the activities performed in a stack and helps you track all published items, updates, deletes, and the current status of the existing content."
url: "https://www.contentstack.com/java-management-stack-auditlog"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## auditLog

An audit log displays a record of all the activities performed in a stack and helps you track all published items, updates, deletes, and the current status of the existing content.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| logItemUid | String | No | — | The log Item Uid. |

Returns:
Type
AuditLog

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.auditLog("logItemUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
