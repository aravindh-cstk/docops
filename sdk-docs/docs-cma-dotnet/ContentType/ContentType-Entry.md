---
title: "Entry"
description: "Entry is the actual piece of content created using one of the defined content types."
url: "https://www.contentstack.com/dotnet-management-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Entry

Entry is the actual piece of content created using one of the defined content types.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional entry uid for performing entry specific operation. |

Returns:
Type
Entry

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry();
```
