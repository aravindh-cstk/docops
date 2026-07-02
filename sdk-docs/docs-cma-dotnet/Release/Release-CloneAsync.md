---
title: "CloneAsync"
description: "The Clone request allows you to clone (make a copy of) a specific Release in a stack."
url: "https://www.contentstack.com/dotnet-management-release-cloneasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CloneAsync

The Clone request allows you to clone (make a copy of) a specific Release in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | Yes | — | Name for the release to be cloned. |
| description | string | No | — | Description for the release to be cloned. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Release("<RELEASE_UID>").CloneAsync("<NAME>", "<DESCRIPTION>");
```
