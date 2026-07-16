---
title: "Create"
description: "The Create a content type call creates a new content type in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/dotnet-management-contenttype-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Create

The Create a content type call creates a new content type in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ContentModelling | Yes | — | ContentModelling for creating Content Type. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentModelling model = new ContentModelling();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType().Create(model);
```
