---
title: "IncludeGlobalFieldSchema"
description: "The `IncludeGlobalFieldSchema` method includes the complete schema for each Global Field when fetching all Global Fields using a query."
url: "https://www.contentstack.com/dotnet-delivery-global-field-query-includeglobalfieldschema"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## IncludeGlobalFieldSchema

The `IncludeGlobalFieldSchema` method includes the complete schema for each Global Field when fetching all Global Fields using a query.

No parameters.

Returns:
Type
GlobalFieldQuery

**Example:**

```
using Contentstack.Core;
using Contentstack.Core.Configuration;
var options = new ContentstackOptions()
{
   ApiKey = "your_api_key",
   DeliveryToken = "your_delivery_token",
   Environment = "your_environment"
};
ContentstackClient stack = new ContentstackClient(options);
var result = await stack.GlobalFieldQuery()
   .IncludeGlobalFieldSchema()
   .Find();
```
