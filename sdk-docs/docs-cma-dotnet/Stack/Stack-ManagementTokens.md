---
title: "ManagementTokens"
description: "You can use ManagementToken to authenticate Content Management API (CMA) requests over your stack content."
url: "https://www.contentstack.com/dotnet-management-stack-managementtokens"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ManagementTokens

You can use ManagementToken to authenticate Content Management API (CMA) requests over your stack content.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, management uid. |

Returns:
Type
ManagementToken

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ManagementToken managementTokens = client.stack("<API_KEY>").ManagementTokens("<UID>");
```
