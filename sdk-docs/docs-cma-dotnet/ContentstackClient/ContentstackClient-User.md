---
title: "User"
description: "User session consists of calls that will help you to update user of your Contentstack account."
url: "https://www.contentstack.com/dotnet-management-contentstackclient-user"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## User

User session consists of calls that will help you to update user of your Contentstack account.

No parameters.

Returns:
Type
User

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
User user = client.User();
```
