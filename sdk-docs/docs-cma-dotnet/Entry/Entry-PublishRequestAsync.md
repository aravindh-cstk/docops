---
title: "PublishRequestAsync"
description: "This multipurpose request allows you to either send a publish request or accept/reject a received publish request."
url: "https://www.contentstack.com/dotnet-management-entry-publishrequestasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## PublishRequestAsync

This multipurpose request allows you to either send a publish request or accept/reject a received publish request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| action | EntryPublishAction | Yes | — | EntryPublishAction for setting entry to publish request. |
| collection | ParameterCollection | No | — | Query parameter. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
EntryPublishAction model = new EntryPublishAction();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").PublishRequestAsync(model);
```
