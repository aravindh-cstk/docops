---
title: "ContentstackConfig"
description: ""
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/contentstackconfig"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# ContentstackConfig

## ContentstackConfig

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| dateDecodingStrategy | JSONDecoder.DateDecodingStrategy | No | — | An optional configuration to override the date decoding strategy that is provided by the the SDK. |
| timeZone | TimeZone | No | — | An optional configuration to override the TimeZone the SDK will use to decode Date instances. The SDK will use a TimeZone with 0 seconds offset from GMT if this configuration is omitted. |
| sessionConfiguration | URLSessionConfiguration | No | — | The configuration for the URLSession. Note that HTTP headers will be overwritten internally by the SDK so that requests can be authorized correctly. |
