---
title: "Update"
description: "The Update Entry call is used to update the content of an existing entry."
url: "https://www.contentstack.com/dotnet-management-entry-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Update

The Update Entry call is used to update the content of an existing entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | IEntry | Yes | — | IEntry for updating entry. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
EntryModel model = new EntryModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("ENTRY_UID").Update(model);
```
