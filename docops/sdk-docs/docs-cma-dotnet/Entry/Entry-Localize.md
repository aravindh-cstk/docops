---
title: "Localize"
description: "The Localize an entry request allows you to localize an entry i.e., the entry will cease to fetch data from its fallback language and possess independent content specific to the selected locale."
url: "https://www.contentstack.com/dotnet-management-entry-localize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Localize

The Localize an entry request allows you to localize an entry i.e., the entry will cease to fetch data from its fallback language and possess independent content specific to the selected locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | IEntry | Yes | — | Localized IEntry model. |
| locale | string | No | — | Enter the code of the language to unlocalize the entry of that particular language. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
EntryModel model = new EntryModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Localize(model, "hi-in");
```
