---
title: "TransferOwnership"
description: "The Transfer organization ownership call transfers the ownership of an Organization to another user."
url: "https://www.contentstack.com/dotnet-management-organization-transferownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## TransferOwnership

The Transfer organization ownership call transfers the ownership of an Organization to another user.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | No | — | The email id of user for transfer. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Organization("<ORG_UID>").TransferOwnership("<EMAIL>");
```
