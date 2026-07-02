---
title: "find"
description: "The find method retrieves all Global Fields from your stack using a Global Field query, providing access to the complete collection of Global Field data."
url: "https://www.contentstack.com/dotnet-delivery-global-field-query-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The `find` method retrieves all Global Fields from your stack using a Global Field query, providing access to the complete collection of Global Field data.

No parameters.

Returns:
Type
Task<JObject>

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
GlobalFieldQuery query = stack.GlobalFieldQuery();
var result = await query.Find();
Console.WriteLine(result.ToString());
```
