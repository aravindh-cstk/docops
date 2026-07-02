---
title: "Webhook"
description: "A Webhook a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account."
url: "https://www.contentstack.com/dotnet-management-stack-webhook"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Webhook

A Webhook a mechanism that sends real-time information to any third-party app or service to keep your application in sync with your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, webhook uid. |

Returns:
Type
Webhook

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Webhook webhook = client.stack("<API_KEY>").Webhook("<UID>");
```
