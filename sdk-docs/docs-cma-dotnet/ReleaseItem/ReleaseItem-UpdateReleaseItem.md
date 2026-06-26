---
title: "UpdateReleaseItem"
description: "The Update Release items to their latest versions request let you update all the release items (entries and assets) to their latest versions before deployment."
url: "https://www.contentstack.com/dotnet-management-releaseitem-updatereleaseitem"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## UpdateReleaseItem

The Update Release items to their latest versions request let you update all the release items (entries and assets) to their latest versions before deployment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| items | List<String> | Yes | — | Release items to update or "$all" for updating all release items. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
List<string> items = new List<string>(){
  "<$all>"
}
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Release("<RELEASE_UID>").Item().UpdateReleaseItem(model);
```
