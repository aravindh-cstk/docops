---
title: "Create"
description: "The Create stack call creates a new stack in your Contentstack account."
url: "https://www.contentstack.com/dotnet-management-stack-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Create

The Create stack call creates a new stack in your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | Yes | — | The name for Stack. |
| masterLocale | string | Yes | — | The Master Locale for Stack |
| organisationUid | string | Yes | — | The Organization Uid in which you want to create Stack. |
| description | string | No | — | The description for the Stack. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.stack("<API_KEY>")
.Create("<STACK_NAME>", "<LOCALE>", "<ORG_UID>", "<DESCRIPTION>");
```
