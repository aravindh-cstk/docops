---
title: "Role"
description: "A Role collection of permissions that will be applicable to all the users who are assigned this role."
url: "https://www.contentstack.com/dotnet-management-stack-role"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Role

A Role collection of permissions that will be applicable to all the users who are assigned this role.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, role uid. |

Returns:
Type
Role

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Role role = client.stack("<API_KEY>").Role("<WORKFLOW_UID>");
```
