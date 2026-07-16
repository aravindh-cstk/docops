---
title: "Update"
description: "The Update stack call lets you update the name and description of an existing stack."
url: "https://www.contentstack.com/copy-of-dotnet-management-stack-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update

The Update stack call lets you update the name and description of an existing stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | Yes | — | The name for Stack. |
| description | string | No | — | The description for the Stack. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.stack("<API_KEY>")
.Update("<STACK_NAME>", "<DESCRIPTION>");
```
