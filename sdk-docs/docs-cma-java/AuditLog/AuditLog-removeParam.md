---
title: "removeParam"
description: "Set header for the request."
url: "https://www.contentstack.com/java-management-alias-removeparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeParam

Set header for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | header key for the request |

Returns:
Type
Void

```
import contentstack; 
Contentstack contentstack = new Contentstack.Builder().build();
AuditLog auditlog = contentstack.stack().auditLog();
response = auditlog.removeParam("key")
```
