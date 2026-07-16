---
title: "DeleteAsync"
description: "The Delete Publish Rules request allows you to delete an existing publish rule."
url: "https://www.contentstack.com/dotnet-management-publishrule-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## DeleteAsync

The Delete Publish Rules request allows you to delete an existing publish rule.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow().PublishRule("<PUBLISH_RULE_UID>").DeleteAsync();
```
