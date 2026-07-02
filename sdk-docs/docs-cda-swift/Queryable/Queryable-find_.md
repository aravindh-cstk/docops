---
title: "find(_:)"
description: "This is a generic find method which can be used to fetch collections of ContentType , Entry , and Asset instances. Note: By default, the limit for response details per request is 100, with the maximum limit set at 250."
url: "https://www.contentstack.com/swift-queryable-find-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find(_:)

This is a generic find method which can be used to fetch collections of **ContentType**, **Entry**, and **Asset** instances.

**Note:** By default, the limit for response details per request is 100, with the maximum limit set at 250.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completion | ResultsHandler<ContentstackResponse<ResourceType>> | Yes | — | A handler which will be called on completion of the operation. |

Returns:
Type
void
