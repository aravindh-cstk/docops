---
title: "Create"
description: "The Create request is used to create a management token in a stack. This token provides you with read-write access to the content of your stack."
url: "https://www.contentstack.com/dotnet-management-managementtoken-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Create

The Create request is used to create a management token in a stack. This token provides you with read-write access to the content of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ManagementTokenModel | Yes | — | ManagementToken Model for creating ManagementToken. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Tokens;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ManagementTokenModel model = new ManagementTokenModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ManagementToken("<MANAGEMENT_TOKEN_UID>").Create(model);
```
