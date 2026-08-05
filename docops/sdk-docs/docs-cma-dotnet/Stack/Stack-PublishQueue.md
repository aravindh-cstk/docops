---
title: "PublishQueue"
description: "A PublishQueue displays the historical and current details of activities such as publish, unpublish, or delete that can be performed on entries and/or assets. It also shows details of Release deployments. These details include time, entry, content type, version, language, user, environment, and status."
url: "https://www.contentstack.com/dotnet-management-stack-publishqueue"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## PublishQueue

A PublishQueue displays the historical and current details of activities such as publish, unpublish, or delete that can be performed on entries and/or assets. It also shows details of Release deployments. These details include time, entry, content type, version, language, user, environment, and status.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, publish queue uid. |

Returns:
Type
PublishQueue

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
PublishQueue PublishQueue = client.stack("<API_KEY>").PublishQueue("<UID>");
```
