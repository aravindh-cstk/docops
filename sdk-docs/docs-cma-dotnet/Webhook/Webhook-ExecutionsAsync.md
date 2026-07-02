---
title: "ExecutionsAsync"
description: "The Get executions of a webhook request allows you to fetch the execution details of a specific webhook, which includes the execution UID."
url: "https://www.contentstack.com/dotnet-management-webhook-executionsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ExecutionsAsync

The Get executions of a webhook request allows you to fetch the execution details of a specific webhook, which includes the execution UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Webhook("<WEBHOOK_UID>").ExecutionsAsync();
```
