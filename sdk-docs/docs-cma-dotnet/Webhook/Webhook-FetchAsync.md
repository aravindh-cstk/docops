---
title: "FetchAsync"
description: "The Fetch webhook request returns comprehensive information on a specific webhook."
url: "https://www.contentstack.com/dotnet-management-webhook-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## FetchAsync

The Fetch webhook request returns comprehensive information on a specific webhook.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Webhook("<WEBHOOK_UID>").FetchAsync();
```
