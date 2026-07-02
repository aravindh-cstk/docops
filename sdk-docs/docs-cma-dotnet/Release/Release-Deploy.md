---
title: "Deploy"
description: "The Fetch request gets the details of a specific Release in a stack."
url: "https://www.contentstack.com/dotnet-management-release-deploy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Deploy

The Fetch request gets the details of a specific Release in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | DeployModel | No | — | DeployModel details to deploy the release. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
DeployModel model = new DeployModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Release("<RELEASE_UID>").Deploy(model);;
```
