---
title: "LogoutAsync"
description: "The Log out of your account call is used to sign out the user of Contentstack account"
url: "https://www.contentstack.com/dotnet-management-contentstackclient-logoutasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## LogoutAsync

The Log out of your account call is used to sign out the user of Contentstack account

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| authtoken | string | No | — | The optional authroken in case user want to logout. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.LogoutAsync();
```
