---
title: "LogsAsync"
description: "This call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle."
url: "https://www.contentstack.com/dotnet-management-webhook-logsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## LogsAsync

This call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| executionUid | string | No | — | Execution UID that you receive when you execute the 'Get executions of webhooks' call. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Webhook("<WEBHOOK_UID>").LogsAsync("<EXECUTION_UID>");
```
