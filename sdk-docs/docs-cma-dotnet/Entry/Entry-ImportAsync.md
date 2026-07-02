---
title: "ImportAsync"
description: "The Import an entry call is used to import an entry. To import an entry, you need to upload a JSON file that has entry data in the format that fits the schema of the content type it is being imported to."
url: "https://www.contentstack.com/dotnet-management-entry-importasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ImportAsync

The Import an entry call is used to import an entry. To import an entry, you need to upload a JSON file that has entry data in the format that fits the schema of the content type it is being imported to.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filePath | string | Yes | — | Path to file you want to import. |
| collection | ParameterCollection | No | — | Query parameter. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").ImportAsync("PATH/TO/FILE");
```
