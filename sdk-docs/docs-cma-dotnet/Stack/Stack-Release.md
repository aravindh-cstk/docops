---
title: "Release"
description: "A Release is a set of entries and assets that needs to be deployed (published or unpublished) all at once to a particular environment."
url: "https://www.contentstack.com/dotnet-management-stack-release"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Release

A Release is a set of entries and assets that needs to be deployed (published or unpublished) all at once to a particular environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, release uid. |

Returns:
Type
Release

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Release release = client.stack("<API_KEY>").Release("<UID>");
```
