---
title: "Export"
description: "The Export an entry call is used to export an entry. The exported entry data is saved in a downloadable JSON file."
url: "https://www.contentstack.com/dotnet-management-entry-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Export

The Export an entry call is used to export an entry. The exported entry data is saved in a downloadable JSON file.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filePath | string | Yes | — | Path to file you want to export entry. |
| collection | ParameterCollection | No | — | Query parameter. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Export("PATH/TO/FILE");
```
