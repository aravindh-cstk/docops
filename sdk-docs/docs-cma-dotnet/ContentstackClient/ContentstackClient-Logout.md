---
title: "Logout"
description: "The Log out of your account call is used to sign out the user of Contentstack account"
url: "https://www.contentstack.com/dotnet-management-contentstackclient-logout"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Logout

The Log out of your account call is used to sign out the user of Contentstack account

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| authtoken | string | No | — | The optional auth token in case the user wants to logout. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Logout();
```
