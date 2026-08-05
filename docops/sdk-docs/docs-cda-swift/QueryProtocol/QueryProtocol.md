---
title: "QueryProtocol"
description: "A base Query protocol which holds the essentials shared by all query types in the SDK which enable querying against content types, entries and assets."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/queryprotocol"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# QueryProtocol

## QueryProtocol

A base Query protocol which holds the essentials shared by all query types in the SDK which enable querying against content types, entries and assets.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| stack | Stack | No | — | The Stack instance to perform operation. |
| parameters | [String : Any] | No | — | The parameters dictionary that are converted to `URLComponents`. |
| queryParameter | [String : Any] | No | — | The Query parameters dictionary that are converted to `URLComponents`. |
| cachePolicy | CachePolicy | No | — | The cachePolicy that is use for fetching entity. |
