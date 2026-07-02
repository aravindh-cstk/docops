---
title: "AuditLog"
description: "A AuditLog displays a record of all the activities performed in a stack and helps you keep a track of all published items, updates, deletes, and current status of the existing content."
url: "https://www.contentstack.com/dotnet-management-stack-auditlog"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## AuditLog

A AuditLog displays a record of all the activities performed in a stack and helps you keep a track of all published items, updates, deletes, and current status of the existing content.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, content type uid. |

Returns:
Type
AuditLog

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
AuditLog auditLog = client.stack("<API_KEY>").AuditLog("<UID>");
```
