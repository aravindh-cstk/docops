---
title: "Folder"
description: "The Folder allows to fetch and create folders in assets."
url: "https://www.contentstack.com/dotnet-management-asset-folder"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Folder

The Folder allows to fetch and create folders in assets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional folder unique id. |

Returns:
Type
Folder

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Folder folder = client.Stack("<API_KEY>").Asset().Folder();
```
