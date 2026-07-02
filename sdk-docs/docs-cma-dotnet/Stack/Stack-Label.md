---
title: "Label"
description: "Label allow you to group a collection of content within a stack. Using labels you can group content types that need to work together."
url: "https://www.contentstack.com/dotnet-management-stack-label"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Label

Label allow you to group a collection of content within a stack. Using labels you can group content types that need to work together.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, label uid. |

Returns:
Type
Label

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Label label = client.stack("<API_KEY>").Label("<UID>");
```
