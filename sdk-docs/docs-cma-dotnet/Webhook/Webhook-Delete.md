---
title: "Delete"
description: "The Delete webhook call deletes an existing webhook from a stack."
url: "https://www.contentstack.com/dotnet-management-webhook-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Delete

The Delete webhook call deletes an existing webhook from a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Webhook("<WEBHOOK_UID>").Delete();
```
