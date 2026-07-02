---
title: "UnShareAsync"
description: "The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators."
url: "https://www.contentstack.com/dotnet-management-stack-unshareasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## UnShareAsync

The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | User email to be removed from stack. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.stack("<API_KEY>")
.UnShareAsync("<EMAIL>");
```
