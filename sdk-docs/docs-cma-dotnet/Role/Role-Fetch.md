---
title: "Fetch"
description: "The Fetch request returns comprehensive information on a specific role."
url: "https://www.contentstack.com/dotnet-management-role-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Fetch

The Fetch request returns comprehensive information on a specific role.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Role("<ROLE_UID>").Fetch();
```
