---
title: "Create"
description: "The Create a webhook request allows you to create a new webhook in a specific stack."
url: "https://www.contentstack.com/dotnet-management-webhook-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Create

The Create a webhook request allows you to create a new webhook in a specific stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | WebhookModel | Yes | — | Webhook Model for creating Webhook. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
WebhookModel model = new WebhookModel(); 
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Webhook("<WEBHOOK_UID>").Create(model);
```
