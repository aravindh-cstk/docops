---
title: "find"
description: "The \"Get audit log\" request is used to retrieve the audit log of a stack."
url: "https://www.contentstack.com/java-management-auditlog-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The "Get audit log" request is used to retrieve the audit log of a stack.

No parameters.

Returns:
Type
Call

```
import contentstack; 
Contentstack contentstack = new Contentstack.Builder().build();
AuditLog auditlog = contentstack.stack().auditLog();
Call<ResponseBody> response = auditlog.find().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response)
}
```
