---
title: "RemoveUserAsync"
description: "The Remove users from organization request allows you to remove existing users from your organization."
url: "https://www.contentstack.com/dotnet-management-organization-removeuserasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## RemoveUserAsync

The Remove users from organization request allows you to remove existing users from your organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| emails | List<string> | No | — | List of emails to be remove from the Organization. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Organization("<ORG_UID>").RemoveUserAsync(new List() { "<EMAIL>" });
```
