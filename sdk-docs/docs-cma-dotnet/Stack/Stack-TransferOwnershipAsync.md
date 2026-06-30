---
title: "TransferOwnershipAsync"
description: "The Transfer stack ownership to other users call sends the specified user an email invitation for accepting the ownership of a particular stack."
url: "https://www.contentstack.com/dotnet-management-stack-transferownershipasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## TransferOwnershipAsync

The Transfer stack ownership to other users call sends the specified user an email invitation for accepting the ownership of a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | User email to transfer the stack ownership. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.stack("<API_KEY>")
.TransferOwnershipAsync("<EMAIL>");
```
