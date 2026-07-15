---
title: "FindAll"
description: "The Get all Publish Rules request retrieves the details of all the Publish rules of a workflow."
url: "https://www.contentstack.com/dotnet-management-publishrule-findall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## FindAll

The Get all Publish Rules request retrieves the details of all the Publish rules of a workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Workflow().PublishRule().FindAll();
```
