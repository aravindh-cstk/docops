---
title: "content_types"
description: "This method returns comprehensive information of all the content types of a particular stack in your account."
url: "https://www.contentstack.com/ruby-client-content_types"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## content_types

This method returns comprehensive information of all the content types of a particular stack in your account.

No parameters.

Returns:
Type
Client

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@content_types = @stack.content_types;
```
