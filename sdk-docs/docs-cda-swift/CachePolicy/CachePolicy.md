---
title: "CachePolicy"
description: "The cache policies allow you to define the source from where the SDK will retrieve the content."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/cachepolicy"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# CachePolicy

## CachePolicy

The cache policies allow you to define the source from where the SDK will retrieve the content.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| networkOnly | CachePolicy | No | — | The SDK retrieves data through a network call, and saves the retrieved data in the cache. This is set as the default policy. |
| cacheOnly | CachePolicy | No | — | The SDK gets data from the cache. |
| cacheElseNetwork | CachePolicy | No | — | The SDK gets data from the cache. However, if it fails to retrieve data from the cache, it makes a network call. |
| networkElseCache | CachePolicy | No | — | The SDK gets data using a network call. However, if the call fails, it retrieves data from cache. |
| cacheThenNetwork | CachePolicy | No | — | The SDK gets data from cache, and then makes a network call. (A success callback will be invoked twice. |
