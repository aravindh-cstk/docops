---
title: "Locales"
description: "The Get languages of an entry call returns the details of all the languages that an entry exists in."
url: "https://www.contentstack.com/dotnet-management-entry-locales"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Locales

The Get languages of an entry call returns the details of all the languages that an entry exists in.

No parameters.

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Locales();
```
