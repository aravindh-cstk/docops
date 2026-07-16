---
title: "getContentTypes"
description: "This method returns comprehensive information of all the content types of a particular stack in your account."
url: "https://www.contentstack.com/get-contenttypes"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getContentTypes

This method returns comprehensive information of all the content types of a particular stack in your account.

No parameters.

Returns:
Type
Promise

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
Const result = await Stack.getContentTypes({"include_global_field_schema": true});
```
