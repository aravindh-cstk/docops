---
title: "GetUser"
description: "The Get user call returns comprehensive information of an existing user account."
url: "https://www.contentstack.com/dotnet-management-contentstackclient-getuser"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetUser

The Get user call returns comprehensive information of an existing user account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | Yes | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.GetUser();
```
