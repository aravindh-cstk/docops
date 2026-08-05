---
title: "ContentstackResponse"
description: "This is the result of any request of collection from Contentstack."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/contentstackresponse"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ContentstackResponse

## ContentstackResponse

This is the result of any request of collection from Contentstack.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| items | [ItemType] | No | — | The resources which are part of the array response. |
| limit | UInt | No | — | The maximum number of resources originally requested. |
| skip | UInt | No | — | The number of elements skipped when performing the request. |
| count | UInt | No | — | The total number of resources which matched the original request. |
| fields | [String : Any] | No | — | The dictionary of fields from the response that are included in API request. |
