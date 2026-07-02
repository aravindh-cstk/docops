---
title: "Query"
description: "The Query Webhooks request returns comprehensive information on all the available webhooks in the specified stack."
url: "https://www.contentstack.com/dotnet-management-webhook-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Query

The Query Webhooks request returns comprehensive information on all the available webhooks in the specified stack.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack("<API_KEY>").Webhook().Query();
```
