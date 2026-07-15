---
title: "TransferOwnershipAsync"
description: "The Transfer organization ownership call transfers the ownership of an Organization to another user."
url: "https://www.contentstack.com/dotnet-management-organization-transferownershipasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## TransferOwnershipAsync

The Transfer organization ownership call transfers the ownership of an Organization to another user.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | No | — | The email id of user for transfer. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Organization("<ORG_UID>").TransferOwnershipAsync("<EMAIL>");
```
