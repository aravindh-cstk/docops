---
title: "Publish"
description: "The Publish an entry request lets you publish an entry either immediately or schedule it for a later date/time."
url: "https://www.contentstack.com/dotnet-management-entry-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Publish

The Publish an entry request lets you publish an entry either immediately or schedule it for a later date/time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| details | PublishUnpublishDetails | Yes | — | Publish details for publishing entry. |
| locale | string | No | — | Locale for which entry to be published. |
| apiVersion | string | No | — | API version to pass in headers. Pass the value 3.2 to use latest Publish API. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
PublishUnpublishDetails details = new PublishUnpublishDetails();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Publish(details, "en-us", apiVersion: "3.2");
```
