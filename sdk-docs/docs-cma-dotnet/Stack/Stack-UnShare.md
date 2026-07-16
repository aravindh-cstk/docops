---
title: "UnShare"
description: "The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators."
url: "https://www.contentstack.com/dotnet-management-stack-unshare"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## UnShare

The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | User email to be removed from stack. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.stack("<API_KEY>")
.UnShare("<EMAIL>");
```
