---
title: "References"
description: "The References method retrieves the details of the entries and the content types in which the specified asset is referenced."
url: "https://www.contentstack.com/dotnet-management-asset-references"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## References

The `References` method retrieves the details of the entries and the content types in which the specified asset is referenced.

No parameters.

Returns:
Type
ContentstackResponse

Example:

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;


ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");


ContentstackResponse contentstackResponse = client
.Stack("<API_KEY>")
.Asset("<ASSET_UID>")
.References();
```
