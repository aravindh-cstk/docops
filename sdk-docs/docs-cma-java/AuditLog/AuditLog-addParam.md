---
title: "addParam"
description: "Sets header for the request."
url: "https://www.contentstack.com/java-management-auditlog-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

Sets header for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Header key for the request. |
| value | Object | Yes | — | Header value for the request. |

Returns:
Type
Void

```
import contentstack; 
Contentstack contentstack = new Contentstack</span>.Builder().build();
AuditLog auditlog = contentstack.stack().auditLog();
response = auditlog.addParam("key", value)
```
