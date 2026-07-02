---
title: "FetchAsync"
description: "The fetch Publish Rule request retrieves the comprehensive details of a specific publish rule of a Workflow."
url: "https://www.contentstack.com/dotnet-management-publishrule-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## FetchAsync

The fetch Publish Rule request retrieves the comprehensive details of a specific publish rule of a Workflow.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow().PublishRule("<PUBLISH_RULE_UID>").FetchAsync();
```
