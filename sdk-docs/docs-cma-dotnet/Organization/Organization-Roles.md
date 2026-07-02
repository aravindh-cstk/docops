---
title: "Roles"
description: "The Get all roles in an organization call gives the details of all the roles that are set to users in an Organization."
url: "https://www.contentstack.com/dotnet-management-organization-roles"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Roles

The Get all roles in an organization call gives the details of all the roles that are set to users in an Organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query Parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Organization("<ORG_UID>").Roles();
```
