---
title: "Unpublish"
description: "The Unpublish an entry call will unpublish an entry at once, and also, gives you the provision to unpublish an entry automatically at a later date/time."
url: "https://www.contentstack.com/dotnet-management-entry-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Unpublish

The Unpublish an entry call will unpublish an entry at once, and also, gives you the provision to unpublish an entry automatically at a later date/time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| details | PublishUnpublishDetails | Yes | — | Publish details for un-publishing entry. |
| locale | string | No | — | Locale for which entry to be un-published. |
| apiVersion | string | No | — | API version to pass in headers. Pass the value 3.2 to use latest Unpublish API. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
PublishUnpublishDetails details = new PublishUnpublishDetails();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Unpublish(details, "en-us", apiVersion: "3.2");
```
