---
title: "Update"
description: "The Update request lets you update the details of a management token. You can change the name and description of the token, update the stack-level permissions assigned to the token, and change the expiry date of the token (if set)."
url: "https://www.contentstack.com/dotnet-management-managementtoken-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update

The Update request lets you update the details of a management token. You can change the name and description of the token, update the stack-level permissions assigned to the token, and change the expiry date of the token (if set).

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
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ManagementToken("<MANAGEMENT_TOKEN_UID>").Update(model);
```
