---
title: "CancelAsync"
description: "The Cancel Scheduled Action request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and also cancel the deployment of releases."
url: "https://www.contentstack.com/dotnet-management-publishqueue-cancelasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CancelAsync

The Cancel Scheduled Action request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and also cancel the deployment of releases.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").PublishQueue("<PUBLISH_QUEUE_UID>").CancelAsync();
```
