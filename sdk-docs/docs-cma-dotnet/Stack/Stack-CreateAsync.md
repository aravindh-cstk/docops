---
title: "CreateAsync"
description: "The Create stack call creates a new stack in your Contentstack account."
url: "https://www.contentstack.com/dotnet-management-stack-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CreateAsync

The Create stack call creates a new stack in your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | Yes | — | The name for Stack. |
| masterLocale | string | Yes | — | The Master Locale for Stack |
| organisationUid | string | Yes | — | The Organization Uid in which you want to create Stack. |
| description | string | No | — | The description for the Stack. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.stack("<API_KEY>")
.CreateAsync("<STACK_NAME>", "<LOCALE>", "<ORG_UID>", "<DESCRIPTION>");
```
