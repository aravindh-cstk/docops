---
title: "PublishRule"
description: "PublishRule is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly."
url: "https://www.contentstack.com/dotnet-management-workflow-publishrule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## PublishRule

PublishRule is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional Publish rule uid for performing rule specific operation |

Returns:
Type
PublishRule

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Workflow().PublishRule("<ENTRY_UID>")
```
