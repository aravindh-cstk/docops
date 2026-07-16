---
title: "CreateAsync"
description: "The Create Publish Rules request allows you to create publish rules for the workflow of a stack."
url: "https://www.contentstack.com/dotnet-management-publishrule-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## CreateAsync

The Create Publish Rules request allows you to create publish rules for the workflow of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | PublishRuleModel | Yes | — | P ublishRule Model for creating rule. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
PublishRuleModel model = new PublishRuleModel(); 
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow().PublishRule().CreateAsync(model);
```
