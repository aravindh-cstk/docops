---
title: "Fetch"
description: "The Get publish queue activity request returns comprehensive information on a specific publish, unpublish, or delete action that was performed on an entry and/or asset. You can also retrieve details of a specific release deployment."
url: "https://www.contentstack.com/dotnet-management-publishqueue-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Fetch

The Get publish queue activity request returns comprehensive information on a specific publish, unpublish, or delete action that was performed on an entry and/or asset. You can also retrieve details of a specific release deployment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").PublishQueue("<PUBLISH_QUEUE_UID>").Fetch();
```
