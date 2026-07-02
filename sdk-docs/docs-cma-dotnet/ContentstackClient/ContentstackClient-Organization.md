---
title: "Organization"
description: "Organization the top-level entity in the hierarchy of Contentstack, consisting of stacks and stack resources, and users. Organization allows easy management of projects as well as users within the Organization."
url: "https://www.contentstack.com/dotnet-management-contentstackclient-organization"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Organization

Organization the top-level entity in the hierarchy of Contentstack, consisting of stacks and stack resources, and users. Organization allows easy management of projects as well as users within the Organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Organization uid for specific org. |

Returns:
Type
Organization

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Organization organization = client.Organization();
```
