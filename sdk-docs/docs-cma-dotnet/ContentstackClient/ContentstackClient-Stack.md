---
title: "Stack"
description: "Stack is a space that stores the content of a project (a web or mobile property). Within a stack, you can create content structures, content entries, users, etc. related to the project."
url: "https://www.contentstack.com/dotnet-management-contentstackclient-stack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Stack

Stack is a space that stores the content of a project (a web or mobile property). Within a stack, you can create content structures, content entries, users, etc. related to the project.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | string | No | — | Stack API Key. |
| managementToken | string | No | — | Stack Management token |
| branchUid | string | No | — | Branch uid for querying specific branch of stack. |

Returns:
Type
Stack

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Stack Stack = client.Stack("<API_KEY>");
```
