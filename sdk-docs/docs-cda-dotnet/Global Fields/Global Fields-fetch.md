---
title: "fetch"
description: "The fetch method retrieves the details of the specified global field."
url: "https://www.contentstack.com/dotnet-delivery-global-field-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The `fetch` method retrieves the details of the specified global field.

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
GlobalField globalField = stack.GlobalField("global_field_uid");
var result = await globalField.Fetch();
Console.WriteLine(result.ToString());
```
