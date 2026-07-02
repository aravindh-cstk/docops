---
title: "FetchAsync"
description: "The Get audit log item request is used to retrieve a specific item from the audit log of a stack."
url: "https://www.contentstack.com/dotnet-management-auditlog-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## FetchAsync

The Get audit log item request is used to retrieve a specific item from the audit log of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").AuditLog("<AUDITLOG_UID>").FetchAsync();
```
