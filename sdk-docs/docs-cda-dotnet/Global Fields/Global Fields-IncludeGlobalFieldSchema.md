---
title: "IncludeGlobalFieldSchema"
description: "The IncludeGlobalFieldSchema method fetches the complete schema of a specified Global Field, including all nested fields and configurations"
url: "https://www.contentstack.com/dotnet-delivery-global-field-includeglobalfieldschema"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## IncludeGlobalFieldSchema

The `IncludeGlobalFieldSchema` method fetches the complete schema of a specified Global Field, including all nested fields and configurations

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
GlobalField globalField = stack.GlobalField("global_field_uid")
   .IncludeGlobalFieldSchema()
   .Fetch();
```
