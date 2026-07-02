---
title: "Logs"
description: "This call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle."
url: "https://www.contentstack.com/dotnet-management-webhook-logs"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Logs

This call will return a comprehensive detail of all the webhooks that were executed at a particular execution cycle.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| executionUid | string | No | — | Execution UID that you receive when you execute the 'Get executions of webhooks' call. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Webhook("<WEBHOOK_UID>").Logs("<EXECUTION_UID>");
```
