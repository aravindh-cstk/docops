---
title: "GetPublishRule"
description: "The Get Publish Rules by Content Types request allows you to retrieve details of a Publish Rule applied to a specific content type of your stack."
url: "https://www.contentstack.com/dotnet-management-workflow-getpublishrule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetPublishRule

The Get Publish Rules by Content Types request allows you to retrieve details of a Publish Rule applied to a specific content type of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentType | string | Yes | — | ContentType for getting publish rules. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Workflow().GetPublishRule("CONTENT_TYPE_UID")
```
