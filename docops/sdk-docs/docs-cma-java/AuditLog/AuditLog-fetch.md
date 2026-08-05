---
title: "fetch"
description: "The \"Get audit log item\" request is used to retrieve a specific item from the audit log of a stack."
url: "https://www.contentstack.com/java-management-alias-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get audit log item" request is used to retrieve a specific item from the audit log of a stack.

No parameters.

Returns:
Type
Call

```
import contentstack; 
Contentstack contentstack = new Contentstack.Builder().build();
AuditLog auditlog = contentstack.stack().auditLog();
Call<ResponseBody> response = auditlog.fetch().execute();
if (response.isSuccessful){ 
    System.out.println("Response"+ response)
}
```
