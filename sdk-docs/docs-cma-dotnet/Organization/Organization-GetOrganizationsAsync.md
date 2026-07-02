---
title: "GetOrganizationsAsync"
description: "The Get all/single organizations call lists all organizations related to the system user in the order that they were created."
url: "https://www.contentstack.com/dotnet-management-organization-getorganizationsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetOrganizationsAsync

The Get all/single organizations call lists all organizations related to the system user in the order that they were created.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query Parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Organization().GetOrganizationsAsync();
```
