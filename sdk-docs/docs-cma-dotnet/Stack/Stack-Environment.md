---
title: "Environment"
description: "A publishing Environment corresponds to one or more deployment servers or a content delivery destination where the entries need to be published."
url: "https://www.contentstack.com/dotnet-management-stack-environment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Environment

A publishing Environment corresponds to one or more deployment servers or a content delivery destination where the entries need to be published.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, extension uid. |

Returns:
Type
Environment

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Environment environment = client.stack("<API_KEY>").Environment("<UID>");
```
