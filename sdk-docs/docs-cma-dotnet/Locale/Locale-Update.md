---
title: "Update"
description: "The Update language call will let you update the details (such as display name) and the fallback language of an existing language of your stack."
url: "https://www.contentstack.com/dotnet-management-locale-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Update

The Update language call will let you update the details (such as display name) and the fallback language of an existing language of your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | LocaleModel | Yes | — | Locale Model for creating locale. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
LocaleModel model = new LocaleModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Locale("LOCALE_CODE>").Update(model);
```
