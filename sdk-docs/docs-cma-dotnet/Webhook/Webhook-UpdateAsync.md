---
title: "UpdateAsync"
description: "The Update webhook request allows you to update the details of an existing webhook in the stack."
url: "https://www.contentstack.com/dotnet-management-webhook-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## UpdateAsync

The Update webhook request allows you to update the details of an existing webhook in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | WebhookModel | Yes | — | Webhook Model for creating Webhook. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
WebhookModel model = new WebhookModel(); 
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Webhook("<WEBHOOK_UID>").UpdateAsync(model);
```
