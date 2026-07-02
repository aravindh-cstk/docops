---
title: "SetHeader"
description: "The SetHeader method sets custom headers when fetching a Global Field, allowing you to pass additional information such as authentication tokens, localization settings, or custom metadata with the API request."
url: "https://www.contentstack.com/dotnet-delivery-global-field-setheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SetHeader

The `SetHeader` method sets custom headers when fetching a Global Field, allowing you to pass additional information such as authentication tokens, localization settings, or custom metadata with the API request.

No parameters.

Returns:
Type
JObject

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
globalField.SetHeader("custom_key", "custom_value");
var result = await globalField.Fetch();
```
